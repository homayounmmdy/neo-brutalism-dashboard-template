"use client";
import RecentPosts from "@/app/components/RecentPosts";
import SectionHeader from "@/app/components/SectionHeader";
import Stats from "@/app/components/Stats";

const DashboardPage = () => {
   return (
      <>
         <SectionHeader title="DASHBOARD" />
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
