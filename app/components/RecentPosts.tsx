import { useFetchPosts } from "../hook/useFetch";
import ContentFrame from "./ContentFrame";

const RecentPosts = () => {
   const { data: posts, isLoading, error } = useFetchPosts();

   const recentPosts = posts?.slice(0, 5) || [];
   return (
      <ContentFrame className="p-3! md:p-8">
         <h2 className="text-3xl font-black mb-4 uppercase">Recent Posts</h2>
         {isLoading && <p className="font-bold">Loading posts...</p>}
         {error && (
            <p className="font-bold text-red-600">Error loading posts!</p>
         )}
         <div className="space-y-3">
            {recentPosts.map((post) => (
               <div
                  key={post.id}
                  className="bg-purple-100 border-4 border-black p-2 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
               >
                  <h3 className="font-black text-lg mb-2">{post.title}</h3>
                  <p className="text-sm font-medium">
                     {post.body.substring(0, 100)}...
                  </p>
               </div>
            ))}
         </div>
      </ContentFrame>
   );
};

export default RecentPosts;
