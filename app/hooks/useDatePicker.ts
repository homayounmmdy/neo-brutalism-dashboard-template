"use client";
import React, {
   useCallback,
   useEffect,
   useMemo,
   useRef,
   useState,
} from "react";
import {
   addDays,
   addMonths,
   getCalendarDays,
   isSameDay,
   parseISO,
   startOfDay,
   toISO,
} from "@/app/utils/date";

/* =====================================================================
 * Picker-specific helpers (private to this file)
 * ===================================================================== */

const isSameMonth = (a: Date, b: Date) =>
   a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();

const isDateInRange = (d: Date, min?: string, max?: string): boolean => {
   const day = startOfDay(d);
   const minDate = parseISO(min);
   const maxDate = parseISO(max);
   if (minDate && day < startOfDay(minDate)) return false;
   if (maxDate && day > startOfDay(maxDate)) return false;
   return true;
};

const formatMonthLabel = (d: Date): string =>
   d.toLocaleDateString(undefined, { month: "long", year: "numeric" });

const formatAriaDate = (d: Date): string =>
   d.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
   });

const getNextFocusDate = (cur: Date, key: string): Date | null => {
   switch (key) {
      case "ArrowLeft":
         return addDays(cur, -1);
      case "ArrowRight":
         return addDays(cur, 1);
      case "ArrowUp":
         return addDays(cur, -7);
      case "ArrowDown":
         return addDays(cur, 7);
      case "Home":
         return addDays(cur, -cur.getDay());
      case "End":
         return addDays(cur, 6 - cur.getDay());
      case "PageUp":
         return addMonths(cur, -1);
      case "PageDown":
         return addMonths(cur, 1);
      default:
         return null;
   }
};

/* =====================================================================
 * Hook
 * ===================================================================== */

interface UseDatePickerOptions {
   value?: string;
   onChange?: (v: string) => void;
   min?: string;
   max?: string;
}

export function useDatePicker({
   value,
   onChange,
   min,
   max,
}: UseDatePickerOptions) {
   /* ---------- controlled / uncontrolled value (was useControllableValue) */
   const isControlled = value !== undefined;
   const [internal, setInternal] = useState<string>("");
   const currentValue = isControlled ? value : internal;

   const setValue = useCallback(
      (v: string) => {
         if (!isControlled) setInternal(v);
         onChange?.(v);
      },
      [isControlled, onChange]
   );

   /* ---------- picker state ---------- */
   const [open, setOpen] = useState(false);
   const [viewDate, setViewDate] = useState<Date>(
      () => parseISO(currentValue) ?? new Date()
   );

   const wrapRef = useRef<HTMLDivElement>(null);
   const triggerRef = useRef<HTMLButtonElement>(null);
   const gridRef = useRef<HTMLDivElement>(null);

   const selected = parseISO(currentValue);
   const today = startOfDay(new Date());

   const isDayDisabled = useCallback(
      (d: Date) => !isDateInRange(d, min, max),
      [min, max]
   );

   const closeAndFocusTrigger = useCallback(() => {
      setOpen(false);
      triggerRef.current?.focus();
   }, []);

   /* ---------- open: sync view + focus selected/today ---------- */
   useEffect(() => {
      if (!open) return;
      const focus = selected ?? new Date();
      setViewDate(focus);
      requestAnimationFrame(() => {
         gridRef.current
            ?.querySelector<HTMLButtonElement>(`[data-date="${toISO(focus)}"]`)
            ?.focus();
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [open]);

   /* ---------- dismiss: outside click + Escape (was useDismiss) ---------- */
   useEffect(() => {
      if (!open) return;
      const onDown = (e: MouseEvent) => {
         if (!wrapRef.current?.contains(e.target as Node))
            closeAndFocusTrigger();
      };
      const onKey = (e: KeyboardEvent) => {
         if (e.key === "Escape") closeAndFocusTrigger();
      };
      document.addEventListener("mousedown", onDown);
      document.addEventListener("keydown", onKey);
      return () => {
         document.removeEventListener("mousedown", onDown);
         document.removeEventListener("keydown", onKey);
      };
   }, [open, closeAndFocusTrigger]);

   /* ---------- actions ---------- */
   const pick = useCallback(
      (d: Date) => {
         if (isDayDisabled(d)) return;
         setValue(toISO(d));
         closeAndFocusTrigger();
      },
      [isDayDisabled, setValue, closeAndFocusTrigger]
   );

   const goToday = useCallback(() => {
      if (isDayDisabled(today)) return;
      setViewDate(today);
      pick(today);
   }, [isDayDisabled, today, pick]);

   const clear = useCallback(() => {
      setValue("");
      closeAndFocusTrigger();
   }, [setValue, closeAndFocusTrigger]);

   /* ---------- header nav (preserves day-of-month) ---------- */
   const prevYear = useCallback(
      () =>
         setViewDate((p) => {
            const d = new Date(p);
            d.setFullYear(d.getFullYear() - 1);
            return d;
         }),
      []
   );
   const prevMonth = useCallback(
      () =>
         setViewDate((p) => {
            const d = new Date(p);
            d.setMonth(d.getMonth() - 1);
            return d;
         }),
      []
   );
   const nextMonth = useCallback(
      () =>
         setViewDate((p) => {
            const d = new Date(p);
            d.setMonth(d.getMonth() + 1);
            return d;
         }),
      []
   );
   const nextYear = useCallback(
      () =>
         setViewDate((p) => {
            const d = new Date(p);
            d.setFullYear(d.getFullYear() + 1);
            return d;
         }),
      []
   );

   /* ---------- keyboard navigation ---------- */
   const onGridKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
         const iso = (e.target as HTMLElement).dataset?.date;
         if (!iso) return;
         const cur = parseISO(iso);
         if (!cur) return;

         const next = getNextFocusDate(cur, e.key);
         if (!next) return;
         e.preventDefault();

         if (!isSameMonth(next, viewDate)) setViewDate(next);
         const target = toISO(next);
         requestAnimationFrame(() => {
            gridRef.current
               ?.querySelector<HTMLButtonElement>(`[data-date="${target}"]`)
               ?.focus();
         });
      },
      [viewDate]
   );

   const onTriggerKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
         if (
            !open &&
            (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")
         ) {
            e.preventDefault();
            setOpen(true);
         }
      },
      [open]
   );

   const days = useMemo(() => getCalendarDays(viewDate), [viewDate]);

   return {
      // state
      currentValue,
      open,
      setOpen,
      days,
      selected,
      today,
      monthLabel: formatMonthLabel(viewDate),
      // refs
      wrapRef,
      triggerRef,
      gridRef,
      // helpers / actions
      isDayDisabled,
      pick,
      goToday,
      clear,
      prevYear,
      prevMonth,
      nextMonth,
      nextYear,
      onGridKeyDown,
      onTriggerKeyDown,
      // re-exported helpers used by the render
      formatAriaDate,
      isSameDay,
      toISO,
   };
}
