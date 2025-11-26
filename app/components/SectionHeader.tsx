interface Props {
   title: string;
   headSize?: "sm" | "md" | "lg";
}
const SectionHeader = ({ title, headSize = "md" }: Props) => {
   const headSizeClasses = {
      sm: "text-4xl",
      md: "text-5xl", //default
      lg: "text-6xl",
   };
   return (
      <div className="mb-8 group cursor-pointer w-fit">
         <h1
            className={`text-3xl md:${headSizeClasses[headSize]} font-black mb-2 uppercase group-hover:scale-105 transition-transform duration-300`}
         >
            {title}
         </h1>
         <div className="relative">
            <div className="h-2 bg-black w-20 group-hover:w-full transition-all duration-500 ease-out origin-left"></div>
         </div>
      </div>
   );
};

export default SectionHeader;
