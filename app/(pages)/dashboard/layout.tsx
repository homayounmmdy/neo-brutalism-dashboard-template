"use client";
import { useRouter } from "next/router";
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
      <div className="bg-purple-400 p-8 pt-16">
         <div className="max-w-7xl mx-auto">{children}</div>
      </div>
   );
}
