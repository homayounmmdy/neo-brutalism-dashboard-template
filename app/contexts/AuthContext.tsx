"use client";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
   isAuthenticated: boolean;
   login: () => void;
   logout: () => void;
   isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: React.PropsWithChildren) {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   const pathname = usePathname();
   const router = useRouter();
   const publicRoutes = ["/", "/login", "/signup"];
   useEffect(() => {
      const authStatus = localStorage.getItem("isAuthenticated");
      if (authStatus == "true" && publicRoutes.includes(pathname)) {
         router.push("/dashboard");
      }
      setIsAuthenticated(authStatus == "true");
      setIsLoading(false);
   }, []);

   const login = () => {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
   };

   const logout = () => {
      localStorage.removeItem("isAuthenticated");
      setIsAuthenticated(false);
   };

   return (
      <AuthContext.Provider
         value={{ isAuthenticated, login, logout, isLoading }}
      >
         {children}
      </AuthContext.Provider>
   );
}
export function useAuth() {
   const context = useContext(AuthContext);
   if (context === undefined) {
      throw new Error("useAuth must be used within an AuthProvider");
   }
   return context;
}
