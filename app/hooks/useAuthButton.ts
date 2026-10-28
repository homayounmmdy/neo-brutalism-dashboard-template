"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const LOGOUT_ALERT_DURATION = 25000;

export const useAuthButton = () => {
   const router = useRouter();
   const { isAuthenticated, logout } = useAuth();
   const [showLogoutAlert, setShowLogoutAlert] = useState(false);
   const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

   const clearTimer = useCallback(() => {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
         timeoutRef.current = null;
      }
   }, []);

   // Clean up the pending timer on unmount
   useEffect(() => clearTimer, [clearTimer]);

   const handleLogout = useCallback(() => {
      logout();
      setShowLogoutAlert(true);
      clearTimer();
      timeoutRef.current = setTimeout(() => {
         setShowLogoutAlert(false);
         router.push("/");
      }, LOGOUT_ALERT_DURATION);
   }, [logout, router, clearTimer]);

   const handleDismiss = useCallback(() => {
      clearTimer();
      setShowLogoutAlert(false);
      router.push("/");
   }, [router, clearTimer]);

   const handleLogin = useCallback(() => {
      router.push("/login");
   }, [router]);

   return {
      isAuthenticated,
      showLogoutAlert,
      handleLogout,
      handleDismiss,
      handleLogin,
   };
};
