"use client";
import { useRouter } from "next/navigation";
import Button from "./components/Button";
import ContentFrame from "./components/ContentFrame";

const HomePage = () => {
   const router = useRouter();

   const handleGetStarted = () => {
      router.push("/login");
   };
   return (
      <div className="min-h-screen bg-yellow-300 flex items-center justify-center p-4">
         <ContentFrame className="max-w-md w-full" shadowSize="md">
            <h1 className="text-5xl font-black mb-6 text-black">WELCOME</h1>
            <p className="text-lg font-bold mb-8 text-gray-800">
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
