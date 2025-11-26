"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
   const router = useRouter();

   useEffect(() => {
      // check auth status
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      if (!isAuthenticated) {
         router.push("/login");
      }
   }, [router]);
   return (
      <div className="bg-amber-100 p-4 md:p-8 pt-16">
         <div className="max-w-7xl mx-auto">{children}</div>
      </div>
   );
}
