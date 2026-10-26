import type { Meta, StoryObj } from "@storybook/react";
import Stat from "../../app/components/Stat";
import { StatType } from "../../app/types/StatType";

const meta: Meta<typeof Stat> = {
   title: "Components/Stat",
   component: Stat,
   tags: ["autodocs"],
   parameters: {
      layout: "centered",
   },
   decorators: [
      // Give the stat some breathing room inside the canvas.
      (Story) => (
         <div className="p-6">
            <Story />
         </div>
      ),
   ],
   argTypes: {
      variant: {
         control: "select",
         options: [
            "stat-yellow",
            "stat-cyan",
            "stat-red",
            "stat-green",
            "stat-lime",
            "stat-pink",
            "stat-null",
         ],
         description:
            "Built-in color variant. Use `stat-null` to opt out and supply your own bg via `className`.",
         table: { category: "Appearance" },
      },
      className: {
         control: "text",
         description:
            "Extra classes — e.g. `!bg-purple-300 dark:!bg-purple-700` to override a built-in variant.",
         table: { category: "Appearance" },
      },
      label: { control: "text", table: { category: "Content" } },
      value: { control: "text", table: { category: "Content" } },
      children: { control: false, table: { category: "Content" } },
   },
   args: {
      label: "Total Posts",
      value: 128,
      variant: "stat-lime",
   },
};

export default meta;
type Story = StoryObj<typeof Stat>;

/* -------------------------------------------------------------------------- */
/*                                    Base                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {};

/* -------------------------------------------------------------------------- */
/*                                  Variants                                  */
/* -------------------------------------------------------------------------- */

const VARIANTS: NonNullable<StatType["variant"]>[] = [
   "stat-lime",
   "stat-pink",
   "stat-cyan",
   "stat-yellow",
   "stat-red",
   "stat-green",
];

export const AllVariants: Story = {
   parameters: { controls: { disable: true } },
   render: (args) => (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
         {VARIANTS.map((variant) => (
            <Stat
               key={variant}
               {...args}
               variant={variant}
               label={variant.replace("stat-", "")}
            />
         ))}
      </div>
   ),
};

/* -------------------------------------------------------------------------- */
/*                              Custom coloring                               */
/* -------------------------------------------------------------------------- */

/** Override a built-in variant with `!` utilities. */
export const CustomColorOverride: Story = {
   args: {
      label: "Custom",
      value: "42",
      variant: "stat-lime",
      className: "!bg-purple-300 dark:!bg-purple-700",
   },
};

/** Opt out entirely with `stat-null` and provide your own background. */
export const CustomColorNull: Story = {
   args: {
      label: "Custom",
      value: "42",
      variant: "stat-null",
      className: "bg-orange-300 dark:bg-orange-700",
   },
};

/* -------------------------------------------------------------------------- */
/*                                  Content                                   */
/* -------------------------------------------------------------------------- */

/** Stat accepts `children` so you can add badges, icons, hints, etc. */
export const WithChildren: Story = {
   args: {
      label: "Engagement",
      value: "87%",
      variant: "stat-cyan",
   },
   render: (args) => (
      <Stat {...args}>
         <p className="mt-1 text-xs font-bold text-black/70 dark:text-white/70">
            +12% vs last week
         </p>
      </Stat>
   ),
};

/** Very long values — demonstrates the layout doesn't break. */
export const LongValue: Story = {
   args: {
      label: "Total Posts",
      value: "1,234,567",
      variant: "stat-yellow",
   },
};

/* -------------------------------------------------------------------------- */
/*                               Dark mode                                    */
/* -------------------------------------------------------------------------- */

/**
 * Wraps the story in a `.dark` container so the `@custom-variant dark` rule
 * (`&:where(.dark, .dark *)`) kicks in without needing the theme addon.
 */
export const DarkMode: Story = {
   args: {
      label: "Active Users",
      value: "182",
      variant: "stat-pink",
   },
   decorators: [
      (Story) => (
         <div className="dark bg-gray-900 p-6">
            <Story />
         </div>
      ),
   ],
};

/* -------------------------------------------------------------------------- */
/*                              Real-world grid                               */
/* -------------------------------------------------------------------------- */

/** Mirrors the layout used in `Stats.tsx`. */
export const Grid: Story = {
   parameters: { layout: "fullscreen", controls: { disable: true } },
   render: () => {
      const stats: StatType[] = [
         { label: "Total Posts", value: 128, variant: "stat-lime" },
         { label: "Active Users", value: "182", variant: "stat-pink" },
         { label: "Engagement", value: "74%", variant: "stat-cyan" },
         { label: "Growth", value: "+23%", variant: "stat-yellow" },
      ];

      return (
         <div className="grid grid-cols-2 gap-4 p-6 lg:grid-cols-4">
            {stats.map((stat, idx) => (
               <Stat key={idx} {...stat} />
            ))}
         </div>
      );
   },
};
