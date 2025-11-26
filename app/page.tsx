"use client";
import { useRouter } from "next/navigation";
import Button from "./components/Button";
import ContentFrame from "./components/ContentFrame";
import SectionHeader from "./components/SectionHeader";

const HomePage = () => {
   const router = useRouter();

   const handleGetStarted = () => {
      router.push("/login");
   };
   return (
      <div className="min-h-screen dark:bg-purple-900 bg-yellow-300 flex items-center justify-center p-4 transition-colors duration-300">
         <ContentFrame className="max-w-md w-full" shadowSize="md">
            <SectionHeader title="WELCOME" headSize="sm" />
            <p className="text-lg font-bold mb-8 dark:text-gray-300 text-gray-800">
               This is the home page. You need to login to access the dashboard!
            </p>
            <Button
               onClick={handleGetStarted}
               color="btn-cyan"
               className="w-full"
            >
               GET STARTED
            </Button>
         </ContentFrame>
      </div>
   );
};

export default HomePage;
