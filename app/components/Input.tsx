import React from "react";
import { InputType } from "../types/FormFiledType";

const Input: React.FC<InputType> = ({ focusColor, className, ...rest }) => {
   return (
      <input className={`input focus-${focusColor} ${className}`} {...rest} />
   );
};

export default Input;
