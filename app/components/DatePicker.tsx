"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { DatePickerType } from "../types/FormFiledType";
import {
   addDays,
   addMonths,
   formatDisplay,
   getCalendarDays,
   isSameDay,
   parseISO,
   startOfDay,
   toISO,
} from "../utils/date";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const CalendarIcon = () => (
   <svg
      className="datepicker-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
   >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
   </svg>
);

const Chevron = ({ d }: { d: string }) => (
   <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
   >
      <path d={d} />
   </svg>
);

const DatePicker: React.FC<DatePickerType> = ({
   focusColor,
   label,
   className,
   value,
   onChange,
   min,
   max,
   placeholder = "Select date",
   disabled,
   required,
   id,
   name,
   ...rest
}) => {
   const isControlled = value !== undefined;
   const [internal, setInternal] = useState(value ?? "");
   const currentValue = isControlled ? value : internal;

   const [open, setOpen] = useState(false);
   const [viewDate, setViewDate] = useState<Date>(
      () => parseISO(currentValue) ?? new Date()
   );

   const wrapRef = useRef<HTMLDivElement>(null);
   const triggerRef = useRef<HTMLButtonElement>(null);
   const gridRef = useRef<HTMLDivElement>(null);
   const popupId = useRef(
      `dp-${Math.random().toString(36).slice(2, 9)}`
   ).current;

   const selected = parseISO(currentValue);
   const minDate = parseISO(min);
   const maxDate = parseISO(max);
   const today = startOfDay(new Date());

   const commit = (v: string) => {
      if (!isControlled) setInternal(v);
      onChange?.(v);
   };

   /* ---------- Open / close ---------- */
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

   useEffect(() => {
      if (!open) return;
      const onDown = (e: MouseEvent) => {
         if (!wrapRef.current?.contains(e.target as Node)) {
            setOpen(false);
            triggerRef.current?.focus();
         }
      };
      const onKey = (e: KeyboardEvent) => {
         if (e.key === "Escape") {
            setOpen(false);
            triggerRef.current?.focus();
         }
      };
      document.addEventListener("mousedown", onDown);
      document.addEventListener("keydown", onKey);
      return () => {
         document.removeEventListener("mousedown", onDown);
         document.removeEventListener("keydown", onKey);
      };
   }, [open]);

   /* ---------- Day grid ---------- */
   const days = useMemo(() => getCalendarDays(viewDate), [viewDate]);

   const isDayDisabled = (d: Date) => {
      if (minDate && d < startOfDay(minDate)) return true;
      if (maxDate && d > startOfDay(maxDate)) return true;
      return false;
   };

   const pick = (d: Date) => {
      if (isDayDisabled(d)) return;
      commit(toISO(d));
      setOpen(false);
      triggerRef.current?.focus();
   };

   const goToday = () => {
      if (isDayDisabled(today)) return;
      setViewDate(today);
      pick(today);
   };

   const clear = () => {
      commit("");
      setOpen(false);
      triggerRef.current?.focus();
   };

   const onGridKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const iso = (e.target as HTMLElement).dataset?.date;
      if (!iso) return;
      const cur = parseISO(iso);
      if (!cur) return;

      let next: Date | null = null;
      switch (e.key) {
         case "ArrowLeft":
            next = addDays(cur, -1);
            break;
         case "ArrowRight":
            next = addDays(cur, 1);
            break;
         case "ArrowUp":
            next = addDays(cur, -7);
            break;
         case "ArrowDown":
            next = addDays(cur, 7);
            break;
         case "Home":
            next = addDays(cur, -cur.getDay());
            break;
         case "End":
            next = addDays(cur, 6 - cur.getDay());
            break;
         case "PageUp":
            next = addMonths(cur, -1);
            break;
         case "PageDown":
            next = addMonths(cur, 1);
            break;
      }
      if (!next) return;
      e.preventDefault();

      if (
         next.getMonth() !== viewDate.getMonth() ||
         next.getFullYear() !== viewDate.getFullYear()
      ) {
         setViewDate(next);
      }
      const target = toISO(next);
      requestAnimationFrame(() => {
         gridRef.current
            ?.querySelector<HTMLButtonElement>(`[data-date="${target}"]`)
            ?.focus();
      });
   };

   const monthLabel = viewDate.toLocaleDateString(undefined, {
      month: "long",
      year: "numeric",
   });

   const accentClass = focusColor
      ? `datepicker-${focusColor.replace("focus-", "")}`
      : "";

   return (
      <div ref={wrapRef} className={`datepicker-wrap relative ${accentClass}`}>
         {label && (
            <label
               htmlFor={id}
               className="mb-2 block text-sm font-black text-black transition-colors dark:text-gray-200"
            >
               {label}
            </label>
         )}

         <button
            ref={triggerRef}
            type="button"
            id={id}
            disabled={disabled}
            onClick={() => setOpen((o) => !o)}
            onKeyDown={(e) => {
               if (
                  !open &&
                  (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")
               ) {
                  e.preventDefault();
                  setOpen(true);
               }
            }}
            className={`input ${focusColor} bg-white text-left flex items-center justify-between gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${className ?? ""}`}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls={popupId}
            aria-required={required || undefined}
            {...rest}
         >
            <span className={currentValue ? "" : "opacity-50 font-normal"}>
               {currentValue ? formatDisplay(currentValue) : placeholder}
            </span>
            <CalendarIcon />
         </button>

         {name && (
            <input type="hidden" name={name} value={currentValue ?? ""} />
         )}

         {open && (
            <div
               id={popupId}
               role="dialog"
               aria-label="Choose date"
               className="datepicker-popup"
            >
               <div className="datepicker-header">
                  <button
                     type="button"
                     className="datepicker-nav"
                     aria-label="Previous year"
                     onClick={() => setViewDate(addMonths(viewDate, -12))}
                  >
                     <Chevron d="M11 18l-6-6 6-6 M18 18l-6-6 6-6" />
                  </button>
                  <button
                     type="button"
                     className="datepicker-nav"
                     aria-label="Previous month"
                     onClick={() => setViewDate(addMonths(viewDate, -1))}
                  >
                     <Chevron d="M15 18l-6-6 6-6" />
                  </button>
                  <span className="datepicker-title">{monthLabel}</span>
                  <button
                     type="button"
                     className="datepicker-nav"
                     aria-label="Next month"
                     onClick={() => setViewDate(addMonths(viewDate, 1))}
                  >
                     <Chevron d="M9 18l6-6-6-6" />
                  </button>
                  <button
                     type="button"
                     className="datepicker-nav"
                     aria-label="Next year"
                     onClick={() => setViewDate(addMonths(viewDate, 12))}
                  >
                     <Chevron d="M13 18l6-6-6-6 M6 18l6-6-6-6" />
                  </button>
               </div>

               <div
                  className="datepicker-grid"
                  ref={gridRef}
                  onKeyDown={onGridKeyDown}
               >
                  {WEEKDAYS.map((w) => (
                     <div key={w} className="datepicker-dow">
                        {w}
                     </div>
                  ))}
                  {days.map((d) => {
                     const iso = toISO(d);
                     const outside = d.getMonth() !== viewDate.getMonth();
                     const isToday = isSameDay(d, today);
                     const isSelected = !!selected && isSameDay(d, selected);
                     const isDisabled = isDayDisabled(d);
                     return (
                        <button
                           key={iso}
                           type="button"
                           data-date={iso}
                           onClick={() => pick(d)}
                           disabled={isDisabled}
                           aria-pressed={isSelected}
                           aria-label={d.toLocaleDateString(undefined, {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                           })}
                           className={[
                              "datepicker-day",
                              outside && "datepicker-day-outside",
                              isToday && "datepicker-day-today",
                              isSelected && "datepicker-day-selected",
                           ]
                              .filter(Boolean)
                              .join(" ")}
                        >
                           {d.getDate()}
                        </button>
                     );
                  })}
               </div>

               <div className="datepicker-footer">
                  <button type="button" onClick={goToday}>
                     Today
                  </button>
                  <button
                     type="button"
                     onClick={clear}
                     disabled={!currentValue}
                  >
                     Clear
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default DatePicker;
