import { n as e } from "./rolldown-runtime-2s6bX4vc.js";
import { l as t, o as n, s as r } from "./iframe-qT4tgGWe.js";
import { n as i, r as a, t as o } from "./AuthContext-BbeyuxQE.js";
import { n as s, t as c } from "./Button-BcaydM8k.js";
import { n as l, t as u } from "./Input-BA1s6Gfm.js";
import { n as d, t as f } from "./InputErrorMessage-zi_9QuCP.js";
import {
   a as p,
   c as m,
   i as h,
   n as g,
   o as _,
   r as v,
   s as y,
   t as b,
} from "./index.esm-BgSJ4cFC.js";
var x, S;
function C() {
   return (C = e(() => {
      ((x = n()),
         s(),
         m(),
         l(),
         d(),
         _(),
         i(),
         v(),
         r(),
         b(),
         (S = () => {
            let e = t(),
               { login: n } = a(),
               {
                  register: r,
                  handleSubmit: i,
                  formState: { errors: o },
               } = g();
            return (0, x.jsx)(`div`, {
               className: `min-h-screen bg-pink-400 dark:bg-indigo-900 flex items-center justify-center p-4`,
               children: (0, x.jsxs)(y, {
                  className: ` p-8 max-w-md w-full `,
                  children: [
                     (0, x.jsx)(p, { title: `LOGIN`, headSize: `sm` }),
                     (0, x.jsxs)(`form`, {
                        onSubmit: i(() => {
                           (n(), e.push(`/dashboard`));
                        }),
                        className: `space-y-6`,
                        children: [
                           (0, x.jsxs)(`div`, {
                              children: [
                                 (0, x.jsx)(u, {
                                    type: `email`,
                                    ...r(`email`, {
                                       required: `Email is required`,
                                       pattern: {
                                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                          message: `Invalid email address`,
                                       },
                                    }),
                                    id: `email`,
                                    label: `EMAIL`,
                                    focusColor: `focus-yellow`,
                                 }),
                                 o.email &&
                                    (0, x.jsx)(f, {
                                       children: o.email.message,
                                    }),
                              ],
                           }),
                           (0, x.jsxs)(`div`, {
                              children: [
                                 (0, x.jsx)(u, {
                                    type: `password`,
                                    ...r(`password`, {
                                       required: `Password is required`,
                                       minLength: {
                                          value: 6,
                                          message: `Password must be at least 6 characters`,
                                       },
                                    }),
                                    id: `password`,
                                    label: `PASSWORD`,
                                    focusColor: `focus-yellow`,
                                 }),
                                 o.password &&
                                    (0, x.jsx)(f, {
                                       children: o.password.message,
                                    }),
                              ],
                           }),
                           (0, x.jsx)(c, {
                              type: `submit`,
                              color: `btn-yellow`,
                              className: `w-full   `,
                              children: `LOGIN NOW`,
                           }),
                        ],
                     }),
                     (0, x.jsx)(`div`, {
                        className: `mt-6 text-center`,
                        children: (0, x.jsx)(h, {
                           href: `/signup`,
                           className: `font-black text-black dark:text-yellow-400 underline hover:text-gray-700 dark:hover:text-yellow-300 transition-colors`,
                           children: `Do not have an account? SIGN UP`,
                        }),
                     }),
                  ],
               }),
            });
         }),
         (S.__docgenInfo = {
            description: ``,
            methods: [],
            displayName: `LoginPage`,
         }));
   }))();
}
var w, T, E, D, O, k, A, j;
function M() {
   return (M = e(() => {
      ((w = n()),
         C(),
         i(),
         (T = {
            title: `Pages/LoginPage`,
            component: S,
            tags: [`autodocs`],
            parameters: {
               layout: `fullscreen`,
               nextjs: { appDirectory: !0, navigation: { pathname: `/login` } },
               docs: {
                  description: {
                     component:
                        "Login page with email and password fields. Uses `react-hook-form` for validation and the app's real `AuthProvider` for the login flow. Next.js routing is handled by the Storybook Next.js framework.",
                  },
               },
            },
            decorators: [(e) => (0, w.jsx)(o, { children: (0, w.jsx)(e, {}) })],
         }),
         (E = {}),
         (D = { globals: { viewport: { value: `mobile1`, isRotated: !1 } } }),
         (O = { globals: { viewport: { value: `tablet`, isRotated: !1 } } }),
         (k = { globals: { viewport: { value: `desktop`, isRotated: !1 } } }),
         (A = {
            decorators: [
               (e) =>
                  (0, w.jsx)(`div`, {
                     className: `dark`,
                     children: (0, w.jsx)(o, { children: (0, w.jsx)(e, {}) }),
                  }),
            ],
         }),
         (j = [`Default`, `Mobile`, `Tablet`, `Desktop`, `DarkMode`]),
         (E.parameters = {
            ...E.parameters,
            docs: {
               ...E.parameters?.docs,
               source: { originalSource: `{}`, ...E.parameters?.docs?.source },
            },
         }),
         (D.parameters = {
            ...D.parameters,
            docs: {
               ...D.parameters?.docs,
               source: {
                  originalSource: `{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  }
}`,
                  ...D.parameters?.docs?.source,
               },
            },
         }),
         (O.parameters = {
            ...O.parameters,
            docs: {
               ...O.parameters?.docs,
               source: {
                  originalSource: `{
  globals: {
    viewport: {
      value: "tablet",
      isRotated: false
    }
  }
}`,
                  ...O.parameters?.docs?.source,
               },
            },
         }),
         (k.parameters = {
            ...k.parameters,
            docs: {
               ...k.parameters?.docs,
               source: {
                  originalSource: `{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
}`,
                  ...k.parameters?.docs?.source,
               },
            },
         }),
         (A.parameters = {
            ...A.parameters,
            docs: {
               ...A.parameters?.docs,
               source: {
                  originalSource: `{
  decorators: [Story => <div className="dark">\r
            <AuthProvider>\r
               <Story />\r
            </AuthProvider>\r
         </div>]
}`,
                  ...A.parameters?.docs?.source,
               },
            },
         }));
   }))();
}
M();
export {
   A as DarkMode,
   E as Default,
   k as Desktop,
   D as Mobile,
   O as Tablet,
   j as __namedExportsOrder,
   T as default,
};
