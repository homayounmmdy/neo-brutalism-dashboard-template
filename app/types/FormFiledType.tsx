import React from "react";

type BtnColors = "null" | "yellow" | "cyan" | "red";
export type ButtonType = {
   children?: React.ReactNode;
   color?: `btn-${BtnColors}`;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
