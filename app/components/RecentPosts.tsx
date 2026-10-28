import { useFetchPosts } from "../hooks/useFetch";
import ContentFrame from "./ContentFrame";

const RecentPosts = () => {
   const { data: posts, isLoading, error } = useFetchPosts();

   const recentPosts = posts?.slice(0, 5) || [];

   return (
      <ContentFrame className="p-3! md:p-8" shadowSize="sm">
         <h2 className="mb-4 text-3xl font-black uppercase text-black dark:text-white">
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
                  className="border-4 border-black bg-purple-100 p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-purple-900 md:p-4"
               >
                  <h3 className="mb-2 text-lg font-black text-black dark:text-white">
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
