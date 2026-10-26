import React from "react";
import { AlertType } from "../types/AlertType";

const Alert: React.FC<AlertType> = ({
   variant = "alert-yellow",
   className = "",
   onClose,
   children,
   ...rest
}) => {
   return (
      <div role="alert" className={`alert ${variant} ${className}`} {...rest}>
         <div className="flex-1">{children}</div>
         {onClose && (
            <button
               type="button"
               onClick={onClose}
               aria-label="Dismiss alert"
               className="alert-close"
            >
               ×
            </button>
         )}
      </div>
   );
};

export default Alert;
