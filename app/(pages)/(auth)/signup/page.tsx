"use client";
import Button from "@/app/components/Button";
import ContentFrame from "@/app/components/ContentFrame";
import Input from "@/app/components/Input";
import InputErrorMessage from "@/app/components/InputErrorMessage";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface SignupForm {
   username: string;
   email: string;
   password: string;
   confirmPassword: string;
}
const SingUpPage = () => {
   const router = useRouter();
   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm<SignupForm>();

   const onSignupSubmit = () => {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard");
   };
   return (
      <div className="min-h-screen bg-green-400 flex items-center justify-center p-4">
         <ContentFrame className="p-8 max-w-md w-full ">
            <h2 className="text-4xl font-black mb-6 text-black">SIGN UP</h2>

            <form onSubmit={handleSubmit(onSignupSubmit)} className="space-y-6">
               <div>
                  <label className="block text-sm font-black mb-2 text-black">
                     USERNAME
                  </label>
                  <Input
                     type="text"
                     {...register("username", {
                        required: "Username is required",
                        minLength: {
                           value: 3,
                           message: "Username must be at least 3 characters",
                        },
                     })}
                     focusColor="focus-cyan"
                  />
                  {errors.username && (
                     <InputErrorMessage>
                        {errors.username.message}
                     </InputErrorMessage>
                  )}
               </div>

               <div>
                  <label className="block text-sm font-black mb-2 text-black">
                     EMAIL
                  </label>
                  <Input
                     type="email"
                     {...register("email", {
                        required: "Email is required",
                        pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: "Invalid email address",
                        },
                     })}
                     focusColor="focus-cyan"
                  />
                  {errors.email && (
                     <InputErrorMessage>
                        {errors.email.message}
                     </InputErrorMessage>
                  )}
               </div>

               <div>
                  <label className="block text-sm font-black mb-2 text-black">
                     PASSWORD
                  </label>
                  <Input
                     type="password"
                     {...register("password", {
                        required: "Password is required",
                        minLength: {
                           value: 8,
                           message: "Password must be at least 8 characters",
                        },
                     })}
                     focusColor="focus-cyan"
                  />
                  {errors.password && (
                     <InputErrorMessage>
                        {errors.password.message}
                     </InputErrorMessage>
                  )}
               </div>

               <div>
                  <label className="block text-sm font-black mb-2 text-black">
                     CONFIRM PASSWORD
                  </label>
                  <Input
                     type="password"
                     {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (val: string) => {
                           if (watch("password") !== val) {
                              return "Passwords do not match";
                           }
                        },
                     })}
                     focusColor="focus-cyan"
                  />
                  {errors.confirmPassword && (
                     <InputErrorMessage>
                        {errors.confirmPassword.message}
                     </InputErrorMessage>
                  )}
               </div>

               <Button type="submit" color="btn-cyan" className="w-full">
                  CREATE ACCOUNT
               </Button>
            </form>

            <div className="mt-6 text-center">
               <Button
                  onClick={() => router.push("login")}
                  color="btn-null"
                  className="font-bold text-black underline hover:text-gray-700"
               >
                  Already have an account? LOGIN
               </Button>
            </div>
         </ContentFrame>
      </div>
   );
};

export default SingUpPage;
