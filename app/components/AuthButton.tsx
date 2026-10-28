"use client";
import { useAuthButton } from "@/app/hooks/useAuthButton";
import Alert from "./Alert";
import Button from "./Button";

const AuthButton = () => {
   const {
      isAuthenticated,
      showLogoutAlert,
      handleLogout,
      handleDismiss,
      handleLogin,
   } = useAuthButton();

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
            <Button onClick={handleLogin} buttonSize="md" color="btn-green">
               Login
            </Button>
         )}
      </>
   );
};

export default AuthButton;
