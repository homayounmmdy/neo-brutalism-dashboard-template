import React from "react";
import { ButtonType } from "../types/FormFiledType";

const Button: React.FC<ButtonType> = ({
   children,
   className,
   color,
   buttonSize = "lg",
   ...rest
}) => {
   const buttonSizeClasses = {
      xs: "px-2 py-1 text-sm",
      sm: "px-3 py-1.5 text-base",
      md: "px-4 py-2 text-lg",
      lg: "px-6 py-3 text-xl", // default
      xl: "px-8 py-4 text-2xl",
   };
   return (
      <button
         className={`btn ${color} ${buttonSizeClasses[buttonSize]} ${className}`}
         {...rest}
      >
         {children}
      </button>
   );
};

export default Button;
