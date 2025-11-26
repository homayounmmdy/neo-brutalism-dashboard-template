"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";

const AuthButton = () => {
   const router = useRouter();

   const { isAuthenticated, logout } = useAuth();
   const handleLogout = () => {
      logout();
      router.push("/");
   };

   return isAuthenticated ? (
      <Button onClick={handleLogout} buttonSize="md" color="btn-red">
         Logout
      </Button>
   ) : (
      <Button
         onClick={() => router.push("/login")}
         buttonSize="md"
         color="btn-green"
      >
         Login
      </Button>
   );
};

export default AuthButton;
