import { n as e } from "./rolldown-runtime-2s6bX4vc.js";
import { o as t } from "./iframe-qT4tgGWe.js";
import { n, t as r } from "./Button-BcaydM8k.js";
var i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b;
function x() {
   return (x = e(() => {
      ((i = t()),
         n(),
         ({ fn: a } = __STORYBOOK_MODULE_TEST__),
         (o = [`btn-yellow`, `btn-cyan`, `btn-red`, `btn-green`]),
         (s = [`sm`, `md`, `lg`, `xl`]),
         (c = {
            title: `Components/Button`,
            component: r,
            tags: [`autodocs`],
            parameters: {
               layout: `centered`,
               docs: {
                  description: {
                     component:
                        "A thin wrapper around the native `<button>`. It composes the `btn` base class, a `color` class (`btn-yellow | btn-cyan | btn-red | btn-green | btn-null`), a size class, and any extra `className` you pass in. All other props are forwarded to the underlying DOM element.",
                  },
               },
            },
            args: {
               children: `Button`,
               color: `btn-yellow`,
               buttonSize: `lg`,
               className: ``,
               disabled: !1,
               onClick: a(),
            },
            argTypes: {
               children: {
                  control: `text`,
                  description: `Content rendered inside the button.`,
                  table: { type: { summary: `ReactNode` } },
               },
               color: {
                  control: `select`,
                  options: [...o, `btn-null`],
                  description:
                     "Class name applied for the visual style. `btn-null` strips the border/shadow and turns the button into a plain text button.",
                  table: {
                     type: {
                        summary:
                           "`btn-yellow` | `btn-cyan` | `btn-red` | `btn-green` | `btn-null`",
                     },
                  },
               },
               buttonSize: {
                  control: `inline-radio`,
                  options: s,
                  description: "Padding + font-size preset. Defaults to `lg`.",
                  table: {
                     type: { summary: s.join(` | `) },
                     defaultValue: { summary: `lg` },
                  },
               },
               className: {
                  control: `text`,
                  description:
                     "Extra classes appended last (great for `w-full`, `mt-4`, `inline-flex`, etc.).",
                  table: { type: { summary: `string` } },
               },
               disabled: { control: `boolean` },
               onClick: {
                  description: `Fires on click; disabled buttons never fire it.`,
               },
            },
         }),
         (l = {}),
         (u = {
            args: { children: `Click me`, color: `btn-cyan`, buttonSize: `md` },
         }),
         (d = {
            parameters: {
               controls: { exclude: [`buttonSize`, `children`, `color`] },
            },
            render: (e) =>
               (0, i.jsx)(`div`, {
                  className: `flex flex-wrap items-center gap-3`,
                  children: s.map((t) =>
                     (0, i.jsx)(
                        r,
                        { ...e, buttonSize: t, children: t.toUpperCase() },
                        t
                     )
                  ),
               }),
         }),
         (f = {
            parameters: { controls: { exclude: [`color`, `children`] } },
            render: (e) =>
               (0, i.jsx)(`div`, {
                  className: `flex flex-wrap items-center gap-3`,
                  children: o.map((t) =>
                     (0, i.jsx)(
                        r,
                        { ...e, color: t, children: t.replace(`btn-`, ``) },
                        t
                     )
                  ),
               }),
         }),
         (p = {
            args: { children: `Plain text button`, color: `btn-null` },
            parameters: {
               docs: {
                  description: {
                     story: "`btn-null` removes the border, shadow, and padding — useful when you need the Button semantics but want a link-style trigger.",
                  },
               },
            },
         }),
         (m = {
            parameters: {
               controls: { exclude: [`color`, `buttonSize`, `children`] },
            },
            render: (e) =>
               (0, i.jsx)(`div`, {
                  className: `grid gap-3`,
                  children: o.map((t) =>
                     (0, i.jsx)(
                        `div`,
                        {
                           className: `flex flex-wrap items-center gap-3`,
                           children: s.map((n) =>
                              (0, i.jsx)(
                                 r,
                                 { ...e, color: t, buttonSize: n, children: n },
                                 n
                              )
                           ),
                        },
                        t
                     )
                  ),
               }),
         }),
         (h = {
            args: { children: `Disabled`, color: `btn-red`, disabled: !0 },
         }),
         (g = {
            args: {
               children: `Full width button`,
               color: `btn-green`,
               className: `w-full`,
            },
            parameters: {
               layout: `padded`,
               docs: {
                  description: {
                     story: "Use the `className` escape hatch for layout overrides like `w-full`.",
                  },
               },
            },
         }),
         (_ = {
            args: {
               children: (0, i.jsxs)(i.Fragment, {
                  children: [
                     (0, i.jsx)(`span`, {
                        "aria-hidden": `true`,
                        children: `＋`,
                     }),
                     `Add item`,
                  ],
               }),
               color: `btn-green`,
               className: `inline-flex items-center gap-2`,
            },
            parameters: {
               docs: {
                  description: {
                     story: "Because `children` is a `ReactNode`, you can compose icons and text. Add `inline-flex items-center gap-2` via `className` to space them.",
                  },
               },
            },
         }),
         (v = {
            args: {
               children: (0, i.jsxs)(i.Fragment, {
                  children: [
                     (0, i.jsx)(`span`, {
                        "aria-hidden": `true`,
                        className: `inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent`,
                     }),
                     `Saving…`,
                  ],
               }),
               color: `btn-cyan`,
               className: `inline-flex items-center gap-2`,
               disabled: !0,
               "aria-busy": !0,
            },
            parameters: {
               docs: {
                  description: {
                     story: "There is no `loading` prop — compose one from `disabled`, `aria-busy` and a spinner in `children`.",
                  },
               },
            },
         }),
         (y = {
            args: {
               children: `This is a very long button label that should wrap or truncate depending on your CSS`,
               color: `btn-yellow`,
               className: `max-w-xs`,
            },
            parameters: { layout: `padded` },
         }),
         (b = [
            `Default`,
            `Playground`,
            `Sizes`,
            `Colors`,
            `NullVariant`,
            `AllCombinations`,
            `Disabled`,
            `FullWidth`,
            `WithIcon`,
            `Loading`,
            `LongLabel`,
         ]),
         (l.parameters = {
            ...l.parameters,
            docs: {
               ...l.parameters?.docs,
               source: { originalSource: `{}`, ...l.parameters?.docs?.source },
            },
         }),
         (u.parameters = {
            ...u.parameters,
            docs: {
               ...u.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    children: "Click me",
    color: "btn-cyan",
    buttonSize: "md"
  }
}`,
                  ...u.parameters?.docs?.source,
               },
            },
         }),
         (d.parameters = {
            ...d.parameters,
            docs: {
               ...d.parameters?.docs,
               source: {
                  originalSource: `{
  parameters: {
    controls: {
      exclude: ["buttonSize", "children", "color"]
    }
  },
  render: args => <div className="flex flex-wrap items-center gap-3">\r
         {SIZES.map(size => <Button key={size} {...args} buttonSize={size}>\r
               {size.toUpperCase()}\r
            </Button>)}\r
      </div>
}`,
                  ...d.parameters?.docs?.source,
               },
            },
         }),
         (f.parameters = {
            ...f.parameters,
            docs: {
               ...f.parameters?.docs,
               source: {
                  originalSource: `{
  parameters: {
    controls: {
      exclude: ["color", "children"]
    }
  },
  render: args => <div className="flex flex-wrap items-center gap-3">\r
         {COLORS.map(color => <Button key={color} {...args} color={color}>\r
               {color.replace("btn-", "")}\r
            </Button>)}\r
      </div>
}`,
                  ...f.parameters?.docs?.source,
               },
            },
         }),
         (p.parameters = {
            ...p.parameters,
            docs: {
               ...p.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    children: "Plain text button",
    color: "btn-null"
  },
  parameters: {
    docs: {
      description: {
        story: "\`btn-null\` removes the border, shadow, and padding — useful when you " + "need the Button semantics but want a link-style trigger."
      }
    }
  }
}`,
                  ...p.parameters?.docs?.source,
               },
            },
         }),
         (m.parameters = {
            ...m.parameters,
            docs: {
               ...m.parameters?.docs,
               source: {
                  originalSource: `{
  parameters: {
    controls: {
      exclude: ["color", "buttonSize", "children"]
    }
  },
  render: args => <div className="grid gap-3">\r
         {COLORS.map(color => <div key={color} className="flex flex-wrap items-center gap-3">\r
               {SIZES.map(size => <Button key={size} {...args} color={color} buttonSize={size}>\r
                     {size}\r
                  </Button>)}\r
            </div>)}\r
      </div>
}`,
                  ...m.parameters?.docs?.source,
               },
            },
         }),
         (h.parameters = {
            ...h.parameters,
            docs: {
               ...h.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    children: "Disabled",
    color: "btn-red",
    disabled: true
  }
}`,
                  ...h.parameters?.docs?.source,
               },
            },
         }),
         (g.parameters = {
            ...g.parameters,
            docs: {
               ...g.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    children: "Full width button",
    color: "btn-green",
    className: "w-full"
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Use the \`className\` escape hatch for layout overrides like \`w-full\`."
      }
    }
  }
}`,
                  ...g.parameters?.docs?.source,
               },
            },
         }),
         (_.parameters = {
            ..._.parameters,
            docs: {
               ..._.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    children: <>\r
            <span aria-hidden="true">＋</span>\r
            Add item\r
         </>,
    color: "btn-green",
    className: "inline-flex items-center gap-2"
  },
  parameters: {
    docs: {
      description: {
        story: "Because \`children\` is a \`ReactNode\`, you can compose icons and text. " + "Add \`inline-flex items-center gap-2\` via \`className\` to space them."
      }
    }
  }
}`,
                  ..._.parameters?.docs?.source,
               },
            },
         }),
         (v.parameters = {
            ...v.parameters,
            docs: {
               ...v.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    children: <>\r
            <span aria-hidden="true" className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />\r
            Saving…\r
         </>,
    color: "btn-cyan",
    className: "inline-flex items-center gap-2",
    disabled: true,
    "aria-busy": true
  },
  parameters: {
    docs: {
      description: {
        story: "There is no \`loading\` prop — compose one from \`disabled\`, \`aria-busy\` " + "and a spinner in \`children\`."
      }
    }
  }
}`,
                  ...v.parameters?.docs?.source,
               },
            },
         }),
         (y.parameters = {
            ...y.parameters,
            docs: {
               ...y.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    children: "This is a very long button label that should wrap or truncate depending on your CSS",
    color: "btn-yellow",
    className: "max-w-xs"
  },
  parameters: {
    layout: "padded"
  }
}`,
                  ...y.parameters?.docs?.source,
               },
            },
         }));
   }))();
}
x();
export {
   m as AllCombinations,
   f as Colors,
   l as Default,
   h as Disabled,
   g as FullWidth,
   v as Loading,
   y as LongLabel,
   p as NullVariant,
   u as Playground,
   d as Sizes,
   _ as WithIcon,
   b as __namedExportsOrder,
   c as default,
};
