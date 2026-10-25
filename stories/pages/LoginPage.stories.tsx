import type { Meta, StoryObj } from "@storybook/react";
import LoginPage from "../../app/(pages)/(auth)/login/page";
import { AuthProvider } from "@/app/contexts/AuthContext";

const meta: Meta<typeof LoginPage> = {
   title: "Pages/LoginPage",
   component: LoginPage,
   tags: ["autodocs"],
   parameters: {
      // Full-page layout — the page renders its own min-h-screen wrapper.
      layout: "fullscreen",
      // Register the route so usePathname()/useRouter() behave realistically.
      nextjs: {
         appDirectory: true,
         navigation: { pathname: "/login" },
      },
      docs: {
         description: {
            component:
               "Login page with email and password fields. Uses `react-hook-form` for " +
               "validation and the app's real `AuthProvider` for the login flow. " +
               "Next.js routing is handled by the Storybook Next.js framework.",
         },
      },
   },
   decorators: [
      (Story) => (
         <AuthProvider>
            <Story />
         </AuthProvider>
      ),
   ],
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

/* ---------- Visual states ---------- */

export const Default: Story = {};

export const Mobile: Story = {
   globals: {
      viewport: { value: "mobile1", isRotated: false },
   },
};

export const Tablet: Story = {
   globals: {
      viewport: { value: "tablet", isRotated: false },
   },
};

export const Desktop: Story = {
   globals: {
      viewport: { value: "desktop", isRotated: false },
   },
};

export const DarkMode: Story = {
   decorators: [
      (Story) => (
         <div className="dark">
            <AuthProvider>
               <Story />
            </AuthProvider>
         </div>
      ),
   ],
};
