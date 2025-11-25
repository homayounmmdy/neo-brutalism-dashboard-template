"use client";
import Button from "@/app/components/Button";
import ContentFrame from "@/app/components/ContentFrame";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
   const router = useRouter();

   useEffect(() => {
      // check auth status
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      if (!isAuthenticated) {
         router.push("/login");
      }
   }, [router]);

   const handleLogout = () => {
      localStorage.removeItem("isAuthenticated");
      router.push("/");
   };

   return (
      <div className="min-h-screen bg-purple-400 p-8">
         <div className="max-w-4xl mx-auto">
            <ContentFrame>
               <h2 className="text-5xl font-black mb-6 text-black">
                  DASHBOARD
               </h2>
               <p className="text-xl font-bold mb-8 text-gray-800">
                  🎉 Welcome! You are successfully logged in.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-yellow-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                     <h3 className="text-2xl font-black mb-2">STATS</h3>
                     <p className="font-bold text-4xl">42</p>
                  </div>
                  <div className="bg-pink-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                     <h3 className="text-2xl font-black mb-2">TASKS</h3>
                     <p className="font-bold text-4xl">12</p>
                  </div>
               </div>

               <Button
                  onClick={handleLogout}
                  color="btn-red"
                  className=" text-white"
               >
                  LOGOUT
               </Button>
            </ContentFrame>
         </div>
      </div>
   );
};

export default DashboardPage;
