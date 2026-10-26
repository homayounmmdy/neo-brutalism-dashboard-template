import React from "react";

export type Column<T> = {
   key: string;
   header: React.ReactNode;
   render?: (row: T) => React.ReactNode;
};

export type TableProps<T> = {
   columns: Column<T>[];
   data?: T[];
   getRowKey: (row: T) => React.Key;
   isLoading?: boolean;
   error?: unknown;
};
