import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "../../app/components/Textarea";

const meta: Meta<typeof Textarea> = {
   title: "Components/Textarea",
   component: Textarea,
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
         description: "Ring color applied when the textarea is focused",
      },
      label: { control: "text" },
      placeholder: { control: "text" },
      disabled: { control: "boolean" },
      rows: {
         control: { type: "number", min: 1, max: 12, step: 1 },
         description: "Number of visible text lines",
      },
      className: { control: "text" },
   },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

/* ---------- Basic ---------- */
export const Default: Story = {
   args: {
      label: "Description",
      placeholder: "Write something...",
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
      label: "Bio",
      defaultValue: "Hello! I'm a frontend developer who loves building UI.",
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
export const Disabled: Story = {
   args: {
      label: "Disabled",
      placeholder: "Can't type here",
      disabled: true,
      focusColor: "focus-green",
   },
};

export const ReadOnly: Story = {
   args: {
      label: "Read only",
      defaultValue: "This content can't be edited.",
      readOnly: true,
      focusColor: "focus-cyan",
   },
};

/* ---------- Rows ---------- */
export const SmallRows: Story = {
   args: {
      label: "Small (2 rows)",
      placeholder: "Short note",
      rows: 2,
      focusColor: "focus-cyan",
   },
};

export const LargeRows: Story = {
   args: {
      label: "Large (8 rows)",
      placeholder: "Long message",
      rows: 8,
      focusColor: "focus-cyan",
   },
};

/* ---------- Showcase ---------- */
export const AllColors: Story = {
   render: () => (
      <div className="flex flex-col gap-4">
         <Textarea
            label="Yellow focus"
            placeholder="Focus me"
            focusColor="focus-yellow"
         />
         <Textarea
            label="Cyan focus"
            placeholder="Focus me"
            focusColor="focus-cyan"
         />
         <Textarea
            label="Red focus"
            placeholder="Focus me"
            focusColor="focus-red"
         />
         <Textarea
            label="Green focus"
            placeholder="Focus me"
            focusColor="focus-green"
         />
      </div>
   ),
};

export const SizesShowcase: Story = {
   render: () => (
      <div className="flex flex-col gap-4">
         <Textarea
            label="Small"
            placeholder="2 rows"
            rows={2}
            focusColor="focus-cyan"
         />
         <Textarea
            label="Default"
            placeholder="4 rows (default)"
            focusColor="focus-cyan"
         />
         <Textarea
            label="Large"
            placeholder="6 rows"
            rows={6}
            focusColor="focus-cyan"
         />
      </div>
   ),
};

export const StatesShowcase: Story = {
   render: () => (
      <div className="flex flex-col gap-4">
         <Textarea
            label="Normal"
            placeholder="Type here"
            focusColor="focus-cyan"
         />
         <Textarea
            label="With value"
            defaultValue="Pre-filled content goes here."
            focusColor="focus-cyan"
         />
         <Textarea
            label="Read only"
            defaultValue="You can't change this."
            readOnly
            focusColor="focus-cyan"
         />
         <Textarea
            label="Disabled"
            placeholder="Disabled"
            disabled
            focusColor="focus-cyan"
         />
      </div>
   ),
};
