import { n as e } from "./rolldown-runtime-2s6bX4vc.js";
import { o as t } from "./iframe-qT4tgGWe.js";
import { n, t as r } from "./Input-BA1s6Gfm.js";
var i, a, o, s, c, l, u, d, f, p, m, h, g, _;
function v() {
   return (v = e(() => {
      ((i = t()),
         n(),
         (a = {
            title: `Components/Input`,
            component: r,
            tags: [`autodocs`],
            parameters: { layout: `centered` },
            decorators: [
               (e) =>
                  (0, i.jsx)(`div`, {
                     style: { width: `360px` },
                     children: (0, i.jsx)(e, {}),
                  }),
            ],
            argTypes: {
               focusColor: {
                  control: `select`,
                  options: [
                     `focus-yellow`,
                     `focus-cyan`,
                     `focus-red`,
                     `focus-green`,
                  ],
                  description: `Ring color applied when the input is focused`,
               },
               label: { control: `text` },
               placeholder: { control: `text` },
               disabled: { control: `boolean` },
               type: {
                  control: `select`,
                  options: [
                     `text`,
                     `email`,
                     `password`,
                     `number`,
                     `tel`,
                     `url`,
                  ],
               },
               className: { control: `text` },
            },
         }),
         (o = {
            args: {
               label: `Username`,
               placeholder: `Enter your username`,
               focusColor: `focus-cyan`,
            },
         }),
         (s = {
            args: { placeholder: `No label here`, focusColor: `focus-yellow` },
         }),
         (c = {
            args: {
               label: `Email`,
               type: `email`,
               defaultValue: `hello@example.com`,
               focusColor: `focus-cyan`,
            },
         }),
         (l = {
            args: {
               label: `Yellow focus`,
               placeholder: `Focus me`,
               focusColor: `focus-yellow`,
            },
         }),
         (u = {
            args: {
               label: `Cyan focus`,
               placeholder: `Focus me`,
               focusColor: `focus-cyan`,
            },
         }),
         (d = {
            args: {
               label: `Red focus`,
               placeholder: `Focus me`,
               focusColor: `focus-red`,
            },
         }),
         (f = {
            args: {
               label: `Green focus`,
               placeholder: `Focus me`,
               focusColor: `focus-green`,
            },
         }),
         (p = {
            args: {
               label: `Password`,
               placeholder: `Enter password`,
               type: `password`,
               focusColor: `focus-red`,
            },
         }),
         (m = {
            args: {
               label: `Disabled`,
               placeholder: `Can't type here`,
               disabled: !0,
               focusColor: `focus-green`,
            },
         }),
         (h = {
            render: () =>
               (0, i.jsxs)(`div`, {
                  className: `flex flex-col gap-4`,
                  children: [
                     (0, i.jsx)(r, {
                        label: `Yellow focus`,
                        placeholder: `Focus me`,
                        focusColor: `focus-yellow`,
                     }),
                     (0, i.jsx)(r, {
                        label: `Cyan focus`,
                        placeholder: `Focus me`,
                        focusColor: `focus-cyan`,
                     }),
                     (0, i.jsx)(r, {
                        label: `Red focus`,
                        placeholder: `Focus me`,
                        focusColor: `focus-red`,
                     }),
                     (0, i.jsx)(r, {
                        label: `Green focus`,
                        placeholder: `Focus me`,
                        focusColor: `focus-green`,
                     }),
                  ],
               }),
         }),
         (g = {
            render: () =>
               (0, i.jsxs)(`div`, {
                  className: `flex flex-col gap-4`,
                  children: [
                     (0, i.jsx)(r, {
                        label: `Text`,
                        placeholder: `Text input`,
                        focusColor: `focus-cyan`,
                     }),
                     (0, i.jsx)(r, {
                        label: `Email`,
                        type: `email`,
                        placeholder: `you@example.com`,
                        focusColor: `focus-cyan`,
                     }),
                     (0, i.jsx)(r, {
                        label: `Password`,
                        type: `password`,
                        placeholder: `••••••••`,
                        focusColor: `focus-cyan`,
                     }),
                     (0, i.jsx)(r, {
                        label: `Number`,
                        type: `number`,
                        placeholder: `42`,
                        focusColor: `focus-cyan`,
                     }),
                     (0, i.jsx)(r, {
                        label: `Tel`,
                        type: `tel`,
                        placeholder: `+1 555 000 0000`,
                        focusColor: `focus-cyan`,
                     }),
                  ],
               }),
         }),
         (_ = [
            `Default`,
            `WithoutLabel`,
            `WithValue`,
            `Yellow`,
            `Cyan`,
            `Red`,
            `Green`,
            `Password`,
            `Disabled`,
            `AllColors`,
            `TypesShowcase`,
         ]),
         (o.parameters = {
            ...o.parameters,
            docs: {
               ...o.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    focusColor: "focus-cyan"
  }
}`,
                  ...o.parameters?.docs?.source,
               },
            },
         }),
         (s.parameters = {
            ...s.parameters,
            docs: {
               ...s.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    placeholder: "No label here",
    focusColor: "focus-yellow"
  }
}`,
                  ...s.parameters?.docs?.source,
               },
            },
         }),
         (c.parameters = {
            ...c.parameters,
            docs: {
               ...c.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    label: "Email",
    type: "email",
    defaultValue: "hello@example.com",
    focusColor: "focus-cyan"
  }
}`,
                  ...c.parameters?.docs?.source,
               },
            },
         }),
         (l.parameters = {
            ...l.parameters,
            docs: {
               ...l.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    label: "Yellow focus",
    placeholder: "Focus me",
    focusColor: "focus-yellow"
  }
}`,
                  ...l.parameters?.docs?.source,
               },
            },
         }),
         (u.parameters = {
            ...u.parameters,
            docs: {
               ...u.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    label: "Cyan focus",
    placeholder: "Focus me",
    focusColor: "focus-cyan"
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
  args: {
    label: "Red focus",
    placeholder: "Focus me",
    focusColor: "focus-red"
  }
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
  args: {
    label: "Green focus",
    placeholder: "Focus me",
    focusColor: "focus-green"
  }
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
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    focusColor: "focus-red"
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
  args: {
    label: "Disabled",
    placeholder: "Can't type here",
    disabled: true,
    focusColor: "focus-green"
  }
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
  render: () => <div className="flex flex-col gap-4">\r
         <Input label="Yellow focus" placeholder="Focus me" focusColor="focus-yellow" />\r
         <Input label="Cyan focus" placeholder="Focus me" focusColor="focus-cyan" />\r
         <Input label="Red focus" placeholder="Focus me" focusColor="focus-red" />\r
         <Input label="Green focus" placeholder="Focus me" focusColor="focus-green" />\r
      </div>
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
  render: () => <div className="flex flex-col gap-4">\r
         <Input label="Text" placeholder="Text input" focusColor="focus-cyan" />\r
         <Input label="Email" type="email" placeholder="you@example.com" focusColor="focus-cyan" />\r
         <Input label="Password" type="password" placeholder="••••••••" focusColor="focus-cyan" />\r
         <Input label="Number" type="number" placeholder="42" focusColor="focus-cyan" />\r
         <Input label="Tel" type="tel" placeholder="+1 555 000 0000" focusColor="focus-cyan" />\r
      </div>
}`,
                  ...g.parameters?.docs?.source,
               },
            },
         }));
   }))();
}
v();
export {
   h as AllColors,
   u as Cyan,
   o as Default,
   m as Disabled,
   f as Green,
   p as Password,
   d as Red,
   g as TypesShowcase,
   c as WithValue,
   s as WithoutLabel,
   l as Yellow,
   _ as __namedExportsOrder,
   a as default,
};
