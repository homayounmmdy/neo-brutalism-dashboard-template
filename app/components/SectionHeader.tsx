interface Props {
   title: string;
   headSize?: "sm" | "md" | "lg";
   sectionClassName?: string;
}
const SectionHeader = ({ title, headSize = "md", sectionClassName }: Props) => {
   const headSizeClasses = {
      sm: "text-3xl md:text-4xl",
      md: "text-4xl md:text-5xl", // default
      lg: "text-5xl md:text-6xl",
   };
   return (
      <div className={`mb-8 group cursor-pointer w-fit ${sectionClassName}`}>
         <h1
            className={`${headSizeClasses[headSize]} font-black mb-2 uppercase group-hover:scale-105 transition-transform duration-300`}
         >
            {title}
         </h1>
         <div className="relative">
            <div className="h-2 w-20 origin-left bg-black transition-all duration-500 ease-out group-hover:w-full dark:bg-white"></div>
         </div>
      </div>
   );
};

export default SectionHeader;
