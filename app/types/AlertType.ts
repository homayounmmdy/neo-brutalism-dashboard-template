import React from "react";

export type AlertColorsVariant = "yellow" | "cyan" | "red" | "green";

export type AlertType = {
   variant?: `alert-${AlertColorsVariant}` | "alert-null";
   className?: string;
   onClose?: () => void;
   children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
