"use client";
import React from "react";
import { DatePickerType } from "../types/FormFiledType";
import { formatDisplay } from "../utils/date";
import { useDatePicker } from "../hooks/useDatePicker";

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
   const {
      currentValue,
      open,
      setOpen,
      days,
      selected,
      today,
      monthLabel,
      wrapRef,
      triggerRef,
      gridRef,
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
      formatAriaDate,
      isSameDay,
      toISO,
   } = useDatePicker({ value, onChange, min, max });

   const popupId = React.useId();
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
            onKeyDown={onTriggerKeyDown}
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

         {name && <input type="hidden" name={name} value={currentValue} />}

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
                     onClick={prevYear}
                  >
                     <Chevron d="M11 18l-6-6 6-6 M18 18l-6-6 6-6" />
                  </button>
                  <button
                     type="button"
                     className="datepicker-nav"
                     aria-label="Previous month"
                     onClick={prevMonth}
                  >
                     <Chevron d="M15 18l-6-6 6-6" />
                  </button>
                  <span className="datepicker-title">{monthLabel}</span>
                  <button
                     type="button"
                     className="datepicker-nav"
                     aria-label="Next month"
                     onClick={nextMonth}
                  >
                     <Chevron d="M9 18l6-6-6-6" />
                  </button>
                  <button
                     type="button"
                     className="datepicker-nav"
                     aria-label="Next year"
                     onClick={nextYear}
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
                     const outside =
                        d.getMonth() !== new Date(monthLabel).getMonth();
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
                           aria-label={formatAriaDate(d)}
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
