import type { Meta, StoryObj } from "@storybook/react";
import Input from "../../app/components/Input";

const meta: Meta<typeof Input> = {
   title: "Components/Input",
   component: Input,
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
      focusColor: {
         control: "select",
         options: ["focus-yellow", "focus-cyan", "focus-red", "focus-green"],
         description: "Ring color applied when the input is focused",
      },
      label: { control: "text" },
      placeholder: { control: "text" },
      disabled: { control: "boolean" },
      type: {
         control: "select",
         options: ["text", "email", "password", "number", "tel", "url"],
      },
      className: { control: "text" },
   },
};

export default meta;
type Story = StoryObj<typeof Input>;

/* ---------- Basic ---------- */
export const Default: Story = {
   args: {
      label: "Username",
      placeholder: "Enter your username",
      focusColor: "focus-cyan",
   },
};

export const WithoutLabel: Story = {
   args: {
      placeholder: "No label here",
      focusColor: "focus-yellow",
   },
};

export const WithValue: Story = {
   args: {
      label: "Email",
      type: "email",
      defaultValue: "hello@example.com",
      focusColor: "focus-cyan",
   },
};

/* ---------- Focus variants ---------- */
export const Yellow: Story = {
   args: {
      label: "Yellow focus",
      placeholder: "Focus me",
      focusColor: "focus-yellow",
   },
};

export const Cyan: Story = {
   args: {
      label: "Cyan focus",
      placeholder: "Focus me",
      focusColor: "focus-cyan",
   },
};

export const Red: Story = {
   args: {
      label: "Red focus",
      placeholder: "Focus me",
      focusColor: "focus-red",
   },
};

export const Green: Story = {
   args: {
      label: "Green focus",
      placeholder: "Focus me",
      focusColor: "focus-green",
   },
};

/* ---------- States ---------- */
export const Password: Story = {
   args: {
      label: "Password",
      placeholder: "Enter password",
      type: "password",
      focusColor: "focus-red",
   },
};

export const Disabled: Story = {
   args: {
      label: "Disabled",
      placeholder: "Can't type here",
      disabled: true,
      focusColor: "focus-green",
   },
};

/* ---------- Showcase ---------- */
export const AllColors: Story = {
   render: () => (
      <div className="flex flex-col gap-4">
         <Input
            label="Yellow focus"
            placeholder="Focus me"
            focusColor="focus-yellow"
         />
         <Input
            label="Cyan focus"
            placeholder="Focus me"
            focusColor="focus-cyan"
         />
         <Input
            label="Red focus"
            placeholder="Focus me"
            focusColor="focus-red"
         />
         <Input
            label="Green focus"
            placeholder="Focus me"
            focusColor="focus-green"
         />
      </div>
   ),
};

export const TypesShowcase: Story = {
   render: () => (
      <div className="flex flex-col gap-4">
         <Input label="Text" placeholder="Text input" focusColor="focus-cyan" />
         <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            focusColor="focus-cyan"
         />
         <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            focusColor="focus-cyan"
         />
         <Input
            label="Number"
            type="number"
            placeholder="42"
            focusColor="focus-cyan"
         />
         <Input
            label="Tel"
            type="tel"
            placeholder="+1 555 000 0000"
            focusColor="focus-cyan"
         />
      </div>
   ),
};
