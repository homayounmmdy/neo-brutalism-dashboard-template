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
