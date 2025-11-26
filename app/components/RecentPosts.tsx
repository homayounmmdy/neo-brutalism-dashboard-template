import { useFetchPosts } from "../hook/useFetch";
import ContentFrame from "./ContentFrame";

const RecentPosts = () => {
   const { data: posts, isLoading, error } = useFetchPosts();

   const recentPosts = posts?.slice(0, 5) || [];

   return (
      <ContentFrame className="p-3! md:p-8">
         <h2 className="text-3xl font-black mb-4 uppercase text-black dark:text-white">
            Recent Posts
         </h2>
         {isLoading && (
            <p className="font-bold text-gray-700 dark:text-gray-300">
               Loading posts...
            </p>
         )}
         {error && (
            <p className="font-bold text-red-600 dark:text-red-400">
               Error loading posts!
            </p>
         )}
         <div className="space-y-3">
            {recentPosts.map((post) => (
               <div
                  key={post.id}
                  className="bg-purple-100 dark:bg-purple-900 border-4 border-black p-2 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] duration-200"
               >
                  <h3 className="font-black text-lg mb-2 text-black dark:text-white">
                     {post.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                     {post.body.substring(0, 100)}...
                  </p>
               </div>
            ))}
         </div>
      </ContentFrame>
   );
};

export default RecentPosts;
