import { n as e } from "./rolldown-runtime-2s6bX4vc.js";
import { l as t, o as n, s as r } from "./iframe-qT4tgGWe.js";
import { n as i, r as a, t as o } from "./AuthContext-BbeyuxQE.js";
import { n as s, t as c } from "./Button-BcaydM8k.js";
var l, u;
function d() {
   return (d = e(() => {
      ((l = n()),
         r(),
         i(),
         s(),
         (u = () => {
            let e = t(),
               { isAuthenticated: n, logout: r } = a();
            return n
               ? (0, l.jsx)(c, {
                    onClick: () => {
                       (r(), e.push(`/`));
                    },
                    buttonSize: `md`,
                    color: `btn-red`,
                    children: `Logout`,
                 })
               : (0, l.jsx)(c, {
                    onClick: () => e.push(`/login`),
                    buttonSize: `md`,
                    color: `btn-green`,
                    children: `Login`,
                 });
         }),
         (u.__docgenInfo = {
            description: ``,
            methods: [],
            displayName: `AuthButton`,
         }));
   }))();
}
var f, p, m, h, g;
function _() {
   return (_ = e(() => {
      ((f = n()),
         d(),
         i(),
         (p = {
            title: `Components/AuthButton`,
            component: u,
            tags: [`autodocs`],
            parameters: {
               layout: `centered`,
               docs: {
                  description: {
                     component:
                        "Shows a Login button when the user is unauthenticated and a Logout button when authenticated. Uses the real `AuthProvider`; the Next.js router is mocked by the Storybook Next.js framework.",
                  },
               },
            },
            decorators: [
               (e, t) => (
                  t.parameters.isAuthenticated
                     ? localStorage.setItem(`isAuthenticated`, `true`)
                     : localStorage.removeItem(`isAuthenticated`),
                  (0, f.jsx)(`div`, {
                     style: {
                        padding: `2.5rem`,
                        display: `grid`,
                        placeItems: `center`,
                     },
                     children: (0, f.jsx)(o, { children: (0, f.jsx)(e, {}) }),
                  })
               ),
            ],
         }),
         (m = {
            parameters: {
               isAuthenticated: !1,
               nextjs: { appDirectory: !0, navigation: { pathname: `/` } },
            },
         }),
         (h = {
            parameters: {
               isAuthenticated: !0,
               nextjs: {
                  appDirectory: !0,
                  navigation: { pathname: `/dashboard` },
               },
            },
         }),
         (g = [`LoggedOut`, `LoggedIn`]),
         (m.parameters = {
            ...m.parameters,
            docs: {
               ...m.parameters?.docs,
               source: {
                  originalSource: `{
  parameters: {
    isAuthenticated: false,
    // "/" is a public route — nothing will redirect.
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/"
      }
    }
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
  parameters: {
    isAuthenticated: true,
    // "/dashboard" is a PROTECTED route — no redirect fires.
    // If you used "/" here, AuthProvider's effect would push("/dashboard"),
    // which is harmless (router is mocked) but noisy in the Actions panel.
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/dashboard"
      }
    }
  }
}`,
                  ...h.parameters?.docs?.source,
               },
            },
         }));
   }))();
}
_();
export {
   h as LoggedIn,
   m as LoggedOut,
   g as __namedExportsOrder,
   p as default,
};
