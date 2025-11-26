interface Props {
   children: React.ReactNode;
   shadowSize?: "sm" | "md" | "lg" | "xl";
   className?: string;
}

const ContentFrame = ({ children, shadowSize = "lg", className }: Props) => {
   const shadowClasses = {
      sm: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      md: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
      lg: "shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]", // default
      xl: "shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]",
   };

   return (
      <div
         className={`bg-white dark:bg-gray-900 dark:text-white border-4 border-black p-8 ${shadowClasses[shadowSize]} transition-colors ${className}`}
      >
         {children}
      </div>
   );
};

export default ContentFrame;
