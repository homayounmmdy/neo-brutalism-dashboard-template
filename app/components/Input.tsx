import React from "react";
import { InputType } from "../types/FormFiledType";

const Input: React.FC<InputType> = ({
   focusColor,
   label,
   className,
   ...rest
}) => {
   return (
      <>
         {label && (
            <label
               htmlFor={rest.id}
               className="block text-sm font-black mb-2 text-black dark:text-gray-200 transition-colors"
            >
               {label}
            </label>
         )}
         <input
            className={`input ${focusColor} ${className}`}
            id={rest.id}
            {...rest}
         />
      </>
   );
};

export default Input;
