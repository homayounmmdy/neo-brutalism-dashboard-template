"use client";
import { useEffect, useState } from "react";

export const useTheme = () => {
   const [theme, setTheme] = useState<"light" | "dark">(() => {
      if (typeof window === "undefined") return "light"; // SSR fallback
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") return saved;

      return window.matchMedia("(prefers-color-scheme: dark)").matches
         ? "dark"
         : "light";
   });

   useEffect(() => {
      const root = document.documentElement;

      if (theme === "dark") {
         root.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else {
         root.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   }, [theme]);

   const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

   return { theme, toggleTheme };
};
