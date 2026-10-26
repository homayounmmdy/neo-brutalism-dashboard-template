import type { Meta, StoryObj } from "@storybook/react";
import ContentFrame from "../../app/components/ContentFrame";

const meta = {
   title: "Components/ContentFrame",
   component: ContentFrame,
   tags: ["autodocs"],
   argTypes: {
      shadowSize: {
         control: "select",
         options: ["sm", "md", "lg", "xl"],
         description: "Size of the brutalist shadow",
      },
      className: {
         control: "text",
         description: "Additional Tailwind CSS classes",
      },
      children: {
         control: "text",
         description: "Content displayed inside the frame",
      },
   },
   args: {
      children: "Content Frame",
      shadowSize: "lg",
      className: "",
   },
} satisfies Meta<typeof ContentFrame>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SmallShadow: Story = {
   args: {
      shadowSize: "sm",
   },
};

export const MediumShadow: Story = {
   args: {
      shadowSize: "md",
   },
};

export const LargeShadow: Story = {
   args: {
      shadowSize: "lg",
   },
};

export const ExtraLargeShadow: Story = {
   args: {
      shadowSize: "xl",
   },
};

export const WithCustomContent: Story = {
   args: {
      shadowSize: "lg",
      children: (
         <div>
            <h2 className="text-2xl font-black">Brutalist Design</h2>
            <p className="mt-2">A bold frame with a solid black shadow.</p>
            <button className="mt-4 border-2 border-black bg-yellow-300 px-4 py-2 font-bold text-black">
               Explore
            </button>
         </div>
      ),
   },
};

export const WithCustomClasses: Story = {
   args: {
      shadowSize: "md",
      className: "max-w-md bg-yellow-300 text-black",
      children: "Custom styling with Tailwind CSS",
   },
};
