import { Column, TableProps } from "../types/TableType";

const getValue = (row: unknown, path: string): unknown =>
   path.split(".").reduce<unknown>((acc, key) => {
      if (acc == null || typeof acc !== "object") return undefined;
      return (acc as Record<string, unknown>)[key];
   }, row);

const getErrorMessage = (error: unknown): string | null => {
   if (!error) return null;
   if (typeof error === "string") return error;
   if (error instanceof Error) return error.message;
   return "Something went wrong!";
};

export default function Table<T>({
   columns,
   data = [],
   getRowKey,
   isLoading = false,
   error,
}: TableProps<T>) {
   const errorMessage = getErrorMessage(error);

   return (
      <div className="table">
         {errorMessage ? (
            <p className="table-msg-error">{errorMessage}</p>
         ) : isLoading ? (
            <p className="table-msg">Loading...</p>
         ) : (
            <div className="table-scroll">
               <table className="table-el">
                  <thead className="table-head">
                     <tr>
                        {columns.map((col) => (
                           <th key={col.key} className="table-th">
                              {col.header}
                           </th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     {data.length === 0 ? (
                        <tr className="table-row">
                           <td
                              colSpan={columns.length}
                              className="table-td text-center"
                           >
                              No data found.
                           </td>
                        </tr>
                     ) : (
                        data.map((row) => (
                           <tr key={getRowKey(row)} className="table-row">
                              {columns.map((col) => (
                                 <td key={col.key} className="table-td">
                                    {col.render
                                       ? col.render(row)
                                       : String(getValue(row, col.key) ?? "")}
                                 </td>
                              ))}
                           </tr>
                        ))
                     )}
                  </tbody>
               </table>
            </div>
         )}
      </div>
   );
}
