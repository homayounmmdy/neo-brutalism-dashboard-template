"use client";
import { useFetchPosts } from "../hooks/useFetch";
import { StatType } from "../types/StatType";
import Stat from "./Stat";

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

   const stats: StatType[] = [
      {
         label: "Total Posts",
         value: posts?.length || 0,
         variant: "stat-lime",
      },
      {
         label: "Active Users",
         value: randomStats.activeUsers.toString(),
         variant: "stat-pink",
      },
      {
         label: "Engagement",
         value: randomStats.engagement,
         variant: "stat-cyan",
      },
      {
         label: "Growth",
         value: randomStats.growth,
         variant: "stat-yellow",
      },
   ];

   return (
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
         {stats.map((stat, idx) => (
            <Stat key={idx} {...stat} />
         ))}
      </div>
   );
};

export default Stats;
