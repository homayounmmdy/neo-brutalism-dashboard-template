import { useQuery } from "@tanstack/react-query";

type Post = {
   id: number;
   title: string;
   body: string;
   userId: number;
};

const RecentPosts = () => {
   const fetchPosts = async (): Promise<Post[]> => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Failed to fetch posts");
      return res.json();
   };
   const {
      data: posts,
      isLoading,
      error,
   } = useQuery({
      queryKey: ["posts"],
      queryFn: fetchPosts,
   });

   const recentPosts = posts?.slice(0, 5) || [];
   return (
      <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
         <h2 className="text-3xl font-black mb-4 uppercase">Recent Posts</h2>
         {isLoading && <p className="font-bold">Loading posts...</p>}
         {error && (
            <p className="font-bold text-red-600">Error loading posts!</p>
         )}
         <div className="space-y-3">
            {recentPosts.map((post) => (
               <div
                  key={post.id}
                  className="bg-purple-100 border-4 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
               >
                  <h3 className="font-black text-lg mb-2">{post.title}</h3>
                  <p className="text-sm font-medium">
                     {post.body.substring(0, 100)}...
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default RecentPosts;
