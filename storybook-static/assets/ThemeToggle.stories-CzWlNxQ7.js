import { n as e } from "./rolldown-runtime-2s6bX4vc.js";
import { t } from "./react-CGbgjWmm.js";
import { o as n } from "./iframe-qT4tgGWe.js";
import { n as r, t as i } from "./Button-BcaydM8k.js";
var a, o;
function s() {
   return (s = e(() => {
      ((a = t()),
         (o = () => {
            let [e, t] = (0, a.useState)(() => {
               let e = localStorage.getItem(`theme`);
               return e === `dark` || e === `light`
                  ? e
                  : window.matchMedia(`(prefers-color-scheme: dark)`).matches
                    ? `dark`
                    : `light`;
            });
            return (
               (0, a.useEffect)(() => {
                  let t = document.documentElement;
                  e === `dark`
                     ? (t.classList.add(`dark`),
                       localStorage.setItem(`theme`, `dark`))
                     : (t.classList.remove(`dark`),
                       localStorage.setItem(`theme`, `light`));
               }, [e]),
               {
                  theme: e,
                  toggleTheme: () =>
                     t((e) => (e === `dark` ? `light` : `dark`)),
               }
            );
         }));
   }))();
}
var c, l, u, d, f;
function p() {
   return (p = e(() => {
      ((c = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase()),
         (l = (e) =>
            e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
               n ? n.toUpperCase() : t.toLowerCase()
            )),
         (u = (e) => {
            let t = l(e);
            return t.charAt(0).toUpperCase() + t.slice(1);
         }),
         (d = (...e) =>
            e
               .filter(
                  (e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t
               )
               .join(` `)
               .trim()),
         (f = (e) => {
            for (let t in e)
               if (t.startsWith(`aria-`) || t === `role` || t === `title`)
                  return !0;
         }));
   }))();
}
var m;
function h() {
   return (h = e(() => {
      m = {
         xmlns: `http://www.w3.org/2000/svg`,
         width: 24,
         height: 24,
         viewBox: `0 0 24 24`,
         fill: `none`,
         stroke: `currentColor`,
         strokeWidth: 2,
         strokeLinecap: `round`,
         strokeLinejoin: `round`,
      };
   }))();
}
var g, _;
function v() {
   return (v = e(() => {
      ((g = t()),
         h(),
         p(),
         (_ = (0, g.forwardRef)(
            (
               {
                  color: e = `currentColor`,
                  size: t = 24,
                  strokeWidth: n = 2,
                  absoluteStrokeWidth: r,
                  className: i = ``,
                  children: a,
                  iconNode: o,
                  ...s
               },
               c
            ) =>
               (0, g.createElement)(
                  `svg`,
                  {
                     ref: c,
                     ...m,
                     width: t,
                     height: t,
                     stroke: e,
                     strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
                     className: d(`lucide`, i),
                     ...(!a && !f(s) && { "aria-hidden": `true` }),
                     ...s,
                  },
                  [
                     ...o.map(([e, t]) => (0, g.createElement)(e, t)),
                     ...(Array.isArray(a) ? a : [a]),
                  ]
               )
         )));
   }))();
}
var y, b;
function x() {
   return (x = e(() => {
      ((y = t()),
         p(),
         v(),
         (b = (e, t) => {
            let n = (0, y.forwardRef)(({ className: n, ...r }, i) =>
               (0, y.createElement)(_, {
                  ref: i,
                  iconNode: t,
                  className: d(`lucide-${c(u(e))}`, `lucide-${e}`, n),
                  ...r,
               })
            );
            return ((n.displayName = u(e)), n);
         }));
   }))();
}
var S, C;
function w() {
   return (w = e(() => {
      (x(),
         (S = [
            [
               `path`,
               {
                  d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
                  key: `kfwtm`,
               },
            ],
         ]),
         (C = b(`moon`, S)));
   }))();
}
var T, E;
function D() {
   return (D = e(() => {
      (x(),
         (T = [
            [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
            [`path`, { d: `M12 2v2`, key: `tus03m` }],
            [`path`, { d: `M12 20v2`, key: `1lh1kg` }],
            [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }],
            [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }],
            [`path`, { d: `M2 12h2`, key: `1t8f8n` }],
            [`path`, { d: `M20 12h2`, key: `1q8mjw` }],
            [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }],
            [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }],
         ]),
         (E = b(`sun`, T)));
   }))();
}
var O, k;
function A() {
   return (A = e(() => {
      ((O = n()),
         s(),
         w(),
         D(),
         r(),
         (k = () => {
            let { theme: e, toggleTheme: t } = o(),
               n = e === `dark`;
            return (0, O.jsx)(i, {
               onClick: t,
               className: `relative p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] duration-300  overflow-hidden ${n ? `bg-purple-400` : `bg-yellow-300`}`,
               "aria-label": `Toggle theme`,
               buttonSize: `md`,
               children: (0, O.jsxs)(`div`, {
                  className: `relative w-6 h-6`,
                  children: [
                     (0, O.jsx)(`div`, {
                        className: `absolute inset-0 transition-all duration-500 ${n ? `rotate-0 opacity-100 scale-100` : `rotate-90 opacity-0 scale-50`}`,
                        children: (0, O.jsx)(C, {
                           className: `w-6 h-6 stroke-3 text-white`,
                        }),
                     }),
                     (0, O.jsx)(`div`, {
                        className: `absolute inset-0 transition-all duration-500 ${n ? `-rotate-90 opacity-0 scale-50` : `rotate-0 opacity-100 scale-100`}`,
                        children: (0, O.jsx)(E, {
                           className: `w-6 h-6 stroke-3 text-black`,
                        }),
                     }),
                  ],
               }),
            });
         }),
         (k.__docgenInfo = {
            description: ``,
            methods: [],
            displayName: `ThemeToggle`,
         }));
   }))();
}
var j, M, N, P, F;
function I() {
   return (I = e(() => {
      ((j = n()),
         A(),
         (M = {
            title: `Components/ThemeToggle`,
            component: k,
            tags: [`autodocs`],
            parameters: {
               layout: `centered`,
               docs: {
                  description: {
                     component:
                        "Toggle button that flips the app between light and dark mode. The `useTheme` hook is mocked via `sb.mock` in `.storybook/preview.ts`.",
                  },
               },
            },
            decorators: [
               (e, t) => {
                  let n = t.parameters.theme ?? `light`;
                  return (
                     typeof document < `u` &&
                        document.documentElement.classList.toggle(
                           `dark`,
                           n === `dark`
                        ),
                     (0, j.jsx)(`div`, {
                        className: n === `dark` ? `dark` : ``,
                        style: {
                           padding: `2.5rem`,
                           display: `grid`,
                           placeItems: `center`,
                        },
                        children: (0, j.jsx)(e, {}),
                     })
                  );
               },
            ],
         }),
         (N = { parameters: { theme: `light` } }),
         (P = { parameters: { theme: `dark` } }),
         (F = [`Light`, `Dark`]),
         (N.parameters = {
            ...N.parameters,
            docs: {
               ...N.parameters?.docs,
               source: {
                  originalSource: `{
  parameters: {
    theme: "light"
  }
}`,
                  ...N.parameters?.docs?.source,
               },
            },
         }),
         (P.parameters = {
            ...P.parameters,
            docs: {
               ...P.parameters?.docs,
               source: {
                  originalSource: `{
  parameters: {
    theme: "dark"
  }
}`,
                  ...P.parameters?.docs?.source,
               },
            },
         }));
   }))();
}
I();
export { P as Dark, N as Light, F as __namedExportsOrder, M as default };
