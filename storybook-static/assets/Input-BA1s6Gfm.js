import { n as e } from "./rolldown-runtime-2s6bX4vc.js";
import { o as t } from "./iframe-qT4tgGWe.js";
var n, r;
function i() {
   return (i = e(() => {
      ((n = t()),
         (r = ({ focusColor: e, label: t, className: r, ...i }) =>
            (0, n.jsxs)(n.Fragment, {
               children: [
                  t &&
                     (0, n.jsx)(`label`, {
                        htmlFor: i.id,
                        className: `block text-sm font-black mb-2 text-black dark:text-gray-200 transition-colors`,
                        children: t,
                     }),
                  (0, n.jsx)(`input`, {
                     className: `input ${e} ${r}`,
                     id: i.id,
                     ...i,
                  }),
               ],
            })),
         (r.__docgenInfo = {
            description: ``,
            methods: [],
            displayName: `Input`,
            props: {
               focusColor: {
                  required: !1,
                  tsType: {
                     name: `literal`,
                     value: "`focus-${ColorsVariant}`",
                  },
                  description: ``,
               },
               label: {
                  required: !1,
                  tsType: { name: `string` },
                  description: ``,
               },
            },
         }));
   }))();
}
export { i as n, r as t };
