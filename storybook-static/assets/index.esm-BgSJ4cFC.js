import { n as e, o as t } from "./rolldown-runtime-2s6bX4vc.js";
import { t as n } from "./react-CGbgjWmm.js";
import { o as r } from "./iframe-qT4tgGWe.js";
var i, a;
function o() {
   return (o = e(() => {
      ((i = r()),
         (a = ({ children: e, shadowSize: t = `lg`, className: n }) =>
            (0, i.jsx)(`div`, {
               className: `bg-white dark:bg-gray-900 dark:text-white border-4 border-black p-8 ${{ sm: `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`, md: `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`, lg: `shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`, xl: `shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]` }[t]} transition-colors ${n}`,
               children: e,
            })),
         (a.__docgenInfo = {
            description: ``,
            methods: [],
            displayName: `ContentFrame`,
            props: {
               children: {
                  required: !0,
                  tsType: { name: `ReactReactNode`, raw: `React.ReactNode` },
                  description: ``,
               },
               shadowSize: {
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
               className: {
                  required: !1,
                  tsType: { name: `string` },
                  description: ``,
               },
            },
         }));
   }))();
}
var s, c;
function l() {
   return (l = e(() => {
      ((s = r()),
         (c = ({ title: e, headSize: t = `md`, sectionClassName: n }) =>
            (0, s.jsxs)(`div`, {
               className: `mb-8 group cursor-pointer w-fit ${n}`,
               children: [
                  (0, s.jsx)(`h1`, {
                     className: `text-3xl md:${{ sm: `text-4xl`, md: `text-5xl`, lg: `text-6xl` }[t]} font-black mb-2 uppercase group-hover:scale-105 transition-transform duration-300`,
                     children: e,
                  }),
                  (0, s.jsx)(`div`, {
                     className: `relative`,
                     children: (0, s.jsx)(`div`, {
                        className: `h-2 dark:bg-white bg-black w-20 group-hover:w-full transition-all duration-500 ease-out origin-left`,
                     }),
                  }),
               ],
            })),
         (c.__docgenInfo = {
            description: ``,
            methods: [],
            displayName: `SectionHeader`,
            props: {
               title: {
                  required: !0,
                  tsType: { name: `string` },
                  description: ``,
               },
               headSize: {
                  required: !1,
                  tsType: {
                     name: `union`,
                     raw: `"sm" | "md" | "lg"`,
                     elements: [
                        { name: `literal`, value: `"sm"` },
                        { name: `literal`, value: `"md"` },
                        { name: `literal`, value: `"lg"` },
                     ],
                  },
                  description: ``,
                  defaultValue: { value: `"md"`, computed: !1 },
               },
               sectionClassName: {
                  required: !1,
                  tsType: { name: `string` },
                  description: ``,
               },
            },
         }));
   }))();
}
var u, d, f, p, m, h, g, _;
function v() {
   return (v = e(() => {
      ((u = t(n(), 1)),
         ({ fn: d } = __STORYBOOK_MODULE_TEST__),
         (f = d().mockName(`next/link::Link`)),
         (p = (e) => (e.endsWith(`/`) && e.length > 1 ? e.slice(0, -1) : e)),
         (m = (e) => {
            let t = e.indexOf(`#`),
               n = e.indexOf(`?`),
               r = n > -1 && (t < 0 || n < t);
            return r || t > -1
               ? {
                    pathname: e.substring(0, r ? n : t),
                    query: r ? e.substring(n, t > -1 ? t : void 0) : ``,
                    hash: t > -1 ? e.slice(t) : ``,
                 }
               : { pathname: e, query: ``, hash: `` };
         }),
         (h = (e) => {
            if (!e.startsWith(`/`)) return e;
            let { pathname: t, query: n, hash: r } = m(e);
            return `${p(t)}${n}${r}`;
         }),
         (g = u.forwardRef(function (
            {
               href: e,
               as: t,
               replace: n,
               scroll: r,
               shallow: i,
               prefetch: a,
               passHref: o,
               legacyBehavior: s,
               locale: c,
               onClick: l,
               children: d,
               ...p
            },
            m
         ) {
            let g =
                  typeof e == `object`
                     ? `${e.pathname || ``}${e.query ? `?${new URLSearchParams(e.query).toString()}` : ``}${e.hash || ``}`
                     : e,
               _ = typeof g == `string` ? h(g) : g,
               v = (e) => {
                  (e.preventDefault(),
                     l?.(e),
                     f(_, {
                        replace: n,
                        scroll: r,
                        shallow: i,
                        prefetch: a,
                        locale: c,
                     }));
               };
            if (s) {
               let e = u.Children.only(d),
                  t = {
                     ref: m,
                     onClick: (t) => {
                        (t.preventDefault(),
                           e.props &&
                              typeof e.props.onClick == `function` &&
                              e.props.onClick(t),
                           f(_, {
                              replace: n,
                              scroll: r,
                              shallow: i,
                              prefetch: a,
                              locale: c,
                           }));
                     },
                     ...p,
                  };
               return (
                  (o || (e.type === `a` && !(`href` in (e.props || {})))) &&
                     (t.href = _),
                  u.cloneElement(e, t)
               );
            }
            return u.createElement(
               `a`,
               { ref: m, href: _, onClick: v, ...p },
               d
            );
         })),
         (g.displayName = `NextLink`),
         (_ = g),
         d(() => ({ pending: !1 })).mockName(`next/link::useLinkStatus`));
   }))();
}
function y(e) {
   let t,
      n = Array.isArray(e),
      r = typeof FileList < `u` && e instanceof FileList;
   if (e instanceof Date) t = new Date(e);
   else if (!(ce && (e instanceof Blob || r)) && (n || P(e))) {
      if (
         ((t = n ? [] : Object.create(Object.getPrototypeOf(e))), !n && !se(e))
      )
         t = e;
      else for (let n in e) e.hasOwnProperty(n) && (t[n] = y(e[n]));
   } else return e;
   return t;
}
function b(e, t, n = new WeakSet()) {
   if (W(e) || W(t)) return Object.is(e, t);
   if (j(e) && j(t)) return e.getTime() === t.getTime();
   let r = Object.keys(e),
      i = Object.keys(t);
   if (r.length !== i.length) return !1;
   if (n.has(e) || n.has(t)) return !0;
   (n.add(e), n.add(t));
   for (let a of r) {
      let r = e[a];
      if (!i.includes(a)) return !1;
      if (a !== `ref`) {
         let e = t[a];
         if (
            (j(r) && j(e)) ||
            (P(r) && P(e)) ||
            (Array.isArray(r) && Array.isArray(e))
               ? !b(r, e, n)
               : !Object.is(r, e)
         )
            return !1;
      }
   }
   return !0;
}
function x(e, t) {
   let n = {};
   for (let r in e)
      if (e.hasOwnProperty(r)) {
         let i = e[r],
            a = t[r];
         if (i && P(i) && a) {
            let e = x(i, a);
            P(e) && (n[r] = e);
         } else e[r] && (n[r] = a);
      }
   return n;
}
function ee(e, t) {
   let n = t.slice(0, -1).length,
      r = 0;
   for (; r < n; ) e = I(e) ? r++ : e[t[r++]];
   return e;
}
function S(e) {
   for (let t in e) if (e.hasOwnProperty(t) && !I(e[t])) return !1;
   return !0;
}
function C(e, t) {
   let n = Array.isArray(t) ? t : F(t) ? [t] : L(t),
      r = n.length === 1 ? e : ee(e, n),
      i = n.length - 1,
      a = n[i];
   return (
      r && delete r[a],
      i !== 0 &&
         ((P(r) && K(r)) || (Array.isArray(r) && S(r))) &&
         C(e, n.slice(0, -1)),
      e
   );
}
function w(e) {
   return Array.isArray(e) || (P(e) && !Ce(e));
}
function T(e, t = {}) {
   for (let n in e) {
      let r = e[n];
      w(r)
         ? ((t[n] = Array.isArray(r) ? [] : {}), T(r, t[n]))
         : I(r) || (t[n] = !0);
   }
   return t;
}
function E(e, t, n) {
   n ||= T(t);
   for (let r in e) {
      let i = e[r];
      if (w(i))
         I(t) || W(n[r])
            ? (n[r] = T(i, Array.isArray(i) ? [] : {}))
            : E(i, M(t) ? {} : t[r], n[r]);
      else {
         let e = t[r];
         n[r] = !b(i, e);
      }
   }
   return n;
}
function te(e) {
   let t = e.ref;
   return _e(t)
      ? t.files
      : be(t)
        ? Oe(e.refs).value
        : ye(t)
          ? [...t.selectedOptions].map(({ value: e }) => e)
          : A(t)
            ? Ee(e.refs).value
            : De(I(t.value) ? e.ref.value : t.value, e);
}
function ne(e, t, n) {
   let r = R(e, n);
   if (r || F(n)) return { error: r, name: n };
   let i = n.split(`.`);
   for (; i.length; ) {
      let r = i.join(`.`),
         a = R(t, r),
         o = R(e, r);
      if (a && !Array.isArray(a) && n !== r) return { name: n };
      if (o && o.type) return { name: r, error: o };
      if (o && o.root && o.root.type)
         return { name: `${r}.root`, error: o.root };
      i.pop();
   }
   return { name: n };
}
function D(e, t, n = `validate`) {
   if (U(e) || (Array.isArray(e) && e.every(U)) || (z(e) && !e))
      return { type: n, message: U(e) ? e : ``, ref: t };
}
function re(e = {}) {
   let t = { ...Be, ...e },
      n = {
         submitCount: 0,
         isDirty: !1,
         isReady: !1,
         isLoading: q(t.defaultValues),
         isValidating: !1,
         isSubmitted: !1,
         isSubmitting: !1,
         isSubmitSuccessful: !1,
         isValid: !1,
         touchedFields: {},
         dirtyFields: {},
         validatingFields: {},
         errors: t.errors || {},
         disabled: t.disabled || !1,
      },
      r = {},
      i =
         ((P(t.defaultValues) || P(t.values)) &&
            y(t.defaultValues || t.values)) ||
         {},
      a = t.shouldUnregister ? {} : y(i),
      o = { action: !1, mount: !1, watch: !1 },
      s = {
         mount: new Set(),
         disabled: new Set(),
         unMount: new Set(),
         array: new Set(),
         watch: new Set(),
      },
      c,
      l = 0,
      u = {
         isDirty: !1,
         dirtyFields: !1,
         validatingFields: !1,
         touchedFields: !1,
         isValidating: !1,
         isValid: !1,
         errors: !1,
      },
      d = { ...u },
      f = { array: ge(), state: ge() },
      p = t.criteriaMode === V.all,
      m = (e) => (t) => {
         (clearTimeout(l), (l = setTimeout(e, t)));
      },
      h = async (e) => {
         if (!t.disabled && (u.isValid || d.isValid || e)) {
            let e = t.resolver ? K((await D()).errors) : await O(r, !0);
            e !== n.isValid && f.state.next({ isValid: e });
         }
      },
      g = (e, r) => {
         !t.disabled &&
            (u.isValidating ||
               u.validatingFields ||
               d.isValidating ||
               d.validatingFields) &&
            ((e || Array.from(s.mount)).forEach((e) => {
               e &&
                  (r ? B(n.validatingFields, e, r) : C(n.validatingFields, e));
            }),
            f.state.next({
               validatingFields: n.validatingFields,
               isValidating: !K(n.validatingFields),
            }));
      },
      _ = (e, s = [], c, l, p = !0, m = !0) => {
         if (l && c && !t.disabled) {
            if (((o.action = !0), m && Array.isArray(R(r, e)))) {
               let t = c(R(r, e), l.argA, l.argB);
               p && B(r, e, t);
            }
            if (m && Array.isArray(R(n.errors, e))) {
               let t = c(R(n.errors, e), l.argA, l.argB);
               (p && B(n.errors, e, t), Le(n.errors, e));
            }
            if (
               (u.touchedFields || d.touchedFields) &&
               m &&
               Array.isArray(R(n.touchedFields, e))
            ) {
               let t = c(R(n.touchedFields, e), l.argA, l.argB);
               p && B(n.touchedFields, e, t);
            }
            ((u.dirtyFields || d.dirtyFields) && (n.dirtyFields = E(i, a)),
               f.state.next({
                  name: e,
                  isDirty: N(e, s),
                  dirtyFields: n.dirtyFields,
                  errors: n.errors,
                  isValid: n.isValid,
               }));
         } else B(a, e, s);
      },
      v = (e, t) => {
         (B(n.errors, e, t), f.state.next({ errors: n.errors }));
      },
      ee = (e) => {
         ((n.errors = e), f.state.next({ errors: n.errors, isValid: !1 }));
      },
      S = (e, t, n, s) => {
         let c = R(r, e);
         if (c) {
            let r = R(a, e, I(n) ? R(i, e) : n);
            (I(r) || (s && s.defaultChecked) || t
               ? B(a, e, t ? r : te(c._f))
               : F(e, r),
               o.mount && !o.action && h());
         }
      },
      w = (e, r, a, o, s) => {
         let c = !1,
            l = !1,
            p = { name: e };
         if (!t.disabled) {
            if (!a || o) {
               (u.isDirty || d.isDirty) &&
                  ((l = n.isDirty),
                  (n.isDirty = p.isDirty = N()),
                  (c = l !== p.isDirty));
               let t = b(R(i, e), r);
               ((l = !!R(n.dirtyFields, e)),
                  t ? C(n.dirtyFields, e) : B(n.dirtyFields, e, !0),
                  (p.dirtyFields = n.dirtyFields),
                  (c ||= (u.dirtyFields || d.dirtyFields) && l !== !t));
            }
            if (a) {
               let t = R(n.touchedFields, e);
               t ||
                  (B(n.touchedFields, e, a),
                  (p.touchedFields = n.touchedFields),
                  (c ||= (u.touchedFields || d.touchedFields) && t !== a));
            }
            c && s && f.state.next(p);
         }
         return c ? p : {};
      },
      T = (e, r, i, a) => {
         let o = R(n.errors, e),
            s = (u.isValid || d.isValid) && z(r) && n.isValid !== r;
         if (
            (t.delayError && i
               ? ((c = m(() => v(e, i))), c(t.delayError))
               : (clearTimeout(l),
                 (c = null),
                 i ? B(n.errors, e, i) : C(n.errors, e)),
            (i ? !b(o, i) : o) || !K(a) || s)
         ) {
            let t = {
               ...a,
               ...(s && z(r) ? { isValid: r } : {}),
               errors: n.errors,
               name: e,
            };
            ((n = { ...n, ...t }), f.state.next(t));
         }
      },
      D = async (e) => {
         g(e, !0);
         let n = await t.resolver(
            a,
            t.context,
            ke(e || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
         );
         return (g(e), n);
      },
      re = async (e) => {
         let { errors: t } = await D(e);
         if (e)
            for (let r of e) {
               let e = R(t, r);
               e ? B(n.errors, r, e) : C(n.errors, r);
            }
         else n.errors = t;
         return t;
      },
      O = async (e, r, i = { valid: !0 }) => {
         for (let o in e) {
            let c = e[o];
            if (c) {
               let { _f: e, ...o } = c;
               if (e) {
                  let o = s.array.has(e.name),
                     l = c._f && je(c._f);
                  l && u.validatingFields && g([e.name], !0);
                  let d = await ze(
                     c,
                     s.disabled,
                     a,
                     p,
                     t.shouldUseNativeValidation && !r,
                     o
                  );
                  if (
                     (l && u.validatingFields && g([e.name]),
                     d[e.name] && ((i.valid = !1), r))
                  )
                     break;
                  !r &&
                     (R(d, e.name)
                        ? o
                           ? Re(n.errors, d, e.name)
                           : B(n.errors, e.name, d[e.name])
                        : C(n.errors, e.name));
               }
               !K(o) && (await O(o, r, i));
            }
         }
         return i.valid;
      },
      k = () => {
         for (let e of s.unMount) {
            let t = R(r, e);
            t &&
               (t._f.refs ? t._f.refs.every((e) => !Se(e)) : !Se(t._f.ref)) &&
               J(e);
         }
         s.unMount = new Set();
      },
      N = (e, n) => !t.disabled && (e && n && B(a, e, n), !b(W(), i)),
      ae = (e, t, n) =>
         me(
            e,
            s,
            { ...(o.mount ? a : I(t) ? i : U(e) ? { [e]: t } : t) },
            n,
            t
         ),
      se = (e) =>
         le(R(o.mount ? a : i, e, t.shouldUnregister ? R(i, e, []) : [])),
      F = (e, t, n = {}) => {
         let i = R(r, e),
            o = t;
         if (i) {
            let n = i._f;
            n &&
               (!n.disabled && B(a, e, De(t, n)),
               (o = ve(n.ref) && M(t) ? `` : t),
               ye(n.ref)
                  ? [...n.ref.options].forEach(
                       (e) => (e.selected = o.includes(e.value))
                    )
                  : n.refs
                    ? A(n.ref)
                       ? n.refs.forEach((e) => {
                            (e.defaultChecked && e.disabled) ||
                               (e.checked = Array.isArray(o)
                                  ? !!o.find((t) => t === e.value)
                                  : o === e.value || !!o);
                         })
                       : n.refs.forEach((e) => (e.checked = e.value === o))
                    : _e(n.ref)
                      ? (n.ref.value = ``)
                      : ((n.ref.value = o),
                        n.ref.type || f.state.next({ name: e, values: y(a) })));
         }
         ((n.shouldDirty || n.shouldTouch) &&
            w(e, o, n.shouldTouch, n.shouldDirty, !0),
            n.shouldValidate && pe(e));
      },
      L = (e, t, n) => {
         for (let i in t) {
            if (!t.hasOwnProperty(i)) return;
            let a = t[i],
               o = e + `.` + i,
               c = R(r, o);
            (s.array.has(e) || P(a) || (c && !c._f)) && !j(a)
               ? L(o, a, n)
               : F(o, a, n);
         }
      },
      H = (e, t, c = {}) => {
         let l = R(r, e),
            p = s.array.has(e),
            m = y(t);
         (B(a, e, m),
            p
               ? (f.array.next({ name: e, values: y(a) }),
                 (u.isDirty || u.dirtyFields || d.isDirty || d.dirtyFields) &&
                    c.shouldDirty &&
                    f.state.next({
                       name: e,
                       dirtyFields: E(i, a),
                       isDirty: N(e, m),
                    }))
               : l && !l._f && !M(m)
                 ? L(e, m, c)
                 : F(e, m, c),
            Ne(e, s) && f.state.next({ ...n, name: e }),
            f.state.next({ name: o.mount ? e : void 0, values: y(a) }));
      },
      de = async (e) => {
         o.mount = !0;
         let i = e.target,
            l = i.name,
            m = !0,
            _ = R(r, l),
            v = (e) => {
               m =
                  Number.isNaN(e) ||
                  (j(e) && isNaN(e.getTime())) ||
                  b(e, R(a, l, e));
            },
            x = Ae(t.mode),
            ee = Ae(t.reValidateMode);
         if (_) {
            let o,
               b,
               S = i.type ? te(_._f) : ie(e),
               C = e.type === ue.BLUR || e.type === ue.FOCUS_OUT,
               E =
                  (!Me(_._f) && !t.resolver && !R(n.errors, l) && !_._f.deps) ||
                  Ie(C, R(n.touchedFields, l), n.isSubmitted, ee, x),
               re = Ne(l, s, C);
            (B(a, l, S),
               C
                  ? (i && i.readOnly) ||
                    (_._f.onBlur && _._f.onBlur(e), c && c(0))
                  : _._f.onChange && _._f.onChange(e));
            let k = w(l, S, C),
               A = !K(k) || re;
            if (
               (!C && f.state.next({ name: l, type: e.type, values: y(a) }), E)
            )
               return (
                  (u.isValid || d.isValid) &&
                     (t.mode === `onBlur` ? C && h() : C || h()),
                  A && f.state.next({ name: l, ...(re ? {} : k) })
               );
            if ((!C && re && f.state.next({ ...n }), t.resolver)) {
               let { errors: e } = await D([l]);
               if ((v(S), m)) {
                  let t = ne(n.errors, r, l),
                     i = ne(e, r, t.name || l);
                  ((o = i.error), (l = i.name), (b = K(e)));
               }
            } else
               (g([l], !0),
                  (o = (
                     await ze(_, s.disabled, a, p, t.shouldUseNativeValidation)
                  )[l]),
                  g([l]),
                  v(S),
                  m &&
                     (o
                        ? (b = !1)
                        : (u.isValid || d.isValid) && (b = await O(r, !0))));
            m &&
               (_._f.deps &&
                  (!Array.isArray(_._f.deps) || _._f.deps.length > 0) &&
                  pe(_._f.deps),
               T(l, b, o, k));
         }
      },
      fe = (e, t) => {
         if (R(n.errors, t) && e.focus) return (e.focus(), 1);
      },
      pe = async (e, i = {}) => {
         let a,
            o,
            c = G(e);
         if (t.resolver) {
            let t = await re(I(e) ? e : c);
            ((a = K(t)), (o = e ? !c.some((e) => R(t, e)) : a));
         } else
            e
               ? ((o = (
                    await Promise.all(
                       c.map(async (e) => {
                          let t = R(r, e);
                          return await O(t && t._f ? { [e]: t } : t);
                       })
                    )
                 ).every(Boolean)),
                 (o || n.isValid) && h())
               : (o = a = await O(r));
         return (
            f.state.next({
               ...(!U(e) || ((u.isValid || d.isValid) && a !== n.isValid)
                  ? {}
                  : { name: e }),
               ...(t.resolver || !e ? { isValid: a } : {}),
               errors: n.errors,
            }),
            i.shouldFocus && !o && Q(r, fe, e ? c : s.mount),
            o
         );
      },
      W = (e, t) => {
         let r = { ...(o.mount ? a : i) };
         return (
            t && (r = x(t.dirtyFields ? n.dirtyFields : n.touchedFields, r)),
            I(e) ? r : U(e) ? R(r, e) : e.map((e) => R(r, e))
         );
      },
      he = (e, t) => ({
         invalid: !!R((t || n).errors, e),
         isDirty: !!R((t || n).dirtyFields, e),
         error: R((t || n).errors, e),
         isValidating: !!R(n.validatingFields, e),
         isTouched: !!R((t || n).touchedFields, e),
      }),
      be = (e) => {
         (e && G(e).forEach((e) => C(n.errors, e)),
            f.state.next({ errors: e ? n.errors : {} }));
      },
      Ce = (e, t, i) => {
         let a = (R(r, e, { _f: {} })._f || {}).ref,
            { ref: o, message: s, type: c, ...l } = R(n.errors, e) || {};
         (B(n.errors, e, { ...l, ...t, ref: a }),
            f.state.next({ name: e, errors: n.errors, isValid: !1 }),
            i && i.shouldFocus && a && a.focus && a.focus());
      },
      we = (e, t) =>
         q(e)
            ? f.state.subscribe({
                 next: (n) => `values` in n && e(ae(void 0, t), n),
              })
            : ae(e, t, !0),
      Te = (e) =>
         f.state.subscribe({
            next: (t) => {
               Fe(e.name, t.name, e.exact) &&
                  Pe(t, e.formState || u, Ke, e.reRenderRoot) &&
                  e.callback({
                     values: { ...a },
                     ...n,
                     ...t,
                     defaultValues: i,
                  });
            },
         }).unsubscribe,
      Ee = (e) => (
         (o.mount = !0),
         (d = { ...d, ...e.formState }),
         Te({ ...e, formState: d })
      ),
      J = (e, o = {}) => {
         for (let c of e ? G(e) : s.mount)
            (s.mount.delete(c),
               s.array.delete(c),
               o.keepValue || (C(r, c), C(a, c)),
               !o.keepError && C(n.errors, c),
               !o.keepDirty && C(n.dirtyFields, c),
               !o.keepTouched && C(n.touchedFields, c),
               !o.keepIsValidating && C(n.validatingFields, c),
               !t.shouldUnregister && !o.keepDefaultValue && C(i, c));
         (f.state.next({ values: y(a) }),
            f.state.next({ ...n, ...(o.keepDirty ? { isDirty: N() } : {}) }),
            !o.keepIsValid && h());
      },
      Oe = ({ disabled: e, name: t }) => {
         ((z(e) && o.mount) || e || s.disabled.has(t)) &&
            (e ? s.disabled.add(t) : s.disabled.delete(t));
      },
      Y = (e, n = {}) => {
         let a = R(r, e),
            c = z(n.disabled) || z(t.disabled);
         return (
            B(r, e, {
               ...(a || {}),
               _f: {
                  ...(a && a._f ? a._f : { ref: { name: e } }),
                  name: e,
                  mount: !0,
                  ...n,
               },
            }),
            s.mount.add(e),
            a
               ? Oe({
                    disabled: z(n.disabled) ? n.disabled : t.disabled,
                    name: e,
                 })
               : S(e, !0, n.value),
            {
               ...(c ? { disabled: n.disabled || t.disabled } : {}),
               ...(t.progressive
                  ? {
                       required: !!n.required,
                       min: X(n.min),
                       max: X(n.max),
                       minLength: X(n.minLength),
                       maxLength: X(n.maxLength),
                       pattern: X(n.pattern),
                    }
                  : {}),
               name: e,
               onChange: de,
               onBlur: de,
               ref: (c) => {
                  if (c) {
                     (Y(e, n), (a = R(r, e)));
                     let t =
                           (I(c.value) &&
                              c.querySelectorAll &&
                              c.querySelectorAll(`input,select,textarea`)[0]) ||
                           c,
                        o = xe(t),
                        s = a._f.refs || [];
                     if (o ? s.find((e) => e === t) : t === a._f.ref) return;
                     (B(r, e, {
                        _f: {
                           ...a._f,
                           ...(o
                              ? {
                                   refs: [
                                      ...s.filter(Se),
                                      t,
                                      ...(Array.isArray(R(i, e)) ? [{}] : []),
                                   ],
                                   ref: { type: t.type, name: e },
                                }
                              : { ref: t }),
                        },
                     }),
                        S(e, !1, void 0, t));
                  } else
                     ((a = R(r, e, {})),
                        a._f && (a._f.mount = !1),
                        (t.shouldUnregister || n.shouldUnregister) &&
                           !(oe(s.array, e) && o.action) &&
                           s.unMount.add(e));
               },
            }
         );
      },
      Z = () => t.shouldFocusError && Q(r, fe, s.mount),
      $ = (e) => {
         z(e) &&
            (f.state.next({ disabled: e }),
            Q(
               r,
               (t, n) => {
                  let i = R(r, n);
                  i &&
                     ((t.disabled = i._f.disabled || e),
                     Array.isArray(i._f.refs) &&
                        i._f.refs.forEach((t) => {
                           t.disabled = i._f.disabled || e;
                        }));
               },
               0,
               !1
            ));
      },
      Ve = (e, i) => async (o) => {
         let c;
         o &&
            (o.preventDefault && o.preventDefault(), o.persist && o.persist());
         let l = y(a);
         if ((f.state.next({ isSubmitting: !0 }), t.resolver)) {
            let { errors: e, values: t } = await D();
            ((n.errors = e), (l = y(t)));
         } else await O(r);
         if (s.disabled.size) for (let e of s.disabled) C(l, e);
         if ((C(n.errors, `root`), K(n.errors))) {
            f.state.next({ errors: {} });
            try {
               await e(l, o);
            } catch (e) {
               c = e;
            }
         } else (i && (await i({ ...n.errors }, o)), Z(), setTimeout(Z));
         if (
            (f.state.next({
               isSubmitted: !0,
               isSubmitting: !1,
               isSubmitSuccessful: K(n.errors) && !c,
               submitCount: n.submitCount + 1,
               errors: n.errors,
            }),
            c)
         )
            throw c;
      },
      He = (e, t = {}) => {
         R(r, e) &&
            (I(t.defaultValue)
               ? H(e, y(R(i, e)))
               : (H(e, t.defaultValue), B(i, e, y(t.defaultValue))),
            t.keepTouched || C(n.touchedFields, e),
            t.keepDirty ||
               (C(n.dirtyFields, e),
               (n.isDirty = t.defaultValue ? N(e, y(R(i, e))) : N())),
            t.keepError || (C(n.errors, e), u.isValid && h()),
            f.state.next({ ...n }));
      },
      Ue = (e, c = {}) => {
         let l = e ? y(e) : i,
            d = y(l),
            p = K(e),
            m = p ? i : d;
         if ((c.keepDefaultValues || (i = l), !c.keepValues)) {
            if (c.keepDirtyValues) {
               let e = new Set([...s.mount, ...Object.keys(E(i, a))]);
               for (let t of Array.from(e))
                  R(n.dirtyFields, t) ? B(m, t, R(a, t)) : H(t, R(m, t));
            } else {
               if (ce && I(e))
                  for (let e of s.mount) {
                     let t = R(r, e);
                     if (t && t._f) {
                        let e = Array.isArray(t._f.refs)
                           ? t._f.refs[0]
                           : t._f.ref;
                        if (ve(e)) {
                           let t = e.closest(`form`);
                           if (t) {
                              t.reset();
                              break;
                           }
                        }
                     }
                  }
               if (c.keepFieldsRef) for (let e of s.mount) H(e, R(m, e));
               else r = {};
            }
            ((a = t.shouldUnregister
               ? c.keepDefaultValues
                  ? y(i)
                  : {}
               : y(m)),
               f.array.next({ values: { ...m } }),
               f.state.next({ values: { ...m } }));
         }
         ((s = {
            mount: c.keepDirtyValues ? s.mount : new Set(),
            unMount: new Set(),
            array: new Set(),
            disabled: new Set(),
            watch: new Set(),
            watchAll: !1,
            focus: ``,
         }),
            (o.mount =
               !u.isValid ||
               !!c.keepIsValid ||
               !!c.keepDirtyValues ||
               (!t.shouldUnregister && !K(m))),
            (o.watch = !!t.shouldUnregister),
            f.state.next({
               submitCount: c.keepSubmitCount ? n.submitCount : 0,
               isDirty: p
                  ? !1
                  : c.keepDirty
                    ? n.isDirty
                    : !(!c.keepDefaultValues || b(e, i)),
               isSubmitted: c.keepIsSubmitted ? n.isSubmitted : !1,
               dirtyFields: p
                  ? {}
                  : c.keepDirtyValues
                    ? c.keepDefaultValues && a
                       ? E(i, a)
                       : n.dirtyFields
                    : c.keepDefaultValues && e
                      ? E(i, e)
                      : c.keepDirty
                        ? n.dirtyFields
                        : {},
               touchedFields: c.keepTouched ? n.touchedFields : {},
               errors: c.keepErrors ? n.errors : {},
               isSubmitSuccessful: c.keepIsSubmitSuccessful
                  ? n.isSubmitSuccessful
                  : !1,
               isSubmitting: !1,
               defaultValues: i,
            }));
      },
      We = (e, t) => Ue(q(e) ? e(a) : e, t),
      Ge = (e, t = {}) => {
         let n = R(r, e),
            i = n && n._f;
         if (i) {
            let e = i.refs ? i.refs[0] : i.ref;
            e.focus && (e.focus(), t.shouldSelect && q(e.select) && e.select());
         }
      },
      Ke = (e) => {
         n = { ...n, ...e };
      },
      qe = {
         control: {
            register: Y,
            unregister: J,
            getFieldState: he,
            handleSubmit: Ve,
            setError: Ce,
            _subscribe: Te,
            _runSchema: D,
            _focusError: Z,
            _getWatch: ae,
            _getDirty: N,
            _setValid: h,
            _setFieldArray: _,
            _setDisabledField: Oe,
            _setErrors: ee,
            _getFieldArray: se,
            _reset: Ue,
            _resetDefaultValues: () =>
               q(t.defaultValues) &&
               t.defaultValues().then((e) => {
                  (We(e, t.resetOptions), f.state.next({ isLoading: !1 }));
               }),
            _removeUnmounted: k,
            _disableForm: $,
            _subjects: f,
            _proxyFormState: u,
            get _fields() {
               return r;
            },
            get _formValues() {
               return a;
            },
            get _state() {
               return o;
            },
            set _state(e) {
               o = e;
            },
            get _defaultValues() {
               return i;
            },
            get _names() {
               return s;
            },
            set _names(e) {
               s = e;
            },
            get _formState() {
               return n;
            },
            get _options() {
               return t;
            },
            set _options(e) {
               t = { ...t, ...e };
            },
         },
         subscribe: Ee,
         trigger: pe,
         register: Y,
         handleSubmit: Ve,
         watch: we,
         setValue: H,
         getValues: W,
         reset: We,
         resetField: He,
         clearErrors: be,
         unregister: J,
         setError: Ce,
         setFocus: Ge,
         getFieldState: he,
      };
   return { ...qe, formControl: qe };
}
function O(e = {}) {
   let t = k.useRef(void 0),
      n = k.useRef(void 0),
      [r, i] = k.useState({
         isDirty: !1,
         isValidating: !1,
         isLoading: q(e.defaultValues),
         isSubmitted: !1,
         isSubmitting: !1,
         isSubmitSuccessful: !1,
         isValid: !1,
         submitCount: 0,
         dirtyFields: {},
         touchedFields: {},
         validatingFields: {},
         errors: e.errors || {},
         disabled: e.disabled || !1,
         isReady: !1,
         defaultValues: q(e.defaultValues) ? void 0 : e.defaultValues,
      });
   if (!t.current) {
      if (e.formControl)
         ((t.current = { ...e.formControl, formState: r }),
            e.defaultValues &&
               !q(e.defaultValues) &&
               e.formControl.reset(e.defaultValues, e.resetOptions));
      else {
         let { formControl: n, ...i } = re(e);
         t.current = { ...i, formState: r };
      }
   }
   let a = t.current.control;
   return (
      (a._options = e),
      pe(() => {
         let e = a._subscribe({
            formState: a._proxyFormState,
            callback: () => i({ ...a._formState }),
            reRenderRoot: !0,
         });
         return (
            i((e) => ({ ...e, isReady: !0 })),
            (a._formState.isReady = !0),
            e
         );
      }, [a]),
      k.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]),
      k.useEffect(() => {
         (e.mode && (a._options.mode = e.mode),
            e.reValidateMode && (a._options.reValidateMode = e.reValidateMode));
      }, [a, e.mode, e.reValidateMode]),
      k.useEffect(() => {
         e.errors && (a._setErrors(e.errors), a._focusError());
      }, [a, e.errors]),
      k.useEffect(() => {
         e.shouldUnregister &&
            a._subjects.state.next({ values: a._getWatch() });
      }, [a, e.shouldUnregister]),
      k.useEffect(() => {
         if (a._proxyFormState.isDirty) {
            let e = a._getDirty();
            e !== r.isDirty && a._subjects.state.next({ isDirty: e });
         }
      }, [a, r.isDirty]),
      k.useEffect(() => {
         e.values && !b(e.values, n.current)
            ? (a._reset(e.values, {
                 keepFieldsRef: !0,
                 ...a._options.resetOptions,
              }),
              a._options.resetOptions?.keepIsValid || a._setValid(),
              (n.current = e.values),
              i((e) => ({ ...e })))
            : a._resetDefaultValues();
      }, [a, e.values]),
      k.useEffect(() => {
         (a._state.mount || (a._setValid(), (a._state.mount = !0)),
            a._state.watch &&
               ((a._state.watch = !1),
               a._subjects.state.next({ ...a._formState })),
            a._removeUnmounted());
      }),
      (t.current.formState = fe(r, a)),
      t.current
   );
}
var k,
   A,
   j,
   M,
   N,
   P,
   ie,
   ae,
   oe,
   se,
   ce,
   F,
   I,
   le,
   L,
   R,
   z,
   B,
   ue,
   V,
   H,
   de,
   fe,
   pe,
   U,
   me,
   W,
   he,
   G,
   ge,
   K,
   _e,
   q,
   ve,
   ye,
   be,
   xe,
   Se,
   Ce,
   we,
   Te,
   Ee,
   De,
   J,
   Oe,
   ke,
   Y,
   X,
   Ae,
   Z,
   je,
   Me,
   Ne,
   Q,
   Pe,
   Fe,
   Ie,
   Le,
   Re,
   $,
   ze,
   Be;
function Ve() {
   return (Ve = e(() => {
      ((k = t(n(), 1)),
         (A = (e) => e.type === `checkbox`),
         (j = (e) => e instanceof Date),
         (M = (e) => e == null),
         (N = (e) => typeof e == `object`),
         (P = (e) => !M(e) && !Array.isArray(e) && N(e) && !j(e)),
         (ie = (e) =>
            P(e) && e.target
               ? A(e.target)
                  ? e.target.checked
                  : e.target.value
               : e),
         (ae = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e),
         (oe = (e, t) => e.has(ae(t))),
         (se = (e) => {
            let t = e.constructor && e.constructor.prototype;
            return P(t) && t.hasOwnProperty(`isPrototypeOf`);
         }),
         (ce =
            typeof window < `u` &&
            window.HTMLElement !== void 0 &&
            typeof document < `u`),
         (F = (e) => /^\w*$/.test(e)),
         (I = (e) => e === void 0),
         (le = (e) => (Array.isArray(e) ? e.filter(Boolean) : [])),
         (L = (e) => le(e.replace(/["|']|\]/g, ``).split(/\.|\[/))),
         (R = (e, t, n) => {
            if (!t || !P(e)) return n;
            let r = (F(t) ? [t] : L(t)).reduce((e, t) => (M(e) ? e : e[t]), e);
            return I(r) || r === e ? (I(e[t]) ? n : e[t]) : r;
         }),
         (z = (e) => typeof e == `boolean`),
         (B = (e, t, n) => {
            let r = -1,
               i = F(t) ? [t] : L(t),
               a = i.length,
               o = a - 1;
            for (; ++r < a; ) {
               let t = i[r],
                  a = n;
               if (r !== o) {
                  let n = e[t];
                  a = P(n) || Array.isArray(n) ? n : isNaN(+i[r + 1]) ? {} : [];
               }
               if (
                  t === `__proto__` ||
                  t === `constructor` ||
                  t === `prototype`
               )
                  return;
               ((e[t] = a), (e = e[t]));
            }
         }),
         (ue = { BLUR: `blur`, FOCUS_OUT: `focusout`, CHANGE: `change` }),
         (V = {
            onBlur: `onBlur`,
            onChange: `onChange`,
            onSubmit: `onSubmit`,
            onTouched: `onTouched`,
            all: `all`,
         }),
         (H = {
            max: `max`,
            min: `min`,
            maxLength: `maxLength`,
            minLength: `minLength`,
            pattern: `pattern`,
            required: `required`,
            validate: `validate`,
         }),
         (de = k.createContext(null)),
         (de.displayName = `HookFormContext`),
         (fe = (e, t, n, r = !0) => {
            let i = { defaultValues: t._defaultValues };
            for (let a in e)
               Object.defineProperty(i, a, {
                  get: () => {
                     let i = a;
                     return (
                        t._proxyFormState[i] !== V.all &&
                           (t._proxyFormState[i] = !r || V.all),
                        n && (n[i] = !0),
                        e[i]
                     );
                  },
               });
            return i;
         }),
         (pe = typeof window < `u` ? k.useLayoutEffect : k.useEffect),
         (U = (e) => typeof e == `string`),
         (me = (e, t, n, r, i) =>
            U(e)
               ? (r && t.watch.add(e), R(n, e, i))
               : Array.isArray(e)
                 ? e.map((e) => (r && t.watch.add(e), R(n, e)))
                 : (r && (t.watchAll = !0), n)),
         (W = (e) => M(e) || !N(e)),
         (he = (e, t, n, r, i) =>
            t
               ? {
                    ...n[e],
                    types: {
                       ...(n[e] && n[e].types ? n[e].types : {}),
                       [r]: i || !0,
                    },
                 }
               : {}),
         (G = (e) => (Array.isArray(e) ? e : [e])),
         (ge = () => {
            let e = [];
            return {
               get observers() {
                  return e;
               },
               next: (t) => {
                  for (let n of e) n.next && n.next(t);
               },
               subscribe: (t) => (
                  e.push(t),
                  {
                     unsubscribe: () => {
                        e = e.filter((e) => e !== t);
                     },
                  }
               ),
               unsubscribe: () => {
                  e = [];
               },
            };
         }),
         (K = (e) => P(e) && !Object.keys(e).length),
         (_e = (e) => e.type === `file`),
         (q = (e) => typeof e == `function`),
         (ve = (e) => {
            if (!ce) return !1;
            let t = e ? e.ownerDocument : 0;
            return (
               e instanceof
               (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
            );
         }),
         (ye = (e) => e.type === `select-multiple`),
         (be = (e) => e.type === `radio`),
         (xe = (e) => be(e) || A(e)),
         (Se = (e) => ve(e) && e.isConnected),
         (Ce = (e) => {
            for (let t in e) if (q(e[t])) return !0;
            return !1;
         }),
         (we = { value: !1, isValid: !1 }),
         (Te = { value: !0, isValid: !0 }),
         (Ee = (e) => {
            if (Array.isArray(e)) {
               if (e.length > 1) {
                  let t = e
                     .filter((e) => e && e.checked && !e.disabled)
                     .map((e) => e.value);
                  return { value: t, isValid: !!t.length };
               }
               return e[0].checked && !e[0].disabled
                  ? e[0].attributes && !I(e[0].attributes.value)
                     ? I(e[0].value) || e[0].value === ``
                        ? Te
                        : { value: e[0].value, isValid: !0 }
                     : Te
                  : we;
            }
            return we;
         }),
         (De = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
            I(e)
               ? e
               : t
                 ? e === ``
                    ? NaN
                    : e && +e
                 : n && U(e)
                   ? new Date(e)
                   : r
                     ? r(e)
                     : e),
         (J = { isValid: !1, value: null }),
         (Oe = (e) =>
            Array.isArray(e)
               ? e.reduce(
                    (e, t) =>
                       t && t.checked && !t.disabled
                          ? { isValid: !0, value: t.value }
                          : e,
                    J
                 )
               : J),
         (ke = (e, t, n, r) => {
            let i = {};
            for (let n of e) {
               let e = R(t, n);
               e && B(i, n, e._f);
            }
            return {
               criteriaMode: n,
               names: [...e],
               fields: i,
               shouldUseNativeValidation: r,
            };
         }),
         (Y = (e) => e instanceof RegExp),
         (X = (e) =>
            I(e)
               ? e
               : Y(e)
                 ? e.source
                 : P(e)
                   ? Y(e.value)
                      ? e.value.source
                      : e.value
                   : e),
         (Ae = (e) => ({
            isOnSubmit: !e || e === V.onSubmit,
            isOnBlur: e === V.onBlur,
            isOnChange: e === V.onChange,
            isOnAll: e === V.all,
            isOnTouch: e === V.onTouched,
         })),
         (Z = `AsyncFunction`),
         (je = (e) =>
            !!e &&
            !!e.validate &&
            !!(
               (q(e.validate) && e.validate.constructor.name === Z) ||
               (P(e.validate) &&
                  Object.values(e.validate).find(
                     (e) => e.constructor.name === Z
                  ))
            )),
         (Me = (e) =>
            e.mount &&
            (e.required ||
               e.min ||
               e.max ||
               e.maxLength ||
               e.minLength ||
               e.pattern ||
               e.validate)),
         (Ne = (e, t, n) =>
            !n &&
            (t.watchAll ||
               t.watch.has(e) ||
               [...t.watch].some(
                  (t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))
               ))),
         (Q = (e, t, n, r) => {
            for (let i of n || Object.keys(e)) {
               let n = R(e, i);
               if (n) {
                  let { _f: e, ...a } = n;
                  if (e) {
                     if (
                        (e.refs && e.refs[0] && t(e.refs[0], i) && !r) ||
                        (e.ref && t(e.ref, e.name) && !r)
                     )
                        return !0;
                     if (Q(a, t)) break;
                  } else if (P(a) && Q(a, t)) break;
               }
            }
         }),
         (Pe = (e, t, n, r) => {
            n(e);
            let { name: i, ...a } = e;
            return (
               K(a) ||
               Object.keys(a).length >= Object.keys(t).length ||
               Object.keys(a).find((e) => t[e] === (!r || V.all))
            );
         }),
         (Fe = (e, t, n) =>
            !e ||
            !t ||
            e === t ||
            G(e).some(
               (e) => e && (n ? e === t : e.startsWith(t) || t.startsWith(e))
            )),
         (Ie = (e, t, n, r, i) =>
            i.isOnAll
               ? !1
               : !n && i.isOnTouch
                 ? !(t || e)
                 : (n ? r.isOnBlur : i.isOnBlur)
                   ? !e
                   : !(n ? r.isOnChange : i.isOnChange) || e),
         (Le = (e, t) => !le(R(e, t)).length && C(e, t)),
         (Re = (e, t, n) => {
            let r = G(R(e, n));
            return (B(r, `root`, t[n]), B(e, n, r), e);
         }),
         ($ = (e) => (P(e) && !Y(e) ? e : { value: e, message: `` })),
         (ze = async (e, t, n, r, i, a) => {
            let {
                  ref: o,
                  refs: s,
                  required: c,
                  maxLength: l,
                  minLength: u,
                  min: d,
                  max: f,
                  pattern: p,
                  validate: m,
                  name: h,
                  valueAsNumber: g,
                  mount: _,
               } = e._f,
               v = R(n, h);
            if (!_ || t.has(h)) return {};
            let y = s ? s[0] : o,
               b = (e) => {
                  i &&
                     y.reportValidity &&
                     (y.setCustomValidity(z(e) ? `` : e || ``),
                     y.reportValidity());
               },
               x = {},
               ee = be(o),
               S = A(o),
               C = ee || S,
               w =
                  ((g || _e(o)) && I(o.value) && I(v)) ||
                  (ve(o) && o.value === ``) ||
                  v === `` ||
                  (Array.isArray(v) && !v.length),
               T = he.bind(null, h, r, x),
               E = (e, t, n, r = H.maxLength, i = H.minLength) => {
                  let a = e ? t : n;
                  x[h] = {
                     type: e ? r : i,
                     message: a,
                     ref: o,
                     ...T(e ? r : i, a),
                  };
               };
            if (
               a
                  ? !Array.isArray(v) || !v.length
                  : c &&
                    ((!C && (w || M(v))) ||
                       (z(v) && !v) ||
                       (S && !Ee(s).isValid) ||
                       (ee && !Oe(s).isValid))
            ) {
               let { value: e, message: t } = U(c)
                  ? { value: !!c, message: c }
                  : $(c);
               if (
                  e &&
                  ((x[h] = {
                     type: H.required,
                     message: t,
                     ref: y,
                     ...T(H.required, t),
                  }),
                  !r)
               )
                  return (b(t), x);
            }
            if (!w && (!M(d) || !M(f))) {
               let e,
                  t,
                  n = $(f),
                  i = $(d);
               if (!M(v) && !isNaN(v)) {
                  let r = o.valueAsNumber || (v && +v);
                  (M(n.value) || (e = r > n.value),
                     M(i.value) || (t = r < i.value));
               } else {
                  let r = o.valueAsDate || new Date(v),
                     a = (e) => new Date(new Date().toDateString() + ` ` + e),
                     s = o.type == `time`,
                     c = o.type == `week`;
                  (U(n.value) &&
                     v &&
                     (e = s
                        ? a(v) > a(n.value)
                        : c
                          ? v > n.value
                          : r > new Date(n.value)),
                     U(i.value) &&
                        v &&
                        (t = s
                           ? a(v) < a(i.value)
                           : c
                             ? v < i.value
                             : r < new Date(i.value)));
               }
               if ((e || t) && (E(!!e, n.message, i.message, H.max, H.min), !r))
                  return (b(x[h].message), x);
            }
            if ((l || u) && !w && (U(v) || (a && Array.isArray(v)))) {
               let e = $(l),
                  t = $(u),
                  n = !M(e.value) && v.length > +e.value,
                  i = !M(t.value) && v.length < +t.value;
               if ((n || i) && (E(n, e.message, t.message), !r))
                  return (b(x[h].message), x);
            }
            if (p && !w && U(v)) {
               let { value: e, message: t } = $(p);
               if (
                  Y(e) &&
                  !v.match(e) &&
                  ((x[h] = {
                     type: H.pattern,
                     message: t,
                     ref: o,
                     ...T(H.pattern, t),
                  }),
                  !r)
               )
                  return (b(t), x);
            }
            if (m) {
               if (q(m)) {
                  let e = D(await m(v, n), y);
                  if (e && ((x[h] = { ...e, ...T(H.validate, e.message) }), !r))
                     return (b(e.message), x);
               } else if (P(m)) {
                  let e = {};
                  for (let t in m) {
                     if (!K(e) && !r) break;
                     let i = D(await m[t](v, n), y, t);
                     i &&
                        ((e = { ...i, ...T(t, i.message) }),
                        b(i.message),
                        r && (x[h] = e));
                  }
                  if (!K(e) && ((x[h] = { ref: y, ...e }), !r)) return x;
               }
            }
            return (b(!0), x);
         }),
         (Be = {
            mode: V.onSubmit,
            reValidateMode: V.onChange,
            shouldFocusError: !0,
         }));
   }))();
}
export { c as a, o as c, _ as i, O as n, l as o, v as r, a as s, Ve as t };
