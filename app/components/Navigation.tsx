"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";

const Navigation = () => {
   const router = useRouter();
   const { logout } = useAuth();
   const navItems: { page: string; label: string; color: `bg-${string}` }[] = [
      { page: "dashboard", label: "Dashboard", color: "bg-purple-400" },
   ];
   const handleLogout = () => {
      logout();
      router.push("/");
   };
   return (
      <nav className="bg-white fixed mb-20 top-0 left-0 right-0 border-b-4 border-black p-4  shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] max-w-7xl mx-auto">
         <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-wrap gap-3">
               {navItems.map((item) => (
                  <Button
                     key={item.page}
                     onClick={() => router.push("/dashboard")}
                     className={item.color}
                  >
                     {item.label}
                  </Button>
               ))}
            </div>
            <Button onClick={handleLogout} color="btn-red">
               Logout
            </Button>
         </div>
      </nav>
   );
};

export default Navigation;
