import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hook/useTheme";
import Button from "./Button";

const ThemeToggle = () => {
   const { theme, toggleTheme } = useTheme();
   const isDark = theme === "dark";

   return (
      <Button
         onClick={toggleTheme}
         className={`relative p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] duration-300  overflow-hidden ${
            isDark ? "bg-indigo-800" : "bg-yellow-300"
         }`}
         aria-label="Toggle theme"
         buttonSize="md"
      >
         <div className="relative w-6 h-6">
            <div
               className={`absolute inset-0 transition-all duration-500 ${
                  isDark
                     ? "rotate-0 opacity-100 scale-100"
                     : "rotate-90 opacity-0 scale-50"
               }`}
            >
               <Moon className="w-6 h-6 stroke-[3] text-white" />
            </div>
            <div
               className={`absolute inset-0 transition-all duration-500 ${
                  isDark
                     ? "-rotate-90 opacity-0 scale-50"
                     : "rotate-0 opacity-100 scale-100"
               }`}
            >
               <Sun className="w-6 h-6 stroke-3 text-black" />
            </div>
         </div>
      </Button>
   );
};

export default ThemeToggle;
