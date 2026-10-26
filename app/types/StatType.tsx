import React from "react";

export type StatColorsVariant =
   | "yellow"
   | "cyan"
   | "red"
   | "green"
   | "lime"
   | "pink";

export type StatType = {
   label: string;
   value: string | number;
   variant?: `stat-${StatColorsVariant}` | "stat-null";
   className?: string;
   children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
