function Pt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const js = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ms = /* @__PURE__ */ Pt(js);
function Tr(e) {
  return !!e || e === "";
}
function ho(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ee(o) ? Ls(o) : ho(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (ee(e))
      return e;
    if (q(e))
      return e;
  }
}
const Ss = /;(?![^(]*\))/g, Hs = /:(.+)/;
function Ls(e) {
  const t = {};
  return e.split(Ss).forEach((n) => {
    if (n) {
      const o = n.split(Hs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function _o(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const o = _o(e[n]);
      o && (t += o + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const U = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, wt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], oe = () => {
}, Cr = () => !1, Us = /^on[^a-z]/, Jt = (e) => Us.test(e), an = (e) => e.startsWith("onUpdate:"), Q = Object.assign, mo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Bs = Object.prototype.hasOwnProperty, j = (e, t) => Bs.call(e, t), I = Array.isArray, Dt = (e) => Nn(e) === "[object Map]", ks = (e) => Nn(e) === "[object Set]", F = (e) => typeof e == "function", ee = (e) => typeof e == "string", go = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Eo = (e) => q(e) && F(e.then) && F(e.catch), Ks = Object.prototype.toString, Nn = (e) => Ks.call(e), vo = (e) => Nn(e).slice(8, -1), Ws = (e) => Nn(e) === "[object Object]", No = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, on = /* @__PURE__ */ Pt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qs = /* @__PURE__ */ Pt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, zs = /-(\w)/g, Ze = bn((e) => e.replace(zs, (t, n) => n ? n.toUpperCase() : "")), Js = /\B([A-Z])/g, xe = bn((e) => e.replace(Js, "-$1").toLowerCase()), yn = bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), rt = bn((e) => e ? `on${yn(e)}` : ""), Ut = (e, t) => !Object.is(e, t), Ft = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, dn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, zn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Bo;
const Pr = () => Bo || (Bo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let me;
class Ys {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = me, !t && me && (this.index = (me.scopes || (me.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = me;
      try {
        return me = this, t();
      } finally {
        me = n;
      }
    } else
      process.env.NODE_ENV !== "production" && pn("cannot run an inactive effect scope.");
  }
  on() {
    me = this;
  }
  off() {
    me = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function Qs(e, t = me) {
  t && t.active && t.effects.push(e);
}
function Xs() {
  return me;
}
function Zs(e) {
  me ? me.cleanups.push(e) : process.env.NODE_ENV !== "production" && pn("onScopeDispose() is called when there is no active effect scope to be associated with.");
}
const Bt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Ir = (e) => (e.w & Ge) > 0, $r = (e) => (e.n & Ge) > 0, Gs = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ge;
}, ei = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Ir(r) && !$r(r) ? r.delete(e) : t[n++] = r, r.w &= ~Ge, r.n &= ~Ge;
    }
    t.length = n;
  }
}, Jn = /* @__PURE__ */ new WeakMap();
let Mt = 0, Ge = 1;
const Yn = 30;
let ue;
const lt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Qn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class bo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Qs(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ue, n = Xe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ue, ue = this, Xe = !0, Ge = 1 << ++Mt, Mt <= Yn ? Gs(this) : ko(this), this.fn();
    } finally {
      Mt <= Yn && ei(this), Ge = 1 << --Mt, ue = this.parent, Xe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ue === this ? this.deferStop = !0 : this.active && (ko(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ko(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Xe = !0;
const Fr = [];
function _t() {
  Fr.push(Xe), Xe = !1;
}
function mt() {
  const e = Fr.pop();
  Xe = e === void 0 ? !0 : e;
}
function de(e, t, n) {
  if (Xe && ue) {
    let o = Jn.get(e);
    o || Jn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Bt());
    const s = process.env.NODE_ENV !== "production" ? { effect: ue, target: e, type: t, key: n } : void 0;
    Xn(r, s);
  }
}
function Xn(e, t) {
  let n = !1;
  Mt <= Yn ? $r(e) || (e.n |= Ge, n = !Ir(e)) : n = !e.has(ue), n && (e.add(ue), ue.deps.push(e), process.env.NODE_ENV !== "production" && ue.onTrack && ue.onTrack(Object.assign({ effect: ue }, t)));
}
function Be(e, t, n, o, r, s) {
  const i = Jn.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && I(e))
    i.forEach((d, h) => {
      (h === "length" || h >= o) && l.push(d);
    });
  else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        I(e) ? No(n) && l.push(i.get("length")) : (l.push(i.get(lt)), Dt(e) && l.push(i.get(Qn)));
        break;
      case "delete":
        I(e) || (l.push(i.get(lt)), Dt(e) && l.push(i.get(Qn)));
        break;
      case "set":
        Dt(e) && l.push(i.get(lt));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? Nt(l[0], u) : Nt(l[0]));
  else {
    const d = [];
    for (const h of l)
      h && d.push(...h);
    process.env.NODE_ENV !== "production" ? Nt(Bt(d), u) : Nt(Bt(d));
  }
}
function Nt(e, t) {
  const n = I(e) ? e : [...e];
  for (const o of n)
    o.computed && Ko(o, t);
  for (const o of n)
    o.computed || Ko(o, t);
}
function Ko(e, t) {
  (e !== ue || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Q({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const ti = /* @__PURE__ */ Pt("__proto__,__v_isRef,__isVue"), Ar = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(go)
), ni = /* @__PURE__ */ On(), oi = /* @__PURE__ */ On(!1, !0), ri = /* @__PURE__ */ On(!0), si = /* @__PURE__ */ On(!0, !0), Wo = /* @__PURE__ */ ii();
function ii() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = R(this);
      for (let s = 0, i = this.length; s < i; s++)
        de(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(R)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      _t();
      const o = R(this)[t].apply(this, n);
      return mt(), o;
    };
  }), e;
}
function On(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Br : Ur : t ? Lr : Hr).get(o))
      return o;
    const i = I(o);
    if (!e && i && j(Wo, r))
      return Reflect.get(Wo, r, s);
    const l = Reflect.get(o, r, s);
    return (go(r) ? Ar.has(r) : ti(r)) || (e || de(o, "get", r), t) ? l : Y(l) ? i && No(r) ? l : l.value : q(l) ? e ? kr(l) : Oo(l) : l;
  };
}
const ci = /* @__PURE__ */ Rr(), li = /* @__PURE__ */ Rr(!0);
function Rr(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (et(i) && Y(i) && !Y(r))
      return !1;
    if (!e && (!hn(r) && !et(r) && (i = R(i), r = R(r)), !I(n) && Y(i) && !Y(r)))
      return i.value = r, !0;
    const l = I(n) && No(o) ? Number(o) < n.length : j(n, o), u = Reflect.set(n, o, r, s);
    return n === R(s) && (l ? Ut(r, i) && Be(n, "set", o, r, i) : Be(n, "add", o, r)), u;
  };
}
function ui(e, t) {
  const n = j(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && Be(e, "delete", t, void 0, o), r;
}
function fi(e, t) {
  const n = Reflect.has(e, t);
  return (!go(t) || !Ar.has(t)) && de(e, "has", t), n;
}
function ai(e) {
  return de(e, "iterate", I(e) ? "length" : lt), Reflect.ownKeys(e);
}
const jr = {
  get: ni,
  set: ci,
  deleteProperty: ui,
  has: fi,
  ownKeys: ai
}, Mr = {
  get: ri,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && pn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && pn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, di = /* @__PURE__ */ Q({}, jr, {
  get: oi,
  set: li
}), pi = /* @__PURE__ */ Q({}, Mr, {
  get: si
}), yo = (e) => e, wn = (e) => Reflect.getPrototypeOf(e);
function Zt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = R(e), s = R(t);
  n || (t !== s && de(r, "get", t), de(r, "get", s));
  const { has: i } = wn(r), l = o ? yo : n ? wo : kt;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function Gt(e, t = !1) {
  const n = this.__v_raw, o = R(n), r = R(e);
  return t || (e !== r && de(o, "has", e), de(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function en(e, t = !1) {
  return e = e.__v_raw, !t && de(R(e), "iterate", lt), Reflect.get(e, "size", e);
}
function qo(e) {
  e = R(e);
  const t = R(this);
  return wn(t).has.call(t, e) || (t.add(e), Be(t, "add", e, e)), this;
}
function zo(e, t) {
  t = R(t);
  const n = R(this), { has: o, get: r } = wn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Sr(n, o, e) : (e = R(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? Ut(t, i) && Be(n, "set", e, t, i) : Be(n, "add", e, t), this;
}
function Jo(e) {
  const t = R(this), { has: n, get: o } = wn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Sr(t, n, e) : (e = R(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && Be(t, "delete", e, void 0, s), i;
}
function Yo() {
  const e = R(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Dt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Be(e, "clear", void 0, void 0, n), o;
}
function tn(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, l = R(i), u = t ? yo : e ? wo : kt;
    return !e && de(l, "iterate", lt), i.forEach((d, h) => o.call(r, u(d), u(h), s));
  };
}
function nn(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = R(r), i = Dt(s), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, d = r[e](...o), h = n ? yo : t ? wo : kt;
    return !t && de(s, "iterate", u ? Qn : lt), {
      next() {
        const { value: a, done: m } = d.next();
        return m ? { value: a, done: m } : {
          value: l ? [h(a[0]), h(a[1])] : h(a),
          done: m
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function qe(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${yn(e)} operation ${n}failed: target is readonly.`, R(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function hi() {
  const e = {
    get(s) {
      return Zt(this, s);
    },
    get size() {
      return en(this);
    },
    has: Gt,
    add: qo,
    set: zo,
    delete: Jo,
    clear: Yo,
    forEach: tn(!1, !1)
  }, t = {
    get(s) {
      return Zt(this, s, !1, !0);
    },
    get size() {
      return en(this);
    },
    has: Gt,
    add: qo,
    set: zo,
    delete: Jo,
    clear: Yo,
    forEach: tn(!1, !0)
  }, n = {
    get(s) {
      return Zt(this, s, !0);
    },
    get size() {
      return en(this, !0);
    },
    has(s) {
      return Gt.call(this, s, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: tn(!0, !1)
  }, o = {
    get(s) {
      return Zt(this, s, !0, !0);
    },
    get size() {
      return en(this, !0);
    },
    has(s) {
      return Gt.call(this, s, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: tn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = nn(s, !1, !1), n[s] = nn(s, !0, !1), t[s] = nn(s, !1, !0), o[s] = nn(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [_i, mi, gi, Ei] = /* @__PURE__ */ hi();
function Dn(e, t) {
  const n = t ? e ? Ei : gi : e ? mi : _i;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(j(n, r) && r in o ? n : o, r, s);
}
const vi = {
  get: /* @__PURE__ */ Dn(!1, !1)
}, Ni = {
  get: /* @__PURE__ */ Dn(!1, !0)
}, bi = {
  get: /* @__PURE__ */ Dn(!0, !1)
}, yi = {
  get: /* @__PURE__ */ Dn(!0, !0)
};
function Sr(e, t, n) {
  const o = R(n);
  if (o !== n && t.call(e, o)) {
    const r = vo(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Hr = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap();
function Oi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function wi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Oi(vo(e));
}
function Oo(e) {
  return et(e) ? e : xn(e, !1, jr, vi, Hr);
}
function Di(e) {
  return xn(e, !1, di, Ni, Lr);
}
function kr(e) {
  return xn(e, !0, Mr, bi, Ur);
}
function bt(e) {
  return xn(e, !0, pi, yi, Br);
}
function xn(e, t, n, o, r) {
  if (!q(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = wi(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? o : n);
  return r.set(e, l), l;
}
function ut(e) {
  return et(e) ? ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
function et(e) {
  return !!(e && e.__v_isReadonly);
}
function hn(e) {
  return !!(e && e.__v_isShallow);
}
function _n(e) {
  return ut(e) || et(e);
}
function R(e) {
  const t = e && e.__v_raw;
  return t ? R(t) : e;
}
function Kr(e) {
  return dn(e, "__v_skip", !0), e;
}
const kt = (e) => q(e) ? Oo(e) : e, wo = (e) => q(e) ? kr(e) : e;
function Wr(e) {
  Xe && ue && (e = R(e), process.env.NODE_ENV !== "production" ? Xn(e.dep || (e.dep = Bt()), {
    target: e,
    type: "get",
    key: "value"
  }) : Xn(e.dep || (e.dep = Bt())));
}
function qr(e, t) {
  e = R(e), e.dep && (process.env.NODE_ENV !== "production" ? Nt(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Nt(e.dep));
}
function Y(e) {
  return !!(e && e.__v_isRef === !0);
}
function yt(e) {
  return zr(e, !1);
}
function Mn(e) {
  return zr(e, !0);
}
function zr(e, t) {
  return Y(e) ? e : new xi(e, t);
}
class xi {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : R(t), this._value = n ? t : kt(t);
  }
  get value() {
    return Wr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || hn(t) || et(t);
    t = n ? t : R(t), Ut(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : kt(t), qr(this, t));
  }
}
function Vt(e) {
  return Y(e) ? e.value : e;
}
const Vi = {
  get: (e, t, n) => Vt(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Y(r) && !Y(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Jr(e) {
  return ut(e) ? e : new Proxy(e, Vi);
}
function Ti(e) {
  process.env.NODE_ENV !== "production" && !_n(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const t = I(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Pi(e, n);
  return t;
}
class Ci {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function Pi(e, t, n) {
  const o = e[t];
  return Y(o) ? o : new Ci(e, t, n);
}
var Yr;
class Ii {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Yr] = !1, this._dirty = !0, this.effect = new bo(t, () => {
      this._dirty || (this._dirty = !0, qr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = R(this);
    return Wr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Yr = "__v_isReadonly";
function $i(e, t, n = !1) {
  let o, r;
  const s = F(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : oe) : (o = e.get, r = e.set);
  const i = new Ii(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const ft = [];
function rn(e) {
  ft.push(e);
}
function sn() {
  ft.pop();
}
function y(e, ...t) {
  _t();
  const n = ft.length ? ft[ft.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Fi();
  if (o)
    Le(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${Fn(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...Ai(r)), console.warn(...s);
  }
  mt();
}
function Fi() {
  let e = ft[ft.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Ai(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ri(n));
  }), t;
}
function Ri({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Fn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...ji(e.props), s] : [r + s];
}
function ji(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Qr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Qr(e, t, n) {
  return ee(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Y(t) ? (t = Qr(e, R(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : F(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = R(t), n ? t : [`${e}=`, t]);
}
const Do = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Le(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Vn(s, t, n);
  }
  return r;
}
function Ve(e, t, n, o) {
  if (F(e)) {
    const s = Le(e, t, n, o);
    return s && Eo(s) && s.catch((i) => {
      Vn(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(Ve(e[s], t, n, o));
  return r;
}
function Vn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? Do[n] : n;
    for (; s; ) {
      const d = s.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](e, i, l) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Le(u, null, 10, [e, i, l]);
      return;
    }
  }
  Mi(e, n, r, o);
}
function Mi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Do[t];
    if (n && rn(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && sn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Kt = !1, Zn = !1;
const ie = [];
let Fe = 0;
const xt = [];
let $e = null, ze = 0;
const Xr = /* @__PURE__ */ Promise.resolve();
let xo = null;
const Si = 100;
function Zr(e) {
  const t = xo || Xr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Hi(e) {
  let t = Fe + 1, n = ie.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Wt(ie[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Tn(e) {
  (!ie.length || !ie.includes(e, Kt && e.allowRecurse ? Fe + 1 : Fe)) && (e.id == null ? ie.push(e) : ie.splice(Hi(e.id), 0, e), Gr());
}
function Gr() {
  !Kt && !Zn && (Zn = !0, xo = Xr.then(ns));
}
function Li(e) {
  const t = ie.indexOf(e);
  t > Fe && ie.splice(t, 1);
}
function es(e) {
  I(e) ? xt.push(...e) : (!$e || !$e.includes(e, e.allowRecurse ? ze + 1 : ze)) && xt.push(e), Gr();
}
function Qo(e, t = Kt ? Fe + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < ie.length; t++) {
    const n = ie[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Vo(e, n))
        continue;
      ie.splice(t, 1), t--, n();
    }
  }
}
function ts(e) {
  if (xt.length) {
    const t = [...new Set(xt)];
    if (xt.length = 0, $e) {
      $e.push(...t);
      return;
    }
    for ($e = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), $e.sort((n, o) => Wt(n) - Wt(o)), ze = 0; ze < $e.length; ze++)
      process.env.NODE_ENV !== "production" && Vo(e, $e[ze]) || $e[ze]();
    $e = null, ze = 0;
  }
}
const Wt = (e) => e.id == null ? 1 / 0 : e.id, Ui = (e, t) => {
  const n = Wt(e) - Wt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ns(e) {
  Zn = !1, Kt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ie.sort(Ui);
  const t = process.env.NODE_ENV !== "production" ? (n) => Vo(e, n) : oe;
  try {
    for (Fe = 0; Fe < ie.length; Fe++) {
      const n = ie[Fe];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Le(n, null, 14);
      }
    }
  } finally {
    Fe = 0, ie.length = 0, ts(e), Kt = !1, xo = null, (ie.length || xt.length) && ns(e);
  }
}
function Vo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Si) {
      const o = t.ownerInstance, r = o && Is(o.type);
      return y(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let at = !1;
const vt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Pr().__VUE_HMR_RUNTIME__ = {
  createRecord: Sn(os),
  rerender: Sn(Ki),
  reload: Sn(Wi)
});
const ht = /* @__PURE__ */ new Map();
function Bi(e) {
  const t = e.type.__hmrId;
  let n = ht.get(t);
  n || (os(t, e.type), n = ht.get(t)), n.instances.add(e);
}
function ki(e) {
  ht.get(e.type.__hmrId).instances.delete(e);
}
function os(e, t) {
  return ht.has(e) ? !1 : (ht.set(e, {
    initialDef: Ht(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ht(e) {
  return $s(e) ? e.__vccOpts : e;
}
function Ki(e, t) {
  const n = ht.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Ht(o.type).render = t), o.renderCache = [], at = !0, o.update(), at = !1;
  }));
}
function Wi(e, t) {
  const n = ht.get(e);
  if (!n)
    return;
  t = Ht(t), Xo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Ht(r.type);
    vt.has(s) || (s !== n.initialDef && Xo(s, t), vt.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (vt.add(s), r.ceReload(t.styles), vt.delete(s)) : r.parent ? (Tn(r.parent.update), r.parent.type.__asyncLoader && r.parent.ceReload && r.parent.ceReload(t.styles)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  es(() => {
    for (const r of o)
      vt.delete(Ht(r.type));
  });
}
function Xo(e, t) {
  Q(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Sn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Ae, St = [], Gn = !1;
function Yt(e, ...t) {
  Ae ? Ae.emit(e, ...t) : Gn || St.push({ event: e, args: t });
}
function rs(e, t) {
  var n, o;
  Ae = e, Ae ? (Ae.enabled = !0, St.forEach(({ event: r, args: s }) => Ae.emit(r, ...s)), St = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    rs(s, t);
  }), setTimeout(() => {
    Ae || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Gn = !0, St = []);
  }, 3e3)) : (Gn = !0, St = []);
}
function qi(e, t) {
  Yt("app:init", e, t, {
    Fragment: ye,
    Text: In,
    Comment: Te,
    Static: un
  });
}
function zi(e) {
  Yt("app:unmount", e);
}
const Ji = /* @__PURE__ */ To("component:added"), ss = /* @__PURE__ */ To("component:updated"), Yi = /* @__PURE__ */ To("component:removed"), Qi = (e) => {
  Ae && typeof Ae.cleanupBuffer == "function" && !Ae.cleanupBuffer(e) && Yi(e);
};
function To(e) {
  return (t) => {
    Yt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Xi = /* @__PURE__ */ is("perf:start"), Zi = /* @__PURE__ */ is("perf:end");
function is(e) {
  return (t, n, o) => {
    Yt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Gi(e, t, n) {
  Yt("component:emit", e.appContext.app, e, t, n);
}
function ec(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || U;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: h, propsOptions: [a] } = e;
    if (h)
      if (!(t in h))
        (!a || !(rt(t) in a)) && y(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${rt(t)}" prop.`);
      else {
        const m = h[t];
        F(m) && (m(...n) || y(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: a, trim: m } = o[h] || U;
    m && (r = n.map((w) => w.trim())), a && (r = n.map(zn));
  }
  if (process.env.NODE_ENV !== "production" && Gi(e, t, r), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[rt(h)] && y(`Event "${h}" is emitted in component ${Fn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${xe(t)}" instead of "${t}".`);
  }
  let l, u = o[l = rt(t)] || o[l = rt(Ze(t))];
  !u && s && (u = o[l = rt(xe(t))]), u && Ve(u, e, 6, r);
  const d = o[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ve(d, e, 6, r);
  }
}
function cs(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, l = !1;
  if (!F(e)) {
    const u = (d) => {
      const h = cs(d, t, !0);
      h && (l = !0, Q(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !l ? (q(e) && o.set(e, null), null) : (I(s) ? s.forEach((u) => i[u] = null) : Q(i, s), q(e) && o.set(e, i), i);
}
function Cn(e, t) {
  return !e || !Jt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, xe(t)) || j(e, t));
}
let we = null, ls = null;
function mn(e) {
  const t = we;
  return we = e, ls = e && e.type.__scopeId || null, t;
}
function tc(e, t = we, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && lr(-1);
    const s = mn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      mn(s), o._d && lr(1);
    }
    return process.env.NODE_ENV !== "production" && ss(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let eo = !1;
function gn() {
  eo = !0;
}
function Hn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: l, attrs: u, emit: d, render: h, renderCache: a, data: m, setupState: w, ctx: T, inheritAttrs: C } = e;
  let L, S;
  const H = mn(e);
  process.env.NODE_ENV !== "production" && (eo = !1);
  try {
    if (n.shapeFlag & 4) {
      const K = r || o;
      L = Oe(h.call(K, K, a, s, w, m, T)), S = u;
    } else {
      const K = t;
      process.env.NODE_ENV !== "production" && u === s && gn(), L = Oe(K.length > 1 ? K(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return gn(), u;
        },
        slots: l,
        emit: d
      } : { attrs: u, slots: l, emit: d }) : K(s, null)), S = t.props ? u : oc(u);
    }
  } catch (K) {
    Lt.length = 0, Vn(K, e, 1), L = Ue(Te);
  }
  let B = L, te;
  if (process.env.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && ([B, te] = nc(L)), S && C !== !1) {
    const K = Object.keys(S), { shapeFlag: pe } = B;
    if (K.length) {
      if (pe & 7)
        i && K.some(an) && (S = rc(S, i)), B = tt(B, S);
      else if (process.env.NODE_ENV !== "production" && !eo && B.type !== Te) {
        const Re = Object.keys(u), ge = [], se = [];
        for (let Ee = 0, he = Re.length; Ee < he; Ee++) {
          const G = Re[Ee];
          Jt(G) ? an(G) || ge.push(G[2].toLowerCase() + G.slice(3)) : se.push(G);
        }
        se.length && y(`Extraneous non-props attributes (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), ge.length && y(`Extraneous non-emits event listeners (${ge.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Zo(B) && y("Runtime directive used on component with non-element root node. The directives will not function as intended."), B = tt(B), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Zo(B) && y("Component inside <Transition> renders non-element root node that cannot be animated."), B.transition = n.transition), process.env.NODE_ENV !== "production" && te ? te(B) : L = B, mn(H), L;
}
const nc = (e) => {
  const t = e.children, n = e.dynamicChildren, o = us(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Oe(o), i];
};
function us(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Ao(o)) {
      if (o.type !== Te || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const oc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Jt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, rc = (e, t) => {
  const n = {};
  for (const o in e)
    (!an(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Zo = (e) => e.shapeFlag & 7 || e.type === Te;
function sc(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: u } = t, d = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && at || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Go(o, i, d) : !!i;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let a = 0; a < h.length; a++) {
        const m = h[a];
        if (i[m] !== o[m] && !Cn(d, m))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Go(o, i, d) : !0 : !!i;
  return !1;
}
function Go(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !Cn(n, s))
      return !0;
  }
  return !1;
}
function ic({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const cc = (e) => e.__isSuspense;
function lc(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : es(e);
}
function uc(e, t) {
  if (!re)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = re.provides;
    const o = re.parent && re.parent.provides;
    o === n && (n = re.provides = Object.create(o)), n[e] = t;
  }
}
function Ln(e, t, n = !1) {
  const o = re || we;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && F(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const er = {};
function dt(e, t, n) {
  return process.env.NODE_ENV !== "production" && !F(t) && y("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), fs(e, t, n);
}
function fs(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = U) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (H) => {
    y("Invalid watch source: ", H, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = re;
  let d, h = !1, a = !1;
  if (Y(e) ? (d = () => e.value, h = hn(e)) : ut(e) ? (d = () => e, o = !0) : I(e) ? (a = !0, h = e.some((H) => ut(H) || hn(H)), d = () => e.map((H) => {
    if (Y(H))
      return H.value;
    if (ut(H))
      return Ot(H);
    if (F(H))
      return Le(H, u, 2);
    process.env.NODE_ENV !== "production" && l(H);
  })) : F(e) ? t ? d = () => Le(e, u, 2) : d = () => {
    if (!(u && u.isUnmounted))
      return m && m(), Ve(e, u, 3, [w]);
  } : (d = oe, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const H = d;
    d = () => Ot(H());
  }
  let m, w = (H) => {
    m = S.onStop = () => {
      Le(H, u, 4);
    };
  };
  if (zt)
    return w = oe, t ? n && Ve(t, u, 3, [
      d(),
      a ? [] : void 0,
      w
    ]) : d(), oe;
  let T = a ? [] : er;
  const C = () => {
    if (!!S.active)
      if (t) {
        const H = S.run();
        (o || h || (a ? H.some((B, te) => Ut(B, T[te])) : Ut(H, T))) && (m && m(), Ve(t, u, 3, [
          H,
          T === er ? void 0 : T,
          w
        ]), T = H);
      } else
        S.run();
  };
  C.allowRecurse = !!t;
  let L;
  r === "sync" ? L = C : r === "post" ? L = () => ae(C, u && u.suspense) : (C.pre = !0, u && (C.id = u.uid), L = () => Tn(C));
  const S = new bo(d, L);
  return process.env.NODE_ENV !== "production" && (S.onTrack = s, S.onTrigger = i), t ? n ? C() : T = S.run() : r === "post" ? ae(S.run.bind(S), u && u.suspense) : S.run(), () => {
    S.stop(), u && u.scope && mo(u.scope.effects, S);
  };
}
function fc(e, t, n) {
  const o = this.proxy, r = ee(e) ? e.includes(".") ? as(o, e) : () => o[e] : e.bind(o, o);
  let s;
  F(t) ? s = t : (s = t.handler, n = t);
  const i = re;
  Ct(this);
  const l = fs(r, s.bind(o), n);
  return i ? Ct(i) : pt(), l;
}
function as(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Ot(e, t) {
  if (!q(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Y(e))
    Ot(e.value, t);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      Ot(e[n], t);
  else if (ks(e) || Dt(e))
    e.forEach((n) => {
      Ot(n, t);
    });
  else if (Ws(e))
    for (const n in e)
      Ot(e[n], t);
  return e;
}
function Co(e) {
  return F(e) ? { setup: e, name: e.name } : e;
}
const cn = (e) => !!e.type.__asyncLoader, Po = (e) => e.type.__isKeepAlive;
function ac(e, t) {
  ds(e, "a", t);
}
function dc(e, t) {
  ds(e, "da", t);
}
function ds(e, t, n = re) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Pn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Po(r.parent.vnode) && pc(o, t, n, r), r = r.parent;
  }
}
function pc(e, t, n, o) {
  const r = Pn(t, e, o, !0);
  ps(() => {
    mo(o[t], r);
  }, n);
}
function Pn(e, t, n = re, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      _t(), Ct(n);
      const l = Ve(t, n, e, i);
      return pt(), mt(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = rt(Do[e].replace(/ hook$/, ""));
    y(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const ke = (e) => (t, n = re) => (!zt || e === "sp") && Pn(e, (...o) => t(...o), n), hc = ke("bm"), _c = ke("m"), mc = ke("bu"), gc = ke("u"), Ec = ke("bum"), ps = ke("um"), vc = ke("sp"), Nc = ke("rtg"), bc = ke("rtc");
function yc(e, t = re) {
  Pn("ec", e, t);
}
function hs(e) {
  qs(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function nt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    s && (l.oldValue = s[i].value);
    let u = l.dir[o];
    u && (_t(), Ve(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), mt());
  }
}
const Oc = Symbol();
function wc(e, t, n, o) {
  let r;
  const s = n && n[o];
  if (I(e) || ee(e)) {
    r = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && y(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (q(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, l) => t(i, l, void 0, s && s[l]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let l = 0, u = i.length; l < u; l++) {
        const d = i[l];
        r[l] = t(e[d], d, l, s && s[l]);
      }
    }
  else
    r = [];
  return n && (n[o] = r), r;
}
const to = (e) => e ? Cs(e) ? jo(e) || e.proxy : to(e.parent) : null, Tt = /* @__PURE__ */ Q(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? bt(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? bt(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? bt(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? bt(e.refs) : e.refs,
  $parent: (e) => to(e.parent),
  $root: (e) => to(e.root),
  $emit: (e) => e.emit,
  $options: (e) => $o(e),
  $forceUpdate: (e) => e.f || (e.f = () => Tn(e.update)),
  $nextTick: (e) => e.n || (e.n = Zr.bind(e.proxy)),
  $watch: (e) => fc.bind(e)
}), Io = (e) => e === "_" || e === "$", _s = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: l, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (process.env.NODE_ENV !== "production" && o !== U && o.__isScriptSetup && j(o, t))
      return o[t];
    let d;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (o !== U && j(o, t))
          return i[t] = 1, o[t];
        if (r !== U && j(r, t))
          return i[t] = 2, r[t];
        if ((d = e.propsOptions[0]) && j(d, t))
          return i[t] = 3, s[t];
        if (n !== U && j(n, t))
          return i[t] = 4, n[t];
        no && (i[t] = 0);
      }
    }
    const h = Tt[t];
    let a, m;
    if (h)
      return t === "$attrs" && (de(e, "get", t), process.env.NODE_ENV !== "production" && gn()), h(e);
    if ((a = l.__cssModules) && (a = a[t]))
      return a;
    if (n !== U && j(n, t))
      return i[t] = 4, n[t];
    if (m = u.config.globalProperties, j(m, t))
      return m[t];
    process.env.NODE_ENV !== "production" && we && (!ee(t) || t.indexOf("__v") !== 0) && (r !== U && Io(t[0]) && j(r, t) ? y(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === we && y(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return r !== U && j(r, t) ? (r[t] = n, !0) : o !== U && j(o, t) ? (o[t] = n, !0) : j(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let l;
    return !!n[i] || e !== U && j(e, i) || t !== U && j(t, i) || (l = s[0]) && j(l, i) || j(o, i) || j(Tt, i) || j(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (_s.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Dc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Tt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Tt[n](e),
      set: oe
    });
  }), t;
}
function xc(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: oe
    });
  });
}
function Vc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(R(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Io(o[0])) {
        y(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: oe
      });
    }
  });
}
function Tc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let no = !0;
function Cc(e) {
  const t = $o(e), n = e.proxy, o = e.ctx;
  no = !1, t.beforeCreate && tr(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: s,
    methods: i,
    watch: l,
    provide: u,
    inject: d,
    created: h,
    beforeMount: a,
    mounted: m,
    beforeUpdate: w,
    updated: T,
    activated: C,
    deactivated: L,
    beforeDestroy: S,
    beforeUnmount: H,
    destroyed: B,
    unmounted: te,
    render: K,
    renderTracked: pe,
    renderTriggered: Re,
    errorCaptured: ge,
    serverPrefetch: se,
    expose: Ee,
    inheritAttrs: he,
    components: G,
    directives: Ke,
    filters: We
  } = t, J = process.env.NODE_ENV !== "production" ? Tc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [P] = e.propsOptions;
    if (P)
      for (const A in P)
        J("Props", A);
  }
  if (d && Pc(d, o, J, e.appContext.config.unwrapInjectedRef), i)
    for (const P in i) {
      const A = i[P];
      F(A) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, P, {
        value: A.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[P] = A.bind(n), process.env.NODE_ENV !== "production" && J("Methods", P)) : process.env.NODE_ENV !== "production" && y(`Method "${P}" has type "${typeof A}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !F(r) && y("The data option must be a function. Plain object usage is no longer supported.");
    const P = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && Eo(P) && y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !q(P))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = Oo(P), process.env.NODE_ENV !== "production")
      for (const A in P)
        J("Data", A), Io(A[0]) || Object.defineProperty(o, A, {
          configurable: !0,
          enumerable: !0,
          get: () => P[A],
          set: oe
        });
  }
  if (no = !0, s)
    for (const P in s) {
      const A = s[P], X = F(A) ? A.bind(n, n) : F(A.get) ? A.get.bind(n, n) : oe;
      process.env.NODE_ENV !== "production" && X === oe && y(`Computed property "${P}" has no getter.`);
      const _e = !F(A) && F(A.set) ? A.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(`Write operation failed: computed property "${P}" is readonly.`);
      } : oe, Ce = An({
        get: X,
        set: _e
      });
      Object.defineProperty(o, P, {
        enumerable: !0,
        configurable: !0,
        get: () => Ce.value,
        set: (ve) => Ce.value = ve
      }), process.env.NODE_ENV !== "production" && J("Computed", P);
    }
  if (l)
    for (const P in l)
      ms(l[P], o, n, P);
  if (u) {
    const P = F(u) ? u.call(n) : u;
    Reflect.ownKeys(P).forEach((A) => {
      uc(A, P[A]);
    });
  }
  h && tr(h, e, "c");
  function z(P, A) {
    I(A) ? A.forEach((X) => P(X.bind(n))) : A && P(A.bind(n));
  }
  if (z(hc, a), z(_c, m), z(mc, w), z(gc, T), z(ac, C), z(dc, L), z(yc, ge), z(bc, pe), z(Nc, Re), z(Ec, H), z(ps, te), z(vc, se), I(Ee))
    if (Ee.length) {
      const P = e.exposed || (e.exposed = {});
      Ee.forEach((A) => {
        Object.defineProperty(P, A, {
          get: () => n[A],
          set: (X) => n[A] = X
        });
      });
    } else
      e.exposed || (e.exposed = {});
  K && e.render === oe && (e.render = K), he != null && (e.inheritAttrs = he), G && (e.components = G), Ke && (e.directives = Ke);
}
function Pc(e, t, n = oe, o = !1) {
  I(e) && (e = oo(e));
  for (const r in e) {
    const s = e[r];
    let i;
    q(s) ? "default" in s ? i = Ln(s.from || r, s.default, !0) : i = Ln(s.from || r) : i = Ln(s), Y(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : (process.env.NODE_ENV !== "production" && y(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function tr(e, t, n) {
  Ve(I(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ms(e, t, n, o) {
  const r = o.includes(".") ? as(n, o) : () => n[o];
  if (ee(e)) {
    const s = t[e];
    F(s) ? dt(r, s) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, s);
  } else if (F(e))
    dt(r, e.bind(n));
  else if (q(e))
    if (I(e))
      e.forEach((s) => ms(s, t, n, o));
    else {
      const s = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(s) ? dt(r, s, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function $o(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l = s.get(t);
  let u;
  return l ? u = l : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach((d) => En(u, d, i, !0)), En(u, t, i)), q(t) && s.set(t, u), u;
}
function En(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && En(e, s, n, !0), r && r.forEach((i) => En(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = Ic[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ic = {
  data: nr,
  props: st,
  emits: st,
  methods: st,
  computed: st,
  beforeCreate: le,
  created: le,
  beforeMount: le,
  mounted: le,
  beforeUpdate: le,
  updated: le,
  beforeDestroy: le,
  beforeUnmount: le,
  destroyed: le,
  unmounted: le,
  activated: le,
  deactivated: le,
  errorCaptured: le,
  serverPrefetch: le,
  components: st,
  directives: st,
  watch: Fc,
  provide: nr,
  inject: $c
};
function nr(e, t) {
  return t ? e ? function() {
    return Q(F(e) ? e.call(this, this) : e, F(t) ? t.call(this, this) : t);
  } : t : e;
}
function $c(e, t) {
  return st(oo(e), oo(t));
}
function oo(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function st(e, t) {
  return e ? Q(Q(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Fc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Q(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = le(e[o], t[o]);
  return n;
}
function Ac(e, t, n, o = !1) {
  const r = {}, s = {};
  dn(s, $n, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), gs(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && vs(t || {}, r, e), n ? e.props = o ? r : Di(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Rc(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function jc(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, l = R(r), [u] = e.propsOptions;
  let d = !1;
  if (!(process.env.NODE_ENV !== "production" && Rc(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let a = 0; a < h.length; a++) {
        let m = h[a];
        if (Cn(e.emitsOptions, m))
          continue;
        const w = t[m];
        if (u)
          if (j(s, m))
            w !== s[m] && (s[m] = w, d = !0);
          else {
            const T = Ze(m);
            r[T] = ro(u, l, T, w, e, !1);
          }
        else
          w !== s[m] && (s[m] = w, d = !0);
      }
    }
  } else {
    gs(e, t, r, s) && (d = !0);
    let h;
    for (const a in l)
      (!t || !j(t, a) && ((h = xe(a)) === a || !j(t, h))) && (u ? n && (n[a] !== void 0 || n[h] !== void 0) && (r[a] = ro(u, l, a, void 0, e, !0)) : delete r[a]);
    if (s !== l)
      for (const a in s)
        (!t || !j(t, a) && !0) && (delete s[a], d = !0);
  }
  d && Be(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && vs(t || {}, r, e);
}
function gs(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (on(u))
        continue;
      const d = t[u];
      let h;
      r && j(r, h = Ze(u)) ? !s || !s.includes(h) ? n[h] = d : (l || (l = {}))[h] = d : Cn(e.emitsOptions, u) || (!(u in o) || d !== o[u]) && (o[u] = d, i = !0);
    }
  if (s) {
    const u = R(n), d = l || U;
    for (let h = 0; h < s.length; h++) {
      const a = s[h];
      n[a] = ro(r, u, a, d[a], e, !j(d, a));
    }
  }
  return i;
}
function ro(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const l = j(i, "default");
    if (l && o === void 0) {
      const u = i.default;
      if (i.type !== Function && F(u)) {
        const { propsDefaults: d } = r;
        n in d ? o = d[n] : (Ct(r), o = d[n] = u.call(null, t), pt());
      } else
        o = u;
    }
    i[0] && (s && !l ? o = !1 : i[1] && (o === "" || o === xe(n)) && (o = !0));
  }
  return o;
}
function Es(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, l = [];
  let u = !1;
  if (!F(e)) {
    const h = (a) => {
      u = !0;
      const [m, w] = Es(a, t, !0);
      Q(i, m), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!s && !u)
    return q(e) && o.set(e, wt), wt;
  if (I(s))
    for (let h = 0; h < s.length; h++) {
      process.env.NODE_ENV !== "production" && !ee(s[h]) && y("props must be strings when using array syntax.", s[h]);
      const a = Ze(s[h]);
      or(a) && (i[a] = U);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !q(s) && y("invalid props options", s);
    for (const h in s) {
      const a = Ze(h);
      if (or(a)) {
        const m = s[h], w = i[a] = I(m) || F(m) ? { type: m } : m;
        if (w) {
          const T = sr(Boolean, w.type), C = sr(String, w.type);
          w[0] = T > -1, w[1] = C < 0 || T < C, (T > -1 || j(w, "default")) && l.push(a);
        }
      }
    }
  }
  const d = [i, l];
  return q(e) && o.set(e, d), d;
}
function or(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function so(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function rr(e, t) {
  return so(e) === so(t);
}
function sr(e, t) {
  return I(t) ? t.findIndex((n) => rr(n, e)) : F(t) && rr(t, e) ? 0 : -1;
}
function vs(e, t, n) {
  const o = R(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && Mc(s, o[s], i, !j(e, s) && !j(e, xe(s)));
  }
}
function Mc(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let l = !1;
      const u = I(r) ? r : [r], d = [];
      for (let h = 0; h < u.length && !l; h++) {
        const { valid: a, expectedType: m } = Hc(t, u[h]);
        d.push(m || ""), l = a;
      }
      if (!l) {
        y(Lc(e, t, d));
        return;
      }
    }
    i && !i(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Sc = /* @__PURE__ */ Pt("String,Number,Boolean,Function,Symbol,BigInt");
function Hc(e, t) {
  let n;
  const o = so(t);
  if (Sc(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = q(e) : o === "Array" ? n = I(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Lc(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(yn).join(" | ")}`;
  const r = n[0], s = vo(t), i = ir(t, r), l = ir(t, s);
  return n.length === 1 && cr(r) && !Uc(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, cr(s) && (o += `with value ${l}.`), o;
}
function ir(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function cr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Uc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ns = (e) => e[0] === "_" || e === "$stable", Fo = (e) => I(e) ? e.map(Oe) : [Oe(e)], Bc = (e, t, n) => {
  if (t._n)
    return t;
  const o = tc((...r) => (process.env.NODE_ENV !== "production" && re && y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Fo(t(...r))), n);
  return o._c = !1, o;
}, bs = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Ns(r))
      continue;
    const s = e[r];
    if (F(s))
      t[r] = Bc(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && y(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = Fo(s);
      t[r] = () => i;
    }
  }
}, ys = (e, t) => {
  process.env.NODE_ENV !== "production" && !Po(e.vnode) && y("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Fo(t);
  e.slots.default = () => n;
}, kc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = R(t), dn(t, "_", n)) : bs(t, e.slots = {});
  } else
    e.slots = {}, t && ys(e, t);
  dn(e.slots, $n, 1);
}, Kc = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = U;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && at ? Q(r, t) : n && l === 1 ? s = !1 : (Q(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, bs(t, r)), i = t;
  } else
    t && (ys(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !Ns(l) && !(l in i) && delete r[l];
};
function Os() {
  return {
    app: null,
    config: {
      isNativeTag: Cr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Wc = 0;
function qc(e, t) {
  return function(o, r = null) {
    F(o) || (o = Object.assign({}, o)), r != null && !q(r) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const s = Os(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const u = s.app = {
      _uid: Wc++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: ar,
      get config() {
        return s.config;
      },
      set config(d) {
        process.env.NODE_ENV !== "production" && y("app.config cannot be replaced. Modify individual options instead.");
      },
      use(d, ...h) {
        return i.has(d) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : d && F(d.install) ? (i.add(d), d.install(u, ...h)) : F(d) ? (i.add(d), d(u, ...h)) : process.env.NODE_ENV !== "production" && y('A plugin must either be a function or an object with an "install" function.'), u;
      },
      mixin(d) {
        return s.mixins.includes(d) ? process.env.NODE_ENV !== "production" && y("Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")) : s.mixins.push(d), u;
      },
      component(d, h) {
        return process.env.NODE_ENV !== "production" && co(d, s.config), h ? (process.env.NODE_ENV !== "production" && s.components[d] && y(`Component "${d}" has already been registered in target app.`), s.components[d] = h, u) : s.components[d];
      },
      directive(d, h) {
        return process.env.NODE_ENV !== "production" && hs(d), h ? (process.env.NODE_ENV !== "production" && s.directives[d] && y(`Directive "${d}" has already been registered in target app.`), s.directives[d] = h, u) : s.directives[d];
      },
      mount(d, h, a) {
        if (l)
          process.env.NODE_ENV !== "production" && y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && d.__vue_app__ && y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const m = Ue(o, r);
          return m.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(tt(m), d, a);
          }), h && t ? t(m, d) : e(m, d, a), l = !0, u._container = d, d.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = m.component, qi(u, ar)), jo(m.component) || m.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, zi(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(d, h) {
        return process.env.NODE_ENV !== "production" && d in s.provides && y(`App already provides property with key "${String(d)}". It will be overwritten with the new value.`), s.provides[d] = h, u;
      }
    };
    return u;
  };
}
function io(e, t, n, o, r = !1) {
  if (I(e)) {
    e.forEach((m, w) => io(m, t && (I(t) ? t[w] : t), n, o, r));
    return;
  }
  if (cn(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? jo(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: l, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const d = t && t.r, h = l.refs === U ? l.refs = {} : l.refs, a = l.setupState;
  if (d != null && d !== u && (ee(d) ? (h[d] = null, j(a, d) && (a[d] = null)) : Y(d) && (d.value = null)), F(u))
    Le(u, l, 12, [i, h]);
  else {
    const m = ee(u), w = Y(u);
    if (m || w) {
      const T = () => {
        if (e.f) {
          const C = m ? j(a, u) ? a[u] : h[u] : u.value;
          r ? I(C) && mo(C, s) : I(C) ? C.includes(s) || C.push(s) : m ? (h[u] = [s], j(a, u) && (a[u] = h[u])) : (u.value = [s], e.k && (h[e.k] = u.value));
        } else
          m ? (h[u] = i, j(a, u) && (a[u] = i)) : w ? (u.value = i, e.k && (h[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (T.id = -1, ae(T, n)) : T();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let At, Ye;
function Me(e, t) {
  e.appContext.config.performance && vn() && Ye.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Xi(e, t, vn() ? Ye.now() : Date.now());
}
function Se(e, t) {
  if (e.appContext.config.performance && vn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ye.mark(o), Ye.measure(`<${Fn(e, e.type)}> ${t}`, n, o), Ye.clearMarks(n), Ye.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Zi(e, t, vn() ? Ye.now() : Date.now());
}
function vn() {
  return At !== void 0 || (typeof window < "u" && window.performance ? (At = !0, Ye = window.performance) : At = !1), At;
}
function zc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const ae = lc;
function Jc(e) {
  return Yc(e);
}
function Yc(e, t) {
  zc();
  const n = Pr();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && rs(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: l, createComment: u, setText: d, setElementText: h, parentNode: a, nextSibling: m, setScopeId: w = oe, insertStaticContent: T } = e, C = (c, f, p, g = null, _ = null, N = null, O = !1, v = null, b = process.env.NODE_ENV !== "production" && at ? !1 : !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !Rt(c, f) && (g = Xt(c), Ne(c, _, N, !0), c = null), f.patchFlag === -2 && (b = !1, f.dynamicChildren = null);
    const { type: E, ref: x, shapeFlag: D } = f;
    switch (E) {
      case In:
        L(c, f, p, g);
        break;
      case Te:
        S(c, f, p, g);
        break;
      case un:
        c == null ? H(f, p, g, O) : process.env.NODE_ENV !== "production" && B(c, f, p, O);
        break;
      case ye:
        Ke(c, f, p, g, _, N, O, v, b);
        break;
      default:
        D & 1 ? pe(c, f, p, g, _, N, O, v, b) : D & 6 ? We(c, f, p, g, _, N, O, v, b) : D & 64 || D & 128 ? E.process(c, f, p, g, _, N, O, v, b, gt) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    x != null && _ && io(x, c && c.ref, N, f || c, !f);
  }, L = (c, f, p, g) => {
    if (c == null)
      o(f.el = l(f.children), p, g);
    else {
      const _ = f.el = c.el;
      f.children !== c.children && d(_, f.children);
    }
  }, S = (c, f, p, g) => {
    c == null ? o(f.el = u(f.children || ""), p, g) : f.el = c.el;
  }, H = (c, f, p, g) => {
    [c.el, c.anchor] = T(c.children, f, p, g, c.el, c.anchor);
  }, B = (c, f, p, g) => {
    if (f.children !== c.children) {
      const _ = m(c.anchor);
      K(c), [f.el, f.anchor] = T(f.children, p, _, g);
    } else
      f.el = c.el, f.anchor = c.anchor;
  }, te = ({ el: c, anchor: f }, p, g) => {
    let _;
    for (; c && c !== f; )
      _ = m(c), o(c, p, g), c = _;
    o(f, p, g);
  }, K = ({ el: c, anchor: f }) => {
    let p;
    for (; c && c !== f; )
      p = m(c), r(c), c = p;
    r(f);
  }, pe = (c, f, p, g, _, N, O, v, b) => {
    O = O || f.type === "svg", c == null ? Re(f, p, g, _, N, O, v, b) : Ee(c, f, _, N, O, v, b);
  }, Re = (c, f, p, g, _, N, O, v) => {
    let b, E;
    const { type: x, props: D, shapeFlag: V, transition: $, dirs: M } = c;
    if (b = c.el = i(c.type, N, D && D.is, D), V & 8 ? h(b, c.children) : V & 16 && se(c.children, b, null, g, _, N && x !== "foreignObject", O, v), M && nt(c, null, g, "created"), D) {
      for (const k in D)
        k !== "value" && !on(k) && s(b, k, null, D[k], N, c.children, g, _, je);
      "value" in D && s(b, "value", null, D.value), (E = D.onVnodeBeforeMount) && Ie(E, g, c);
    }
    ge(b, c, c.scopeId, O, g), process.env.NODE_ENV !== "production" && (Object.defineProperty(b, "__vnode", {
      value: c,
      enumerable: !1
    }), Object.defineProperty(b, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), M && nt(c, null, g, "beforeMount");
    const W = (!_ || _ && !_.pendingBranch) && $ && !$.persisted;
    W && $.beforeEnter(b), o(b, f, p), ((E = D && D.onVnodeMounted) || W || M) && ae(() => {
      E && Ie(E, g, c), W && $.enter(b), M && nt(c, null, g, "mounted");
    }, _);
  }, ge = (c, f, p, g, _) => {
    if (p && w(c, p), g)
      for (let N = 0; N < g.length; N++)
        w(c, g[N]);
    if (_) {
      let N = _.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = us(N.children) || N), f === N) {
        const O = _.vnode;
        ge(c, O, O.scopeId, O.slotScopeIds, _.parent);
      }
    }
  }, se = (c, f, p, g, _, N, O, v, b = 0) => {
    for (let E = b; E < c.length; E++) {
      const x = c[E] = v ? Je(c[E]) : Oe(c[E]);
      C(null, x, f, p, g, _, N, O, v);
    }
  }, Ee = (c, f, p, g, _, N, O) => {
    const v = f.el = c.el;
    let { patchFlag: b, dynamicChildren: E, dirs: x } = f;
    b |= c.patchFlag & 16;
    const D = c.props || U, V = f.props || U;
    let $;
    p && ot(p, !1), ($ = V.onVnodeBeforeUpdate) && Ie($, p, f, c), x && nt(f, c, p, "beforeUpdate"), p && ot(p, !0), process.env.NODE_ENV !== "production" && at && (b = 0, O = !1, E = null);
    const M = _ && f.type !== "foreignObject";
    if (E ? (he(c.dynamicChildren, E, v, p, g, M, N), process.env.NODE_ENV !== "production" && p && p.type.__hmrId && ln(c, f)) : O || X(c, f, v, null, p, g, M, N, !1), b > 0) {
      if (b & 16)
        G(v, f, D, V, p, g, _);
      else if (b & 2 && D.class !== V.class && s(v, "class", null, V.class, _), b & 4 && s(v, "style", D.style, V.style, _), b & 8) {
        const W = f.dynamicProps;
        for (let k = 0; k < W.length; k++) {
          const Z = W[k], be = D[Z], Et = V[Z];
          (Et !== be || Z === "value") && s(v, Z, be, Et, _, c.children, p, g, je);
        }
      }
      b & 1 && c.children !== f.children && h(v, f.children);
    } else
      !O && E == null && G(v, f, D, V, p, g, _);
    (($ = V.onVnodeUpdated) || x) && ae(() => {
      $ && Ie($, p, f, c), x && nt(f, c, p, "updated");
    }, g);
  }, he = (c, f, p, g, _, N, O) => {
    for (let v = 0; v < f.length; v++) {
      const b = c[v], E = f[v], x = b.el && (b.type === ye || !Rt(b, E) || b.shapeFlag & 70) ? a(b.el) : p;
      C(b, E, x, null, g, _, N, O, !0);
    }
  }, G = (c, f, p, g, _, N, O) => {
    if (p !== g) {
      if (p !== U)
        for (const v in p)
          !on(v) && !(v in g) && s(c, v, p[v], null, O, f.children, _, N, je);
      for (const v in g) {
        if (on(v))
          continue;
        const b = g[v], E = p[v];
        b !== E && v !== "value" && s(c, v, E, b, O, f.children, _, N, je);
      }
      "value" in g && s(c, "value", p.value, g.value);
    }
  }, Ke = (c, f, p, g, _, N, O, v, b) => {
    const E = f.el = c ? c.el : l(""), x = f.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: V, slotScopeIds: $ } = f;
    process.env.NODE_ENV !== "production" && (at || D & 2048) && (D = 0, b = !1, V = null), $ && (v = v ? v.concat($) : $), c == null ? (o(E, p, g), o(x, p, g), se(f.children, p, x, _, N, O, v, b)) : D > 0 && D & 64 && V && c.dynamicChildren ? (he(c.dynamicChildren, V, p, _, N, O, v), process.env.NODE_ENV !== "production" && _ && _.type.__hmrId ? ln(c, f) : (f.key != null || _ && f === _.subTree) && ln(c, f, !0)) : X(c, f, p, x, _, N, O, v, b);
  }, We = (c, f, p, g, _, N, O, v, b) => {
    f.slotScopeIds = v, c == null ? f.shapeFlag & 512 ? _.ctx.activate(f, p, g, O, b) : J(f, p, g, _, N, O, b) : z(c, f, b);
  }, J = (c, f, p, g, _, N, O) => {
    const v = c.component = il(c, g, _);
    if (process.env.NODE_ENV !== "production" && v.type.__hmrId && Bi(v), process.env.NODE_ENV !== "production" && (rn(c), Me(v, "mount")), Po(c) && (v.ctx.renderer = gt), process.env.NODE_ENV !== "production" && Me(v, "init"), ll(v), process.env.NODE_ENV !== "production" && Se(v, "init"), v.asyncDep) {
      if (_ && _.registerDep(v, P), !c.el) {
        const b = v.subTree = Ue(Te);
        S(null, b, f, p);
      }
      return;
    }
    P(v, c, f, p, _, N, O), process.env.NODE_ENV !== "production" && (sn(), Se(v, "mount"));
  }, z = (c, f, p) => {
    const g = f.component = c.component;
    if (sc(c, f, p))
      if (g.asyncDep && !g.asyncResolved) {
        process.env.NODE_ENV !== "production" && rn(f), A(g, f, p), process.env.NODE_ENV !== "production" && sn();
        return;
      } else
        g.next = f, Li(g.update), g.update();
    else
      f.el = c.el, g.vnode = f;
  }, P = (c, f, p, g, _, N, O) => {
    const v = () => {
      if (c.isMounted) {
        let { next: x, bu: D, u: V, parent: $, vnode: M } = c, W = x, k;
        process.env.NODE_ENV !== "production" && rn(x || c.vnode), ot(c, !1), x ? (x.el = M.el, A(c, x, O)) : x = M, D && Ft(D), (k = x.props && x.props.onVnodeBeforeUpdate) && Ie(k, $, x, M), ot(c, !0), process.env.NODE_ENV !== "production" && Me(c, "render");
        const Z = Hn(c);
        process.env.NODE_ENV !== "production" && Se(c, "render");
        const be = c.subTree;
        c.subTree = Z, process.env.NODE_ENV !== "production" && Me(c, "patch"), C(
          be,
          Z,
          a(be.el),
          Xt(be),
          c,
          _,
          N
        ), process.env.NODE_ENV !== "production" && Se(c, "patch"), x.el = Z.el, W === null && ic(c, Z.el), V && ae(V, _), (k = x.props && x.props.onVnodeUpdated) && ae(() => Ie(k, $, x, M), _), process.env.NODE_ENV !== "production" && ss(c), process.env.NODE_ENV !== "production" && sn();
      } else {
        let x;
        const { el: D, props: V } = f, { bm: $, m: M, parent: W } = c, k = cn(f);
        if (ot(c, !1), $ && Ft($), !k && (x = V && V.onVnodeBeforeMount) && Ie(x, W, f), ot(c, !0), D && jn) {
          const Z = () => {
            process.env.NODE_ENV !== "production" && Me(c, "render"), c.subTree = Hn(c), process.env.NODE_ENV !== "production" && Se(c, "render"), process.env.NODE_ENV !== "production" && Me(c, "hydrate"), jn(D, c.subTree, c, _, null), process.env.NODE_ENV !== "production" && Se(c, "hydrate");
          };
          k ? f.type.__asyncLoader().then(
            () => !c.isUnmounted && Z()
          ) : Z();
        } else {
          process.env.NODE_ENV !== "production" && Me(c, "render");
          const Z = c.subTree = Hn(c);
          process.env.NODE_ENV !== "production" && Se(c, "render"), process.env.NODE_ENV !== "production" && Me(c, "patch"), C(null, Z, p, g, c, _, N), process.env.NODE_ENV !== "production" && Se(c, "patch"), f.el = Z.el;
        }
        if (M && ae(M, _), !k && (x = V && V.onVnodeMounted)) {
          const Z = f;
          ae(() => Ie(x, W, Z), _);
        }
        (f.shapeFlag & 256 || W && cn(W.vnode) && W.vnode.shapeFlag & 256) && c.a && ae(c.a, _), c.isMounted = !0, process.env.NODE_ENV !== "production" && Ji(c), f = p = g = null;
      }
    }, b = c.effect = new bo(
      v,
      () => Tn(E),
      c.scope
    ), E = c.update = () => b.run();
    E.id = c.uid, ot(c, !0), process.env.NODE_ENV !== "production" && (b.onTrack = c.rtc ? (x) => Ft(c.rtc, x) : void 0, b.onTrigger = c.rtg ? (x) => Ft(c.rtg, x) : void 0, E.ownerInstance = c), E();
  }, A = (c, f, p) => {
    f.component = c;
    const g = c.vnode.props;
    c.vnode = f, c.next = null, jc(c, f.props, g, p), Kc(c, f.children, p), _t(), Qo(), mt();
  }, X = (c, f, p, g, _, N, O, v, b = !1) => {
    const E = c && c.children, x = c ? c.shapeFlag : 0, D = f.children, { patchFlag: V, shapeFlag: $ } = f;
    if (V > 0) {
      if (V & 128) {
        Ce(E, D, p, g, _, N, O, v, b);
        return;
      } else if (V & 256) {
        _e(E, D, p, g, _, N, O, v, b);
        return;
      }
    }
    $ & 8 ? (x & 16 && je(E, _, N), D !== E && h(p, D)) : x & 16 ? $ & 16 ? Ce(E, D, p, g, _, N, O, v, b) : je(E, _, N, !0) : (x & 8 && h(p, ""), $ & 16 && se(D, p, g, _, N, O, v, b));
  }, _e = (c, f, p, g, _, N, O, v, b) => {
    c = c || wt, f = f || wt;
    const E = c.length, x = f.length, D = Math.min(E, x);
    let V;
    for (V = 0; V < D; V++) {
      const $ = f[V] = b ? Je(f[V]) : Oe(f[V]);
      C(c[V], $, p, null, _, N, O, v, b);
    }
    E > x ? je(c, _, N, !0, !1, D) : se(f, p, g, _, N, O, v, b, D);
  }, Ce = (c, f, p, g, _, N, O, v, b) => {
    let E = 0;
    const x = f.length;
    let D = c.length - 1, V = x - 1;
    for (; E <= D && E <= V; ) {
      const $ = c[E], M = f[E] = b ? Je(f[E]) : Oe(f[E]);
      if (Rt($, M))
        C($, M, p, null, _, N, O, v, b);
      else
        break;
      E++;
    }
    for (; E <= D && E <= V; ) {
      const $ = c[D], M = f[V] = b ? Je(f[V]) : Oe(f[V]);
      if (Rt($, M))
        C($, M, p, null, _, N, O, v, b);
      else
        break;
      D--, V--;
    }
    if (E > D) {
      if (E <= V) {
        const $ = V + 1, M = $ < x ? f[$].el : g;
        for (; E <= V; )
          C(null, f[E] = b ? Je(f[E]) : Oe(f[E]), p, M, _, N, O, v, b), E++;
      }
    } else if (E > V)
      for (; E <= D; )
        Ne(c[E], _, N, !0), E++;
    else {
      const $ = E, M = E, W = /* @__PURE__ */ new Map();
      for (E = M; E <= V; E++) {
        const ce = f[E] = b ? Je(f[E]) : Oe(f[E]);
        ce.key != null && (process.env.NODE_ENV !== "production" && W.has(ce.key) && y("Duplicate keys found during update:", JSON.stringify(ce.key), "Make sure keys are unique."), W.set(ce.key, E));
      }
      let k, Z = 0;
      const be = V - M + 1;
      let Et = !1, Ho = 0;
      const $t = new Array(be);
      for (E = 0; E < be; E++)
        $t[E] = 0;
      for (E = $; E <= D; E++) {
        const ce = c[E];
        if (Z >= be) {
          Ne(ce, _, N, !0);
          continue;
        }
        let Pe;
        if (ce.key != null)
          Pe = W.get(ce.key);
        else
          for (k = M; k <= V; k++)
            if ($t[k - M] === 0 && Rt(ce, f[k])) {
              Pe = k;
              break;
            }
        Pe === void 0 ? Ne(ce, _, N, !0) : ($t[Pe - M] = E + 1, Pe >= Ho ? Ho = Pe : Et = !0, C(ce, f[Pe], p, null, _, N, O, v, b), Z++);
      }
      const Lo = Et ? Qc($t) : wt;
      for (k = Lo.length - 1, E = be - 1; E >= 0; E--) {
        const ce = M + E, Pe = f[ce], Uo = ce + 1 < x ? f[ce + 1].el : g;
        $t[E] === 0 ? C(null, Pe, p, Uo, _, N, O, v, b) : Et && (k < 0 || E !== Lo[k] ? ve(Pe, p, Uo, 2) : k--);
      }
    }
  }, ve = (c, f, p, g, _ = null) => {
    const { el: N, type: O, transition: v, children: b, shapeFlag: E } = c;
    if (E & 6) {
      ve(c.component.subTree, f, p, g);
      return;
    }
    if (E & 128) {
      c.suspense.move(f, p, g);
      return;
    }
    if (E & 64) {
      O.move(c, f, p, gt);
      return;
    }
    if (O === ye) {
      o(N, f, p);
      for (let D = 0; D < b.length; D++)
        ve(b[D], f, p, g);
      o(c.anchor, f, p);
      return;
    }
    if (O === un) {
      te(c, f, p);
      return;
    }
    if (g !== 2 && E & 1 && v)
      if (g === 0)
        v.beforeEnter(N), o(N, f, p), ae(() => v.enter(N), _);
      else {
        const { leave: D, delayLeave: V, afterLeave: $ } = v, M = () => o(N, f, p), W = () => {
          D(N, () => {
            M(), $ && $();
          });
        };
        V ? V(N, M, W) : W();
      }
    else
      o(N, f, p);
  }, Ne = (c, f, p, g = !1, _ = !1) => {
    const { type: N, props: O, ref: v, children: b, dynamicChildren: E, shapeFlag: x, patchFlag: D, dirs: V } = c;
    if (v != null && io(v, null, p, c, !0), x & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const $ = x & 1 && V, M = !cn(c);
    let W;
    if (M && (W = O && O.onVnodeBeforeUnmount) && Ie(W, f, c), x & 6)
      Rs(c.component, p, g);
    else {
      if (x & 128) {
        c.suspense.unmount(p, g);
        return;
      }
      $ && nt(c, null, f, "beforeUnmount"), x & 64 ? c.type.remove(c, f, p, _, gt, g) : E && (N !== ye || D > 0 && D & 64) ? je(E, f, p, !1, !0) : (N === ye && D & 384 || !_ && x & 16) && je(b, f, p), g && ne(c);
    }
    (M && (W = O && O.onVnodeUnmounted) || $) && ae(() => {
      W && Ie(W, f, c), $ && nt(c, null, f, "unmounted");
    }, p);
  }, ne = (c) => {
    const { type: f, el: p, anchor: g, transition: _ } = c;
    if (f === ye) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && _ && !_.persisted ? c.children.forEach((O) => {
        O.type === Te ? r(O.el) : ne(O);
      }) : Qt(p, g);
      return;
    }
    if (f === un) {
      K(c);
      return;
    }
    const N = () => {
      r(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: O, delayLeave: v } = _, b = () => O(p, N);
      v ? v(c.el, N, b) : b();
    } else
      N();
  }, Qt = (c, f) => {
    let p;
    for (; c !== f; )
      p = m(c), r(c), c = p;
    r(f);
  }, Rs = (c, f, p) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && ki(c);
    const { bum: g, scope: _, update: N, subTree: O, um: v } = c;
    g && Ft(g), _.stop(), N && (N.active = !1, Ne(O, c, f, p)), v && ae(v, f), ae(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Qi(c);
  }, je = (c, f, p, g = !1, _ = !1, N = 0) => {
    for (let O = N; O < c.length; O++)
      Ne(c[O], f, p, g, _);
  }, Xt = (c) => c.shapeFlag & 6 ? Xt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : m(c.anchor || c.el), So = (c, f, p) => {
    c == null ? f._vnode && Ne(f._vnode, null, null, !0) : C(f._vnode || null, c, f, null, null, null, p), Qo(), ts(), f._vnode = c;
  }, gt = {
    p: C,
    um: Ne,
    m: ve,
    r: ne,
    mt: J,
    mc: se,
    pc: X,
    pbc: he,
    n: Xt,
    o: e
  };
  let Rn, jn;
  return t && ([Rn, jn] = t(gt)), {
    render: So,
    hydrate: Rn,
    createApp: qc(So, Rn)
  };
}
function ot({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ln(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (I(o) && I(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = Je(r[s]), l.el = i.el), n || ln(i, l)), process.env.NODE_ENV !== "production" && l.type === Te && !l.el && (l.el = i.el);
    }
}
function Qc(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const d = e[o];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < d ? s = l + 1 : i = l;
      d < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Xc = (e) => e.__isTeleport, ye = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), In = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Te = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), un = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Lt = [];
let De = null;
function Qe(e = !1) {
  Lt.push(De = e ? null : []);
}
function Zc() {
  Lt.pop(), De = Lt[Lt.length - 1] || null;
}
let qt = 1;
function lr(e) {
  qt += e;
}
function ws(e) {
  return e.dynamicChildren = qt > 0 ? De || wt : null, Zc(), qt > 0 && De && De.push(e), e;
}
function ct(e, t, n, o, r, s) {
  return ws(xs(e, t, n, o, r, s, !0));
}
function Gc(e, t, n, o, r) {
  return ws(Ue(e, t, n, o, r, !0));
}
function Ao(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Rt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && vt.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const el = (...e) => Vs(...e), $n = "__vInternal", Ds = ({ key: e }) => e != null ? e : null, fn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ee(e) || Y(e) || F(e) ? { i: we, r: e, k: t, f: !!n } : e : null;
function xs(e, t = null, n = null, o = 0, r = null, s = e === ye ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ds(t),
    ref: t && fn(t),
    scopeId: ls,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null
  };
  return l ? (Ro(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= ee(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && y("VNode created with invalid key (NaN). VNode type:", u.type), qt > 0 && !i && De && (u.patchFlag > 0 || s & 6) && u.patchFlag !== 32 && De.push(u), u;
}
const Ue = process.env.NODE_ENV !== "production" ? el : Vs;
function Vs(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Oc) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = Te), Ao(e)) {
    const l = tt(e, t, !0);
    return n && Ro(l, n), qt > 0 && !s && De && (l.shapeFlag & 6 ? De[De.indexOf(e)] = l : De.push(l)), l.patchFlag |= -2, l;
  }
  if ($s(e) && (e = e.__vccOpts), t) {
    t = tl(t);
    let { class: l, style: u } = t;
    l && !ee(l) && (t.class = _o(l)), q(u) && (_n(u) && !I(u) && (u = Q({}, u)), t.style = ho(u));
  }
  const i = ee(e) ? 1 : cc(e) ? 128 : Xc(e) ? 64 : q(e) ? 4 : F(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && _n(e) && (e = R(e), y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), xs(e, t, n, o, r, i, s, !0);
}
function tl(e) {
  return e ? _n(e) || $n in e ? Q({}, e) : e : null;
}
function tt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, l = t ? ol(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ds(l),
    ref: t && t.ref ? n && r ? I(r) ? r.concat(fn(t)) : [r, fn(t)] : fn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && I(i) ? i.map(Ts) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ye ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function Ts(e) {
  const t = tt(e);
  return I(e.children) && (t.children = e.children.map(Ts)), t;
}
function nl(e = " ", t = 0) {
  return Ue(In, null, e, t);
}
function Oe(e) {
  return e == null || typeof e == "boolean" ? Ue(Te) : I(e) ? Ue(
    ye,
    null,
    e.slice()
  ) : typeof e == "object" ? Je(e) : Ue(In, null, String(e));
}
function Je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function Ro(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ro(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !($n in t) ? t._ctx = we : r === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    F(t) ? (t = { default: t, _ctx: we }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [nl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ol(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = _o([t.class, o.class]));
      else if (r === "style")
        t.style = ho([t.style, o.style]);
      else if (Jt(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(I(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Ie(e, t, n, o = null) {
  Ve(e, t, 7, [
    n,
    o
  ]);
}
const rl = Os();
let sl = 0;
function il(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || rl, s = {
    uid: sl++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Ys(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: Es(o, r),
    emitsOptions: cs(o, r),
    emit: null,
    emitted: null,
    propsDefaults: U,
    inheritAttrs: o.inheritAttrs,
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = Dc(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = ec.bind(null, s), e.ce && e.ce(s), s;
}
let re = null;
const Ct = (e) => {
  re = e, e.scope.on();
}, pt = () => {
  re && re.scope.off(), re = null;
}, cl = /* @__PURE__ */ Pt("slot,component");
function co(e, t) {
  const n = t.isNativeTag || Cr;
  (cl(e) || n(e)) && y("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Cs(e) {
  return e.vnode.shapeFlag & 4;
}
let zt = !1;
function ll(e, t = !1) {
  zt = t;
  const { props: n, children: o } = e.vnode, r = Cs(e);
  Ac(e, n, r, t), kc(e, o);
  const s = r ? ul(e, t) : void 0;
  return zt = !1, s;
}
function ul(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && co(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        co(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        hs(s[i]);
    }
    o.compilerOptions && fl() && y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Kr(new Proxy(e.ctx, _s)), process.env.NODE_ENV !== "production" && xc(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? al(e) : null;
    Ct(e), _t();
    const i = Le(r, e, 0, [process.env.NODE_ENV !== "production" ? bt(e.props) : e.props, s]);
    if (mt(), pt(), Eo(i)) {
      if (i.then(pt, pt), t)
        return i.then((l) => {
          ur(e, l, t);
        }).catch((l) => {
          Vn(l, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        y(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      ur(e, i, t);
  } else
    Ps(e, t);
}
function ur(e, t, n) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) ? (process.env.NODE_ENV !== "production" && Ao(t) && y("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Jr(t), process.env.NODE_ENV !== "production" && Vc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Ps(e, n);
}
let lo;
const fl = () => !lo;
function Ps(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && lo && !o.render) {
      const r = o.template || $o(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Me(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: u } = o, d = Q(Q({
          isCustomElement: s,
          delimiters: l
        }, i), u);
        o.render = lo(r, d), process.env.NODE_ENV !== "production" && Se(e, "compile");
      }
    }
    e.render = o.render || oe;
  }
  Ct(e), _t(), Cc(e), mt(), pt(), process.env.NODE_ENV !== "production" && !o.render && e.render === oe && !t && (o.template ? y('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : y("Component is missing template or render function."));
}
function fr(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return gn(), de(e, "get", "$attrs"), t[n];
    },
    set() {
      return y("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return y("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return de(e, "get", "$attrs"), t[n];
    }
  });
}
function al(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && y("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = fr(e));
    },
    get slots() {
      return bt(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = fr(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function jo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Jr(Kr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Tt)
          return Tt[n](e);
      }
    }));
}
const dl = /(?:^|[-_])(\w)/g, pl = (e) => e.replace(dl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Is(e, t = !0) {
  return F(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Fn(e, t, n = !1) {
  let o = Is(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? pl(o) : n ? "App" : "Anonymous";
}
function $s(e) {
  return F(e) && "__vccOpts" in e;
}
const An = (e, t) => $i(e, t, zt);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Un(e) {
  return !!(e && e.__v_isShallow);
}
function hl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(a) {
      return q(a) ? a.__isVue ? ["div", e, "VueInstance"] : Y(a) ? [
        "div",
        {},
        ["span", e, h(a)],
        "<",
        l(a.value),
        ">"
      ] : ut(a) ? [
        "div",
        {},
        ["span", e, Un(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${et(a) ? " (readonly)" : ""}`
      ] : et(a) ? [
        "div",
        {},
        ["span", e, Un(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...s(a.$)
        ];
    }
  };
  function s(a) {
    const m = [];
    a.type.props && a.props && m.push(i("props", R(a.props))), a.setupState !== U && m.push(i("setup", a.setupState)), a.data !== U && m.push(i("data", R(a.data)));
    const w = u(a, "computed");
    w && m.push(i("computed", w));
    const T = u(a, "inject");
    return T && m.push(i("injected", T)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), m;
  }
  function i(a, m) {
    return m = Q({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((w) => [
          "div",
          {},
          ["span", o, w + ": "],
          l(m[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, m = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : q(a) ? ["object", { object: m ? R(a) : a }] : ["span", n, String(a)];
  }
  function u(a, m) {
    const w = a.type;
    if (F(w))
      return;
    const T = {};
    for (const C in a.ctx)
      d(w, C, m) && (T[C] = a.ctx[C]);
    return T;
  }
  function d(a, m, w) {
    const T = a[w];
    if (I(T) && T.includes(m) || q(T) && m in T || a.extends && d(a.extends, m, w) || a.mixins && a.mixins.some((C) => d(C, m, w)))
      return !0;
  }
  function h(a) {
    return Un(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const ar = "3.2.41", _l = "http://www.w3.org/2000/svg", it = typeof document < "u" ? document : null, dr = it && /* @__PURE__ */ it.createElement("template"), ml = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? it.createElementNS(_l, e) : it.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => it.createTextNode(e),
  createComment: (e) => it.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => it.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      dr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = dr.content;
      if (o) {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      i ? i.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function gl(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function El(e, t, n) {
  const o = e.style, r = ee(n);
  if (n && !r) {
    for (const s in n)
      uo(o, s, n[s]);
    if (t && !ee(t))
      for (const s in t)
        n[s] == null && uo(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const pr = /\s*!important$/;
function uo(e, t, n) {
  if (I(n))
    n.forEach((o) => uo(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = vl(e, t);
    pr.test(n) ? e.setProperty(xe(o), n.replace(pr, ""), "important") : e[o] = n;
  }
}
const hr = ["Webkit", "Moz", "ms"], Bn = {};
function vl(e, t) {
  const n = Bn[t];
  if (n)
    return n;
  let o = Ze(t);
  if (o !== "filter" && o in e)
    return Bn[t] = o;
  o = yn(o);
  for (let r = 0; r < hr.length; r++) {
    const s = hr[r] + o;
    if (s in e)
      return Bn[t] = s;
  }
  return t;
}
const _r = "http://www.w3.org/1999/xlink";
function Nl(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(_r, t.slice(6, t.length)) : e.setAttributeNS(_r, t, n);
  else {
    const s = Ms(t);
    n == null || s && !Tr(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function bl(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const u = n == null ? "" : n;
    (e.value !== u || e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Tr(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !l && y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, u);
  }
  l && e.removeAttribute(t);
}
function yl(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ol(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function wl(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [l, u] = Dl(t);
    if (o) {
      const d = s[t] = Tl(o, r);
      yl(e, l, d, u);
    } else
      i && (Ol(e, l, i, u), s[t] = void 0);
  }
}
const mr = /(?:Once|Passive|Capture)$/;
function Dl(e) {
  let t;
  if (mr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(mr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xe(e.slice(2)), t];
}
let kn = 0;
const xl = /* @__PURE__ */ Promise.resolve(), Vl = () => kn || (xl.then(() => kn = 0), kn = Date.now());
function Tl(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ve(Cl(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = Vl(), n;
}
function Cl(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const gr = /^on[a-z]/, Pl = (e, t, n, o, r = !1, s, i, l, u) => {
  t === "class" ? gl(e, o, r) : t === "style" ? El(e, n, o) : Jt(t) ? an(t) || wl(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Il(e, t, o, r)) ? bl(e, t, o, s, i, l, u) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Nl(e, t, o, r));
};
function Il(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && gr.test(t) && F(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || gr.test(t) && ee(n) ? !1 : t in e;
}
function $l(e, t) {
  const n = Co(e);
  class o extends Mo {
    constructor(s) {
      super(n, s, t);
    }
  }
  return o.def = n, o;
}
const Fl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Mo extends Fl {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && y("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Zr(() => {
      this._connected || (vr(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    if (this._resolved)
      return;
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    new MutationObserver((o) => {
      for (const r of o)
        this._setAttr(r.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (o) => {
      const { props: r, styles: s } = o, i = !I(r), l = r ? i ? Object.keys(r) : r : [];
      let u;
      if (i)
        for (const d in this._props) {
          const h = r[d];
          (h === Number || h && h.type === Number) && (this._props[d] = zn(this._props[d]), (u || (u = /* @__PURE__ */ Object.create(null)))[d] = !0);
        }
      this._numberProps = u;
      for (const d of Object.keys(this))
        d[0] !== "_" && this._setProp(d, this[d], !0, !1);
      for (const d of l.map(Ze))
        Object.defineProperty(this, d, {
          get() {
            return this._getProp(d);
          },
          set(h) {
            this._setProp(d, h);
          }
        });
      this._applyStyles(s), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then(t) : t(this._def);
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (n = zn(n)), this._setProp(Ze(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(xe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(xe(t), n + "") : n || this.removeAttribute(xe(t))));
  }
  _update() {
    vr(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Ue(this._def, Q({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, process.env.NODE_ENV !== "production" && (n.ceReload = (r) => {
        this._styles && (this._styles.forEach((s) => this.shadowRoot.removeChild(s)), this._styles.length = 0), this._applyStyles(r), this._def.__asyncLoader || (this._instance = null, this._update());
      }), n.emit = (r, ...s) => {
        this.dispatchEvent(new CustomEvent(r, {
          detail: s
        }));
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof Mo) {
          n.parent = o._instance;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const o = document.createElement("style");
      o.textContent = n, this.shadowRoot.appendChild(o), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(o);
    });
  }
}
const Al = /* @__PURE__ */ Q({ patchProp: Pl }, ml);
let Er;
function Rl() {
  return Er || (Er = Jc(Al));
}
const vr = (...e) => {
  Rl().render(...e);
};
function jl() {
  hl();
}
process.env.NODE_ENV !== "production" && jl();
var Nr;
const It = typeof window < "u";
It && ((Nr = window == null ? void 0 : window.navigator) == null ? void 0 : Nr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function He(e) {
  return typeof e == "function" ? e() : Vt(e);
}
function br(e, t = !1, n = "Timeout") {
  return new Promise((o, r) => {
    setTimeout(t ? () => r(n) : o, e);
  });
}
function Ml(e) {
  return e;
}
function Sl(e, ...t) {
  return t.some((n) => n in e);
}
function Kn() {
  const e = [], t = (r) => {
    const s = e.indexOf(r);
    s !== -1 && e.splice(s, 1);
  };
  return {
    on: (r) => (e.push(r), {
      off: () => t(r)
    }),
    off: t,
    trigger: (r) => {
      e.forEach((s) => s(r));
    }
  };
}
function Hl(e) {
  return Xs() ? (Zs(e), !0) : !1;
}
function Wn(e) {
  return typeof e == "function" ? An(e) : yt(e);
}
function fo(e, t = !1) {
  function n(a, { flush: m = "sync", deep: w = !1, timeout: T, throwOnTimeout: C } = {}) {
    let L = null;
    const H = [new Promise((B) => {
      L = dt(e, (te) => {
        a(te) !== t && (L == null || L(), B(te));
      }, {
        flush: m,
        deep: w,
        immediate: !0
      });
    })];
    return T != null && H.push(br(T, C).then(() => He(e)).finally(() => L == null ? void 0 : L())), Promise.race(H);
  }
  function o(a, m) {
    if (!Y(a))
      return n((te) => te === a, m);
    const { flush: w = "sync", deep: T = !1, timeout: C, throwOnTimeout: L } = m != null ? m : {};
    let S = null;
    const B = [new Promise((te) => {
      S = dt([e, a], ([K, pe]) => {
        t !== (K === pe) && (S == null || S(), te(K));
      }, {
        flush: w,
        deep: T,
        immediate: !0
      });
    })];
    return C != null && B.push(br(C, L).then(() => He(e)).finally(() => (S == null || S(), He(e)))), Promise.race(B);
  }
  function r(a) {
    return n((m) => Boolean(m), a);
  }
  function s(a) {
    return o(null, a);
  }
  function i(a) {
    return o(void 0, a);
  }
  function l(a) {
    return n(Number.isNaN, a);
  }
  function u(a, m) {
    return n((w) => {
      const T = Array.from(w);
      return T.includes(a) || T.includes(He(a));
    }, m);
  }
  function d(a) {
    return h(1, a);
  }
  function h(a = 1, m) {
    let w = -1;
    return n(() => (w += 1, w >= a), m);
  }
  return Array.isArray(He(e)) ? {
    toMatch: n,
    toContains: u,
    changed: d,
    changedTimes: h,
    get not() {
      return fo(e, !t);
    }
  } : {
    toMatch: n,
    toBe: o,
    toBeTruthy: r,
    toBeNull: s,
    toBeNaN: l,
    toBeUndefined: i,
    changed: d,
    changedTimes: h,
    get not() {
      return fo(e, !t);
    }
  };
}
function Ll(e) {
  return fo(e);
}
function Ul(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = yt(!1);
  let s = null;
  function i() {
    s && (clearTimeout(s), s = null);
  }
  function l() {
    r.value = !1, i();
  }
  function u(...d) {
    i(), r.value = !0, s = setTimeout(() => {
      r.value = !1, s = null, e(...d);
    }, He(t));
  }
  return o && (r.value = !0, It && u()), Hl(l), {
    isPending: r,
    start: u,
    stop: l
  };
}
const Bl = It ? window : void 0;
It && window.document;
It && window.navigator;
It && window.location;
const ao = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, po = "__vueuse_ssr_handlers__";
ao[po] = ao[po] || {};
ao[po];
var kl = Object.defineProperty, Kl = Object.defineProperties, Wl = Object.getOwnPropertyDescriptors, yr = Object.getOwnPropertySymbols, ql = Object.prototype.hasOwnProperty, zl = Object.prototype.propertyIsEnumerable, Or = (e, t, n) => t in e ? kl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fe = (e, t) => {
  for (var n in t || (t = {}))
    ql.call(t, n) && Or(e, n, t[n]);
  if (yr)
    for (var n of yr(t))
      zl.call(t, n) && Or(e, n, t[n]);
  return e;
}, jt = (e, t) => Kl(e, Wl(t));
const Jl = {
  json: "application/json",
  text: "text/plain",
  formData: "multipart/form-data"
};
function wr(e) {
  return Sl(e, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch");
}
function qn(e) {
  return typeof Headers < "u" && e instanceof Headers ? Object.fromEntries([...e.entries()]) : e;
}
function Fs(e, ...t) {
  var n;
  const o = typeof AbortController == "function";
  let r = {}, s = { immediate: !0, refetch: !1, timeout: 0 };
  const i = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  t.length > 0 && (wr(t[0]) ? s = fe(fe({}, s), t[0]) : r = t[0]), t.length > 1 && wr(t[1]) && (s = fe(fe({}, s), t[1]));
  const {
    fetch: l = (n = Bl) == null ? void 0 : n.fetch,
    initialData: u,
    timeout: d
  } = s, h = Kn(), a = Kn(), m = Kn(), w = yt(!1), T = yt(!1), C = yt(!1), L = yt(null), S = Mn(null), H = Mn(null), B = Mn(u), te = An(() => o && T.value);
  let K, pe;
  const Re = () => {
    o && K && K.abort();
  }, ge = (J) => {
    T.value = J, w.value = !J;
  };
  d && (pe = Ul(Re, d, { immediate: !1 }));
  const se = async (J = !1) => {
    var z;
    ge(!0), H.value = null, L.value = null, C.value = !1, K = void 0, o && (K = new AbortController(), K.signal.onabort = () => C.value = !0, r = jt(fe({}, r), {
      signal: K.signal
    }));
    const P = {
      method: i.method,
      headers: {}
    };
    if (i.payload) {
      const Ce = qn(P.headers);
      i.payloadType && (Ce["Content-Type"] = (z = Jl[i.payloadType]) != null ? z : i.payloadType);
      const ve = He(i.payload);
      P.body = i.payloadType === "json" ? JSON.stringify(ve) : ve;
    }
    let A = !1;
    const X = { url: He(e), options: fe(fe({}, P), r), cancel: () => {
      A = !0;
    } };
    if (s.beforeFetch && Object.assign(X, await s.beforeFetch(X)), A || !l)
      return ge(!1), Promise.resolve(null);
    let _e = null;
    return pe && pe.start(), new Promise((Ce, ve) => {
      var Ne;
      l(X.url, jt(fe(fe({}, P), X.options), {
        headers: fe(fe({}, qn(P.headers)), qn((Ne = X.options) == null ? void 0 : Ne.headers))
      })).then(async (ne) => {
        if (S.value = ne, L.value = ne.status, _e = await ne[i.type](), s.afterFetch && L.value >= 200 && L.value < 300 && ({ data: _e } = await s.afterFetch({ data: _e, response: ne })), B.value = _e, !ne.ok)
          throw new Error(ne.statusText);
        return h.trigger(ne), Ce(ne);
      }).catch(async (ne) => {
        let Qt = ne.message || ne.name;
        return s.onFetchError && ({ data: _e, error: Qt } = await s.onFetchError({ data: _e, error: ne, response: S.value })), B.value = _e, H.value = Qt, a.trigger(ne), J ? ve(ne) : Ce(null);
      }).finally(() => {
        ge(!1), pe && pe.stop(), m.trigger(null);
      });
    });
  }, Ee = Wn(s.refetch);
  dt([
    Ee,
    Wn(e)
  ], ([J]) => J && se(), { deep: !0 });
  const he = {
    isFinished: w,
    statusCode: L,
    response: S,
    error: H,
    data: B,
    isFetching: T,
    canAbort: te,
    aborted: C,
    abort: Re,
    execute: se,
    onFetchResponse: h.on,
    onFetchError: a.on,
    onFetchFinally: m.on,
    get: G("GET"),
    put: G("PUT"),
    post: G("POST"),
    delete: G("DELETE"),
    patch: G("PATCH"),
    head: G("HEAD"),
    options: G("OPTIONS"),
    json: We("json"),
    text: We("text"),
    blob: We("blob"),
    arrayBuffer: We("arrayBuffer"),
    formData: We("formData")
  };
  function G(J) {
    return (z, P) => {
      if (!T.value) {
        i.method = J, i.payload = z, i.payloadType = P, Y(i.payload) && dt([
          Ee,
          Wn(i.payload)
        ], ([X]) => X && se(), { deep: !0 });
        const A = He(i.payload);
        return !P && A && Object.getPrototypeOf(A) === Object.prototype && (i.payloadType = "json"), jt(fe({}, he), {
          then(X, _e) {
            return Ke().then(X, _e);
          }
        });
      }
    };
  }
  function Ke() {
    return new Promise((J, z) => {
      Ll(w).toBe(!0).then(() => J(he)).catch((P) => z(P));
    });
  }
  function We(J) {
    return () => {
      if (!T.value)
        return i.type = J, jt(fe({}, he), {
          then(z, P) {
            return Ke().then(z, P);
          }
        });
    };
  }
  return s.immediate && setTimeout(se, 0), jt(fe({}, he), {
    then(J, z) {
      return Ke().then(J, z);
    }
  });
}
var Dr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Dr || (Dr = {}));
var Yl = Object.defineProperty, xr = Object.getOwnPropertySymbols, Ql = Object.prototype.hasOwnProperty, Xl = Object.prototype.propertyIsEnumerable, Vr = (e, t, n) => t in e ? Yl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Zl = (e, t) => {
  for (var n in t || (t = {}))
    Ql.call(t, n) && Vr(e, n, t[n]);
  if (xr)
    for (var n of xr(t))
      Xl.call(t, n) && Vr(e, n, t[n]);
  return e;
};
const Gl = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Zl({
  linear: Ml
}, Gl);
const eu = { class: "pokemon" }, tu = { key: 0 }, nu = ["src"], ou = /* @__PURE__ */ Co({
  __name: "PokemonItem",
  props: {
    url: null
  },
  setup(e) {
    const t = e, { url: n } = Ti(t), { isFetching: o, data: r } = Fs(n).json(), s = An(
      () => {
        var i;
        return (i = r.value) == null ? void 0 : i.sprites.other["official-artwork"].front_default;
      }
    );
    return (i, l) => {
      var u;
      return Qe(), ct("div", eu, [
        Vt(o) ? (Qe(), ct("div", tu, "Loading...")) : (Qe(), ct("img", {
          key: 1,
          src: (u = Vt(s)) != null ? u : ""
        }, null, 8, nu))
      ]);
    };
  }
});
const As = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, ru = /* @__PURE__ */ As(ou, [["__scopeId", "data-v-b54b0006"]]), su = { class: "pokemon-list" }, iu = { key: 0 }, cu = { key: 1 }, lu = /* @__PURE__ */ Co({
  __name: "PokemonList.ce",
  setup(e) {
    const { isFetching: t, error: n, data: o } = Fs(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
    ).json();
    return (r, s) => {
      var i;
      return Qe(), ct("div", su, [
        Vt(t) ? (Qe(), ct("div", iu, "Loading...")) : (Qe(), ct("div", cu, [
          (Qe(!0), ct(ye, null, wc((i = Vt(o)) == null ? void 0 : i.results, ({ url: l }) => (Qe(), Gc(ru, { url: l }, null, 8, ["url"]))), 256))
        ]))
      ]);
    };
  }
}), uu = `.pokemon-list[data-v-7db25ab5]{display:inline-flex}
`, fu = /* @__PURE__ */ As(lu, [["styles", [uu]], ["__scopeId", "data-v-7db25ab5"]]), au = () => {
  customElements.define("pokemon-list", $l(fu));
};
export {
  au as usePokemonList
};
