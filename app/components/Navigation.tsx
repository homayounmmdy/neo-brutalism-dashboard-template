"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import AuthButton from "./AuthButton";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
   const router = useRouter();
   const pathname = usePathname();
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const navItems: { href: string; label: string; color: `bg-${string}` }[] = [
      { href: "/dashboard", label: "Dashboard", color: "bg-purple-400" },
      {
         href: "/dashboard/analytics",
         label: "Analytics",
         color: "bg-pink-400",
      },
      { href: "/dashboard/users", label: "Users", color: "bg-cyan-400" },
   ];

   const handleNavClick = (href: string) => {
      router.push(href);
      setIsMenuOpen(false);
   };

   return (
      <nav className="bg-white fixed z-50 top-0 left-0 right-0 border-b-4 border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] max-w-7xl mx-auto">
         <div className="p-4">
            <div className="flex items-center justify-between">
               <div className="font-bold text-xl">MYDASH</div>

               {/* Desktop Navigation */}
               <div className="hidden md:flex gap-3 items-center">
                  {navItems.map((item) => (
                     <Button
                        key={item.label}
                        buttonSize="md"
                        onClick={() => router.push(item.href)}
                        className={`${item.color} ${
                           pathname === item.href
                              ? "shadow-none! translate-x-0.5! translate-y-0.5!"
                              : ""
                        }`}
                     >
                        {item.label}
                     </Button>
                  ))}
               </div>

               {/* Desktop Right Actions */}
               <div className="hidden md:flex gap-4 items-center">
                  <ThemeToggle />
                  <AuthButton />
               </div>

               {/* Mobile Menu Button */}
               <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden w-12 h-12 bg-yellow-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all flex flex-col items-center justify-center gap-1.5"
                  aria-label="Toggle menu"
               >
                  <span
                     className={`w-6 h-1 bg-black transition-transform ${
                        isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                     }`}
                  />
                  <span
                     className={`w-6 h-1 bg-black transition-opacity ${
                        isMenuOpen ? "opacity-0" : ""
                     }`}
                  />
                  <span
                     className={`w-6 h-1 bg-black transition-transform ${
                        isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                     }`}
                  />
               </button>
            </div>

            {/* Mobile Menu */}
            <div
               className={`md:hidden overflow-hidden transition-all duration-300 ${
                  isMenuOpen ? "max-h-96 mt-4" : "max-h-0"
               }`}
            >
               <div className="flex flex-col gap-3 pb-4 border-t-4 border-black pt-4">
                  {navItems.map((item) => (
                     <Button
                        key={item.label}
                        buttonSize="md"
                        onClick={() => handleNavClick(item.href)}
                        className={`${item.color} w-full ${
                           pathname === item.href
                              ? "shadow-none translate-x-0.5 translate-y-0.5"
                              : ""
                        }`}
                     >
                        {item.label}
                     </Button>
                  ))}
                  <div className="flex gap-3 pt-3 justify-between border-t-4 border-black">
                     <ThemeToggle />
                     <div className="flex-1">
                        <AuthButton />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navigation;
