"use client";
import RecentPosts from "@/app/components/RecentPosts";
import Stats from "@/app/components/Stats";

const DashboardPage = () => {
   return (
      <>
         <h1 className="text-5xl font-black mb-6 uppercase">DASHBOARD</h1>
         {/* 
         <p className="text-xl font-bold mb-8 text-gray-800">
            🎉 Welcome! You are successfully logged in.
         </p> */}

         <Stats />
         <RecentPosts />
      </>
   );
};

export default DashboardPage;
