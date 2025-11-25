"use client";
import Button from "@/app/components/Button";
import ContentFrame from "@/app/components/ContentFrame";
import Input from "@/app/components/Input";
import InputErrorMessage from "@/app/components/InputErrorMessage";
import { useAuth } from "@/app/contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface LoginForm {
   email: string;
   password: string;
}
const LoginPage = () => {
   const router = useRouter();
   const { login } = useAuth();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginForm>();

   const onLoginSubmit = () => {
      login();
      router.push("/dashboard");
   };
   return (
      <div className="min-h-screen bg-pink-400 flex items-center justify-center p-4">
         <ContentFrame className=" p-8 max-w-md w-full ">
            <h2 className="text-4xl font-black mb-6 text-black">LOGIN</h2>

            <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-6">
               <div>
                  <Input
                     type="email"
                     {...register("email", {
                        required: "Email is required",
                        pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: "Invalid email address",
                        },
                     })}
                     id="email"
                     label="EMAIL"
                     focusColor="focus-yellow"
                  />
                  {errors.email && (
                     <InputErrorMessage>
                        {errors.email.message}
                     </InputErrorMessage>
                  )}
               </div>

               <div>
                  <Input
                     type="password"
                     {...register("password", {
                        required: "Password is required",
                        minLength: {
                           value: 6,
                           message: "Password must be at least 6 characters",
                        },
                     })}
                     id="password"
                     label="PASSWORD"
                     focusColor="focus-yellow"
                  />
                  {errors.password && (
                     <InputErrorMessage>
                        {errors.password.message}
                     </InputErrorMessage>
                  )}
               </div>

               <Button type="submit" color="btn-yellow" className="w-full   ">
                  LOGIN NOW
               </Button>
            </form>

            <div className="mt-6 text-center">
               <Link
                  href="/signup"
                  className="font-black  text-black underline hover:text-gray-700 transition-all"
               >
                  Do not have an account? SIGN UP
               </Link>
            </div>
         </ContentFrame>
      </div>
   );
};

export default LoginPage;
