import { useEffect, useState } from "react";

export const useTheme = () => {
   const [theme, setTheme] = useState<string>("light");

   // Initialize theme from localStorage on mount
   useEffect(() => {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
   }, []);

   // Apply theme changes to document and localStorage
   useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
   }, [theme]);

   const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
   };

   return { theme, toggleTheme };
};
