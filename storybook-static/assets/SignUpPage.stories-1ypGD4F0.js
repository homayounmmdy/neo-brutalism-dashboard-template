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
                  watch: s,
               } = g();
            return (0, x.jsx)(`div`, {
               className: `min-h-screen bg-green-400 dark:bg-indigo-900 flex items-center justify-center p-4 transition-colors`,
               children: (0, x.jsxs)(y, {
                  className: `p-8 max-w-md w-full`,
                  children: [
                     (0, x.jsx)(p, { title: `SIGN UP`, headSize: `sm` }),
                     (0, x.jsxs)(`form`, {
                        onSubmit: i(() => {
                           (n(), e.push(`/dashboard`));
                        }),
                        className: `space-y-6`,
                        children: [
                           (0, x.jsxs)(`div`, {
                              children: [
                                 (0, x.jsx)(u, {
                                    type: `text`,
                                    ...r(`username`, {
                                       required: `Username is required`,
                                       minLength: {
                                          value: 3,
                                          message: `Username must be at least 3 characters`,
                                       },
                                    }),
                                    focusColor: `focus-cyan`,
                                    label: `USERNAME`,
                                    id: `username`,
                                 }),
                                 o.username &&
                                    (0, x.jsx)(f, {
                                       children: o.username.message,
                                    }),
                              ],
                           }),
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
                                    focusColor: `focus-cyan`,
                                    label: `EMAIL`,
                                    id: `email`,
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
                                          value: 8,
                                          message: `Password must be at least 8 characters`,
                                       },
                                    }),
                                    focusColor: `focus-cyan`,
                                    label: `PASSWORD`,
                                    id: `password`,
                                 }),
                                 o.password &&
                                    (0, x.jsx)(f, {
                                       children: o.password.message,
                                    }),
                              ],
                           }),
                           (0, x.jsxs)(`div`, {
                              children: [
                                 (0, x.jsx)(u, {
                                    type: `password`,
                                    ...r(`confirmPassword`, {
                                       required: `Please confirm your password`,
                                       validate: (e) => {
                                          if (s(`password`) !== e)
                                             return `Passwords do not match`;
                                       },
                                    }),
                                    focusColor: `focus-cyan`,
                                    label: `CONFIRM PASSWORD`,
                                    id: `confirm_password`,
                                 }),
                                 o.confirmPassword &&
                                    (0, x.jsx)(f, {
                                       children: o.confirmPassword.message,
                                    }),
                              ],
                           }),
                           (0, x.jsx)(c, {
                              type: `submit`,
                              color: `btn-cyan`,
                              className: `w-full`,
                              children: `CREATE ACCOUNT`,
                           }),
                        ],
                     }),
                     (0, x.jsx)(`div`, {
                        className: `mt-6 text-center`,
                        children: (0, x.jsx)(h, {
                           href: `/login`,
                           className: `font-black text-black dark:text-cyan-400 underline hover:text-gray-700 dark:hover:text-cyan-300 transition-colors`,
                           children: `Already have an account? LOGIN`,
                        }),
                     }),
                  ],
               }),
            });
         }),
         (S.__docgenInfo = {
            description: ``,
            methods: [],
            displayName: `SignUpPage`,
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
            title: `Pages/SignUpPage`,
            component: S,
            tags: [`autodocs`],
            parameters: {
               layout: `fullscreen`,
               nextjs: {
                  appDirectory: !0,
                  navigation: { pathname: `/signup` },
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
