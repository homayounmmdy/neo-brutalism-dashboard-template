import { n as e } from "./rolldown-runtime-2s6bX4vc.js";
import { o as t } from "./iframe-qT4tgGWe.js";
import { n, t as r } from "./InputErrorMessage-zi_9QuCP.js";
var i, a, o, s, c, l, u, d, f, p;
function m() {
   return (m = e(() => {
      ((i = t()),
         n(),
         (a = {
            title: `Components/InputErrorMessage`,
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
               children: {
                  control: `text`,
                  description: `The error message content`,
               },
            },
         }),
         (o = { args: { children: `This field is required.` } }),
         (s = { args: { children: `Required` } }),
         (c = {
            args: {
               children: `Your password must contain at least 8 characters, one uppercase letter, one number, and one special character.`,
            },
         }),
         (l = {
            render: () =>
               (0, i.jsxs)(r, {
                  children: [
                     (0, i.jsx)(`span`, {
                        className: `block`,
                        children: `• Password must be at least 8 characters`,
                     }),
                     (0, i.jsx)(`span`, {
                        className: `block`,
                        children: `• Must contain one number`,
                     }),
                     (0, i.jsx)(`span`, {
                        className: `block`,
                        children: `• Must contain one special character`,
                     }),
                  ],
               }),
         }),
         (u = {
            render: () =>
               (0, i.jsxs)(r, {
                  children: [
                     `Invalid email — try `,
                     (0, i.jsx)(`strong`, { children: `again` }),
                     ` or`,
                     ` `,
                     (0, i.jsx)(`a`, {
                        href: `#`,
                        className: `underline`,
                        children: `reset your password`,
                     }),
                     `.`,
                  ],
               }),
         }),
         (d = {
            render: () =>
               (0, i.jsxs)(`div`, {
                  className: `flex flex-col gap-4`,
                  children: [
                     (0, i.jsxs)(`div`, {
                        children: [
                           (0, i.jsx)(`label`, {
                              htmlFor: `email-error`,
                              className: `mb-2 block text-sm font-black text-black transition-colors dark:text-gray-200`,
                              children: `Email`,
                           }),
                           (0, i.jsx)(`input`, {
                              id: `email-error`,
                              type: `email`,
                              defaultValue: `not-an-email`,
                              className: `input focus-red`,
                           }),
                           (0, i.jsx)(r, {
                              children: `Please enter a valid email address.`,
                           }),
                        ],
                     }),
                     (0, i.jsxs)(`div`, {
                        children: [
                           (0, i.jsx)(`label`, {
                              htmlFor: `name-ok`,
                              className: `mb-2 block text-sm font-black text-black transition-colors dark:text-gray-200`,
                              children: `Name`,
                           }),
                           (0, i.jsx)(`input`, {
                              id: `name-ok`,
                              type: `text`,
                              defaultValue: `John`,
                              className: `input focus-green`,
                           }),
                        ],
                     }),
                  ],
               }),
         }),
         (f = {
            args: { children: `This field is required.` },
            decorators: [
               (e) =>
                  (0, i.jsx)(`div`, {
                     className: `dark bg-gray-900 p-6`,
                     style: { width: `360px` },
                     children: (0, i.jsx)(e, {}),
                  }),
            ],
         }),
         (p = [
            `Default`,
            `ShortMessage`,
            `LongMessage`,
            `MultiLine`,
            `WithHtmlContent`,
            `WithInput`,
            `DarkMode`,
         ]),
         (o.parameters = {
            ...o.parameters,
            docs: {
               ...o.parameters?.docs,
               source: {
                  originalSource: `{
  args: {
    children: "This field is required."
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
    children: "Required"
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
    children: "Your password must contain at least 8 characters, one uppercase letter, one number, and one special character."
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
  render: () => <InputErrorMessage>\r
         <span className="block">• Password must be at least 8 characters</span>\r
         <span className="block">• Must contain one number</span>\r
         <span className="block">• Must contain one special character</span>\r
      </InputErrorMessage>
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
  render: () => <InputErrorMessage>\r
         Invalid email — try <strong>again</strong> or{" "}\r
         <a href="#" className="underline">\r
            reset your password\r
         </a>\r
         .\r
      </InputErrorMessage>
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
  render: () => <div className="flex flex-col gap-4">\r
         <div>\r
            <label htmlFor="email-error" className="mb-2 block text-sm font-black text-black transition-colors dark:text-gray-200">\r
               Email\r
            </label>\r
            <input id="email-error" type="email" defaultValue="not-an-email" className="input focus-red" />\r
            <InputErrorMessage>\r
               Please enter a valid email address.\r
            </InputErrorMessage>\r
         </div>\r
\r
         <div>\r
            <label htmlFor="name-ok" className="mb-2 block text-sm font-black text-black transition-colors dark:text-gray-200">\r
               Name\r
            </label>\r
            <input id="name-ok" type="text" defaultValue="John" className="input focus-green" />\r
         </div>\r
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
  args: {
    children: "This field is required."
  },
  decorators: [Story => <div className="dark bg-gray-900 p-6" style={{
    width: "360px"
  }}>\r
            <Story />\r
         </div>]
}`,
                  ...f.parameters?.docs?.source,
               },
            },
         }));
   }))();
}
m();
export {
   f as DarkMode,
   o as Default,
   c as LongMessage,
   l as MultiLine,
   s as ShortMessage,
   u as WithHtmlContent,
   d as WithInput,
   p as __namedExportsOrder,
   a as default,
};
