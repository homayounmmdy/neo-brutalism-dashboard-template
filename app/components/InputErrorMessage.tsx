import React from "react";

const InputErrorMessage = ({ children }: React.PropsWithChildren) => {
   return (
      <p className="mt-2 text-sm font-bold text-red-600 bg-red-100 border-2 border-black px-2 py-1">
         ⚠ {children}
      </p>
   );
};

export default InputErrorMessage;
