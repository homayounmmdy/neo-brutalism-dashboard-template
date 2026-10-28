import React from "react";

type ColorsVariant = "yellow" | "cyan" | "red" | "green";

export type ButtonType = {
   children?: React.ReactNode;
   color?: `btn-${ColorsVariant}` | "btn-null";
   buttonSize?: "sm" | "md" | "lg" | "xl";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type InputType = {
   focusColor?: `focus-${ColorsVariant}`;
   label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type TextareaType = {
   focusColor?: `focus-${ColorsVariant}`;
   label?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type DatePickerType = {
   focusColor?: `focus-${ColorsVariant}`;
   label?: string;
   value?: string;
   onChange?: (value: string) => void;
   min?: string;
   max?: string;
   placeholder?: string;
} & Omit<
   React.InputHTMLAttributes<HTMLInputElement>,
   "type" | "value" | "onChange" | "min" | "max" | "size"
>;
