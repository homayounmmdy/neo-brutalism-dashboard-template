export const toISO = (d: Date): string => {
   const y = d.getFullYear();
   const m = String(d.getMonth() + 1).padStart(2, "0");
   const day = String(d.getDate()).padStart(2, "0");
   return `${y}-${m}-${day}`;
};

export const parseISO = (s?: string): Date | null => {
   if (!s) return null;
   const [y, m, d] = s.split("-").map(Number);
   if (!y || !m || !d) return null;
   const date = new Date(y, m - 1, d);
   return isNaN(date.getTime()) ? null : date;
};

export const startOfDay = (d: Date) =>
   new Date(d.getFullYear(), d.getMonth(), d.getDate());

export const isSameDay = (a: Date, b: Date) =>
   a.getFullYear() === b.getFullYear() &&
   a.getMonth() === b.getMonth() &&
   a.getDate() === b.getDate();

export const addMonths = (d: Date, n: number) =>
   new Date(d.getFullYear(), d.getMonth() + n, 1);

export const addDays = (d: Date, n: number) => {
   const x = new Date(d);
   x.setDate(x.getDate() + n);
   return x;
};

/** 6 weeks × 7 days, starting on the Sunday on/before the 1st. */
export const getCalendarDays = (view: Date): Date[] => {
   const firstOfMonth = new Date(view.getFullYear(), view.getMonth(), 1);
   const start = addDays(firstOfMonth, -firstOfMonth.getDay());
   return Array.from({ length: 42 }, (_, i) => addDays(start, i));
};

export const formatDisplay = (iso: string): string => {
   const d = parseISO(iso);
   if (!d) return "";
   return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
   });
};

export const getTodayISO = () => toISO(new Date());
export const addDaysISO = (n: number) => toISO(addDays(new Date(), n));

/* ---------- range ---------- */
export const isDateInRange = (d: Date, min?: string, max?: string): boolean => {
   const day = startOfDay(d);
   const minDate = parseISO(min);
   const maxDate = parseISO(max);
   if (minDate && day < startOfDay(minDate)) return false;
   if (maxDate && day > startOfDay(maxDate)) return false;
   return true;
};

/* ---------- month / label ---------- */
export const isSameMonth = (a: Date, b: Date): boolean =>
   a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();

export const formatMonthLabel = (d: Date): string =>
   d.toLocaleDateString(undefined, { month: "long", year: "numeric" });

export const formatAriaDate = (d: Date): string =>
   d.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
   });

/* ---------- keyboard navigation ---------- */
export const getNextFocusDate = (cur: Date, key: string): Date | null => {
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
