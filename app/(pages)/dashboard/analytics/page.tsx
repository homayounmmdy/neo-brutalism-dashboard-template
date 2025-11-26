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

// Custom Tooltip Component for Dark Theme
const CustomTooltip = ({ active, payload, label }: any) => {
   if (active && payload && payload.length) {
      return (
         <div className="bg-white dark:bg-gray-800 border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-black text-sm mb-2 text-black dark:text-white">
               {label}
            </p>
            {payload.map((entry: any, index: number) => (
               <p
                  key={index}
                  className="font-bold text-sm text-black dark:text-white"
                  style={{ color: entry.color }}
               >
                  {entry.name}: {entry.value}
               </p>
            ))}
         </div>
      );
   }
   return null;
};

const AnalyticsPage = () => {
   const [isMobile, setIsMobile] = useState(false);
   const [isDark, setIsDark] = useState(false);

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
   }, []);

   useEffect(() => {
      // Check if dark mode is active
      const checkDarkMode = () => {
         setIsDark(document.documentElement.classList.contains("dark"));
      };

      checkDarkMode();

      // Watch for theme changes
      const observer = new MutationObserver(checkDarkMode);
      observer.observe(document.documentElement, {
         attributes: true,
         attributeFilter: ["class"],
      });

      return () => observer.disconnect();
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

   // Dynamic colors based on theme
   const gridColor = isDark ? "#4b5563" : "#000";
   const axisColor = isDark ? "#9ca3af" : "#000";
   const textColor = isDark ? "#e5e7eb" : "#000";

   return (
      <div className="px-2 sm:px-0">
         <SectionHeader title="Analytics" sectionClassName="mt-3" />

         {/* Post Performance Chart */}
         <div className="bg-white dark:bg-gray-900 border-2 sm:border-4 border-black p-3 sm:p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 sm:mb-6 transition-colors">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 uppercase text-black dark:text-white">
               Post Performance
            </h2>
            <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
               <BarChart data={chartData} margin={chartMargins}>
                  <CartesianGrid
                     strokeWidth={isMobile ? 2 : 3}
                     stroke={gridColor}
                     strokeDasharray="0"
                  />
                  <XAxis
                     dataKey="name"
                     stroke={axisColor}
                     strokeWidth={2}
                     tick={{
                        fontSize: isMobile ? 10 : 12,
                        fill: textColor,
                        fontWeight: "bold",
                     }}
                     angle={isMobile ? -45 : 0}
                     textAnchor={isMobile ? "end" : "middle"}
                     height={isMobile ? 60 : 30}
                  />
                  <YAxis
                     stroke={axisColor}
                     strokeWidth={2}
                     tick={{
                        fontSize: isMobile ? 10 : 12,
                        fill: textColor,
                        fontWeight: "bold",
                     }}
                     width={isMobile ? 35 : 60}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                     dataKey="views"
                     fill={isDark ? "#a78bfa" : "#a78bfa"}
                     stroke="#000"
                     strokeWidth={2}
                     name="Views"
                  />
                  <Bar
                     dataKey="likes"
                     fill={isDark ? "#f472b6" : "#f472b6"}
                     stroke="#000"
                     strokeWidth={2}
                     name="Likes"
                  />
               </BarChart>
            </ResponsiveContainer>
         </div>

         {/* Weekly Trend Chart */}
         <div className="bg-white dark:bg-gray-900 border-2 sm:border-4 border-black p-3 sm:p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 uppercase text-black dark:text-white">
               Weekly Trend
            </h2>
            <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
               <LineChart data={trendData} margin={chartMargins}>
                  <CartesianGrid
                     strokeWidth={isMobile ? 2 : 3}
                     stroke={gridColor}
                     strokeDasharray="0"
                  />
                  <XAxis
                     dataKey="day"
                     stroke={axisColor}
                     strokeWidth={2}
                     tick={{
                        fontSize: isMobile ? 10 : 12,
                        fill: textColor,
                        fontWeight: "bold",
                     }}
                  />
                  <YAxis
                     stroke={axisColor}
                     strokeWidth={2}
                     tick={{
                        fontSize: isMobile ? 10 : 12,
                        fill: textColor,
                        fontWeight: "bold",
                     }}
                     width={isMobile ? 35 : 60}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                     type="monotone"
                     dataKey="users"
                     stroke={isDark ? "#fbbf24" : "#000"}
                     strokeWidth={isMobile ? 3 : 4}
                     dot={{
                        fill: "#fbbf24",
                        stroke: "#000",
                        strokeWidth: 2,
                        r: isMobile ? 4 : 6,
                     }}
                     name="Users"
                  />
               </LineChart>
            </ResponsiveContainer>
         </div>
      </div>
   );
};

export default AnalyticsPage;
