import React from "react";

type ColorsVariant = "yellow" | "cyan" | "red";

export type ButtonType = {
   children?: React.ReactNode;
   color?: `btn-${ColorsVariant}` | "btn-null";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type InputType = {
   focusColor?: `focus-${ColorsVariant}`;
   label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
