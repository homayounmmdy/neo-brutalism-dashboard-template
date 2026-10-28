import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import Alert from "../../app/components/Alert";

const meta: Meta<typeof Alert> = {
   title: "Components/Alert",
   component: Alert,
   tags: ["autodocs"],
   parameters: { layout: "centered" },
   decorators: [
      (Story) => (
         <div className="min-w-[320px] max-w-xl p-6">
            <Story />
         </div>
      ),
   ],
   argTypes: {
      variant: {
         control: "radio",
         options: [
            "alert-yellow",
            "alert-cyan",
            "alert-red",
            "alert-green",
            "alert-null",
         ],
         description:
            "Built-in color variant. Use `alert-null` to opt out and supply your own background via `className`.",
         table: { category: "Appearance" },
      },
      className: {
         control: "text",
         description:
            "Extra classes — e.g. `!bg-purple-300 dark:!bg-purple-700`.",
         table: { category: "Appearance" },
      },
      children: { control: "text", table: { category: "Content" } },
      onClose: { control: false, table: { category: "Content" } },
   },
   args: {
      variant: "alert-yellow",
      children: "This is an alert message.",
      // 👇 `fn()` is auto-spied and logged to the Actions panel
      onClose: fn(),
   },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/*                                    Base                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {};

/* -------------------------------------------------------------------------- */
/*                                  Variants                                  */
/* -------------------------------------------------------------------------- */

export const AllVariants: Story = {
   parameters: { controls: { disable: true } },
   render: (args) => (
      <div className="flex flex-col gap-4">
         <Alert
            {...args}
            variant="alert-yellow"
            children="Yellow — informational."
         />
         <Alert
            {...args}
            variant="alert-cyan"
            children="Cyan — informational."
         />
         <Alert
            {...args}
            variant="alert-red"
            children="Red — this is an error."
         />
         <Alert {...args} variant="alert-green" children="Green — success!" />
      </div>
   ),
};

/* -------------------------------------------------------------------------- */
/*                                 Dismissible                                */
/* -------------------------------------------------------------------------- */

/**
 * Click × to see `onClose` fire in the Actions panel. Because `onClose` is
 * `fn()` (not `action()`), the same spy can be asserted against in a future
 * `play` function without touching this file.
 */
export const WithClose: Story = {
   args: {
      variant: "alert-cyan",
      children: "Dismissible alert — click × to close.",
   },
};

/* -------------------------------------------------------------------------- */
/*                              Custom coloring                               */
/* -------------------------------------------------------------------------- */

/** Override a built-in variant with `!` utilities — keeps `.alert` layout. */
export const CustomColorOverride: Story = {
   args: {
      variant: "alert-yellow",
      className: "!bg-purple-300 dark:!bg-purple-700",
      children: "Custom purple background via className override.",
   },
};

/** Fully opt out with `alert-null` and supply your own background. */
export const CustomColorNull: Story = {
   args: {
      variant: "alert-null",
      className: "bg-orange-300 dark:bg-orange-700",
      children: "No built-in variant — background comes from className.",
   },
};

/* -------------------------------------------------------------------------- */
/*                                  Content                                   */
/* -------------------------------------------------------------------------- */

/** Multi-line content — confirms the flex row keeps the close button aligned. */
export const LongContent: Story = {
   args: {
      variant: "alert-yellow",
      children: (
         <>
            <strong className="mb-1 block">
               Your session is about to expire.
            </strong>
            <span className="font-medium">
               For security, you'll be logged out in 5 minutes. Save any work in
               progress now to avoid losing changes.
            </span>
         </>
      ),
   },
};

/* -------------------------------------------------------------------------- */
/*                                 Dark mode                                  */
/* -------------------------------------------------------------------------- */

export const DarkMode: Story = {
   decorators: [
      (Story) => (
         <div className="dark w-full rounded-none bg-gray-900 p-6">
            <Story />
         </div>
      ),
   ],
   args: {
      variant: "alert-green",
      children: "Dark mode alert.",
   },
};

/* -------------------------------------------------------------------------- */
/*                                   Toast                                    */
/* -------------------------------------------------------------------------- */

/**
 * Mirrors the real `AuthButton` logout alert — fixed to the bottom-right of
 * the viewport.
 */
export const Toast: Story = {
   parameters: { layout: "fullscreen", controls: { disable: true } },
   decorators: [],
   render: (args) => (
      <div className="relative h-[420px] w-full bg-gray-100 dark:bg-gray-950">
         <div className="fixed bottom-6 right-6 z-50">
            <Alert {...args} variant="alert-green">
               You&apos;ve been logged out. See you soon!
            </Alert>
         </div>
      </div>
   ),
};
