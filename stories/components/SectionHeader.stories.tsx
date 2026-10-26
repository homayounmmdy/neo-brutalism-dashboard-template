import type { Meta, StoryObj } from "@storybook/react";
import SectionHeader from "../../app/components/SectionHeader";

const meta: Meta<typeof SectionHeader> = {
   title: "Components/SectionHeader",
   component: SectionHeader,
   tags: ["autodocs"],
   parameters: {
      layout: "centered",
   },
   decorators: [
      (Story) => (
         <div className="min-w-[320px] p-6">
            <Story />
         </div>
      ),
   ],
   argTypes: {
      title: {
         control: "text",
         description: "Section heading text. Rendered uppercase.",
         table: { category: "Content" },
      },
      headSize: {
         control: "radio",
         options: ["sm", "md", "lg"],
         description: "Heading size. `md` is default.",
         table: { category: "Appearance" },
      },
      sectionClassName: {
         control: "text",
         description: "Extra classes on the wrapper — e.g. `mt-3`, `mx-auto`.",
         table: { category: "Appearance" },
      },
   },
   args: {
      title: "Users",
      headSize: "md",
   },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/*                                    Base                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {};

/* -------------------------------------------------------------------------- */
/*                                 Head sizes                                 */
/* -------------------------------------------------------------------------- */

export const Small: Story = {
   args: { headSize: "sm", title: "Small Heading" },
};

export const Large: Story = {
   args: { headSize: "lg", title: "Large Heading" },
};

/** All three sizes stacked — spot the difference without flipping controls. */
export const AllSizes: Story = {
   parameters: { controls: { disable: true } },
   render: (args) => (
      <div className="flex flex-col gap-6">
         <SectionHeader {...args} headSize="sm" title="Small" />
         <SectionHeader {...args} headSize="md" title="Medium" />
         <SectionHeader {...args} headSize="lg" title="Large" />
      </div>
   ),
};

/* -------------------------------------------------------------------------- */
/*                                 Wrapper                                    */
/* -------------------------------------------------------------------------- */

/** `sectionClassName` lets the caller position the header — e.g. `mt-3`, `mx-auto`. */
export const WithSectionClass: Story = {
   args: {
      title: "Centered Header",
      sectionClassName: "mx-auto",
   },
};

/* -------------------------------------------------------------------------- */
/*                                 Content                                    */
/* -------------------------------------------------------------------------- */

/** Long titles wrap; confirm the underline divider still behaves. */
export const LongTitle: Story = {
   args: {
      title: "A Very Long Section Title That Wraps Across Two Lines",
   },
};

/** Single short word — the initial underline (`w-20`) is most visible here. */
export const ShortTitle: Story = {
   args: { title: "Go" },
};

/* -------------------------------------------------------------------------- */
/*                               Dark mode                                    */
/* -------------------------------------------------------------------------- */

export const DarkMode: Story = {
   decorators: [
      (Story) => (
         <div className="dark w-full bg-gray-900 p-6">
            <Story />
         </div>
      ),
   ],
};

/* -------------------------------------------------------------------------- */
/*                                 Full page                                  */
/* -------------------------------------------------------------------------- */

/** Matches the real `UsersPage` shell — header + a placeholder content box. */
export const FullPage: Story = {
   parameters: { layout: "fullscreen", controls: { disable: true } },
   render: (args) => (
      <div className="p-6">
         <SectionHeader {...args} title="Users" sectionClassName="mt-3" />
         <div className="h-40 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-gray-800" />
      </div>
   ),
};
