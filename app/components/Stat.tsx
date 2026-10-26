import React from "react";
import { StatType } from "../types/StatType";

const Stat: React.FC<StatType> = ({
   label,
   value,
   variant = "stat-lime",
   className = "",
   children,
   ...rest
}) => {
   return (
      <div className={`stat ${variant} ${className}`} {...rest}>
         <p className="mb-1 text-sm font-bold uppercase text-black dark:text-white">
            {label}
         </p>
         <p className="text-4xl font-black text-black dark:text-white">
            {value}
         </p>
         {children}
      </div>
   );
};

export default Stat;
