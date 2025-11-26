"use client";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import AuthButton from "./AuthButton";

const Navigation = () => {
   const router = useRouter();
   const pathname = usePathname();
   const { logout } = useAuth();

   const navItems: { href: string; label: string; color: `bg-${string}` }[] = [
      { href: "/dashboard", label: "Dashboard", color: "bg-purple-400" },
      {
         href: "/dashboard/analytics",
         label: "Analytics",
         color: "bg-pink-400",
      },
      { href: "/dashboard/users", label: "Users", color: "bg-cyan-400" },
   ];

   const handleLogout = () => {
      logout();
      router.push("/");
   };
   return (
      <nav className="bg-white fixed z-50 mb-20 top-0 left-0 right-0 border-b-4 border-black p-4  shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] max-w-7xl mx-auto">
         <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-wrap gap-3">
               {navItems.map((item) => (
                  <Button
                     key={item.label}
                     buttonSize="md"
                     onClick={() => router.push(item.href)}
                     className={`${item.color} ${pathname === item.href ? "shadow-none! translate-x-0.5! translate-y-0.5!" : null}`}
                  >
                     {item.label}
                  </Button>
               ))}
            </div>
            <div className="flex gap-4 items-center">
               <ThemeToggle />
               <AuthButton />
            </div>
         </div>
      </nav>
   );
};

export default Navigation;
