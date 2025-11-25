"use client";
import { PostType } from "@/app/types/DataType";
import { useQuery } from "@tanstack/react-query";
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
   const fetchPosts = async (): Promise<PostType[]> => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Failed to fetch posts");
      return res.json();
   };
   const { data: posts } = useQuery({
      queryKey: ["posts"],
      queryFn: fetchPosts,
   });

   const chartData =
      posts?.slice(0, 10).map((post, idx) => ({
         name: `Post ${post.id}`,
         views: Math.floor(Math.random() * 500) + 100,
         likes: Math.floor(Math.random() * 100) + 10,
      })) || [];

   const trendData = Array.from({ length: 7 }, (_, i) => ({
      day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
      users: Math.floor(Math.random() * 200) + 50,
   }));
   return (
      <div>
         <h1 className="text-5xl font-black mb-6 uppercase">Analytics</h1>

         <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <h2 className="text-3xl font-black mb-4 uppercase">
               Post Performance
            </h2>
            <ResponsiveContainer width="100%" height={300}>
               <BarChart data={chartData}>
                  <CartesianGrid strokeWidth={3} stroke="#000" />
                  <XAxis dataKey="name" stroke="#000" strokeWidth={2} />
                  <YAxis stroke="#000" strokeWidth={2} />
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

         <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-black mb-4 uppercase">Weekly Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
               <LineChart data={trendData}>
                  <CartesianGrid strokeWidth={3} stroke="#000" />
                  <XAxis dataKey="day" stroke="#000" strokeWidth={2} />
                  <YAxis stroke="#000" strokeWidth={2} />
                  <Tooltip />
                  <Line
                     type="monotone"
                     dataKey="users"
                     stroke="#000"
                     strokeWidth={4}
                     dot={{
                        fill: "#fbbf24",
                        stroke: "#000",
                        strokeWidth: 2,
                        r: 6,
                     }}
                  />
               </LineChart>
            </ResponsiveContainer>
         </div>
      </div>
   );
};

export default AnalyticsPage;
