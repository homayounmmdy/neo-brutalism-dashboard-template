import type { Meta, StoryObj } from "@storybook/react";
import InputErrorMessage from "../../app/components/InputErrorMessage";

const meta: Meta<typeof InputErrorMessage> = {
   title: "Components/InputErrorMessage",
   component: InputErrorMessage,
   tags: ["autodocs"],
   parameters: {
      layout: "centered",
   },
   decorators: [
      (Story) => (
         <div style={{ width: "360px" }}>
            <Story />
         </div>
      ),
   ],
   argTypes: {
      children: {
         control: "text",
         description: "The error message content",
      },
   },
};

export default meta;
type Story = StoryObj<typeof InputErrorMessage>;

/* ---------- Basic ---------- */
export const Default: Story = {
   args: {
      children: "This field is required.",
   },
};

export const ShortMessage: Story = {
   args: {
      children: "Required",
   },
};

export const LongMessage: Story = {
   args: {
      children:
         "Your password must contain at least 8 characters, one uppercase letter, one number, and one special character.",
   },
};

export const MultiLine: Story = {
   render: () => (
      <InputErrorMessage>
         <span className="block">• Password must be at least 8 characters</span>
         <span className="block">• Must contain one number</span>
         <span className="block">• Must contain one special character</span>
      </InputErrorMessage>
   ),
};

export const WithHtmlContent: Story = {
   render: () => (
      <InputErrorMessage>
         Invalid email — try <strong>again</strong> or{" "}
         <a href="#" className="underline">
            reset your password
         </a>
         .
      </InputErrorMessage>
   ),
};

/* ---------- Realistic usage ---------- */
export const WithInput: Story = {
   render: () => (
      <div className="flex flex-col gap-4">
         <div>
            <label
               htmlFor="email-error"
               className="mb-2 block text-sm font-black text-black transition-colors dark:text-gray-200"
            >
               Email
            </label>
            <input
               id="email-error"
               type="email"
               defaultValue="not-an-email"
               className="input focus-red"
            />
            <InputErrorMessage>
               Please enter a valid email address.
            </InputErrorMessage>
         </div>

         <div>
            <label
               htmlFor="name-ok"
               className="mb-2 block text-sm font-black text-black transition-colors dark:text-gray-200"
            >
               Name
            </label>
            <input
               id="name-ok"
               type="text"
               defaultValue="John"
               className="input focus-green"
            />
         </div>
      </div>
   ),
};

/* ---------- Dark mode ---------- */
export const DarkMode: Story = {
   args: {
      children: "This field is required.",
   },
   decorators: [
      (Story) => (
         <div className="dark bg-gray-900 p-6" style={{ width: "360px" }}>
            <Story />
         </div>
      ),
   ],
};
