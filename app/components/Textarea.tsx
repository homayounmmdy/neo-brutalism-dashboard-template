import React from "react";
import { TextareaType } from "../types/FormFiledType";

const Textarea: React.FC<TextareaType> = ({
   focusColor,
   label,
   className,
   rows = 4,
   ...rest
}) => {
   return (
      <>
         {label && (
            <label
               htmlFor={rest.id}
               className="mb-2 block text-sm font-black text-black transition-colors dark:text-gray-200"
            >
               {label}
            </label>
         )}
         <textarea
            className={`textarea ${focusColor} ${className}`}
            id={rest.id}
            rows={rows}
            {...rest}
         />
      </>
   );
};

export default Textarea;
