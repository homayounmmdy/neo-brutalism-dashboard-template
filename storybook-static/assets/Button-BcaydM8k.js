import { n as e } from "./rolldown-runtime-2s6bX4vc.js";
import { o as t } from "./iframe-qT4tgGWe.js";
var n, r;
function i() {
   return (i = e(() => {
      ((n = t()),
         (r = ({
            children: e,
            className: t,
            color: r,
            buttonSize: i = `lg`,
            ...a
         }) =>
            (0, n.jsx)(`button`, {
               className: `btn ${r} ${{ xs: `px-2 py-1 text-sm`, sm: `px-3 py-1.5 text-base`, md: `px-4 py-2 text-lg`, lg: `px-6 py-3 text-xl`, xl: `px-8 py-4 text-2xl` }[i]} ${t}`,
               ...a,
               children: e,
            })),
         (r.__docgenInfo = {
            description: ``,
            methods: [],
            displayName: `Button`,
            props: {
               children: {
                  required: !1,
                  tsType: { name: `ReactReactNode`, raw: `React.ReactNode` },
                  description: ``,
               },
               color: {
                  required: !1,
                  tsType: {
                     name: `union`,
                     raw: '`btn-${ColorsVariant}` | "btn-null"',
                     elements: [
                        { name: `literal`, value: "`btn-${ColorsVariant}`" },
                        { name: `literal`, value: `"btn-null"` },
                     ],
                  },
                  description: ``,
               },
               buttonSize: {
                  required: !1,
                  tsType: {
                     name: `union`,
                     raw: `"sm" | "md" | "lg" | "xl"`,
                     elements: [
                        { name: `literal`, value: `"sm"` },
                        { name: `literal`, value: `"md"` },
                        { name: `literal`, value: `"lg"` },
                        { name: `literal`, value: `"xl"` },
                     ],
                  },
                  description: ``,
                  defaultValue: { value: `"lg"`, computed: !1 },
               },
            },
         }));
   }))();
}
export { i as n, r as t };
