import type { Meta, StoryObj } from "@storybook/react";
import SignUpPage from "../../app/(pages)/(auth)/signup/page";
import { AuthProvider } from "@/app/contexts/AuthContext";

const meta: Meta<typeof SignUpPage> = {
   title: "Pages/SignUpPage",
   component: SignUpPage,
   tags: ["autodocs"],
   parameters: {
      layout: "fullscreen",
      nextjs: {
         appDirectory: true,
         navigation: { pathname: "/signup" },
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
type Story = StoryObj<typeof SignUpPage>;

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
