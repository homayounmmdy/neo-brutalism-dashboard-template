import React from "react";
import { ButtonType } from "../types/FormFiledType";

const Button: React.FC<ButtonType> = ({
   children,
   className,
   color,
   ...rest
}) => {
   return (
      <button className={`btn ${color} ${className}`} {...rest}>
         {children}
      </button>
   );
};

export default Button;
