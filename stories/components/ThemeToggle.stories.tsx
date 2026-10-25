import type { Meta, StoryObj } from "@storybook/react";
import ThemeToggle from "../../app/components/ThemeToggle";

const meta: Meta<typeof ThemeToggle> = {
   title: "Components/ThemeToggle",
   component: ThemeToggle,
   tags: ["autodocs"],
   parameters: {
      layout: "centered",
      docs: {
         description: {
            component:
               "Toggle button that flips the app between light and dark mode. " +
               "The `useTheme` hook is mocked via `sb.mock` in `.storybook/preview.ts`.",
         },
      },
   },
   decorators: [
      (Story, ctx) => {
         const initial = (ctx.parameters.theme as "light" | "dark") ?? "light";
         if (typeof document !== "undefined") {
            document.documentElement.classList.toggle(
               "dark",
               initial === "dark"
            );
         }
         return (
            <div
               className={initial === "dark" ? "dark" : ""}
               style={{
                  padding: "2.5rem",
                  display: "grid",
                  placeItems: "center",
               }}
            >
               <Story />
            </div>
         );
      },
   ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

/* ---------- Visual states ---------- */

export const Light: Story = {
   parameters: { theme: "light" },
};

export const Dark: Story = {
   parameters: { theme: "dark" },
};
