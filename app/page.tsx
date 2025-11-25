"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./components/Button";
import ContentFrame from "./components/ContentFrame";
import InputErrorMessage from "./components/InputErrorMessage";

type Page = "home" | "login" | "signup" | "dashboard";

interface LoginForm {
   email: string;
   password: string;
}

interface SignupForm {
   username: string;
   email: string;
   password: string;
   confirmPassword: string;
}

const App = () => {
   const [currentPage, setCurrentPage] = useState<Page>("home");
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   // Login form
   const {
      register: registerLogin,
      handleSubmit: handleSubmitLogin,
      formState: { errors: errorsLogin },
   } = useForm<LoginForm>();

   // Signup form
   const {
      register: registerSignup,
      handleSubmit: handleSubmitSignup,
      formState: { errors: errorsSignup },
      watch,
   } = useForm<SignupForm>();

   const onLoginSubmit = (data: LoginForm) => {
      console.log("Login data:", data);
      setIsAuthenticated(true);
      setCurrentPage("dashboard");
   };

   const onSignupSubmit = (data: SignupForm) => {
      console.log("Signup data:", data);
      setIsAuthenticated(true);
      setCurrentPage("dashboard");
   };

   const handleLogout = () => {
      setIsAuthenticated(false);
      setCurrentPage("home");
   };

   const handleHomeNavigation = () => {
      if (isAuthenticated) {
         setCurrentPage("dashboard");
      } else {
         setCurrentPage("login");
      }
   };

   // Home Page
   const HomePage = () => (
      <div className="min-h-screen bg-yellow-300 flex items-center justify-center p-4">
         <ContentFrame className="max-w-md w-full" shadowSize="md">
            <h1 className="text-5xl font-black mb-6 text-black">WELCOME</h1>
            <p className="text-lg font-bold mb-8 text-gray-800">
               This is the home page. You need to login to access the dashboard!
            </p>
            <Button
               onClick={handleHomeNavigation}
               color="btn-cyan"
               className="w-full   "
            >
               GET STARTED
            </Button>
         </ContentFrame>
      </div>
   );

   // Login Page
   const LoginPage = () => (
      <div className="min-h-screen bg-pink-400 flex items-center justify-center p-4">
         <ContentFrame className=" p-8 max-w-md w-full ">
            <h2 className="text-4xl font-black mb-6 text-black">LOGIN</h2>

            <form
               onSubmit={handleSubmitLogin(onLoginSubmit)}
               className="space-y-6"
            >
               <div>
                  <label className="block text-sm font-black mb-2 text-black">
                     EMAIL
                  </label>
                  <input
                     type="email"
                     {...registerLogin("email", {
                        required: "Email is required",
                        pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: "Invalid email address",
                        },
                     })}
                     className="w-full border-4 border-black px-4 py-2 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  />
                  {errorsLogin.email && (
                     <InputErrorMessage>
                        {errorsLogin.email.message}
                     </InputErrorMessage>
                  )}
               </div>

               <div>
                  <label className="block text-sm font-black mb-2 text-black">
                     PASSWORD
                  </label>
                  <input
                     type="password"
                     {...registerLogin("password", {
                        required: "Password is required",
                        minLength: {
                           value: 6,
                           message: "Password must be at least 6 characters",
                        },
                     })}
                     className="w-full border-4 border-black px-4 py-2 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  />
                  {errorsLogin.password && (
                     <InputErrorMessage>
                        {errorsLogin.password.message}
                     </InputErrorMessage>
                  )}
               </div>

               <Button type="submit" color="btn-yellow" className="w-full   ">
                  LOGIN NOW
               </Button>
            </form>

            <div className="mt-6 text-center">
               <Button
                  onClick={() => setCurrentPage("signup")}
                  color="btn-null"
                  className="font-bold text-black underline hover:text-gray-700"
               >
                  Do not have an account? SIGN UP
               </Button>
            </div>
         </ContentFrame>
      </div>
   );

   // Signup Page
   const SignupPage = () => (
      <div className="min-h-screen bg-green-400 flex items-center justify-center p-4">
         <ContentFrame className="p-8 max-w-md w-full ">
            <h2 className="text-4xl font-black mb-6 text-black">SIGN UP</h2>

            <form
               onSubmit={handleSubmitSignup(onSignupSubmit)}
               className="space-y-6"
            >
               <div>
                  <label className="block text-sm font-black mb-2 text-black">
                     USERNAME
                  </label>
                  <input
                     type="text"
                     {...registerSignup("username", {
                        required: "Username is required",
                        minLength: {
                           value: 3,
                           message: "Username must be at least 3 characters",
                        },
                     })}
                     className="w-full border-4 border-black px-4 py-2 font-bold focus:outline-none focus:ring-4 focus:ring-cyan-300"
                  />
                  {errorsSignup.username && (
                     <InputErrorMessage>
                        {errorsSignup.username.message}
                     </InputErrorMessage>
                  )}
               </div>

               <div>
                  <label className="block text-sm font-black mb-2 text-black">
                     EMAIL
                  </label>
                  <input
                     type="email"
                     {...registerSignup("email", {
                        required: "Email is required",
                        pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: "Invalid email address",
                        },
                     })}
                     className="w-full border-4 border-black px-4 py-2 font-bold focus:outline-none focus:ring-4 focus:ring-cyan-300"
                  />
                  {errorsSignup.email && (
                     <InputErrorMessage>
                        {errorsSignup.email.message}
                     </InputErrorMessage>
                  )}
               </div>

               <div>
                  <label className="block text-sm font-black mb-2 text-black">
                     PASSWORD
                  </label>
                  <input
                     type="password"
                     {...registerSignup("password", {
                        required: "Password is required",
                        minLength: {
                           value: 8,
                           message: "Password must be at least 8 characters",
                        },
                     })}
                     className="w-full border-4 border-black px-4 py-2 font-bold focus:outline-none focus:ring-4 focus:ring-cyan-300"
                  />
                  {errorsSignup.password && (
                     <InputErrorMessage>
                        {errorsSignup.password.message}
                     </InputErrorMessage>
                  )}
               </div>

               <div>
                  <label className="block text-sm font-black mb-2 text-black">
                     CONFIRM PASSWORD
                  </label>
                  <input
                     type="password"
                     {...registerSignup("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (val: string) => {
                           if (watch("password") !== val) {
                              return "Passwords do not match";
                           }
                        },
                     })}
                     className="w-full border-4 border-black px-4 py-2 font-bold focus:outline-none focus:ring-4 focus:ring-cyan-300"
                  />
                  {errorsSignup.confirmPassword && (
                     <InputErrorMessage>
                        {errorsSignup.confirmPassword.message}
                     </InputErrorMessage>
                  )}
               </div>

               <Button type="submit" color="btn-cyan" className="w-full">
                  CREATE ACCOUNT
               </Button>
            </form>

            <div className="mt-6 text-center">
               <Button
                  onClick={() => setCurrentPage("login")}
                  color="btn-null"
                  className="font-bold text-black underline hover:text-gray-700"
               >
                  Already have an account? LOGIN
               </Button>
            </div>
         </ContentFrame>
      </div>
   );

   // Dashboard Page
   const DashboardPage = () => (
      <div className="min-h-screen bg-purple-400 p-8">
         <div className="max-w-4xl mx-auto">
            <ContentFrame>
               <h2 className="text-5xl font-black mb-6 text-black">
                  DASHBOARD
               </h2>
               <p className="text-xl font-bold mb-8 text-gray-800">
                  🎉 Welcome! You are successfully logged in.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-yellow-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                     <h3 className="text-2xl font-black mb-2">STATS</h3>
                     <p className="font-bold text-4xl">42</p>
                  </div>
                  <div className="bg-pink-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                     <h3 className="text-2xl font-black mb-2">TASKS</h3>
                     <p className="font-bold text-4xl">12</p>
                  </div>
               </div>

               <Button
                  onClick={handleLogout}
                  color="btn-red"
                  className=" text-white    "
               >
                  LOGOUT
               </Button>
            </ContentFrame>
         </div>
      </div>
   );

   return (
      <>
         {currentPage === "home" && <HomePage />}
         {currentPage === "login" && <LoginPage />}
         {currentPage === "signup" && <SignupPage />}
         {currentPage === "dashboard" && <DashboardPage />}
      </>
   );
};

export default App;
