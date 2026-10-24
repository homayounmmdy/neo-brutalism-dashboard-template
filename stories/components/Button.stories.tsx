import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import Button from "../../app/components/Button";

/**
 * These must be exactly the class names defined in globals.css.
 * They match `\`btn-${ColorsVariant}\` | "btn-null"` from ButtonType.
 */
const COLORS = ["btn-yellow", "btn-cyan", "btn-red", "btn-green"] as const;

/**
 * Must match `ButtonType["buttonSize"]` (sm | md | lg | xl).
 * The component also has an `xs` entry in its size map, but it's not in the
 * public type — if you want `xs` in Storybook, add it to ButtonType first.
 */
const SIZES = ["sm", "md", "lg", "xl"] as const;

const meta = {
   title: "Components/Button",
   component: Button,
   tags: ["autodocs"],
   parameters: {
      layout: "centered",
      docs: {
         description: {
            component:
               "A thin wrapper around the native `<button>`. It composes the `btn` base class, " +
               "a `color` class (`btn-yellow | btn-cyan | btn-red | btn-green | btn-null`), " +
               "a size class, and any extra `className` you pass in. " +
               "All other props are forwarded to the underlying DOM element.",
         },
      },
   },
   args: {
      children: "Button",
      color: "btn-yellow",
      buttonSize: "lg",
      className: "",
      disabled: false,
      onClick: fn(),
   },
   argTypes: {
      children: {
         control: "text",
         description: "Content rendered inside the button.",
         table: { type: { summary: "ReactNode" } },
      },
      color: {
         control: "select",
         options: [...COLORS, "btn-null"],
         description:
            "Class name applied for the visual style. `btn-null` strips the border/shadow " +
            "and turns the button into a plain text button.",
         table: {
            type: {
               summary:
                  "`btn-yellow` | `btn-cyan` | `btn-red` | `btn-green` | `btn-null`",
            },
         },
      },
      buttonSize: {
         control: "inline-radio",
         options: SIZES,
         description: "Padding + font-size preset. Defaults to `lg`.",
         table: {
            type: { summary: SIZES.join(" | ") },
            defaultValue: { summary: "lg" },
         },
      },
      className: {
         control: "text",
         description:
            "Extra classes appended last (great for `w-full`, `mt-4`, `inline-flex`, etc.).",
         table: { type: { summary: "string" } },
      },
      disabled: { control: "boolean" },
      onClick: {
         description: "Fires on click; disabled buttons never fire it.",
      },
   },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  Stories                                                            */
/* ------------------------------------------------------------------ */

export const Default: Story = {};

export const Playground: Story = {
   args: {
      children: "Click me",
      color: "btn-cyan",
      buttonSize: "md",
   },
};

export const Sizes: Story = {
   parameters: { controls: { exclude: ["buttonSize", "children", "color"] } },
   render: (args) => (
      <div className="flex flex-wrap items-center gap-3">
         {SIZES.map((size) => (
            <Button key={size} {...args} buttonSize={size}>
               {size.toUpperCase()}
            </Button>
         ))}
      </div>
   ),
};

export const Colors: Story = {
   parameters: { controls: { exclude: ["color", "children"] } },
   render: (args) => (
      <div className="flex flex-wrap items-center gap-3">
         {COLORS.map((color) => (
            <Button key={color} {...args} color={color}>
               {color.replace("btn-", "")}
            </Button>
         ))}
      </div>
   ),
};

export const NullVariant: Story = {
   args: {
      children: "Plain text button",
      color: "btn-null",
   },
   parameters: {
      docs: {
         description: {
            story:
               "`btn-null` removes the border, shadow, and padding — useful when you " +
               "need the Button semantics but want a link-style trigger.",
         },
      },
   },
};

export const AllCombinations: Story = {
   parameters: {
      controls: { exclude: ["color", "buttonSize", "children"] },
   },
   render: (args) => (
      <div className="grid gap-3">
         {COLORS.map((color) => (
            <div key={color} className="flex flex-wrap items-center gap-3">
               {SIZES.map((size) => (
                  <Button key={size} {...args} color={color} buttonSize={size}>
                     {size}
                  </Button>
               ))}
            </div>
         ))}
      </div>
   ),
};

export const Disabled: Story = {
   args: {
      children: "Disabled",
      color: "btn-red",
      disabled: true,
   },
};

export const FullWidth: Story = {
   args: {
      children: "Full width button",
      color: "btn-green",
      className: "w-full",
   },
   parameters: {
      layout: "padded",
      docs: {
         description: {
            story: "Use the `className` escape hatch for layout overrides like `w-full`.",
         },
      },
   },
};

export const WithIcon: Story = {
   args: {
      children: (
         <>
            <span aria-hidden="true">＋</span>
            Add item
         </>
      ),
      color: "btn-green",
      className: "inline-flex items-center gap-2",
   },
   parameters: {
      docs: {
         description: {
            story:
               "Because `children` is a `ReactNode`, you can compose icons and text. " +
               "Add `inline-flex items-center gap-2` via `className` to space them.",
         },
      },
   },
};

export const Loading: Story = {
   args: {
      children: (
         <>
            <span
               aria-hidden="true"
               className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            />
            Saving…
         </>
      ),
      color: "btn-cyan",
      className: "inline-flex items-center gap-2",
      disabled: true,
      "aria-busy": true,
   },
   parameters: {
      docs: {
         description: {
            story:
               "There is no `loading` prop — compose one from `disabled`, `aria-busy` " +
               "and a spinner in `children`.",
         },
      },
   },
};

export const LongLabel: Story = {
   args: {
      children:
         "This is a very long button label that should wrap or truncate depending on your CSS",
      color: "btn-yellow",
      className: "max-w-xs",
   },
   parameters: { layout: "padded" },
};
