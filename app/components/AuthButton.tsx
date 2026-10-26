"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Alert from "./Alert";
import Button from "./Button";

const AuthButton = () => {
   const router = useRouter();
   const { isAuthenticated, logout } = useAuth();
   const [showLogoutAlert, setShowLogoutAlert] = useState(false);

   const handleLogout = () => {
      logout();
      setShowLogoutAlert(true);
      setTimeout(() => {
         setShowLogoutAlert(false);
         router.push("/");
      }, 25000);
   };

   const handleDismiss = () => {
      setShowLogoutAlert(false);
      router.push("/");
   };

   return (
      <>
         {showLogoutAlert && (
            <div className="fixed bottom-6 right-6 z-50">
               <Alert variant="alert-green" onClose={handleDismiss}>
                  You&apos;ve been logged out. See you soon!
               </Alert>
            </div>
         )}

         {isAuthenticated ? (
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
         )}
      </>
   );
};

export default AuthButton;
