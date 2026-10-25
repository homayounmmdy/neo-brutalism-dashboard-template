import { n as e } from "./rolldown-runtime-2s6bX4vc.js";
import { t } from "./react-CGbgjWmm.js";
import { c as n, l as r, o as i, s as a } from "./iframe-qT4tgGWe.js";
function o({ children: e }) {
   let [t, i] = (0, l.useState)(!1),
      [a, o] = (0, l.useState)(!0),
      s = n(),
      d = r(),
      f = [`/`, `/login`, `/signup`];
   return (
      (0, l.useEffect)(() => {
         let e = localStorage.getItem(`isAuthenticated`);
         (e == `true` && f.includes(s) && d.push(`/dashboard`),
            i(e == `true`),
            o(!1));
      }, []),
      (0, c.jsx)(u.Provider, {
         value: {
            isAuthenticated: t,
            login: () => {
               (localStorage.setItem(`isAuthenticated`, `true`), i(!0));
            },
            logout: () => {
               (localStorage.removeItem(`isAuthenticated`), i(!1));
            },
            isLoading: a,
         },
         children: e,
      })
   );
}
function s() {
   let e = (0, l.useContext)(u);
   if (e === void 0) throw Error(`useAuth must be used within an AuthProvider`);
   return e;
}
var c, l, u;
function d() {
   return (d = e(() => {
      ((c = i()),
         a(),
         (l = t()),
         (u = (0, l.createContext)(void 0)),
         (o.__docgenInfo = {
            description: ``,
            methods: [],
            displayName: `AuthProvider`,
         }));
   }))();
}
export { d as n, s as r, o as t };
