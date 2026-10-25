import type { Meta, StoryObj } from "@storybook/react";
import AuthButton from "../../app/components/AuthButton";
import { AuthProvider } from "../../app/contexts/AuthContext";

const meta: Meta<typeof AuthButton> = {
   title: "Components/AuthButton",
   component: AuthButton,
   tags: ["autodocs"],
   parameters: {
      layout: "centered",
      docs: {
         description: {
            component:
               "Shows a Login button when the user is unauthenticated and a Logout button " +
               "when authenticated. Uses the real `AuthProvider`; the Next.js router is " +
               "mocked by the Storybook Next.js framework.",
         },
      },
   },
   decorators: [
      (Story, ctx) => {
         // Seed localStorage BEFORE AuthProvider mounts so its effect picks it up.
         if (typeof window !== "undefined") {
            if (ctx.parameters.isAuthenticated) {
               localStorage.setItem("isAuthenticated", "true");
            } else {
               localStorage.removeItem("isAuthenticated");
            }
         }

         return (
            <div
               style={{
                  padding: "2.5rem",
                  display: "grid",
                  placeItems: "center",
               }}
            >
               <AuthProvider>
                  <Story />
               </AuthProvider>
            </div>
         );
      },
   ],
};

export default meta;
type Story = StoryObj<typeof AuthButton>;

/* ---------- Visual states ---------- */

export const LoggedOut: Story = {
   parameters: {
      isAuthenticated: false,
      // "/" is a public route — nothing will redirect.
      nextjs: { appDirectory: true, navigation: { pathname: "/" } },
   },
};

export const LoggedIn: Story = {
   parameters: {
      isAuthenticated: true,
      // "/dashboard" is a PROTECTED route — no redirect fires.
      // If you used "/" here, AuthProvider's effect would push("/dashboard"),
      // which is harmless (router is mocked) but noisy in the Actions panel.
      nextjs: { appDirectory: true, navigation: { pathname: "/dashboard" } },
   },
};
