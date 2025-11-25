import React from "react";

const InputErrorMessage = ({ children }: React.PropsWithChildren) => {
   return (
      <div className="mt-2 bg-red-300 border-4 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
         <p className="text-sm font-bold">{children}</p>
      </div>
   );
};

export default InputErrorMessage;
