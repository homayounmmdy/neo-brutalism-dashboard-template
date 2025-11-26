"use client";
import { useFetchPosts } from "../hook/useFetch";

const Stats = () => {
   const { data: posts } = useFetchPosts();

   const getRandomStats = () => {
      const activeUsers = Math.floor(Math.random() * 255) + 1; // 1-255
      const engagement = Math.floor(Math.random() * 100) + 1; // 1-100%
      const growth = Math.floor(Math.random() * 89) + 2; // 2-90%

      return {
         activeUsers,
         engagement: `${engagement}%`,
         growth: `+${growth}%`,
      };
   };

   const randomStats = getRandomStats();

   const stats = [
      { label: "Total Posts", value: posts?.length || 0, color: "bg-lime-300" },
      {
         label: "Active Users",
         value: randomStats.activeUsers.toString(),
         color: "bg-pink-300",
      },
      {
         label: "Engagement",
         value: randomStats.engagement,
         color: "bg-cyan-300",
      },
      { label: "Growth", value: randomStats.growth, color: "bg-yellow-300" },
   ];
   return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
         {stats.map((stat, idx) => (
            <div
               key={idx}
               className={`${stat.color} border-4 border-black p-2 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
            >
               <p className="text-sm font-bold uppercase mb-1">{stat.label}</p>
               <p className="text-4xl font-black">{stat.value}</p>
            </div>
         ))}
      </div>
   );
};

export default Stats;
