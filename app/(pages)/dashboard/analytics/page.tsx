"use client";
import SectionHeader from "@/app/components/SectionHeader";
import { useFetchPosts } from "@/app/hook/useFetch";
import { useEffect, useState } from "react";
import {
   Bar,
   BarChart,
   CartesianGrid,
   Line,
   LineChart,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
} from "recharts";

const AnalyticsPage = () => {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
   }, []);

   const { data: posts } = useFetchPosts();

   const chartData =
      posts?.slice(0, isMobile ? 5 : 10).map((post, idx) => ({
         name: isMobile ? `P${post.id}` : `Post ${post.id}`,
         views: Math.floor(Math.random() * 500) + 100,
         likes: Math.floor(Math.random() * 100) + 10,
      })) || [];

   const trendData = Array.from({ length: 7 }, (_, i) => ({
      day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
      users: Math.floor(Math.random() * 200) + 50,
   }));

   // Responsive margins
   const chartMargins = isMobile
      ? { top: 5, right: 5, left: -10, bottom: -10 }
      : { top: 5, right: 30, left: 20, bottom: 5 };

   return (
      <div className="px-2 sm:px-0">
         <SectionHeader title="Analytics" />

         <div className="bg-white border-2 sm:border-4 border-black p-3 sm:p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 uppercase">
               Post Performance
            </h2>
            <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
               <BarChart data={chartData} margin={chartMargins}>
                  <CartesianGrid strokeWidth={isMobile ? 2 : 3} stroke="#000" />
                  <XAxis
                     dataKey="name"
                     stroke="#000"
                     strokeWidth={2}
                     tick={{ fontSize: isMobile ? 10 : 12 }}
                     angle={isMobile ? -45 : 0}
                     textAnchor={isMobile ? "end" : "middle"}
                     height={isMobile ? 60 : 30}
                  />
                  <YAxis
                     stroke="#000"
                     strokeWidth={2}
                     tick={{ fontSize: isMobile ? 10 : 12 }}
                     width={isMobile ? 35 : 60}
                  />
                  <Tooltip />
                  <Bar
                     dataKey="views"
                     fill="#a78bfa"
                     stroke="#000"
                     strokeWidth={2}
                  />
                  <Bar
                     dataKey="likes"
                     fill="#f472b6"
                     stroke="#000"
                     strokeWidth={2}
                  />
               </BarChart>
            </ResponsiveContainer>
         </div>

         <div className="bg-white border-2 sm:border-4 border-black p-3 sm:p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 uppercase">
               Weekly Trend
            </h2>
            <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
               <LineChart data={trendData} margin={chartMargins}>
                  <CartesianGrid strokeWidth={isMobile ? 2 : 3} stroke="#000" />
                  <XAxis
                     dataKey="day"
                     stroke="#000"
                     strokeWidth={2}
                     tick={{ fontSize: isMobile ? 10 : 12 }}
                  />
                  <YAxis
                     stroke="#000"
                     strokeWidth={2}
                     tick={{ fontSize: isMobile ? 10 : 12 }}
                     width={isMobile ? 35 : 60}
                  />
                  <Tooltip />
                  <Line
                     type="monotone"
                     dataKey="users"
                     stroke="#000"
                     strokeWidth={isMobile ? 3 : 4}
                     dot={{
                        fill: "#fbbf24",
                        stroke: "#000",
                        strokeWidth: 2,
                        r: isMobile ? 4 : 6,
                     }}
                  />
               </LineChart>
            </ResponsiveContainer>
         </div>
      </div>
   );
};

export default AnalyticsPage;
