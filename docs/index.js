// deno:https://cdn.jsdelivr.net/npm/fabric@6.7.1/+esm
function t(t3, e4, s3) {
  return (e4 = function(t4) {
    var e5 = function(t5, e6) {
      if ("object" != typeof t5 || !t5) return t5;
      var s4 = t5[Symbol.toPrimitive];
      if (void 0 !== s4) {
        var i3 = s4.call(t5, e6 || "default");
        if ("object" != typeof i3) return i3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e6 ? String : Number)(t5);
    }(t4, "string");
    return "symbol" == typeof e5 ? e5 : e5 + "";
  }(e4)) in t3 ? Object.defineProperty(t3, e4, {
    value: s3,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t3[e4] = s3, t3;
}
function e(t3, e4) {
  var s3 = Object.keys(t3);
  if (Object.getOwnPropertySymbols) {
    var i3 = Object.getOwnPropertySymbols(t3);
    e4 && (i3 = i3.filter(function(e5) {
      return Object.getOwnPropertyDescriptor(t3, e5).enumerable;
    })), s3.push.apply(s3, i3);
  }
  return s3;
}
function s(s3) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var r3 = null != arguments[i3] ? arguments[i3] : {};
    i3 % 2 ? e(Object(r3), true).forEach(function(e4) {
      t(s3, e4, r3[e4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s3, Object.getOwnPropertyDescriptors(r3)) : e(Object(r3)).forEach(function(t3) {
      Object.defineProperty(s3, t3, Object.getOwnPropertyDescriptor(r3, t3));
    });
  }
  return s3;
}
function i(t3, e4) {
  if (null == t3) return {};
  var s3, i3, r3 = function(t4, e5) {
    if (null == t4) return {};
    var s4 = {};
    for (var i4 in t4) if ({}.hasOwnProperty.call(t4, i4)) {
      if (e5.indexOf(i4) >= 0) continue;
      s4[i4] = t4[i4];
    }
    return s4;
  }(t3, e4);
  if (Object.getOwnPropertySymbols) {
    var n3 = Object.getOwnPropertySymbols(t3);
    for (i3 = 0; i3 < n3.length; i3++) s3 = n3[i3], e4.indexOf(s3) >= 0 || {}.propertyIsEnumerable.call(t3, s3) && (r3[s3] = t3[s3]);
  }
  return r3;
}
function r(t3, e4) {
  return e4 || (e4 = t3.slice(0)), Object.freeze(Object.defineProperties(t3, {
    raw: {
      value: Object.freeze(e4)
    }
  }));
}
var n = class {
  constructor() {
    t(this, "browserShadowBlurConstant", 1), t(this, "DPI", 96), t(this, "devicePixelRatio", "undefined" != typeof window ? window.devicePixelRatio : 1), t(this, "perfLimitSizeTotal", 2097152), t(this, "maxCacheSideLimit", 4096), t(this, "minCacheSideLimit", 256), t(this, "disableStyleCopyPaste", false), t(this, "enableGLFiltering", true), t(this, "textureSize", 4096), t(this, "forceGLPutImageData", false), t(this, "cachesBoundsOfCurve", false), t(this, "fontPaths", {}), t(this, "NUM_FRACTION_DIGITS", 4);
  }
};
var o = new class extends n {
  constructor(t3) {
    super(), this.configure(t3);
  }
  configure() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    Object.assign(this, t3);
  }
  addFonts() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.fontPaths = s(s({}, this.fontPaths), t3);
  }
  removeFonts() {
    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((t3) => {
      delete this.fontPaths[t3];
    });
  }
  clearFonts() {
    this.fontPaths = {};
  }
  restoreDefaults(t3) {
    const e4 = new n(), s3 = (null == t3 ? void 0 : t3.reduce((t4, s4) => (t4[s4] = e4[s4], t4), {})) || e4;
    this.configure(s3);
  }
}();
var a = function(t3) {
  for (var e4 = arguments.length, s3 = new Array(e4 > 1 ? e4 - 1 : 0), i3 = 1; i3 < e4; i3++) s3[i3 - 1] = arguments[i3];
  return console[t3]("fabric", ...s3);
};
var h = class extends Error {
  constructor(t3, e4) {
    super("fabric: ".concat(t3), e4);
  }
};
var c = class extends h {
  constructor(t3) {
    super("".concat(t3, " 'options.signal' is in 'aborted' state"));
  }
};
var l = class {
};
var u = class extends l {
  testPrecision(t3, e4) {
    const s3 = "precision ".concat(e4, " float;\nvoid main(){}"), i3 = t3.createShader(t3.FRAGMENT_SHADER);
    return !!i3 && (t3.shaderSource(i3, s3), t3.compileShader(i3), !!t3.getShaderParameter(i3, t3.COMPILE_STATUS));
  }
  queryWebGL(t3) {
    const e4 = t3.getContext("webgl");
    e4 && (this.maxTextureSize = e4.getParameter(e4.MAX_TEXTURE_SIZE), this.GLPrecision = [
      "highp",
      "mediump",
      "lowp"
    ].find((t4) => this.testPrecision(e4, t4)), e4.getExtension("WEBGL_lose_context").loseContext(), a("log", "WebGL: max texture size ".concat(this.maxTextureSize)));
  }
  isSupported(t3) {
    return !!this.maxTextureSize && this.maxTextureSize >= t3;
  }
};
var d = {};
var g;
var p = () => g || (g = {
  document,
  window,
  isTouchSupported: "ontouchstart" in window || "ontouchstart" in document || window && window.navigator && window.navigator.maxTouchPoints > 0,
  WebGLProbe: new u(),
  dispose() {
  },
  copyPasteData: d
});
var m = () => p().document;
var v = () => p().window;
var y = () => {
  var t3;
  return Math.max(null !== (t3 = o.devicePixelRatio) && void 0 !== t3 ? t3 : v().devicePixelRatio, 1);
};
var _ = new class {
  constructor() {
    t(this, "charWidthsCache", {}), t(this, "boundsOfCurveCache", {});
  }
  getFontCache(t3) {
    let { fontFamily: e4, fontStyle: s3, fontWeight: i3 } = t3;
    e4 = e4.toLowerCase(), this.charWidthsCache[e4] || (this.charWidthsCache[e4] = {});
    const r3 = this.charWidthsCache[e4], n3 = "".concat(s3.toLowerCase(), "_").concat((i3 + "").toLowerCase());
    return r3[n3] || (r3[n3] = {}), r3[n3];
  }
  clearFontCache(t3) {
    (t3 = (t3 || "").toLowerCase()) ? this.charWidthsCache[t3] && delete this.charWidthsCache[t3] : this.charWidthsCache = {};
  }
  limitDimsByArea(t3) {
    const { perfLimitSizeTotal: e4 } = o, s3 = Math.sqrt(e4 * t3);
    return [
      Math.floor(s3),
      Math.floor(e4 / s3)
    ];
  }
}();
var x = "6.7.1";
function C() {
}
var b = Math.PI / 2;
var S = 2 * Math.PI;
var w = Math.PI / 180;
var T = Object.freeze([
  1,
  0,
  0,
  1,
  0,
  0
]);
var O = 16;
var k = 0.4477152502;
var D = "center";
var M = "left";
var P = "top";
var E = "bottom";
var A = "right";
var j = "none";
var F = /\r?\n/;
var L = "moving";
var R = "scaling";
var B = "rotating";
var I = "rotate";
var X = "skewing";
var W = "resizing";
var Y = "modifyPoly";
var V = "modifyPath";
var G = "changed";
var z = "scale";
var H = "scaleX";
var N = "scaleY";
var U = "skewX";
var q = "skewY";
var K = "fill";
var J = "stroke";
var Q = "modified";
var Z = "json";
var $ = "svg";
var tt = new class {
  constructor() {
    this[Z] = /* @__PURE__ */ new Map(), this[$] = /* @__PURE__ */ new Map();
  }
  has(t3) {
    return this[Z].has(t3);
  }
  getClass(t3) {
    const e4 = this[Z].get(t3);
    if (!e4) throw new h("No class registered for ".concat(t3));
    return e4;
  }
  setClass(t3, e4) {
    e4 ? this[Z].set(e4, t3) : (this[Z].set(t3.type, t3), this[Z].set(t3.type.toLowerCase(), t3));
  }
  getSVGClass(t3) {
    return this[$].get(t3);
  }
  setSVGClass(t3, e4) {
    this[$].set(null != e4 ? e4 : t3.type.toLowerCase(), t3);
  }
}();
var et = new class extends Array {
  remove(t3) {
    const e4 = this.indexOf(t3);
    e4 > -1 && this.splice(e4, 1);
  }
  cancelAll() {
    const t3 = this.splice(0);
    return t3.forEach((t4) => t4.abort()), t3;
  }
  cancelByCanvas(t3) {
    if (!t3) return [];
    const e4 = this.filter((e5) => {
      var s3;
      return e5.target === t3 || "object" == typeof e5.target && (null === (s3 = e5.target) || void 0 === s3 ? void 0 : s3.canvas) === t3;
    });
    return e4.forEach((t4) => t4.abort()), e4;
  }
  cancelByTarget(t3) {
    if (!t3) return [];
    const e4 = this.filter((e5) => e5.target === t3);
    return e4.forEach((t4) => t4.abort()), e4;
  }
}();
var st = class {
  constructor() {
    t(this, "__eventListeners", {});
  }
  on(t3, e4) {
    if (this.__eventListeners || (this.__eventListeners = {}), "object" == typeof t3) return Object.entries(t3).forEach((t4) => {
      let [e5, s3] = t4;
      this.on(e5, s3);
    }), () => this.off(t3);
    if (e4) {
      const s3 = t3;
      return this.__eventListeners[s3] || (this.__eventListeners[s3] = []), this.__eventListeners[s3].push(e4), () => this.off(s3, e4);
    }
    return () => false;
  }
  once(t3, e4) {
    if ("object" == typeof t3) {
      const e5 = [];
      return Object.entries(t3).forEach((t4) => {
        let [s3, i3] = t4;
        e5.push(this.once(s3, i3));
      }), () => e5.forEach((t4) => t4());
    }
    if (e4) {
      const s3 = this.on(t3, function() {
        for (var t4 = arguments.length, i3 = new Array(t4), r3 = 0; r3 < t4; r3++) i3[r3] = arguments[r3];
        e4.call(this, ...i3), s3();
      });
      return s3;
    }
    return () => false;
  }
  _removeEventListener(t3, e4) {
    if (this.__eventListeners[t3]) if (e4) {
      const s3 = this.__eventListeners[t3], i3 = s3.indexOf(e4);
      i3 > -1 && s3.splice(i3, 1);
    } else this.__eventListeners[t3] = [];
  }
  off(t3, e4) {
    if (this.__eventListeners) if (void 0 === t3) for (const t4 in this.__eventListeners) this._removeEventListener(t4);
    else "object" == typeof t3 ? Object.entries(t3).forEach((t4) => {
      let [e5, s3] = t4;
      this._removeEventListener(e5, s3);
    }) : this._removeEventListener(t3, e4);
  }
  fire(t3, e4) {
    var s3;
    if (!this.__eventListeners) return;
    const i3 = null === (s3 = this.__eventListeners[t3]) || void 0 === s3 ? void 0 : s3.concat();
    if (i3) for (let t4 = 0; t4 < i3.length; t4++) i3[t4].call(this, e4 || {});
  }
};
var it = (t3, e4) => {
  const s3 = t3.indexOf(e4);
  return -1 !== s3 && t3.splice(s3, 1), t3;
};
var rt = (t3) => {
  if (0 === t3) return 1;
  switch (Math.abs(t3) / b) {
    case 1:
    case 3:
      return 0;
    case 2:
      return -1;
  }
  return Math.cos(t3);
};
var nt = (t3) => {
  if (0 === t3) return 0;
  const e4 = t3 / b, s3 = Math.sign(t3);
  switch (e4) {
    case 1:
      return s3;
    case 2:
      return 0;
    case 3:
      return -s3;
  }
  return Math.sin(t3);
};
var ot = class _ot {
  constructor() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    "object" == typeof t3 ? (this.x = t3.x, this.y = t3.y) : (this.x = t3, this.y = e4);
  }
  add(t3) {
    return new _ot(this.x + t3.x, this.y + t3.y);
  }
  addEquals(t3) {
    return this.x += t3.x, this.y += t3.y, this;
  }
  scalarAdd(t3) {
    return new _ot(this.x + t3, this.y + t3);
  }
  scalarAddEquals(t3) {
    return this.x += t3, this.y += t3, this;
  }
  subtract(t3) {
    return new _ot(this.x - t3.x, this.y - t3.y);
  }
  subtractEquals(t3) {
    return this.x -= t3.x, this.y -= t3.y, this;
  }
  scalarSubtract(t3) {
    return new _ot(this.x - t3, this.y - t3);
  }
  scalarSubtractEquals(t3) {
    return this.x -= t3, this.y -= t3, this;
  }
  multiply(t3) {
    return new _ot(this.x * t3.x, this.y * t3.y);
  }
  scalarMultiply(t3) {
    return new _ot(this.x * t3, this.y * t3);
  }
  scalarMultiplyEquals(t3) {
    return this.x *= t3, this.y *= t3, this;
  }
  divide(t3) {
    return new _ot(this.x / t3.x, this.y / t3.y);
  }
  scalarDivide(t3) {
    return new _ot(this.x / t3, this.y / t3);
  }
  scalarDivideEquals(t3) {
    return this.x /= t3, this.y /= t3, this;
  }
  eq(t3) {
    return this.x === t3.x && this.y === t3.y;
  }
  lt(t3) {
    return this.x < t3.x && this.y < t3.y;
  }
  lte(t3) {
    return this.x <= t3.x && this.y <= t3.y;
  }
  gt(t3) {
    return this.x > t3.x && this.y > t3.y;
  }
  gte(t3) {
    return this.x >= t3.x && this.y >= t3.y;
  }
  lerp(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.5;
    return e4 = Math.max(Math.min(1, e4), 0), new _ot(this.x + (t3.x - this.x) * e4, this.y + (t3.y - this.y) * e4);
  }
  distanceFrom(t3) {
    const e4 = this.x - t3.x, s3 = this.y - t3.y;
    return Math.sqrt(e4 * e4 + s3 * s3);
  }
  midPointFrom(t3) {
    return this.lerp(t3);
  }
  min(t3) {
    return new _ot(Math.min(this.x, t3.x), Math.min(this.y, t3.y));
  }
  max(t3) {
    return new _ot(Math.max(this.x, t3.x), Math.max(this.y, t3.y));
  }
  toString() {
    return "".concat(this.x, ",").concat(this.y);
  }
  setXY(t3, e4) {
    return this.x = t3, this.y = e4, this;
  }
  setX(t3) {
    return this.x = t3, this;
  }
  setY(t3) {
    return this.y = t3, this;
  }
  setFromPoint(t3) {
    return this.x = t3.x, this.y = t3.y, this;
  }
  swap(t3) {
    const e4 = this.x, s3 = this.y;
    this.x = t3.x, this.y = t3.y, t3.x = e4, t3.y = s3;
  }
  clone() {
    return new _ot(this.x, this.y);
  }
  rotate(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : at;
    const s3 = nt(t3), i3 = rt(t3), r3 = this.subtract(e4);
    return new _ot(r3.x * i3 - r3.y * s3, r3.x * s3 + r3.y * i3).add(e4);
  }
  transform(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return new _ot(t3[0] * this.x + t3[2] * this.y + (e4 ? 0 : t3[4]), t3[1] * this.x + t3[3] * this.y + (e4 ? 0 : t3[5]));
  }
};
var at = new ot(0, 0);
var ht = (t3) => !!t3 && Array.isArray(t3._objects);
function ct(e4) {
  class s3 extends e4 {
    constructor() {
      super(...arguments), t(this, "_objects", []);
    }
    _onObjectAdded(t3) {
    }
    _onObjectRemoved(t3) {
    }
    _onStackOrderChanged(t3) {
    }
    add() {
      for (var t3 = arguments.length, e5 = new Array(t3), s4 = 0; s4 < t3; s4++) e5[s4] = arguments[s4];
      const i3 = this._objects.push(...e5);
      return e5.forEach((t4) => this._onObjectAdded(t4)), i3;
    }
    insertAt(t3) {
      for (var e5 = arguments.length, s4 = new Array(e5 > 1 ? e5 - 1 : 0), i3 = 1; i3 < e5; i3++) s4[i3 - 1] = arguments[i3];
      return this._objects.splice(t3, 0, ...s4), s4.forEach((t4) => this._onObjectAdded(t4)), this._objects.length;
    }
    remove() {
      const t3 = this._objects, e5 = [];
      for (var s4 = arguments.length, i3 = new Array(s4), r3 = 0; r3 < s4; r3++) i3[r3] = arguments[r3];
      return i3.forEach((s5) => {
        const i4 = t3.indexOf(s5);
        -1 !== i4 && (t3.splice(i4, 1), e5.push(s5), this._onObjectRemoved(s5));
      }), e5;
    }
    forEachObject(t3) {
      this.getObjects().forEach((e5, s4, i3) => t3(e5, s4, i3));
    }
    getObjects() {
      for (var t3 = arguments.length, e5 = new Array(t3), s4 = 0; s4 < t3; s4++) e5[s4] = arguments[s4];
      return 0 === e5.length ? [
        ...this._objects
      ] : this._objects.filter((t4) => t4.isType(...e5));
    }
    item(t3) {
      return this._objects[t3];
    }
    isEmpty() {
      return 0 === this._objects.length;
    }
    size() {
      return this._objects.length;
    }
    contains(t3, e5) {
      return !!this._objects.includes(t3) || !!e5 && this._objects.some((e6) => e6 instanceof s3 && e6.contains(t3, true));
    }
    complexity() {
      return this._objects.reduce((t3, e5) => t3 += e5.complexity ? e5.complexity() : 0, 0);
    }
    sendObjectToBack(t3) {
      return !(!t3 || t3 === this._objects[0]) && (it(this._objects, t3), this._objects.unshift(t3), this._onStackOrderChanged(t3), true);
    }
    bringObjectToFront(t3) {
      return !(!t3 || t3 === this._objects[this._objects.length - 1]) && (it(this._objects, t3), this._objects.push(t3), this._onStackOrderChanged(t3), true);
    }
    sendObjectBackwards(t3, e5) {
      if (!t3) return false;
      const s4 = this._objects.indexOf(t3);
      if (0 !== s4) {
        const i3 = this.findNewLowerIndex(t3, s4, e5);
        return it(this._objects, t3), this._objects.splice(i3, 0, t3), this._onStackOrderChanged(t3), true;
      }
      return false;
    }
    bringObjectForward(t3, e5) {
      if (!t3) return false;
      const s4 = this._objects.indexOf(t3);
      if (s4 !== this._objects.length - 1) {
        const i3 = this.findNewUpperIndex(t3, s4, e5);
        return it(this._objects, t3), this._objects.splice(i3, 0, t3), this._onStackOrderChanged(t3), true;
      }
      return false;
    }
    moveObjectTo(t3, e5) {
      return t3 !== this._objects[e5] && (it(this._objects, t3), this._objects.splice(e5, 0, t3), this._onStackOrderChanged(t3), true);
    }
    findNewLowerIndex(t3, e5, s4) {
      let i3;
      if (s4) {
        i3 = e5;
        for (let s5 = e5 - 1; s5 >= 0; --s5) if (t3.isOverlapping(this._objects[s5])) {
          i3 = s5;
          break;
        }
      } else i3 = e5 - 1;
      return i3;
    }
    findNewUpperIndex(t3, e5, s4) {
      let i3;
      if (s4) {
        i3 = e5;
        for (let s5 = e5 + 1; s5 < this._objects.length; ++s5) if (t3.isOverlapping(this._objects[s5])) {
          i3 = s5;
          break;
        }
      } else i3 = e5 + 1;
      return i3;
    }
    collectObjects(t3) {
      let { left: e5, top: s4, width: i3, height: r3 } = t3, { includeIntersecting: n3 = true } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const o3 = [], a3 = new ot(e5, s4), h3 = a3.add(new ot(i3, r3));
      for (let t4 = this._objects.length - 1; t4 >= 0; t4--) {
        const e6 = this._objects[t4];
        e6.selectable && e6.visible && (n3 && e6.intersectsWithRect(a3, h3) || e6.isContainedWithinRect(a3, h3) || n3 && e6.containsPoint(a3) || n3 && e6.containsPoint(h3)) && o3.push(e6);
      }
      return o3;
    }
  }
  return s3;
}
var lt = class extends st {
  _setOptions() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    for (const e4 in t3) this.set(e4, t3[e4]);
  }
  _setObject(t3) {
    for (const e4 in t3) this._set(e4, t3[e4]);
  }
  set(t3, e4) {
    return "object" == typeof t3 ? this._setObject(t3) : this._set(t3, e4), this;
  }
  _set(t3, e4) {
    this[t3] = e4;
  }
  toggle(t3) {
    const e4 = this.get(t3);
    return "boolean" == typeof e4 && this.set(t3, !e4), this;
  }
  get(t3) {
    return this[t3];
  }
};
function ut(t3) {
  return v().requestAnimationFrame(t3);
}
function dt(t3) {
  return v().cancelAnimationFrame(t3);
}
var gt = 0;
var ft = () => gt++;
var pt = () => {
  const t3 = m().createElement("canvas");
  if (!t3 || void 0 === t3.getContext) throw new h("Failed to create `canvas` element");
  return t3;
};
var mt = () => m().createElement("img");
var vt = (t3) => {
  const e4 = pt();
  return e4.width = t3.width, e4.height = t3.height, e4;
};
var yt = (t3, e4, s3) => t3.toDataURL("image/".concat(e4), s3);
var _t = (t3, e4, s3) => new Promise((i3, r3) => {
  t3.toBlob(i3, "image/".concat(e4), s3);
});
var xt = (t3) => t3 * w;
var Ct = (t3) => t3 / w;
var bt = (t3) => t3.every((t4, e4) => t4 === T[e4]);
var St = (t3, e4, s3) => new ot(t3).transform(e4, s3);
var wt = (t3) => {
  const e4 = 1 / (t3[0] * t3[3] - t3[1] * t3[2]), s3 = [
    e4 * t3[3],
    -e4 * t3[1],
    -e4 * t3[2],
    e4 * t3[0],
    0,
    0
  ], { x: i3, y: r3 } = new ot(t3[4], t3[5]).transform(s3, true);
  return s3[4] = -i3, s3[5] = -r3, s3;
};
var Tt = (t3, e4, s3) => [
  t3[0] * e4[0] + t3[2] * e4[1],
  t3[1] * e4[0] + t3[3] * e4[1],
  t3[0] * e4[2] + t3[2] * e4[3],
  t3[1] * e4[2] + t3[3] * e4[3],
  s3 ? 0 : t3[0] * e4[4] + t3[2] * e4[5] + t3[4],
  s3 ? 0 : t3[1] * e4[4] + t3[3] * e4[5] + t3[5]
];
var Ot = (t3, e4) => t3.reduceRight((t4, s3) => s3 && t4 ? Tt(s3, t4, e4) : s3 || t4, void 0) || T.concat();
var kt = (t3) => {
  let [e4, s3] = t3;
  return Math.atan2(s3, e4);
};
var Dt = (t3) => {
  const e4 = kt(t3), s3 = Math.pow(t3[0], 2) + Math.pow(t3[1], 2), i3 = Math.sqrt(s3), r3 = (t3[0] * t3[3] - t3[2] * t3[1]) / i3, n3 = Math.atan2(t3[0] * t3[2] + t3[1] * t3[3], s3);
  return {
    angle: Ct(e4),
    scaleX: i3,
    scaleY: r3,
    skewX: Ct(n3),
    skewY: 0,
    translateX: t3[4] || 0,
    translateY: t3[5] || 0
  };
};
var Mt = function(t3) {
  return [
    1,
    0,
    0,
    1,
    t3,
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
  ];
};
function Pt() {
  let { angle: t3 = 0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, { x: e4 = 0, y: s3 = 0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const i3 = xt(t3), r3 = rt(i3), n3 = nt(i3);
  return [
    r3,
    n3,
    -n3,
    r3,
    e4 ? e4 - (r3 * e4 - n3 * s3) : 0,
    s3 ? s3 - (n3 * e4 + r3 * s3) : 0
  ];
}
var Et = function(t3) {
  return [
    t3,
    0,
    0,
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t3,
    0,
    0
  ];
};
var At = (t3) => Math.tan(xt(t3));
var jt = (t3) => [
  1,
  0,
  At(t3),
  1,
  0,
  0
];
var Ft = (t3) => [
  1,
  At(t3),
  0,
  1,
  0,
  0
];
var Lt = (t3) => {
  let { scaleX: e4 = 1, scaleY: s3 = 1, flipX: i3 = false, flipY: r3 = false, skewX: n3 = 0, skewY: o3 = 0 } = t3, a3 = Et(i3 ? -e4 : e4, r3 ? -s3 : s3);
  return n3 && (a3 = Tt(a3, jt(n3), true)), o3 && (a3 = Tt(a3, Ft(o3), true)), a3;
};
var Rt = (t3) => {
  const { translateX: e4 = 0, translateY: s3 = 0, angle: i3 = 0 } = t3;
  let r3 = Mt(e4, s3);
  i3 && (r3 = Tt(r3, Pt({
    angle: i3
  })));
  const n3 = Lt(t3);
  return bt(n3) || (r3 = Tt(r3, n3)), r3;
};
var Bt = function(t3) {
  let { signal: e4, crossOrigin: s3 = null } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise(function(i3, r3) {
    if (e4 && e4.aborted) return r3(new c("loadImage"));
    const n3 = mt();
    let o3;
    e4 && (o3 = function(t4) {
      n3.src = "", r3(t4);
    }, e4.addEventListener("abort", o3, {
      once: true
    }));
    const a3 = function() {
      n3.onload = n3.onerror = null, o3 && (null == e4 || e4.removeEventListener("abort", o3)), i3(n3);
    };
    t3 ? (n3.onload = a3, n3.onerror = function() {
      o3 && (null == e4 || e4.removeEventListener("abort", o3)), r3(new h("Error loading ".concat(n3.src)));
    }, s3 && (n3.crossOrigin = s3), n3.src = t3) : a3();
  });
};
var It = function(t3) {
  let { signal: e4, reviver: s3 = C } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise((i3, r3) => {
    const n3 = [];
    e4 && e4.addEventListener("abort", r3, {
      once: true
    }), Promise.all(t3.map((t4) => tt.getClass(t4.type).fromObject(t4, {
      signal: e4
    }).then((e5) => (s3(t4, e5), n3.push(e5), e5)))).then(i3).catch((t4) => {
      n3.forEach((t5) => {
        t5.dispose && t5.dispose();
      }), r3(t4);
    }).finally(() => {
      e4 && e4.removeEventListener("abort", r3);
    });
  });
};
var Xt = function(t3) {
  let { signal: e4 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise((s3, i3) => {
    const r3 = [];
    e4 && e4.addEventListener("abort", i3, {
      once: true
    });
    const n3 = Object.values(t3).map((t4) => t4 && t4.type && tt.has(t4.type) ? It([
      t4
    ], {
      signal: e4
    }).then((t5) => {
      let [e5] = t5;
      return r3.push(e5), e5;
    }) : t4), o3 = Object.keys(t3);
    Promise.all(n3).then((t4) => t4.reduce((t5, e5, s4) => (t5[o3[s4]] = e5, t5), {})).then(s3).catch((t4) => {
      r3.forEach((t5) => {
        t5.dispose && t5.dispose();
      }), i3(t4);
    }).finally(() => {
      e4 && e4.removeEventListener("abort", i3);
    });
  });
};
var Wt = function(t3) {
  return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).reduce((e4, s3) => (s3 in t3 && (e4[s3] = t3[s3]), e4), {});
};
var Yt = (t3, e4) => Object.keys(t3).reduce((s3, i3) => (e4(t3[i3], i3, t3) && (s3[i3] = t3[i3]), s3), {});
var Vt = (t3, e4) => parseFloat(Number(t3).toFixed(e4));
var Gt = (t3) => "matrix(" + t3.map((t4) => Vt(t4, o.NUM_FRACTION_DIGITS)).join(" ") + ")";
var zt = (t3) => !!t3 && void 0 !== t3.toLive;
var Ht = (t3) => !!t3 && "function" == typeof t3.toObject;
var Nt = (t3) => !!t3 && void 0 !== t3.offsetX && "source" in t3;
var Ut = (t3) => !!t3 && "multiSelectionStacking" in t3;
function qt(t3) {
  const e4 = t3 && Kt(t3);
  let s3 = 0, i3 = 0;
  if (!t3 || !e4) return {
    left: s3,
    top: i3
  };
  let r3 = t3;
  const n3 = e4.documentElement, o3 = e4.body || {
    scrollLeft: 0,
    scrollTop: 0
  };
  for (; r3 && (r3.parentNode || r3.host) && (r3 = r3.parentNode || r3.host, r3 === e4 ? (s3 = o3.scrollLeft || n3.scrollLeft || 0, i3 = o3.scrollTop || n3.scrollTop || 0) : (s3 += r3.scrollLeft || 0, i3 += r3.scrollTop || 0), 1 !== r3.nodeType || "fixed" !== r3.style.position); ) ;
  return {
    left: s3,
    top: i3
  };
}
var Kt = (t3) => t3.ownerDocument || null;
var Jt = (t3) => {
  var e4;
  return (null === (e4 = t3.ownerDocument) || void 0 === e4 ? void 0 : e4.defaultView) || null;
};
var Qt = function(t3, e4, s3) {
  let { width: i3, height: r3 } = s3, n3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
  t3.width = i3, t3.height = r3, n3 > 1 && (t3.setAttribute("width", (i3 * n3).toString()), t3.setAttribute("height", (r3 * n3).toString()), e4.scale(n3, n3));
};
var Zt = (t3, e4) => {
  let { width: s3, height: i3 } = e4;
  s3 && (t3.style.width = "number" == typeof s3 ? "".concat(s3, "px") : s3), i3 && (t3.style.height = "number" == typeof i3 ? "".concat(i3, "px") : i3);
};
function $t(t3) {
  return void 0 !== t3.onselectstart && (t3.onselectstart = () => false), t3.style.userSelect = j, t3;
}
var te = class {
  constructor(e4) {
    t(this, "_originalCanvasStyle", void 0), t(this, "lower", void 0);
    const s3 = this.createLowerCanvas(e4);
    this.lower = {
      el: s3,
      ctx: s3.getContext("2d")
    };
  }
  createLowerCanvas(t3) {
    const e4 = (s3 = t3) && void 0 !== s3.getContext ? t3 : t3 && m().getElementById(t3) || pt();
    var s3;
    if (e4.hasAttribute("data-fabric")) throw new h("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");
    return this._originalCanvasStyle = e4.style.cssText, e4.setAttribute("data-fabric", "main"), e4.classList.add("lower-canvas"), e4;
  }
  cleanupDOM(t3) {
    let { width: e4, height: s3 } = t3;
    const { el: i3 } = this.lower;
    i3.classList.remove("lower-canvas"), i3.removeAttribute("data-fabric"), i3.setAttribute("width", "".concat(e4)), i3.setAttribute("height", "".concat(s3)), i3.style.cssText = this._originalCanvasStyle || "", this._originalCanvasStyle = void 0;
  }
  setDimensions(t3, e4) {
    const { el: s3, ctx: i3 } = this.lower;
    Qt(s3, i3, t3, e4);
  }
  setCSSDimensions(t3) {
    Zt(this.lower.el, t3);
  }
  calcOffset() {
    return function(t3) {
      var e4;
      const s3 = t3 && Kt(t3), i3 = {
        left: 0,
        top: 0
      };
      if (!s3) return i3;
      const r3 = (null === (e4 = Jt(t3)) || void 0 === e4 ? void 0 : e4.getComputedStyle(t3, null)) || {};
      i3.left += parseInt(r3.borderLeftWidth, 10) || 0, i3.top += parseInt(r3.borderTopWidth, 10) || 0, i3.left += parseInt(r3.paddingLeft, 10) || 0, i3.top += parseInt(r3.paddingTop, 10) || 0;
      let n3 = {
        left: 0,
        top: 0
      };
      const o3 = s3.documentElement;
      void 0 !== t3.getBoundingClientRect && (n3 = t3.getBoundingClientRect());
      const a3 = qt(t3);
      return {
        left: n3.left + a3.left - (o3.clientLeft || 0) + i3.left,
        top: n3.top + a3.top - (o3.clientTop || 0) + i3.top
      };
    }(this.lower.el);
  }
  dispose() {
    p().dispose(this.lower.el), delete this.lower;
  }
};
var ee = {
  backgroundVpt: true,
  backgroundColor: "",
  overlayVpt: true,
  overlayColor: "",
  includeDefaultValues: true,
  svgViewportTransformation: true,
  renderOnAddRemove: true,
  skipOffscreen: true,
  enableRetinaScaling: true,
  imageSmoothingEnabled: true,
  controlsAboveOverlay: false,
  allowTouchScrolling: false,
  viewportTransform: [
    ...T
  ]
};
var se = class _se extends ct(lt) {
  get lowerCanvasEl() {
    var t3;
    return null === (t3 = this.elements.lower) || void 0 === t3 ? void 0 : t3.el;
  }
  get contextContainer() {
    var t3;
    return null === (t3 = this.elements.lower) || void 0 === t3 ? void 0 : t3.ctx;
  }
  static getDefaults() {
    return _se.ownDefaults;
  }
  constructor(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, this.constructor.getDefaults()), this.set(e4), this.initElements(t3), this._setDimensionsImpl({
      width: this.width || this.elements.lower.el.width || 0,
      height: this.height || this.elements.lower.el.height || 0
    }), this.skipControlsDrawing = false, this.viewportTransform = [
      ...this.viewportTransform
    ], this.calcViewportBoundaries();
  }
  initElements(t3) {
    this.elements = new te(t3);
  }
  add() {
    const t3 = super.add(...arguments);
    return arguments.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t3;
  }
  insertAt(t3) {
    for (var e4 = arguments.length, s3 = new Array(e4 > 1 ? e4 - 1 : 0), i3 = 1; i3 < e4; i3++) s3[i3 - 1] = arguments[i3];
    const r3 = super.insertAt(t3, ...s3);
    return s3.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), r3;
  }
  remove() {
    const t3 = super.remove(...arguments);
    return t3.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t3;
  }
  _onObjectAdded(t3) {
    t3.canvas && t3.canvas !== this && (a("warn", "Canvas is trying to add an object that belongs to a different canvas.\nResulting to default behavior: removing object from previous canvas and adding to new canvas"), t3.canvas.remove(t3)), t3._set("canvas", this), t3.setCoords(), this.fire("object:added", {
      target: t3
    }), t3.fire("added", {
      target: this
    });
  }
  _onObjectRemoved(t3) {
    t3._set("canvas", void 0), this.fire("object:removed", {
      target: t3
    }), t3.fire("removed", {
      target: this
    });
  }
  _onStackOrderChanged() {
    this.renderOnAddRemove && this.requestRenderAll();
  }
  getRetinaScaling() {
    return this.enableRetinaScaling ? y() : 1;
  }
  calcOffset() {
    return this._offset = this.elements.calcOffset();
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setWidth(t3, e4) {
    return this.setDimensions({
      width: t3
    }, e4);
  }
  setHeight(t3, e4) {
    return this.setDimensions({
      height: t3
    }, e4);
  }
  _setDimensionsImpl(t3) {
    let { cssOnly: e4 = false, backstoreOnly: i3 = false } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!e4) {
      const e5 = s({
        width: this.width,
        height: this.height
      }, t3);
      this.elements.setDimensions(e5, this.getRetinaScaling()), this.hasLostContext = true, this.width = e5.width, this.height = e5.height;
    }
    i3 || this.elements.setCSSDimensions(t3), this.calcOffset();
  }
  setDimensions(t3, e4) {
    this._setDimensionsImpl(t3, e4), e4 && e4.cssOnly || this.requestRenderAll();
  }
  getZoom() {
    return this.viewportTransform[0];
  }
  setViewportTransform(t3) {
    this.viewportTransform = t3, this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll();
  }
  zoomToPoint(t3, e4) {
    const s3 = t3, i3 = [
      ...this.viewportTransform
    ], r3 = St(t3, wt(i3));
    i3[0] = e4, i3[3] = e4;
    const n3 = St(r3, i3);
    i3[4] += s3.x - n3.x, i3[5] += s3.y - n3.y, this.setViewportTransform(i3);
  }
  setZoom(t3) {
    this.zoomToPoint(new ot(0, 0), t3);
  }
  absolutePan(t3) {
    const e4 = [
      ...this.viewportTransform
    ];
    return e4[4] = -t3.x, e4[5] = -t3.y, this.setViewportTransform(e4);
  }
  relativePan(t3) {
    return this.absolutePan(new ot(-t3.x - this.viewportTransform[4], -t3.y - this.viewportTransform[5]));
  }
  getElement() {
    return this.elements.lower.el;
  }
  clearContext(t3) {
    t3.clearRect(0, 0, this.width, this.height);
  }
  getContext() {
    return this.elements.lower.ctx;
  }
  clear() {
    this.remove(...this.getObjects()), this.backgroundImage = void 0, this.overlayImage = void 0, this.backgroundColor = "", this.overlayColor = "", this.clearContext(this.getContext()), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll();
  }
  renderAll() {
    this.cancelRequestedRender(), this.destroyed || this.renderCanvas(this.getContext(), this._objects);
  }
  renderAndReset() {
    this.nextRenderHandle = 0, this.renderAll();
  }
  requestRenderAll() {
    this.nextRenderHandle || this.disposed || this.destroyed || (this.nextRenderHandle = ut(() => this.renderAndReset()));
  }
  calcViewportBoundaries() {
    const t3 = this.width, e4 = this.height, s3 = wt(this.viewportTransform), i3 = St({
      x: 0,
      y: 0
    }, s3), r3 = St({
      x: t3,
      y: e4
    }, s3), n3 = i3.min(r3), o3 = i3.max(r3);
    return this.vptCoords = {
      tl: n3,
      tr: new ot(o3.x, n3.y),
      bl: new ot(n3.x, o3.y),
      br: o3
    };
  }
  cancelRequestedRender() {
    this.nextRenderHandle && (dt(this.nextRenderHandle), this.nextRenderHandle = 0);
  }
  drawControls(t3) {
  }
  renderCanvas(t3, e4) {
    if (this.destroyed) return;
    const s3 = this.viewportTransform, i3 = this.clipPath;
    this.calcViewportBoundaries(), this.clearContext(t3), t3.imageSmoothingEnabled = this.imageSmoothingEnabled, t3.patternQuality = "best", this.fire("before:render", {
      ctx: t3
    }), this._renderBackground(t3), t3.save(), t3.transform(s3[0], s3[1], s3[2], s3[3], s3[4], s3[5]), this._renderObjects(t3, e4), t3.restore(), this.controlsAboveOverlay || this.skipControlsDrawing || this.drawControls(t3), i3 && (i3._set("canvas", this), i3.shouldCache(), i3._transformDone = true, i3.renderCache({
      forClipping: true
    }), this.drawClipPathOnCanvas(t3, i3)), this._renderOverlay(t3), this.controlsAboveOverlay && !this.skipControlsDrawing && this.drawControls(t3), this.fire("after:render", {
      ctx: t3
    }), this.__cleanupTask && (this.__cleanupTask(), this.__cleanupTask = void 0);
  }
  drawClipPathOnCanvas(t3, e4) {
    const s3 = this.viewportTransform;
    t3.save(), t3.transform(...s3), t3.globalCompositeOperation = "destination-in", e4.transform(t3), t3.scale(1 / e4.zoomX, 1 / e4.zoomY), t3.drawImage(e4._cacheCanvas, -e4.cacheTranslationX, -e4.cacheTranslationY), t3.restore();
  }
  _renderObjects(t3, e4) {
    for (let s3 = 0, i3 = e4.length; s3 < i3; ++s3) e4[s3] && e4[s3].render(t3);
  }
  _renderBackgroundOrOverlay(t3, e4) {
    const s3 = this["".concat(e4, "Color")], i3 = this["".concat(e4, "Image")], r3 = this.viewportTransform, n3 = this["".concat(e4, "Vpt")];
    if (!s3 && !i3) return;
    const o3 = zt(s3);
    if (s3) {
      if (t3.save(), t3.beginPath(), t3.moveTo(0, 0), t3.lineTo(this.width, 0), t3.lineTo(this.width, this.height), t3.lineTo(0, this.height), t3.closePath(), t3.fillStyle = o3 ? s3.toLive(t3) : s3, n3 && t3.transform(...r3), o3) {
        t3.transform(1, 0, 0, 1, s3.offsetX || 0, s3.offsetY || 0);
        const e5 = s3.gradientTransform || s3.patternTransform;
        e5 && t3.transform(...e5);
      }
      t3.fill(), t3.restore();
    }
    if (i3) {
      t3.save();
      const { skipOffscreen: e5 } = this;
      this.skipOffscreen = n3, n3 && t3.transform(...r3), i3.render(t3), this.skipOffscreen = e5, t3.restore();
    }
  }
  _renderBackground(t3) {
    this._renderBackgroundOrOverlay(t3, "background");
  }
  _renderOverlay(t3) {
    this._renderBackgroundOrOverlay(t3, "overlay");
  }
  getCenter() {
    return {
      top: this.height / 2,
      left: this.width / 2
    };
  }
  getCenterPoint() {
    return new ot(this.width / 2, this.height / 2);
  }
  centerObjectH(t3) {
    return this._centerObject(t3, new ot(this.getCenterPoint().x, t3.getCenterPoint().y));
  }
  centerObjectV(t3) {
    return this._centerObject(t3, new ot(t3.getCenterPoint().x, this.getCenterPoint().y));
  }
  centerObject(t3) {
    return this._centerObject(t3, this.getCenterPoint());
  }
  viewportCenterObject(t3) {
    return this._centerObject(t3, this.getVpCenter());
  }
  viewportCenterObjectH(t3) {
    return this._centerObject(t3, new ot(this.getVpCenter().x, t3.getCenterPoint().y));
  }
  viewportCenterObjectV(t3) {
    return this._centerObject(t3, new ot(t3.getCenterPoint().x, this.getVpCenter().y));
  }
  getVpCenter() {
    return St(this.getCenterPoint(), wt(this.viewportTransform));
  }
  _centerObject(t3, e4) {
    t3.setXY(e4, D, D), t3.setCoords(), this.renderOnAddRemove && this.requestRenderAll();
  }
  toDatalessJSON(t3) {
    return this.toDatalessObject(t3);
  }
  toObject(t3) {
    return this._toObjectMethod("toObject", t3);
  }
  toJSON() {
    return this.toObject();
  }
  toDatalessObject(t3) {
    return this._toObjectMethod("toDatalessObject", t3);
  }
  _toObjectMethod(t3, e4) {
    const i3 = this.clipPath, r3 = i3 && !i3.excludeFromExport ? this._toObject(i3, t3, e4) : null;
    return s(s(s({
      version: x
    }, Wt(this, e4)), {}, {
      objects: this._objects.filter((t4) => !t4.excludeFromExport).map((s3) => this._toObject(s3, t3, e4))
    }, this.__serializeBgOverlay(t3, e4)), r3 ? {
      clipPath: r3
    } : null);
  }
  _toObject(t3, e4, s3) {
    let i3;
    this.includeDefaultValues || (i3 = t3.includeDefaultValues, t3.includeDefaultValues = false);
    const r3 = t3[e4](s3);
    return this.includeDefaultValues || (t3.includeDefaultValues = !!i3), r3;
  }
  __serializeBgOverlay(t3, e4) {
    const s3 = {}, i3 = this.backgroundImage, r3 = this.overlayImage, n3 = this.backgroundColor, o3 = this.overlayColor;
    return zt(n3) ? n3.excludeFromExport || (s3.background = n3.toObject(e4)) : n3 && (s3.background = n3), zt(o3) ? o3.excludeFromExport || (s3.overlay = o3.toObject(e4)) : o3 && (s3.overlay = o3), i3 && !i3.excludeFromExport && (s3.backgroundImage = this._toObject(i3, t3, e4)), r3 && !r3.excludeFromExport && (s3.overlayImage = this._toObject(r3, t3, e4)), s3;
  }
  toSVG() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e4 = arguments.length > 1 ? arguments[1] : void 0;
    t3.reviver = e4;
    const s3 = [];
    return this._setSVGPreamble(s3, t3), this._setSVGHeader(s3, t3), this.clipPath && s3.push('<g clip-path="url(#'.concat(this.clipPath.clipPathId, ')" >\n')), this._setSVGBgOverlayColor(s3, "background"), this._setSVGBgOverlayImage(s3, "backgroundImage", e4), this._setSVGObjects(s3, e4), this.clipPath && s3.push("</g>\n"), this._setSVGBgOverlayColor(s3, "overlay"), this._setSVGBgOverlayImage(s3, "overlayImage", e4), s3.push("</svg>"), s3.join("");
  }
  _setSVGPreamble(t3, e4) {
    e4.suppressPreamble || t3.push('<?xml version="1.0" encoding="', e4.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n');
  }
  _setSVGHeader(t3, e4) {
    const s3 = e4.width || "".concat(this.width), i3 = e4.height || "".concat(this.height), r3 = o.NUM_FRACTION_DIGITS, n3 = e4.viewBox;
    let a3;
    if (n3) a3 = 'viewBox="'.concat(n3.x, " ").concat(n3.y, " ").concat(n3.width, " ").concat(n3.height, '" ');
    else if (this.svgViewportTransformation) {
      const t4 = this.viewportTransform;
      a3 = 'viewBox="'.concat(Vt(-t4[4] / t4[0], r3), " ").concat(Vt(-t4[5] / t4[3], r3), " ").concat(Vt(this.width / t4[0], r3), " ").concat(Vt(this.height / t4[3], r3), '" ');
    } else a3 = 'viewBox="0 0 '.concat(this.width, " ").concat(this.height, '" ');
    t3.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', s3, '" ', 'height="', i3, '" ', a3, 'xml:space="preserve">\n', "<desc>Created with Fabric.js ", x, "</desc>\n", "<defs>\n", this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(e4), "</defs>\n");
  }
  createSVGClipPathMarkup(t3) {
    const e4 = this.clipPath;
    return e4 ? (e4.clipPathId = "CLIPPATH_".concat(ft()), '<clipPath id="'.concat(e4.clipPathId, '" >\n').concat(e4.toClipPathSVG(t3.reviver), "</clipPath>\n")) : "";
  }
  createSVGRefElementsMarkup() {
    return [
      "background",
      "overlay"
    ].map((t3) => {
      const e4 = this["".concat(t3, "Color")];
      if (zt(e4)) {
        const s3 = this["".concat(t3, "Vpt")], i3 = this.viewportTransform, r3 = {
          isType: () => false,
          width: this.width / (s3 ? i3[0] : 1),
          height: this.height / (s3 ? i3[3] : 1)
        };
        return e4.toSVG(r3, {
          additionalTransform: s3 ? Gt(i3) : ""
        });
      }
    }).join("");
  }
  createSVGFontFacesMarkup() {
    const t3 = [], e4 = {}, s3 = o.fontPaths;
    this._objects.forEach(function e5(s4) {
      t3.push(s4), ht(s4) && s4._objects.forEach(e5);
    }), t3.forEach((t4) => {
      if (!(i4 = t4) || "function" != typeof i4._renderText) return;
      var i4;
      const { styles: r3, fontFamily: n3 } = t4;
      !e4[n3] && s3[n3] && (e4[n3] = true, r3 && Object.values(r3).forEach((t5) => {
        Object.values(t5).forEach((t6) => {
          let { fontFamily: i5 = "" } = t6;
          !e4[i5] && s3[i5] && (e4[i5] = true);
        });
      }));
    });
    const i3 = Object.keys(e4).map((t4) => "		@font-face {\n			font-family: '".concat(t4, "';\n			src: url('").concat(s3[t4], "');\n		}\n")).join("");
    return i3 ? '	<style type="text/css"><![CDATA[\n'.concat(i3, "]]></style>\n") : "";
  }
  _setSVGObjects(t3, e4) {
    this.forEachObject((s3) => {
      s3.excludeFromExport || this._setSVGObject(t3, s3, e4);
    });
  }
  _setSVGObject(t3, e4, s3) {
    t3.push(e4.toSVG(s3));
  }
  _setSVGBgOverlayImage(t3, e4, s3) {
    const i3 = this[e4];
    i3 && !i3.excludeFromExport && i3.toSVG && t3.push(i3.toSVG(s3));
  }
  _setSVGBgOverlayColor(t3, e4) {
    const s3 = this["".concat(e4, "Color")];
    if (s3) if (zt(s3)) {
      const i3 = s3.repeat || "", r3 = this.width, n3 = this.height, o3 = this["".concat(e4, "Vpt")] ? Gt(wt(this.viewportTransform)) : "";
      t3.push('<rect transform="'.concat(o3, " translate(").concat(r3 / 2, ",").concat(n3 / 2, ')" x="').concat(s3.offsetX - r3 / 2, '" y="').concat(s3.offsetY - n3 / 2, '" width="').concat("repeat-y" !== i3 && "no-repeat" !== i3 || !Nt(s3) ? r3 : s3.source.width, '" height="').concat("repeat-x" !== i3 && "no-repeat" !== i3 || !Nt(s3) ? n3 : s3.source.height, '" fill="url(#SVGID_').concat(s3.id, ')"></rect>\n'));
    } else t3.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', s3, '"', "></rect>\n");
  }
  loadFromJSON(t3, e4) {
    let { signal: s3 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!t3) return Promise.reject(new h("`json` is undefined"));
    const i3 = "string" == typeof t3 ? JSON.parse(t3) : t3, { objects: r3 = [], backgroundImage: n3, background: o3, overlayImage: a3, overlay: c3, clipPath: l3 } = i3, u3 = this.renderOnAddRemove;
    return this.renderOnAddRemove = false, Promise.all([
      It(r3, {
        reviver: e4,
        signal: s3
      }),
      Xt({
        backgroundImage: n3,
        backgroundColor: o3,
        overlayImage: a3,
        overlayColor: c3,
        clipPath: l3
      }, {
        signal: s3
      })
    ]).then((t4) => {
      let [e5, s4] = t4;
      return this.clear(), this.add(...e5), this.set(i3), this.set(s4), this.renderOnAddRemove = u3, this;
    });
  }
  clone(t3) {
    const e4 = this.toObject(t3);
    return this.cloneWithoutData().loadFromJSON(e4);
  }
  cloneWithoutData() {
    const t3 = vt(this);
    return new this.constructor(t3);
  }
  toDataURL() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const { format: e4 = "png", quality: s3 = 1, multiplier: i3 = 1, enableRetinaScaling: r3 = false } = t3, n3 = i3 * (r3 ? this.getRetinaScaling() : 1);
    return yt(this.toCanvasElement(n3, t3), e4, s3);
  }
  toBlob() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const { format: e4 = "png", quality: s3 = 1, multiplier: i3 = 1, enableRetinaScaling: r3 = false } = t3, n3 = i3 * (r3 ? this.getRetinaScaling() : 1);
    return _t(this.toCanvasElement(n3, t3), e4, s3);
  }
  toCanvasElement() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, { width: e4, height: s3, left: i3, top: r3, filter: n3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const o3 = (e4 || this.width) * t3, a3 = (s3 || this.height) * t3, h3 = this.getZoom(), c3 = this.width, l3 = this.height, u3 = this.skipControlsDrawing, d3 = h3 * t3, g3 = this.viewportTransform, f2 = [
      d3,
      0,
      0,
      d3,
      (g3[4] - (i3 || 0)) * t3,
      (g3[5] - (r3 || 0)) * t3
    ], p3 = this.enableRetinaScaling, m3 = vt({
      width: o3,
      height: a3
    }), v3 = n3 ? this._objects.filter((t4) => n3(t4)) : this._objects;
    return this.enableRetinaScaling = false, this.viewportTransform = f2, this.width = o3, this.height = a3, this.skipControlsDrawing = true, this.calcViewportBoundaries(), this.renderCanvas(m3.getContext("2d"), v3), this.viewportTransform = g3, this.width = c3, this.height = l3, this.calcViewportBoundaries(), this.enableRetinaScaling = p3, this.skipControlsDrawing = u3, m3;
  }
  dispose() {
    return !this.disposed && this.elements.cleanupDOM({
      width: this.width,
      height: this.height
    }), et.cancelByCanvas(this), this.disposed = true, new Promise((t3, e4) => {
      const s3 = () => {
        this.destroy(), t3(true);
      };
      s3.kill = e4, this.__cleanupTask && this.__cleanupTask.kill("aborted"), this.destroyed ? t3(false) : this.nextRenderHandle ? this.__cleanupTask = s3 : s3();
    });
  }
  destroy() {
    this.destroyed = true, this.cancelRequestedRender(), this.forEachObject((t3) => t3.dispose()), this._objects = [], this.backgroundImage && this.backgroundImage.dispose(), this.backgroundImage = void 0, this.overlayImage && this.overlayImage.dispose(), this.overlayImage = void 0, this.elements.dispose();
  }
  toString() {
    return "#<Canvas (".concat(this.complexity(), "): { objects: ").concat(this._objects.length, " }>");
  }
};
t(se, "ownDefaults", ee);
var ie = [
  "touchstart",
  "touchmove",
  "touchend"
];
var re = (t3) => {
  const e4 = qt(t3.target), s3 = function(t4) {
    const e5 = t4.changedTouches;
    return e5 && e5[0] ? e5[0] : t4;
  }(t3);
  return new ot(s3.clientX + e4.left, s3.clientY + e4.top);
};
var ne = (t3) => ie.includes(t3.type) || "touch" === t3.pointerType;
var oe = (t3) => {
  t3.preventDefault(), t3.stopPropagation();
};
var ae = (t3) => {
  let e4 = 0, s3 = 0, i3 = 0, r3 = 0;
  for (let n3 = 0, o3 = t3.length; n3 < o3; n3++) {
    const { x: o4, y: a3 } = t3[n3];
    (o4 > i3 || !n3) && (i3 = o4), (o4 < e4 || !n3) && (e4 = o4), (a3 > r3 || !n3) && (r3 = a3), (a3 < s3 || !n3) && (s3 = a3);
  }
  return {
    left: e4,
    top: s3,
    width: i3 - e4,
    height: r3 - s3
  };
};
var he = [
  "translateX",
  "translateY",
  "scaleX",
  "scaleY"
];
var ce = (t3, e4) => le(t3, Tt(e4, t3.calcOwnMatrix()));
var le = (t3, e4) => {
  const s3 = Dt(e4), { translateX: r3, translateY: n3, scaleX: o3, scaleY: a3 } = s3, h3 = i(s3, he), c3 = new ot(r3, n3);
  t3.flipX = false, t3.flipY = false, Object.assign(t3, h3), t3.set({
    scaleX: o3,
    scaleY: a3
  }), t3.setPositionByOrigin(c3, D, D);
};
var ue = (t3) => {
  t3.scaleX = 1, t3.scaleY = 1, t3.skewX = 0, t3.skewY = 0, t3.flipX = false, t3.flipY = false, t3.rotate(0);
};
var de = (t3) => ({
  scaleX: t3.scaleX,
  scaleY: t3.scaleY,
  skewX: t3.skewX,
  skewY: t3.skewY,
  angle: t3.angle,
  left: t3.left,
  flipX: t3.flipX,
  flipY: t3.flipY,
  top: t3.top
});
var ge = (t3, e4, s3) => {
  const i3 = t3 / 2, r3 = e4 / 2, n3 = [
    new ot(-i3, -r3),
    new ot(i3, -r3),
    new ot(-i3, r3),
    new ot(i3, r3)
  ].map((t4) => t4.transform(s3)), o3 = ae(n3);
  return new ot(o3.width, o3.height);
};
var fe = function() {
  let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T;
  return Tt(wt(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T), t3);
};
var pe = function(t3) {
  let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T, s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T;
  return t3.transform(fe(e4, s3));
};
var me = function(t3) {
  let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T, s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T;
  return t3.transform(fe(e4, s3), true);
};
var ve = (t3, e4, s3) => {
  const i3 = fe(e4, s3);
  return le(t3, Tt(i3, t3.calcOwnMatrix())), i3;
};
var ye = (t3, e4) => {
  var i3;
  const { transform: { target: r3 } } = e4;
  null === (i3 = r3.canvas) || void 0 === i3 || i3.fire("object:".concat(t3), s(s({}, e4), {}, {
    target: r3
  })), r3.fire(t3, e4);
};
var _e = {
  left: -0.5,
  top: -0.5,
  center: 0,
  bottom: 0.5,
  right: 0.5
};
var xe = (t3) => "string" == typeof t3 ? _e[t3] : t3 - 0.5;
var Ce = "not-allowed";
function be(t3) {
  return xe(t3.originX) === xe(D) && xe(t3.originY) === xe(D);
}
function Se(t3) {
  return 0.5 - xe(t3);
}
var we = (t3, e4) => t3[e4];
var Te = (t3, e4, s3, i3) => ({
  e: t3,
  transform: e4,
  pointer: new ot(s3, i3)
});
function Oe(t3, e4) {
  const s3 = t3.getTotalAngle() + Ct(Math.atan2(e4.y, e4.x)) + 360;
  return Math.round(s3 % 360 / 45);
}
function ke(t3, e4, s3, i3, r3) {
  var n3;
  let { target: o3, corner: a3 } = t3;
  const h3 = o3.controls[a3], c3 = (null === (n3 = o3.canvas) || void 0 === n3 ? void 0 : n3.getZoom()) || 1, l3 = o3.padding / c3, u3 = function(t4, e5, s4, i4) {
    const r4 = t4.getRelativeCenterPoint(), n4 = void 0 !== s4 && void 0 !== i4 ? t4.translateToGivenOrigin(r4, D, D, s4, i4) : new ot(t4.left, t4.top);
    return (t4.angle ? e5.rotate(-xt(t4.angle), r4) : e5).subtract(n4);
  }(o3, new ot(i3, r3), e4, s3);
  return u3.x >= l3 && (u3.x -= l3), u3.x <= -l3 && (u3.x += l3), u3.y >= l3 && (u3.y -= l3), u3.y <= l3 && (u3.y += l3), u3.x -= h3.offsetX, u3.y -= h3.offsetY, u3;
}
var De = (t3, e4, s3, i3) => {
  const { target: r3, offsetX: n3, offsetY: o3 } = e4, a3 = s3 - n3, h3 = i3 - o3, c3 = !we(r3, "lockMovementX") && r3.left !== a3, l3 = !we(r3, "lockMovementY") && r3.top !== h3;
  return c3 && r3.set(M, a3), l3 && r3.set(P, h3), (c3 || l3) && ye(L, Te(t3, e4, s3, i3)), c3 || l3;
};
var Me = {
  aliceblue: "#F0F8FF",
  antiquewhite: "#FAEBD7",
  aqua: "#0FF",
  aquamarine: "#7FFFD4",
  azure: "#F0FFFF",
  beige: "#F5F5DC",
  bisque: "#FFE4C4",
  black: "#000",
  blanchedalmond: "#FFEBCD",
  blue: "#00F",
  blueviolet: "#8A2BE2",
  brown: "#A52A2A",
  burlywood: "#DEB887",
  cadetblue: "#5F9EA0",
  chartreuse: "#7FFF00",
  chocolate: "#D2691E",
  coral: "#FF7F50",
  cornflowerblue: "#6495ED",
  cornsilk: "#FFF8DC",
  crimson: "#DC143C",
  cyan: "#0FF",
  darkblue: "#00008B",
  darkcyan: "#008B8B",
  darkgoldenrod: "#B8860B",
  darkgray: "#A9A9A9",
  darkgrey: "#A9A9A9",
  darkgreen: "#006400",
  darkkhaki: "#BDB76B",
  darkmagenta: "#8B008B",
  darkolivegreen: "#556B2F",
  darkorange: "#FF8C00",
  darkorchid: "#9932CC",
  darkred: "#8B0000",
  darksalmon: "#E9967A",
  darkseagreen: "#8FBC8F",
  darkslateblue: "#483D8B",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  darkturquoise: "#00CED1",
  darkviolet: "#9400D3",
  deeppink: "#FF1493",
  deepskyblue: "#00BFFF",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1E90FF",
  firebrick: "#B22222",
  floralwhite: "#FFFAF0",
  forestgreen: "#228B22",
  fuchsia: "#F0F",
  gainsboro: "#DCDCDC",
  ghostwhite: "#F8F8FF",
  gold: "#FFD700",
  goldenrod: "#DAA520",
  gray: "#808080",
  grey: "#808080",
  green: "#008000",
  greenyellow: "#ADFF2F",
  honeydew: "#F0FFF0",
  hotpink: "#FF69B4",
  indianred: "#CD5C5C",
  indigo: "#4B0082",
  ivory: "#FFFFF0",
  khaki: "#F0E68C",
  lavender: "#E6E6FA",
  lavenderblush: "#FFF0F5",
  lawngreen: "#7CFC00",
  lemonchiffon: "#FFFACD",
  lightblue: "#ADD8E6",
  lightcoral: "#F08080",
  lightcyan: "#E0FFFF",
  lightgoldenrodyellow: "#FAFAD2",
  lightgray: "#D3D3D3",
  lightgrey: "#D3D3D3",
  lightgreen: "#90EE90",
  lightpink: "#FFB6C1",
  lightsalmon: "#FFA07A",
  lightseagreen: "#20B2AA",
  lightskyblue: "#87CEFA",
  lightslategray: "#789",
  lightslategrey: "#789",
  lightsteelblue: "#B0C4DE",
  lightyellow: "#FFFFE0",
  lime: "#0F0",
  limegreen: "#32CD32",
  linen: "#FAF0E6",
  magenta: "#F0F",
  maroon: "#800000",
  mediumaquamarine: "#66CDAA",
  mediumblue: "#0000CD",
  mediumorchid: "#BA55D3",
  mediumpurple: "#9370DB",
  mediumseagreen: "#3CB371",
  mediumslateblue: "#7B68EE",
  mediumspringgreen: "#00FA9A",
  mediumturquoise: "#48D1CC",
  mediumvioletred: "#C71585",
  midnightblue: "#191970",
  mintcream: "#F5FFFA",
  mistyrose: "#FFE4E1",
  moccasin: "#FFE4B5",
  navajowhite: "#FFDEAD",
  navy: "#000080",
  oldlace: "#FDF5E6",
  olive: "#808000",
  olivedrab: "#6B8E23",
  orange: "#FFA500",
  orangered: "#FF4500",
  orchid: "#DA70D6",
  palegoldenrod: "#EEE8AA",
  palegreen: "#98FB98",
  paleturquoise: "#AFEEEE",
  palevioletred: "#DB7093",
  papayawhip: "#FFEFD5",
  peachpuff: "#FFDAB9",
  peru: "#CD853F",
  pink: "#FFC0CB",
  plum: "#DDA0DD",
  powderblue: "#B0E0E6",
  purple: "#800080",
  rebeccapurple: "#639",
  red: "#F00",
  rosybrown: "#BC8F8F",
  royalblue: "#4169E1",
  saddlebrown: "#8B4513",
  salmon: "#FA8072",
  sandybrown: "#F4A460",
  seagreen: "#2E8B57",
  seashell: "#FFF5EE",
  sienna: "#A0522D",
  silver: "#C0C0C0",
  skyblue: "#87CEEB",
  slateblue: "#6A5ACD",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#FFFAFA",
  springgreen: "#00FF7F",
  steelblue: "#4682B4",
  tan: "#D2B48C",
  teal: "#008080",
  thistle: "#D8BFD8",
  tomato: "#FF6347",
  turquoise: "#40E0D0",
  violet: "#EE82EE",
  wheat: "#F5DEB3",
  white: "#FFF",
  whitesmoke: "#F5F5F5",
  yellow: "#FF0",
  yellowgreen: "#9ACD32"
};
var Pe = (t3, e4, s3) => (s3 < 0 && (s3 += 1), s3 > 1 && (s3 -= 1), s3 < 1 / 6 ? t3 + 6 * (e4 - t3) * s3 : s3 < 0.5 ? e4 : s3 < 2 / 3 ? t3 + (e4 - t3) * (2 / 3 - s3) * 6 : t3);
var Ee = (t3, e4, s3, i3) => {
  t3 /= 255, e4 /= 255, s3 /= 255;
  const r3 = Math.max(t3, e4, s3), n3 = Math.min(t3, e4, s3);
  let o3, a3;
  const h3 = (r3 + n3) / 2;
  if (r3 === n3) o3 = a3 = 0;
  else {
    const i4 = r3 - n3;
    switch (a3 = h3 > 0.5 ? i4 / (2 - r3 - n3) : i4 / (r3 + n3), r3) {
      case t3:
        o3 = (e4 - s3) / i4 + (e4 < s3 ? 6 : 0);
        break;
      case e4:
        o3 = (s3 - t3) / i4 + 2;
        break;
      case s3:
        o3 = (t3 - e4) / i4 + 4;
    }
    o3 /= 6;
  }
  return [
    Math.round(360 * o3),
    Math.round(100 * a3),
    Math.round(100 * h3),
    i3
  ];
};
var Ae = function() {
  let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1";
  return parseFloat(t3) / (t3.endsWith("%") ? 100 : 1);
};
var je = (t3) => Math.min(Math.round(t3), 255).toString(16).toUpperCase().padStart(2, "0");
var Fe = (t3) => {
  let [e4, s3, i3, r3 = 1] = t3;
  const n3 = Math.round(0.3 * e4 + 0.59 * s3 + 0.11 * i3);
  return [
    n3,
    n3,
    n3,
    r3
  ];
};
var Le = class _Le {
  constructor(e4) {
    if (t(this, "isUnrecognised", false), e4) if (e4 instanceof _Le) this.setSource([
      ...e4._source
    ]);
    else if (Array.isArray(e4)) {
      const [t3, s3, i3, r3 = 1] = e4;
      this.setSource([
        t3,
        s3,
        i3,
        r3
      ]);
    } else this.setSource(this._tryParsingColor(e4));
    else this.setSource([
      0,
      0,
      0,
      1
    ]);
  }
  _tryParsingColor(t3) {
    return (t3 = t3.toLowerCase()) in Me && (t3 = Me[t3]), "transparent" === t3 ? [
      255,
      255,
      255,
      0
    ] : _Le.sourceFromHex(t3) || _Le.sourceFromRgb(t3) || _Le.sourceFromHsl(t3) || (this.isUnrecognised = true) && [
      0,
      0,
      0,
      1
    ];
  }
  getSource() {
    return this._source;
  }
  setSource(t3) {
    this._source = t3;
  }
  toRgb() {
    const [t3, e4, s3] = this.getSource();
    return "rgb(".concat(t3, ",").concat(e4, ",").concat(s3, ")");
  }
  toRgba() {
    return "rgba(".concat(this.getSource().join(","), ")");
  }
  toHsl() {
    const [t3, e4, s3] = Ee(...this.getSource());
    return "hsl(".concat(t3, ",").concat(e4, "%,").concat(s3, "%)");
  }
  toHsla() {
    const [t3, e4, s3, i3] = Ee(...this.getSource());
    return "hsla(".concat(t3, ",").concat(e4, "%,").concat(s3, "%,").concat(i3, ")");
  }
  toHex() {
    return this.toHexa().slice(0, 6);
  }
  toHexa() {
    const [t3, e4, s3, i3] = this.getSource();
    return "".concat(je(t3)).concat(je(e4)).concat(je(s3)).concat(je(Math.round(255 * i3)));
  }
  getAlpha() {
    return this.getSource()[3];
  }
  setAlpha(t3) {
    return this._source[3] = t3, this;
  }
  toGrayscale() {
    return this.setSource(Fe(this.getSource())), this;
  }
  toBlackWhite(t3) {
    const [e4, , , s3] = Fe(this.getSource()), i3 = e4 < (t3 || 127) ? 0 : 255;
    return this.setSource([
      i3,
      i3,
      i3,
      s3
    ]), this;
  }
  overlayWith(t3) {
    t3 instanceof _Le || (t3 = new _Le(t3));
    const e4 = this.getSource(), s3 = t3.getSource(), [i3, r3, n3] = e4.map((t4, e5) => Math.round(0.5 * t4 + 0.5 * s3[e5]));
    return this.setSource([
      i3,
      r3,
      n3,
      e4[3]
    ]), this;
  }
  static fromRgb(t3) {
    return _Le.fromRgba(t3);
  }
  static fromRgba(t3) {
    return new _Le(_Le.sourceFromRgb(t3));
  }
  static sourceFromRgb(t3) {
    const e4 = t3.match(/^rgba?\(\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*(?:\s*[,/]\s*(\d{0,3}(?:\.\d+)?%?)\s*)?\)$/i);
    if (e4) {
      const [t4, s3, i3] = e4.slice(1, 4).map((t5) => {
        const e5 = parseFloat(t5);
        return t5.endsWith("%") ? Math.round(2.55 * e5) : e5;
      });
      return [
        t4,
        s3,
        i3,
        Ae(e4[4])
      ];
    }
  }
  static fromHsl(t3) {
    return _Le.fromHsla(t3);
  }
  static fromHsla(t3) {
    return new _Le(_Le.sourceFromHsl(t3));
  }
  static sourceFromHsl(t3) {
    const e4 = t3.match(/^hsla?\(\s*([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*(?:\s*[,/]\s*(\d*(?:\.\d+)?%?)\s*)?\)$/i);
    if (!e4) return;
    const s3 = (_Le.parseAngletoDegrees(e4[1]) % 360 + 360) % 360 / 360, i3 = parseFloat(e4[2]) / 100, r3 = parseFloat(e4[3]) / 100;
    let n3, o3, a3;
    if (0 === i3) n3 = o3 = a3 = r3;
    else {
      const t4 = r3 <= 0.5 ? r3 * (i3 + 1) : r3 + i3 - r3 * i3, e5 = 2 * r3 - t4;
      n3 = Pe(e5, t4, s3 + 1 / 3), o3 = Pe(e5, t4, s3), a3 = Pe(e5, t4, s3 - 1 / 3);
    }
    return [
      Math.round(255 * n3),
      Math.round(255 * o3),
      Math.round(255 * a3),
      Ae(e4[4])
    ];
  }
  static fromHex(t3) {
    return new _Le(_Le.sourceFromHex(t3));
  }
  static sourceFromHex(t3) {
    if (t3.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)) {
      const e4 = t3.slice(t3.indexOf("#") + 1);
      let s3;
      s3 = e4.length <= 4 ? e4.split("").map((t4) => t4 + t4) : e4.match(/.{2}/g);
      const [i3, r3, n3, o3 = 255] = s3.map((t4) => parseInt(t4, 16));
      return [
        i3,
        r3,
        n3,
        o3 / 255
      ];
    }
  }
  static parseAngletoDegrees(t3) {
    const e4 = t3.toLowerCase(), s3 = parseFloat(e4);
    return e4.includes("rad") ? Ct(s3) : e4.includes("turn") ? 360 * s3 : s3;
  }
};
var Re = function(t3) {
  let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
  const s3 = /\D{0,2}$/.exec(t3), i3 = parseFloat(t3), r3 = o.DPI;
  switch (null == s3 ? void 0 : s3[0]) {
    case "mm":
      return i3 * r3 / 25.4;
    case "cm":
      return i3 * r3 / 2.54;
    case "in":
      return i3 * r3;
    case "pt":
      return i3 * r3 / 72;
    case "pc":
      return i3 * r3 / 72 * 12;
    case "em":
      return i3 * e4;
    default:
      return i3;
  }
};
var Be = (t3) => {
  const [e4, s3] = t3.trim().split(" "), [i3, r3] = (n3 = e4) && n3 !== j ? [
    n3.slice(1, 4),
    n3.slice(5, 8)
  ] : n3 === j ? [
    n3,
    n3
  ] : [
    "Mid",
    "Mid"
  ];
  var n3;
  return {
    meetOrSlice: s3 || "meet",
    alignX: i3,
    alignY: r3
  };
};
var Ie = function(t3, e4) {
  let s3, i3, r3 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  if (e4) if (e4.toLive) s3 = "url(#SVGID_".concat(e4.id, ")");
  else {
    const t4 = new Le(e4), r4 = t4.getAlpha();
    s3 = t4.toRgb(), 1 !== r4 && (i3 = r4.toString());
  }
  else s3 = "none";
  return r3 ? "".concat(t3, ": ").concat(s3, "; ").concat(i3 ? "".concat(t3, "-opacity: ").concat(i3, "; ") : "") : "".concat(t3, '="').concat(s3, '" ').concat(i3 ? "".concat(t3, '-opacity="').concat(i3, '" ') : "");
};
var Xe = class {
  getSvgStyles(t3) {
    const e4 = this.fillRule ? this.fillRule : "nonzero", s3 = this.strokeWidth ? this.strokeWidth : "0", i3 = this.strokeDashArray ? this.strokeDashArray.join(" ") : j, r3 = this.strokeDashOffset ? this.strokeDashOffset : "0", n3 = this.strokeLineCap ? this.strokeLineCap : "butt", o3 = this.strokeLineJoin ? this.strokeLineJoin : "miter", a3 = this.strokeMiterLimit ? this.strokeMiterLimit : "4", h3 = void 0 !== this.opacity ? this.opacity : "1", c3 = this.visible ? "" : " visibility: hidden;", l3 = t3 ? "" : this.getSvgFilter(), u3 = Ie(K, this.fill);
    return [
      Ie(J, this.stroke),
      "stroke-width: ",
      s3,
      "; ",
      "stroke-dasharray: ",
      i3,
      "; ",
      "stroke-linecap: ",
      n3,
      "; ",
      "stroke-dashoffset: ",
      r3,
      "; ",
      "stroke-linejoin: ",
      o3,
      "; ",
      "stroke-miterlimit: ",
      a3,
      "; ",
      u3,
      "fill-rule: ",
      e4,
      "; ",
      "opacity: ",
      h3,
      ";",
      l3,
      c3
    ].join("");
  }
  getSvgFilter() {
    return this.shadow ? "filter: url(#SVGID_".concat(this.shadow.id, ");") : "";
  }
  getSvgCommons() {
    return [
      this.id ? 'id="'.concat(this.id, '" ') : "",
      this.clipPath ? 'clip-path="url(#'.concat(this.clipPath.clipPathId, ')" ') : ""
    ].join("");
  }
  getSvgTransform(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    const s3 = t3 ? this.calcTransformMatrix() : this.calcOwnMatrix(), i3 = 'transform="'.concat(Gt(s3));
    return "".concat(i3).concat(e4, '" ');
  }
  _toSVG(t3) {
    return [
      ""
    ];
  }
  toSVG(t3) {
    return this._createBaseSVGMarkup(this._toSVG(t3), {
      reviver: t3
    });
  }
  toClipPathSVG(t3) {
    return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(t3), {
      reviver: t3
    });
  }
  _createBaseClipPathSVGMarkup(t3) {
    let { reviver: e4, additionalTransform: s3 = "" } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const i3 = [
      this.getSvgTransform(true, s3),
      this.getSvgCommons()
    ].join(""), r3 = t3.indexOf("COMMON_PARTS");
    return t3[r3] = i3, e4 ? e4(t3.join("")) : t3.join("");
  }
  _createBaseSVGMarkup(t3) {
    let { noStyle: e4, reviver: s3, withShadow: i3, additionalTransform: r3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const n3 = e4 ? "" : 'style="'.concat(this.getSvgStyles(), '" '), o3 = i3 ? 'style="'.concat(this.getSvgFilter(), '" ') : "", a3 = this.clipPath, h3 = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", c3 = a3 && a3.absolutePositioned, l3 = this.stroke, u3 = this.fill, d3 = this.shadow, g3 = [], f2 = t3.indexOf("COMMON_PARTS");
    let p3;
    a3 && (a3.clipPathId = "CLIPPATH_".concat(ft()), p3 = '<clipPath id="'.concat(a3.clipPathId, '" >\n').concat(a3.toClipPathSVG(s3), "</clipPath>\n")), c3 && g3.push("<g ", o3, this.getSvgCommons(), " >\n"), g3.push("<g ", this.getSvgTransform(false), c3 ? "" : o3 + this.getSvgCommons(), " >\n");
    const m3 = [
      n3,
      h3,
      e4 ? "" : this.addPaintOrder(),
      " ",
      r3 ? 'transform="'.concat(r3, '" ') : ""
    ].join("");
    return t3[f2] = m3, zt(u3) && g3.push(u3.toSVG(this)), zt(l3) && g3.push(l3.toSVG(this)), d3 && g3.push(d3.toSVG(this)), a3 && g3.push(p3), g3.push(t3.join("")), g3.push("</g>\n"), c3 && g3.push("</g>\n"), s3 ? s3(g3.join("")) : g3.join("");
  }
  addPaintOrder() {
    return this.paintFirst !== K ? ' paint-order="'.concat(this.paintFirst, '" ') : "";
  }
};
function We(t3) {
  return new RegExp("^(" + t3.join("|") + ")\\b", "i");
}
var Ye = "textDecorationThickness";
var Ve = [
  "fontSize",
  "fontWeight",
  "fontFamily",
  "fontStyle"
];
var Ge = [
  "underline",
  "overline",
  "linethrough"
];
var ze = [
  ...Ve,
  "lineHeight",
  "text",
  "charSpacing",
  "textAlign",
  "styles",
  "path",
  "pathStartOffset",
  "pathSide",
  "pathAlign"
];
var He = [
  ...ze,
  ...Ge,
  "textBackgroundColor",
  "direction",
  Ye
];
var Ne = [
  ...Ve,
  ...Ge,
  J,
  "strokeWidth",
  K,
  "deltaY",
  "textBackgroundColor",
  Ye
];
var Ue = {
  _reNewline: F,
  _reSpacesAndTabs: /[ \t\r]/g,
  _reSpaceAndTab: /[ \t\r]/,
  _reWords: /\S+/g,
  fontSize: 40,
  fontWeight: "normal",
  fontFamily: "Times New Roman",
  underline: false,
  overline: false,
  linethrough: false,
  textAlign: M,
  fontStyle: "normal",
  lineHeight: 1.16,
  textBackgroundColor: "",
  stroke: null,
  shadow: null,
  path: void 0,
  pathStartOffset: 0,
  pathSide: M,
  pathAlign: "baseline",
  charSpacing: 0,
  deltaY: 0,
  direction: "ltr",
  CACHE_FONT_SIZE: 400,
  MIN_TEXT_WIDTH: 2,
  superscript: {
    size: 0.6,
    baseline: -0.35
  },
  subscript: {
    size: 0.6,
    baseline: 0.11
  },
  _fontSizeFraction: 0.222,
  offsets: {
    underline: 0.1,
    linethrough: -0.28167,
    overline: -0.81333
  },
  _fontSizeMult: 1.13,
  [Ye]: 66.667
};
var qe = "justify";
var Ke = "justify-left";
var Je = "justify-right";
var Qe = "justify-center";
var Ze;
var $e;
var ts;
var es = String.raw(Ze || (Ze = r([
  "[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?"
], [
  "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?"
])));
var ss = String.raw($e || ($e = r([
  "(?:s*,?s+|s*,s*)"
], [
  "(?:\\s*,?\\s+|\\s*,\\s*)"
])));
var is = "http://www.w3.org/2000/svg";
var rs = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + es + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + es + "))?\\s+(.*)");
var ns = {
  cx: M,
  x: M,
  r: "radius",
  cy: P,
  y: P,
  display: "visible",
  visibility: "visible",
  transform: "transformMatrix",
  "fill-opacity": "fillOpacity",
  "fill-rule": "fillRule",
  "font-family": "fontFamily",
  "font-size": "fontSize",
  "font-style": "fontStyle",
  "font-weight": "fontWeight",
  "letter-spacing": "charSpacing",
  "paint-order": "paintFirst",
  "stroke-dasharray": "strokeDashArray",
  "stroke-dashoffset": "strokeDashOffset",
  "stroke-linecap": "strokeLineCap",
  "stroke-linejoin": "strokeLineJoin",
  "stroke-miterlimit": "strokeMiterLimit",
  "stroke-opacity": "strokeOpacity",
  "stroke-width": "strokeWidth",
  "text-decoration": "textDecoration",
  "text-anchor": "textAnchor",
  opacity: "opacity",
  "clip-path": "clipPath",
  "clip-rule": "clipRule",
  "vector-effect": "strokeUniform",
  "image-rendering": "imageSmoothing",
  "text-decoration-thickness": Ye
};
var os = "font-size";
var as = "clip-path";
var hs = We([
  "path",
  "circle",
  "polygon",
  "polyline",
  "ellipse",
  "rect",
  "line",
  "image",
  "text"
]);
var cs = We([
  "symbol",
  "image",
  "marker",
  "pattern",
  "view",
  "svg"
]);
var ls = We([
  "symbol",
  "g",
  "a",
  "svg",
  "clipPath",
  "defs"
]);
var us = new RegExp(String.raw(ts || (ts = r([
  "^s*(",
  ")",
  "(",
  ")",
  "(",
  ")",
  "(",
  ")s*$"
], [
  "^\\s*(",
  ")",
  "(",
  ")",
  "(",
  ")",
  "(",
  ")\\s*$"
])), es, ss, es, ss, es, ss, es));
var ds = new ot(1, 0);
var gs = new ot();
var fs = (t3, e4) => t3.rotate(e4);
var ps = (t3, e4) => new ot(e4).subtract(t3);
var ms = (t3) => t3.distanceFrom(gs);
var vs = (t3, e4) => Math.atan2(Cs(t3, e4), bs(t3, e4));
var ys = (t3) => vs(ds, t3);
var _s = (t3) => t3.eq(gs) ? t3 : t3.scalarDivide(ms(t3));
var xs = function(t3) {
  let e4 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return _s(new ot(-t3.y, t3.x).scalarMultiply(e4 ? 1 : -1));
};
var Cs = (t3, e4) => t3.x * e4.y - t3.y * e4.x;
var bs = (t3, e4) => t3.x * e4.x + t3.y * e4.y;
var Ss = (t3, e4, s3) => {
  if (t3.eq(e4) || t3.eq(s3)) return true;
  const i3 = Cs(e4, s3), r3 = Cs(e4, t3), n3 = Cs(s3, t3);
  return i3 >= 0 ? r3 >= 0 && n3 <= 0 : !(r3 <= 0 && n3 >= 0);
};
var ws = "(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?";
var Ts = new RegExp("(?:\\s|^)" + ws + ws + "(" + es + "?(?:px)?)?(?:\\s?|$)(?:$|\\s)");
var Os = class _Os {
  constructor(t3) {
    const e4 = "string" == typeof t3 ? _Os.parseShadow(t3) : t3;
    Object.assign(this, _Os.ownDefaults, e4), this.id = ft();
  }
  static parseShadow(t3) {
    const e4 = t3.trim(), [, s3 = 0, i3 = 0, r3 = 0] = (Ts.exec(e4) || []).map((t4) => parseFloat(t4) || 0);
    return {
      color: (e4.replace(Ts, "") || "rgb(0,0,0)").trim(),
      offsetX: s3,
      offsetY: i3,
      blur: r3
    };
  }
  toString() {
    return [
      this.offsetX,
      this.offsetY,
      this.blur,
      this.color
    ].join("px ");
  }
  toSVG(t3) {
    const e4 = fs(new ot(this.offsetX, this.offsetY), xt(-t3.angle)), s3 = new Le(this.color);
    let i3 = 40, r3 = 40;
    return t3.width && t3.height && (i3 = 100 * Vt((Math.abs(e4.x) + this.blur) / t3.width, o.NUM_FRACTION_DIGITS) + 20, r3 = 100 * Vt((Math.abs(e4.y) + this.blur) / t3.height, o.NUM_FRACTION_DIGITS) + 20), t3.flipX && (e4.x *= -1), t3.flipY && (e4.y *= -1), '<filter id="SVGID_'.concat(this.id, '" y="-').concat(r3, '%" height="').concat(100 + 2 * r3, '%" x="-').concat(i3, '%" width="').concat(100 + 2 * i3, '%" >\n	<feGaussianBlur in="SourceAlpha" stdDeviation="').concat(Vt(this.blur ? this.blur / 2 : 0, o.NUM_FRACTION_DIGITS), '"></feGaussianBlur>\n	<feOffset dx="').concat(Vt(e4.x, o.NUM_FRACTION_DIGITS), '" dy="').concat(Vt(e4.y, o.NUM_FRACTION_DIGITS), '" result="oBlur" ></feOffset>\n	<feFlood flood-color="').concat(s3.toRgb(), '" flood-opacity="').concat(s3.getAlpha(), '"/>\n	<feComposite in2="oBlur" operator="in" />\n	<feMerge>\n		<feMergeNode></feMergeNode>\n		<feMergeNode in="SourceGraphic"></feMergeNode>\n	</feMerge>\n</filter>\n');
  }
  toObject() {
    const t3 = {
      color: this.color,
      blur: this.blur,
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      affectStroke: this.affectStroke,
      nonScaling: this.nonScaling,
      type: this.constructor.type
    }, e4 = _Os.ownDefaults;
    return this.includeDefaultValues ? t3 : Yt(t3, (t4, s3) => t4 !== e4[s3]);
  }
  static async fromObject(t3) {
    return new this(t3);
  }
};
t(Os, "ownDefaults", {
  color: "rgb(0,0,0)",
  blur: 0,
  offsetX: 0,
  offsetY: 0,
  affectStroke: false,
  includeDefaultValues: true,
  nonScaling: false
}), t(Os, "type", "shadow"), tt.setClass(Os, "shadow");
var ks = (t3, e4, s3) => Math.max(t3, Math.min(e4, s3));
var Ds = [
  P,
  M,
  H,
  N,
  "flipX",
  "flipY",
  "originX",
  "originY",
  "angle",
  "opacity",
  "globalCompositeOperation",
  "shadow",
  "visible",
  U,
  q
];
var Ms = [
  K,
  J,
  "strokeWidth",
  "strokeDashArray",
  "width",
  "height",
  "paintFirst",
  "strokeUniform",
  "strokeLineCap",
  "strokeDashOffset",
  "strokeLineJoin",
  "strokeMiterLimit",
  "backgroundColor",
  "clipPath"
];
var Ps = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  angle: 0,
  flipX: false,
  flipY: false,
  scaleX: 1,
  scaleY: 1,
  minScaleLimit: 0,
  skewX: 0,
  skewY: 0,
  originX: M,
  originY: P,
  strokeWidth: 1,
  strokeUniform: false,
  padding: 0,
  opacity: 1,
  paintFirst: K,
  fill: "rgb(0,0,0)",
  fillRule: "nonzero",
  stroke: null,
  strokeDashArray: null,
  strokeDashOffset: 0,
  strokeLineCap: "butt",
  strokeLineJoin: "miter",
  strokeMiterLimit: 4,
  globalCompositeOperation: "source-over",
  backgroundColor: "",
  shadow: null,
  visible: true,
  includeDefaultValues: true,
  excludeFromExport: false,
  objectCaching: true,
  clipPath: void 0,
  inverted: false,
  absolutePositioned: false,
  centeredRotation: true,
  centeredScaling: false,
  dirty: true
};
var Es = (t3, e4, s3, i3) => (t3 < Math.abs(e4) ? (t3 = e4, i3 = s3 / 4) : i3 = 0 === e4 && 0 === t3 ? s3 / S * Math.asin(1) : s3 / S * Math.asin(e4 / t3), {
  a: t3,
  c: e4,
  p: s3,
  s: i3
});
var As = (t3, e4, s3, i3, r3) => t3 * Math.pow(2, 10 * (i3 -= 1)) * Math.sin((i3 * r3 - e4) * S / s3);
var js = (t3, e4, s3, i3) => -s3 * Math.cos(t3 / i3 * b) + s3 + e4;
var Fs = (t3, e4, s3, i3) => (t3 /= i3) < 1 / 2.75 ? s3 * (7.5625 * t3 * t3) + e4 : t3 < 2 / 2.75 ? s3 * (7.5625 * (t3 -= 1.5 / 2.75) * t3 + 0.75) + e4 : t3 < 2.5 / 2.75 ? s3 * (7.5625 * (t3 -= 2.25 / 2.75) * t3 + 0.9375) + e4 : s3 * (7.5625 * (t3 -= 2.625 / 2.75) * t3 + 0.984375) + e4;
var Ls = (t3, e4, s3, i3) => s3 - Fs(i3 - t3, 0, s3, i3) + e4;
var Rs = Object.freeze({
  __proto__: null,
  defaultEasing: js,
  easeInBack: function(t3, e4, s3, i3) {
    let r3 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
    return s3 * (t3 /= i3) * t3 * ((r3 + 1) * t3 - r3) + e4;
  },
  easeInBounce: Ls,
  easeInCirc: (t3, e4, s3, i3) => -s3 * (Math.sqrt(1 - (t3 /= i3) * t3) - 1) + e4,
  easeInCubic: (t3, e4, s3, i3) => s3 * (t3 / i3) ** 3 + e4,
  easeInElastic: (t3, e4, s3, i3) => {
    const r3 = s3;
    let n3 = 0;
    if (0 === t3) return e4;
    if (1 === (t3 /= i3)) return e4 + s3;
    n3 || (n3 = 0.3 * i3);
    const { a: o3, s: a3, p: h3 } = Es(r3, s3, n3, 1.70158);
    return -As(o3, a3, h3, t3, i3) + e4;
  },
  easeInExpo: (t3, e4, s3, i3) => 0 === t3 ? e4 : s3 * 2 ** (10 * (t3 / i3 - 1)) + e4,
  easeInOutBack: function(t3, e4, s3, i3) {
    let r3 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
    return (t3 /= i3 / 2) < 1 ? s3 / 2 * (t3 * t3 * ((1 + (r3 *= 1.525)) * t3 - r3)) + e4 : s3 / 2 * ((t3 -= 2) * t3 * ((1 + (r3 *= 1.525)) * t3 + r3) + 2) + e4;
  },
  easeInOutBounce: (t3, e4, s3, i3) => t3 < i3 / 2 ? 0.5 * Ls(2 * t3, 0, s3, i3) + e4 : 0.5 * Fs(2 * t3 - i3, 0, s3, i3) + 0.5 * s3 + e4,
  easeInOutCirc: (t3, e4, s3, i3) => (t3 /= i3 / 2) < 1 ? -s3 / 2 * (Math.sqrt(1 - t3 ** 2) - 1) + e4 : s3 / 2 * (Math.sqrt(1 - (t3 -= 2) * t3) + 1) + e4,
  easeInOutCubic: (t3, e4, s3, i3) => (t3 /= i3 / 2) < 1 ? s3 / 2 * t3 ** 3 + e4 : s3 / 2 * ((t3 - 2) ** 3 + 2) + e4,
  easeInOutElastic: (t3, e4, s3, i3) => {
    const r3 = s3;
    let n3 = 0;
    if (0 === t3) return e4;
    if (2 === (t3 /= i3 / 2)) return e4 + s3;
    n3 || (n3 = i3 * (0.3 * 1.5));
    const { a: o3, s: a3, p: h3, c: c3 } = Es(r3, s3, n3, 1.70158);
    return t3 < 1 ? -0.5 * As(o3, a3, h3, t3, i3) + e4 : o3 * Math.pow(2, -10 * (t3 -= 1)) * Math.sin((t3 * i3 - a3) * S / h3) * 0.5 + c3 + e4;
  },
  easeInOutExpo: (t3, e4, s3, i3) => 0 === t3 ? e4 : t3 === i3 ? e4 + s3 : (t3 /= i3 / 2) < 1 ? s3 / 2 * 2 ** (10 * (t3 - 1)) + e4 : s3 / 2 * -(2 ** (-10 * --t3) + 2) + e4,
  easeInOutQuad: (t3, e4, s3, i3) => (t3 /= i3 / 2) < 1 ? s3 / 2 * t3 ** 2 + e4 : -s3 / 2 * (--t3 * (t3 - 2) - 1) + e4,
  easeInOutQuart: (t3, e4, s3, i3) => (t3 /= i3 / 2) < 1 ? s3 / 2 * t3 ** 4 + e4 : -s3 / 2 * ((t3 -= 2) * t3 ** 3 - 2) + e4,
  easeInOutQuint: (t3, e4, s3, i3) => (t3 /= i3 / 2) < 1 ? s3 / 2 * t3 ** 5 + e4 : s3 / 2 * ((t3 - 2) ** 5 + 2) + e4,
  easeInOutSine: (t3, e4, s3, i3) => -s3 / 2 * (Math.cos(Math.PI * t3 / i3) - 1) + e4,
  easeInQuad: (t3, e4, s3, i3) => s3 * (t3 /= i3) * t3 + e4,
  easeInQuart: (t3, e4, s3, i3) => s3 * (t3 /= i3) * t3 ** 3 + e4,
  easeInQuint: (t3, e4, s3, i3) => s3 * (t3 / i3) ** 5 + e4,
  easeInSine: (t3, e4, s3, i3) => -s3 * Math.cos(t3 / i3 * b) + s3 + e4,
  easeOutBack: function(t3, e4, s3, i3) {
    let r3 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
    return s3 * ((t3 = t3 / i3 - 1) * t3 * ((r3 + 1) * t3 + r3) + 1) + e4;
  },
  easeOutBounce: Fs,
  easeOutCirc: (t3, e4, s3, i3) => s3 * Math.sqrt(1 - (t3 = t3 / i3 - 1) * t3) + e4,
  easeOutCubic: (t3, e4, s3, i3) => s3 * ((t3 / i3 - 1) ** 3 + 1) + e4,
  easeOutElastic: (t3, e4, s3, i3) => {
    const r3 = s3;
    let n3 = 0;
    if (0 === t3) return e4;
    if (1 === (t3 /= i3)) return e4 + s3;
    n3 || (n3 = 0.3 * i3);
    const { a: o3, s: a3, p: h3, c: c3 } = Es(r3, s3, n3, 1.70158);
    return o3 * 2 ** (-10 * t3) * Math.sin((t3 * i3 - a3) * S / h3) + c3 + e4;
  },
  easeOutExpo: (t3, e4, s3, i3) => t3 === i3 ? e4 + s3 : s3 * -(2 ** (-10 * t3 / i3) + 1) + e4,
  easeOutQuad: (t3, e4, s3, i3) => -s3 * (t3 /= i3) * (t3 - 2) + e4,
  easeOutQuart: (t3, e4, s3, i3) => -s3 * ((t3 = t3 / i3 - 1) * t3 ** 3 - 1) + e4,
  easeOutQuint: (t3, e4, s3, i3) => s3 * ((t3 / i3 - 1) ** 5 + 1) + e4,
  easeOutSine: (t3, e4, s3, i3) => s3 * Math.sin(t3 / i3 * b) + e4
});
var Bs = () => false;
var Is = class {
  constructor(e4) {
    let { startValue: s3, byValue: i3, duration: r3 = 500, delay: n3 = 0, easing: o3 = js, onStart: a3 = C, onChange: h3 = C, onComplete: c3 = C, abort: l3 = Bs, target: u3 } = e4;
    t(this, "_state", "pending"), t(this, "durationProgress", 0), t(this, "valueProgress", 0), this.tick = this.tick.bind(this), this.duration = r3, this.delay = n3, this.easing = o3, this._onStart = a3, this._onChange = h3, this._onComplete = c3, this._abort = l3, this.target = u3, this.startValue = s3, this.byValue = i3, this.value = this.startValue, this.endValue = Object.freeze(this.calculate(this.duration).value);
  }
  get state() {
    return this._state;
  }
  isDone() {
    return "aborted" === this._state || "completed" === this._state;
  }
  start() {
    const t3 = (t4) => {
      "pending" === this._state && (this.startTime = t4 || +/* @__PURE__ */ new Date(), this._state = "running", this._onStart(), this.tick(this.startTime));
    };
    this.register(), this.delay > 0 ? setTimeout(() => ut(t3), this.delay) : ut(t3);
  }
  tick(t3) {
    const e4 = (t3 || +/* @__PURE__ */ new Date()) - this.startTime, s3 = Math.min(e4, this.duration);
    this.durationProgress = s3 / this.duration;
    const { value: i3, valueProgress: r3 } = this.calculate(s3);
    this.value = Object.freeze(i3), this.valueProgress = r3, "aborted" !== this._state && (this._abort(this.value, this.valueProgress, this.durationProgress) ? (this._state = "aborted", this.unregister()) : e4 >= this.duration ? (this.durationProgress = this.valueProgress = 1, this._onChange(this.endValue, this.valueProgress, this.durationProgress), this._state = "completed", this._onComplete(this.endValue, this.valueProgress, this.durationProgress), this.unregister()) : (this._onChange(this.value, this.valueProgress, this.durationProgress), ut(this.tick)));
  }
  register() {
    et.push(this);
  }
  unregister() {
    et.remove(this);
  }
  abort() {
    this._state = "aborted", this.unregister();
  }
};
var Xs = [
  "startValue",
  "endValue"
];
var Ws = class extends Is {
  constructor(t3) {
    let { startValue: e4 = 0, endValue: r3 = 100 } = t3;
    super(s(s({}, i(t3, Xs)), {}, {
      startValue: e4,
      byValue: r3 - e4
    }));
  }
  calculate(t3) {
    const e4 = this.easing(t3, this.startValue, this.byValue, this.duration);
    return {
      value: e4,
      valueProgress: Math.abs((e4 - this.startValue) / this.byValue)
    };
  }
};
var Ys = [
  "startValue",
  "endValue"
];
var Vs = class extends Is {
  constructor(t3) {
    let { startValue: e4 = [
      0
    ], endValue: r3 = [
      100
    ] } = t3;
    super(s(s({}, i(t3, Ys)), {}, {
      startValue: e4,
      byValue: r3.map((t4, s3) => t4 - e4[s3])
    }));
  }
  calculate(t3) {
    const e4 = this.startValue.map((e5, s3) => this.easing(t3, e5, this.byValue[s3], this.duration, s3));
    return {
      value: e4,
      valueProgress: Math.abs((e4[0] - this.startValue[0]) / this.byValue[0])
    };
  }
};
var Gs = [
  "startValue",
  "endValue",
  "easing",
  "onChange",
  "onComplete",
  "abort"
];
var zs = (t3, e4, s3, i3) => e4 + s3 * (1 - Math.cos(t3 / i3 * b));
var Hs = (t3) => t3 && ((e4, s3, i3) => t3(new Le(e4).toRgba(), s3, i3));
var Ns = class extends Is {
  constructor(t3) {
    let { startValue: e4, endValue: r3, easing: n3 = zs, onChange: o3, onComplete: a3, abort: h3 } = t3, c3 = i(t3, Gs);
    const l3 = new Le(e4).getSource(), u3 = new Le(r3).getSource();
    super(s(s({}, c3), {}, {
      startValue: l3,
      byValue: u3.map((t4, e5) => t4 - l3[e5]),
      easing: n3,
      onChange: Hs(o3),
      onComplete: Hs(a3),
      abort: Hs(h3)
    }));
  }
  calculate(t3) {
    const [e4, s3, i3, r3] = this.startValue.map((e5, s4) => this.easing(t3, e5, this.byValue[s4], this.duration, s4)), n3 = [
      ...[
        e4,
        s3,
        i3
      ].map(Math.round),
      ks(0, r3, 1)
    ];
    return {
      value: n3,
      valueProgress: n3.map((t4, e5) => 0 !== this.byValue[e5] ? Math.abs((t4 - this.startValue[e5]) / this.byValue[e5]) : 0).find((t4) => 0 !== t4) || 0
    };
  }
};
function Us(t3) {
  const e4 = ((t4) => Array.isArray(t4.startValue) || Array.isArray(t4.endValue))(t3) ? new Vs(t3) : new Ws(t3);
  return e4.start(), e4;
}
function qs(t3) {
  const e4 = new Ns(t3);
  return e4.start(), e4;
}
var Ks = class _Ks {
  constructor(t3) {
    this.status = t3, this.points = [];
  }
  includes(t3) {
    return this.points.some((e4) => e4.eq(t3));
  }
  append() {
    for (var t3 = arguments.length, e4 = new Array(t3), s3 = 0; s3 < t3; s3++) e4[s3] = arguments[s3];
    return this.points = this.points.concat(e4.filter((t4) => !this.includes(t4))), this;
  }
  static isPointContained(t3, e4, s3) {
    let i3 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (e4.eq(s3)) return t3.eq(e4);
    if (e4.x === s3.x) return t3.x === e4.x && (i3 || t3.y >= Math.min(e4.y, s3.y) && t3.y <= Math.max(e4.y, s3.y));
    if (e4.y === s3.y) return t3.y === e4.y && (i3 || t3.x >= Math.min(e4.x, s3.x) && t3.x <= Math.max(e4.x, s3.x));
    {
      const r3 = ps(e4, s3), n3 = ps(e4, t3).divide(r3);
      return i3 ? Math.abs(n3.x) === Math.abs(n3.y) : n3.x === n3.y && n3.x >= 0 && n3.x <= 1;
    }
  }
  static isPointInPolygon(t3, e4) {
    const s3 = new ot(t3).setX(Math.min(t3.x - 1, ...e4.map((t4) => t4.x)));
    let i3 = 0;
    for (let r3 = 0; r3 < e4.length; r3++) {
      const n3 = this.intersectSegmentSegment(e4[r3], e4[(r3 + 1) % e4.length], t3, s3);
      if (n3.includes(t3)) return true;
      i3 += Number("Intersection" === n3.status);
    }
    return i3 % 2 == 1;
  }
  static intersectLineLine(t3, e4, s3, i3) {
    let r3 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], n3 = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
    const o3 = e4.x - t3.x, a3 = e4.y - t3.y, h3 = i3.x - s3.x, c3 = i3.y - s3.y, l3 = t3.x - s3.x, u3 = t3.y - s3.y, d3 = h3 * u3 - c3 * l3, g3 = o3 * u3 - a3 * l3, f2 = c3 * o3 - h3 * a3;
    if (0 !== f2) {
      const e5 = d3 / f2, s4 = g3 / f2;
      return (r3 || 0 <= e5 && e5 <= 1) && (n3 || 0 <= s4 && s4 <= 1) ? new _Ks("Intersection").append(new ot(t3.x + e5 * o3, t3.y + e5 * a3)) : new _Ks();
    }
    if (0 === d3 || 0 === g3) {
      const o4 = r3 || n3 || _Ks.isPointContained(t3, s3, i3) || _Ks.isPointContained(e4, s3, i3) || _Ks.isPointContained(s3, t3, e4) || _Ks.isPointContained(i3, t3, e4);
      return new _Ks(o4 ? "Coincident" : void 0);
    }
    return new _Ks("Parallel");
  }
  static intersectSegmentLine(t3, e4, s3, i3) {
    return _Ks.intersectLineLine(t3, e4, s3, i3, false, true);
  }
  static intersectSegmentSegment(t3, e4, s3, i3) {
    return _Ks.intersectLineLine(t3, e4, s3, i3, false, false);
  }
  static intersectLinePolygon(t3, e4, s3) {
    let i3 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
    const r3 = new _Ks(), n3 = s3.length;
    for (let o3, a3, h3, c3 = 0; c3 < n3; c3++) {
      if (o3 = s3[c3], a3 = s3[(c3 + 1) % n3], h3 = _Ks.intersectLineLine(t3, e4, o3, a3, i3, false), "Coincident" === h3.status) return h3;
      r3.append(...h3.points);
    }
    return r3.points.length > 0 && (r3.status = "Intersection"), r3;
  }
  static intersectSegmentPolygon(t3, e4, s3) {
    return _Ks.intersectLinePolygon(t3, e4, s3, false);
  }
  static intersectPolygonPolygon(t3, e4) {
    const s3 = new _Ks(), i3 = t3.length, r3 = [];
    for (let n3 = 0; n3 < i3; n3++) {
      const o3 = t3[n3], a3 = t3[(n3 + 1) % i3], h3 = _Ks.intersectSegmentPolygon(o3, a3, e4);
      "Coincident" === h3.status ? (r3.push(h3), s3.append(o3, a3)) : s3.append(...h3.points);
    }
    return r3.length > 0 && r3.length === t3.length ? new _Ks("Coincident") : (s3.points.length > 0 && (s3.status = "Intersection"), s3);
  }
  static intersectPolygonRectangle(t3, e4, s3) {
    const i3 = e4.min(s3), r3 = e4.max(s3), n3 = new ot(r3.x, i3.y), o3 = new ot(i3.x, r3.y);
    return _Ks.intersectPolygonPolygon(t3, [
      i3,
      n3,
      r3,
      o3
    ]);
  }
};
var Js = class extends lt {
  getX() {
    return this.getXY().x;
  }
  setX(t3) {
    this.setXY(this.getXY().setX(t3));
  }
  getY() {
    return this.getXY().y;
  }
  setY(t3) {
    this.setXY(this.getXY().setY(t3));
  }
  getRelativeX() {
    return this.left;
  }
  setRelativeX(t3) {
    this.left = t3;
  }
  getRelativeY() {
    return this.top;
  }
  setRelativeY(t3) {
    this.top = t3;
  }
  getXY() {
    const t3 = this.getRelativeXY();
    return this.group ? St(t3, this.group.calcTransformMatrix()) : t3;
  }
  setXY(t3, e4, s3) {
    this.group && (t3 = St(t3, wt(this.group.calcTransformMatrix()))), this.setRelativeXY(t3, e4, s3);
  }
  getRelativeXY() {
    return new ot(this.left, this.top);
  }
  setRelativeXY(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.originX, s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.originY;
    this.setPositionByOrigin(t3, e4, s3);
  }
  isStrokeAccountedForInDimensions() {
    return false;
  }
  getCoords() {
    const { tl: t3, tr: e4, br: s3, bl: i3 } = this.aCoords || (this.aCoords = this.calcACoords()), r3 = [
      t3,
      e4,
      s3,
      i3
    ];
    if (this.group) {
      const t4 = this.group.calcTransformMatrix();
      return r3.map((e5) => St(e5, t4));
    }
    return r3;
  }
  intersectsWithRect(t3, e4) {
    return "Intersection" === Ks.intersectPolygonRectangle(this.getCoords(), t3, e4).status;
  }
  intersectsWithObject(t3) {
    const e4 = Ks.intersectPolygonPolygon(this.getCoords(), t3.getCoords());
    return "Intersection" === e4.status || "Coincident" === e4.status || t3.isContainedWithinObject(this) || this.isContainedWithinObject(t3);
  }
  isContainedWithinObject(t3) {
    return this.getCoords().every((e4) => t3.containsPoint(e4));
  }
  isContainedWithinRect(t3, e4) {
    const { left: s3, top: i3, width: r3, height: n3 } = this.getBoundingRect();
    return s3 >= t3.x && s3 + r3 <= e4.x && i3 >= t3.y && i3 + n3 <= e4.y;
  }
  isOverlapping(t3) {
    return this.intersectsWithObject(t3) || this.isContainedWithinObject(t3) || t3.isContainedWithinObject(this);
  }
  containsPoint(t3) {
    return Ks.isPointInPolygon(t3, this.getCoords());
  }
  isOnScreen() {
    if (!this.canvas) return false;
    const { tl: t3, br: e4 } = this.canvas.vptCoords;
    return !!this.getCoords().some((s3) => s3.x <= e4.x && s3.x >= t3.x && s3.y <= e4.y && s3.y >= t3.y) || (!!this.intersectsWithRect(t3, e4) || this.containsPoint(t3.midPointFrom(e4)));
  }
  isPartiallyOnScreen() {
    if (!this.canvas) return false;
    const { tl: t3, br: e4 } = this.canvas.vptCoords;
    if (this.intersectsWithRect(t3, e4)) return true;
    return this.getCoords().every((s3) => (s3.x >= e4.x || s3.x <= t3.x) && (s3.y >= e4.y || s3.y <= t3.y)) && this.containsPoint(t3.midPointFrom(e4));
  }
  getBoundingRect() {
    return ae(this.getCoords());
  }
  getScaledWidth() {
    return this._getTransformedDimensions().x;
  }
  getScaledHeight() {
    return this._getTransformedDimensions().y;
  }
  scale(t3) {
    this._set(H, t3), this._set(N, t3), this.setCoords();
  }
  scaleToWidth(t3) {
    const e4 = this.getBoundingRect().width / this.getScaledWidth();
    return this.scale(t3 / this.width / e4);
  }
  scaleToHeight(t3) {
    const e4 = this.getBoundingRect().height / this.getScaledHeight();
    return this.scale(t3 / this.height / e4);
  }
  getCanvasRetinaScaling() {
    var t3;
    return (null === (t3 = this.canvas) || void 0 === t3 ? void 0 : t3.getRetinaScaling()) || 1;
  }
  getTotalAngle() {
    return this.group ? Ct(kt(this.calcTransformMatrix())) : this.angle;
  }
  getViewportTransform() {
    var t3;
    return (null === (t3 = this.canvas) || void 0 === t3 ? void 0 : t3.viewportTransform) || T.concat();
  }
  calcACoords() {
    const t3 = Pt({
      angle: this.angle
    }), { x: e4, y: s3 } = this.getRelativeCenterPoint(), i3 = Mt(e4, s3), r3 = Tt(i3, t3), n3 = this._getTransformedDimensions(), o3 = n3.x / 2, a3 = n3.y / 2;
    return {
      tl: St({
        x: -o3,
        y: -a3
      }, r3),
      tr: St({
        x: o3,
        y: -a3
      }, r3),
      bl: St({
        x: -o3,
        y: a3
      }, r3),
      br: St({
        x: o3,
        y: a3
      }, r3)
    };
  }
  setCoords() {
    this.aCoords = this.calcACoords();
  }
  transformMatrixKey() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e4 = [];
    return !t3 && this.group && (e4 = this.group.transformMatrixKey(t3)), e4.push(this.top, this.left, this.width, this.height, this.scaleX, this.scaleY, this.angle, this.strokeWidth, this.skewX, this.skewY, +this.flipX, +this.flipY, xe(this.originX), xe(this.originY)), e4;
  }
  calcTransformMatrix() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e4 = this.calcOwnMatrix();
    if (t3 || !this.group) return e4;
    const s3 = this.transformMatrixKey(t3), i3 = this.matrixCache;
    return i3 && i3.key.every((t4, e5) => t4 === s3[e5]) ? i3.value : (this.group && (e4 = Tt(this.group.calcTransformMatrix(false), e4)), this.matrixCache = {
      key: s3,
      value: e4
    }, e4);
  }
  calcOwnMatrix() {
    const t3 = this.transformMatrixKey(true), e4 = this.ownMatrixCache;
    if (e4 && e4.key === t3) return e4.value;
    const s3 = this.getRelativeCenterPoint(), i3 = {
      angle: this.angle,
      translateX: s3.x,
      translateY: s3.y,
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      skewX: this.skewX,
      skewY: this.skewY,
      flipX: this.flipX,
      flipY: this.flipY
    }, r3 = Rt(i3);
    return this.ownMatrixCache = {
      key: t3,
      value: r3
    }, r3;
  }
  _getNonTransformedDimensions() {
    return new ot(this.width, this.height).scalarAdd(this.strokeWidth);
  }
  _calculateCurrentDimensions(t3) {
    return this._getTransformedDimensions(t3).transform(this.getViewportTransform(), true).scalarAdd(2 * this.padding);
  }
  _getTransformedDimensions() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e4 = s({
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      skewX: this.skewX,
      skewY: this.skewY,
      width: this.width,
      height: this.height,
      strokeWidth: this.strokeWidth
    }, t3), i3 = e4.strokeWidth;
    let r3 = i3, n3 = 0;
    this.strokeUniform && (r3 = 0, n3 = i3);
    const o3 = e4.width + r3, a3 = e4.height + r3;
    let h3;
    return h3 = 0 === e4.skewX && 0 === e4.skewY ? new ot(o3 * e4.scaleX, a3 * e4.scaleY) : ge(o3, a3, Lt(e4)), h3.scalarAdd(n3);
  }
  translateToGivenOrigin(t3, e4, s3, i3, r3) {
    let n3 = t3.x, o3 = t3.y;
    const a3 = xe(i3) - xe(e4), h3 = xe(r3) - xe(s3);
    if (a3 || h3) {
      const t4 = this._getTransformedDimensions();
      n3 += a3 * t4.x, o3 += h3 * t4.y;
    }
    return new ot(n3, o3);
  }
  translateToCenterPoint(t3, e4, s3) {
    if (e4 === D && s3 === D) return t3;
    const i3 = this.translateToGivenOrigin(t3, e4, s3, D, D);
    return this.angle ? i3.rotate(xt(this.angle), t3) : i3;
  }
  translateToOriginPoint(t3, e4, s3) {
    const i3 = this.translateToGivenOrigin(t3, D, D, e4, s3);
    return this.angle ? i3.rotate(xt(this.angle), t3) : i3;
  }
  getCenterPoint() {
    const t3 = this.getRelativeCenterPoint();
    return this.group ? St(t3, this.group.calcTransformMatrix()) : t3;
  }
  getRelativeCenterPoint() {
    return this.translateToCenterPoint(new ot(this.left, this.top), this.originX, this.originY);
  }
  getPointByOrigin(t3, e4) {
    return this.translateToOriginPoint(this.getRelativeCenterPoint(), t3, e4);
  }
  setPositionByOrigin(t3, e4, s3) {
    const i3 = this.translateToCenterPoint(t3, e4, s3), r3 = this.translateToOriginPoint(i3, this.originX, this.originY);
    this.set({
      left: r3.x,
      top: r3.y
    });
  }
  _getLeftTopCoords() {
    return this.translateToOriginPoint(this.getRelativeCenterPoint(), M, P);
  }
};
var Qs = [
  "type"
];
var Zs = [
  "extraParam"
];
var $s = class e2 extends Js {
  static getDefaults() {
    return e2.ownDefaults;
  }
  get type() {
    const t3 = this.constructor.type;
    return "FabricObject" === t3 ? "object" : t3.toLowerCase();
  }
  set type(t3) {
    a("warn", "Setting type has no effect", t3);
  }
  constructor(s3) {
    super(), t(this, "_cacheContext", null), Object.assign(this, e2.ownDefaults), this.setOptions(s3);
  }
  _createCacheCanvas() {
    this._cacheCanvas = pt(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = true;
  }
  _limitCacheSize(t3) {
    const e4 = t3.width, s3 = t3.height, i3 = o.maxCacheSideLimit, r3 = o.minCacheSideLimit;
    if (e4 <= i3 && s3 <= i3 && e4 * s3 <= o.perfLimitSizeTotal) return e4 < r3 && (t3.width = r3), s3 < r3 && (t3.height = r3), t3;
    const n3 = e4 / s3, [a3, h3] = _.limitDimsByArea(n3), c3 = ks(r3, a3, i3), l3 = ks(r3, h3, i3);
    return e4 > c3 && (t3.zoomX /= e4 / c3, t3.width = c3, t3.capped = true), s3 > l3 && (t3.zoomY /= s3 / l3, t3.height = l3, t3.capped = true), t3;
  }
  _getCacheCanvasDimensions() {
    const t3 = this.getTotalObjectScaling(), e4 = this._getTransformedDimensions({
      skewX: 0,
      skewY: 0
    }), s3 = e4.x * t3.x / this.scaleX, i3 = e4.y * t3.y / this.scaleY;
    return {
      width: Math.ceil(s3 + 2),
      height: Math.ceil(i3 + 2),
      zoomX: t3.x,
      zoomY: t3.y,
      x: s3,
      y: i3
    };
  }
  _updateCacheCanvas() {
    const t3 = this._cacheCanvas, e4 = this._cacheContext, { width: s3, height: i3, zoomX: r3, zoomY: n3, x: o3, y: a3 } = this._limitCacheSize(this._getCacheCanvasDimensions()), h3 = s3 !== t3.width || i3 !== t3.height, c3 = this.zoomX !== r3 || this.zoomY !== n3;
    if (!t3 || !e4) return false;
    if (h3 || c3) {
      s3 !== t3.width || i3 !== t3.height ? (t3.width = s3, t3.height = i3) : (e4.setTransform(1, 0, 0, 1, 0, 0), e4.clearRect(0, 0, t3.width, t3.height));
      const h4 = o3 / 2, c4 = a3 / 2;
      return this.cacheTranslationX = Math.round(t3.width / 2 - h4) + h4, this.cacheTranslationY = Math.round(t3.height / 2 - c4) + c4, e4.translate(this.cacheTranslationX, this.cacheTranslationY), e4.scale(r3, n3), this.zoomX = r3, this.zoomY = n3, true;
    }
    return false;
  }
  setOptions() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this._setOptions(t3);
  }
  transform(t3) {
    const e4 = this.group && !this.group._transformDone || this.group && this.canvas && t3 === this.canvas.contextTop, s3 = this.calcTransformMatrix(!e4);
    t3.transform(s3[0], s3[1], s3[2], s3[3], s3[4], s3[5]);
  }
  getObjectScaling() {
    if (!this.group) return new ot(Math.abs(this.scaleX), Math.abs(this.scaleY));
    const t3 = Dt(this.calcTransformMatrix());
    return new ot(Math.abs(t3.scaleX), Math.abs(t3.scaleY));
  }
  getTotalObjectScaling() {
    const t3 = this.getObjectScaling();
    if (this.canvas) {
      const e4 = this.canvas.getZoom(), s3 = this.getCanvasRetinaScaling();
      return t3.scalarMultiply(e4 * s3);
    }
    return t3;
  }
  getObjectOpacity() {
    let t3 = this.opacity;
    return this.group && (t3 *= this.group.getObjectOpacity()), t3;
  }
  _constrainScale(t3) {
    return Math.abs(t3) < this.minScaleLimit ? t3 < 0 ? -this.minScaleLimit : this.minScaleLimit : 0 === t3 ? 1e-4 : t3;
  }
  _set(t3, e4) {
    t3 !== H && t3 !== N || (e4 = this._constrainScale(e4)), t3 === H && e4 < 0 ? (this.flipX = !this.flipX, e4 *= -1) : "scaleY" === t3 && e4 < 0 ? (this.flipY = !this.flipY, e4 *= -1) : "shadow" !== t3 || !e4 || e4 instanceof Os || (e4 = new Os(e4));
    const s3 = this[t3] !== e4;
    return this[t3] = e4, s3 && this.constructor.cacheProperties.includes(t3) && (this.dirty = true), this.parent && (this.dirty || s3 && this.constructor.stateProperties.includes(t3)) && this.parent._set("dirty", true), this;
  }
  isNotVisible() {
    return 0 === this.opacity || !this.width && !this.height && 0 === this.strokeWidth || !this.visible;
  }
  render(t3) {
    this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (t3.save(), this._setupCompositeOperation(t3), this.drawSelectionBackground(t3), this.transform(t3), this._setOpacity(t3), this._setShadow(t3), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(t3)) : (this._removeCacheCanvas(), this.drawObject(t3, false, {}), this.dirty = false), t3.restore());
  }
  drawSelectionBackground(t3) {
  }
  renderCache(t3) {
    if (t3 = t3 || {}, this._cacheCanvas && this._cacheContext || this._createCacheCanvas(), this.isCacheDirty() && this._cacheContext) {
      const { zoomX: e4, zoomY: s3, cacheTranslationX: i3, cacheTranslationY: r3 } = this, { width: n3, height: o3 } = this._cacheCanvas;
      this.drawObject(this._cacheContext, t3.forClipping, {
        zoomX: e4,
        zoomY: s3,
        cacheTranslationX: i3,
        cacheTranslationY: r3,
        width: n3,
        height: o3,
        parentClipPaths: []
      }), this.dirty = false;
    }
  }
  _removeCacheCanvas() {
    this._cacheCanvas = void 0, this._cacheContext = null;
  }
  hasStroke() {
    return this.stroke && "transparent" !== this.stroke && 0 !== this.strokeWidth;
  }
  hasFill() {
    return this.fill && "transparent" !== this.fill;
  }
  needsItsOwnCache() {
    return !!(this.paintFirst === J && this.hasFill() && this.hasStroke() && this.shadow) || !!this.clipPath;
  }
  shouldCache() {
    return this.ownCaching = this.objectCaching && (!this.parent || !this.parent.isOnACache()) || this.needsItsOwnCache(), this.ownCaching;
  }
  willDrawShadow() {
    return !!this.shadow && (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY);
  }
  drawClipPathOnCache(t3, e4, s3) {
    t3.save(), e4.inverted ? t3.globalCompositeOperation = "destination-out" : t3.globalCompositeOperation = "destination-in", t3.setTransform(1, 0, 0, 1, 0, 0), t3.drawImage(s3, 0, 0), t3.restore();
  }
  drawObject(t3, e4, s3) {
    const i3 = this.fill, r3 = this.stroke;
    e4 ? (this.fill = "black", this.stroke = "", this._setClippingProperties(t3)) : this._renderBackground(t3), this._render(t3), this._drawClipPath(t3, this.clipPath, s3), this.fill = i3, this.stroke = r3;
  }
  createClipPathLayer(t3, e4) {
    const s3 = vt(e4), i3 = s3.getContext("2d");
    if (i3.translate(e4.cacheTranslationX, e4.cacheTranslationY), i3.scale(e4.zoomX, e4.zoomY), t3._cacheCanvas = s3, e4.parentClipPaths.forEach((t4) => {
      t4.transform(i3);
    }), e4.parentClipPaths.push(t3), t3.absolutePositioned) {
      const t4 = wt(this.calcTransformMatrix());
      i3.transform(t4[0], t4[1], t4[2], t4[3], t4[4], t4[5]);
    }
    return t3.transform(i3), t3.drawObject(i3, true, e4), s3;
  }
  _drawClipPath(t3, e4, s3) {
    if (!e4) return;
    e4._transformDone = true;
    const i3 = this.createClipPathLayer(e4, s3);
    this.drawClipPathOnCache(t3, e4, i3);
  }
  drawCacheOnCanvas(t3) {
    t3.scale(1 / this.zoomX, 1 / this.zoomY), t3.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
  }
  isCacheDirty() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (this.isNotVisible()) return false;
    const e4 = this._cacheCanvas, s3 = this._cacheContext;
    return !(!e4 || !s3 || t3 || !this._updateCacheCanvas()) || !!(this.dirty || this.clipPath && this.clipPath.absolutePositioned) && (e4 && s3 && !t3 && (s3.save(), s3.setTransform(1, 0, 0, 1, 0, 0), s3.clearRect(0, 0, e4.width, e4.height), s3.restore()), true);
  }
  _renderBackground(t3) {
    if (!this.backgroundColor) return;
    const e4 = this._getNonTransformedDimensions();
    t3.fillStyle = this.backgroundColor, t3.fillRect(-e4.x / 2, -e4.y / 2, e4.x, e4.y), this._removeShadow(t3);
  }
  _setOpacity(t3) {
    this.group && !this.group._transformDone ? t3.globalAlpha = this.getObjectOpacity() : t3.globalAlpha *= this.opacity;
  }
  _setStrokeStyles(t3, e4) {
    const s3 = e4.stroke;
    s3 && (t3.lineWidth = e4.strokeWidth, t3.lineCap = e4.strokeLineCap, t3.lineDashOffset = e4.strokeDashOffset, t3.lineJoin = e4.strokeLineJoin, t3.miterLimit = e4.strokeMiterLimit, zt(s3) ? "percentage" === s3.gradientUnits || s3.gradientTransform || s3.patternTransform ? this._applyPatternForTransformedGradient(t3, s3) : (t3.strokeStyle = s3.toLive(t3), this._applyPatternGradientTransform(t3, s3)) : t3.strokeStyle = e4.stroke);
  }
  _setFillStyles(t3, e4) {
    let { fill: s3 } = e4;
    s3 && (zt(s3) ? (t3.fillStyle = s3.toLive(t3), this._applyPatternGradientTransform(t3, s3)) : t3.fillStyle = s3);
  }
  _setClippingProperties(t3) {
    t3.globalAlpha = 1, t3.strokeStyle = "transparent", t3.fillStyle = "#000000";
  }
  _setLineDash(t3, e4) {
    e4 && 0 !== e4.length && t3.setLineDash(e4);
  }
  _setShadow(t3) {
    if (!this.shadow) return;
    const e4 = this.shadow, s3 = this.canvas, i3 = this.getCanvasRetinaScaling(), [r3, , , n3] = (null == s3 ? void 0 : s3.viewportTransform) || T, a3 = r3 * i3, h3 = n3 * i3, c3 = e4.nonScaling ? new ot(1, 1) : this.getObjectScaling();
    t3.shadowColor = e4.color, t3.shadowBlur = e4.blur * o.browserShadowBlurConstant * (a3 + h3) * (c3.x + c3.y) / 4, t3.shadowOffsetX = e4.offsetX * a3 * c3.x, t3.shadowOffsetY = e4.offsetY * h3 * c3.y;
  }
  _removeShadow(t3) {
    this.shadow && (t3.shadowColor = "", t3.shadowBlur = t3.shadowOffsetX = t3.shadowOffsetY = 0);
  }
  _applyPatternGradientTransform(t3, e4) {
    if (!zt(e4)) return {
      offsetX: 0,
      offsetY: 0
    };
    const s3 = e4.gradientTransform || e4.patternTransform, i3 = -this.width / 2 + e4.offsetX || 0, r3 = -this.height / 2 + e4.offsetY || 0;
    return "percentage" === e4.gradientUnits ? t3.transform(this.width, 0, 0, this.height, i3, r3) : t3.transform(1, 0, 0, 1, i3, r3), s3 && t3.transform(s3[0], s3[1], s3[2], s3[3], s3[4], s3[5]), {
      offsetX: i3,
      offsetY: r3
    };
  }
  _renderPaintInOrder(t3) {
    this.paintFirst === J ? (this._renderStroke(t3), this._renderFill(t3)) : (this._renderFill(t3), this._renderStroke(t3));
  }
  _render(t3) {
  }
  _renderFill(t3) {
    this.fill && (t3.save(), this._setFillStyles(t3, this), "evenodd" === this.fillRule ? t3.fill("evenodd") : t3.fill(), t3.restore());
  }
  _renderStroke(t3) {
    if (this.stroke && 0 !== this.strokeWidth) {
      if (this.shadow && !this.shadow.affectStroke && this._removeShadow(t3), t3.save(), this.strokeUniform) {
        const e4 = this.getObjectScaling();
        t3.scale(1 / e4.x, 1 / e4.y);
      }
      this._setLineDash(t3, this.strokeDashArray), this._setStrokeStyles(t3, this), t3.stroke(), t3.restore();
    }
  }
  _applyPatternForTransformedGradient(t3, e4) {
    var s3;
    const i3 = this._limitCacheSize(this._getCacheCanvasDimensions()), r3 = this.getCanvasRetinaScaling(), n3 = i3.x / this.scaleX / r3, o3 = i3.y / this.scaleY / r3, a3 = vt({
      width: Math.ceil(n3),
      height: Math.ceil(o3)
    }), h3 = a3.getContext("2d");
    h3 && (h3.beginPath(), h3.moveTo(0, 0), h3.lineTo(n3, 0), h3.lineTo(n3, o3), h3.lineTo(0, o3), h3.closePath(), h3.translate(n3 / 2, o3 / 2), h3.scale(i3.zoomX / this.scaleX / r3, i3.zoomY / this.scaleY / r3), this._applyPatternGradientTransform(h3, e4), h3.fillStyle = e4.toLive(t3), h3.fill(), t3.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), t3.scale(r3 * this.scaleX / i3.zoomX, r3 * this.scaleY / i3.zoomY), t3.strokeStyle = null !== (s3 = h3.createPattern(a3, "no-repeat")) && void 0 !== s3 ? s3 : "");
  }
  _findCenterFromElement() {
    return new ot(this.left + this.width / 2, this.top + this.height / 2);
  }
  clone(t3) {
    const e4 = this.toObject(t3);
    return this.constructor.fromObject(e4);
  }
  cloneAsImage(t3) {
    const e4 = this.toCanvasElement(t3);
    return new (tt.getClass("image"))(e4);
  }
  toCanvasElement() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e4 = de(this), s3 = this.group, i3 = this.shadow, r3 = Math.abs, n3 = t3.enableRetinaScaling ? y() : 1, o3 = (t3.multiplier || 1) * n3, a3 = t3.canvasProvider || ((t4) => new se(t4, {
      enableRetinaScaling: false,
      renderOnAddRemove: false,
      skipOffscreen: false
    }));
    delete this.group, t3.withoutTransform && ue(this), t3.withoutShadow && (this.shadow = null), t3.viewportTransform && ve(this, this.getViewportTransform()), this.setCoords();
    const h3 = pt(), c3 = this.getBoundingRect(), l3 = this.shadow, u3 = new ot();
    if (l3) {
      const t4 = l3.blur, e5 = l3.nonScaling ? new ot(1, 1) : this.getObjectScaling();
      u3.x = 2 * Math.round(r3(l3.offsetX) + t4) * r3(e5.x), u3.y = 2 * Math.round(r3(l3.offsetY) + t4) * r3(e5.y);
    }
    const d3 = c3.width + u3.x, g3 = c3.height + u3.y;
    h3.width = Math.ceil(d3), h3.height = Math.ceil(g3);
    const f2 = a3(h3);
    "jpeg" === t3.format && (f2.backgroundColor = "#fff"), this.setPositionByOrigin(new ot(f2.width / 2, f2.height / 2), D, D);
    const p3 = this.canvas;
    f2._objects = [
      this
    ], this.set("canvas", f2), this.setCoords();
    const m3 = f2.toCanvasElement(o3 || 1, t3);
    return this.set("canvas", p3), this.shadow = i3, s3 && (this.group = s3), this.set(e4), this.setCoords(), f2._objects = [], f2.destroy(), m3;
  }
  toDataURL() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return yt(this.toCanvasElement(t3), t3.format || "png", t3.quality || 1);
  }
  toBlob() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return _t(this.toCanvasElement(t3), t3.format || "png", t3.quality || 1);
  }
  isType() {
    for (var t3 = arguments.length, e4 = new Array(t3), s3 = 0; s3 < t3; s3++) e4[s3] = arguments[s3];
    return e4.includes(this.constructor.type) || e4.includes(this.type);
  }
  complexity() {
    return 1;
  }
  toJSON() {
    return this.toObject();
  }
  rotate(t3) {
    const { centeredRotation: e4, originX: s3, originY: i3 } = this;
    if (e4) {
      const { x: t4, y: e5 } = this.getRelativeCenterPoint();
      this.originX = D, this.originY = D, this.left = t4, this.top = e5;
    }
    if (this.set("angle", t3), e4) {
      const { x: t4, y: e5 } = this.translateToOriginPoint(this.getRelativeCenterPoint(), s3, i3);
      this.left = t4, this.top = e5, this.originX = s3, this.originY = i3;
    }
  }
  setOnGroup() {
  }
  _setupCompositeOperation(t3) {
    this.globalCompositeOperation && (t3.globalCompositeOperation = this.globalCompositeOperation);
  }
  dispose() {
    et.cancelByTarget(this), this.off(), this._set("canvas", void 0), this._cacheCanvas && p().dispose(this._cacheCanvas), this._cacheCanvas = void 0, this._cacheContext = null;
  }
  animate(t3, e4) {
    return Object.entries(t3).reduce((t4, s3) => {
      let [i3, r3] = s3;
      return t4[i3] = this._animate(i3, r3, e4), t4;
    }, {});
  }
  _animate(t3, e4) {
    let i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const r3 = t3.split("."), n3 = this.constructor.colorProperties.includes(r3[r3.length - 1]), { abort: o3, startValue: a3, onChange: h3, onComplete: c3 } = i3, l3 = s(s({}, i3), {}, {
      target: this,
      startValue: null != a3 ? a3 : r3.reduce((t4, e5) => t4[e5], this),
      endValue: e4,
      abort: null == o3 ? void 0 : o3.bind(this),
      onChange: (t4, e5, s3) => {
        r3.reduce((e6, s4, i4) => (i4 === r3.length - 1 && (e6[s4] = t4), e6[s4]), this), h3 && h3(t4, e5, s3);
      },
      onComplete: (t4, e5, s3) => {
        this.setCoords(), c3 && c3(t4, e5, s3);
      }
    });
    return n3 ? qs(l3) : Us(l3);
  }
  isDescendantOf(t3) {
    const { parent: e4, group: s3 } = this;
    return e4 === t3 || s3 === t3 || !!e4 && e4.isDescendantOf(t3) || !!s3 && s3 !== e4 && s3.isDescendantOf(t3);
  }
  getAncestors() {
    const t3 = [];
    let e4 = this;
    do {
      e4 = e4.parent, e4 && t3.push(e4);
    } while (e4);
    return t3;
  }
  findCommonAncestors(t3) {
    if (this === t3) return {
      fork: [],
      otherFork: [],
      common: [
        this,
        ...this.getAncestors()
      ]
    };
    const e4 = this.getAncestors(), s3 = t3.getAncestors();
    if (0 === e4.length && s3.length > 0 && this === s3[s3.length - 1]) return {
      fork: [],
      otherFork: [
        t3,
        ...s3.slice(0, s3.length - 1)
      ],
      common: [
        this
      ]
    };
    for (let i3, r3 = 0; r3 < e4.length; r3++) {
      if (i3 = e4[r3], i3 === t3) return {
        fork: [
          this,
          ...e4.slice(0, r3)
        ],
        otherFork: [],
        common: e4.slice(r3)
      };
      for (let n3 = 0; n3 < s3.length; n3++) {
        if (this === s3[n3]) return {
          fork: [],
          otherFork: [
            t3,
            ...s3.slice(0, n3)
          ],
          common: [
            this,
            ...e4
          ]
        };
        if (i3 === s3[n3]) return {
          fork: [
            this,
            ...e4.slice(0, r3)
          ],
          otherFork: [
            t3,
            ...s3.slice(0, n3)
          ],
          common: e4.slice(r3)
        };
      }
    }
    return {
      fork: [
        this,
        ...e4
      ],
      otherFork: [
        t3,
        ...s3
      ],
      common: []
    };
  }
  hasCommonAncestors(t3) {
    const e4 = this.findCommonAncestors(t3);
    return e4 && !!e4.common.length;
  }
  isInFrontOf(t3) {
    if (this === t3) return;
    const e4 = this.findCommonAncestors(t3);
    if (e4.fork.includes(t3)) return true;
    if (e4.otherFork.includes(this)) return false;
    const s3 = e4.common[0] || this.canvas;
    if (!s3) return;
    const i3 = e4.fork.pop(), r3 = e4.otherFork.pop(), n3 = s3._objects.indexOf(i3), o3 = s3._objects.indexOf(r3);
    return n3 > -1 && n3 > o3;
  }
  toObject() {
    const t3 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).concat(e2.customProperties, this.constructor.customProperties || []);
    let i3;
    const r3 = o.NUM_FRACTION_DIGITS, { clipPath: n3, fill: a3, stroke: h3, shadow: c3, strokeDashArray: l3, left: u3, top: d3, originX: g3, originY: f2, width: p3, height: m3, strokeWidth: v3, strokeLineCap: y3, strokeDashOffset: _3, strokeLineJoin: C3, strokeUniform: b3, strokeMiterLimit: S3, scaleX: w3, scaleY: T2, angle: O2, flipX: k3, flipY: D2, opacity: M3, visible: P2, backgroundColor: E2, fillRule: A3, paintFirst: j2, globalCompositeOperation: F3, skewX: L2, skewY: R2 } = this;
    n3 && !n3.excludeFromExport && (i3 = n3.toObject(t3.concat("inverted", "absolutePositioned")));
    const B2 = (t4) => Vt(t4, r3), I2 = s(s({}, Wt(this, t3)), {}, {
      type: this.constructor.type,
      version: x,
      originX: g3,
      originY: f2,
      left: B2(u3),
      top: B2(d3),
      width: B2(p3),
      height: B2(m3),
      fill: Ht(a3) ? a3.toObject() : a3,
      stroke: Ht(h3) ? h3.toObject() : h3,
      strokeWidth: B2(v3),
      strokeDashArray: l3 ? l3.concat() : l3,
      strokeLineCap: y3,
      strokeDashOffset: _3,
      strokeLineJoin: C3,
      strokeUniform: b3,
      strokeMiterLimit: B2(S3),
      scaleX: B2(w3),
      scaleY: B2(T2),
      angle: B2(O2),
      flipX: k3,
      flipY: D2,
      opacity: B2(M3),
      shadow: c3 ? c3.toObject() : c3,
      visible: P2,
      backgroundColor: E2,
      fillRule: A3,
      paintFirst: j2,
      globalCompositeOperation: F3,
      skewX: B2(L2),
      skewY: B2(R2)
    }, i3 ? {
      clipPath: i3
    } : null);
    return this.includeDefaultValues ? I2 : this._removeDefaultValues(I2);
  }
  toDatalessObject(t3) {
    return this.toObject(t3);
  }
  _removeDefaultValues(t3) {
    const e4 = this.constructor.getDefaults(), s3 = Object.keys(e4).length > 0 ? e4 : Object.getPrototypeOf(this);
    return Yt(t3, (t4, e5) => {
      if (e5 === M || e5 === P || "type" === e5) return true;
      const i3 = s3[e5];
      return t4 !== i3 && !(Array.isArray(t4) && Array.isArray(i3) && 0 === t4.length && 0 === i3.length);
    });
  }
  toString() {
    return "#<".concat(this.constructor.type, ">");
  }
  static _fromObject(t3) {
    let e4 = i(t3, Qs), s3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { extraParam: r3 } = s3, n3 = i(s3, Zs);
    return Xt(e4, n3).then((t4) => r3 ? (delete t4[r3], new this(e4[r3], t4)) : new this(t4));
  }
  static fromObject(t3, e4) {
    return this._fromObject(t3, e4);
  }
};
t($s, "stateProperties", Ds), t($s, "cacheProperties", Ms), t($s, "ownDefaults", Ps), t($s, "type", "FabricObject"), t($s, "colorProperties", [
  K,
  J,
  "backgroundColor"
]), t($s, "customProperties", []), tt.setClass($s), tt.setClass($s, "object");
var ti = (t3, e4, i3) => (r3, n3, o3, a3) => {
  const h3 = e4(r3, n3, o3, a3);
  return h3 && ye(t3, s(s({}, Te(r3, n3, o3, a3)), i3)), h3;
};
function ei(t3) {
  return (e4, s3, i3, r3) => {
    const { target: n3, originX: o3, originY: a3 } = s3, h3 = n3.getRelativeCenterPoint(), c3 = n3.translateToOriginPoint(h3, o3, a3), l3 = t3(e4, s3, i3, r3);
    return n3.setPositionByOrigin(c3, s3.originX, s3.originY), l3;
  };
}
var si = ti(W, ei((t3, e4, s3, i3) => {
  const r3 = ke(e4, e4.originX, e4.originY, s3, i3);
  if (xe(e4.originX) === xe(D) || xe(e4.originX) === xe(A) && r3.x < 0 || xe(e4.originX) === xe(M) && r3.x > 0) {
    const { target: t4 } = e4, s4 = t4.strokeWidth / (t4.strokeUniform ? t4.scaleX : 1), i4 = be(e4) ? 2 : 1, n3 = t4.width, o3 = Math.abs(r3.x * i4 / t4.scaleX) - s4;
    return t4.set("width", Math.max(o3, 1)), n3 !== t4.width;
  }
  return false;
}));
function ii(t3, e4, s3, i3, r3) {
  i3 = i3 || {};
  const n3 = this.sizeX || i3.cornerSize || r3.cornerSize, o3 = this.sizeY || i3.cornerSize || r3.cornerSize, a3 = void 0 !== i3.transparentCorners ? i3.transparentCorners : r3.transparentCorners, h3 = a3 ? J : K, c3 = !a3 && (i3.cornerStrokeColor || r3.cornerStrokeColor);
  let l3, u3 = e4, d3 = s3;
  t3.save(), t3.fillStyle = i3.cornerColor || r3.cornerColor || "", t3.strokeStyle = i3.cornerStrokeColor || r3.cornerStrokeColor || "", n3 > o3 ? (l3 = n3, t3.scale(1, o3 / n3), d3 = s3 * n3 / o3) : o3 > n3 ? (l3 = o3, t3.scale(n3 / o3, 1), u3 = e4 * o3 / n3) : l3 = n3, t3.beginPath(), t3.arc(u3, d3, l3 / 2, 0, S, false), t3[h3](), c3 && t3.stroke(), t3.restore();
}
function ri(t3, e4, s3, i3, r3) {
  i3 = i3 || {};
  const n3 = this.sizeX || i3.cornerSize || r3.cornerSize, o3 = this.sizeY || i3.cornerSize || r3.cornerSize, a3 = void 0 !== i3.transparentCorners ? i3.transparentCorners : r3.transparentCorners, h3 = a3 ? J : K, c3 = !a3 && (i3.cornerStrokeColor || r3.cornerStrokeColor), l3 = n3 / 2, u3 = o3 / 2;
  t3.save(), t3.fillStyle = i3.cornerColor || r3.cornerColor || "", t3.strokeStyle = i3.cornerStrokeColor || r3.cornerStrokeColor || "", t3.translate(e4, s3);
  const d3 = r3.getTotalAngle();
  t3.rotate(xt(d3)), t3["".concat(h3, "Rect")](-l3, -u3, n3, o3), c3 && t3.strokeRect(-l3, -u3, n3, o3), t3.restore();
}
var ni = class {
  constructor(e4) {
    t(this, "visible", true), t(this, "actionName", z), t(this, "angle", 0), t(this, "x", 0), t(this, "y", 0), t(this, "offsetX", 0), t(this, "offsetY", 0), t(this, "sizeX", 0), t(this, "sizeY", 0), t(this, "touchSizeX", 0), t(this, "touchSizeY", 0), t(this, "cursorStyle", "crosshair"), t(this, "withConnection", false), Object.assign(this, e4);
  }
  shouldActivate(t3, e4, s3, i3) {
    var r3;
    let { tl: n3, tr: o3, br: a3, bl: h3 } = i3;
    return (null === (r3 = e4.canvas) || void 0 === r3 ? void 0 : r3.getActiveObject()) === e4 && e4.isControlVisible(t3) && Ks.isPointInPolygon(s3, [
      n3,
      o3,
      a3,
      h3
    ]);
  }
  getActionHandler(t3, e4, s3) {
    return this.actionHandler;
  }
  getMouseDownHandler(t3, e4, s3) {
    return this.mouseDownHandler;
  }
  getMouseUpHandler(t3, e4, s3) {
    return this.mouseUpHandler;
  }
  cursorStyleHandler(t3, e4, s3) {
    return e4.cursorStyle;
  }
  getActionName(t3, e4, s3) {
    return e4.actionName;
  }
  getVisibility(t3, e4) {
    var s3, i3;
    return null !== (s3 = null === (i3 = t3._controlsVisibility) || void 0 === i3 ? void 0 : i3[e4]) && void 0 !== s3 ? s3 : this.visible;
  }
  setVisibility(t3, e4, s3) {
    this.visible = t3;
  }
  positionHandler(t3, e4, s3, i3) {
    return new ot(this.x * t3.x + this.offsetX, this.y * t3.y + this.offsetY).transform(e4);
  }
  calcCornerCoords(t3, e4, s3, i3, r3, n3) {
    const o3 = Ot([
      Mt(s3, i3),
      Pt({
        angle: t3
      }),
      Et((r3 ? this.touchSizeX : this.sizeX) || e4, (r3 ? this.touchSizeY : this.sizeY) || e4)
    ]);
    return {
      tl: new ot(-0.5, -0.5).transform(o3),
      tr: new ot(0.5, -0.5).transform(o3),
      br: new ot(0.5, 0.5).transform(o3),
      bl: new ot(-0.5, 0.5).transform(o3)
    };
  }
  render(t3, e4, s3, i3, r3) {
    if ("circle" === ((i3 = i3 || {}).cornerStyle || r3.cornerStyle)) ii.call(this, t3, e4, s3, i3, r3);
    else ri.call(this, t3, e4, s3, i3, r3);
  }
};
var oi = (t3, e4, s3) => s3.lockRotation ? Ce : e4.cursorStyle;
var ai = ti(B, ei((t3, e4, s3, i3) => {
  let { target: r3, ex: n3, ey: o3, theta: a3, originX: h3, originY: c3 } = e4;
  const l3 = r3.translateToOriginPoint(r3.getRelativeCenterPoint(), h3, c3);
  if (we(r3, "lockRotation")) return false;
  const u3 = Math.atan2(o3 - l3.y, n3 - l3.x), d3 = Math.atan2(i3 - l3.y, s3 - l3.x);
  let g3 = Ct(d3 - u3 + a3);
  if (r3.snapAngle && r3.snapAngle > 0) {
    const t4 = r3.snapAngle, e5 = r3.snapThreshold || t4, s4 = Math.ceil(g3 / t4) * t4, i4 = Math.floor(g3 / t4) * t4;
    Math.abs(g3 - i4) < e5 ? g3 = i4 : Math.abs(g3 - s4) < e5 && (g3 = s4);
  }
  g3 < 0 && (g3 = 360 + g3), g3 %= 360;
  const f2 = r3.angle !== g3;
  return r3.angle = g3, f2;
}));
function hi(t3, e4) {
  const s3 = e4.canvas, i3 = t3[s3.uniScaleKey];
  return s3.uniformScaling && !i3 || !s3.uniformScaling && i3;
}
function ci(t3, e4, s3) {
  const i3 = we(t3, "lockScalingX"), r3 = we(t3, "lockScalingY");
  if (i3 && r3) return true;
  if (!e4 && (i3 || r3) && s3) return true;
  if (i3 && "x" === e4) return true;
  if (r3 && "y" === e4) return true;
  const { width: n3, height: o3, strokeWidth: a3 } = t3;
  return 0 === n3 && 0 === a3 && "y" !== e4 || 0 === o3 && 0 === a3 && "x" !== e4;
}
var li = [
  "e",
  "se",
  "s",
  "sw",
  "w",
  "nw",
  "n",
  "ne",
  "e"
];
var ui = (t3, e4, s3) => {
  const i3 = hi(t3, s3);
  if (ci(s3, 0 !== e4.x && 0 === e4.y ? "x" : 0 === e4.x && 0 !== e4.y ? "y" : "", i3)) return Ce;
  const r3 = Oe(s3, e4);
  return "".concat(li[r3], "-resize");
};
function di(t3, e4, s3, i3) {
  let r3 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
  const n3 = e4.target, o3 = r3.by, a3 = hi(t3, n3);
  let h3, c3, l3, u3, d3, g3;
  if (ci(n3, o3, a3)) return false;
  if (e4.gestureScale) c3 = e4.scaleX * e4.gestureScale, l3 = e4.scaleY * e4.gestureScale;
  else {
    if (h3 = ke(e4, e4.originX, e4.originY, s3, i3), d3 = "y" !== o3 ? Math.sign(h3.x || e4.signX || 1) : 1, g3 = "x" !== o3 ? Math.sign(h3.y || e4.signY || 1) : 1, e4.signX || (e4.signX = d3), e4.signY || (e4.signY = g3), we(n3, "lockScalingFlip") && (e4.signX !== d3 || e4.signY !== g3)) return false;
    if (u3 = n3._getTransformedDimensions(), a3 && !o3) {
      const t4 = Math.abs(h3.x) + Math.abs(h3.y), { original: s4 } = e4, i4 = t4 / (Math.abs(u3.x * s4.scaleX / n3.scaleX) + Math.abs(u3.y * s4.scaleY / n3.scaleY));
      c3 = s4.scaleX * i4, l3 = s4.scaleY * i4;
    } else c3 = Math.abs(h3.x * n3.scaleX / u3.x), l3 = Math.abs(h3.y * n3.scaleY / u3.y);
    be(e4) && (c3 *= 2, l3 *= 2), e4.signX !== d3 && "y" !== o3 && (e4.originX = Se(e4.originX), c3 *= -1, e4.signX = d3), e4.signY !== g3 && "x" !== o3 && (e4.originY = Se(e4.originY), l3 *= -1, e4.signY = g3);
  }
  const f2 = n3.scaleX, p3 = n3.scaleY;
  return o3 ? ("x" === o3 && n3.set(H, c3), "y" === o3 && n3.set(N, l3)) : (!we(n3, "lockScalingX") && n3.set(H, c3), !we(n3, "lockScalingY") && n3.set(N, l3)), f2 !== n3.scaleX || p3 !== n3.scaleY;
}
var gi = ti(R, ei((t3, e4, s3, i3) => di(t3, e4, s3, i3)));
var fi = ti(R, ei((t3, e4, s3, i3) => di(t3, e4, s3, i3, {
  by: "x"
})));
var pi = ti(R, ei((t3, e4, s3, i3) => di(t3, e4, s3, i3, {
  by: "y"
})));
var mi = [
  "target",
  "ex",
  "ey",
  "skewingSide"
];
var vi = {
  x: {
    counterAxis: "y",
    scale: H,
    skew: U,
    lockSkewing: "lockSkewingX",
    origin: "originX",
    flip: "flipX"
  },
  y: {
    counterAxis: "x",
    scale: N,
    skew: q,
    lockSkewing: "lockSkewingY",
    origin: "originY",
    flip: "flipY"
  }
};
var yi = [
  "ns",
  "nesw",
  "ew",
  "nwse"
];
var _i = (t3, e4, s3) => {
  if (0 !== e4.x && we(s3, "lockSkewingY")) return Ce;
  if (0 !== e4.y && we(s3, "lockSkewingX")) return Ce;
  const i3 = Oe(s3, e4) % 4;
  return "".concat(yi[i3], "-resize");
};
function xi(t3, e4, r3, n3, o3) {
  const { target: a3 } = r3, { counterAxis: h3, origin: c3, lockSkewing: l3, skew: u3, flip: d3 } = vi[t3];
  if (we(a3, l3)) return false;
  const { origin: g3, flip: f2 } = vi[h3], p3 = xe(r3[g3]) * (a3[f2] ? -1 : 1), m3 = -Math.sign(p3) * (a3[d3] ? -1 : 1), v3 = 0.5 * -((0 === a3[u3] && ke(r3, D, D, n3, o3)[t3] > 0 || a3[u3] > 0 ? 1 : -1) * m3) + 0.5, y3 = ti(X, ei((e5, s3, r4, n4) => function(t4, e6, s4) {
    let { target: r5, ex: n5, ey: o4, skewingSide: a4 } = e6, h4 = i(e6, mi);
    const { skew: c4 } = vi[t4], l4 = s4.subtract(new ot(n5, o4)).divide(new ot(r5.scaleX, r5.scaleY))[t4], u4 = r5[c4], d4 = h4[c4], g4 = Math.tan(xt(d4)), f3 = "y" === t4 ? r5._getTransformedDimensions({
      scaleX: 1,
      scaleY: 1,
      skewX: 0
    }).x : r5._getTransformedDimensions({
      scaleX: 1,
      scaleY: 1
    }).y, p4 = 2 * l4 * a4 / Math.max(f3, 1) + g4, m4 = Ct(Math.atan(p4));
    r5.set(c4, m4);
    const v4 = u4 !== r5[c4];
    if (v4 && "y" === t4) {
      const { skewX: t5, scaleX: e7 } = r5, s5 = r5._getTransformedDimensions({
        skewY: u4
      }), i3 = r5._getTransformedDimensions(), n6 = 0 !== t5 ? s5.x / i3.x : 1;
      1 !== n6 && r5.set(H, n6 * e7);
    }
    return v4;
  }(t3, s3, new ot(r4, n4))));
  return y3(e4, s(s({}, r3), {}, {
    [c3]: v3,
    skewingSide: m3
  }), n3, o3);
}
var Ci = (t3, e4, s3, i3) => xi("x", t3, e4, s3, i3);
var bi = (t3, e4, s3, i3) => xi("y", t3, e4, s3, i3);
function Si(t3, e4) {
  return t3[e4.canvas.altActionKey];
}
var wi = (t3, e4, s3) => {
  const i3 = Si(t3, s3);
  return 0 === e4.x ? i3 ? U : N : 0 === e4.y ? i3 ? q : H : "";
};
var Ti = (t3, e4, s3) => Si(t3, s3) ? _i(0, e4, s3) : ui(t3, e4, s3);
var Oi = (t3, e4, s3, i3) => Si(t3, e4.target) ? bi(t3, e4, s3, i3) : fi(t3, e4, s3, i3);
var ki = (t3, e4, s3, i3) => Si(t3, e4.target) ? Ci(t3, e4, s3, i3) : pi(t3, e4, s3, i3);
var Di = () => ({
  ml: new ni({
    x: -0.5,
    y: 0,
    cursorStyleHandler: Ti,
    actionHandler: Oi,
    getActionName: wi
  }),
  mr: new ni({
    x: 0.5,
    y: 0,
    cursorStyleHandler: Ti,
    actionHandler: Oi,
    getActionName: wi
  }),
  mb: new ni({
    x: 0,
    y: 0.5,
    cursorStyleHandler: Ti,
    actionHandler: ki,
    getActionName: wi
  }),
  mt: new ni({
    x: 0,
    y: -0.5,
    cursorStyleHandler: Ti,
    actionHandler: ki,
    getActionName: wi
  }),
  tl: new ni({
    x: -0.5,
    y: -0.5,
    cursorStyleHandler: ui,
    actionHandler: gi
  }),
  tr: new ni({
    x: 0.5,
    y: -0.5,
    cursorStyleHandler: ui,
    actionHandler: gi
  }),
  bl: new ni({
    x: -0.5,
    y: 0.5,
    cursorStyleHandler: ui,
    actionHandler: gi
  }),
  br: new ni({
    x: 0.5,
    y: 0.5,
    cursorStyleHandler: ui,
    actionHandler: gi
  }),
  mtr: new ni({
    x: 0,
    y: -0.5,
    actionHandler: ai,
    cursorStyleHandler: oi,
    offsetY: -40,
    withConnection: true,
    actionName: I
  })
});
var Mi = () => ({
  mr: new ni({
    x: 0.5,
    y: 0,
    actionHandler: si,
    cursorStyleHandler: Ti,
    actionName: W
  }),
  ml: new ni({
    x: -0.5,
    y: 0,
    actionHandler: si,
    cursorStyleHandler: Ti,
    actionName: W
  })
});
var Pi = () => s(s({}, Di()), Mi());
var Ei = class _Ei extends $s {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _Ei.ownDefaults);
  }
  constructor(t3) {
    super(), Object.assign(this, this.constructor.createControls(), _Ei.ownDefaults), this.setOptions(t3);
  }
  static createControls() {
    return {
      controls: Di()
    };
  }
  _updateCacheCanvas() {
    const t3 = this.canvas;
    if (this.noScaleCache && t3 && t3._currentTransform) {
      const e4 = t3._currentTransform, s3 = e4.target, i3 = e4.action;
      if (this === s3 && i3 && i3.startsWith(z)) return false;
    }
    return super._updateCacheCanvas();
  }
  getActiveControl() {
    const t3 = this.__corner;
    return t3 ? {
      key: t3,
      control: this.controls[t3],
      coord: this.oCoords[t3]
    } : void 0;
  }
  findControl(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!this.hasControls || !this.canvas) return;
    this.__corner = void 0;
    const s3 = Object.entries(this.oCoords);
    for (let i3 = s3.length - 1; i3 >= 0; i3--) {
      const [r3, n3] = s3[i3], o3 = this.controls[r3];
      if (o3.shouldActivate(r3, this, t3, e4 ? n3.touchCorner : n3.corner)) return this.__corner = r3, {
        key: r3,
        control: o3,
        coord: this.oCoords[r3]
      };
    }
  }
  calcOCoords() {
    const t3 = this.getViewportTransform(), e4 = this.getCenterPoint(), s3 = Mt(e4.x, e4.y), i3 = Pt({
      angle: this.getTotalAngle() - (this.group && this.flipX ? 180 : 0)
    }), r3 = Tt(s3, i3), n3 = Tt(t3, r3), o3 = Tt(n3, [
      1 / t3[0],
      0,
      0,
      1 / t3[3],
      0,
      0
    ]), a3 = this.group ? Dt(this.calcTransformMatrix()) : void 0;
    a3 && (a3.scaleX = Math.abs(a3.scaleX), a3.scaleY = Math.abs(a3.scaleY));
    const h3 = this._calculateCurrentDimensions(a3), c3 = {};
    return this.forEachControl((t4, e5) => {
      const s4 = t4.positionHandler(h3, o3, this, t4);
      c3[e5] = Object.assign(s4, this._calcCornerCoords(t4, s4));
    }), c3;
  }
  _calcCornerCoords(t3, e4) {
    const s3 = this.getTotalAngle();
    return {
      corner: t3.calcCornerCoords(s3, this.cornerSize, e4.x, e4.y, false, this),
      touchCorner: t3.calcCornerCoords(s3, this.touchCornerSize, e4.x, e4.y, true, this)
    };
  }
  setCoords() {
    super.setCoords(), this.canvas && (this.oCoords = this.calcOCoords());
  }
  forEachControl(t3) {
    for (const e4 in this.controls) t3(this.controls[e4], e4, this);
  }
  drawSelectionBackground(t3) {
    if (!this.selectionBackgroundColor || this.canvas && this.canvas._activeObject !== this) return;
    t3.save();
    const e4 = this.getRelativeCenterPoint(), s3 = this._calculateCurrentDimensions(), i3 = this.getViewportTransform();
    t3.translate(e4.x, e4.y), t3.scale(1 / i3[0], 1 / i3[3]), t3.rotate(xt(this.angle)), t3.fillStyle = this.selectionBackgroundColor, t3.fillRect(-s3.x / 2, -s3.y / 2, s3.x, s3.y), t3.restore();
  }
  strokeBorders(t3, e4) {
    t3.strokeRect(-e4.x / 2, -e4.y / 2, e4.x, e4.y);
  }
  _drawBorders(t3, e4) {
    let i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const r3 = s({
      hasControls: this.hasControls,
      borderColor: this.borderColor,
      borderDashArray: this.borderDashArray
    }, i3);
    t3.save(), t3.strokeStyle = r3.borderColor, this._setLineDash(t3, r3.borderDashArray), this.strokeBorders(t3, e4), r3.hasControls && this.drawControlsConnectingLines(t3, e4), t3.restore();
  }
  _renderControls(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const { hasBorders: i3, hasControls: r3 } = this, n3 = s({
      hasBorders: i3,
      hasControls: r3
    }, e4), o3 = this.getViewportTransform(), a3 = n3.hasBorders, h3 = n3.hasControls, c3 = Tt(o3, this.calcTransformMatrix()), l3 = Dt(c3);
    t3.save(), t3.translate(l3.translateX, l3.translateY), t3.lineWidth = this.borderScaleFactor, this.group === this.parent && (t3.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (l3.angle -= 180), t3.rotate(xt(this.group ? l3.angle : this.angle)), a3 && this.drawBorders(t3, l3, e4), h3 && this.drawControls(t3, e4), t3.restore();
  }
  drawBorders(t3, e4, s3) {
    let i3;
    if (s3 && s3.forActiveSelection || this.group) {
      const t4 = ge(this.width, this.height, Lt(e4)), s4 = this.isStrokeAccountedForInDimensions() ? at : (this.strokeUniform ? new ot().scalarAdd(this.canvas ? this.canvas.getZoom() : 1) : new ot(e4.scaleX, e4.scaleY)).scalarMultiply(this.strokeWidth);
      i3 = t4.add(s4).scalarAdd(this.borderScaleFactor).scalarAdd(2 * this.padding);
    } else i3 = this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);
    this._drawBorders(t3, i3, s3);
  }
  drawControlsConnectingLines(t3, e4) {
    let s3 = false;
    t3.beginPath(), this.forEachControl((i3, r3) => {
      i3.withConnection && i3.getVisibility(this, r3) && (s3 = true, t3.moveTo(i3.x * e4.x, i3.y * e4.y), t3.lineTo(i3.x * e4.x + i3.offsetX, i3.y * e4.y + i3.offsetY));
    }), s3 && t3.stroke();
  }
  drawControls(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    t3.save();
    const i3 = this.getCanvasRetinaScaling(), { cornerStrokeColor: r3, cornerDashArray: n3, cornerColor: o3 } = this, a3 = s({
      cornerStrokeColor: r3,
      cornerDashArray: n3,
      cornerColor: o3
    }, e4);
    t3.setTransform(i3, 0, 0, i3, 0, 0), t3.strokeStyle = t3.fillStyle = a3.cornerColor, this.transparentCorners || (t3.strokeStyle = a3.cornerStrokeColor), this._setLineDash(t3, a3.cornerDashArray), this.forEachControl((e5, s3) => {
      if (e5.getVisibility(this, s3)) {
        const i4 = this.oCoords[s3];
        e5.render(t3, i4.x, i4.y, a3, this);
      }
    }), t3.restore();
  }
  isControlVisible(t3) {
    return this.controls[t3] && this.controls[t3].getVisibility(this, t3);
  }
  setControlVisible(t3, e4) {
    this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[t3] = e4;
  }
  setControlsVisibility() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    Object.entries(t3).forEach((t4) => {
      let [e4, s3] = t4;
      return this.setControlVisible(e4, s3);
    });
  }
  clearContextTop(t3) {
    if (!this.canvas) return;
    const e4 = this.canvas.contextTop;
    if (!e4) return;
    const s3 = this.canvas.viewportTransform;
    e4.save(), e4.transform(s3[0], s3[1], s3[2], s3[3], s3[4], s3[5]), this.transform(e4);
    const i3 = this.width + 4, r3 = this.height + 4;
    return e4.clearRect(-i3 / 2, -r3 / 2, i3, r3), t3 || e4.restore(), e4;
  }
  onDeselect(t3) {
    return false;
  }
  onSelect(t3) {
    return false;
  }
  shouldStartDragging(t3) {
    return false;
  }
  onDragStart(t3) {
    return false;
  }
  canDrop(t3) {
    return false;
  }
  renderDragSourceEffect(t3) {
  }
  renderDropTargetEffect(t3) {
  }
};
function Ai(t3, e4) {
  return e4.forEach((e5) => {
    Object.getOwnPropertyNames(e5.prototype).forEach((s3) => {
      "constructor" !== s3 && Object.defineProperty(t3.prototype, s3, Object.getOwnPropertyDescriptor(e5.prototype, s3) || /* @__PURE__ */ Object.create(null));
    });
  }), t3;
}
t(Ei, "ownDefaults", {
  noScaleCache: true,
  lockMovementX: false,
  lockMovementY: false,
  lockRotation: false,
  lockScalingX: false,
  lockScalingY: false,
  lockSkewingX: false,
  lockSkewingY: false,
  lockScalingFlip: false,
  cornerSize: 13,
  touchCornerSize: 24,
  transparentCorners: true,
  cornerColor: "rgb(178,204,255)",
  cornerStrokeColor: "",
  cornerStyle: "rect",
  cornerDashArray: null,
  hasControls: true,
  borderColor: "rgb(178,204,255)",
  borderDashArray: null,
  borderOpacityWhenMoving: 0.4,
  borderScaleFactor: 1,
  hasBorders: true,
  selectionBackgroundColor: "",
  selectable: true,
  evented: true,
  perPixelTargetFind: false,
  activeOn: "down",
  hoverCursor: null,
  moveCursor: null
});
var ji = class extends Ei {
};
Ai(ji, [
  Xe
]), tt.setClass(ji), tt.setClass(ji, "object");
var Fi = (t3, e4, s3, i3) => {
  const r3 = 2 * (i3 = Math.round(i3)) + 1, { data: n3 } = t3.getImageData(e4 - i3, s3 - i3, r3, r3);
  for (let t4 = 3; t4 < n3.length; t4 += 4) {
    if (n3[t4] > 0) return false;
  }
  return true;
};
var Li = class {
  constructor(t3) {
    this.options = t3, this.strokeProjectionMagnitude = this.options.strokeWidth / 2, this.scale = new ot(this.options.scaleX, this.options.scaleY), this.strokeUniformScalar = this.options.strokeUniform ? new ot(1 / this.options.scaleX, 1 / this.options.scaleY) : new ot(1, 1);
  }
  createSideVector(t3, e4) {
    const s3 = ps(t3, e4);
    return this.options.strokeUniform ? s3.multiply(this.scale) : s3;
  }
  projectOrthogonally(t3, e4, s3) {
    return this.applySkew(t3.add(this.calcOrthogonalProjection(t3, e4, s3)));
  }
  isSkewed() {
    return 0 !== this.options.skewX || 0 !== this.options.skewY;
  }
  applySkew(t3) {
    const e4 = new ot(t3);
    return e4.y += e4.x * Math.tan(xt(this.options.skewY)), e4.x += e4.y * Math.tan(xt(this.options.skewX)), e4;
  }
  scaleUnitVector(t3, e4) {
    return t3.multiply(this.strokeUniformScalar).scalarMultiply(e4);
  }
};
var Ri = new ot();
var Bi = class _Bi extends Li {
  static getOrthogonalRotationFactor(t3, e4) {
    const s3 = e4 ? vs(t3, e4) : ys(t3);
    return Math.abs(s3) < b ? -1 : 1;
  }
  constructor(e4, s3, i3, r3) {
    super(r3), t(this, "AB", void 0), t(this, "AC", void 0), t(this, "alpha", void 0), t(this, "bisector", void 0), this.A = new ot(e4), this.B = new ot(s3), this.C = new ot(i3), this.AB = this.createSideVector(this.A, this.B), this.AC = this.createSideVector(this.A, this.C), this.alpha = vs(this.AB, this.AC), this.bisector = _s(fs(this.AB.eq(Ri) ? this.AC : this.AB, this.alpha / 2));
  }
  calcOrthogonalProjection(t3, e4) {
    let s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude;
    const i3 = this.createSideVector(t3, e4), r3 = xs(i3), n3 = _Bi.getOrthogonalRotationFactor(r3, this.bisector);
    return this.scaleUnitVector(r3, s3 * n3);
  }
  projectBevel() {
    const t3 = [];
    return (this.alpha % S == 0 ? [
      this.B
    ] : [
      this.B,
      this.C
    ]).forEach((e4) => {
      t3.push(this.projectOrthogonally(this.A, e4)), t3.push(this.projectOrthogonally(this.A, e4, -this.strokeProjectionMagnitude));
    }), t3;
  }
  projectMiter() {
    const t3 = [], e4 = Math.abs(this.alpha), s3 = 1 / Math.sin(e4 / 2), i3 = this.scaleUnitVector(this.bisector, -this.strokeProjectionMagnitude * s3), r3 = this.options.strokeUniform ? ms(this.scaleUnitVector(this.bisector, this.options.strokeMiterLimit)) : this.options.strokeMiterLimit;
    return ms(i3) / this.strokeProjectionMagnitude <= r3 && t3.push(this.applySkew(this.A.add(i3))), t3.push(...this.projectBevel()), t3;
  }
  projectRoundNoSkew(t3, e4) {
    const s3 = [], i3 = new ot(_Bi.getOrthogonalRotationFactor(this.bisector), _Bi.getOrthogonalRotationFactor(new ot(this.bisector.y, this.bisector.x)));
    return [
      new ot(1, 0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i3),
      new ot(0, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i3)
    ].forEach((i4) => {
      Ss(i4, t3, e4) && s3.push(this.A.add(i4));
    }), s3;
  }
  projectRoundWithSkew(t3, e4) {
    const s3 = [], { skewX: i3, skewY: r3, scaleX: n3, scaleY: o3, strokeUniform: a3 } = this.options, h3 = new ot(Math.tan(xt(i3)), Math.tan(xt(r3))), c3 = this.strokeProjectionMagnitude, l3 = a3 ? c3 / o3 / Math.sqrt(1 / o3 ** 2 + 1 / n3 ** 2 * h3.y ** 2) : c3 / Math.sqrt(1 + h3.y ** 2), u3 = new ot(Math.sqrt(Math.max(c3 ** 2 - l3 ** 2, 0)), l3), d3 = a3 ? c3 / Math.sqrt(1 + h3.x ** 2 * (1 / o3) ** 2 / (1 / n3 + 1 / n3 * h3.x * h3.y) ** 2) : c3 / Math.sqrt(1 + h3.x ** 2 / (1 + h3.x * h3.y) ** 2), g3 = new ot(d3, Math.sqrt(Math.max(c3 ** 2 - d3 ** 2, 0)));
    return [
      g3,
      g3.scalarMultiply(-1),
      u3,
      u3.scalarMultiply(-1)
    ].map((t4) => this.applySkew(a3 ? t4.multiply(this.strokeUniformScalar) : t4)).forEach((i4) => {
      Ss(i4, t3, e4) && s3.push(this.applySkew(this.A).add(i4));
    }), s3;
  }
  projectRound() {
    const t3 = [];
    t3.push(...this.projectBevel());
    const e4 = this.alpha % S == 0, s3 = this.applySkew(this.A), i3 = t3[e4 ? 0 : 2].subtract(s3), r3 = t3[e4 ? 1 : 0].subtract(s3), n3 = e4 ? this.applySkew(this.AB.scalarMultiply(-1)) : this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)), o3 = Cs(i3, n3) > 0, a3 = o3 ? i3 : r3, h3 = o3 ? r3 : i3;
    return this.isSkewed() ? t3.push(...this.projectRoundWithSkew(a3, h3)) : t3.push(...this.projectRoundNoSkew(a3, h3)), t3;
  }
  projectPoints() {
    switch (this.options.strokeLineJoin) {
      case "miter":
        return this.projectMiter();
      case "round":
        return this.projectRound();
      default:
        return this.projectBevel();
    }
  }
  project() {
    return this.projectPoints().map((t3) => ({
      originPoint: this.A,
      projectedPoint: t3,
      angle: this.alpha,
      bisector: this.bisector
    }));
  }
};
var Ii = class extends Li {
  constructor(t3, e4, s3) {
    super(s3), this.A = new ot(t3), this.T = new ot(e4);
  }
  calcOrthogonalProjection(t3, e4) {
    let s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude;
    const i3 = this.createSideVector(t3, e4);
    return this.scaleUnitVector(xs(i3), s3);
  }
  projectButt() {
    return [
      this.projectOrthogonally(this.A, this.T, this.strokeProjectionMagnitude),
      this.projectOrthogonally(this.A, this.T, -this.strokeProjectionMagnitude)
    ];
  }
  projectRound() {
    const t3 = [];
    if (!this.isSkewed() && this.A.eq(this.T)) {
      const e4 = new ot(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
      t3.push(this.applySkew(this.A.add(e4)), this.applySkew(this.A.subtract(e4)));
    } else t3.push(...new Bi(this.A, this.T, this.T, this.options).projectRound());
    return t3;
  }
  projectSquare() {
    const t3 = [];
    if (this.A.eq(this.T)) {
      const e4 = new ot(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
      t3.push(this.A.add(e4), this.A.subtract(e4));
    } else {
      const e4 = this.calcOrthogonalProjection(this.A, this.T, this.strokeProjectionMagnitude), s3 = this.scaleUnitVector(_s(this.createSideVector(this.A, this.T)), -this.strokeProjectionMagnitude), i3 = this.A.add(s3);
      t3.push(i3.add(e4), i3.subtract(e4));
    }
    return t3.map((t4) => this.applySkew(t4));
  }
  projectPoints() {
    switch (this.options.strokeLineCap) {
      case "round":
        return this.projectRound();
      case "square":
        return this.projectSquare();
      default:
        return this.projectButt();
    }
  }
  project() {
    return this.projectPoints().map((t3) => ({
      originPoint: this.A,
      projectedPoint: t3
    }));
  }
};
var Xi = function(t3, e4) {
  let s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const i3 = [];
  if (0 === t3.length) return i3;
  const r3 = t3.reduce((t4, e5) => (t4[t4.length - 1].eq(e5) || t4.push(new ot(e5)), t4), [
    new ot(t3[0])
  ]);
  if (1 === r3.length) s3 = true;
  else if (!s3) {
    const t4 = r3[0], e5 = ((t5, e6) => {
      for (let s4 = t5.length - 1; s4 >= 0; s4--) if (e6(t5[s4], s4, t5)) return s4;
      return -1;
    })(r3, (e6) => !e6.eq(t4));
    r3.splice(e5 + 1);
  }
  return r3.forEach((t4, r4, n3) => {
    let o3, a3;
    0 === r4 ? (a3 = n3[1], o3 = s3 ? t4 : n3[n3.length - 1]) : r4 === n3.length - 1 ? (o3 = n3[r4 - 1], a3 = s3 ? t4 : n3[0]) : (o3 = n3[r4 - 1], a3 = n3[r4 + 1]), s3 && 1 === n3.length ? i3.push(...new Ii(t4, t4, e4).project()) : !s3 || 0 !== r4 && r4 !== n3.length - 1 ? i3.push(...new Bi(t4, o3, a3, e4).project()) : i3.push(...new Ii(t4, 0 === r4 ? a3 : o3, e4).project());
  }), i3;
};
var Wi = (t3) => {
  const e4 = {};
  return Object.keys(t3).forEach((i3) => {
    e4[i3] = {}, Object.keys(t3[i3]).forEach((r3) => {
      e4[i3][r3] = s({}, t3[i3][r3]);
    });
  }), e4;
};
var Yi = (t3) => t3.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var Vi;
var Gi = (t3) => {
  if (Vi || Vi || (Vi = "Intl" in v() && "Segmenter" in Intl && new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  })), Vi) {
    const e4 = Vi.segment(t3);
    return Array.from(e4).map((t4) => {
      let { segment: e5 } = t4;
      return e5;
    });
  }
  return zi(t3);
};
var zi = (t3) => {
  const e4 = [];
  for (let s3, i3 = 0; i3 < t3.length; i3++) false !== (s3 = Hi(t3, i3)) && e4.push(s3);
  return e4;
};
var Hi = (t3, e4) => {
  const s3 = t3.charCodeAt(e4);
  if (isNaN(s3)) return "";
  if (s3 < 55296 || s3 > 57343) return t3.charAt(e4);
  if (55296 <= s3 && s3 <= 56319) {
    if (t3.length <= e4 + 1) throw "High surrogate without following low surrogate";
    const s4 = t3.charCodeAt(e4 + 1);
    if (56320 > s4 || s4 > 57343) throw "High surrogate without following low surrogate";
    return t3.charAt(e4) + t3.charAt(e4 + 1);
  }
  if (0 === e4) throw "Low surrogate without preceding high surrogate";
  const i3 = t3.charCodeAt(e4 - 1);
  if (55296 > i3 || i3 > 56319) throw "Low surrogate without preceding high surrogate";
  return false;
};
var Ni = Object.freeze({
  __proto__: null,
  capitalize: function(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return "".concat(t3.charAt(0).toUpperCase()).concat(e4 ? t3.slice(1) : t3.slice(1).toLowerCase());
  },
  escapeXml: Yi,
  graphemeSplit: Gi
});
var Ui = function(t3, e4) {
  let s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return t3.fill !== e4.fill || t3.stroke !== e4.stroke || t3.strokeWidth !== e4.strokeWidth || t3.fontSize !== e4.fontSize || t3.fontFamily !== e4.fontFamily || t3.fontWeight !== e4.fontWeight || t3.fontStyle !== e4.fontStyle || t3.textDecorationThickness !== e4.textDecorationThickness || t3.textBackgroundColor !== e4.textBackgroundColor || t3.deltaY !== e4.deltaY || s3 && (t3.overline !== e4.overline || t3.underline !== e4.underline || t3.linethrough !== e4.linethrough);
};
var qi = (t3, e4) => {
  const s3 = e4.split("\n"), i3 = [];
  let r3 = -1, n3 = {};
  t3 = Wi(t3);
  for (let e5 = 0; e5 < s3.length; e5++) {
    const o3 = Gi(s3[e5]);
    if (t3[e5]) for (let s4 = 0; s4 < o3.length; s4++) {
      r3++;
      const o4 = t3[e5][s4];
      o4 && Object.keys(o4).length > 0 && (Ui(n3, o4, true) ? i3.push({
        start: r3,
        end: r3 + 1,
        style: o4
      }) : i3[i3.length - 1].end++), n3 = o4 || {};
    }
    else r3 += o3.length, n3 = {};
  }
  return i3;
};
var Ki = (t3, e4) => {
  if (!Array.isArray(t3)) return Wi(t3);
  const i3 = e4.split(F), r3 = {};
  let n3 = -1, o3 = 0;
  for (let e5 = 0; e5 < i3.length; e5++) {
    const a3 = Gi(i3[e5]);
    for (let i4 = 0; i4 < a3.length; i4++) n3++, t3[o3] && t3[o3].start <= n3 && n3 < t3[o3].end && (r3[e5] = r3[e5] || {}, r3[e5][i4] = s({}, t3[o3].style), n3 === t3[o3].end - 1 && o3++);
  }
  return r3;
};
var Ji = [
  "display",
  "transform",
  K,
  "fill-opacity",
  "fill-rule",
  "opacity",
  J,
  "stroke-dasharray",
  "stroke-linecap",
  "stroke-dashoffset",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "id",
  "paint-order",
  "vector-effect",
  "instantiated_by_use",
  "clip-path"
];
function Qi(t3, e4) {
  const s3 = t3.nodeName, i3 = t3.getAttribute("class"), r3 = t3.getAttribute("id"), n3 = "(?![a-zA-Z\\-]+)";
  let o3;
  if (o3 = new RegExp("^" + s3, "i"), e4 = e4.replace(o3, ""), r3 && e4.length && (o3 = new RegExp("#" + r3 + n3, "i"), e4 = e4.replace(o3, "")), i3 && e4.length) {
    const t4 = i3.split(" ");
    for (let s4 = t4.length; s4--; ) o3 = new RegExp("\\." + t4[s4] + n3, "i"), e4 = e4.replace(o3, "");
  }
  return 0 === e4.length;
}
function Zi(t3, e4) {
  let s3 = true;
  const i3 = Qi(t3, e4.pop());
  return i3 && e4.length && (s3 = function(t4, e5) {
    let s4, i4 = true;
    for (; t4.parentElement && 1 === t4.parentElement.nodeType && e5.length; ) i4 && (s4 = e5.pop()), i4 = Qi(t4 = t4.parentElement, s4);
    return 0 === e5.length;
  }(t3, e4)), i3 && s3 && 0 === e4.length;
}
var $i = (t3) => {
  var e4;
  return null !== (e4 = ns[t3]) && void 0 !== e4 ? e4 : t3;
};
var tr = new RegExp("(".concat(es, ")"), "gi");
var er = (t3) => t3.replace(tr, " $1 ").replace(/,/gi, " ").replace(/\s+/gi, " ");
var sr;
var ir;
var rr;
var nr;
var or;
var ar;
var hr;
var cr = "(".concat(es, ")");
var lr = String.raw(sr || (sr = r([
  "(skewX)(",
  ")"
], [
  "(skewX)\\(",
  "\\)"
])), cr);
var ur = String.raw(ir || (ir = r([
  "(skewY)(",
  ")"
], [
  "(skewY)\\(",
  "\\)"
])), cr);
var dr = String.raw(rr || (rr = r([
  "(rotate)(",
  "(?: ",
  " ",
  ")?)"
], [
  "(rotate)\\(",
  "(?: ",
  " ",
  ")?\\)"
])), cr, cr, cr);
var gr = String.raw(nr || (nr = r([
  "(scale)(",
  "(?: ",
  ")?)"
], [
  "(scale)\\(",
  "(?: ",
  ")?\\)"
])), cr, cr);
var fr = String.raw(or || (or = r([
  "(translate)(",
  "(?: ",
  ")?)"
], [
  "(translate)\\(",
  "(?: ",
  ")?\\)"
])), cr, cr);
var pr = String.raw(ar || (ar = r([
  "(matrix)(",
  " ",
  " ",
  " ",
  " ",
  " ",
  ")"
], [
  "(matrix)\\(",
  " ",
  " ",
  " ",
  " ",
  " ",
  "\\)"
])), cr, cr, cr, cr, cr, cr);
var mr = "(?:".concat(pr, "|").concat(fr, "|").concat(dr, "|").concat(gr, "|").concat(lr, "|").concat(ur, ")");
var vr = "(?:".concat(mr, "*)");
var yr = String.raw(hr || (hr = r([
  "^s*(?:",
  "?)s*$"
], [
  "^\\s*(?:",
  "?)\\s*$"
])), vr);
var _r = new RegExp(yr);
var xr = new RegExp(mr);
var Cr = new RegExp(mr, "g");
function br(t3) {
  const e4 = [];
  if (!(t3 = er(t3).replace(/\s*([()])\s*/gi, "$1")) || t3 && !_r.test(t3)) return [
    ...T
  ];
  for (const s3 of t3.matchAll(Cr)) {
    const t4 = xr.exec(s3[0]);
    if (!t4) continue;
    let i3 = T;
    const r3 = t4.filter((t5) => !!t5), [, n3, ...o3] = r3, [a3, h3, c3, l3, u3, d3] = o3.map((t5) => parseFloat(t5));
    switch (n3) {
      case "translate":
        i3 = Mt(a3, h3);
        break;
      case I:
        i3 = Pt({
          angle: a3
        }, {
          x: h3,
          y: c3
        });
        break;
      case z:
        i3 = Et(a3, h3);
        break;
      case U:
        i3 = jt(a3);
        break;
      case q:
        i3 = Ft(a3);
        break;
      case "matrix":
        i3 = [
          a3,
          h3,
          c3,
          l3,
          u3,
          d3
        ];
    }
    e4.push(i3);
  }
  return Ot(e4);
}
function Sr(t3, e4, s3, i3) {
  const r3 = Array.isArray(e4);
  let n3, o3 = e4;
  if (t3 !== K && t3 !== J || e4 !== j) {
    if ("strokeUniform" === t3) return "non-scaling-stroke" === e4;
    if ("strokeDashArray" === t3) o3 = e4 === j ? null : e4.replace(/,/g, " ").split(/\s+/).map(parseFloat);
    else if ("transformMatrix" === t3) o3 = s3 && s3.transformMatrix ? Tt(s3.transformMatrix, br(e4)) : br(e4);
    else if ("visible" === t3) o3 = e4 !== j && "hidden" !== e4, s3 && false === s3.visible && (o3 = false);
    else if ("opacity" === t3) o3 = parseFloat(e4), s3 && void 0 !== s3.opacity && (o3 *= s3.opacity);
    else if ("textAnchor" === t3) o3 = "start" === e4 ? M : "end" === e4 ? A : D;
    else if ("charSpacing" === t3 || t3 === Ye) n3 = Re(e4, i3) / i3 * 1e3;
    else if ("paintFirst" === t3) {
      const t4 = e4.indexOf(K), s4 = e4.indexOf(J);
      o3 = K, (t4 > -1 && s4 > -1 && s4 < t4 || -1 === t4 && s4 > -1) && (o3 = J);
    } else {
      if ("href" === t3 || "xlink:href" === t3 || "font" === t3 || "id" === t3) return e4;
      if ("imageSmoothing" === t3) return "optimizeQuality" === e4;
      n3 = r3 ? e4.map(Re) : Re(e4, i3);
    }
  } else o3 = "";
  return !r3 && isNaN(n3) ? o3 : n3;
}
function wr(t3, e4) {
  const s3 = t3.match(rs);
  if (!s3) return;
  const i3 = s3[1], r3 = s3[3], n3 = s3[4], o3 = s3[5], a3 = s3[6];
  i3 && (e4.fontStyle = i3), r3 && (e4.fontWeight = isNaN(parseFloat(r3)) ? r3 : parseFloat(r3)), n3 && (e4.fontSize = Re(n3)), a3 && (e4.fontFamily = a3), o3 && (e4.lineHeight = "normal" === o3 ? 1 : o3);
}
function Tr(t3, e4) {
  t3.replace(/;\s*$/, "").split(";").forEach((t4) => {
    if (!t4) return;
    const [s3, i3] = t4.split(":");
    e4[s3.trim().toLowerCase()] = i3.trim();
  });
}
function Or(t3) {
  const e4 = {}, s3 = t3.getAttribute("style");
  return s3 ? ("string" == typeof s3 ? Tr(s3, e4) : function(t4, e5) {
    Object.entries(t4).forEach((t5) => {
      let [s4, i3] = t5;
      void 0 !== i3 && (e5[s4.toLowerCase()] = i3);
    });
  }(s3, e4), e4) : e4;
}
var kr = {
  stroke: "strokeOpacity",
  fill: "fillOpacity"
};
function Dr(t3, e4, i3) {
  if (!t3) return {};
  let r3, n3 = {}, o3 = O;
  t3.parentNode && ls.test(t3.parentNode.nodeName) && (n3 = Dr(t3.parentElement, e4, i3), n3.fontSize && (r3 = o3 = Re(n3.fontSize)));
  const a3 = s(s(s({}, e4.reduce((e5, s3) => {
    const i4 = t3.getAttribute(s3);
    return i4 && (e5[s3] = i4), e5;
  }, {})), function(t4) {
    let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i4 = {};
    for (const r4 in e5) Zi(t4, r4.split(" ")) && (i4 = s(s({}, i4), e5[r4]));
    return i4;
  }(t3, i3)), Or(t3));
  a3[as] && t3.setAttribute(as, a3[as]), a3[os] && (r3 = Re(a3[os], o3), a3[os] = "".concat(r3));
  const h3 = {};
  for (const t4 in a3) {
    const e5 = $i(t4), s3 = Sr(e5, a3[t4], n3, r3);
    h3[e5] = s3;
  }
  h3 && h3.font && wr(h3.font, h3);
  const c3 = s(s({}, n3), h3);
  return ls.test(t3.nodeName) ? c3 : function(t4) {
    const e5 = ji.getDefaults();
    return Object.entries(kr).forEach((s3) => {
      let [i4, r4] = s3;
      if (void 0 === t4[r4] || "" === t4[i4]) return;
      if (void 0 === t4[i4]) {
        if (!e5[i4]) return;
        t4[i4] = e5[i4];
      }
      if (0 === t4[i4].indexOf("url(")) return;
      const n4 = new Le(t4[i4]);
      t4[i4] = n4.setAlpha(Vt(n4.getAlpha() * t4[r4], 2)).toRgba();
    }), t4;
  }(c3);
}
var Mr = [
  "left",
  "top",
  "width",
  "height",
  "visible"
];
var Pr = [
  "rx",
  "ry"
];
var Er = class _Er extends ji {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _Er.ownDefaults);
  }
  constructor(t3) {
    super(), Object.assign(this, _Er.ownDefaults), this.setOptions(t3), this._initRxRy();
  }
  _initRxRy() {
    const { rx: t3, ry: e4 } = this;
    t3 && !e4 ? this.ry = t3 : e4 && !t3 && (this.rx = e4);
  }
  _render(t3) {
    const { width: e4, height: s3 } = this, i3 = -e4 / 2, r3 = -s3 / 2, n3 = this.rx ? Math.min(this.rx, e4 / 2) : 0, o3 = this.ry ? Math.min(this.ry, s3 / 2) : 0, a3 = 0 !== n3 || 0 !== o3;
    t3.beginPath(), t3.moveTo(i3 + n3, r3), t3.lineTo(i3 + e4 - n3, r3), a3 && t3.bezierCurveTo(i3 + e4 - k * n3, r3, i3 + e4, r3 + k * o3, i3 + e4, r3 + o3), t3.lineTo(i3 + e4, r3 + s3 - o3), a3 && t3.bezierCurveTo(i3 + e4, r3 + s3 - k * o3, i3 + e4 - k * n3, r3 + s3, i3 + e4 - n3, r3 + s3), t3.lineTo(i3 + n3, r3 + s3), a3 && t3.bezierCurveTo(i3 + k * n3, r3 + s3, i3, r3 + s3 - k * o3, i3, r3 + s3 - o3), t3.lineTo(i3, r3 + o3), a3 && t3.bezierCurveTo(i3, r3 + k * o3, i3 + k * n3, r3, i3 + n3, r3), t3.closePath(), this._renderPaintInOrder(t3);
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([
      ...Pr,
      ...t3
    ]);
  }
  _toSVG() {
    const { width: t3, height: e4, rx: s3, ry: i3 } = this;
    return [
      "<rect ",
      "COMMON_PARTS",
      'x="'.concat(-t3 / 2, '" y="').concat(-e4 / 2, '" rx="').concat(s3, '" ry="').concat(i3, '" width="').concat(t3, '" height="').concat(e4, '" />\n')
    ];
  }
  static async fromElement(t3, e4, r3) {
    const n3 = Dr(t3, this.ATTRIBUTE_NAMES, r3), { left: o3 = 0, top: a3 = 0, width: h3 = 0, height: c3 = 0, visible: l3 = true } = n3, u3 = i(n3, Mr);
    return new this(s(s(s({}, e4), u3), {}, {
      left: o3,
      top: a3,
      width: h3,
      height: c3,
      visible: Boolean(l3 && h3 && c3)
    }));
  }
};
t(Er, "type", "Rect"), t(Er, "cacheProperties", [
  ...Ms,
  ...Pr
]), t(Er, "ownDefaults", {
  rx: 0,
  ry: 0
}), t(Er, "ATTRIBUTE_NAMES", [
  ...Ji,
  "x",
  "y",
  "rx",
  "ry",
  "width",
  "height"
]), tt.setClass(Er), tt.setSVGClass(Er);
var Ar = "initialization";
var jr = "added";
var Fr = "removed";
var Lr = "imperative";
var Rr = (t3, e4) => {
  const { strokeUniform: s3, strokeWidth: i3, width: r3, height: n3, group: o3 } = e4, a3 = o3 && o3 !== t3 ? fe(o3.calcTransformMatrix(), t3.calcTransformMatrix()) : null, h3 = a3 ? e4.getRelativeCenterPoint().transform(a3) : e4.getRelativeCenterPoint(), c3 = !e4.isStrokeAccountedForInDimensions(), l3 = s3 && c3 ? me(new ot(i3, i3), void 0, t3.calcTransformMatrix()) : at, u3 = !s3 && c3 ? i3 : 0, d3 = ge(r3 + u3, n3 + u3, Ot([
    a3,
    e4.calcOwnMatrix()
  ], true)).add(l3).scalarDivide(2);
  return [
    h3.subtract(d3),
    h3.add(d3)
  ];
};
var Br = class {
  calcLayoutResult(t3, e4) {
    if (this.shouldPerformLayout(t3)) return this.calcBoundingBox(e4, t3);
  }
  shouldPerformLayout(t3) {
    let { type: e4, prevStrategy: s3, strategy: i3 } = t3;
    return e4 === Ar || e4 === Lr || !!s3 && i3 !== s3;
  }
  shouldLayoutClipPath(t3) {
    let { type: e4, target: { clipPath: s3 } } = t3;
    return e4 !== Ar && s3 && !s3.absolutePositioned;
  }
  getInitialSize(t3, e4) {
    return e4.size;
  }
  calcBoundingBox(t3, e4) {
    const { type: s3, target: i3 } = e4;
    if (s3 === Lr && e4.overrides) return e4.overrides;
    if (0 === t3.length) return;
    const { left: r3, top: n3, width: o3, height: a3 } = ae(t3.map((t4) => Rr(i3, t4)).reduce((t4, e5) => t4.concat(e5), [])), h3 = new ot(o3, a3), c3 = new ot(r3, n3).add(h3.scalarDivide(2));
    if (s3 === Ar) {
      const t4 = this.getInitialSize(e4, {
        size: h3,
        center: c3
      });
      return {
        center: c3,
        relativeCorrection: new ot(0, 0),
        size: t4
      };
    }
    return {
      center: c3.transform(i3.calcOwnMatrix()),
      size: h3
    };
  }
};
t(Br, "type", "strategy");
var Ir = class extends Br {
  shouldPerformLayout(t3) {
    return true;
  }
};
t(Ir, "type", "fit-content"), tt.setClass(Ir);
var Xr = [
  "strategy"
];
var Wr = [
  "target",
  "strategy",
  "bubbles",
  "prevStrategy"
];
var Yr = "layoutManager";
var Vr = class {
  constructor() {
    let e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Ir();
    t(this, "strategy", void 0), this.strategy = e4, this._subscriptions = /* @__PURE__ */ new Map();
  }
  performLayout(t3) {
    const e4 = s(s({
      bubbles: true,
      strategy: this.strategy
    }, t3), {}, {
      prevStrategy: this._prevLayoutStrategy,
      stopPropagation() {
        this.bubbles = false;
      }
    });
    this.onBeforeLayout(e4);
    const i3 = this.getLayoutResult(e4);
    i3 && this.commitLayout(e4, i3), this.onAfterLayout(e4, i3), this._prevLayoutStrategy = e4.strategy;
  }
  attachHandlers(t3, e4) {
    const { target: s3 } = e4;
    return [
      Q,
      L,
      W,
      B,
      R,
      X,
      G,
      Y,
      V
    ].map((e5) => t3.on(e5, (t4) => this.performLayout(e5 === Q ? {
      type: "object_modified",
      trigger: e5,
      e: t4,
      target: s3
    } : {
      type: "object_modifying",
      trigger: e5,
      e: t4,
      target: s3
    })));
  }
  subscribe(t3, e4) {
    this.unsubscribe(t3, e4);
    const s3 = this.attachHandlers(t3, e4);
    this._subscriptions.set(t3, s3);
  }
  unsubscribe(t3, e4) {
    (this._subscriptions.get(t3) || []).forEach((t4) => t4()), this._subscriptions.delete(t3);
  }
  unsubscribeTargets(t3) {
    t3.targets.forEach((e4) => this.unsubscribe(e4, t3));
  }
  subscribeTargets(t3) {
    t3.targets.forEach((e4) => this.subscribe(e4, t3));
  }
  onBeforeLayout(t3) {
    const { target: e4, type: r3 } = t3, { canvas: n3 } = e4;
    if (r3 === Ar || r3 === jr ? this.subscribeTargets(t3) : r3 === Fr && this.unsubscribeTargets(t3), e4.fire("layout:before", {
      context: t3
    }), n3 && n3.fire("object:layout:before", {
      target: e4,
      context: t3
    }), r3 === Lr && t3.deep) {
      const r4 = i(t3, Xr);
      e4.forEachObject((t4) => t4.layoutManager && t4.layoutManager.performLayout(s(s({}, r4), {}, {
        bubbles: false,
        target: t4
      })));
    }
  }
  getLayoutResult(t3) {
    const { target: e4, strategy: s3, type: i3 } = t3, r3 = s3.calcLayoutResult(t3, e4.getObjects());
    if (!r3) return;
    const n3 = i3 === Ar ? new ot() : e4.getRelativeCenterPoint(), { center: o3, correction: a3 = new ot(), relativeCorrection: h3 = new ot() } = r3, c3 = n3.subtract(o3).add(a3).transform(i3 === Ar ? T : wt(e4.calcOwnMatrix()), true).add(h3);
    return {
      result: r3,
      prevCenter: n3,
      nextCenter: o3,
      offset: c3
    };
  }
  commitLayout(t3, e4) {
    const { target: s3 } = t3, { result: { size: i3 }, nextCenter: r3 } = e4;
    var n3, o3;
    (s3.set({
      width: i3.x,
      height: i3.y
    }), this.layoutObjects(t3, e4), t3.type === Ar) ? s3.set({
      left: null !== (n3 = t3.x) && void 0 !== n3 ? n3 : r3.x + i3.x * xe(s3.originX),
      top: null !== (o3 = t3.y) && void 0 !== o3 ? o3 : r3.y + i3.y * xe(s3.originY)
    }) : (s3.setPositionByOrigin(r3, D, D), s3.setCoords(), s3.set("dirty", true));
  }
  layoutObjects(t3, e4) {
    const { target: s3 } = t3;
    s3.forEachObject((i3) => {
      i3.group === s3 && this.layoutObject(t3, e4, i3);
    }), t3.strategy.shouldLayoutClipPath(t3) && this.layoutObject(t3, e4, s3.clipPath);
  }
  layoutObject(t3, e4, s3) {
    let { offset: i3 } = e4;
    s3.set({
      left: s3.left + i3.x,
      top: s3.top + i3.y
    });
  }
  onAfterLayout(t3, e4) {
    const { target: r3, strategy: n3, bubbles: o3, prevStrategy: a3 } = t3, h3 = i(t3, Wr), { canvas: c3 } = r3;
    r3.fire("layout:after", {
      context: t3,
      result: e4
    }), c3 && c3.fire("object:layout:after", {
      context: t3,
      result: e4,
      target: r3
    });
    const l3 = r3.parent;
    o3 && null != l3 && l3.layoutManager && ((h3.path || (h3.path = [])).push(r3), l3.layoutManager.performLayout(s(s({}, h3), {}, {
      target: l3
    }))), r3.set("dirty", true);
  }
  dispose() {
    const { _subscriptions: t3 } = this;
    t3.forEach((t4) => t4.forEach((t5) => t5())), t3.clear();
  }
  toObject() {
    return {
      type: Yr,
      strategy: this.strategy.constructor.type
    };
  }
  toJSON() {
    return this.toObject();
  }
};
tt.setClass(Vr, Yr);
var Gr = [
  "type",
  "objects",
  "layoutManager"
];
var zr = class extends Vr {
  performLayout() {
  }
};
var Hr = class _Hr extends ct(ji) {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _Hr.ownDefaults);
  }
  constructor() {
    let e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], s3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), t(this, "_activeObjects", []), t(this, "__objectSelectionTracker", void 0), t(this, "__objectSelectionDisposer", void 0), Object.assign(this, _Hr.ownDefaults), this.setOptions(s3), this.groupInit(e4, s3);
  }
  groupInit(t3, e4) {
    var s3;
    this._objects = [
      ...t3
    ], this.__objectSelectionTracker = this.__objectSelectionMonitor.bind(this, true), this.__objectSelectionDisposer = this.__objectSelectionMonitor.bind(this, false), this.forEachObject((t4) => {
      this.enterGroup(t4, false);
    }), this.layoutManager = null !== (s3 = e4.layoutManager) && void 0 !== s3 ? s3 : new Vr(), this.layoutManager.performLayout({
      type: Ar,
      target: this,
      targets: [
        ...t3
      ],
      x: e4.left,
      y: e4.top
    });
  }
  canEnterGroup(t3) {
    return t3 === this || this.isDescendantOf(t3) ? (a("error", "Group: circular object trees are not supported, this call has no effect"), false) : -1 === this._objects.indexOf(t3) || (a("error", "Group: duplicate objects are not supported inside group, this call has no effect"), false);
  }
  _filterObjectsBeforeEnteringGroup(t3) {
    return t3.filter((t4, e4, s3) => this.canEnterGroup(t4) && s3.indexOf(t4) === e4);
  }
  add() {
    for (var t3 = arguments.length, e4 = new Array(t3), s3 = 0; s3 < t3; s3++) e4[s3] = arguments[s3];
    const i3 = this._filterObjectsBeforeEnteringGroup(e4), r3 = super.add(...i3);
    return this._onAfterObjectsChange(jr, i3), r3;
  }
  insertAt(t3) {
    for (var e4 = arguments.length, s3 = new Array(e4 > 1 ? e4 - 1 : 0), i3 = 1; i3 < e4; i3++) s3[i3 - 1] = arguments[i3];
    const r3 = this._filterObjectsBeforeEnteringGroup(s3), n3 = super.insertAt(t3, ...r3);
    return this._onAfterObjectsChange(jr, r3), n3;
  }
  remove() {
    const t3 = super.remove(...arguments);
    return this._onAfterObjectsChange(Fr, t3), t3;
  }
  _onObjectAdded(t3) {
    this.enterGroup(t3, true), this.fire("object:added", {
      target: t3
    }), t3.fire("added", {
      target: this
    });
  }
  _onObjectRemoved(t3, e4) {
    this.exitGroup(t3, e4), this.fire("object:removed", {
      target: t3
    }), t3.fire("removed", {
      target: this
    });
  }
  _onAfterObjectsChange(t3, e4) {
    this.layoutManager.performLayout({
      type: t3,
      targets: e4,
      target: this
    });
  }
  _onStackOrderChanged() {
    this._set("dirty", true);
  }
  _set(t3, e4) {
    const s3 = this[t3];
    return super._set(t3, e4), "canvas" === t3 && s3 !== e4 && (this._objects || []).forEach((s4) => {
      s4._set(t3, e4);
    }), this;
  }
  _shouldSetNestedCoords() {
    return this.subTargetCheck;
  }
  removeAll() {
    return this._activeObjects = [], this.remove(...this._objects);
  }
  __objectSelectionMonitor(t3, e4) {
    let { target: s3 } = e4;
    const i3 = this._activeObjects;
    if (t3) i3.push(s3), this._set("dirty", true);
    else if (i3.length > 0) {
      const t4 = i3.indexOf(s3);
      t4 > -1 && (i3.splice(t4, 1), this._set("dirty", true));
    }
  }
  _watchObject(t3, e4) {
    t3 && this._watchObject(false, e4), t3 ? (e4.on("selected", this.__objectSelectionTracker), e4.on("deselected", this.__objectSelectionDisposer)) : (e4.off("selected", this.__objectSelectionTracker), e4.off("deselected", this.__objectSelectionDisposer));
  }
  enterGroup(t3, e4) {
    t3.group && t3.group.remove(t3), t3._set("parent", this), this._enterGroup(t3, e4);
  }
  _enterGroup(t3, e4) {
    e4 && le(t3, Tt(wt(this.calcTransformMatrix()), t3.calcTransformMatrix())), this._shouldSetNestedCoords() && t3.setCoords(), t3._set("group", this), t3._set("canvas", this.canvas), this._watchObject(true, t3);
    const s3 = this.canvas && this.canvas.getActiveObject && this.canvas.getActiveObject();
    s3 && (s3 === t3 || t3.isDescendantOf(s3)) && this._activeObjects.push(t3);
  }
  exitGroup(t3, e4) {
    this._exitGroup(t3, e4), t3._set("parent", void 0), t3._set("canvas", void 0);
  }
  _exitGroup(t3, e4) {
    t3._set("group", void 0), e4 || (le(t3, Tt(this.calcTransformMatrix(), t3.calcTransformMatrix())), t3.setCoords()), this._watchObject(false, t3);
    const s3 = this._activeObjects.length > 0 ? this._activeObjects.indexOf(t3) : -1;
    s3 > -1 && this._activeObjects.splice(s3, 1);
  }
  shouldCache() {
    const t3 = ji.prototype.shouldCache.call(this);
    if (t3) {
      for (let t4 = 0; t4 < this._objects.length; t4++) if (this._objects[t4].willDrawShadow()) return this.ownCaching = false, false;
    }
    return t3;
  }
  willDrawShadow() {
    if (super.willDrawShadow()) return true;
    for (let t3 = 0; t3 < this._objects.length; t3++) if (this._objects[t3].willDrawShadow()) return true;
    return false;
  }
  isOnACache() {
    return this.ownCaching || !!this.parent && this.parent.isOnACache();
  }
  drawObject(t3, e4, s3) {
    this._renderBackground(t3);
    for (let e5 = 0; e5 < this._objects.length; e5++) {
      var i3;
      const s4 = this._objects[e5];
      null !== (i3 = this.canvas) && void 0 !== i3 && i3.preserveObjectStacking && s4.group !== this ? (t3.save(), t3.transform(...wt(this.calcTransformMatrix())), s4.render(t3), t3.restore()) : s4.group === this && s4.render(t3);
    }
    this._drawClipPath(t3, this.clipPath, s3);
  }
  setCoords() {
    super.setCoords(), this._shouldSetNestedCoords() && this.forEachObject((t3) => t3.setCoords());
  }
  triggerLayout() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.layoutManager.performLayout(s({
      target: this,
      type: Lr
    }, t3));
  }
  render(t3) {
    this._transformDone = true, super.render(t3), this._transformDone = false;
  }
  __serializeObjects(t3, e4) {
    const s3 = this.includeDefaultValues;
    return this._objects.filter(function(t4) {
      return !t4.excludeFromExport;
    }).map(function(i3) {
      const r3 = i3.includeDefaultValues;
      i3.includeDefaultValues = s3;
      const n3 = i3[t3 || "toObject"](e4);
      return i3.includeDefaultValues = r3, n3;
    });
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e4 = this.layoutManager.toObject();
    return s(s(s({}, super.toObject([
      "subTargetCheck",
      "interactive",
      ...t3
    ])), "fit-content" !== e4.strategy || this.includeDefaultValues ? {
      layoutManager: e4
    } : {}), {}, {
      objects: this.__serializeObjects("toObject", t3)
    });
  }
  toString() {
    return "#<Group: (".concat(this.complexity(), ")>");
  }
  dispose() {
    this.layoutManager.unsubscribeTargets({
      targets: this.getObjects(),
      target: this
    }), this._activeObjects = [], this.forEachObject((t3) => {
      this._watchObject(false, t3), t3.dispose();
    }), super.dispose();
  }
  _createSVGBgRect(t3) {
    if (!this.backgroundColor) return "";
    const e4 = Er.prototype._toSVG.call(this), s3 = e4.indexOf("COMMON_PARTS");
    e4[s3] = 'for="group" ';
    const i3 = e4.join("");
    return t3 ? t3(i3) : i3;
  }
  _toSVG(t3) {
    const e4 = [
      "<g ",
      "COMMON_PARTS",
      " >\n"
    ], s3 = this._createSVGBgRect(t3);
    s3 && e4.push("		", s3);
    for (let s4 = 0; s4 < this._objects.length; s4++) e4.push("		", this._objects[s4].toSVG(t3));
    return e4.push("</g>\n"), e4;
  }
  getSvgStyles() {
    const t3 = void 0 !== this.opacity && 1 !== this.opacity ? "opacity: ".concat(this.opacity, ";") : "", e4 = this.visible ? "" : " visibility: hidden;";
    return [
      t3,
      this.getSvgFilter(),
      e4
    ].join("");
  }
  toClipPathSVG(t3) {
    const e4 = [], s3 = this._createSVGBgRect(t3);
    s3 && e4.push("	", s3);
    for (let s4 = 0; s4 < this._objects.length; s4++) e4.push("	", this._objects[s4].toClipPathSVG(t3));
    return this._createBaseClipPathSVGMarkup(e4, {
      reviver: t3
    });
  }
  static fromObject(t3, e4) {
    let { type: r3, objects: n3 = [], layoutManager: o3 } = t3, a3 = i(t3, Gr);
    return Promise.all([
      It(n3, e4),
      Xt(a3, e4)
    ]).then((t4) => {
      let [e5, i3] = t4;
      const r4 = new this(e5, s(s(s({}, a3), i3), {}, {
        layoutManager: new zr()
      }));
      if (o3) {
        const t5 = tt.getClass(o3.type), e6 = tt.getClass(o3.strategy);
        r4.layoutManager = new t5(new e6());
      } else r4.layoutManager = new Vr();
      return r4.layoutManager.subscribeTargets({
        type: Ar,
        target: r4,
        targets: r4.getObjects()
      }), r4.setCoords(), r4;
    });
  }
};
t(Hr, "type", "Group"), t(Hr, "ownDefaults", {
  strokeWidth: 0,
  subTargetCheck: false,
  interactive: false
}), tt.setClass(Hr);
var Nr = (t3, e4) => Math.min(e4.width / t3.width, e4.height / t3.height);
var Ur = (t3, e4) => Math.max(e4.width / t3.width, e4.height / t3.height);
var qr = "\\s*,?\\s*";
var Kr = "".concat(qr, "(").concat(es, ")");
var Jr = "".concat(Kr).concat(Kr).concat(Kr).concat(qr, "([01])").concat(qr, "([01])").concat(Kr).concat(Kr);
var Qr = {
  m: "l",
  M: "L"
};
var Zr = (t3, e4, s3, i3, r3, n3, o3, a3, h3, c3, l3) => {
  const u3 = rt(t3), d3 = nt(t3), g3 = rt(e4), f2 = nt(e4), p3 = s3 * r3 * g3 - i3 * n3 * f2 + o3, m3 = i3 * r3 * g3 + s3 * n3 * f2 + a3;
  return [
    "C",
    c3 + h3 * (-s3 * r3 * d3 - i3 * n3 * u3),
    l3 + h3 * (-i3 * r3 * d3 + s3 * n3 * u3),
    p3 + h3 * (s3 * r3 * f2 + i3 * n3 * g3),
    m3 + h3 * (i3 * r3 * f2 - s3 * n3 * g3),
    p3,
    m3
  ];
};
var $r = (t3, e4, s3, i3) => {
  const r3 = Math.atan2(e4, t3), n3 = Math.atan2(i3, s3);
  return n3 >= r3 ? n3 - r3 : 2 * Math.PI - (r3 - n3);
};
function tn(t3, e4, s3, i3, r3, n3, a3, h3) {
  let c3;
  if (o.cachesBoundsOfCurve && (c3 = [
    ...arguments
  ].join(), _.boundsOfCurveCache[c3])) return _.boundsOfCurveCache[c3];
  const l3 = Math.sqrt, u3 = Math.abs, d3 = [], g3 = [
    [
      0,
      0
    ],
    [
      0,
      0
    ]
  ];
  let f2 = 6 * t3 - 12 * s3 + 6 * r3, p3 = -3 * t3 + 9 * s3 - 9 * r3 + 3 * a3, m3 = 3 * s3 - 3 * t3;
  for (let t4 = 0; t4 < 2; ++t4) {
    if (t4 > 0 && (f2 = 6 * e4 - 12 * i3 + 6 * n3, p3 = -3 * e4 + 9 * i3 - 9 * n3 + 3 * h3, m3 = 3 * i3 - 3 * e4), u3(p3) < 1e-12) {
      if (u3(f2) < 1e-12) continue;
      const t5 = -m3 / f2;
      0 < t5 && t5 < 1 && d3.push(t5);
      continue;
    }
    const s4 = f2 * f2 - 4 * m3 * p3;
    if (s4 < 0) continue;
    const r4 = l3(s4), o3 = (-f2 + r4) / (2 * p3);
    0 < o3 && o3 < 1 && d3.push(o3);
    const a4 = (-f2 - r4) / (2 * p3);
    0 < a4 && a4 < 1 && d3.push(a4);
  }
  let v3 = d3.length;
  const y3 = v3, x3 = nn(t3, e4, s3, i3, r3, n3, a3, h3);
  for (; v3--; ) {
    const { x: t4, y: e5 } = x3(d3[v3]);
    g3[0][v3] = t4, g3[1][v3] = e5;
  }
  g3[0][y3] = t3, g3[1][y3] = e4, g3[0][y3 + 1] = a3, g3[1][y3 + 1] = h3;
  const C3 = [
    new ot(Math.min(...g3[0]), Math.min(...g3[1])),
    new ot(Math.max(...g3[0]), Math.max(...g3[1]))
  ];
  return o.cachesBoundsOfCurve && (_.boundsOfCurveCache[c3] = C3), C3;
}
var en = (t3, e4, s3) => {
  let [i3, r3, n3, o3, a3, h3, c3, l3] = s3;
  const u3 = ((t4, e5, s4, i4, r4, n4, o4) => {
    if (0 === s4 || 0 === i4) return [];
    let a4 = 0, h4 = 0, c4 = 0;
    const l4 = Math.PI, u4 = o4 * w, d3 = nt(u4), g3 = rt(u4), f2 = 0.5 * (-g3 * t4 - d3 * e5), p3 = 0.5 * (-g3 * e5 + d3 * t4), m3 = s4 ** 2, v3 = i4 ** 2, y3 = p3 ** 2, _3 = f2 ** 2, x3 = m3 * v3 - m3 * y3 - v3 * _3;
    let C3 = Math.abs(s4), b3 = Math.abs(i4);
    if (x3 < 0) {
      const t5 = Math.sqrt(1 - x3 / (m3 * v3));
      C3 *= t5, b3 *= t5;
    } else c4 = (r4 === n4 ? -1 : 1) * Math.sqrt(x3 / (m3 * y3 + v3 * _3));
    const S3 = c4 * C3 * p3 / b3, T2 = -c4 * b3 * f2 / C3, O2 = g3 * S3 - d3 * T2 + 0.5 * t4, k3 = d3 * S3 + g3 * T2 + 0.5 * e5;
    let D2 = $r(1, 0, (f2 - S3) / C3, (p3 - T2) / b3), M3 = $r((f2 - S3) / C3, (p3 - T2) / b3, (-f2 - S3) / C3, (-p3 - T2) / b3);
    0 === n4 && M3 > 0 ? M3 -= 2 * l4 : 1 === n4 && M3 < 0 && (M3 += 2 * l4);
    const P2 = Math.ceil(Math.abs(M3 / l4 * 2)), E2 = [], A3 = M3 / P2, j2 = 8 / 3 * Math.sin(A3 / 4) * Math.sin(A3 / 4) / Math.sin(A3 / 2);
    let F3 = D2 + A3;
    for (let t5 = 0; t5 < P2; t5++) E2[t5] = Zr(D2, F3, g3, d3, C3, b3, O2, k3, j2, a4, h4), a4 = E2[t5][5], h4 = E2[t5][6], D2 = F3, F3 += A3;
    return E2;
  })(c3 - t3, l3 - e4, r3, n3, a3, h3, o3);
  for (let s4 = 0, i4 = u3.length; s4 < i4; s4++) u3[s4][1] += t3, u3[s4][2] += e4, u3[s4][3] += t3, u3[s4][4] += e4, u3[s4][5] += t3, u3[s4][6] += e4;
  return u3;
};
var sn = (t3) => {
  let e4 = 0, s3 = 0, i3 = 0, r3 = 0;
  const n3 = [];
  let o3, a3 = 0, h3 = 0;
  for (const c3 of t3) {
    const t4 = [
      ...c3
    ];
    let l3;
    switch (t4[0]) {
      case "l":
        t4[1] += e4, t4[2] += s3;
      case "L":
        e4 = t4[1], s3 = t4[2], l3 = [
          "L",
          e4,
          s3
        ];
        break;
      case "h":
        t4[1] += e4;
      case "H":
        e4 = t4[1], l3 = [
          "L",
          e4,
          s3
        ];
        break;
      case "v":
        t4[1] += s3;
      case "V":
        s3 = t4[1], l3 = [
          "L",
          e4,
          s3
        ];
        break;
      case "m":
        t4[1] += e4, t4[2] += s3;
      case "M":
        e4 = t4[1], s3 = t4[2], i3 = t4[1], r3 = t4[2], l3 = [
          "M",
          e4,
          s3
        ];
        break;
      case "c":
        t4[1] += e4, t4[2] += s3, t4[3] += e4, t4[4] += s3, t4[5] += e4, t4[6] += s3;
      case "C":
        a3 = t4[3], h3 = t4[4], e4 = t4[5], s3 = t4[6], l3 = [
          "C",
          t4[1],
          t4[2],
          a3,
          h3,
          e4,
          s3
        ];
        break;
      case "s":
        t4[1] += e4, t4[2] += s3, t4[3] += e4, t4[4] += s3;
      case "S":
        "C" === o3 ? (a3 = 2 * e4 - a3, h3 = 2 * s3 - h3) : (a3 = e4, h3 = s3), e4 = t4[3], s3 = t4[4], l3 = [
          "C",
          a3,
          h3,
          t4[1],
          t4[2],
          e4,
          s3
        ], a3 = l3[3], h3 = l3[4];
        break;
      case "q":
        t4[1] += e4, t4[2] += s3, t4[3] += e4, t4[4] += s3;
      case "Q":
        a3 = t4[1], h3 = t4[2], e4 = t4[3], s3 = t4[4], l3 = [
          "Q",
          a3,
          h3,
          e4,
          s3
        ];
        break;
      case "t":
        t4[1] += e4, t4[2] += s3;
      case "T":
        "Q" === o3 ? (a3 = 2 * e4 - a3, h3 = 2 * s3 - h3) : (a3 = e4, h3 = s3), e4 = t4[1], s3 = t4[2], l3 = [
          "Q",
          a3,
          h3,
          e4,
          s3
        ];
        break;
      case "a":
        t4[6] += e4, t4[7] += s3;
      case "A":
        en(e4, s3, t4).forEach((t5) => n3.push(t5)), e4 = t4[6], s3 = t4[7];
        break;
      case "z":
      case "Z":
        e4 = i3, s3 = r3, l3 = [
          "Z"
        ];
    }
    l3 ? (n3.push(l3), o3 = l3[0]) : o3 = "";
  }
  return n3;
};
var rn = (t3, e4, s3, i3) => Math.sqrt((s3 - t3) ** 2 + (i3 - e4) ** 2);
var nn = (t3, e4, s3, i3, r3, n3, o3, a3) => (h3) => {
  const c3 = h3 ** 3, l3 = ((t4) => 3 * t4 ** 2 * (1 - t4))(h3), u3 = ((t4) => 3 * t4 * (1 - t4) ** 2)(h3), d3 = ((t4) => (1 - t4) ** 3)(h3);
  return new ot(o3 * c3 + r3 * l3 + s3 * u3 + t3 * d3, a3 * c3 + n3 * l3 + i3 * u3 + e4 * d3);
};
var on = (t3) => t3 ** 2;
var an = (t3) => 2 * t3 * (1 - t3);
var hn = (t3) => (1 - t3) ** 2;
var cn = (t3, e4, s3, i3, r3, n3, o3, a3) => (h3) => {
  const c3 = on(h3), l3 = an(h3), u3 = hn(h3), d3 = 3 * (u3 * (s3 - t3) + l3 * (r3 - s3) + c3 * (o3 - r3)), g3 = 3 * (u3 * (i3 - e4) + l3 * (n3 - i3) + c3 * (a3 - n3));
  return Math.atan2(g3, d3);
};
var ln = (t3, e4, s3, i3, r3, n3) => (o3) => {
  const a3 = on(o3), h3 = an(o3), c3 = hn(o3);
  return new ot(r3 * a3 + s3 * h3 + t3 * c3, n3 * a3 + i3 * h3 + e4 * c3);
};
var un = (t3, e4, s3, i3, r3, n3) => (o3) => {
  const a3 = 1 - o3, h3 = 2 * (a3 * (s3 - t3) + o3 * (r3 - s3)), c3 = 2 * (a3 * (i3 - e4) + o3 * (n3 - i3));
  return Math.atan2(c3, h3);
};
var dn = (t3, e4, s3) => {
  let i3 = new ot(e4, s3), r3 = 0;
  for (let e5 = 1; e5 <= 100; e5 += 1) {
    const s4 = t3(e5 / 100);
    r3 += rn(i3.x, i3.y, s4.x, s4.y), i3 = s4;
  }
  return r3;
};
var gn = (t3, e4) => {
  let i3, r3 = 0, n3 = 0, o3 = {
    x: t3.x,
    y: t3.y
  }, a3 = s({}, o3), h3 = 0.01, c3 = 0;
  const l3 = t3.iterator, u3 = t3.angleFinder;
  for (; n3 < e4 && h3 > 1e-4; ) a3 = l3(r3), c3 = r3, i3 = rn(o3.x, o3.y, a3.x, a3.y), i3 + n3 > e4 ? (r3 -= h3, h3 /= 2) : (o3 = a3, r3 += h3, n3 += i3);
  return s(s({}, a3), {}, {
    angle: u3(c3)
  });
};
var fn = (t3) => {
  let e4, s3, i3 = 0, r3 = 0, n3 = 0, o3 = 0, a3 = 0;
  const h3 = [];
  for (const c3 of t3) {
    const t4 = {
      x: r3,
      y: n3,
      command: c3[0],
      length: 0
    };
    switch (c3[0]) {
      case "M":
        s3 = t4, s3.x = o3 = r3 = c3[1], s3.y = a3 = n3 = c3[2];
        break;
      case "L":
        s3 = t4, s3.length = rn(r3, n3, c3[1], c3[2]), r3 = c3[1], n3 = c3[2];
        break;
      case "C":
        e4 = nn(r3, n3, c3[1], c3[2], c3[3], c3[4], c3[5], c3[6]), s3 = t4, s3.iterator = e4, s3.angleFinder = cn(r3, n3, c3[1], c3[2], c3[3], c3[4], c3[5], c3[6]), s3.length = dn(e4, r3, n3), r3 = c3[5], n3 = c3[6];
        break;
      case "Q":
        e4 = ln(r3, n3, c3[1], c3[2], c3[3], c3[4]), s3 = t4, s3.iterator = e4, s3.angleFinder = un(r3, n3, c3[1], c3[2], c3[3], c3[4]), s3.length = dn(e4, r3, n3), r3 = c3[3], n3 = c3[4];
        break;
      case "Z":
        s3 = t4, s3.destX = o3, s3.destY = a3, s3.length = rn(r3, n3, o3, a3), r3 = o3, n3 = a3;
    }
    i3 += s3.length, h3.push(s3);
  }
  return h3.push({
    length: i3,
    x: r3,
    y: n3
  }), h3;
};
var pn = function(t3, e4) {
  let i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fn(t3), r3 = 0;
  for (; e4 - i3[r3].length > 0 && r3 < i3.length - 2; ) e4 -= i3[r3].length, r3++;
  const n3 = i3[r3], o3 = e4 / n3.length, a3 = t3[r3];
  switch (n3.command) {
    case "M":
      return {
        x: n3.x,
        y: n3.y,
        angle: 0
      };
    case "Z":
      return s(s({}, new ot(n3.x, n3.y).lerp(new ot(n3.destX, n3.destY), o3)), {}, {
        angle: Math.atan2(n3.destY - n3.y, n3.destX - n3.x)
      });
    case "L":
      return s(s({}, new ot(n3.x, n3.y).lerp(new ot(a3[1], a3[2]), o3)), {}, {
        angle: Math.atan2(a3[2] - n3.y, a3[1] - n3.x)
      });
    case "C":
    case "Q":
      return gn(n3, e4);
  }
};
var mn = new RegExp("[mzlhvcsqta][^mzlhvcsqta]*", "gi");
var vn = new RegExp(Jr, "g");
var yn = new RegExp(es, "gi");
var _n = {
  m: 2,
  l: 2,
  h: 1,
  v: 1,
  c: 6,
  s: 4,
  q: 4,
  t: 2,
  a: 7
};
var xn = (t3) => {
  var e4;
  const s3 = [], i3 = null !== (e4 = t3.match(mn)) && void 0 !== e4 ? e4 : [];
  for (const t4 of i3) {
    const e5 = t4[0];
    if ("z" === e5 || "Z" === e5) {
      s3.push([
        e5
      ]);
      continue;
    }
    const i4 = _n[e5.toLowerCase()];
    let r3 = [];
    if ("a" === e5 || "A" === e5) {
      vn.lastIndex = 0;
      for (let e6 = null; e6 = vn.exec(t4); ) r3.push(...e6.slice(1));
    } else r3 = t4.match(yn) || [];
    for (let t5 = 0; t5 < r3.length; t5 += i4) {
      const n3 = new Array(i4), o3 = Qr[e5];
      n3[0] = t5 > 0 && o3 ? o3 : e5;
      for (let e6 = 0; e6 < i4; e6++) n3[e6 + 1] = parseFloat(r3[t5 + e6]);
      s3.push(n3);
    }
  }
  return s3;
};
var Cn = function(t3) {
  let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s3 = new ot(t3[0]), i3 = new ot(t3[1]), r3 = 1, n3 = 0;
  const o3 = [], a3 = t3.length, h3 = a3 > 2;
  let c3;
  for (h3 && (r3 = t3[2].x < i3.x ? -1 : t3[2].x === i3.x ? 0 : 1, n3 = t3[2].y < i3.y ? -1 : t3[2].y === i3.y ? 0 : 1), o3.push([
    "M",
    s3.x - r3 * e4,
    s3.y - n3 * e4
  ]), c3 = 1; c3 < a3; c3++) {
    if (!s3.eq(i3)) {
      const t4 = s3.midPointFrom(i3);
      o3.push([
        "Q",
        s3.x,
        s3.y,
        t4.x,
        t4.y
      ]);
    }
    s3 = t3[c3], c3 + 1 < t3.length && (i3 = t3[c3 + 1]);
  }
  return h3 && (r3 = s3.x > t3[c3 - 2].x ? 1 : s3.x === t3[c3 - 2].x ? 0 : -1, n3 = s3.y > t3[c3 - 2].y ? 1 : s3.y === t3[c3 - 2].y ? 0 : -1), o3.push([
    "L",
    s3.x + r3 * e4,
    s3.y + n3 * e4
  ]), o3;
};
var bn = (t3, e4) => t3.map((t4) => t4.map((t5, s3) => 0 === s3 || void 0 === e4 ? t5 : Vt(t5, e4)).join(" ")).join(" ");
function Sn(t3, e4) {
  const s3 = t3.style;
  s3 && e4 && ("string" == typeof e4 ? s3.cssText += ";" + e4 : Object.entries(e4).forEach((t4) => {
    let [e5, i3] = t4;
    return s3.setProperty(e5, i3);
  }));
}
var wn = (t3, e4) => Math.floor(Math.random() * (e4 - t3 + 1)) + t3;
function Tn(t3) {
  let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const s3 = e4.onComplete || C, i3 = new (v()).XMLHttpRequest(), r3 = e4.signal, n3 = function() {
    i3.abort();
  }, o3 = function() {
    r3 && r3.removeEventListener("abort", n3), i3.onerror = i3.ontimeout = C;
  };
  if (r3 && r3.aborted) throw new c("request");
  return r3 && r3.addEventListener("abort", n3, {
    once: true
  }), i3.onreadystatechange = function() {
    4 === i3.readyState && (o3(), s3(i3), i3.onreadystatechange = C);
  }, i3.onerror = i3.ontimeout = o3, i3.open("get", t3, true), i3.send(), i3;
}
var On = (t3, e4) => {
  let s3 = t3._findCenterFromElement();
  t3.transformMatrix && (((t4) => {
    if (t4.transformMatrix) {
      const { scaleX: e5, scaleY: s4, angle: i3, skewX: r3 } = Dt(t4.transformMatrix);
      t4.flipX = false, t4.flipY = false, t4.set(H, e5), t4.set(N, s4), t4.angle = i3, t4.skewX = r3, t4.skewY = 0;
    }
  })(t3), s3 = s3.transform(t3.transformMatrix)), delete t3.transformMatrix, e4 && (t3.scaleX *= e4.scaleX, t3.scaleY *= e4.scaleY, t3.cropX = e4.cropX, t3.cropY = e4.cropY, s3.x += e4.offsetLeft, s3.y += e4.offsetTop, t3.width = e4.width, t3.height = e4.height), t3.setPositionByOrigin(s3, D, D);
};
var kn = Object.freeze({
  __proto__: null,
  addTransformToObject: ce,
  animate: Us,
  animateColor: qs,
  applyTransformToObject: le,
  calcAngleBetweenVectors: vs,
  calcDimensionsMatrix: Lt,
  calcPlaneChangeMatrix: fe,
  calcVectorRotation: ys,
  cancelAnimFrame: dt,
  capValue: ks,
  composeMatrix: Rt,
  copyCanvasElement: (t3) => {
    var e4;
    const s3 = vt(t3);
    return null === (e4 = s3.getContext("2d")) || void 0 === e4 || e4.drawImage(t3, 0, 0), s3;
  },
  cos: rt,
  createCanvasElement: pt,
  createImage: mt,
  createRotateMatrix: Pt,
  createScaleMatrix: Et,
  createSkewXMatrix: jt,
  createSkewYMatrix: Ft,
  createTranslateMatrix: Mt,
  createVector: ps,
  crossProduct: Cs,
  degreesToRadians: xt,
  dotProduct: bs,
  ease: Rs,
  enlivenObjectEnlivables: Xt,
  enlivenObjects: It,
  findScaleToCover: Ur,
  findScaleToFit: Nr,
  getBoundsOfCurve: tn,
  getOrthonormalVector: xs,
  getPathSegmentsInfo: fn,
  getPointOnPath: pn,
  getPointer: re,
  getRandomInt: wn,
  getRegularPolygonPath: (t3, e4) => {
    const s3 = 2 * Math.PI / t3;
    let i3 = -b;
    t3 % 2 == 0 && (i3 += s3 / 2);
    const r3 = new Array(t3 + 1);
    for (let n3 = 0; n3 < t3; n3++) {
      const t4 = n3 * s3 + i3, { x: o3, y: a3 } = new ot(rt(t4), nt(t4)).scalarMultiply(e4);
      r3[n3] = [
        0 === n3 ? "M" : "L",
        o3,
        a3
      ];
    }
    return r3[t3] = [
      "Z"
    ], r3;
  },
  getSmoothPathFromPoints: Cn,
  getSvgAttributes: (t3) => {
    const e4 = [
      "instantiated_by_use",
      "style",
      "id",
      "class"
    ];
    switch (t3) {
      case "linearGradient":
        return e4.concat([
          "x1",
          "y1",
          "x2",
          "y2",
          "gradientUnits",
          "gradientTransform"
        ]);
      case "radialGradient":
        return e4.concat([
          "gradientUnits",
          "gradientTransform",
          "cx",
          "cy",
          "r",
          "fx",
          "fy",
          "fr"
        ]);
      case "stop":
        return e4.concat([
          "offset",
          "stop-color",
          "stop-opacity"
        ]);
    }
    return e4;
  },
  getUnitVector: _s,
  groupSVGElements: (t3, e4) => t3 && 1 === t3.length ? t3[0] : new Hr(t3, e4),
  hasStyleChanged: Ui,
  invertTransform: wt,
  isBetweenVectors: Ss,
  isIdentityMatrix: bt,
  isTouchEvent: ne,
  isTransparent: Fi,
  joinPath: bn,
  loadImage: Bt,
  magnitude: ms,
  makeBoundingBoxFromPoints: ae,
  makePathSimpler: sn,
  matrixToSVG: Gt,
  mergeClipPaths: (t3, e4) => {
    var s3;
    let i3 = t3, r3 = e4;
    i3.inverted && !r3.inverted && (i3 = e4, r3 = t3), ve(r3, null === (s3 = r3.group) || void 0 === s3 ? void 0 : s3.calcTransformMatrix(), i3.calcTransformMatrix());
    const n3 = i3.inverted && r3.inverted;
    return n3 && (i3.inverted = r3.inverted = false), new Hr([
      i3
    ], {
      clipPath: r3,
      inverted: n3
    });
  },
  multiplyTransformMatrices: Tt,
  multiplyTransformMatrixArray: Ot,
  parsePath: xn,
  parsePreserveAspectRatioAttribute: Be,
  parseUnit: Re,
  pick: Wt,
  projectStrokeOnPoints: Xi,
  qrDecompose: Dt,
  radiansToDegrees: Ct,
  removeFromArray: it,
  removeTransformFromObject: (t3, e4) => {
    const s3 = wt(e4), i3 = Tt(s3, t3.calcOwnMatrix());
    le(t3, i3);
  },
  removeTransformMatrixForSvgParsing: On,
  request: Tn,
  requestAnimFrame: ut,
  resetObjectTransform: ue,
  rotatePoint: (t3, e4, s3) => t3.rotate(s3, e4),
  rotateVector: fs,
  saveObjectTransform: de,
  sendObjectToPlane: ve,
  sendPointToPlane: pe,
  sendVectorToPlane: me,
  setStyle: Sn,
  sin: nt,
  sizeAfterTransform: ge,
  string: Ni,
  stylesFromArray: Ki,
  stylesToArray: qi,
  toBlob: _t,
  toDataURL: yt,
  toFixed: Vt,
  transformPath: (t3, e4, s3) => (s3 && (e4 = Tt(e4, [
    1,
    0,
    0,
    1,
    -s3.x,
    -s3.y
  ])), t3.map((t4) => {
    const s4 = [
      ...t4
    ];
    for (let i3 = 1; i3 < t4.length - 1; i3 += 2) {
      const { x: r3, y: n3 } = St({
        x: t4[i3],
        y: t4[i3 + 1]
      }, e4);
      s4[i3] = r3, s4[i3 + 1] = n3;
    }
    return s4;
  })),
  transformPoint: St
});
var Dn = class extends te {
  constructor(e4) {
    let { allowTouchScrolling: s3 = false, containerClass: i3 = "" } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(e4), t(this, "upper", void 0), t(this, "container", void 0);
    const { el: r3 } = this.lower, n3 = this.createUpperCanvas();
    this.upper = {
      el: n3,
      ctx: n3.getContext("2d")
    }, this.applyCanvasStyle(r3, {
      allowTouchScrolling: s3
    }), this.applyCanvasStyle(n3, {
      allowTouchScrolling: s3,
      styles: {
        position: "absolute",
        left: "0",
        top: "0"
      }
    });
    const o3 = this.createContainerElement();
    o3.classList.add(i3), r3.parentNode && r3.parentNode.replaceChild(o3, r3), o3.append(r3, n3), this.container = o3;
  }
  createUpperCanvas() {
    const { el: t3 } = this.lower, e4 = pt();
    return e4.className = t3.className, e4.classList.remove("lower-canvas"), e4.classList.add("upper-canvas"), e4.setAttribute("data-fabric", "top"), e4.style.cssText = t3.style.cssText, e4.setAttribute("draggable", "true"), e4;
  }
  createContainerElement() {
    const t3 = m().createElement("div");
    return t3.setAttribute("data-fabric", "wrapper"), Sn(t3, {
      position: "relative"
    }), $t(t3), t3;
  }
  applyCanvasStyle(t3, e4) {
    const { styles: i3, allowTouchScrolling: r3 } = e4;
    Sn(t3, s(s({}, i3), {}, {
      "touch-action": r3 ? "manipulation" : j
    })), $t(t3);
  }
  setDimensions(t3, e4) {
    super.setDimensions(t3, e4);
    const { el: s3, ctx: i3 } = this.upper;
    Qt(s3, i3, t3, e4);
  }
  setCSSDimensions(t3) {
    super.setCSSDimensions(t3), Zt(this.upper.el, t3), Zt(this.container, t3);
  }
  cleanupDOM(t3) {
    const e4 = this.container, { el: s3 } = this.lower, { el: i3 } = this.upper;
    super.cleanupDOM(t3), e4.removeChild(i3), e4.removeChild(s3), e4.parentNode && e4.parentNode.replaceChild(s3, e4);
  }
  dispose() {
    super.dispose(), p().dispose(this.upper.el), delete this.upper, delete this.container;
  }
};
var Mn = class _Mn extends se {
  constructor() {
    super(...arguments), t(this, "targets", []), t(this, "_hoveredTargets", []), t(this, "_objectsToRender", void 0), t(this, "_currentTransform", null), t(this, "_groupSelector", null), t(this, "contextTopDirty", false);
  }
  static getDefaults() {
    return s(s({}, super.getDefaults()), _Mn.ownDefaults);
  }
  get upperCanvasEl() {
    var t3;
    return null === (t3 = this.elements.upper) || void 0 === t3 ? void 0 : t3.el;
  }
  get contextTop() {
    var t3;
    return null === (t3 = this.elements.upper) || void 0 === t3 ? void 0 : t3.ctx;
  }
  get wrapperEl() {
    return this.elements.container;
  }
  initElements(t3) {
    this.elements = new Dn(t3, {
      allowTouchScrolling: this.allowTouchScrolling,
      containerClass: this.containerClass
    }), this._createCacheCanvas();
  }
  _onObjectAdded(t3) {
    this._objectsToRender = void 0, super._onObjectAdded(t3);
  }
  _onObjectRemoved(t3) {
    this._objectsToRender = void 0, t3 === this._activeObject && (this.fire("before:selection:cleared", {
      deselected: [
        t3
      ]
    }), this._discardActiveObject(), this.fire("selection:cleared", {
      deselected: [
        t3
      ]
    }), t3.fire("deselected", {
      target: t3
    })), t3 === this._hoveredTarget && (this._hoveredTarget = void 0, this._hoveredTargets = []), super._onObjectRemoved(t3);
  }
  _onStackOrderChanged() {
    this._objectsToRender = void 0, super._onStackOrderChanged();
  }
  _chooseObjectsToRender() {
    const t3 = this._activeObject;
    return !this.preserveObjectStacking && t3 ? this._objects.filter((e4) => !e4.group && e4 !== t3).concat(t3) : this._objects;
  }
  renderAll() {
    this.cancelRequestedRender(), this.destroyed || (!this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = false), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = false), !this._objectsToRender && (this._objectsToRender = this._chooseObjectsToRender()), this.renderCanvas(this.getContext(), this._objectsToRender));
  }
  renderTopLayer(t3) {
    t3.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = true), this.selection && this._groupSelector && (this._drawSelection(t3), this.contextTopDirty = true), t3.restore();
  }
  renderTop() {
    const t3 = this.contextTop;
    this.clearContext(t3), this.renderTopLayer(t3), this.fire("after:render", {
      ctx: t3
    });
  }
  setTargetFindTolerance(t3) {
    t3 = Math.round(t3), this.targetFindTolerance = t3;
    const e4 = this.getRetinaScaling(), s3 = Math.ceil((2 * t3 + 1) * e4);
    this.pixelFindCanvasEl.width = this.pixelFindCanvasEl.height = s3, this.pixelFindContext.scale(e4, e4);
  }
  isTargetTransparent(t3, e4, s3) {
    const i3 = this.targetFindTolerance, r3 = this.pixelFindContext;
    this.clearContext(r3), r3.save(), r3.translate(-e4 + i3, -s3 + i3), r3.transform(...this.viewportTransform);
    const n3 = t3.selectionBackgroundColor;
    t3.selectionBackgroundColor = "", t3.render(r3), t3.selectionBackgroundColor = n3, r3.restore();
    const o3 = Math.round(i3 * this.getRetinaScaling());
    return Fi(r3, o3, o3, o3);
  }
  _isSelectionKeyPressed(t3) {
    const e4 = this.selectionKey;
    return !!e4 && (Array.isArray(e4) ? !!e4.find((e5) => !!e5 && true === t3[e5]) : t3[e4]);
  }
  _shouldClearSelection(t3, e4) {
    const s3 = this.getActiveObjects(), i3 = this._activeObject;
    return !!(!e4 || e4 && i3 && s3.length > 1 && -1 === s3.indexOf(e4) && i3 !== e4 && !this._isSelectionKeyPressed(t3) || e4 && !e4.evented || e4 && !e4.selectable && i3 && i3 !== e4);
  }
  _shouldCenterTransform(t3, e4, s3) {
    if (!t3) return;
    let i3;
    return e4 === z || e4 === H || e4 === N || e4 === W ? i3 = this.centeredScaling || t3.centeredScaling : e4 === I && (i3 = this.centeredRotation || t3.centeredRotation), i3 ? !s3 : s3;
  }
  _getOriginFromCorner(t3, e4) {
    const s3 = {
      x: t3.originX,
      y: t3.originY
    };
    return e4 ? ([
      "ml",
      "tl",
      "bl"
    ].includes(e4) ? s3.x = A : [
      "mr",
      "tr",
      "br"
    ].includes(e4) && (s3.x = M), [
      "tl",
      "mt",
      "tr"
    ].includes(e4) ? s3.y = E : [
      "bl",
      "mb",
      "br"
    ].includes(e4) && (s3.y = P), s3) : s3;
  }
  _setupCurrentTransform(t3, e4, i3) {
    var r3;
    const n3 = e4.group ? pe(this.getScenePoint(t3), void 0, e4.group.calcTransformMatrix()) : this.getScenePoint(t3), { key: o3 = "", control: a3 } = e4.getActiveControl() || {}, h3 = i3 && a3 ? null === (r3 = a3.getActionHandler(t3, e4, a3)) || void 0 === r3 ? void 0 : r3.bind(a3) : De, c3 = ((t4, e5, s3, i4) => {
      if (!e5 || !t4) return "drag";
      const r4 = i4.controls[e5];
      return r4.getActionName(s3, r4, i4);
    })(i3, o3, t3, e4), l3 = t3[this.centeredKey], u3 = this._shouldCenterTransform(e4, c3, l3) ? {
      x: D,
      y: D
    } : this._getOriginFromCorner(e4, o3), d3 = {
      target: e4,
      action: c3,
      actionHandler: h3,
      actionPerformed: false,
      corner: o3,
      scaleX: e4.scaleX,
      scaleY: e4.scaleY,
      skewX: e4.skewX,
      skewY: e4.skewY,
      offsetX: n3.x - e4.left,
      offsetY: n3.y - e4.top,
      originX: u3.x,
      originY: u3.y,
      ex: n3.x,
      ey: n3.y,
      lastX: n3.x,
      lastY: n3.y,
      theta: xt(e4.angle),
      width: e4.width,
      height: e4.height,
      shiftKey: t3.shiftKey,
      altKey: l3,
      original: s(s({}, de(e4)), {}, {
        originX: u3.x,
        originY: u3.y
      })
    };
    this._currentTransform = d3, this.fire("before:transform", {
      e: t3,
      transform: d3
    });
  }
  setCursor(t3) {
    this.upperCanvasEl.style.cursor = t3;
  }
  _drawSelection(t3) {
    const { x: e4, y: s3, deltaX: i3, deltaY: r3 } = this._groupSelector, n3 = new ot(e4, s3).transform(this.viewportTransform), o3 = new ot(e4 + i3, s3 + r3).transform(this.viewportTransform), a3 = this.selectionLineWidth / 2;
    let h3 = Math.min(n3.x, o3.x), c3 = Math.min(n3.y, o3.y), l3 = Math.max(n3.x, o3.x), u3 = Math.max(n3.y, o3.y);
    this.selectionColor && (t3.fillStyle = this.selectionColor, t3.fillRect(h3, c3, l3 - h3, u3 - c3)), this.selectionLineWidth && this.selectionBorderColor && (t3.lineWidth = this.selectionLineWidth, t3.strokeStyle = this.selectionBorderColor, h3 += a3, c3 += a3, l3 -= a3, u3 -= a3, ji.prototype._setLineDash.call(this, t3, this.selectionDashArray), t3.strokeRect(h3, c3, l3 - h3, u3 - c3));
  }
  findTarget(t3) {
    if (this.skipTargetFind) return;
    const e4 = this.getViewportPoint(t3), s3 = this._activeObject, i3 = this.getActiveObjects();
    if (this.targets = [], s3 && i3.length >= 1) {
      if (s3.findControl(e4, ne(t3))) return s3;
      if (i3.length > 1 && this.searchPossibleTargets([
        s3
      ], e4)) return s3;
      if (s3 === this.searchPossibleTargets([
        s3
      ], e4)) {
        if (this.preserveObjectStacking) {
          const i4 = this.targets;
          this.targets = [];
          const r3 = this.searchPossibleTargets(this._objects, e4);
          return t3[this.altSelectionKey] && r3 && r3 !== s3 ? (this.targets = i4, s3) : r3;
        }
        return s3;
      }
    }
    return this.searchPossibleTargets(this._objects, e4);
  }
  _pointIsInObjectSelectionArea(t3, e4) {
    let s3 = t3.getCoords();
    const i3 = this.getZoom(), r3 = t3.padding / i3;
    if (r3) {
      const [t4, e5, i4, n3] = s3, o3 = Math.atan2(e5.y - t4.y, e5.x - t4.x), a3 = rt(o3) * r3, h3 = nt(o3) * r3, c3 = a3 + h3, l3 = a3 - h3;
      s3 = [
        new ot(t4.x - l3, t4.y - c3),
        new ot(e5.x + c3, e5.y - l3),
        new ot(i4.x + l3, i4.y + c3),
        new ot(n3.x - c3, n3.y + l3)
      ];
    }
    return Ks.isPointInPolygon(e4, s3);
  }
  _checkTarget(t3, e4) {
    if (t3 && t3.visible && t3.evented && this._pointIsInObjectSelectionArea(t3, pe(e4, void 0, this.viewportTransform))) {
      if (!this.perPixelTargetFind && !t3.perPixelTargetFind || t3.isEditing) return true;
      if (!this.isTargetTransparent(t3, e4.x, e4.y)) return true;
    }
    return false;
  }
  _searchPossibleTargets(t3, e4) {
    let s3 = t3.length;
    for (; s3--; ) {
      const i3 = t3[s3];
      if (this._checkTarget(i3, e4)) {
        if (ht(i3) && i3.subTargetCheck) {
          const t4 = this._searchPossibleTargets(i3._objects, e4);
          t4 && this.targets.push(t4);
        }
        return i3;
      }
    }
  }
  searchPossibleTargets(t3, e4) {
    const s3 = this._searchPossibleTargets(t3, e4);
    if (s3 && ht(s3) && s3.interactive && this.targets[0]) {
      const t4 = this.targets;
      for (let e5 = t4.length - 1; e5 > 0; e5--) {
        const s4 = t4[e5];
        if (!ht(s4) || !s4.interactive) return s4;
      }
      return t4[0];
    }
    return s3;
  }
  getViewportPoint(t3) {
    return this._pointer ? this._pointer : this.getPointer(t3, true);
  }
  getScenePoint(t3) {
    return this._absolutePointer ? this._absolutePointer : this.getPointer(t3);
  }
  getPointer(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const s3 = this.upperCanvasEl, i3 = s3.getBoundingClientRect();
    let r3 = re(t3), n3 = i3.width || 0, o3 = i3.height || 0;
    n3 && o3 || (P in i3 && E in i3 && (o3 = Math.abs(i3.top - i3.bottom)), A in i3 && M in i3 && (n3 = Math.abs(i3.right - i3.left))), this.calcOffset(), r3.x = r3.x - this._offset.left, r3.y = r3.y - this._offset.top, e4 || (r3 = pe(r3, void 0, this.viewportTransform));
    const a3 = this.getRetinaScaling();
    1 !== a3 && (r3.x /= a3, r3.y /= a3);
    const h3 = 0 === n3 || 0 === o3 ? new ot(1, 1) : new ot(s3.width / n3, s3.height / o3);
    return r3.multiply(h3);
  }
  _setDimensionsImpl(t3, e4) {
    this._resetTransformEventData(), super._setDimensionsImpl(t3, e4), this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop);
  }
  _createCacheCanvas() {
    this.pixelFindCanvasEl = pt(), this.pixelFindContext = this.pixelFindCanvasEl.getContext("2d", {
      willReadFrequently: true
    }), this.setTargetFindTolerance(this.targetFindTolerance);
  }
  getTopContext() {
    return this.elements.upper.ctx;
  }
  getSelectionContext() {
    return this.elements.upper.ctx;
  }
  getSelectionElement() {
    return this.elements.upper.el;
  }
  getActiveObject() {
    return this._activeObject;
  }
  getActiveObjects() {
    const t3 = this._activeObject;
    return Ut(t3) ? t3.getObjects() : t3 ? [
      t3
    ] : [];
  }
  _fireSelectionEvents(t3, e4) {
    let s3 = false, i3 = false;
    const r3 = this.getActiveObjects(), n3 = [], o3 = [];
    t3.forEach((t4) => {
      r3.includes(t4) || (s3 = true, t4.fire("deselected", {
        e: e4,
        target: t4
      }), o3.push(t4));
    }), r3.forEach((i4) => {
      t3.includes(i4) || (s3 = true, i4.fire("selected", {
        e: e4,
        target: i4
      }), n3.push(i4));
    }), t3.length > 0 && r3.length > 0 ? (i3 = true, s3 && this.fire("selection:updated", {
      e: e4,
      selected: n3,
      deselected: o3
    })) : r3.length > 0 ? (i3 = true, this.fire("selection:created", {
      e: e4,
      selected: n3
    })) : t3.length > 0 && (i3 = true, this.fire("selection:cleared", {
      e: e4,
      deselected: o3
    })), i3 && (this._objectsToRender = void 0);
  }
  setActiveObject(t3, e4) {
    const s3 = this.getActiveObjects(), i3 = this._setActiveObject(t3, e4);
    return this._fireSelectionEvents(s3, e4), i3;
  }
  _setActiveObject(t3, e4) {
    const s3 = this._activeObject;
    return s3 !== t3 && (!(!this._discardActiveObject(e4, t3) && this._activeObject) && (!t3.onSelect({
      e: e4
    }) && (this._activeObject = t3, Ut(t3) && s3 !== t3 && t3.set("canvas", this), t3.setCoords(), true)));
  }
  _discardActiveObject(t3, e4) {
    const s3 = this._activeObject;
    return !!s3 && (!s3.onDeselect({
      e: t3,
      object: e4
    }) && (this._currentTransform && this._currentTransform.target === s3 && this.endCurrentTransform(t3), Ut(s3) && s3 === this._hoveredTarget && (this._hoveredTarget = void 0), this._activeObject = void 0, true));
  }
  discardActiveObject(t3) {
    const e4 = this.getActiveObjects(), s3 = this.getActiveObject();
    e4.length && this.fire("before:selection:cleared", {
      e: t3,
      deselected: [
        s3
      ]
    });
    const i3 = this._discardActiveObject(t3);
    return this._fireSelectionEvents(e4, t3), i3;
  }
  endCurrentTransform(t3) {
    const e4 = this._currentTransform;
    this._finalizeCurrentTransform(t3), e4 && e4.target && (e4.target.isMoving = false), this._currentTransform = null;
  }
  _finalizeCurrentTransform(t3) {
    const e4 = this._currentTransform, s3 = e4.target, i3 = {
      e: t3,
      target: s3,
      transform: e4,
      action: e4.action
    };
    s3._scaling && (s3._scaling = false), s3.setCoords(), e4.actionPerformed && (this.fire("object:modified", i3), s3.fire(Q, i3));
  }
  setViewportTransform(t3) {
    super.setViewportTransform(t3);
    const e4 = this._activeObject;
    e4 && e4.setCoords();
  }
  destroy() {
    const t3 = this._activeObject;
    Ut(t3) && (t3.removeAll(), t3.dispose()), delete this._activeObject, super.destroy(), this.pixelFindContext = null, this.pixelFindCanvasEl = void 0;
  }
  clear() {
    this.discardActiveObject(), this._activeObject = void 0, this.clearContext(this.contextTop), super.clear();
  }
  drawControls(t3) {
    const e4 = this._activeObject;
    e4 && e4._renderControls(t3);
  }
  _toObject(t3, e4, s3) {
    const i3 = this._realizeGroupTransformOnObject(t3), r3 = super._toObject(t3, e4, s3);
    return t3.set(i3), r3;
  }
  _realizeGroupTransformOnObject(t3) {
    const { group: e4 } = t3;
    if (e4 && Ut(e4) && this._activeObject === e4) {
      const s3 = Wt(t3, [
        "angle",
        "flipX",
        "flipY",
        M,
        H,
        N,
        U,
        q,
        P
      ]);
      return ce(t3, e4.calcOwnMatrix()), s3;
    }
    return {};
  }
  _setSVGObject(t3, e4, s3) {
    const i3 = this._realizeGroupTransformOnObject(e4);
    super._setSVGObject(t3, e4, s3), e4.set(i3);
  }
};
t(Mn, "ownDefaults", {
  uniformScaling: true,
  uniScaleKey: "shiftKey",
  centeredScaling: false,
  centeredRotation: false,
  centeredKey: "altKey",
  altActionKey: "shiftKey",
  selection: true,
  selectionKey: "shiftKey",
  selectionColor: "rgba(100, 100, 255, 0.3)",
  selectionDashArray: [],
  selectionBorderColor: "rgba(255, 255, 255, 0.3)",
  selectionLineWidth: 1,
  selectionFullyContained: false,
  hoverCursor: "move",
  moveCursor: "move",
  defaultCursor: "default",
  freeDrawingCursor: "crosshair",
  notAllowedCursor: "not-allowed",
  perPixelTargetFind: false,
  targetFindTolerance: 0,
  skipTargetFind: false,
  stopContextMenu: false,
  fireRightClick: false,
  fireMiddleClick: false,
  enablePointerEvents: false,
  containerClass: "canvas-container",
  preserveObjectStacking: false
});
var Pn = class {
  constructor(e4) {
    t(this, "targets", []), t(this, "__disposer", void 0);
    const s3 = () => {
      const { hiddenTextarea: t3 } = e4.getActiveObject() || {};
      t3 && t3.focus();
    }, i3 = e4.upperCanvasEl;
    i3.addEventListener("click", s3), this.__disposer = () => i3.removeEventListener("click", s3);
  }
  exitTextEditing() {
    this.target = void 0, this.targets.forEach((t3) => {
      t3.isEditing && t3.exitEditing();
    });
  }
  add(t3) {
    this.targets.push(t3);
  }
  remove(t3) {
    this.unregister(t3), it(this.targets, t3);
  }
  register(t3) {
    this.target = t3;
  }
  unregister(t3) {
    t3 === this.target && (this.target = void 0);
  }
  onMouseMove(t3) {
    var e4;
    (null === (e4 = this.target) || void 0 === e4 ? void 0 : e4.isEditing) && this.target.updateSelectionOnMouseMove(t3);
  }
  clear() {
    this.targets = [], this.target = void 0;
  }
  dispose() {
    this.clear(), this.__disposer(), delete this.__disposer;
  }
};
var En = [
  "target",
  "oldTarget",
  "fireCanvas",
  "e"
];
var An = {
  passive: false
};
var jn = (t3, e4) => {
  const s3 = t3.getViewportPoint(e4), i3 = t3.getScenePoint(e4);
  return {
    viewportPoint: s3,
    scenePoint: i3,
    pointer: s3,
    absolutePointer: i3
  };
};
var Fn = function(t3) {
  for (var e4 = arguments.length, s3 = new Array(e4 > 1 ? e4 - 1 : 0), i3 = 1; i3 < e4; i3++) s3[i3 - 1] = arguments[i3];
  return t3.addEventListener(...s3);
};
var Ln = function(t3) {
  for (var e4 = arguments.length, s3 = new Array(e4 > 1 ? e4 - 1 : 0), i3 = 1; i3 < e4; i3++) s3[i3 - 1] = arguments[i3];
  return t3.removeEventListener(...s3);
};
var Rn = {
  mouse: {
    in: "over",
    out: "out",
    targetIn: "mouseover",
    targetOut: "mouseout",
    canvasIn: "mouse:over",
    canvasOut: "mouse:out"
  },
  drag: {
    in: "enter",
    out: "leave",
    targetIn: "dragenter",
    targetOut: "dragleave",
    canvasIn: "drag:enter",
    canvasOut: "drag:leave"
  }
};
var Bn = class extends Mn {
  constructor(e4) {
    super(e4, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), t(this, "_isClick", void 0), t(this, "textEditingManager", new Pn(this)), [
      "_onMouseDown",
      "_onTouchStart",
      "_onMouseMove",
      "_onMouseUp",
      "_onTouchEnd",
      "_onResize",
      "_onMouseWheel",
      "_onMouseOut",
      "_onMouseEnter",
      "_onContextMenu",
      "_onClick",
      "_onDragStart",
      "_onDragEnd",
      "_onDragProgress",
      "_onDragOver",
      "_onDragEnter",
      "_onDragLeave",
      "_onDrop"
    ].forEach((t3) => {
      this[t3] = this[t3].bind(this);
    }), this.addOrRemove(Fn, "add");
  }
  _getEventPrefix() {
    return this.enablePointerEvents ? "pointer" : "mouse";
  }
  addOrRemove(t3, e4) {
    const s3 = this.upperCanvasEl, i3 = this._getEventPrefix();
    t3(Jt(s3), "resize", this._onResize), t3(s3, i3 + "down", this._onMouseDown), t3(s3, "".concat(i3, "move"), this._onMouseMove, An), t3(s3, "".concat(i3, "out"), this._onMouseOut), t3(s3, "".concat(i3, "enter"), this._onMouseEnter), t3(s3, "wheel", this._onMouseWheel), t3(s3, "contextmenu", this._onContextMenu), t3(s3, "click", this._onClick), t3(s3, "dblclick", this._onClick), t3(s3, "dragstart", this._onDragStart), t3(s3, "dragend", this._onDragEnd), t3(s3, "dragover", this._onDragOver), t3(s3, "dragenter", this._onDragEnter), t3(s3, "dragleave", this._onDragLeave), t3(s3, "drop", this._onDrop), this.enablePointerEvents || t3(s3, "touchstart", this._onTouchStart, An);
  }
  removeListeners() {
    this.addOrRemove(Ln, "remove");
    const t3 = this._getEventPrefix(), e4 = Kt(this.upperCanvasEl);
    Ln(e4, "".concat(t3, "up"), this._onMouseUp), Ln(e4, "touchend", this._onTouchEnd, An), Ln(e4, "".concat(t3, "move"), this._onMouseMove, An), Ln(e4, "touchmove", this._onMouseMove, An), clearTimeout(this._willAddMouseDown);
  }
  _onMouseWheel(t3) {
    this.__onMouseWheel(t3);
  }
  _onMouseOut(t3) {
    const e4 = this._hoveredTarget, i3 = s({
      e: t3
    }, jn(this, t3));
    this.fire("mouse:out", s(s({}, i3), {}, {
      target: e4
    })), this._hoveredTarget = void 0, e4 && e4.fire("mouseout", s({}, i3)), this._hoveredTargets.forEach((t4) => {
      this.fire("mouse:out", s(s({}, i3), {}, {
        target: t4
      })), t4 && t4.fire("mouseout", s({}, i3));
    }), this._hoveredTargets = [];
  }
  _onMouseEnter(t3) {
    this._currentTransform || this.findTarget(t3) || (this.fire("mouse:over", s({
      e: t3
    }, jn(this, t3))), this._hoveredTarget = void 0, this._hoveredTargets = []);
  }
  _onDragStart(t3) {
    this._isClick = false;
    const e4 = this.getActiveObject();
    if (e4 && e4.onDragStart(t3)) {
      this._dragSource = e4;
      const s3 = {
        e: t3,
        target: e4
      };
      return this.fire("dragstart", s3), e4.fire("dragstart", s3), void Fn(this.upperCanvasEl, "drag", this._onDragProgress);
    }
    oe(t3);
  }
  _renderDragEffects(t3, e4, s3) {
    let i3 = false;
    const r3 = this._dropTarget;
    r3 && r3 !== e4 && r3 !== s3 && (r3.clearContextTop(), i3 = true), null == e4 || e4.clearContextTop(), s3 !== e4 && (null == s3 || s3.clearContextTop());
    const n3 = this.contextTop;
    n3.save(), n3.transform(...this.viewportTransform), e4 && (n3.save(), e4.transform(n3), e4.renderDragSourceEffect(t3), n3.restore(), i3 = true), s3 && (n3.save(), s3.transform(n3), s3.renderDropTargetEffect(t3), n3.restore(), i3 = true), n3.restore(), i3 && (this.contextTopDirty = true);
  }
  _onDragEnd(t3) {
    const e4 = !!t3.dataTransfer && t3.dataTransfer.dropEffect !== j, s3 = e4 ? this._activeObject : void 0, i3 = {
      e: t3,
      target: this._dragSource,
      subTargets: this.targets,
      dragSource: this._dragSource,
      didDrop: e4,
      dropTarget: s3
    };
    Ln(this.upperCanvasEl, "drag", this._onDragProgress), this.fire("dragend", i3), this._dragSource && this._dragSource.fire("dragend", i3), delete this._dragSource, this._onMouseUp(t3);
  }
  _onDragProgress(t3) {
    const e4 = {
      e: t3,
      target: this._dragSource,
      dragSource: this._dragSource,
      dropTarget: this._draggedoverTarget
    };
    this.fire("drag", e4), this._dragSource && this._dragSource.fire("drag", e4);
  }
  findDragTargets(t3) {
    this.targets = [];
    return {
      target: this._searchPossibleTargets(this._objects, this.getViewportPoint(t3)),
      targets: [
        ...this.targets
      ]
    };
  }
  _onDragOver(t3) {
    const e4 = "dragover", { target: s3, targets: i3 } = this.findDragTargets(t3), r3 = this._dragSource, n3 = {
      e: t3,
      target: s3,
      subTargets: i3,
      dragSource: r3,
      canDrop: false,
      dropTarget: void 0
    };
    let o3;
    this.fire(e4, n3), this._fireEnterLeaveEvents(s3, n3), s3 && (s3.canDrop(t3) && (o3 = s3), s3.fire(e4, n3));
    for (let s4 = 0; s4 < i3.length; s4++) {
      const r4 = i3[s4];
      r4.canDrop(t3) && (o3 = r4), r4.fire(e4, n3);
    }
    this._renderDragEffects(t3, r3, o3), this._dropTarget = o3;
  }
  _onDragEnter(t3) {
    const { target: e4, targets: s3 } = this.findDragTargets(t3), i3 = {
      e: t3,
      target: e4,
      subTargets: s3,
      dragSource: this._dragSource
    };
    this.fire("dragenter", i3), this._fireEnterLeaveEvents(e4, i3);
  }
  _onDragLeave(t3) {
    const e4 = {
      e: t3,
      target: this._draggedoverTarget,
      subTargets: this.targets,
      dragSource: this._dragSource
    };
    this.fire("dragleave", e4), this._fireEnterLeaveEvents(void 0, e4), this._renderDragEffects(t3, this._dragSource), this._dropTarget = void 0, this.targets = [], this._hoveredTargets = [];
  }
  _onDrop(t3) {
    const { target: e4, targets: i3 } = this.findDragTargets(t3), r3 = this._basicEventHandler("drop:before", s({
      e: t3,
      target: e4,
      subTargets: i3,
      dragSource: this._dragSource
    }, jn(this, t3)));
    r3.didDrop = false, r3.dropTarget = void 0, this._basicEventHandler("drop", r3), this.fire("drop:after", r3);
  }
  _onContextMenu(t3) {
    const e4 = this.findTarget(t3), s3 = this.targets || [], i3 = this._basicEventHandler("contextmenu:before", {
      e: t3,
      target: e4,
      subTargets: s3
    });
    return this.stopContextMenu && oe(t3), this._basicEventHandler("contextmenu", i3), false;
  }
  _onClick(t3) {
    const e4 = t3.detail;
    e4 > 3 || e4 < 2 || (this._cacheTransformEventData(t3), 2 == e4 && "dblclick" === t3.type && this._handleEvent(t3, "dblclick"), 3 == e4 && this._handleEvent(t3, "tripleclick"), this._resetTransformEventData());
  }
  getPointerId(t3) {
    const e4 = t3.changedTouches;
    return e4 ? e4[0] && e4[0].identifier : this.enablePointerEvents ? t3.pointerId : -1;
  }
  _isMainEvent(t3) {
    return true === t3.isPrimary || false !== t3.isPrimary && ("touchend" === t3.type && 0 === t3.touches.length || (!t3.changedTouches || t3.changedTouches[0].identifier === this.mainTouchId));
  }
  _onTouchStart(t3) {
    let e4 = !this.allowTouchScrolling;
    const s3 = this._activeObject;
    void 0 === this.mainTouchId && (this.mainTouchId = this.getPointerId(t3)), this.__onMouseDown(t3), (this.isDrawingMode || s3 && this._target === s3) && (e4 = true), e4 && t3.preventDefault(), this._resetTransformEventData();
    const i3 = this.upperCanvasEl, r3 = this._getEventPrefix(), n3 = Kt(i3);
    Fn(n3, "touchend", this._onTouchEnd, An), e4 && Fn(n3, "touchmove", this._onMouseMove, An), Ln(i3, "".concat(r3, "down"), this._onMouseDown);
  }
  _onMouseDown(t3) {
    this.__onMouseDown(t3), this._resetTransformEventData();
    const e4 = this.upperCanvasEl, s3 = this._getEventPrefix();
    Ln(e4, "".concat(s3, "move"), this._onMouseMove, An);
    const i3 = Kt(e4);
    Fn(i3, "".concat(s3, "up"), this._onMouseUp), Fn(i3, "".concat(s3, "move"), this._onMouseMove, An);
  }
  _onTouchEnd(t3) {
    if (t3.touches.length > 0) return;
    this.__onMouseUp(t3), this._resetTransformEventData(), delete this.mainTouchId;
    const e4 = this._getEventPrefix(), s3 = Kt(this.upperCanvasEl);
    Ln(s3, "touchend", this._onTouchEnd, An), Ln(s3, "touchmove", this._onMouseMove, An), this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(() => {
      Fn(this.upperCanvasEl, "".concat(e4, "down"), this._onMouseDown), this._willAddMouseDown = 0;
    }, 400);
  }
  _onMouseUp(t3) {
    this.__onMouseUp(t3), this._resetTransformEventData();
    const e4 = this.upperCanvasEl, s3 = this._getEventPrefix();
    if (this._isMainEvent(t3)) {
      const t4 = Kt(this.upperCanvasEl);
      Ln(t4, "".concat(s3, "up"), this._onMouseUp), Ln(t4, "".concat(s3, "move"), this._onMouseMove, An), Fn(e4, "".concat(s3, "move"), this._onMouseMove, An);
    }
  }
  _onMouseMove(t3) {
    const e4 = this.getActiveObject();
    !this.allowTouchScrolling && (!e4 || !e4.shouldStartDragging(t3)) && t3.preventDefault && t3.preventDefault(), this.__onMouseMove(t3);
  }
  _onResize() {
    this.calcOffset(), this._resetTransformEventData();
  }
  _shouldRender(t3) {
    const e4 = this.getActiveObject();
    return !!e4 != !!t3 || e4 && t3 && e4 !== t3;
  }
  __onMouseUp(t3) {
    var e4;
    this._cacheTransformEventData(t3), this._handleEvent(t3, "up:before");
    const s3 = this._currentTransform, i3 = this._isClick, r3 = this._target, { button: n3 } = t3;
    if (n3) return (this.fireMiddleClick && 1 === n3 || this.fireRightClick && 2 === n3) && this._handleEvent(t3, "up"), void this._resetTransformEventData();
    if (this.isDrawingMode && this._isCurrentlyDrawing) return void this._onMouseUpInDrawingMode(t3);
    if (!this._isMainEvent(t3)) return;
    let o3, a3, h3 = false;
    if (s3 && (this._finalizeCurrentTransform(t3), h3 = s3.actionPerformed), !i3) {
      const e5 = r3 === this._activeObject;
      this.handleSelection(t3), h3 || (h3 = this._shouldRender(r3) || !e5 && r3 === this._activeObject);
    }
    if (r3) {
      const e5 = r3.findControl(this.getViewportPoint(t3), ne(t3)), { key: i4, control: n4 } = e5 || {};
      if (a3 = i4, r3.selectable && r3 !== this._activeObject && "up" === r3.activeOn) this.setActiveObject(r3, t3), h3 = true;
      else if (n4) {
        const e6 = n4.getMouseUpHandler(t3, r3, n4);
        e6 && (o3 = this.getScenePoint(t3), e6.call(n4, t3, s3, o3.x, o3.y));
      }
      r3.isMoving = false;
    }
    if (s3 && (s3.target !== r3 || s3.corner !== a3)) {
      const e5 = s3.target && s3.target.controls[s3.corner], i4 = e5 && e5.getMouseUpHandler(t3, s3.target, e5);
      o3 = o3 || this.getScenePoint(t3), i4 && i4.call(e5, t3, s3, o3.x, o3.y);
    }
    this._setCursorFromEvent(t3, r3), this._handleEvent(t3, "up"), this._groupSelector = null, this._currentTransform = null, r3 && (r3.__corner = void 0), h3 ? this.requestRenderAll() : i3 || null !== (e4 = this._activeObject) && void 0 !== e4 && e4.isEditing || this.renderTop();
  }
  _basicEventHandler(t3, e4) {
    const { target: s3, subTargets: i3 = [] } = e4;
    this.fire(t3, e4), s3 && s3.fire(t3, e4);
    for (let r3 = 0; r3 < i3.length; r3++) i3[r3] !== s3 && i3[r3].fire(t3, e4);
    return e4;
  }
  _handleEvent(t3, e4, i3) {
    const r3 = this._target, n3 = this.targets || [], o3 = s(s(s({
      e: t3,
      target: r3,
      subTargets: n3
    }, jn(this, t3)), {}, {
      transform: this._currentTransform
    }, "up:before" === e4 || "up" === e4 ? {
      isClick: this._isClick,
      currentTarget: this.findTarget(t3),
      currentSubTargets: this.targets
    } : {}), "down:before" === e4 || "down" === e4 ? i3 : {});
    this.fire("mouse:".concat(e4), o3), r3 && r3.fire("mouse".concat(e4), o3);
    for (let t4 = 0; t4 < n3.length; t4++) n3[t4] !== r3 && n3[t4].fire("mouse".concat(e4), o3);
  }
  _onMouseDownInDrawingMode(t3) {
    this._isCurrentlyDrawing = true, this.getActiveObject() && (this.discardActiveObject(t3), this.requestRenderAll());
    const e4 = this.getScenePoint(t3);
    this.freeDrawingBrush && this.freeDrawingBrush.onMouseDown(e4, {
      e: t3,
      pointer: e4
    }), this._handleEvent(t3, "down", {
      alreadySelected: false
    });
  }
  _onMouseMoveInDrawingMode(t3) {
    if (this._isCurrentlyDrawing) {
      const e4 = this.getScenePoint(t3);
      this.freeDrawingBrush && this.freeDrawingBrush.onMouseMove(e4, {
        e: t3,
        pointer: e4
      });
    }
    this.setCursor(this.freeDrawingCursor), this._handleEvent(t3, "move");
  }
  _onMouseUpInDrawingMode(t3) {
    const e4 = this.getScenePoint(t3);
    this.freeDrawingBrush ? this._isCurrentlyDrawing = !!this.freeDrawingBrush.onMouseUp({
      e: t3,
      pointer: e4
    }) : this._isCurrentlyDrawing = false, this._handleEvent(t3, "up");
  }
  __onMouseDown(t3) {
    this._isClick = true, this._cacheTransformEventData(t3), this._handleEvent(t3, "down:before");
    let e4 = this._target, s3 = !!e4 && e4 === this._activeObject;
    const { button: i3 } = t3;
    if (i3) return (this.fireMiddleClick && 1 === i3 || this.fireRightClick && 2 === i3) && this._handleEvent(t3, "down", {
      alreadySelected: s3
    }), void this._resetTransformEventData();
    if (this.isDrawingMode) return void this._onMouseDownInDrawingMode(t3);
    if (!this._isMainEvent(t3)) return;
    if (this._currentTransform) return;
    let r3 = this._shouldRender(e4), n3 = false;
    if (this.handleMultiSelection(t3, e4) ? (e4 = this._activeObject, n3 = true, r3 = true) : this._shouldClearSelection(t3, e4) && this.discardActiveObject(t3), this.selection && (!e4 || !e4.selectable && !e4.isEditing && e4 !== this._activeObject)) {
      const e5 = this.getScenePoint(t3);
      this._groupSelector = {
        x: e5.x,
        y: e5.y,
        deltaY: 0,
        deltaX: 0
      };
    }
    if (s3 = !!e4 && e4 === this._activeObject, e4) {
      e4.selectable && "down" === e4.activeOn && this.setActiveObject(e4, t3);
      const i4 = e4.findControl(this.getViewportPoint(t3), ne(t3));
      if (e4 === this._activeObject && (i4 || !n3)) {
        this._setupCurrentTransform(t3, e4, s3);
        const r4 = i4 ? i4.control : void 0, n4 = this.getScenePoint(t3), o3 = r4 && r4.getMouseDownHandler(t3, e4, r4);
        o3 && o3.call(r4, t3, this._currentTransform, n4.x, n4.y);
      }
    }
    r3 && (this._objectsToRender = void 0), this._handleEvent(t3, "down", {
      alreadySelected: s3
    }), r3 && this.requestRenderAll();
  }
  _resetTransformEventData() {
    this._target = this._pointer = this._absolutePointer = void 0;
  }
  _cacheTransformEventData(t3) {
    this._resetTransformEventData(), this._pointer = this.getViewportPoint(t3), this._absolutePointer = pe(this._pointer, void 0, this.viewportTransform), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(t3);
  }
  __onMouseMove(t3) {
    if (this._isClick = false, this._cacheTransformEventData(t3), this._handleEvent(t3, "move:before"), this.isDrawingMode) return void this._onMouseMoveInDrawingMode(t3);
    if (!this._isMainEvent(t3)) return;
    const e4 = this._groupSelector;
    if (e4) {
      const s3 = this.getScenePoint(t3);
      e4.deltaX = s3.x - e4.x, e4.deltaY = s3.y - e4.y, this.renderTop();
    } else if (this._currentTransform) this._transformObject(t3);
    else {
      const e5 = this.findTarget(t3);
      this._setCursorFromEvent(t3, e5), this._fireOverOutEvents(t3, e5);
    }
    this.textEditingManager.onMouseMove(t3), this._handleEvent(t3, "move"), this._resetTransformEventData();
  }
  _fireOverOutEvents(t3, e4) {
    const s3 = this._hoveredTarget, i3 = this._hoveredTargets, r3 = this.targets, n3 = Math.max(i3.length, r3.length);
    this.fireSyntheticInOutEvents("mouse", {
      e: t3,
      target: e4,
      oldTarget: s3,
      fireCanvas: true
    });
    for (let e5 = 0; e5 < n3; e5++) this.fireSyntheticInOutEvents("mouse", {
      e: t3,
      target: r3[e5],
      oldTarget: i3[e5]
    });
    this._hoveredTarget = e4, this._hoveredTargets = this.targets.concat();
  }
  _fireEnterLeaveEvents(t3, e4) {
    const i3 = this._draggedoverTarget, r3 = this._hoveredTargets, n3 = this.targets, o3 = Math.max(r3.length, n3.length);
    this.fireSyntheticInOutEvents("drag", s(s({}, e4), {}, {
      target: t3,
      oldTarget: i3,
      fireCanvas: true
    }));
    for (let t4 = 0; t4 < o3; t4++) this.fireSyntheticInOutEvents("drag", s(s({}, e4), {}, {
      target: n3[t4],
      oldTarget: r3[t4]
    }));
    this._draggedoverTarget = t3;
  }
  fireSyntheticInOutEvents(t3, e4) {
    let { target: r3, oldTarget: n3, fireCanvas: o3, e: a3 } = e4, h3 = i(e4, En);
    const { targetIn: c3, targetOut: l3, canvasIn: u3, canvasOut: d3 } = Rn[t3], g3 = n3 !== r3;
    if (n3 && g3) {
      const t4 = s(s({}, h3), {}, {
        e: a3,
        target: n3,
        nextTarget: r3
      }, jn(this, a3));
      o3 && this.fire(d3, t4), n3.fire(l3, t4);
    }
    if (r3 && g3) {
      const t4 = s(s({}, h3), {}, {
        e: a3,
        target: r3,
        previousTarget: n3
      }, jn(this, a3));
      o3 && this.fire(u3, t4), r3.fire(c3, t4);
    }
  }
  __onMouseWheel(t3) {
    this._cacheTransformEventData(t3), this._handleEvent(t3, "wheel"), this._resetTransformEventData();
  }
  _transformObject(t3) {
    const e4 = this.getScenePoint(t3), s3 = this._currentTransform, i3 = s3.target, r3 = i3.group ? pe(e4, void 0, i3.group.calcTransformMatrix()) : e4;
    s3.shiftKey = t3.shiftKey, s3.altKey = !!this.centeredKey && t3[this.centeredKey], this._performTransformAction(t3, s3, r3), s3.actionPerformed && this.requestRenderAll();
  }
  _performTransformAction(t3, e4, s3) {
    const { action: i3, actionHandler: r3, target: n3 } = e4, o3 = !!r3 && r3(t3, e4, s3.x, s3.y);
    o3 && n3.setCoords(), "drag" === i3 && o3 && (e4.target.isMoving = true, this.setCursor(e4.target.moveCursor || this.moveCursor)), e4.actionPerformed = e4.actionPerformed || o3;
  }
  _setCursorFromEvent(t3, e4) {
    if (!e4) return void this.setCursor(this.defaultCursor);
    let s3 = e4.hoverCursor || this.hoverCursor;
    const i3 = Ut(this._activeObject) ? this._activeObject : null, r3 = (!i3 || e4.group !== i3) && e4.findControl(this.getViewportPoint(t3));
    if (r3) {
      const s4 = r3.control;
      this.setCursor(s4.cursorStyleHandler(t3, s4, e4));
    } else e4.subTargetCheck && this.targets.concat().reverse().map((t4) => {
      s3 = t4.hoverCursor || s3;
    }), this.setCursor(s3);
  }
  handleMultiSelection(t3, e4) {
    const s3 = this._activeObject, i3 = Ut(s3);
    if (s3 && this._isSelectionKeyPressed(t3) && this.selection && e4 && e4.selectable && (s3 !== e4 || i3) && (i3 || !e4.isDescendantOf(s3) && !s3.isDescendantOf(e4)) && !e4.onSelect({
      e: t3
    }) && !s3.getActiveControl()) {
      if (i3) {
        const i4 = s3.getObjects();
        if (e4 === s3) {
          const s4 = this.getViewportPoint(t3);
          if (!(e4 = this.searchPossibleTargets(i4, s4) || this.searchPossibleTargets(this._objects, s4)) || !e4.selectable) return false;
        }
        e4.group === s3 ? (s3.remove(e4), this._hoveredTarget = e4, this._hoveredTargets = [
          ...this.targets
        ], 1 === s3.size() && this._setActiveObject(s3.item(0), t3)) : (s3.multiSelectAdd(e4), this._hoveredTarget = s3, this._hoveredTargets = [
          ...this.targets
        ]), this._fireSelectionEvents(i4, t3);
      } else {
        s3.isEditing && s3.exitEditing();
        const i4 = new (tt.getClass("ActiveSelection"))([], {
          canvas: this
        });
        i4.multiSelectAdd(s3, e4), this._hoveredTarget = i4, this._setActiveObject(i4, t3), this._fireSelectionEvents([
          s3
        ], t3);
      }
      return true;
    }
    return false;
  }
  handleSelection(t3) {
    if (!this.selection || !this._groupSelector) return false;
    const { x: e4, y: s3, deltaX: i3, deltaY: r3 } = this._groupSelector, n3 = new ot(e4, s3), o3 = n3.add(new ot(i3, r3)), a3 = n3.min(o3), h3 = n3.max(o3).subtract(a3), c3 = this.collectObjects({
      left: a3.x,
      top: a3.y,
      width: h3.x,
      height: h3.y
    }, {
      includeIntersecting: !this.selectionFullyContained
    }), l3 = n3.eq(o3) ? c3[0] ? [
      c3[0]
    ] : [] : c3.length > 1 ? c3.filter((e5) => !e5.onSelect({
      e: t3
    })).reverse() : c3;
    if (1 === l3.length) this.setActiveObject(l3[0], t3);
    else if (l3.length > 1) {
      const e5 = tt.getClass("ActiveSelection");
      this.setActiveObject(new e5(l3, {
        canvas: this
      }), t3);
    }
    return this._groupSelector = null, true;
  }
  clear() {
    this.textEditingManager.clear(), super.clear();
  }
  destroy() {
    this.removeListeners(), this.textEditingManager.dispose(), super.destroy();
  }
};
var In = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
};
var Xn = s(s({}, In), {}, {
  r1: 0,
  r2: 0
});
var Wn = (t3, e4) => isNaN(t3) && "number" == typeof e4 ? e4 : t3;
var Yn = /^(\d+\.\d+)%|(\d+)%$/;
function Vn(t3) {
  return t3 && Yn.test(t3);
}
function Gn(t3, e4) {
  const s3 = "number" == typeof t3 ? t3 : "string" == typeof t3 ? parseFloat(t3) / (Vn(t3) ? 100 : 1) : NaN;
  return ks(0, Wn(s3, e4), 1);
}
var zn = /\s*;\s*/;
var Hn = /\s*:\s*/;
function Nn(t3, e4) {
  let s3, i3;
  const r3 = t3.getAttribute("style");
  if (r3) {
    const t4 = r3.split(zn);
    "" === t4[t4.length - 1] && t4.pop();
    for (let e5 = t4.length; e5--; ) {
      const [r4, n4] = t4[e5].split(Hn).map((t5) => t5.trim());
      "stop-color" === r4 ? s3 = n4 : "stop-opacity" === r4 && (i3 = n4);
    }
  }
  const n3 = new Le(s3 || t3.getAttribute("stop-color") || "rgb(0,0,0)");
  return {
    offset: Gn(t3.getAttribute("offset"), 0),
    color: n3.toRgb(),
    opacity: Wn(parseFloat(i3 || t3.getAttribute("stop-opacity") || ""), 1) * n3.getAlpha() * e4
  };
}
function Un(t3, e4) {
  const s3 = [], i3 = t3.getElementsByTagName("stop"), r3 = Gn(e4, 1);
  for (let t4 = i3.length; t4--; ) s3.push(Nn(i3[t4], r3));
  return s3;
}
function qn(t3) {
  return "linearGradient" === t3.nodeName || "LINEARGRADIENT" === t3.nodeName ? "linear" : "radial";
}
function Kn(t3) {
  return "userSpaceOnUse" === t3.getAttribute("gradientUnits") ? "pixels" : "percentage";
}
function Jn(t3, e4) {
  return t3.getAttribute(e4);
}
function Qn(t3, e4) {
  return function(t4, e5) {
    let s3, { width: i3, height: r3, gradientUnits: n3 } = e5;
    return Object.keys(t4).reduce((e6, o3) => {
      const a3 = t4[o3];
      return "Infinity" === a3 ? s3 = 1 : "-Infinity" === a3 ? s3 = 0 : (s3 = "string" == typeof a3 ? parseFloat(a3) : a3, "string" == typeof a3 && Vn(a3) && (s3 *= 0.01, "pixels" === n3 && ("x1" !== o3 && "x2" !== o3 && "r2" !== o3 || (s3 *= i3), "y1" !== o3 && "y2" !== o3 || (s3 *= r3)))), e6[o3] = s3, e6;
    }, {});
  }("linear" === qn(t3) ? function(t4) {
    return {
      x1: Jn(t4, "x1") || 0,
      y1: Jn(t4, "y1") || 0,
      x2: Jn(t4, "x2") || "100%",
      y2: Jn(t4, "y2") || 0
    };
  }(t3) : function(t4) {
    return {
      x1: Jn(t4, "fx") || Jn(t4, "cx") || "50%",
      y1: Jn(t4, "fy") || Jn(t4, "cy") || "50%",
      r1: 0,
      x2: Jn(t4, "cx") || "50%",
      y2: Jn(t4, "cy") || "50%",
      r2: Jn(t4, "r") || "50%"
    };
  }(t3), s(s({}, e4), {}, {
    gradientUnits: Kn(t3)
  }));
}
var Zn = class {
  constructor(t3) {
    const { type: e4 = "linear", gradientUnits: i3 = "pixels", coords: r3 = {}, colorStops: n3 = [], offsetX: o3 = 0, offsetY: a3 = 0, gradientTransform: h3, id: c3 } = t3 || {};
    Object.assign(this, {
      type: e4,
      gradientUnits: i3,
      coords: s(s({}, "radial" === e4 ? Xn : In), r3),
      colorStops: n3,
      offsetX: o3,
      offsetY: a3,
      gradientTransform: h3,
      id: c3 ? "".concat(c3, "_").concat(ft()) : ft()
    });
  }
  addColorStop(t3) {
    for (const e4 in t3) {
      const s3 = new Le(t3[e4]);
      this.colorStops.push({
        offset: parseFloat(e4),
        color: s3.toRgb(),
        opacity: s3.getAlpha()
      });
    }
    return this;
  }
  toObject(t3) {
    return s(s({}, Wt(this, t3)), {}, {
      type: this.type,
      coords: s({}, this.coords),
      colorStops: this.colorStops.map((t4) => s({}, t4)),
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      gradientUnits: this.gradientUnits,
      gradientTransform: this.gradientTransform ? [
        ...this.gradientTransform
      ] : void 0
    });
  }
  toSVG(t3) {
    let { additionalTransform: e4 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const i3 = [], r3 = this.gradientTransform ? this.gradientTransform.concat() : T.concat(), n3 = "pixels" === this.gradientUnits ? "userSpaceOnUse" : "objectBoundingBox", o3 = this.colorStops.map((t4) => s({}, t4)).sort((t4, e5) => t4.offset - e5.offset);
    let a3 = -this.offsetX, h3 = -this.offsetY;
    var c3;
    "objectBoundingBox" === n3 ? (a3 /= t3.width, h3 /= t3.height) : (a3 += t3.width / 2, h3 += t3.height / 2), (c3 = t3) && "function" == typeof c3._renderPathCommands && "percentage" !== this.gradientUnits && (a3 -= t3.pathOffset.x, h3 -= t3.pathOffset.y), r3[4] -= a3, r3[5] -= h3;
    const l3 = [
      'id="SVGID_'.concat(this.id, '"'),
      'gradientUnits="'.concat(n3, '"'),
      'gradientTransform="'.concat(e4 ? e4 + " " : "").concat(Gt(r3), '"'),
      ""
    ].join(" ");
    if ("linear" === this.type) {
      const { x1: t4, y1: e5, x2: s3, y2: r4 } = this.coords;
      i3.push("<linearGradient ", l3, ' x1="', t4, '" y1="', e5, '" x2="', s3, '" y2="', r4, '">\n');
    } else if ("radial" === this.type) {
      const { x1: t4, y1: e5, x2: s3, y2: r4, r1: n4, r2: a4 } = this.coords, h4 = n4 > a4;
      i3.push("<radialGradient ", l3, ' cx="', h4 ? t4 : s3, '" cy="', h4 ? e5 : r4, '" r="', h4 ? n4 : a4, '" fx="', h4 ? s3 : t4, '" fy="', h4 ? r4 : e5, '">\n'), h4 && (o3.reverse(), o3.forEach((t5) => {
        t5.offset = 1 - t5.offset;
      }));
      const c4 = Math.min(n4, a4);
      if (c4 > 0) {
        const t5 = c4 / Math.max(n4, a4);
        o3.forEach((e6) => {
          e6.offset += t5 * (1 - e6.offset);
        });
      }
    }
    return o3.forEach((t4) => {
      let { color: e5, offset: s3, opacity: r4 } = t4;
      i3.push("<stop ", 'offset="', 100 * s3 + "%", '" style="stop-color:', e5, void 0 !== r4 ? ";stop-opacity: " + r4 : ";", '"/>\n');
    }), i3.push("linear" === this.type ? "</linearGradient>" : "</radialGradient>", "\n"), i3.join("");
  }
  toLive(t3) {
    const { x1: e4, y1: s3, x2: i3, y2: r3, r1: n3, r2: o3 } = this.coords, a3 = "linear" === this.type ? t3.createLinearGradient(e4, s3, i3, r3) : t3.createRadialGradient(e4, s3, n3, i3, r3, o3);
    return this.colorStops.forEach((t4) => {
      let { color: e5, opacity: s4, offset: i4 } = t4;
      a3.addColorStop(i4, void 0 !== s4 ? new Le(e5).setAlpha(s4).toRgba() : e5);
    }), a3;
  }
  static async fromObject(t3) {
    const { colorStops: e4, gradientTransform: i3 } = t3;
    return new this(s(s({}, t3), {}, {
      colorStops: e4 ? e4.map((t4) => s({}, t4)) : void 0,
      gradientTransform: i3 ? [
        ...i3
      ] : void 0
    }));
  }
  static fromElement(t3, e4, i3) {
    const r3 = Kn(t3), n3 = e4._findCenterFromElement();
    return new this(s({
      id: t3.getAttribute("id") || void 0,
      type: qn(t3),
      coords: Qn(t3, {
        width: i3.viewBoxWidth || i3.width,
        height: i3.viewBoxHeight || i3.height
      }),
      colorStops: Un(t3, i3.opacity),
      gradientUnits: r3,
      gradientTransform: br(t3.getAttribute("gradientTransform") || "")
    }, "pixels" === r3 ? {
      offsetX: e4.width / 2 - n3.x,
      offsetY: e4.height / 2 - n3.y
    } : {
      offsetX: 0,
      offsetY: 0
    }));
  }
};
t(Zn, "type", "Gradient"), tt.setClass(Zn, "gradient"), tt.setClass(Zn, "linear"), tt.setClass(Zn, "radial");
var $n = [
  "type",
  "source",
  "patternTransform"
];
var to = class {
  get type() {
    return "pattern";
  }
  set type(t3) {
    a("warn", "Setting type has no effect", t3);
  }
  constructor(e4) {
    t(this, "repeat", "repeat"), t(this, "offsetX", 0), t(this, "offsetY", 0), t(this, "crossOrigin", ""), this.id = ft(), Object.assign(this, e4);
  }
  isImageSource() {
    return !!this.source && "string" == typeof this.source.src;
  }
  isCanvasSource() {
    return !!this.source && !!this.source.toDataURL;
  }
  sourceToString() {
    return this.isImageSource() ? this.source.src : this.isCanvasSource() ? this.source.toDataURL() : "";
  }
  toLive(t3) {
    return this.source && (!this.isImageSource() || this.source.complete && 0 !== this.source.naturalWidth && 0 !== this.source.naturalHeight) ? t3.createPattern(this.source, this.repeat) : null;
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const { repeat: e4, crossOrigin: i3 } = this;
    return s(s({}, Wt(this, t3)), {}, {
      type: "pattern",
      source: this.sourceToString(),
      repeat: e4,
      crossOrigin: i3,
      offsetX: Vt(this.offsetX, o.NUM_FRACTION_DIGITS),
      offsetY: Vt(this.offsetY, o.NUM_FRACTION_DIGITS),
      patternTransform: this.patternTransform ? [
        ...this.patternTransform
      ] : null
    });
  }
  toSVG(t3) {
    let { width: e4, height: s3 } = t3;
    const { source: i3, repeat: r3, id: n3 } = this, o3 = Wn(this.offsetX / e4, 0), a3 = Wn(this.offsetY / s3, 0), h3 = "repeat-y" === r3 || "no-repeat" === r3 ? 1 + Math.abs(o3 || 0) : Wn(i3.width / e4, 0), c3 = "repeat-x" === r3 || "no-repeat" === r3 ? 1 + Math.abs(a3 || 0) : Wn(i3.height / s3, 0);
    return [
      '<pattern id="SVGID_'.concat(n3, '" x="').concat(o3, '" y="').concat(a3, '" width="').concat(h3, '" height="').concat(c3, '">'),
      '<image x="0" y="0" width="'.concat(i3.width, '" height="').concat(i3.height, '" xlink:href="').concat(this.sourceToString(), '"></image>'),
      "</pattern>",
      ""
    ].join("\n");
  }
  static async fromObject(t3, e4) {
    let { type: r3, source: n3, patternTransform: o3 } = t3, a3 = i(t3, $n);
    const h3 = await Bt(n3, s(s({}, e4), {}, {
      crossOrigin: a3.crossOrigin
    }));
    return new this(s(s({}, a3), {}, {
      patternTransform: o3 && o3.slice(0),
      source: h3
    }));
  }
};
t(to, "type", "Pattern"), tt.setClass(to), tt.setClass(to, "pattern");
var so = [
  "path",
  "left",
  "top"
];
var io = [
  "d"
];
var ro = class _ro extends ji {
  constructor(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { path: s3, left: r3, top: n3 } = e4, o3 = i(e4, so);
    super(), Object.assign(this, _ro.ownDefaults), this.setOptions(o3), this._setPath(t3 || [], true), "number" == typeof r3 && this.set(M, r3), "number" == typeof n3 && this.set(P, n3);
  }
  _setPath(t3, e4) {
    this.path = sn(Array.isArray(t3) ? t3 : xn(t3)), this.setBoundingBox(e4);
  }
  _findCenterFromElement() {
    const t3 = this._calcBoundsFromPath();
    return new ot(t3.left + t3.width / 2, t3.top + t3.height / 2);
  }
  _renderPathCommands(t3) {
    const e4 = -this.pathOffset.x, s3 = -this.pathOffset.y;
    t3.beginPath();
    for (const i3 of this.path) switch (i3[0]) {
      case "L":
        t3.lineTo(i3[1] + e4, i3[2] + s3);
        break;
      case "M":
        t3.moveTo(i3[1] + e4, i3[2] + s3);
        break;
      case "C":
        t3.bezierCurveTo(i3[1] + e4, i3[2] + s3, i3[3] + e4, i3[4] + s3, i3[5] + e4, i3[6] + s3);
        break;
      case "Q":
        t3.quadraticCurveTo(i3[1] + e4, i3[2] + s3, i3[3] + e4, i3[4] + s3);
        break;
      case "Z":
        t3.closePath();
    }
  }
  _render(t3) {
    this._renderPathCommands(t3), this._renderPaintInOrder(t3);
  }
  toString() {
    return "#<Path (".concat(this.complexity(), '): { "top": ').concat(this.top, ', "left": ').concat(this.left, " }>");
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return s(s({}, super.toObject(t3)), {}, {
      path: this.path.map((t4) => t4.slice())
    });
  }
  toDatalessObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e4 = this.toObject(t3);
    return this.sourcePath && (delete e4.path, e4.sourcePath = this.sourcePath), e4;
  }
  _toSVG() {
    const t3 = bn(this.path, o.NUM_FRACTION_DIGITS);
    return [
      "<path ",
      "COMMON_PARTS",
      'd="'.concat(t3, '" stroke-linecap="round" />\n')
    ];
  }
  _getOffsetTransform() {
    const t3 = o.NUM_FRACTION_DIGITS;
    return " translate(".concat(Vt(-this.pathOffset.x, t3), ", ").concat(Vt(-this.pathOffset.y, t3), ")");
  }
  toClipPathSVG(t3) {
    const e4 = this._getOffsetTransform();
    return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), {
      reviver: t3,
      additionalTransform: e4
    });
  }
  toSVG(t3) {
    const e4 = this._getOffsetTransform();
    return this._createBaseSVGMarkup(this._toSVG(), {
      reviver: t3,
      additionalTransform: e4
    });
  }
  complexity() {
    return this.path.length;
  }
  setDimensions() {
    this.setBoundingBox();
  }
  setBoundingBox(t3) {
    const { width: e4, height: s3, pathOffset: i3 } = this._calcDimensions();
    this.set({
      width: e4,
      height: s3,
      pathOffset: i3
    }), t3 && this.setPositionByOrigin(i3, D, D);
  }
  _calcBoundsFromPath() {
    const t3 = [];
    let e4 = 0, s3 = 0, i3 = 0, r3 = 0;
    for (const n3 of this.path) switch (n3[0]) {
      case "L":
        i3 = n3[1], r3 = n3[2], t3.push({
          x: e4,
          y: s3
        }, {
          x: i3,
          y: r3
        });
        break;
      case "M":
        i3 = n3[1], r3 = n3[2], e4 = i3, s3 = r3;
        break;
      case "C":
        t3.push(...tn(i3, r3, n3[1], n3[2], n3[3], n3[4], n3[5], n3[6])), i3 = n3[5], r3 = n3[6];
        break;
      case "Q":
        t3.push(...tn(i3, r3, n3[1], n3[2], n3[1], n3[2], n3[3], n3[4])), i3 = n3[3], r3 = n3[4];
        break;
      case "Z":
        i3 = e4, r3 = s3;
    }
    return ae(t3);
  }
  _calcDimensions() {
    const t3 = this._calcBoundsFromPath();
    return s(s({}, t3), {}, {
      pathOffset: new ot(t3.left + t3.width / 2, t3.top + t3.height / 2)
    });
  }
  static fromObject(t3) {
    return this._fromObject(t3, {
      extraParam: "path"
    });
  }
  static async fromElement(t3, e4, r3) {
    const n3 = Dr(t3, this.ATTRIBUTE_NAMES, r3), { d: o3 } = n3;
    return new this(o3, s(s(s({}, i(n3, io)), e4), {}, {
      left: void 0,
      top: void 0
    }));
  }
};
t(ro, "type", "Path"), t(ro, "cacheProperties", [
  ...Ms,
  "path",
  "fillRule"
]), t(ro, "ATTRIBUTE_NAMES", [
  ...Ji,
  "d"
]), tt.setClass(ro), tt.setSVGClass(ro);
var oo = [
  "left",
  "top",
  "radius"
];
var ao = [
  "radius",
  "startAngle",
  "endAngle",
  "counterClockwise"
];
var ho = class _ho extends ji {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _ho.ownDefaults);
  }
  constructor(t3) {
    super(), Object.assign(this, _ho.ownDefaults), this.setOptions(t3);
  }
  _set(t3, e4) {
    return super._set(t3, e4), "radius" === t3 && this.setRadius(e4), this;
  }
  _render(t3) {
    t3.beginPath(), t3.arc(0, 0, this.radius, xt(this.startAngle), xt(this.endAngle), this.counterClockwise), this._renderPaintInOrder(t3);
  }
  getRadiusX() {
    return this.get("radius") * this.get(H);
  }
  getRadiusY() {
    return this.get("radius") * this.get(N);
  }
  setRadius(t3) {
    this.radius = t3, this.set({
      width: 2 * t3,
      height: 2 * t3
    });
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([
      ...ao,
      ...t3
    ]);
  }
  _toSVG() {
    const t3 = (this.endAngle - this.startAngle) % 360;
    if (0 === t3) return [
      "<circle ",
      "COMMON_PARTS",
      'cx="0" cy="0" ',
      'r="',
      "".concat(this.radius),
      '" />\n'
    ];
    {
      const { radius: e4 } = this, s3 = xt(this.startAngle), i3 = xt(this.endAngle), r3 = rt(s3) * e4, n3 = nt(s3) * e4, o3 = rt(i3) * e4, a3 = nt(i3) * e4, h3 = t3 > 180 ? 1 : 0, c3 = this.counterClockwise ? 0 : 1;
      return [
        '<path d="M '.concat(r3, " ").concat(n3, " A ").concat(e4, " ").concat(e4, " 0 ").concat(h3, " ").concat(c3, " ").concat(o3, " ").concat(a3, '" '),
        "COMMON_PARTS",
        " />\n"
      ];
    }
  }
  static async fromElement(t3, e4, r3) {
    const n3 = Dr(t3, this.ATTRIBUTE_NAMES, r3), { left: o3 = 0, top: a3 = 0, radius: h3 = 0 } = n3;
    return new this(s(s({}, i(n3, oo)), {}, {
      radius: h3,
      left: o3 - h3,
      top: a3 - h3
    }));
  }
  static fromObject(t3) {
    return super._fromObject(t3);
  }
};
t(ho, "type", "Circle"), t(ho, "cacheProperties", [
  ...Ms,
  ...ao
]), t(ho, "ownDefaults", {
  radius: 0,
  startAngle: 0,
  endAngle: 360,
  counterClockwise: false
}), t(ho, "ATTRIBUTE_NAMES", [
  "cx",
  "cy",
  "r",
  ...Ji
]), tt.setClass(ho), tt.setSVGClass(ho);
var go = [
  "x1",
  "y1",
  "x2",
  "y2"
];
var fo = [
  "x1",
  "y1",
  "x2",
  "y2"
];
var po = [
  "x1",
  "x2",
  "y1",
  "y2"
];
var mo = class _mo extends ji {
  constructor() {
    let [t3, e4, s3, i3] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
      0,
      0,
      0,
      0
    ], r3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, _mo.ownDefaults), this.setOptions(r3), this.x1 = t3, this.x2 = s3, this.y1 = e4, this.y2 = i3, this._setWidthHeight();
    const { left: n3, top: o3 } = r3;
    "number" == typeof n3 && this.set(M, n3), "number" == typeof o3 && this.set(P, o3);
  }
  _setWidthHeight() {
    const { x1: t3, y1: e4, x2: s3, y2: i3 } = this;
    this.width = Math.abs(s3 - t3), this.height = Math.abs(i3 - e4);
    const { left: r3, top: n3, width: o3, height: a3 } = ae([
      {
        x: t3,
        y: e4
      },
      {
        x: s3,
        y: i3
      }
    ]), h3 = new ot(r3 + o3 / 2, n3 + a3 / 2);
    this.setPositionByOrigin(h3, D, D);
  }
  _set(t3, e4) {
    return super._set(t3, e4), po.includes(t3) && this._setWidthHeight(), this;
  }
  _render(t3) {
    t3.beginPath();
    const e4 = this.calcLinePoints();
    t3.moveTo(e4.x1, e4.y1), t3.lineTo(e4.x2, e4.y2), t3.lineWidth = this.strokeWidth;
    const s3 = t3.strokeStyle;
    var i3;
    zt(this.stroke) ? t3.strokeStyle = this.stroke.toLive(t3) : t3.strokeStyle = null !== (i3 = this.stroke) && void 0 !== i3 ? i3 : t3.fillStyle;
    this.stroke && this._renderStroke(t3), t3.strokeStyle = s3;
  }
  _findCenterFromElement() {
    return new ot((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return s(s({}, super.toObject(t3)), this.calcLinePoints());
  }
  _getNonTransformedDimensions() {
    const t3 = super._getNonTransformedDimensions();
    return "butt" === this.strokeLineCap && (0 === this.width && (t3.y -= this.strokeWidth), 0 === this.height && (t3.x -= this.strokeWidth)), t3;
  }
  calcLinePoints() {
    const { x1: t3, x2: e4, y1: s3, y2: i3, width: r3, height: n3 } = this, o3 = t3 <= e4 ? -1 : 1, a3 = s3 <= i3 ? -1 : 1;
    return {
      x1: o3 * r3 / 2,
      x2: o3 * -r3 / 2,
      y1: a3 * n3 / 2,
      y2: a3 * -n3 / 2
    };
  }
  _toSVG() {
    const { x1: t3, x2: e4, y1: s3, y2: i3 } = this.calcLinePoints();
    return [
      "<line ",
      "COMMON_PARTS",
      'x1="'.concat(t3, '" y1="').concat(s3, '" x2="').concat(e4, '" y2="').concat(i3, '" />\n')
    ];
  }
  static async fromElement(t3, e4, s3) {
    const r3 = Dr(t3, this.ATTRIBUTE_NAMES, s3), { x1: n3 = 0, y1: o3 = 0, x2: a3 = 0, y2: h3 = 0 } = r3;
    return new this([
      n3,
      o3,
      a3,
      h3
    ], i(r3, go));
  }
  static fromObject(t3) {
    let { x1: e4, y1: r3, x2: n3, y2: o3 } = t3, a3 = i(t3, fo);
    return this._fromObject(s(s({}, a3), {}, {
      points: [
        e4,
        r3,
        n3,
        o3
      ]
    }), {
      extraParam: "points"
    });
  }
};
t(mo, "type", "Line"), t(mo, "cacheProperties", [
  ...Ms,
  ...po
]), t(mo, "ATTRIBUTE_NAMES", Ji.concat(po)), tt.setClass(mo), tt.setSVGClass(mo);
var vo = class _vo extends ji {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _vo.ownDefaults);
  }
  constructor(t3) {
    super(), Object.assign(this, _vo.ownDefaults), this.setOptions(t3);
  }
  _render(t3) {
    const e4 = this.width / 2, s3 = this.height / 2;
    t3.beginPath(), t3.moveTo(-e4, s3), t3.lineTo(0, -s3), t3.lineTo(e4, s3), t3.closePath(), this._renderPaintInOrder(t3);
  }
  _toSVG() {
    const t3 = this.width / 2, e4 = this.height / 2;
    return [
      "<polygon ",
      "COMMON_PARTS",
      'points="',
      "".concat(-t3, " ").concat(e4, ",0 ").concat(-e4, ",").concat(t3, " ").concat(e4),
      '" />'
    ];
  }
};
t(vo, "type", "Triangle"), t(vo, "ownDefaults", {
  width: 100,
  height: 100
}), tt.setClass(vo), tt.setSVGClass(vo);
var yo = [
  "rx",
  "ry"
];
var _o = class __o extends ji {
  static getDefaults() {
    return s(s({}, super.getDefaults()), __o.ownDefaults);
  }
  constructor(t3) {
    super(), Object.assign(this, __o.ownDefaults), this.setOptions(t3);
  }
  _set(t3, e4) {
    switch (super._set(t3, e4), t3) {
      case "rx":
        this.rx = e4, this.set("width", 2 * e4);
        break;
      case "ry":
        this.ry = e4, this.set("height", 2 * e4);
    }
    return this;
  }
  getRx() {
    return this.get("rx") * this.get(H);
  }
  getRy() {
    return this.get("ry") * this.get(N);
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([
      ...yo,
      ...t3
    ]);
  }
  _toSVG() {
    return [
      "<ellipse ",
      "COMMON_PARTS",
      'cx="0" cy="0" rx="'.concat(this.rx, '" ry="').concat(this.ry, '" />\n')
    ];
  }
  _render(t3) {
    t3.beginPath(), t3.save(), t3.transform(1, 0, 0, this.ry / this.rx, 0, 0), t3.arc(0, 0, this.rx, 0, S, false), t3.restore(), this._renderPaintInOrder(t3);
  }
  static async fromElement(t3, e4, s3) {
    const i3 = Dr(t3, this.ATTRIBUTE_NAMES, s3);
    return i3.left = (i3.left || 0) - i3.rx, i3.top = (i3.top || 0) - i3.ry, new this(i3);
  }
};
function xo(t3) {
  if (!t3) return [];
  const e4 = t3.replace(/,/g, " ").trim().split(/\s+/), s3 = [];
  for (let t4 = 0; t4 < e4.length; t4 += 2) s3.push({
    x: parseFloat(e4[t4]),
    y: parseFloat(e4[t4 + 1])
  });
  return s3;
}
t(_o, "type", "Ellipse"), t(_o, "cacheProperties", [
  ...Ms,
  ...yo
]), t(_o, "ownDefaults", {
  rx: 0,
  ry: 0
}), t(_o, "ATTRIBUTE_NAMES", [
  ...Ji,
  "cx",
  "cy",
  "rx",
  "ry"
]), tt.setClass(_o), tt.setSVGClass(_o);
var Co = [
  "left",
  "top"
];
var bo = {
  exactBoundingBox: false
};
var So = class _So extends ji {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _So.ownDefaults);
  }
  constructor() {
    let e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], s3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), t(this, "strokeDiff", void 0), Object.assign(this, _So.ownDefaults), this.setOptions(s3), this.points = e4;
    const { left: i3, top: r3 } = s3;
    this.initialized = true, this.setBoundingBox(true), "number" == typeof i3 && this.set(M, i3), "number" == typeof r3 && this.set(P, r3);
  }
  isOpen() {
    return true;
  }
  _projectStrokeOnPoints(t3) {
    return Xi(this.points, t3, this.isOpen());
  }
  _calcDimensions(t3) {
    t3 = s({
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      skewX: this.skewX,
      skewY: this.skewY,
      strokeLineCap: this.strokeLineCap,
      strokeLineJoin: this.strokeLineJoin,
      strokeMiterLimit: this.strokeMiterLimit,
      strokeUniform: this.strokeUniform,
      strokeWidth: this.strokeWidth
    }, t3 || {});
    const e4 = this.exactBoundingBox ? this._projectStrokeOnPoints(t3).map((t4) => t4.projectedPoint) : this.points;
    if (0 === e4.length) return {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      pathOffset: new ot(),
      strokeOffset: new ot(),
      strokeDiff: new ot()
    };
    const i3 = ae(e4), r3 = Lt(s(s({}, t3), {}, {
      scaleX: 1,
      scaleY: 1
    })), n3 = ae(this.points.map((t4) => St(t4, r3, true))), o3 = new ot(this.scaleX, this.scaleY);
    let a3 = i3.left + i3.width / 2, h3 = i3.top + i3.height / 2;
    return this.exactBoundingBox && (a3 -= h3 * Math.tan(xt(this.skewX)), h3 -= a3 * Math.tan(xt(this.skewY))), s(s({}, i3), {}, {
      pathOffset: new ot(a3, h3),
      strokeOffset: new ot(n3.left, n3.top).subtract(new ot(i3.left, i3.top)).multiply(o3),
      strokeDiff: new ot(i3.width, i3.height).subtract(new ot(n3.width, n3.height)).multiply(o3)
    });
  }
  _findCenterFromElement() {
    const t3 = ae(this.points);
    return new ot(t3.left + t3.width / 2, t3.top + t3.height / 2);
  }
  setDimensions() {
    this.setBoundingBox();
  }
  setBoundingBox(t3) {
    const { left: e4, top: s3, width: i3, height: r3, pathOffset: n3, strokeOffset: o3, strokeDiff: a3 } = this._calcDimensions();
    this.set({
      width: i3,
      height: r3,
      pathOffset: n3,
      strokeOffset: o3,
      strokeDiff: a3
    }), t3 && this.setPositionByOrigin(new ot(e4 + i3 / 2, s3 + r3 / 2), D, D);
  }
  isStrokeAccountedForInDimensions() {
    return this.exactBoundingBox;
  }
  _getNonTransformedDimensions() {
    return this.exactBoundingBox ? new ot(this.width, this.height) : super._getNonTransformedDimensions();
  }
  _getTransformedDimensions() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (this.exactBoundingBox) {
      let n3;
      if (Object.keys(t3).some((t4) => this.strokeUniform || this.constructor.layoutProperties.includes(t4))) {
        var e4, s3;
        const { width: i4, height: r4 } = this._calcDimensions(t3);
        n3 = new ot(null !== (e4 = t3.width) && void 0 !== e4 ? e4 : i4, null !== (s3 = t3.height) && void 0 !== s3 ? s3 : r4);
      } else {
        var i3, r3;
        n3 = new ot(null !== (i3 = t3.width) && void 0 !== i3 ? i3 : this.width, null !== (r3 = t3.height) && void 0 !== r3 ? r3 : this.height);
      }
      return n3.multiply(new ot(t3.scaleX || this.scaleX, t3.scaleY || this.scaleY));
    }
    return super._getTransformedDimensions(t3);
  }
  _set(t3, e4) {
    const s3 = this.initialized && this[t3] !== e4, i3 = super._set(t3, e4);
    return this.exactBoundingBox && s3 && ((t3 === H || t3 === N) && this.strokeUniform && this.constructor.layoutProperties.includes("strokeUniform") || this.constructor.layoutProperties.includes(t3)) && this.setDimensions(), i3;
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return s(s({}, super.toObject(t3)), {}, {
      points: this.points.map((t4) => {
        let { x: e4, y: s3 } = t4;
        return {
          x: e4,
          y: s3
        };
      })
    });
  }
  _toSVG() {
    const t3 = [], e4 = this.pathOffset.x, s3 = this.pathOffset.y, i3 = o.NUM_FRACTION_DIGITS;
    for (let r3 = 0, n3 = this.points.length; r3 < n3; r3++) t3.push(Vt(this.points[r3].x - e4, i3), ",", Vt(this.points[r3].y - s3, i3), " ");
    return [
      "<".concat(this.constructor.type.toLowerCase(), " "),
      "COMMON_PARTS",
      'points="'.concat(t3.join(""), '" />\n')
    ];
  }
  _render(t3) {
    const e4 = this.points.length, s3 = this.pathOffset.x, i3 = this.pathOffset.y;
    if (e4 && !isNaN(this.points[e4 - 1].y)) {
      t3.beginPath(), t3.moveTo(this.points[0].x - s3, this.points[0].y - i3);
      for (let r3 = 0; r3 < e4; r3++) {
        const e5 = this.points[r3];
        t3.lineTo(e5.x - s3, e5.y - i3);
      }
      !this.isOpen() && t3.closePath(), this._renderPaintInOrder(t3);
    }
  }
  complexity() {
    return this.points.length;
  }
  static async fromElement(t3, e4, r3) {
    return new this(xo(t3.getAttribute("points")), s(s({}, i(Dr(t3, this.ATTRIBUTE_NAMES, r3), Co)), e4));
  }
  static fromObject(t3) {
    return this._fromObject(t3, {
      extraParam: "points"
    });
  }
};
t(So, "ownDefaults", bo), t(So, "type", "Polyline"), t(So, "layoutProperties", [
  U,
  q,
  "strokeLineCap",
  "strokeLineJoin",
  "strokeMiterLimit",
  "strokeWidth",
  "strokeUniform",
  "points"
]), t(So, "cacheProperties", [
  ...Ms,
  "points"
]), t(So, "ATTRIBUTE_NAMES", [
  ...Ji
]), tt.setClass(So), tt.setSVGClass(So);
var wo = class extends So {
  isOpen() {
    return false;
  }
};
t(wo, "ownDefaults", bo), t(wo, "type", "Polygon"), tt.setClass(wo), tt.setSVGClass(wo);
var To = class extends ji {
  isEmptyStyles(t3) {
    if (!this.styles) return true;
    if (void 0 !== t3 && !this.styles[t3]) return true;
    const e4 = void 0 === t3 ? this.styles : {
      line: this.styles[t3]
    };
    for (const t4 in e4) for (const s3 in e4[t4]) for (const i3 in e4[t4][s3]) return false;
    return true;
  }
  styleHas(t3, e4) {
    if (!this.styles) return false;
    if (void 0 !== e4 && !this.styles[e4]) return false;
    const s3 = void 0 === e4 ? this.styles : {
      0: this.styles[e4]
    };
    for (const e5 in s3) for (const i3 in s3[e5]) if (void 0 !== s3[e5][i3][t3]) return true;
    return false;
  }
  cleanStyle(t3) {
    if (!this.styles) return false;
    const e4 = this.styles;
    let s3, i3, r3 = 0, n3 = true, o3 = 0;
    for (const o4 in e4) {
      s3 = 0;
      for (const a3 in e4[o4]) {
        const h3 = e4[o4][a3] || {};
        r3++, void 0 !== h3[t3] ? (i3 ? h3[t3] !== i3 && (n3 = false) : i3 = h3[t3], h3[t3] === this[t3] && delete h3[t3]) : n3 = false, 0 !== Object.keys(h3).length ? s3++ : delete e4[o4][a3];
      }
      0 === s3 && delete e4[o4];
    }
    for (let t4 = 0; t4 < this._textLines.length; t4++) o3 += this._textLines[t4].length;
    n3 && r3 === o3 && (this[t3] = i3, this.removeStyle(t3));
  }
  removeStyle(t3) {
    if (!this.styles) return;
    const e4 = this.styles;
    let s3, i3, r3;
    for (i3 in e4) {
      for (r3 in s3 = e4[i3], s3) delete s3[r3][t3], 0 === Object.keys(s3[r3]).length && delete s3[r3];
      0 === Object.keys(s3).length && delete e4[i3];
    }
  }
  _extendStyles(t3, e4) {
    const { lineIndex: i3, charIndex: r3 } = this.get2DCursorLocation(t3);
    this._getLineStyle(i3) || this._setLineStyle(i3);
    const n3 = Yt(s(s({}, this._getStyleDeclaration(i3, r3)), e4), (t4) => void 0 !== t4);
    this._setStyleDeclaration(i3, r3, n3);
  }
  getSelectionStyles(t3, e4, s3) {
    const i3 = [];
    for (let r3 = t3; r3 < (e4 || t3); r3++) i3.push(this.getStyleAtPosition(r3, s3));
    return i3;
  }
  getStyleAtPosition(t3, e4) {
    const { lineIndex: s3, charIndex: i3 } = this.get2DCursorLocation(t3);
    return e4 ? this.getCompleteStyleDeclaration(s3, i3) : this._getStyleDeclaration(s3, i3);
  }
  setSelectionStyles(t3, e4, s3) {
    for (let i3 = e4; i3 < (s3 || e4); i3++) this._extendStyles(i3, t3);
    this._forceClearCache = true;
  }
  _getStyleDeclaration(t3, e4) {
    var s3;
    const i3 = this.styles && this.styles[t3];
    return i3 && null !== (s3 = i3[e4]) && void 0 !== s3 ? s3 : {};
  }
  getCompleteStyleDeclaration(t3, e4) {
    return s(s({}, Wt(this, this.constructor._styleProperties)), this._getStyleDeclaration(t3, e4));
  }
  _setStyleDeclaration(t3, e4, s3) {
    this.styles[t3][e4] = s3;
  }
  _deleteStyleDeclaration(t3, e4) {
    delete this.styles[t3][e4];
  }
  _getLineStyle(t3) {
    return !!this.styles[t3];
  }
  _setLineStyle(t3) {
    this.styles[t3] = {};
  }
  _deleteLineStyle(t3) {
    delete this.styles[t3];
  }
};
t(To, "_styleProperties", Ne);
var Oo = /  +/g;
var ko = /"/g;
function Do(t3, e4, s3, i3, r3) {
  return "		".concat(function(t4, e5) {
    let { left: s4, top: i4, width: r4, height: n3 } = e5, a3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.NUM_FRACTION_DIGITS;
    const h3 = Ie(K, t4, false), [c3, l3, u3, d3] = [
      s4,
      i4,
      r4,
      n3
    ].map((t5) => Vt(t5, a3));
    return "<rect ".concat(h3, ' x="').concat(c3, '" y="').concat(l3, '" width="').concat(u3, '" height="').concat(d3, '"></rect>');
  }(t3, {
    left: e4,
    top: s3,
    width: i3,
    height: r3
  }), "\n");
}
var Mo = [
  "textAnchor",
  "textDecoration",
  "dx",
  "dy",
  "top",
  "left",
  "fontSize",
  "strokeWidth"
];
var Po;
var Eo = class _Eo extends To {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _Eo.ownDefaults);
  }
  constructor(e4, s3) {
    super(), t(this, "__charBounds", []), Object.assign(this, _Eo.ownDefaults), this.setOptions(s3), this.styles || (this.styles = {}), this.text = e4, this.initialized = true, this.path && this.setPathInfo(), this.initDimensions(), this.setCoords();
  }
  setPathInfo() {
    const t3 = this.path;
    t3 && (t3.segmentsInfo = fn(t3.path));
  }
  _splitText() {
    const t3 = this._splitTextIntoLines(this.text);
    return this.textLines = t3.lines, this._textLines = t3.graphemeLines, this._unwrappedTextLines = t3._unwrappedLines, this._text = t3.graphemeText, t3;
  }
  initDimensions() {
    this._splitText(), this._clearCache(), this.dirty = true, this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.includes(qe) && this.enlargeSpaces();
  }
  enlargeSpaces() {
    let t3, e4, s3, i3, r3, n3, o3;
    for (let a3 = 0, h3 = this._textLines.length; a3 < h3; a3++) if ((this.textAlign === qe || a3 !== h3 - 1 && !this.isEndOfWrapping(a3)) && (i3 = 0, r3 = this._textLines[a3], e4 = this.getLineWidth(a3), e4 < this.width && (o3 = this.textLines[a3].match(this._reSpacesAndTabs)))) {
      s3 = o3.length, t3 = (this.width - e4) / s3;
      for (let e5 = 0; e5 <= r3.length; e5++) n3 = this.__charBounds[a3][e5], this._reSpaceAndTab.test(r3[e5]) ? (n3.width += t3, n3.kernedWidth += t3, n3.left += i3, i3 += t3) : n3.left += i3;
    }
  }
  isEndOfWrapping(t3) {
    return t3 === this._textLines.length - 1;
  }
  missingNewlineOffset(t3) {
    return 1;
  }
  get2DCursorLocation(t3, e4) {
    const s3 = e4 ? this._unwrappedTextLines : this._textLines;
    let i3;
    for (i3 = 0; i3 < s3.length; i3++) {
      if (t3 <= s3[i3].length) return {
        lineIndex: i3,
        charIndex: t3
      };
      t3 -= s3[i3].length + this.missingNewlineOffset(i3, e4);
    }
    return {
      lineIndex: i3 - 1,
      charIndex: s3[i3 - 1].length < t3 ? s3[i3 - 1].length : t3
    };
  }
  toString() {
    return "#<Text (".concat(this.complexity(), '): { "text": "').concat(this.text, '", "fontFamily": "').concat(this.fontFamily, '" }>');
  }
  _getCacheCanvasDimensions() {
    const t3 = super._getCacheCanvasDimensions(), e4 = this.fontSize;
    return t3.width += e4 * t3.zoomX, t3.height += e4 * t3.zoomY, t3;
  }
  _render(t3) {
    const e4 = this.path;
    e4 && !e4.isNotVisible() && e4._render(t3), this._setTextStyles(t3), this._renderTextLinesBackground(t3), this._renderTextDecoration(t3, "underline"), this._renderText(t3), this._renderTextDecoration(t3, "overline"), this._renderTextDecoration(t3, "linethrough");
  }
  _renderText(t3) {
    this.paintFirst === J ? (this._renderTextStroke(t3), this._renderTextFill(t3)) : (this._renderTextFill(t3), this._renderTextStroke(t3));
  }
  _setTextStyles(t3, e4, s3) {
    if (t3.textBaseline = "alphabetic", this.path) switch (this.pathAlign) {
      case D:
        t3.textBaseline = "middle";
        break;
      case "ascender":
        t3.textBaseline = P;
        break;
      case "descender":
        t3.textBaseline = E;
    }
    t3.font = this._getFontDeclaration(e4, s3);
  }
  calcTextWidth() {
    let t3 = this.getLineWidth(0);
    for (let e4 = 1, s3 = this._textLines.length; e4 < s3; e4++) {
      const s4 = this.getLineWidth(e4);
      s4 > t3 && (t3 = s4);
    }
    return t3;
  }
  _renderTextLine(t3, e4, s3, i3, r3, n3) {
    this._renderChars(t3, e4, s3, i3, r3, n3);
  }
  _renderTextLinesBackground(t3) {
    if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor")) return;
    const e4 = t3.fillStyle, s3 = this._getLeftOffset();
    let i3 = this._getTopOffset();
    for (let e5 = 0, r3 = this._textLines.length; e5 < r3; e5++) {
      const r4 = this.getHeightOfLine(e5);
      if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor", e5)) {
        i3 += r4;
        continue;
      }
      const n3 = this._textLines[e5].length, o3 = this._getLineLeftOffset(e5);
      let a3, h3, c3 = 0, l3 = 0, u3 = this.getValueOfPropertyAt(e5, 0, "textBackgroundColor");
      for (let d3 = 0; d3 < n3; d3++) {
        const n4 = this.__charBounds[e5][d3];
        h3 = this.getValueOfPropertyAt(e5, d3, "textBackgroundColor"), this.path ? (t3.save(), t3.translate(n4.renderLeft, n4.renderTop), t3.rotate(n4.angle), t3.fillStyle = h3, h3 && t3.fillRect(-n4.width / 2, -r4 / this.lineHeight * (1 - this._fontSizeFraction), n4.width, r4 / this.lineHeight), t3.restore()) : h3 !== u3 ? (a3 = s3 + o3 + l3, "rtl" === this.direction && (a3 = this.width - a3 - c3), t3.fillStyle = u3, u3 && t3.fillRect(a3, i3, c3, r4 / this.lineHeight), l3 = n4.left, c3 = n4.width, u3 = h3) : c3 += n4.kernedWidth;
      }
      h3 && !this.path && (a3 = s3 + o3 + l3, "rtl" === this.direction && (a3 = this.width - a3 - c3), t3.fillStyle = h3, t3.fillRect(a3, i3, c3, r4 / this.lineHeight)), i3 += r4;
    }
    t3.fillStyle = e4, this._removeShadow(t3);
  }
  _measureChar(t3, e4, s3, i3) {
    const r3 = _.getFontCache(e4), n3 = this._getFontDeclaration(e4), o3 = s3 + t3, a3 = s3 && n3 === this._getFontDeclaration(i3), h3 = e4.fontSize / this.CACHE_FONT_SIZE;
    let c3, l3, u3, d3;
    if (s3 && void 0 !== r3[s3] && (u3 = r3[s3]), void 0 !== r3[t3] && (d3 = c3 = r3[t3]), a3 && void 0 !== r3[o3] && (l3 = r3[o3], d3 = l3 - u3), void 0 === c3 || void 0 === u3 || void 0 === l3) {
      const i4 = function() {
        if (!Po) {
          const t4 = vt({
            width: 0,
            height: 0
          });
          Po = t4.getContext("2d");
        }
        return Po;
      }();
      this._setTextStyles(i4, e4, true), void 0 === c3 && (d3 = c3 = i4.measureText(t3).width, r3[t3] = c3), void 0 === u3 && a3 && s3 && (u3 = i4.measureText(s3).width, r3[s3] = u3), a3 && void 0 === l3 && (l3 = i4.measureText(o3).width, r3[o3] = l3, d3 = l3 - u3);
    }
    return {
      width: c3 * h3,
      kernedWidth: d3 * h3
    };
  }
  getHeightOfChar(t3, e4) {
    return this.getValueOfPropertyAt(t3, e4, "fontSize");
  }
  measureLine(t3) {
    const e4 = this._measureLine(t3);
    return 0 !== this.charSpacing && (e4.width -= this._getWidthOfCharSpacing()), e4.width < 0 && (e4.width = 0), e4;
  }
  _measureLine(t3) {
    let e4, s3, i3 = 0;
    const r3 = this.pathSide === A, n3 = this.path, o3 = this._textLines[t3], a3 = o3.length, h3 = new Array(a3);
    this.__charBounds[t3] = h3;
    for (let r4 = 0; r4 < a3; r4++) {
      const n4 = o3[r4];
      s3 = this._getGraphemeBox(n4, t3, r4, e4), h3[r4] = s3, i3 += s3.kernedWidth, e4 = n4;
    }
    if (h3[a3] = {
      left: s3 ? s3.left + s3.width : 0,
      width: 0,
      kernedWidth: 0,
      height: this.fontSize,
      deltaY: 0
    }, n3 && n3.segmentsInfo) {
      let t4 = 0;
      const e5 = n3.segmentsInfo[n3.segmentsInfo.length - 1].length;
      switch (this.textAlign) {
        case M:
          t4 = r3 ? e5 - i3 : 0;
          break;
        case D:
          t4 = (e5 - i3) / 2;
          break;
        case A:
          t4 = r3 ? 0 : e5 - i3;
      }
      t4 += this.pathStartOffset * (r3 ? -1 : 1);
      for (let i4 = r3 ? a3 - 1 : 0; r3 ? i4 >= 0 : i4 < a3; r3 ? i4-- : i4++) s3 = h3[i4], t4 > e5 ? t4 %= e5 : t4 < 0 && (t4 += e5), this._setGraphemeOnPath(t4, s3), t4 += s3.kernedWidth;
    }
    return {
      width: i3,
      numOfSpaces: 0
    };
  }
  _setGraphemeOnPath(t3, e4) {
    const s3 = t3 + e4.kernedWidth / 2, i3 = this.path, r3 = pn(i3.path, s3, i3.segmentsInfo);
    e4.renderLeft = r3.x - i3.pathOffset.x, e4.renderTop = r3.y - i3.pathOffset.y, e4.angle = r3.angle + (this.pathSide === A ? Math.PI : 0);
  }
  _getGraphemeBox(t3, e4, s3, i3, r3) {
    const n3 = this.getCompleteStyleDeclaration(e4, s3), o3 = i3 ? this.getCompleteStyleDeclaration(e4, s3 - 1) : {}, a3 = this._measureChar(t3, n3, i3, o3);
    let h3, c3 = a3.kernedWidth, l3 = a3.width;
    0 !== this.charSpacing && (h3 = this._getWidthOfCharSpacing(), l3 += h3, c3 += h3);
    const u3 = {
      width: l3,
      left: 0,
      height: n3.fontSize,
      kernedWidth: c3,
      deltaY: n3.deltaY
    };
    if (s3 > 0 && !r3) {
      const t4 = this.__charBounds[e4][s3 - 1];
      u3.left = t4.left + t4.width + a3.kernedWidth - a3.width;
    }
    return u3;
  }
  getHeightOfLine(t3) {
    if (this.__lineHeights[t3]) return this.__lineHeights[t3];
    let e4 = this.getHeightOfChar(t3, 0);
    for (let s3 = 1, i3 = this._textLines[t3].length; s3 < i3; s3++) e4 = Math.max(this.getHeightOfChar(t3, s3), e4);
    return this.__lineHeights[t3] = e4 * this.lineHeight * this._fontSizeMult;
  }
  calcTextHeight() {
    let t3, e4 = 0;
    for (let s3 = 0, i3 = this._textLines.length; s3 < i3; s3++) t3 = this.getHeightOfLine(s3), e4 += s3 === i3 - 1 ? t3 / this.lineHeight : t3;
    return e4;
  }
  _getLeftOffset() {
    return "ltr" === this.direction ? -this.width / 2 : this.width / 2;
  }
  _getTopOffset() {
    return -this.height / 2;
  }
  _renderTextCommon(t3, e4) {
    t3.save();
    let s3 = 0;
    const i3 = this._getLeftOffset(), r3 = this._getTopOffset();
    for (let n3 = 0, o3 = this._textLines.length; n3 < o3; n3++) {
      const o4 = this.getHeightOfLine(n3), a3 = o4 / this.lineHeight, h3 = this._getLineLeftOffset(n3);
      this._renderTextLine(e4, t3, this._textLines[n3], i3 + h3, r3 + s3 + a3, n3), s3 += o4;
    }
    t3.restore();
  }
  _renderTextFill(t3) {
    (this.fill || this.styleHas(K)) && this._renderTextCommon(t3, "fillText");
  }
  _renderTextStroke(t3) {
    (this.stroke && 0 !== this.strokeWidth || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t3), t3.save(), this._setLineDash(t3, this.strokeDashArray), t3.beginPath(), this._renderTextCommon(t3, "strokeText"), t3.closePath(), t3.restore());
  }
  _renderChars(t3, e4, s3, i3, r3, n3) {
    const o3 = this.getHeightOfLine(n3), a3 = this.textAlign.includes(qe), h3 = this.path, c3 = !a3 && 0 === this.charSpacing && this.isEmptyStyles(n3) && !h3, l3 = "ltr" === this.direction, u3 = "ltr" === this.direction ? 1 : -1, d3 = e4.direction;
    let g3, f2, p3, m3, v3, y3 = "", _3 = 0;
    if (e4.save(), d3 !== this.direction && (e4.canvas.setAttribute("dir", l3 ? "ltr" : "rtl"), e4.direction = l3 ? "ltr" : "rtl", e4.textAlign = l3 ? M : A), r3 -= o3 * this._fontSizeFraction / this.lineHeight, c3) return this._renderChar(t3, e4, n3, 0, s3.join(""), i3, r3), void e4.restore();
    for (let o4 = 0, c4 = s3.length - 1; o4 <= c4; o4++) m3 = o4 === c4 || this.charSpacing || h3, y3 += s3[o4], p3 = this.__charBounds[n3][o4], 0 === _3 ? (i3 += u3 * (p3.kernedWidth - p3.width), _3 += p3.width) : _3 += p3.kernedWidth, a3 && !m3 && this._reSpaceAndTab.test(s3[o4]) && (m3 = true), m3 || (g3 = g3 || this.getCompleteStyleDeclaration(n3, o4), f2 = this.getCompleteStyleDeclaration(n3, o4 + 1), m3 = Ui(g3, f2, false)), m3 && (h3 ? (e4.save(), e4.translate(p3.renderLeft, p3.renderTop), e4.rotate(p3.angle), this._renderChar(t3, e4, n3, o4, y3, -_3 / 2, 0), e4.restore()) : (v3 = i3, this._renderChar(t3, e4, n3, o4, y3, v3, r3)), y3 = "", g3 = f2, i3 += u3 * _3, _3 = 0);
    e4.restore();
  }
  _applyPatternGradientTransformText(t3) {
    const e4 = this.width + this.strokeWidth, s3 = this.height + this.strokeWidth, i3 = vt({
      width: e4,
      height: s3
    }), r3 = i3.getContext("2d");
    return i3.width = e4, i3.height = s3, r3.beginPath(), r3.moveTo(0, 0), r3.lineTo(e4, 0), r3.lineTo(e4, s3), r3.lineTo(0, s3), r3.closePath(), r3.translate(e4 / 2, s3 / 2), r3.fillStyle = t3.toLive(r3), this._applyPatternGradientTransform(r3, t3), r3.fill(), r3.createPattern(i3, "no-repeat");
  }
  handleFiller(t3, e4, s3) {
    let i3, r3;
    return zt(s3) ? "percentage" === s3.gradientUnits || s3.gradientTransform || s3.patternTransform ? (i3 = -this.width / 2, r3 = -this.height / 2, t3.translate(i3, r3), t3[e4] = this._applyPatternGradientTransformText(s3), {
      offsetX: i3,
      offsetY: r3
    }) : (t3[e4] = s3.toLive(t3), this._applyPatternGradientTransform(t3, s3)) : (t3[e4] = s3, {
      offsetX: 0,
      offsetY: 0
    });
  }
  _setStrokeStyles(t3, e4) {
    let { stroke: s3, strokeWidth: i3 } = e4;
    return t3.lineWidth = i3, t3.lineCap = this.strokeLineCap, t3.lineDashOffset = this.strokeDashOffset, t3.lineJoin = this.strokeLineJoin, t3.miterLimit = this.strokeMiterLimit, this.handleFiller(t3, "strokeStyle", s3);
  }
  _setFillStyles(t3, e4) {
    let { fill: s3 } = e4;
    return this.handleFiller(t3, "fillStyle", s3);
  }
  _renderChar(t3, e4, s3, i3, r3, n3, o3) {
    const a3 = this._getStyleDeclaration(s3, i3), h3 = this.getCompleteStyleDeclaration(s3, i3), c3 = "fillText" === t3 && h3.fill, l3 = "strokeText" === t3 && h3.stroke && h3.strokeWidth;
    if (l3 || c3) {
      if (e4.save(), e4.font = this._getFontDeclaration(h3), a3.textBackgroundColor && this._removeShadow(e4), a3.deltaY && (o3 += a3.deltaY), c3) {
        const t4 = this._setFillStyles(e4, h3);
        e4.fillText(r3, n3 - t4.offsetX, o3 - t4.offsetY);
      }
      if (l3) {
        const t4 = this._setStrokeStyles(e4, h3);
        e4.strokeText(r3, n3 - t4.offsetX, o3 - t4.offsetY);
      }
      e4.restore();
    }
  }
  setSuperscript(t3, e4) {
    this._setScript(t3, e4, this.superscript);
  }
  setSubscript(t3, e4) {
    this._setScript(t3, e4, this.subscript);
  }
  _setScript(t3, e4, s3) {
    const i3 = this.get2DCursorLocation(t3, true), r3 = this.getValueOfPropertyAt(i3.lineIndex, i3.charIndex, "fontSize"), n3 = this.getValueOfPropertyAt(i3.lineIndex, i3.charIndex, "deltaY"), o3 = {
      fontSize: r3 * s3.size,
      deltaY: n3 + r3 * s3.baseline
    };
    this.setSelectionStyles(o3, t3, e4);
  }
  _getLineLeftOffset(t3) {
    const e4 = this.getLineWidth(t3), s3 = this.width - e4, i3 = this.textAlign, r3 = this.direction, n3 = this.isEndOfWrapping(t3);
    let o3 = 0;
    return i3 === qe || i3 === Qe && !n3 || i3 === Je && !n3 || i3 === Ke && !n3 ? 0 : (i3 === D && (o3 = s3 / 2), i3 === A && (o3 = s3), i3 === Qe && (o3 = s3 / 2), i3 === Je && (o3 = s3), "rtl" === r3 && (i3 === A || i3 === qe || i3 === Je ? o3 = 0 : i3 === M || i3 === Ke ? o3 = -s3 : i3 !== D && i3 !== Qe || (o3 = -s3 / 2)), o3);
  }
  _clearCache() {
    this._forceClearCache = false, this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
  }
  getLineWidth(t3) {
    if (void 0 !== this.__lineWidths[t3]) return this.__lineWidths[t3];
    const { width: e4 } = this.measureLine(t3);
    return this.__lineWidths[t3] = e4, e4;
  }
  _getWidthOfCharSpacing() {
    return 0 !== this.charSpacing ? this.fontSize * this.charSpacing / 1e3 : 0;
  }
  getValueOfPropertyAt(t3, e4, s3) {
    var i3;
    return null !== (i3 = this._getStyleDeclaration(t3, e4)[s3]) && void 0 !== i3 ? i3 : this[s3];
  }
  _renderTextDecoration(t3, e4) {
    if (!this[e4] && !this.styleHas(e4)) return;
    let s3 = this._getTopOffset();
    const i3 = this._getLeftOffset(), r3 = this.path, n3 = this._getWidthOfCharSpacing(), o3 = "linethrough" === e4 ? 0.5 : "overline" === e4 ? 1 : 0, a3 = this.offsets[e4];
    for (let h3 = 0, c3 = this._textLines.length; h3 < c3; h3++) {
      const c4 = this.getHeightOfLine(h3);
      if (!this[e4] && !this.styleHas(e4, h3)) {
        s3 += c4;
        continue;
      }
      const l3 = this._textLines[h3], u3 = c4 / this.lineHeight, d3 = this._getLineLeftOffset(h3);
      let g3 = 0, f2 = 0, p3 = this.getValueOfPropertyAt(h3, 0, e4), m3 = this.getValueOfPropertyAt(h3, 0, K), v3 = this.getValueOfPropertyAt(h3, 0, Ye), y3 = p3, _3 = m3, x3 = v3;
      const C3 = s3 + u3 * (1 - this._fontSizeFraction);
      let b3 = this.getHeightOfChar(h3, 0), S3 = this.getValueOfPropertyAt(h3, 0, "deltaY");
      for (let s4 = 0, n4 = l3.length; s4 < n4; s4++) {
        const n5 = this.__charBounds[h3][s4];
        y3 = this.getValueOfPropertyAt(h3, s4, e4), _3 = this.getValueOfPropertyAt(h3, s4, K), x3 = this.getValueOfPropertyAt(h3, s4, Ye);
        const c5 = this.getHeightOfChar(h3, s4), l4 = this.getValueOfPropertyAt(h3, s4, "deltaY");
        if (r3 && y3 && _3) {
          const e5 = this.fontSize * x3 / 1e3;
          t3.save(), t3.fillStyle = m3, t3.translate(n5.renderLeft, n5.renderTop), t3.rotate(n5.angle), t3.fillRect(-n5.kernedWidth / 2, a3 * c5 + l4 - o3 * e5, n5.kernedWidth, e5), t3.restore();
        } else if ((y3 !== p3 || _3 !== m3 || c5 !== b3 || x3 !== v3 || l4 !== S3) && f2 > 0) {
          const e5 = this.fontSize * v3 / 1e3;
          let s5 = i3 + d3 + g3;
          "rtl" === this.direction && (s5 = this.width - s5 - f2), p3 && m3 && v3 && (t3.fillStyle = m3, t3.fillRect(s5, C3 + a3 * b3 + S3 - o3 * e5, f2, e5)), g3 = n5.left, f2 = n5.width, p3 = y3, v3 = x3, m3 = _3, b3 = c5, S3 = l4;
        } else f2 += n5.kernedWidth;
      }
      let w3 = i3 + d3 + g3;
      "rtl" === this.direction && (w3 = this.width - w3 - f2), t3.fillStyle = _3;
      const T2 = this.fontSize * x3 / 1e3;
      y3 && _3 && x3 && t3.fillRect(w3, C3 + a3 * b3 + S3 - o3 * T2, f2 - n3, T2), s3 += c4;
    }
    this._removeShadow(t3);
  }
  _getFontDeclaration() {
    let { fontFamily: t3 = this.fontFamily, fontStyle: e4 = this.fontStyle, fontWeight: s3 = this.fontWeight, fontSize: i3 = this.fontSize } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r3 = arguments.length > 1 ? arguments[1] : void 0;
    const n3 = t3.includes("'") || t3.includes('"') || t3.includes(",") || _Eo.genericFonts.includes(t3.toLowerCase()) ? t3 : '"'.concat(t3, '"');
    return [
      e4,
      s3,
      "".concat(r3 ? this.CACHE_FONT_SIZE : i3, "px"),
      n3
    ].join(" ");
  }
  render(t3) {
    this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._forceClearCache && this.initDimensions(), super.render(t3)));
  }
  graphemeSplit(t3) {
    return Gi(t3);
  }
  _splitTextIntoLines(t3) {
    const e4 = t3.split(this._reNewline), s3 = new Array(e4.length), i3 = [
      "\n"
    ];
    let r3 = [];
    for (let t4 = 0; t4 < e4.length; t4++) s3[t4] = this.graphemeSplit(e4[t4]), r3 = r3.concat(s3[t4], i3);
    return r3.pop(), {
      _unwrappedLines: s3,
      lines: e4,
      graphemeText: r3,
      graphemeLines: s3
    };
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return s(s({}, super.toObject([
      ...He,
      ...t3
    ])), {}, {
      styles: qi(this.styles, this.text)
    }, this.path ? {
      path: this.path.toObject()
    } : {});
  }
  set(t3, e4) {
    const { textLayoutProperties: s3 } = this.constructor;
    super.set(t3, e4);
    let i3 = false, r3 = false;
    if ("object" == typeof t3) for (const e5 in t3) "path" === e5 && this.setPathInfo(), i3 = i3 || s3.includes(e5), r3 = r3 || "path" === e5;
    else i3 = s3.includes(t3), r3 = "path" === t3;
    return r3 && this.setPathInfo(), i3 && this.initialized && (this.initDimensions(), this.setCoords()), this;
  }
  complexity() {
    return 1;
  }
  static async fromElement(t3, e4, r3) {
    const n3 = Dr(t3, _Eo.ATTRIBUTE_NAMES, r3), o3 = s(s({}, e4), n3), { textAnchor: a3 = M, textDecoration: h3 = "", dx: c3 = 0, dy: l3 = 0, top: u3 = 0, left: d3 = 0, fontSize: g3 = O, strokeWidth: f2 = 1 } = o3, p3 = i(o3, Mo), m3 = new this((t3.textContent || "").replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " "), s({
      left: d3 + c3,
      top: u3 + l3,
      underline: h3.includes("underline"),
      overline: h3.includes("overline"),
      linethrough: h3.includes("line-through"),
      strokeWidth: 0,
      fontSize: g3
    }, p3)), v3 = m3.getScaledHeight() / m3.height, y3 = ((m3.height + m3.strokeWidth) * m3.lineHeight - m3.height) * v3, _3 = m3.getScaledHeight() + y3;
    let x3 = 0;
    return a3 === D && (x3 = m3.getScaledWidth() / 2), a3 === A && (x3 = m3.getScaledWidth()), m3.set({
      left: m3.left - x3,
      top: m3.top - (_3 - m3.fontSize * (0.07 + m3._fontSizeFraction)) / m3.lineHeight,
      strokeWidth: f2
    }), m3;
  }
  static fromObject(t3) {
    return this._fromObject(s(s({}, t3), {}, {
      styles: Ki(t3.styles || {}, t3.text)
    }), {
      extraParam: "text"
    });
  }
};
t(Eo, "textLayoutProperties", ze), t(Eo, "cacheProperties", [
  ...Ms,
  ...He
]), t(Eo, "ownDefaults", Ue), t(Eo, "type", "Text"), t(Eo, "genericFonts", [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-serif",
  "ui-sans-serif",
  "ui-monospace",
  "ui-rounded",
  "math",
  "emoji",
  "fangsong"
]), t(Eo, "ATTRIBUTE_NAMES", Ji.concat("x", "y", "dx", "dy", "font-family", "font-style", "font-weight", "font-size", "letter-spacing", "text-decoration", "text-anchor")), Ai(Eo, [
  class extends Xe {
    _toSVG() {
      const t3 = this._getSVGLeftTopOffsets(), e4 = this._getSVGTextAndBg(t3.textTop, t3.textLeft);
      return this._wrapSVGTextAndBg(e4);
    }
    toSVG(t3) {
      const e4 = this._createBaseSVGMarkup(this._toSVG(), {
        reviver: t3,
        noStyle: true,
        withShadow: true
      }), s3 = this.path;
      return s3 ? e4 + s3._createBaseSVGMarkup(s3._toSVG(), {
        reviver: t3,
        withShadow: true,
        additionalTransform: Gt(this.calcOwnMatrix())
      }) : e4;
    }
    _getSVGLeftTopOffsets() {
      return {
        textLeft: -this.width / 2,
        textTop: -this.height / 2,
        lineTop: this.getHeightOfLine(0)
      };
    }
    _wrapSVGTextAndBg(t3) {
      let { textBgRects: e4, textSpans: s3 } = t3;
      const i3 = this.getSvgTextDecoration(this);
      return [
        e4.join(""),
        '		<text xml:space="preserve" ',
        'font-family="'.concat(this.fontFamily.replace(ko, "'"), '" '),
        'font-size="'.concat(this.fontSize, '" '),
        this.fontStyle ? 'font-style="'.concat(this.fontStyle, '" ') : "",
        this.fontWeight ? 'font-weight="'.concat(this.fontWeight, '" ') : "",
        i3 ? 'text-decoration="'.concat(i3, '" ') : "",
        "rtl" === this.direction ? 'direction="'.concat(this.direction, '" ') : "",
        'style="',
        this.getSvgStyles(true),
        '"',
        this.addPaintOrder(),
        " >",
        s3.join(""),
        "</text>\n"
      ];
    }
    _getSVGTextAndBg(t3, e4) {
      const s3 = [], i3 = [];
      let r3, n3 = t3;
      this.backgroundColor && i3.push(...Do(this.backgroundColor, -this.width / 2, -this.height / 2, this.width, this.height));
      for (let t4 = 0, o3 = this._textLines.length; t4 < o3; t4++) r3 = this._getLineLeftOffset(t4), "rtl" === this.direction && (r3 += this.width), (this.textBackgroundColor || this.styleHas("textBackgroundColor", t4)) && this._setSVGTextLineBg(i3, t4, e4 + r3, n3), this._setSVGTextLineText(s3, t4, e4 + r3, n3), n3 += this.getHeightOfLine(t4);
      return {
        textSpans: s3,
        textBgRects: i3
      };
    }
    _createTextCharSpan(t3, e4, s3, i3, r3) {
      const n3 = o.NUM_FRACTION_DIGITS, a3 = this.getSvgSpanStyles(e4, t3 !== t3.trim() || !!t3.match(Oo)), h3 = a3 ? 'style="'.concat(a3, '"') : "", c3 = e4.deltaY, l3 = c3 ? ' dy="'.concat(Vt(c3, n3), '" ') : "", { angle: u3, renderLeft: d3, renderTop: g3, width: f2 } = r3;
      let p3 = "";
      if (void 0 !== d3) {
        const t4 = f2 / 2;
        u3 && (p3 = ' rotate="'.concat(Vt(Ct(u3), n3), '"'));
        const e5 = Pt({
          angle: Ct(u3)
        });
        e5[4] = d3, e5[5] = g3;
        const r4 = new ot(-t4, 0).transform(e5);
        s3 = r4.x, i3 = r4.y;
      }
      return '<tspan x="'.concat(Vt(s3, n3), '" y="').concat(Vt(i3, n3), '" ').concat(l3).concat(p3).concat(h3, ">").concat(Yi(t3), "</tspan>");
    }
    _setSVGTextLineText(t3, e4, s3, i3) {
      const r3 = this.getHeightOfLine(e4), n3 = this.textAlign.includes(qe), o3 = this._textLines[e4];
      let a3, h3, c3, l3, u3, d3 = "", g3 = 0;
      i3 += r3 * (1 - this._fontSizeFraction) / this.lineHeight;
      for (let r4 = 0, f2 = o3.length - 1; r4 <= f2; r4++) u3 = r4 === f2 || this.charSpacing || this.path, d3 += o3[r4], c3 = this.__charBounds[e4][r4], 0 === g3 ? (s3 += c3.kernedWidth - c3.width, g3 += c3.width) : g3 += c3.kernedWidth, n3 && !u3 && this._reSpaceAndTab.test(o3[r4]) && (u3 = true), u3 || (a3 = a3 || this.getCompleteStyleDeclaration(e4, r4), h3 = this.getCompleteStyleDeclaration(e4, r4 + 1), u3 = Ui(a3, h3, true)), u3 && (l3 = this._getStyleDeclaration(e4, r4), t3.push(this._createTextCharSpan(d3, l3, s3, i3, c3)), d3 = "", a3 = h3, "rtl" === this.direction ? s3 -= g3 : s3 += g3, g3 = 0);
    }
    _setSVGTextLineBg(t3, e4, s3, i3) {
      const r3 = this._textLines[e4], n3 = this.getHeightOfLine(e4) / this.lineHeight;
      let o3, a3 = 0, h3 = 0, c3 = this.getValueOfPropertyAt(e4, 0, "textBackgroundColor");
      for (let l3 = 0; l3 < r3.length; l3++) {
        const { left: r4, width: u3, kernedWidth: d3 } = this.__charBounds[e4][l3];
        o3 = this.getValueOfPropertyAt(e4, l3, "textBackgroundColor"), o3 !== c3 ? (c3 && t3.push(...Do(c3, s3 + h3, i3, a3, n3)), h3 = r4, a3 = u3, c3 = o3) : a3 += d3;
      }
      o3 && t3.push(...Do(c3, s3 + h3, i3, a3, n3));
    }
    _getSVGLineTopOffset(t3) {
      let e4, s3 = 0;
      for (e4 = 0; e4 < t3; e4++) s3 += this.getHeightOfLine(e4);
      const i3 = this.getHeightOfLine(e4);
      return {
        lineTop: s3,
        offset: (this._fontSizeMult - this._fontSizeFraction) * i3 / (this.lineHeight * this._fontSizeMult)
      };
    }
    getSvgStyles(t3) {
      return "".concat(super.getSvgStyles(t3), " text-decoration-thickness: ").concat(Vt(this.textDecorationThickness * this.getObjectScaling().y / 10, o.NUM_FRACTION_DIGITS), "%; white-space: pre;");
    }
    getSvgSpanStyles(t3, e4) {
      const { fontFamily: s3, strokeWidth: i3, stroke: r3, fill: n3, fontSize: a3, fontStyle: h3, fontWeight: c3, deltaY: l3, textDecorationThickness: u3, linethrough: d3, overline: g3, underline: f2 } = t3, p3 = this.getSvgTextDecoration({
        underline: null != f2 ? f2 : this.underline,
        overline: null != g3 ? g3 : this.overline,
        linethrough: null != d3 ? d3 : this.linethrough
      }), m3 = u3 || this.textDecorationThickness;
      return [
        r3 ? Ie(J, r3) : "",
        i3 ? "stroke-width: ".concat(i3, "; ") : "",
        s3 ? "font-family: ".concat(s3.includes("'") || s3.includes('"') ? s3 : "'".concat(s3, "'"), "; ") : "",
        a3 ? "font-size: ".concat(a3, "px; ") : "",
        h3 ? "font-style: ".concat(h3, "; ") : "",
        c3 ? "font-weight: ".concat(c3, "; ") : "",
        p3 ? "text-decoration: ".concat(p3, "; text-decoration-thickness: ").concat(Vt(m3 * this.getObjectScaling().y / 10, o.NUM_FRACTION_DIGITS), "%; ") : "",
        n3 ? Ie(K, n3) : "",
        l3 ? "baseline-shift: ".concat(-l3, "; ") : "",
        e4 ? "white-space: pre; " : ""
      ].join("");
    }
    getSvgTextDecoration(t3) {
      return [
        "overline",
        "underline",
        "line-through"
      ].filter((e4) => t3[e4.replace("-", "")]).join(" ");
    }
  }
]), tt.setClass(Eo), tt.setSVGClass(Eo);
var Ao = class {
  constructor(e4) {
    t(this, "target", void 0), t(this, "__mouseDownInPlace", false), t(this, "__dragStartFired", false), t(this, "__isDraggingOver", false), t(this, "__dragStartSelection", void 0), t(this, "__dragImageDisposer", void 0), t(this, "_dispose", void 0), this.target = e4;
    const s3 = [
      this.target.on("dragenter", this.dragEnterHandler.bind(this)),
      this.target.on("dragover", this.dragOverHandler.bind(this)),
      this.target.on("dragleave", this.dragLeaveHandler.bind(this)),
      this.target.on("dragend", this.dragEndHandler.bind(this)),
      this.target.on("drop", this.dropHandler.bind(this))
    ];
    this._dispose = () => {
      s3.forEach((t3) => t3()), this._dispose = void 0;
    };
  }
  isPointerOverSelection(t3) {
    const e4 = this.target, s3 = e4.getSelectionStartFromPointer(t3);
    return e4.isEditing && s3 >= e4.selectionStart && s3 <= e4.selectionEnd && e4.selectionStart < e4.selectionEnd;
  }
  start(t3) {
    return this.__mouseDownInPlace = this.isPointerOverSelection(t3);
  }
  isActive() {
    return this.__mouseDownInPlace;
  }
  end(t3) {
    const e4 = this.isActive();
    return e4 && !this.__dragStartFired && (this.target.setCursorByClick(t3), this.target.initDelayedCursor(true)), this.__mouseDownInPlace = false, this.__dragStartFired = false, this.__isDraggingOver = false, e4;
  }
  getDragStartSelection() {
    return this.__dragStartSelection;
  }
  setDragImage(t3, e4) {
    var s3;
    let { selectionStart: i3, selectionEnd: r3 } = e4;
    const n3 = this.target, o3 = n3.canvas, a3 = new ot(n3.flipX ? -1 : 1, n3.flipY ? -1 : 1), h3 = n3._getCursorBoundaries(i3), c3 = new ot(h3.left + h3.leftOffset, h3.top + h3.topOffset).multiply(a3).transform(n3.calcTransformMatrix()), l3 = o3.getScenePoint(t3).subtract(c3), u3 = n3.getCanvasRetinaScaling(), d3 = n3.getBoundingRect(), g3 = c3.subtract(new ot(d3.left, d3.top)), f2 = o3.viewportTransform, p3 = g3.add(l3).transform(f2, true), m3 = n3.backgroundColor, v3 = Wi(n3.styles);
    n3.backgroundColor = "";
    const y3 = {
      stroke: "transparent",
      fill: "transparent",
      textBackgroundColor: "transparent"
    };
    n3.setSelectionStyles(y3, 0, i3), n3.setSelectionStyles(y3, r3, n3.text.length), n3.dirty = true;
    const _3 = n3.toCanvasElement({
      enableRetinaScaling: o3.enableRetinaScaling,
      viewportTransform: true
    });
    n3.backgroundColor = m3, n3.styles = v3, n3.dirty = true, Sn(_3, {
      position: "fixed",
      left: "".concat(-_3.width, "px"),
      border: j,
      width: "".concat(_3.width / u3, "px"),
      height: "".concat(_3.height / u3, "px")
    }), this.__dragImageDisposer && this.__dragImageDisposer(), this.__dragImageDisposer = () => {
      _3.remove();
    }, Kt(t3.target || this.target.hiddenTextarea).body.appendChild(_3), null === (s3 = t3.dataTransfer) || void 0 === s3 || s3.setDragImage(_3, p3.x, p3.y);
  }
  onDragStart(t3) {
    this.__dragStartFired = true;
    const e4 = this.target, i3 = this.isActive();
    if (i3 && t3.dataTransfer) {
      const i4 = this.__dragStartSelection = {
        selectionStart: e4.selectionStart,
        selectionEnd: e4.selectionEnd
      }, r3 = e4._text.slice(i4.selectionStart, i4.selectionEnd).join(""), n3 = s({
        text: e4.text,
        value: r3
      }, i4);
      t3.dataTransfer.setData("text/plain", r3), t3.dataTransfer.setData("application/fabric", JSON.stringify({
        value: r3,
        styles: e4.getSelectionStyles(i4.selectionStart, i4.selectionEnd, true)
      })), t3.dataTransfer.effectAllowed = "copyMove", this.setDragImage(t3, n3);
    }
    return e4.abortCursorAnimation(), i3;
  }
  canDrop(t3) {
    if (this.target.editable && !this.target.getActiveControl() && !t3.defaultPrevented) {
      if (this.isActive() && this.__dragStartSelection) {
        const e4 = this.target.getSelectionStartFromPointer(t3), s3 = this.__dragStartSelection;
        return e4 < s3.selectionStart || e4 > s3.selectionEnd;
      }
      return true;
    }
    return false;
  }
  targetCanDrop(t3) {
    return this.target.canDrop(t3);
  }
  dragEnterHandler(t3) {
    let { e: e4 } = t3;
    const s3 = this.targetCanDrop(e4);
    !this.__isDraggingOver && s3 && (this.__isDraggingOver = true);
  }
  dragOverHandler(t3) {
    const { e: e4 } = t3, s3 = this.targetCanDrop(e4);
    !this.__isDraggingOver && s3 ? this.__isDraggingOver = true : this.__isDraggingOver && !s3 && (this.__isDraggingOver = false), this.__isDraggingOver && (e4.preventDefault(), t3.canDrop = true, t3.dropTarget = this.target);
  }
  dragLeaveHandler() {
    (this.__isDraggingOver || this.isActive()) && (this.__isDraggingOver = false);
  }
  dropHandler(t3) {
    var e4;
    const { e: s3 } = t3, i3 = s3.defaultPrevented;
    this.__isDraggingOver = false, s3.preventDefault();
    let r3 = null === (e4 = s3.dataTransfer) || void 0 === e4 ? void 0 : e4.getData("text/plain");
    if (r3 && !i3) {
      const e5 = this.target, i4 = e5.canvas;
      let n3 = e5.getSelectionStartFromPointer(s3);
      const { styles: o3 } = s3.dataTransfer.types.includes("application/fabric") ? JSON.parse(s3.dataTransfer.getData("application/fabric")) : {}, a3 = r3[Math.max(0, r3.length - 1)], h3 = 0;
      if (this.__dragStartSelection) {
        const t4 = this.__dragStartSelection.selectionStart, s4 = this.__dragStartSelection.selectionEnd;
        n3 > t4 && n3 <= s4 ? n3 = t4 : n3 > s4 && (n3 -= s4 - t4), e5.removeChars(t4, s4), delete this.__dragStartSelection;
      }
      e5._reNewline.test(a3) && (e5._reNewline.test(e5._text[n3]) || n3 === e5._text.length) && (r3 = r3.trimEnd()), t3.didDrop = true, t3.dropTarget = e5, e5.insertChars(r3, o3, n3), i4.setActiveObject(e5), e5.enterEditing(s3), e5.selectionStart = Math.min(n3 + h3, e5._text.length), e5.selectionEnd = Math.min(e5.selectionStart + r3.length, e5._text.length), e5.hiddenTextarea.value = e5.text, e5._updateTextarea(), e5.hiddenTextarea.focus(), e5.fire(G, {
        index: n3 + h3,
        action: "drop"
      }), i4.fire("text:changed", {
        target: e5
      }), i4.contextTopDirty = true, i4.requestRenderAll();
    }
  }
  dragEndHandler(t3) {
    let { e: e4 } = t3;
    if (this.isActive() && this.__dragStartFired && this.__dragStartSelection) {
      var s3;
      const t4 = this.target, i3 = this.target.canvas, { selectionStart: r3, selectionEnd: n3 } = this.__dragStartSelection, o3 = (null === (s3 = e4.dataTransfer) || void 0 === s3 ? void 0 : s3.dropEffect) || j;
      o3 === j ? (t4.selectionStart = r3, t4.selectionEnd = n3, t4._updateTextarea(), t4.hiddenTextarea.focus()) : (t4.clearContextTop(), "move" === o3 && (t4.removeChars(r3, n3), t4.selectionStart = t4.selectionEnd = r3, t4.hiddenTextarea && (t4.hiddenTextarea.value = t4.text), t4._updateTextarea(), t4.fire(G, {
        index: r3,
        action: "dragend"
      }), i3.fire("text:changed", {
        target: t4
      }), i3.requestRenderAll()), t4.exitEditing());
    }
    this.__dragImageDisposer && this.__dragImageDisposer(), delete this.__dragImageDisposer, delete this.__dragStartSelection, this.__isDraggingOver = false;
  }
  dispose() {
    this._dispose && this._dispose();
  }
};
var jo = /[ \n\.,;!\?\-]/;
var Fo = class extends Eo {
  constructor() {
    super(...arguments), t(this, "_currentCursorOpacity", 1);
  }
  initBehavior() {
    this._tick = this._tick.bind(this), this._onTickComplete = this._onTickComplete.bind(this), this.updateSelectionOnMouseMove = this.updateSelectionOnMouseMove.bind(this);
  }
  onDeselect(t3) {
    return this.isEditing && this.exitEditing(), this.selected = false, super.onDeselect(t3);
  }
  _animateCursor(t3) {
    let { toValue: e4, duration: s3, delay: i3, onComplete: r3 } = t3;
    return Us({
      startValue: this._currentCursorOpacity,
      endValue: e4,
      duration: s3,
      delay: i3,
      onComplete: r3,
      abort: () => !this.canvas || this.selectionStart !== this.selectionEnd,
      onChange: (t4) => {
        this._currentCursorOpacity = t4, this.renderCursorOrSelection();
      }
    });
  }
  _tick(t3) {
    this._currentTickState = this._animateCursor({
      toValue: 0,
      duration: this.cursorDuration / 2,
      delay: Math.max(t3 || 0, 100),
      onComplete: this._onTickComplete
    });
  }
  _onTickComplete() {
    var t3;
    null === (t3 = this._currentTickCompleteState) || void 0 === t3 || t3.abort(), this._currentTickCompleteState = this._animateCursor({
      toValue: 1,
      duration: this.cursorDuration,
      onComplete: this._tick
    });
  }
  initDelayedCursor(t3) {
    this.abortCursorAnimation(), this._tick(t3 ? 0 : this.cursorDelay);
  }
  abortCursorAnimation() {
    let t3 = false;
    [
      this._currentTickState,
      this._currentTickCompleteState
    ].forEach((e4) => {
      e4 && !e4.isDone() && (t3 = true, e4.abort());
    }), this._currentCursorOpacity = 1, t3 && this.clearContextTop();
  }
  restartCursorIfNeeded() {
    [
      this._currentTickState,
      this._currentTickCompleteState
    ].some((t3) => !t3 || t3.isDone()) && this.initDelayedCursor();
  }
  selectAll() {
    return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
  }
  cmdAll() {
    this.selectAll(), this.renderCursorOrSelection();
  }
  getSelectedText() {
    return this._text.slice(this.selectionStart, this.selectionEnd).join("");
  }
  findWordBoundaryLeft(t3) {
    let e4 = 0, s3 = t3 - 1;
    if (this._reSpace.test(this._text[s3])) for (; this._reSpace.test(this._text[s3]); ) e4++, s3--;
    for (; /\S/.test(this._text[s3]) && s3 > -1; ) e4++, s3--;
    return t3 - e4;
  }
  findWordBoundaryRight(t3) {
    let e4 = 0, s3 = t3;
    if (this._reSpace.test(this._text[s3])) for (; this._reSpace.test(this._text[s3]); ) e4++, s3++;
    for (; /\S/.test(this._text[s3]) && s3 < this._text.length; ) e4++, s3++;
    return t3 + e4;
  }
  findLineBoundaryLeft(t3) {
    let e4 = 0, s3 = t3 - 1;
    for (; !/\n/.test(this._text[s3]) && s3 > -1; ) e4++, s3--;
    return t3 - e4;
  }
  findLineBoundaryRight(t3) {
    let e4 = 0, s3 = t3;
    for (; !/\n/.test(this._text[s3]) && s3 < this._text.length; ) e4++, s3++;
    return t3 + e4;
  }
  searchWordBoundary(t3, e4) {
    const s3 = this._text;
    let i3 = t3 > 0 && this._reSpace.test(s3[t3]) && (-1 === e4 || !F.test(s3[t3 - 1])) ? t3 - 1 : t3, r3 = s3[i3];
    for (; i3 > 0 && i3 < s3.length && !jo.test(r3); ) i3 += e4, r3 = s3[i3];
    return -1 === e4 && jo.test(r3) && i3++, i3;
  }
  selectWord(t3) {
    var e4;
    t3 = null !== (e4 = t3) && void 0 !== e4 ? e4 : this.selectionStart;
    const s3 = this.searchWordBoundary(t3, -1), i3 = Math.max(s3, this.searchWordBoundary(t3, 1));
    this.selectionStart = s3, this.selectionEnd = i3, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
  }
  selectLine(t3) {
    var e4;
    t3 = null !== (e4 = t3) && void 0 !== e4 ? e4 : this.selectionStart;
    const s3 = this.findLineBoundaryLeft(t3), i3 = this.findLineBoundaryRight(t3);
    this.selectionStart = s3, this.selectionEnd = i3, this._fireSelectionChanged(), this._updateTextarea();
  }
  enterEditing(t3) {
    !this.isEditing && this.editable && (this.enterEditingImpl(), this.fire("editing:entered", t3 ? {
      e: t3
    } : void 0), this._fireSelectionChanged(), this.canvas && (this.canvas.fire("text:editing:entered", {
      target: this,
      e: t3
    }), this.canvas.requestRenderAll()));
  }
  enterEditingImpl() {
    this.canvas && (this.canvas.calcOffset(), this.canvas.textEditingManager.exitTextEditing()), this.isEditing = true, this.initHiddenTextarea(), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick();
  }
  updateSelectionOnMouseMove(t3) {
    if (this.getActiveControl()) return;
    const e4 = this.hiddenTextarea;
    Kt(e4).activeElement !== e4 && e4.focus();
    const s3 = this.getSelectionStartFromPointer(t3), i3 = this.selectionStart, r3 = this.selectionEnd;
    (s3 === this.__selectionStartOnMouseDown && i3 !== r3 || i3 !== s3 && r3 !== s3) && (s3 > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = s3) : (this.selectionStart = s3, this.selectionEnd = this.__selectionStartOnMouseDown), this.selectionStart === i3 && this.selectionEnd === r3 || (this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
  }
  _setEditingProps() {
    this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = false, this.lockMovementX = this.lockMovementY = true;
  }
  fromStringToGraphemeSelection(t3, e4, s3) {
    const i3 = s3.slice(0, t3), r3 = this.graphemeSplit(i3).length;
    if (t3 === e4) return {
      selectionStart: r3,
      selectionEnd: r3
    };
    const n3 = s3.slice(t3, e4);
    return {
      selectionStart: r3,
      selectionEnd: r3 + this.graphemeSplit(n3).length
    };
  }
  fromGraphemeToStringSelection(t3, e4, s3) {
    const i3 = s3.slice(0, t3).join("").length;
    if (t3 === e4) return {
      selectionStart: i3,
      selectionEnd: i3
    };
    return {
      selectionStart: i3,
      selectionEnd: i3 + s3.slice(t3, e4).join("").length
    };
  }
  _updateTextarea() {
    if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
      if (!this.inCompositionMode) {
        const t3 = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
        this.hiddenTextarea.selectionStart = t3.selectionStart, this.hiddenTextarea.selectionEnd = t3.selectionEnd;
      }
      this.updateTextareaPosition();
    }
  }
  updateFromTextArea() {
    if (!this.hiddenTextarea) return;
    this.cursorOffsetCache = {};
    const t3 = this.hiddenTextarea;
    this.text = t3.value, this.set("dirty", true), this.initDimensions(), this.setCoords();
    const e4 = this.fromStringToGraphemeSelection(t3.selectionStart, t3.selectionEnd, t3.value);
    this.selectionEnd = this.selectionStart = e4.selectionEnd, this.inCompositionMode || (this.selectionStart = e4.selectionStart), this.updateTextareaPosition();
  }
  updateTextareaPosition() {
    if (this.selectionStart === this.selectionEnd) {
      const t3 = this._calcTextareaPosition();
      this.hiddenTextarea.style.left = t3.left, this.hiddenTextarea.style.top = t3.top;
    }
  }
  _calcTextareaPosition() {
    if (!this.canvas) return {
      left: "1px",
      top: "1px"
    };
    const t3 = this.inCompositionMode ? this.compositionStart : this.selectionStart, e4 = this._getCursorBoundaries(t3), s3 = this.get2DCursorLocation(t3), i3 = s3.lineIndex, r3 = s3.charIndex, n3 = this.getValueOfPropertyAt(i3, r3, "fontSize") * this.lineHeight, o3 = e4.leftOffset, a3 = this.getCanvasRetinaScaling(), h3 = this.canvas.upperCanvasEl, c3 = h3.width / a3, l3 = h3.height / a3, u3 = c3 - n3, d3 = l3 - n3, g3 = new ot(e4.left + o3, e4.top + e4.topOffset + n3).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new ot(h3.clientWidth / c3, h3.clientHeight / l3));
    return g3.x < 0 && (g3.x = 0), g3.x > u3 && (g3.x = u3), g3.y < 0 && (g3.y = 0), g3.y > d3 && (g3.y = d3), g3.x += this.canvas._offset.left, g3.y += this.canvas._offset.top, {
      left: "".concat(g3.x, "px"),
      top: "".concat(g3.y, "px"),
      fontSize: "".concat(n3, "px"),
      charHeight: n3
    };
  }
  _saveEditingProps() {
    this._savedProps = {
      hasControls: this.hasControls,
      borderColor: this.borderColor,
      lockMovementX: this.lockMovementX,
      lockMovementY: this.lockMovementY,
      hoverCursor: this.hoverCursor,
      selectable: this.selectable,
      defaultCursor: this.canvas && this.canvas.defaultCursor,
      moveCursor: this.canvas && this.canvas.moveCursor
    };
  }
  _restoreEditingProps() {
    this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor || this.canvas.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor || this.canvas.moveCursor), delete this._savedProps);
  }
  _exitEditing() {
    const t3 = this.hiddenTextarea;
    this.selected = false, this.isEditing = false, t3 && (t3.blur && t3.blur(), t3.parentNode && t3.parentNode.removeChild(t3)), this.hiddenTextarea = null, this.abortCursorAnimation(), this.selectionStart !== this.selectionEnd && this.clearContextTop();
  }
  exitEditingImpl() {
    this._exitEditing(), this.selectionEnd = this.selectionStart, this._restoreEditingProps(), this._forceClearCache && (this.initDimensions(), this.setCoords());
  }
  exitEditing() {
    const t3 = this._textBeforeEdit !== this.text;
    return this.exitEditingImpl(), this.fire("editing:exited"), t3 && this.fire(Q), this.canvas && (this.canvas.fire("text:editing:exited", {
      target: this
    }), t3 && this.canvas.fire("object:modified", {
      target: this
    })), this;
  }
  _removeExtraneousStyles() {
    for (const t3 in this.styles) this._textLines[t3] || delete this.styles[t3];
  }
  removeStyleFromTo(t3, e4) {
    const { lineIndex: s3, charIndex: i3 } = this.get2DCursorLocation(t3, true), { lineIndex: r3, charIndex: n3 } = this.get2DCursorLocation(e4, true);
    if (s3 !== r3) {
      if (this.styles[s3]) for (let t4 = i3; t4 < this._unwrappedTextLines[s3].length; t4++) delete this.styles[s3][t4];
      if (this.styles[r3]) for (let t4 = n3; t4 < this._unwrappedTextLines[r3].length; t4++) {
        const e5 = this.styles[r3][t4];
        e5 && (this.styles[s3] || (this.styles[s3] = {}), this.styles[s3][i3 + t4 - n3] = e5);
      }
      for (let t4 = s3 + 1; t4 <= r3; t4++) delete this.styles[t4];
      this.shiftLineStyles(r3, s3 - r3);
    } else if (this.styles[s3]) {
      const t4 = this.styles[s3], e5 = n3 - i3;
      for (let e6 = i3; e6 < n3; e6++) delete t4[e6];
      for (const i4 in this.styles[s3]) {
        const s4 = parseInt(i4, 10);
        s4 >= n3 && (t4[s4 - e5] = t4[i4], delete t4[i4]);
      }
    }
  }
  shiftLineStyles(t3, e4) {
    const s3 = Object.assign({}, this.styles);
    for (const i3 in this.styles) {
      const r3 = parseInt(i3, 10);
      r3 > t3 && (this.styles[r3 + e4] = s3[r3], s3[r3 - e4] || delete this.styles[r3]);
    }
  }
  insertNewlineStyleObject(t3, e4, i3, r3) {
    const n3 = {}, o3 = this._unwrappedTextLines[t3].length, a3 = o3 === e4;
    let h3 = false;
    i3 || (i3 = 1), this.shiftLineStyles(t3, i3);
    const c3 = this.styles[t3] ? this.styles[t3][0 === e4 ? e4 : e4 - 1] : void 0;
    for (const s3 in this.styles[t3]) {
      const i4 = parseInt(s3, 10);
      i4 >= e4 && (h3 = true, n3[i4 - e4] = this.styles[t3][s3], a3 && 0 === e4 || delete this.styles[t3][s3]);
    }
    let l3 = false;
    for (h3 && !a3 && (this.styles[t3 + i3] = n3, l3 = true), (l3 || o3 > e4) && i3--; i3 > 0; ) r3 && r3[i3 - 1] ? this.styles[t3 + i3] = {
      0: s({}, r3[i3 - 1])
    } : c3 ? this.styles[t3 + i3] = {
      0: s({}, c3)
    } : delete this.styles[t3 + i3], i3--;
    this._forceClearCache = true;
  }
  insertCharStyleObject(t3, e4, i3, r3) {
    this.styles || (this.styles = {});
    const n3 = this.styles[t3], o3 = n3 ? s({}, n3) : {};
    i3 || (i3 = 1);
    for (const t4 in o3) {
      const s3 = parseInt(t4, 10);
      s3 >= e4 && (n3[s3 + i3] = o3[s3], o3[s3 - i3] || delete n3[s3]);
    }
    if (this._forceClearCache = true, r3) {
      for (; i3--; ) Object.keys(r3[i3]).length && (this.styles[t3] || (this.styles[t3] = {}), this.styles[t3][e4 + i3] = s({}, r3[i3]));
      return;
    }
    if (!n3) return;
    const a3 = n3[e4 ? e4 - 1 : 1];
    for (; a3 && i3--; ) this.styles[t3][e4 + i3] = s({}, a3);
  }
  insertNewStyleBlock(t3, e4, s3) {
    const i3 = this.get2DCursorLocation(e4, true), r3 = [
      0
    ];
    let n3, o3 = 0;
    for (let e5 = 0; e5 < t3.length; e5++) "\n" === t3[e5] ? (o3++, r3[o3] = 0) : r3[o3]++;
    for (r3[0] > 0 && (this.insertCharStyleObject(i3.lineIndex, i3.charIndex, r3[0], s3), s3 = s3 && s3.slice(r3[0] + 1)), o3 && this.insertNewlineStyleObject(i3.lineIndex, i3.charIndex + r3[0], o3), n3 = 1; n3 < o3; n3++) r3[n3] > 0 ? this.insertCharStyleObject(i3.lineIndex + n3, 0, r3[n3], s3) : s3 && this.styles[i3.lineIndex + n3] && s3[0] && (this.styles[i3.lineIndex + n3][0] = s3[0]), s3 = s3 && s3.slice(r3[n3] + 1);
    r3[n3] > 0 && this.insertCharStyleObject(i3.lineIndex + n3, 0, r3[n3], s3);
  }
  removeChars(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t3 + 1;
    this.removeStyleFromTo(t3, e4), this._text.splice(t3, e4 - t3), this.text = this._text.join(""), this.set("dirty", true), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
  }
  insertChars(t3, e4, s3) {
    let i3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s3;
    i3 > s3 && this.removeStyleFromTo(s3, i3);
    const r3 = this.graphemeSplit(t3);
    this.insertNewStyleBlock(r3, s3, e4), this._text = [
      ...this._text.slice(0, s3),
      ...r3,
      ...this._text.slice(i3)
    ], this.text = this._text.join(""), this.set("dirty", true), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
  }
  setSelectionStartEndWithShift(t3, e4, s3) {
    s3 <= t3 ? (e4 === t3 ? this._selectionDirection = M : this._selectionDirection === A && (this._selectionDirection = M, this.selectionEnd = t3), this.selectionStart = s3) : s3 > t3 && s3 < e4 ? this._selectionDirection === A ? this.selectionEnd = s3 : this.selectionStart = s3 : (e4 === t3 ? this._selectionDirection = A : this._selectionDirection === M && (this._selectionDirection = A, this.selectionStart = e4), this.selectionEnd = s3);
  }
};
var Lo = class extends Fo {
  initHiddenTextarea() {
    const t3 = this.canvas && Kt(this.canvas.getElement()) || m(), e4 = t3.createElement("textarea");
    Object.entries({
      autocapitalize: "off",
      autocorrect: "off",
      autocomplete: "off",
      spellcheck: "false",
      "data-fabric": "textarea",
      wrap: "off"
    }).map((t4) => {
      let [s4, i4] = t4;
      return e4.setAttribute(s4, i4);
    });
    const { top: s3, left: i3, fontSize: r3 } = this._calcTextareaPosition();
    e4.style.cssText = "position: absolute; top: ".concat(s3, "; left: ").concat(i3, "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ").concat(r3, ";"), (this.hiddenTextareaContainer || t3.body).appendChild(e4), Object.entries({
      blur: "blur",
      keydown: "onKeyDown",
      keyup: "onKeyUp",
      input: "onInput",
      copy: "copy",
      cut: "copy",
      paste: "paste",
      compositionstart: "onCompositionStart",
      compositionupdate: "onCompositionUpdate",
      compositionend: "onCompositionEnd"
    }).map((t4) => {
      let [s4, i4] = t4;
      return e4.addEventListener(s4, this[i4].bind(this));
    }), this.hiddenTextarea = e4;
  }
  blur() {
    this.abortCursorAnimation();
  }
  onKeyDown(t3) {
    if (!this.isEditing) return;
    const e4 = "rtl" === this.direction ? this.keysMapRtl : this.keysMap;
    if (t3.keyCode in e4) this[e4[t3.keyCode]](t3);
    else {
      if (!(t3.keyCode in this.ctrlKeysMapDown) || !t3.ctrlKey && !t3.metaKey) return;
      this[this.ctrlKeysMapDown[t3.keyCode]](t3);
    }
    t3.stopImmediatePropagation(), t3.preventDefault(), t3.keyCode >= 33 && t3.keyCode <= 40 ? (this.inCompositionMode = false, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
  }
  onKeyUp(t3) {
    !this.isEditing || this._copyDone || this.inCompositionMode ? this._copyDone = false : t3.keyCode in this.ctrlKeysMapUp && (t3.ctrlKey || t3.metaKey) && (this[this.ctrlKeysMapUp[t3.keyCode]](t3), t3.stopImmediatePropagation(), t3.preventDefault(), this.canvas && this.canvas.requestRenderAll());
  }
  onInput(t3) {
    const e4 = this.fromPaste, { value: s3, selectionStart: i3, selectionEnd: r3 } = this.hiddenTextarea;
    if (this.fromPaste = false, t3 && t3.stopPropagation(), !this.isEditing) return;
    const n3 = () => {
      this.updateFromTextArea(), this.fire(G), this.canvas && (this.canvas.fire("text:changed", {
        target: this
      }), this.canvas.requestRenderAll());
    };
    if ("" === this.hiddenTextarea.value) return this.styles = {}, void n3();
    const a3 = this._splitTextIntoLines(s3).graphemeText, h3 = this._text.length, c3 = a3.length, l3 = this.selectionStart, u3 = this.selectionEnd, d3 = l3 !== u3;
    let g3, f2, m3, v3, y3 = c3 - h3;
    const _3 = this.fromStringToGraphemeSelection(i3, r3, s3), x3 = l3 > _3.selectionStart;
    d3 ? (f2 = this._text.slice(l3, u3), y3 += u3 - l3) : c3 < h3 && (f2 = x3 ? this._text.slice(u3 + y3, u3) : this._text.slice(l3, l3 - y3));
    const C3 = a3.slice(_3.selectionEnd - y3, _3.selectionEnd);
    if (f2 && f2.length && (C3.length && (g3 = this.getSelectionStyles(l3, l3 + 1, false), g3 = C3.map(() => g3[0])), d3 ? (m3 = l3, v3 = u3) : x3 ? (m3 = u3 - f2.length, v3 = u3) : (m3 = u3, v3 = u3 + f2.length), this.removeStyleFromTo(m3, v3)), C3.length) {
      const { copyPasteData: t4 } = p();
      e4 && C3.join("") === t4.copiedText && !o.disableStyleCopyPaste && (g3 = t4.copiedTextStyle), this.insertNewStyleBlock(C3, l3, g3);
    }
    n3();
  }
  onCompositionStart() {
    this.inCompositionMode = true;
  }
  onCompositionEnd() {
    this.inCompositionMode = false;
  }
  onCompositionUpdate(t3) {
    let { target: e4 } = t3;
    const { selectionStart: s3, selectionEnd: i3 } = e4;
    this.compositionStart = s3, this.compositionEnd = i3, this.updateTextareaPosition();
  }
  copy() {
    if (this.selectionStart === this.selectionEnd) return;
    const { copyPasteData: t3 } = p();
    t3.copiedText = this.getSelectedText(), o.disableStyleCopyPaste ? t3.copiedTextStyle = void 0 : t3.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, true), this._copyDone = true;
  }
  paste() {
    this.fromPaste = true;
  }
  _getWidthBeforeCursor(t3, e4) {
    let s3, i3 = this._getLineLeftOffset(t3);
    return e4 > 0 && (s3 = this.__charBounds[t3][e4 - 1], i3 += s3.left + s3.width), i3;
  }
  getDownCursorOffset(t3, e4) {
    const s3 = this._getSelectionForOffset(t3, e4), i3 = this.get2DCursorLocation(s3), r3 = i3.lineIndex;
    if (r3 === this._textLines.length - 1 || t3.metaKey || 34 === t3.keyCode) return this._text.length - s3;
    const n3 = i3.charIndex, o3 = this._getWidthBeforeCursor(r3, n3), a3 = this._getIndexOnLine(r3 + 1, o3);
    return this._textLines[r3].slice(n3).length + a3 + 1 + this.missingNewlineOffset(r3);
  }
  _getSelectionForOffset(t3, e4) {
    return t3.shiftKey && this.selectionStart !== this.selectionEnd && e4 ? this.selectionEnd : this.selectionStart;
  }
  getUpCursorOffset(t3, e4) {
    const s3 = this._getSelectionForOffset(t3, e4), i3 = this.get2DCursorLocation(s3), r3 = i3.lineIndex;
    if (0 === r3 || t3.metaKey || 33 === t3.keyCode) return -s3;
    const n3 = i3.charIndex, o3 = this._getWidthBeforeCursor(r3, n3), a3 = this._getIndexOnLine(r3 - 1, o3), h3 = this._textLines[r3].slice(0, n3), c3 = this.missingNewlineOffset(r3 - 1);
    return -this._textLines[r3 - 1].length + a3 - h3.length + (1 - c3);
  }
  _getIndexOnLine(t3, e4) {
    const s3 = this._textLines[t3];
    let i3, r3, n3 = this._getLineLeftOffset(t3), o3 = 0;
    for (let a3 = 0, h3 = s3.length; a3 < h3; a3++) if (i3 = this.__charBounds[t3][a3].width, n3 += i3, n3 > e4) {
      r3 = true;
      const t4 = n3 - i3, s4 = n3, h4 = Math.abs(t4 - e4);
      o3 = Math.abs(s4 - e4) < h4 ? a3 : a3 - 1;
      break;
    }
    return r3 || (o3 = s3.length - 1), o3;
  }
  moveCursorDown(t3) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", t3);
  }
  moveCursorUp(t3) {
    0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorUpOrDown("Up", t3);
  }
  _moveCursorUpOrDown(t3, e4) {
    const s3 = this["get".concat(t3, "CursorOffset")](e4, this._selectionDirection === A);
    if (e4.shiftKey ? this.moveCursorWithShift(s3) : this.moveCursorWithoutShift(s3), 0 !== s3) {
      const t4 = this.text.length;
      this.selectionStart = ks(0, this.selectionStart, t4), this.selectionEnd = ks(0, this.selectionEnd, t4), this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea();
    }
  }
  moveCursorWithShift(t3) {
    const e4 = this._selectionDirection === M ? this.selectionStart + t3 : this.selectionEnd + t3;
    return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e4), 0 !== t3;
  }
  moveCursorWithoutShift(t3) {
    return t3 < 0 ? (this.selectionStart += t3, this.selectionEnd = this.selectionStart) : (this.selectionEnd += t3, this.selectionStart = this.selectionEnd), 0 !== t3;
  }
  moveCursorLeft(t3) {
    0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorLeftOrRight("Left", t3);
  }
  _move(t3, e4, s3) {
    let i3;
    if (t3.altKey) i3 = this["findWordBoundary".concat(s3)](this[e4]);
    else {
      if (!t3.metaKey && 35 !== t3.keyCode && 36 !== t3.keyCode) return this[e4] += "Left" === s3 ? -1 : 1, true;
      i3 = this["findLineBoundary".concat(s3)](this[e4]);
    }
    return void 0 !== i3 && this[e4] !== i3 && (this[e4] = i3, true);
  }
  _moveLeft(t3, e4) {
    return this._move(t3, e4, "Left");
  }
  _moveRight(t3, e4) {
    return this._move(t3, e4, "Right");
  }
  moveCursorLeftWithoutShift(t3) {
    let e4 = true;
    return this._selectionDirection = M, this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (e4 = this._moveLeft(t3, "selectionStart")), this.selectionEnd = this.selectionStart, e4;
  }
  moveCursorLeftWithShift(t3) {
    return this._selectionDirection === A && this.selectionStart !== this.selectionEnd ? this._moveLeft(t3, "selectionEnd") : 0 !== this.selectionStart ? (this._selectionDirection = M, this._moveLeft(t3, "selectionStart")) : void 0;
  }
  moveCursorRight(t3) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", t3);
  }
  _moveCursorLeftOrRight(t3, e4) {
    const s3 = "moveCursor".concat(t3).concat(e4.shiftKey ? "WithShift" : "WithoutShift");
    this._currentCursorOpacity = 1, this[s3](e4) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  }
  moveCursorRightWithShift(t3) {
    return this._selectionDirection === M && this.selectionStart !== this.selectionEnd ? this._moveRight(t3, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = A, this._moveRight(t3, "selectionEnd")) : void 0;
  }
  moveCursorRightWithoutShift(t3) {
    let e4 = true;
    return this._selectionDirection = A, this.selectionStart === this.selectionEnd ? (e4 = this._moveRight(t3, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, e4;
  }
};
var Ro = (t3) => !!t3.button;
var Bo = class extends Lo {
  constructor() {
    super(...arguments), t(this, "draggableTextDelegate", void 0);
  }
  initBehavior() {
    this.on("mousedown", this._mouseDownHandler), this.on("mouseup", this.mouseUpHandler), this.on("mousedblclick", this.doubleClickHandler), this.on("mousetripleclick", this.tripleClickHandler), this.draggableTextDelegate = new Ao(this), super.initBehavior();
  }
  shouldStartDragging() {
    return this.draggableTextDelegate.isActive();
  }
  onDragStart(t3) {
    return this.draggableTextDelegate.onDragStart(t3);
  }
  canDrop(t3) {
    return this.draggableTextDelegate.canDrop(t3);
  }
  doubleClickHandler(t3) {
    this.isEditing && (this.selectWord(this.getSelectionStartFromPointer(t3.e)), this.renderCursorOrSelection());
  }
  tripleClickHandler(t3) {
    this.isEditing && (this.selectLine(this.getSelectionStartFromPointer(t3.e)), this.renderCursorOrSelection());
  }
  _mouseDownHandler(t3) {
    let { e: e4, alreadySelected: s3 } = t3;
    this.canvas && this.editable && !Ro(e4) && !this.getActiveControl() && (this.draggableTextDelegate.start(e4) || (this.canvas.textEditingManager.register(this), s3 && (this.inCompositionMode = false, this.setCursorByClick(e4)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()), this.selected || (this.selected = s3 || this.isEditing)));
  }
  mouseUpHandler(t3) {
    let { e: e4, transform: s3 } = t3;
    const i3 = this.draggableTextDelegate.end(e4);
    if (this.canvas) {
      this.canvas.textEditingManager.unregister(this);
      const t4 = this.canvas._activeObject;
      if (t4 && t4 !== this) return;
    }
    !this.editable || this.group && !this.group.interactive || s3 && s3.actionPerformed || Ro(e4) || i3 || this.selected && !this.getActiveControl() && (this.enterEditing(e4), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(true) : this.renderCursorOrSelection());
  }
  setCursorByClick(t3) {
    const e4 = this.getSelectionStartFromPointer(t3), s3 = this.selectionStart, i3 = this.selectionEnd;
    t3.shiftKey ? this.setSelectionStartEndWithShift(s3, i3, e4) : (this.selectionStart = e4, this.selectionEnd = e4), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
  }
  getSelectionStartFromPointer(t3) {
    const e4 = this.canvas.getScenePoint(t3).transform(wt(this.calcTransformMatrix())).add(new ot(-this._getLeftOffset(), -this._getTopOffset()));
    let s3 = 0, i3 = 0, r3 = 0;
    for (let t4 = 0; t4 < this._textLines.length && s3 <= e4.y; t4++) s3 += this.getHeightOfLine(t4), r3 = t4, t4 > 0 && (i3 += this._textLines[t4 - 1].length + this.missingNewlineOffset(t4 - 1));
    let n3 = Math.abs(this._getLineLeftOffset(r3));
    const o3 = this._textLines[r3].length, a3 = this.__charBounds[r3];
    for (let t4 = 0; t4 < o3; t4++) {
      const s4 = n3 + a3[t4].kernedWidth;
      if (e4.x <= s4) {
        Math.abs(e4.x - s4) <= Math.abs(e4.x - n3) && i3++;
        break;
      }
      n3 = s4, i3++;
    }
    return Math.min(this.flipX ? o3 - i3 : i3, this._text.length);
  }
};
var Io = "moveCursorUp";
var Xo = "moveCursorDown";
var Wo = "moveCursorLeft";
var Yo = "moveCursorRight";
var Vo = "exitEditing";
var Go = (t3, e4) => {
  const s3 = e4.getRetinaScaling();
  t3.setTransform(s3, 0, 0, s3, 0, 0);
  const i3 = e4.viewportTransform;
  t3.transform(i3[0], i3[1], i3[2], i3[3], i3[4], i3[5]);
};
var zo = s({
  selectionStart: 0,
  selectionEnd: 0,
  selectionColor: "rgba(17,119,255,0.3)",
  isEditing: false,
  editable: true,
  editingBorderColor: "rgba(102,153,255,0.25)",
  cursorWidth: 2,
  cursorColor: "",
  cursorDelay: 1e3,
  cursorDuration: 600,
  caching: true,
  hiddenTextareaContainer: null,
  keysMap: {
    9: Vo,
    27: Vo,
    33: Io,
    34: Xo,
    35: Yo,
    36: Wo,
    37: Wo,
    38: Io,
    39: Yo,
    40: Xo
  },
  keysMapRtl: {
    9: Vo,
    27: Vo,
    33: Io,
    34: Xo,
    35: Wo,
    36: Yo,
    37: Yo,
    38: Io,
    39: Wo,
    40: Xo
  },
  ctrlKeysMapDown: {
    65: "cmdAll"
  },
  ctrlKeysMapUp: {
    67: "copy",
    88: "cut"
  }
}, {
  _selectionDirection: null,
  _reSpace: /\s|\r?\n/,
  inCompositionMode: false
});
var Ho = class _Ho extends Bo {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _Ho.ownDefaults);
  }
  get type() {
    const t3 = super.type;
    return "itext" === t3 ? "i-text" : t3;
  }
  constructor(t3, e4) {
    super(t3, s(s({}, _Ho.ownDefaults), e4)), this.initBehavior();
  }
  _set(t3, e4) {
    return this.isEditing && this._savedProps && t3 in this._savedProps ? (this._savedProps[t3] = e4, this) : ("canvas" === t3 && (this.canvas instanceof Bn && this.canvas.textEditingManager.remove(this), e4 instanceof Bn && e4.textEditingManager.add(this)), super._set(t3, e4));
  }
  setSelectionStart(t3) {
    t3 = Math.max(t3, 0), this._updateAndFire("selectionStart", t3);
  }
  setSelectionEnd(t3) {
    t3 = Math.min(t3, this.text.length), this._updateAndFire("selectionEnd", t3);
  }
  _updateAndFire(t3, e4) {
    this[t3] !== e4 && (this._fireSelectionChanged(), this[t3] = e4), this._updateTextarea();
  }
  _fireSelectionChanged() {
    this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", {
      target: this
    });
  }
  initDimensions() {
    this.isEditing && this.initDelayedCursor(), super.initDimensions();
  }
  getSelectionStyles() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart || 0, e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionEnd, s3 = arguments.length > 2 ? arguments[2] : void 0;
    return super.getSelectionStyles(t3, e4, s3);
  }
  setSelectionStyles(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionStart || 0, s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.selectionEnd;
    return super.setSelectionStyles(t3, e4, s3);
  }
  get2DCursorLocation() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart, e4 = arguments.length > 1 ? arguments[1] : void 0;
    return super.get2DCursorLocation(t3, e4);
  }
  render(t3) {
    super.render(t3), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
  }
  toCanvasElement(t3) {
    const e4 = this.isEditing;
    this.isEditing = false;
    const s3 = super.toCanvasElement(t3);
    return this.isEditing = e4, s3;
  }
  renderCursorOrSelection() {
    if (!this.isEditing || !this.canvas) return;
    const t3 = this.clearContextTop(true);
    if (!t3) return;
    const e4 = this._getCursorBoundaries(), s3 = this.findAncestorsWithClipPath(), i3 = s3.length > 0;
    let r3, n3 = t3;
    if (i3) {
      r3 = vt(t3.canvas), n3 = r3.getContext("2d"), Go(n3, this.canvas);
      const e5 = this.calcTransformMatrix();
      n3.transform(e5[0], e5[1], e5[2], e5[3], e5[4], e5[5]);
    }
    if (this.selectionStart !== this.selectionEnd || this.inCompositionMode ? this.renderSelection(n3, e4) : this.renderCursor(n3, e4), i3) for (const e5 of s3) {
      const s4 = e5.clipPath, i4 = vt(t3.canvas), r4 = i4.getContext("2d");
      if (Go(r4, this.canvas), !s4.absolutePositioned) {
        const t4 = e5.calcTransformMatrix();
        r4.transform(t4[0], t4[1], t4[2], t4[3], t4[4], t4[5]);
      }
      s4.transform(r4), s4.drawObject(r4, true, {}), this.drawClipPathOnCache(n3, s4, i4);
    }
    i3 && (t3.setTransform(1, 0, 0, 1, 0, 0), t3.drawImage(r3, 0, 0)), this.canvas.contextTopDirty = true, t3.restore();
  }
  findAncestorsWithClipPath() {
    const t3 = [];
    let e4 = this;
    for (; e4; ) e4.clipPath && t3.push(e4), e4 = e4.parent;
    return t3;
  }
  _getCursorBoundaries() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart, e4 = arguments.length > 1 ? arguments[1] : void 0;
    const s3 = this._getLeftOffset(), i3 = this._getTopOffset(), r3 = this._getCursorBoundariesOffsets(t3, e4);
    return {
      left: s3,
      top: i3,
      leftOffset: r3.left,
      topOffset: r3.top
    };
  }
  _getCursorBoundariesOffsets(t3, e4) {
    return e4 ? this.__getCursorBoundariesOffsets(t3) : this.cursorOffsetCache && "top" in this.cursorOffsetCache ? this.cursorOffsetCache : this.cursorOffsetCache = this.__getCursorBoundariesOffsets(t3);
  }
  __getCursorBoundariesOffsets(t3) {
    let e4 = 0, s3 = 0;
    const { charIndex: i3, lineIndex: r3 } = this.get2DCursorLocation(t3);
    for (let t4 = 0; t4 < r3; t4++) e4 += this.getHeightOfLine(t4);
    const n3 = this._getLineLeftOffset(r3), o3 = this.__charBounds[r3][i3];
    o3 && (s3 = o3.left), 0 !== this.charSpacing && i3 === this._textLines[r3].length && (s3 -= this._getWidthOfCharSpacing());
    const a3 = {
      top: e4,
      left: n3 + (s3 > 0 ? s3 : 0)
    };
    return "rtl" === this.direction && (this.textAlign === A || this.textAlign === qe || this.textAlign === Je ? a3.left *= -1 : this.textAlign === M || this.textAlign === Ke ? a3.left = n3 - (s3 > 0 ? s3 : 0) : this.textAlign !== D && this.textAlign !== Qe || (a3.left = n3 - (s3 > 0 ? s3 : 0))), a3;
  }
  renderCursorAt(t3) {
    this._renderCursor(this.canvas.contextTop, this._getCursorBoundaries(t3, true), t3);
  }
  renderCursor(t3, e4) {
    this._renderCursor(t3, e4, this.selectionStart);
  }
  getCursorRenderingData() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart, e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getCursorBoundaries(t3);
    const s3 = this.get2DCursorLocation(t3), i3 = s3.lineIndex, r3 = s3.charIndex > 0 ? s3.charIndex - 1 : 0, n3 = this.getValueOfPropertyAt(i3, r3, "fontSize"), o3 = this.getObjectScaling().x * this.canvas.getZoom(), a3 = this.cursorWidth / o3, h3 = this.getValueOfPropertyAt(i3, r3, "deltaY"), c3 = e4.topOffset + (1 - this._fontSizeFraction) * this.getHeightOfLine(i3) / this.lineHeight - n3 * (1 - this._fontSizeFraction);
    return {
      color: this.cursorColor || this.getValueOfPropertyAt(i3, r3, "fill"),
      opacity: this._currentCursorOpacity,
      left: e4.left + e4.leftOffset - a3 / 2,
      top: c3 + e4.top + h3,
      width: a3,
      height: n3
    };
  }
  _renderCursor(t3, e4, s3) {
    const { color: i3, opacity: r3, left: n3, top: o3, width: a3, height: h3 } = this.getCursorRenderingData(s3, e4);
    t3.fillStyle = i3, t3.globalAlpha = r3, t3.fillRect(n3, o3, a3, h3);
  }
  renderSelection(t3, e4) {
    const s3 = {
      selectionStart: this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart,
      selectionEnd: this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd
    };
    this._renderSelection(t3, s3, e4);
  }
  renderDragSourceEffect() {
    const t3 = this.draggableTextDelegate.getDragStartSelection();
    this._renderSelection(this.canvas.contextTop, t3, this._getCursorBoundaries(t3.selectionStart, true));
  }
  renderDropTargetEffect(t3) {
    const e4 = this.getSelectionStartFromPointer(t3);
    this.renderCursorAt(e4);
  }
  _renderSelection(t3, e4, s3) {
    const i3 = e4.selectionStart, r3 = e4.selectionEnd, n3 = this.textAlign.includes(qe), o3 = this.get2DCursorLocation(i3), a3 = this.get2DCursorLocation(r3), h3 = o3.lineIndex, c3 = a3.lineIndex, l3 = o3.charIndex < 0 ? 0 : o3.charIndex, u3 = a3.charIndex < 0 ? 0 : a3.charIndex;
    for (let e5 = h3; e5 <= c3; e5++) {
      const i4 = this._getLineLeftOffset(e5) || 0;
      let r4 = this.getHeightOfLine(e5), o4 = 0, a4 = 0, d3 = 0;
      if (e5 === h3 && (a4 = this.__charBounds[h3][l3].left), e5 >= h3 && e5 < c3) d3 = n3 && !this.isEndOfWrapping(e5) ? this.width : this.getLineWidth(e5) || 5;
      else if (e5 === c3) if (0 === u3) d3 = this.__charBounds[c3][u3].left;
      else {
        const t4 = this._getWidthOfCharSpacing();
        d3 = this.__charBounds[c3][u3 - 1].left + this.__charBounds[c3][u3 - 1].width - t4;
      }
      o4 = r4, (this.lineHeight < 1 || e5 === c3 && this.lineHeight > 1) && (r4 /= this.lineHeight);
      let g3 = s3.left + i4 + a4, f2 = r4, p3 = 0;
      const m3 = d3 - a4;
      this.inCompositionMode ? (t3.fillStyle = this.compositionColor || "black", f2 = 1, p3 = r4) : t3.fillStyle = this.selectionColor, "rtl" === this.direction && (this.textAlign === A || this.textAlign === qe || this.textAlign === Je ? g3 = this.width - g3 - m3 : this.textAlign === M || this.textAlign === Ke ? g3 = s3.left + i4 - d3 : this.textAlign !== D && this.textAlign !== Qe || (g3 = s3.left + i4 - d3)), t3.fillRect(g3, s3.top + s3.topOffset + p3, m3, f2), s3.topOffset += o4;
    }
  }
  getCurrentCharFontSize() {
    const t3 = this._getCurrentCharIndex();
    return this.getValueOfPropertyAt(t3.l, t3.c, "fontSize");
  }
  getCurrentCharColor() {
    const t3 = this._getCurrentCharIndex();
    return this.getValueOfPropertyAt(t3.l, t3.c, K);
  }
  _getCurrentCharIndex() {
    const t3 = this.get2DCursorLocation(this.selectionStart, true), e4 = t3.charIndex > 0 ? t3.charIndex - 1 : 0;
    return {
      l: t3.lineIndex,
      c: e4
    };
  }
  dispose() {
    this.exitEditingImpl(), this.draggableTextDelegate.dispose(), super.dispose();
  }
};
t(Ho, "ownDefaults", zo), t(Ho, "type", "IText"), tt.setClass(Ho), tt.setClass(Ho, "i-text");
var No = class _No extends Ho {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _No.ownDefaults);
  }
  constructor(t3, e4) {
    super(t3, s(s({}, _No.ownDefaults), e4));
  }
  static createControls() {
    return {
      controls: Pi()
    };
  }
  initDimensions() {
    this.initialized && (this.isEditing && this.initDelayedCursor(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.includes(qe) && this.enlargeSpaces(), this.height = this.calcTextHeight());
  }
  _generateStyleMap(t3) {
    let e4 = 0, s3 = 0, i3 = 0;
    const r3 = {};
    for (let n3 = 0; n3 < t3.graphemeLines.length; n3++) "\n" === t3.graphemeText[i3] && n3 > 0 ? (s3 = 0, i3++, e4++) : !this.splitByGrapheme && this._reSpaceAndTab.test(t3.graphemeText[i3]) && n3 > 0 && (s3++, i3++), r3[n3] = {
      line: e4,
      offset: s3
    }, i3 += t3.graphemeLines[n3].length, s3 += t3.graphemeLines[n3].length;
    return r3;
  }
  styleHas(t3, e4) {
    if (this._styleMap && !this.isWrapping) {
      const t4 = this._styleMap[e4];
      t4 && (e4 = t4.line);
    }
    return super.styleHas(t3, e4);
  }
  isEmptyStyles(t3) {
    if (!this.styles) return true;
    let e4, s3 = 0, i3 = t3 + 1, r3 = false;
    const n3 = this._styleMap[t3], o3 = this._styleMap[t3 + 1];
    n3 && (t3 = n3.line, s3 = n3.offset), o3 && (i3 = o3.line, r3 = i3 === t3, e4 = o3.offset);
    const a3 = void 0 === t3 ? this.styles : {
      line: this.styles[t3]
    };
    for (const t4 in a3) for (const i4 in a3[t4]) {
      const n4 = parseInt(i4, 10);
      if (n4 >= s3 && (!r3 || n4 < e4)) for (const e5 in a3[t4][i4]) return false;
    }
    return true;
  }
  _getStyleDeclaration(t3, e4) {
    if (this._styleMap && !this.isWrapping) {
      const s3 = this._styleMap[t3];
      if (!s3) return {};
      t3 = s3.line, e4 = s3.offset + e4;
    }
    return super._getStyleDeclaration(t3, e4);
  }
  _setStyleDeclaration(t3, e4, s3) {
    const i3 = this._styleMap[t3];
    super._setStyleDeclaration(i3.line, i3.offset + e4, s3);
  }
  _deleteStyleDeclaration(t3, e4) {
    const s3 = this._styleMap[t3];
    super._deleteStyleDeclaration(s3.line, s3.offset + e4);
  }
  _getLineStyle(t3) {
    const e4 = this._styleMap[t3];
    return !!this.styles[e4.line];
  }
  _setLineStyle(t3) {
    const e4 = this._styleMap[t3];
    super._setLineStyle(e4.line);
  }
  _wrapText(t3, e4) {
    this.isWrapping = true;
    const s3 = this.getGraphemeDataForRender(t3), i3 = [];
    for (let t4 = 0; t4 < s3.wordsData.length; t4++) i3.push(...this._wrapLine(t4, e4, s3));
    return this.isWrapping = false, i3;
  }
  getGraphemeDataForRender(t3) {
    const e4 = this.splitByGrapheme, s3 = e4 ? "" : " ";
    let i3 = 0;
    return {
      wordsData: t3.map((t4, r3) => {
        let n3 = 0;
        const o3 = e4 ? this.graphemeSplit(t4) : this.wordSplit(t4);
        return 0 === o3.length ? [
          {
            word: [],
            width: 0
          }
        ] : o3.map((t5) => {
          const o4 = e4 ? [
            t5
          ] : this.graphemeSplit(t5), a3 = this._measureWord(o4, r3, n3);
          return i3 = Math.max(a3, i3), n3 += o4.length + s3.length, {
            word: o4,
            width: a3
          };
        });
      }),
      largestWordWidth: i3
    };
  }
  _measureWord(t3, e4) {
    let s3, i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r3 = 0;
    for (let n3 = 0, o3 = t3.length; n3 < o3; n3++) {
      r3 += this._getGraphemeBox(t3[n3], e4, n3 + i3, s3, true).kernedWidth, s3 = t3[n3];
    }
    return r3;
  }
  wordSplit(t3) {
    return t3.split(this._wordJoiners);
  }
  _wrapLine(t3, e4, s3) {
    let { largestWordWidth: i3, wordsData: r3 } = s3, n3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    const o3 = this._getWidthOfCharSpacing(), a3 = this.splitByGrapheme, h3 = [], c3 = a3 ? "" : " ";
    let l3 = 0, u3 = [], d3 = 0, g3 = 0, f2 = true;
    e4 -= n3;
    const p3 = Math.max(e4, i3, this.dynamicMinWidth), m3 = r3[t3];
    let v3;
    for (d3 = 0, v3 = 0; v3 < m3.length; v3++) {
      const { word: e5, width: s4 } = m3[v3];
      d3 += e5.length, l3 += g3 + s4 - o3, l3 > p3 && !f2 ? (h3.push(u3), u3 = [], l3 = s4, f2 = true) : l3 += o3, f2 || a3 || u3.push(c3), u3 = u3.concat(e5), g3 = a3 ? 0 : this._measureWord([
        c3
      ], t3, d3), d3++, f2 = false;
    }
    return v3 && h3.push(u3), i3 + n3 > this.dynamicMinWidth && (this.dynamicMinWidth = i3 - o3 + n3), h3;
  }
  isEndOfWrapping(t3) {
    return !this._styleMap[t3 + 1] || this._styleMap[t3 + 1].line !== this._styleMap[t3].line;
  }
  missingNewlineOffset(t3, e4) {
    return this.splitByGrapheme && !e4 ? this.isEndOfWrapping(t3) ? 1 : 0 : 1;
  }
  _splitTextIntoLines(t3) {
    const e4 = super._splitTextIntoLines(t3), s3 = this._wrapText(e4.lines, this.width), i3 = new Array(s3.length);
    for (let t4 = 0; t4 < s3.length; t4++) i3[t4] = s3[t4].join("");
    return e4.lines = i3, e4.graphemeLines = s3, e4;
  }
  getMinWidth() {
    return Math.max(this.minWidth, this.dynamicMinWidth);
  }
  _removeExtraneousStyles() {
    const t3 = /* @__PURE__ */ new Map();
    for (const e4 in this._styleMap) {
      const s3 = parseInt(e4, 10);
      if (this._textLines[s3]) {
        const s4 = this._styleMap[e4].line;
        t3.set("".concat(s4), true);
      }
    }
    for (const e4 in this.styles) t3.has(e4) || delete this.styles[e4];
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([
      "minWidth",
      "splitByGrapheme",
      ...t3
    ]);
  }
};
t(No, "type", "Textbox"), t(No, "textLayoutProperties", [
  ...Ho.textLayoutProperties,
  "width"
]), t(No, "ownDefaults", {
  minWidth: 20,
  dynamicMinWidth: 2,
  lockScalingFlip: true,
  noScaleCache: false,
  _wordJoiners: /[ \t\r]/,
  splitByGrapheme: false
}), tt.setClass(No);
var Uo = class extends Br {
  shouldPerformLayout(t3) {
    return !!t3.target.clipPath && super.shouldPerformLayout(t3);
  }
  shouldLayoutClipPath() {
    return false;
  }
  calcLayoutResult(t3, e4) {
    const { target: s3 } = t3, { clipPath: i3, group: r3 } = s3;
    if (!i3 || !this.shouldPerformLayout(t3)) return;
    const { width: n3, height: o3 } = ae(Rr(s3, i3)), a3 = new ot(n3, o3);
    if (i3.absolutePositioned) {
      return {
        center: pe(i3.getRelativeCenterPoint(), void 0, r3 ? r3.calcTransformMatrix() : void 0),
        size: a3
      };
    }
    {
      const r4 = i3.getRelativeCenterPoint().transform(s3.calcOwnMatrix(), true);
      if (this.shouldPerformLayout(t3)) {
        const { center: s4 = new ot(), correction: i4 = new ot() } = this.calcBoundingBox(e4, t3) || {};
        return {
          center: s4.add(r4),
          correction: i4.subtract(r4),
          size: a3
        };
      }
      return {
        center: s3.getRelativeCenterPoint().add(r4),
        size: a3
      };
    }
  }
};
t(Uo, "type", "clip-path"), tt.setClass(Uo);
var qo = class extends Br {
  getInitialSize(t3, e4) {
    let { target: s3 } = t3, { size: i3 } = e4;
    return new ot(s3.width || i3.x, s3.height || i3.y);
  }
};
t(qo, "type", "fixed"), tt.setClass(qo);
var Ko = class extends Vr {
  subscribeTargets(t3) {
    const e4 = t3.target;
    t3.targets.reduce((t4, e5) => (e5.parent && t4.add(e5.parent), t4), /* @__PURE__ */ new Set()).forEach((t4) => {
      t4.layoutManager.subscribeTargets({
        target: t4,
        targets: [
          e4
        ]
      });
    });
  }
  unsubscribeTargets(t3) {
    const e4 = t3.target, s3 = e4.getObjects();
    t3.targets.reduce((t4, e5) => (e5.parent && t4.add(e5.parent), t4), /* @__PURE__ */ new Set()).forEach((t4) => {
      !s3.some((e5) => e5.parent === t4) && t4.layoutManager.unsubscribeTargets({
        target: t4,
        targets: [
          e4
        ]
      });
    });
  }
};
var Jo = class _Jo extends Hr {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _Jo.ownDefaults);
  }
  constructor() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, _Jo.ownDefaults), this.setOptions(e4);
    const { left: s3, top: i3, layoutManager: r3 } = e4;
    this.groupInit(t3, {
      left: s3,
      top: i3,
      layoutManager: null != r3 ? r3 : new Ko()
    });
  }
  _shouldSetNestedCoords() {
    return true;
  }
  __objectSelectionMonitor() {
  }
  multiSelectAdd() {
    for (var t3 = arguments.length, e4 = new Array(t3), s3 = 0; s3 < t3; s3++) e4[s3] = arguments[s3];
    "selection-order" === this.multiSelectionStacking ? this.add(...e4) : e4.forEach((t4) => {
      const e5 = this._objects.findIndex((e6) => e6.isInFrontOf(t4)), s4 = -1 === e5 ? this.size() : e5;
      this.insertAt(s4, t4);
    });
  }
  canEnterGroup(t3) {
    return this.getObjects().some((e4) => e4.isDescendantOf(t3) || t3.isDescendantOf(e4)) ? (a("error", "ActiveSelection: circular object trees are not supported, this call has no effect"), false) : super.canEnterGroup(t3);
  }
  enterGroup(t3, e4) {
    t3.parent && t3.parent === t3.group ? t3.parent._exitGroup(t3) : t3.group && t3.parent !== t3.group && t3.group.remove(t3), this._enterGroup(t3, e4);
  }
  exitGroup(t3, e4) {
    this._exitGroup(t3, e4), t3.parent && t3.parent._enterGroup(t3, true);
  }
  _onAfterObjectsChange(t3, e4) {
    super._onAfterObjectsChange(t3, e4);
    const s3 = /* @__PURE__ */ new Set();
    e4.forEach((t4) => {
      const { parent: e5 } = t4;
      e5 && s3.add(e5);
    }), t3 === Fr ? s3.forEach((t4) => {
      t4._onAfterObjectsChange(jr, e4);
    }) : s3.forEach((t4) => {
      t4._set("dirty", true);
    });
  }
  onDeselect() {
    return this.removeAll(), false;
  }
  toString() {
    return "#<ActiveSelection: (".concat(this.complexity(), ")>");
  }
  shouldCache() {
    return false;
  }
  isOnACache() {
    return false;
  }
  _renderControls(t3, e4, i3) {
    t3.save(), t3.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
    const r3 = s(s({
      hasControls: false
    }, i3), {}, {
      forActiveSelection: true
    });
    for (let e5 = 0; e5 < this._objects.length; e5++) this._objects[e5]._renderControls(t3, r3);
    super._renderControls(t3, e4), t3.restore();
  }
};
t(Jo, "type", "ActiveSelection"), t(Jo, "ownDefaults", {
  multiSelectionStacking: "canvas-stacking"
}), tt.setClass(Jo), tt.setClass(Jo, "activeSelection");
var Qo = class {
  constructor() {
    t(this, "resources", {});
  }
  applyFilters(t3, e4, s3, i3, r3) {
    const n3 = r3.getContext("2d");
    if (!n3) return;
    n3.drawImage(e4, 0, 0, s3, i3);
    const o3 = {
      sourceWidth: s3,
      sourceHeight: i3,
      imageData: n3.getImageData(0, 0, s3, i3),
      originalEl: e4,
      originalImageData: n3.getImageData(0, 0, s3, i3),
      canvasEl: r3,
      ctx: n3,
      filterBackend: this
    };
    t3.forEach((t4) => {
      t4.applyTo(o3);
    });
    const { imageData: a3 } = o3;
    return a3.width === s3 && a3.height === i3 || (r3.width = a3.width, r3.height = a3.height), n3.putImageData(a3, 0, 0), o3;
  }
};
var Zo = class {
  constructor() {
    let { tileSize: e4 = o.textureSize } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    t(this, "aPosition", new Float32Array([
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1
    ])), t(this, "resources", {}), this.tileSize = e4, this.setupGLContext(e4, e4), this.captureGPUInfo();
  }
  setupGLContext(t3, e4) {
    this.dispose(), this.createWebGLCanvas(t3, e4);
  }
  createWebGLCanvas(t3, e4) {
    const s3 = vt({
      width: t3,
      height: e4
    }), i3 = s3.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      depth: false,
      stencil: false,
      antialias: false
    });
    i3 && (i3.clearColor(0, 0, 0, 0), this.canvas = s3, this.gl = i3);
  }
  applyFilters(t3, e4, s3, i3, r3, n3) {
    const o3 = this.gl, a3 = r3.getContext("2d");
    if (!o3 || !a3) return;
    let h3;
    n3 && (h3 = this.getCachedTexture(n3, e4));
    const c3 = {
      originalWidth: e4.width || e4.naturalWidth || 0,
      originalHeight: e4.height || e4.naturalHeight || 0,
      sourceWidth: s3,
      sourceHeight: i3,
      destinationWidth: s3,
      destinationHeight: i3,
      context: o3,
      sourceTexture: this.createTexture(o3, s3, i3, h3 ? void 0 : e4),
      targetTexture: this.createTexture(o3, s3, i3),
      originalTexture: h3 || this.createTexture(o3, s3, i3, h3 ? void 0 : e4),
      passes: t3.length,
      webgl: true,
      aPosition: this.aPosition,
      programCache: this.programCache,
      pass: 0,
      filterBackend: this,
      targetCanvas: r3
    }, l3 = o3.createFramebuffer();
    return o3.bindFramebuffer(o3.FRAMEBUFFER, l3), t3.forEach((t4) => {
      t4 && t4.applyTo(c3);
    }), function(t4) {
      const e5 = t4.targetCanvas, s4 = e5.width, i4 = e5.height, r4 = t4.destinationWidth, n4 = t4.destinationHeight;
      s4 === r4 && i4 === n4 || (e5.width = r4, e5.height = n4);
    }(c3), this.copyGLTo2D(o3, c3), o3.bindTexture(o3.TEXTURE_2D, null), o3.deleteTexture(c3.sourceTexture), o3.deleteTexture(c3.targetTexture), o3.deleteFramebuffer(l3), a3.setTransform(1, 0, 0, 1, 0, 0), c3;
  }
  dispose() {
    this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
  }
  clearWebGLCaches() {
    this.programCache = {}, this.textureCache = {};
  }
  createTexture(t3, e4, s3, i3, r3) {
    const { NEAREST: n3, TEXTURE_2D: o3, RGBA: a3, UNSIGNED_BYTE: h3, CLAMP_TO_EDGE: c3, TEXTURE_MAG_FILTER: l3, TEXTURE_MIN_FILTER: u3, TEXTURE_WRAP_S: d3, TEXTURE_WRAP_T: g3 } = t3, f2 = t3.createTexture();
    return t3.bindTexture(o3, f2), t3.texParameteri(o3, l3, r3 || n3), t3.texParameteri(o3, u3, r3 || n3), t3.texParameteri(o3, d3, c3), t3.texParameteri(o3, g3, c3), i3 ? t3.texImage2D(o3, 0, a3, a3, h3, i3) : t3.texImage2D(o3, 0, a3, e4, s3, 0, a3, h3, null), f2;
  }
  getCachedTexture(t3, e4, s3) {
    const { textureCache: i3 } = this;
    if (i3[t3]) return i3[t3];
    {
      const r3 = this.createTexture(this.gl, e4.width, e4.height, e4, s3);
      return r3 && (i3[t3] = r3), r3;
    }
  }
  evictCachesForKey(t3) {
    this.textureCache[t3] && (this.gl.deleteTexture(this.textureCache[t3]), delete this.textureCache[t3]);
  }
  copyGLTo2D(t3, e4) {
    const s3 = t3.canvas, i3 = e4.targetCanvas, r3 = i3.getContext("2d");
    if (!r3) return;
    r3.translate(0, i3.height), r3.scale(1, -1);
    const n3 = s3.height - i3.height;
    r3.drawImage(s3, 0, n3, i3.width, i3.height, 0, 0, i3.width, i3.height);
  }
  copyGLTo2DPutImageData(t3, e4) {
    const s3 = e4.targetCanvas.getContext("2d"), i3 = e4.destinationWidth, r3 = e4.destinationHeight, n3 = i3 * r3 * 4;
    if (!s3) return;
    const o3 = new Uint8Array(this.imageBuffer, 0, n3), a3 = new Uint8ClampedArray(this.imageBuffer, 0, n3);
    t3.readPixels(0, 0, i3, r3, t3.RGBA, t3.UNSIGNED_BYTE, o3);
    const h3 = new ImageData(a3, i3, r3);
    s3.putImageData(h3, 0, 0);
  }
  captureGPUInfo() {
    if (this.gpuInfo) return this.gpuInfo;
    const t3 = this.gl, e4 = {
      renderer: "",
      vendor: ""
    };
    if (!t3) return e4;
    const s3 = t3.getExtension("WEBGL_debug_renderer_info");
    if (s3) {
      const i3 = t3.getParameter(s3.UNMASKED_RENDERER_WEBGL), r3 = t3.getParameter(s3.UNMASKED_VENDOR_WEBGL);
      i3 && (e4.renderer = i3.toLowerCase()), r3 && (e4.vendor = r3.toLowerCase());
    }
    return this.gpuInfo = e4, e4;
  }
};
var $o;
function ta() {
  const { WebGLProbe: t3 } = p();
  return t3.queryWebGL(pt()), o.enableGLFiltering && t3.isSupported(o.textureSize) ? new Zo({
    tileSize: o.textureSize
  }) : new Qo();
}
function ea() {
  return !$o && (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && ($o = ta()), $o;
}
var ia = [
  "filters",
  "resizeFilter",
  "src",
  "crossOrigin",
  "type"
];
var ra = [
  "cropX",
  "cropY"
];
var na = class _na extends ji {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _na.ownDefaults);
  }
  constructor(e4, s3) {
    super(), t(this, "_lastScaleX", 1), t(this, "_lastScaleY", 1), t(this, "_filterScalingX", 1), t(this, "_filterScalingY", 1), this.filters = [], Object.assign(this, _na.ownDefaults), this.setOptions(s3), this.cacheKey = "texture".concat(ft()), this.setElement("string" == typeof e4 ? (this.canvas && Kt(this.canvas.getElement()) || m()).getElementById(e4) : e4, s3);
  }
  getElement() {
    return this._element;
  }
  setElement(t3) {
    var e4;
    let s3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.removeTexture(this.cacheKey), this.removeTexture("".concat(this.cacheKey, "_filtered")), this._element = t3, this._originalElement = t3, this._setWidthHeight(s3), null === (e4 = t3.classList) || void 0 === e4 || e4.add(_na.CSS_CANVAS), 0 !== this.filters.length && this.applyFilters(), this.resizeFilter && this.applyResizeFilters();
  }
  removeTexture(t3) {
    const e4 = ea(false);
    e4 instanceof Zo && e4.evictCachesForKey(t3);
  }
  dispose() {
    super.dispose(), this.removeTexture(this.cacheKey), this.removeTexture("".concat(this.cacheKey, "_filtered")), this._cacheContext = null, [
      "_originalElement",
      "_element",
      "_filteredEl",
      "_cacheCanvas"
    ].forEach((t3) => {
      const e4 = this[t3];
      e4 && p().dispose(e4), this[t3] = void 0;
    });
  }
  getCrossOrigin() {
    return this._originalElement && (this._originalElement.crossOrigin || null);
  }
  getOriginalSize() {
    const t3 = this.getElement();
    return t3 ? {
      width: t3.naturalWidth || t3.width,
      height: t3.naturalHeight || t3.height
    } : {
      width: 0,
      height: 0
    };
  }
  _stroke(t3) {
    if (!this.stroke || 0 === this.strokeWidth) return;
    const e4 = this.width / 2, s3 = this.height / 2;
    t3.beginPath(), t3.moveTo(-e4, -s3), t3.lineTo(e4, -s3), t3.lineTo(e4, s3), t3.lineTo(-e4, s3), t3.lineTo(-e4, -s3), t3.closePath();
  }
  toObject() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e4 = [];
    return this.filters.forEach((t4) => {
      t4 && e4.push(t4.toObject());
    }), s(s({}, super.toObject([
      ...ra,
      ...t3
    ])), {}, {
      src: this.getSrc(),
      crossOrigin: this.getCrossOrigin(),
      filters: e4
    }, this.resizeFilter ? {
      resizeFilter: this.resizeFilter.toObject()
    } : {});
  }
  hasCrop() {
    return !!this.cropX || !!this.cropY || this.width < this._element.width || this.height < this._element.height;
  }
  _toSVG() {
    const t3 = [], e4 = this._element, s3 = -this.width / 2, i3 = -this.height / 2;
    let r3 = [], n3 = [], o3 = "", a3 = "";
    if (!e4) return [];
    if (this.hasCrop()) {
      const t4 = ft();
      r3.push('<clipPath id="imageCrop_' + t4 + '">\n', '	<rect x="' + s3 + '" y="' + i3 + '" width="' + this.width + '" height="' + this.height + '" />\n', "</clipPath>\n"), o3 = ' clip-path="url(#imageCrop_' + t4 + ')" ';
    }
    if (this.imageSmoothing || (a3 = ' image-rendering="optimizeSpeed"'), t3.push("	<image ", "COMMON_PARTS", 'xlink:href="'.concat(this.getSvgSrc(true), '" x="').concat(s3 - this.cropX, '" y="').concat(i3 - this.cropY, '" width="').concat(e4.width || e4.naturalWidth, '" height="').concat(e4.height || e4.naturalHeight, '"').concat(a3).concat(o3, "></image>\n")), this.stroke || this.strokeDashArray) {
      const t4 = this.fill;
      this.fill = null, n3 = [
        '	<rect x="'.concat(s3, '" y="').concat(i3, '" width="').concat(this.width, '" height="').concat(this.height, '" style="').concat(this.getSvgStyles(), '" />\n')
      ], this.fill = t4;
    }
    return r3 = this.paintFirst !== K ? r3.concat(n3, t3) : r3.concat(t3, n3), r3;
  }
  getSrc(t3) {
    const e4 = t3 ? this._element : this._originalElement;
    return e4 ? e4.toDataURL ? e4.toDataURL() : this.srcFromAttribute ? e4.getAttribute("src") || "" : e4.src : this.src || "";
  }
  getSvgSrc(t3) {
    return this.getSrc(t3);
  }
  setSrc(t3) {
    let { crossOrigin: e4, signal: s3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return Bt(t3, {
      crossOrigin: e4,
      signal: s3
    }).then((t4) => {
      void 0 !== e4 && this.set({
        crossOrigin: e4
      }), this.setElement(t4);
    });
  }
  toString() {
    return '#<Image: { src: "'.concat(this.getSrc(), '" }>');
  }
  applyResizeFilters() {
    const t3 = this.resizeFilter, e4 = this.minimumScaleTrigger, s3 = this.getTotalObjectScaling(), i3 = s3.x, r3 = s3.y, n3 = this._filteredEl || this._originalElement;
    if (this.group && this.set("dirty", true), !t3 || i3 > e4 && r3 > e4) return this._element = n3, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = i3, void (this._lastScaleY = r3);
    const o3 = vt(n3), { width: a3, height: h3 } = n3;
    this._element = o3, this._lastScaleX = t3.scaleX = i3, this._lastScaleY = t3.scaleY = r3, ea().applyFilters([
      t3
    ], n3, a3, h3, this._element), this._filterScalingX = o3.width / this._originalElement.width, this._filterScalingY = o3.height / this._originalElement.height;
  }
  applyFilters() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.filters || [];
    if (t3 = t3.filter((t4) => t4 && !t4.isNeutralState()), this.set("dirty", true), this.removeTexture("".concat(this.cacheKey, "_filtered")), 0 === t3.length) return this._element = this._originalElement, this._filteredEl = void 0, this._filterScalingX = 1, void (this._filterScalingY = 1);
    const e4 = this._originalElement, s3 = e4.naturalWidth || e4.width, i3 = e4.naturalHeight || e4.height;
    if (this._element === this._originalElement) {
      const t4 = vt({
        width: s3,
        height: i3
      });
      this._element = t4, this._filteredEl = t4;
    } else this._filteredEl && (this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, s3, i3), this._lastScaleX = 1, this._lastScaleY = 1);
    ea().applyFilters(t3, this._originalElement, s3, i3, this._element, this.cacheKey), this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height);
  }
  _render(t3) {
    t3.imageSmoothingEnabled = this.imageSmoothing, true !== this.isMoving && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(t3), this._renderPaintInOrder(t3);
  }
  drawCacheOnCanvas(t3) {
    t3.imageSmoothingEnabled = this.imageSmoothing, super.drawCacheOnCanvas(t3);
  }
  shouldCache() {
    return this.needsItsOwnCache();
  }
  _renderFill(t3) {
    const e4 = this._element;
    if (!e4) return;
    const s3 = this._filterScalingX, i3 = this._filterScalingY, r3 = this.width, n3 = this.height, o3 = Math.max(this.cropX, 0), a3 = Math.max(this.cropY, 0), h3 = e4.naturalWidth || e4.width, c3 = e4.naturalHeight || e4.height, l3 = o3 * s3, u3 = a3 * i3, d3 = Math.min(r3 * s3, h3 - l3), g3 = Math.min(n3 * i3, c3 - u3), f2 = -r3 / 2, p3 = -n3 / 2, m3 = Math.min(r3, h3 / s3 - o3), v3 = Math.min(n3, c3 / i3 - a3);
    e4 && t3.drawImage(e4, l3, u3, d3, g3, f2, p3, m3, v3);
  }
  _needsResize() {
    const t3 = this.getTotalObjectScaling();
    return t3.x !== this._lastScaleX || t3.y !== this._lastScaleY;
  }
  _resetWidthHeight() {
    this.set(this.getOriginalSize());
  }
  _setWidthHeight() {
    let { width: t3, height: e4 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const s3 = this.getOriginalSize();
    this.width = t3 || s3.width, this.height = e4 || s3.height;
  }
  parsePreserveAspectRatioAttribute() {
    const t3 = Be(this.preserveAspectRatio || ""), e4 = this.width, s3 = this.height, i3 = {
      width: e4,
      height: s3
    };
    let r3, n3 = this._element.width, o3 = this._element.height, a3 = 1, h3 = 1, c3 = 0, l3 = 0, u3 = 0, d3 = 0;
    return !t3 || t3.alignX === j && t3.alignY === j ? (a3 = e4 / n3, h3 = s3 / o3) : ("meet" === t3.meetOrSlice && (a3 = h3 = Nr(this._element, i3), r3 = (e4 - n3 * a3) / 2, "Min" === t3.alignX && (c3 = -r3), "Max" === t3.alignX && (c3 = r3), r3 = (s3 - o3 * h3) / 2, "Min" === t3.alignY && (l3 = -r3), "Max" === t3.alignY && (l3 = r3)), "slice" === t3.meetOrSlice && (a3 = h3 = Ur(this._element, i3), r3 = n3 - e4 / a3, "Mid" === t3.alignX && (u3 = r3 / 2), "Max" === t3.alignX && (u3 = r3), r3 = o3 - s3 / h3, "Mid" === t3.alignY && (d3 = r3 / 2), "Max" === t3.alignY && (d3 = r3), n3 = e4 / a3, o3 = s3 / h3)), {
      width: n3,
      height: o3,
      scaleX: a3,
      scaleY: h3,
      offsetLeft: c3,
      offsetTop: l3,
      cropX: u3,
      cropY: d3
    };
  }
  static fromObject(t3, e4) {
    let { filters: r3, resizeFilter: n3, src: o3, crossOrigin: a3, type: h3 } = t3, c3 = i(t3, ia);
    return Promise.all([
      Bt(o3, s(s({}, e4), {}, {
        crossOrigin: a3
      })),
      r3 && It(r3, e4),
      n3 && It([
        n3
      ], e4),
      Xt(c3, e4)
    ]).then((t4) => {
      let [e5, i3 = [], [r4] = [], n4 = {}] = t4;
      return new this(e5, s(s({}, c3), {}, {
        src: o3,
        filters: i3,
        resizeFilter: r4
      }, n4));
    });
  }
  static fromURL(t3) {
    let { crossOrigin: e4 = null, signal: s3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i3 = arguments.length > 2 ? arguments[2] : void 0;
    return Bt(t3, {
      crossOrigin: e4,
      signal: s3
    }).then((t4) => new this(t4, i3));
  }
  static async fromElement(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s3 = arguments.length > 2 ? arguments[2] : void 0;
    const i3 = Dr(t3, this.ATTRIBUTE_NAMES, s3);
    return this.fromURL(i3["xlink:href"] || i3.href, e4, i3).catch((t4) => (a("log", "Unable to parse Image", t4), null));
  }
};
function oa(t3) {
  if (!cs.test(t3.nodeName)) return {};
  const e4 = t3.getAttribute("viewBox");
  let s3, i3, r3 = 1, n3 = 1, o3 = 0, a3 = 0;
  const h3 = t3.getAttribute("width"), c3 = t3.getAttribute("height"), l3 = t3.getAttribute("x") || 0, u3 = t3.getAttribute("y") || 0, d3 = !(e4 && us.test(e4)), g3 = !h3 || !c3 || "100%" === h3 || "100%" === c3;
  let f2 = "", p3 = 0, m3 = 0;
  if (d3 && (l3 || u3) && t3.parentNode && "#document" !== t3.parentNode.nodeName && (f2 = " translate(" + Re(l3 || "0") + " " + Re(u3 || "0") + ") ", s3 = (t3.getAttribute("transform") || "") + f2, t3.setAttribute("transform", s3), t3.removeAttribute("x"), t3.removeAttribute("y")), d3 && g3) return {
    width: 0,
    height: 0
  };
  const v3 = {
    width: 0,
    height: 0
  };
  if (d3) return v3.width = Re(h3), v3.height = Re(c3), v3;
  const y3 = e4.match(us);
  o3 = -parseFloat(y3[1]), a3 = -parseFloat(y3[2]);
  const _3 = parseFloat(y3[3]), x3 = parseFloat(y3[4]);
  v3.minX = o3, v3.minY = a3, v3.viewBoxWidth = _3, v3.viewBoxHeight = x3, g3 ? (v3.width = _3, v3.height = x3) : (v3.width = Re(h3), v3.height = Re(c3), r3 = v3.width / _3, n3 = v3.height / x3);
  const C3 = Be(t3.getAttribute("preserveAspectRatio") || "");
  if (C3.alignX !== j && ("meet" === C3.meetOrSlice && (n3 = r3 = r3 > n3 ? n3 : r3), "slice" === C3.meetOrSlice && (n3 = r3 = r3 > n3 ? r3 : n3), p3 = v3.width - _3 * r3, m3 = v3.height - x3 * r3, "Mid" === C3.alignX && (p3 /= 2), "Mid" === C3.alignY && (m3 /= 2), "Min" === C3.alignX && (p3 = 0), "Min" === C3.alignY && (m3 = 0)), 1 === r3 && 1 === n3 && 0 === o3 && 0 === a3 && 0 === l3 && 0 === u3) return v3;
  if ((l3 || u3) && "#document" !== t3.parentNode.nodeName && (f2 = " translate(" + Re(l3 || "0") + " " + Re(u3 || "0") + ") "), s3 = f2 + " matrix(" + r3 + " 0 0 " + n3 + " " + (o3 * r3 + p3) + " " + (a3 * n3 + m3) + ") ", "svg" === t3.nodeName) {
    for (i3 = t3.ownerDocument.createElementNS(is, "g"); t3.firstChild; ) i3.appendChild(t3.firstChild);
    t3.appendChild(i3);
  } else i3 = t3, i3.removeAttribute("x"), i3.removeAttribute("y"), s3 = i3.getAttribute("transform") + s3;
  return i3.setAttribute("transform", s3), v3;
}
t(na, "type", "Image"), t(na, "cacheProperties", [
  ...Ms,
  ...ra
]), t(na, "ownDefaults", {
  strokeWidth: 0,
  srcFromAttribute: false,
  minimumScaleTrigger: 0.5,
  cropX: 0,
  cropY: 0,
  imageSmoothing: true
}), t(na, "CSS_CANVAS", "canvas-img"), t(na, "ATTRIBUTE_NAMES", [
  ...Ji,
  "x",
  "y",
  "width",
  "height",
  "preserveAspectRatio",
  "xlink:href",
  "href",
  "crossOrigin",
  "image-rendering"
]), tt.setClass(na), tt.setSVGClass(na);
var aa = (t3) => t3.tagName.replace("svg:", "");
var ha = We([
  "pattern",
  "defs",
  "symbol",
  "metadata",
  "clipPath",
  "mask",
  "desc"
]);
function ca(t3, e4) {
  let s3, i3, r3, n3, o3 = [];
  for (r3 = 0, n3 = e4.length; r3 < n3; r3++) s3 = e4[r3], i3 = t3.getElementsByTagNameNS("http://www.w3.org/2000/svg", s3), o3 = o3.concat(Array.from(i3));
  return o3;
}
var la = [
  "gradientTransform",
  "x1",
  "x2",
  "y1",
  "y2",
  "gradientUnits",
  "cx",
  "cy",
  "r",
  "fx",
  "fy"
];
var ua = "xlink:href";
function da(t3, e4) {
  var s3;
  const i3 = (null === (s3 = e4.getAttribute(ua)) || void 0 === s3 ? void 0 : s3.slice(1)) || "", r3 = t3.getElementById(i3);
  if (r3 && r3.getAttribute(ua) && da(t3, r3), r3 && (la.forEach((t4) => {
    const s4 = r3.getAttribute(t4);
    !e4.hasAttribute(t4) && s4 && e4.setAttribute(t4, s4);
  }), !e4.children.length)) {
    const t4 = r3.cloneNode(true);
    for (; t4.firstChild; ) e4.appendChild(t4.firstChild);
  }
  e4.removeAttribute(ua);
}
var ga = [
  "linearGradient",
  "radialGradient",
  "svg:linearGradient",
  "svg:radialGradient"
];
function fa(t3) {
  const e4 = t3.getElementsByTagName("style"), i3 = {};
  for (let t4 = 0; t4 < e4.length; t4++) {
    const r3 = (e4[t4].textContent || "").replace(/\/\*[\s\S]*?\*\//g, "");
    "" !== r3.trim() && r3.split("}").filter((t5, e5, s3) => s3.length > 1 && t5.trim()).forEach((t5) => {
      if ((t5.match(/{/g) || []).length > 1 && t5.trim().startsWith("@")) return;
      const e5 = t5.split("{"), r4 = {}, n3 = e5[1].trim().split(";").filter(function(t6) {
        return t6.trim();
      });
      for (let t6 = 0; t6 < n3.length; t6++) {
        const e6 = n3[t6].split(":"), s3 = e6[0].trim(), i4 = e6[1].trim();
        r4[s3] = i4;
      }
      (t5 = e5[0].trim()).split(",").forEach((t6) => {
        "" !== (t6 = t6.replace(/^svg/i, "").trim()) && (i3[t6] = s(s({}, i3[t6] || {}), r4));
      });
    });
  }
  return i3;
}
var pa = (t3) => tt.getSVGClass(aa(t3).toLowerCase());
var ma = class {
  constructor(t3, e4, s3, i3, r3) {
    this.elements = t3, this.options = e4, this.reviver = s3, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = i3, this.clipPaths = r3, this.gradientDefs = function(t4) {
      const e5 = ca(t4, ga), s4 = {};
      let i4 = e5.length;
      for (; i4--; ) {
        const r4 = e5[i4];
        r4.getAttribute("xlink:href") && da(t4, r4);
        const n3 = r4.getAttribute("id");
        n3 && (s4[n3] = r4);
      }
      return s4;
    }(i3), this.cssRules = fa(i3);
  }
  parse() {
    return Promise.all(this.elements.map((t3) => this.createObject(t3)));
  }
  async createObject(t3) {
    const e4 = pa(t3);
    if (e4) {
      const s3 = await e4.fromElement(t3, this.options, this.cssRules);
      return this.resolveGradient(s3, t3, K), this.resolveGradient(s3, t3, J), s3 instanceof na && s3._originalElement ? On(s3, s3.parsePreserveAspectRatioAttribute()) : On(s3), await this.resolveClipPath(s3, t3), this.reviver && this.reviver(t3, s3), s3;
    }
    return null;
  }
  extractPropertyDefinition(t3, e4, s3) {
    const i3 = t3[e4], r3 = this.regexUrl;
    if (!r3.test(i3)) return;
    r3.lastIndex = 0;
    const n3 = r3.exec(i3)[1];
    return r3.lastIndex = 0, s3[n3];
  }
  resolveGradient(t3, e4, i3) {
    const r3 = this.extractPropertyDefinition(t3, i3, this.gradientDefs);
    if (r3) {
      const n3 = e4.getAttribute(i3 + "-opacity"), o3 = Zn.fromElement(r3, t3, s(s({}, this.options), {}, {
        opacity: n3
      }));
      t3.set(i3, o3);
    }
  }
  async resolveClipPath(t3, e4, s3) {
    const i3 = this.extractPropertyDefinition(t3, "clipPath", this.clipPaths);
    if (i3) {
      const r3 = wt(t3.calcTransformMatrix()), n3 = i3[0].parentElement;
      let o3 = e4;
      for (; !s3 && o3.parentElement && o3.getAttribute("clip-path") !== t3.clipPath; ) o3 = o3.parentElement;
      o3.parentElement.appendChild(n3);
      const a3 = br("".concat(o3.getAttribute("transform") || "", " ").concat(n3.getAttribute("originalTransform") || ""));
      n3.setAttribute("transform", "matrix(".concat(a3.join(","), ")"));
      const h3 = await Promise.all(i3.map((t4) => pa(t4).fromElement(t4, this.options, this.cssRules).then((t5) => (On(t5), t5.fillRule = t5.clipRule, delete t5.clipRule, t5)))), c3 = 1 === h3.length ? h3[0] : new Hr(h3), l3 = Tt(r3, c3.calcTransformMatrix());
      c3.clipPath && await this.resolveClipPath(c3, o3, n3.getAttribute("clip-path") ? o3 : void 0);
      const { scaleX: u3, scaleY: d3, angle: g3, skewX: f2, translateX: p3, translateY: m3 } = Dt(l3);
      c3.set({
        flipX: false,
        flipY: false
      }), c3.set({
        scaleX: u3,
        scaleY: d3,
        angle: g3,
        skewX: f2,
        skewY: 0
      }), c3.setPositionByOrigin(new ot(p3, m3), D, D), t3.clipPath = c3;
    } else delete t3.clipPath;
  }
};
var va = (t3) => hs.test(aa(t3));
var ya = () => ({
  objects: [],
  elements: [],
  options: {},
  allElements: []
});
async function _a(t3, e4) {
  let { crossOrigin: i3, signal: r3 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if (r3 && r3.aborted) return a("log", new c("parseSVGDocument")), ya();
  const n3 = t3.documentElement;
  !function(t4) {
    const e5 = ca(t4, [
      "use",
      "svg:use"
    ]), s3 = [
      "x",
      "y",
      "xlink:href",
      "href",
      "transform"
    ];
    for (const i4 of e5) {
      const e6 = i4.attributes, r4 = {};
      for (const t5 of e6) t5.value && (r4[t5.name] = t5.value);
      const n4 = (r4["xlink:href"] || r4.href || "").slice(1);
      if ("" === n4) return;
      const o4 = t4.getElementById(n4);
      if (null === o4) return;
      let a3 = o4.cloneNode(true);
      const h4 = a3.attributes, c3 = {};
      for (const t5 of h4) t5.value && (c3[t5.name] = t5.value);
      const { x: l4 = 0, y: u4 = 0, transform: d4 = "" } = r4, g3 = "".concat(d4, " ").concat(c3.transform || "", " translate(").concat(l4, ", ").concat(u4, ")");
      if (oa(a3), /^svg$/i.test(a3.nodeName)) {
        const t5 = a3.ownerDocument.createElementNS(is, "g");
        Object.entries(c3).forEach((e7) => {
          let [s4, i5] = e7;
          return t5.setAttributeNS(is, s4, i5);
        }), t5.append(...a3.childNodes), a3 = t5;
      }
      for (const t5 of e6) {
        if (!t5) continue;
        const { name: e7, value: i5 } = t5;
        if (!s3.includes(e7)) if ("style" === e7) {
          const t6 = {};
          Tr(i5, t6), Object.entries(c3).forEach((e8) => {
            let [s5, i6] = e8;
            t6[s5] = i6;
          }), Tr(c3.style || "", t6);
          const s4 = Object.entries(t6).map((t7) => t7.join(":")).join(";");
          a3.setAttribute(e7, s4);
        } else !c3[e7] && a3.setAttribute(e7, i5);
      }
      a3.setAttribute("transform", g3), a3.setAttribute("instantiated_by_use", "1"), a3.removeAttribute("id"), i4.parentNode.replaceChild(a3, i4);
    }
  }(t3);
  const o3 = Array.from(n3.getElementsByTagName("*")), h3 = s(s({}, oa(n3)), {}, {
    crossOrigin: i3,
    signal: r3
  }), l3 = o3.filter((t4) => (oa(t4), va(t4) && !function(t5) {
    let e5 = t5;
    for (; e5 && (e5 = e5.parentElement); ) if (e5 && e5.nodeName && ha.test(aa(e5)) && !e5.getAttribute("instantiated_by_use")) return true;
    return false;
  }(t4)));
  if (!l3 || l3 && !l3.length) return s(s({}, ya()), {}, {
    options: h3,
    allElements: o3
  });
  const u3 = {};
  o3.filter((t4) => "clipPath" === aa(t4)).forEach((t4) => {
    t4.setAttribute("originalTransform", t4.getAttribute("transform") || "");
    const e5 = t4.getAttribute("id");
    u3[e5] = Array.from(t4.getElementsByTagName("*")).filter((t5) => va(t5));
  });
  const d3 = new ma(l3, h3, e4, t3, u3);
  return {
    objects: await d3.parse(),
    elements: l3,
    options: h3,
    allElements: o3
  };
}
function xa(t3, e4, s3) {
  return _a(new (v()).DOMParser().parseFromString(t3.trim(), "text/xml"), e4, s3);
}
var ba = Y;
var Sa = (t3) => function(e4, s3, i3) {
  const { points: r3, pathOffset: n3 } = i3;
  return new ot(r3[t3]).subtract(n3).transform(Tt(i3.getViewportTransform(), i3.calcTransformMatrix()));
};
var wa = (t3, e4, s3, i3) => {
  const { target: r3, pointIndex: n3 } = e4, o3 = r3, a3 = pe(new ot(s3, i3), void 0, o3.calcOwnMatrix());
  return o3.points[n3] = a3.add(o3.pathOffset), o3.setDimensions(), o3.set("dirty", true), true;
};
var Ta = (t3, e4) => function(i3, r3, n3, o3) {
  const a3 = r3.target, h3 = new ot(a3.points[(t3 > 0 ? t3 : a3.points.length) - 1]), c3 = h3.subtract(a3.pathOffset).transform(a3.calcOwnMatrix()), l3 = e4(i3, s(s({}, r3), {}, {
    pointIndex: t3
  }), n3, o3), u3 = h3.subtract(a3.pathOffset).transform(a3.calcOwnMatrix()).subtract(c3);
  return a3.left -= u3.x, a3.top -= u3.y, l3;
};
var Oa = (t3) => ti(ba, Ta(t3, wa));
var ka = (t3, e4, s3) => {
  const { path: i3, pathOffset: r3 } = t3, n3 = i3[e4];
  return new ot(n3[s3] - r3.x, n3[s3 + 1] - r3.y).transform(Tt(t3.getViewportTransform(), t3.calcTransformMatrix()));
};
function Da(t3, e4, s3) {
  const { commandIndex: i3, pointIndex: r3 } = this;
  return ka(s3, i3, r3);
}
function Ma(t3, e4, i3, r3) {
  const { target: n3 } = e4, { commandIndex: o3, pointIndex: a3 } = this, h3 = ((t4, e5, s3, i4, r4) => {
    const { path: n4, pathOffset: o4 } = t4, a4 = n4[(i4 > 0 ? i4 : n4.length) - 1], h4 = new ot(a4[r4], a4[r4 + 1]), c3 = h4.subtract(o4).transform(t4.calcOwnMatrix()), l3 = pe(new ot(e5, s3), void 0, t4.calcOwnMatrix());
    n4[i4][r4] = l3.x + o4.x, n4[i4][r4 + 1] = l3.y + o4.y, t4.setDimensions();
    const u3 = h4.subtract(t4.pathOffset).transform(t4.calcOwnMatrix()).subtract(c3);
    return t4.left -= u3.x, t4.top -= u3.y, t4.set("dirty", true), true;
  })(n3, i3, r3, o3, a3);
  return ye(this.actionName, s(s({}, Te(t3, e4, i3, r3)), {}, {
    commandIndex: o3,
    pointIndex: a3
  })), h3;
}
var Pa = class extends ni {
  constructor(t3) {
    super(t3);
  }
  render(t3, e4, i3, r3, n3) {
    const o3 = s(s({}, r3), {}, {
      cornerColor: this.controlFill,
      cornerStrokeColor: this.controlStroke,
      transparentCorners: !this.controlFill
    });
    super.render(t3, e4, i3, o3, n3);
  }
};
var Ea = class extends Pa {
  constructor(t3) {
    super(t3);
  }
  render(t3, e4, s3, i3, r3) {
    const { path: n3 } = r3, { commandIndex: o3, pointIndex: a3, connectToCommandIndex: h3, connectToPointIndex: c3 } = this;
    t3.save(), t3.strokeStyle = this.controlStroke, this.connectionDashArray && t3.setLineDash(this.connectionDashArray);
    const [l3] = n3[o3], u3 = ka(r3, h3, c3);
    if ("Q" === l3) {
      const i4 = ka(r3, o3, a3 + 2);
      t3.moveTo(i4.x, i4.y), t3.lineTo(e4, s3);
    } else t3.moveTo(e4, s3);
    t3.lineTo(u3.x, u3.y), t3.stroke(), t3.restore(), super.render(t3, e4, s3, i3, r3);
  }
};
var Aa = (t3, e4, i3, r3, n3, o3) => new (i3 ? Ea : Pa)(s(s({
  commandIndex: t3,
  pointIndex: e4,
  actionName: "modifyPath",
  positionHandler: Da,
  actionHandler: Ma,
  connectToCommandIndex: n3,
  connectToPointIndex: o3
}, r3), i3 ? r3.controlPointStyle : r3.pointStyle));
var ja = Object.freeze({
  __proto__: null,
  changeWidth: si,
  createObjectDefaultControls: Di,
  createPathControls: function(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const s3 = {};
    let i3 = "M";
    return t3.path.forEach((t4, r3) => {
      const n3 = t4[0];
      switch ("Z" !== n3 && (s3["c_".concat(r3, "_").concat(n3)] = Aa(r3, t4.length - 2, false, e4)), n3) {
        case "C":
          s3["c_".concat(r3, "_C_CP_1")] = Aa(r3, 1, true, e4, r3 - 1, /* @__PURE__ */ ((t5) => "C" === t5 ? 5 : "Q" === t5 ? 3 : 1)(i3)), s3["c_".concat(r3, "_C_CP_2")] = Aa(r3, 3, true, e4, r3, 5);
          break;
        case "Q":
          s3["c_".concat(r3, "_Q_CP_1")] = Aa(r3, 1, true, e4, r3, 3);
      }
      i3 = n3;
    }), s3;
  },
  createPolyActionHandler: Oa,
  createPolyControls: function(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const i3 = {};
    for (let r3 = 0; r3 < ("number" == typeof t3 ? t3 : t3.points.length); r3++) i3["p".concat(r3)] = new ni(s({
      actionName: ba,
      positionHandler: Sa(r3),
      actionHandler: Oa(r3)
    }, e4));
    return i3;
  },
  createPolyPositionHandler: Sa,
  createResizeControls: Mi,
  createTextboxDefaultControls: Pi,
  dragHandler: De,
  factoryPolyActionHandler: Ta,
  getLocalPoint: ke,
  polyActionHandler: wa,
  renderCircleControl: ii,
  renderSquareControl: ri,
  rotationStyleHandler: oi,
  rotationWithSnapping: ai,
  scaleCursorStyleHandler: ui,
  scaleOrSkewActionName: wi,
  scaleSkewCursorStyleHandler: Ti,
  scalingEqually: gi,
  scalingX: fi,
  scalingXOrSkewingY: Oi,
  scalingY: pi,
  scalingYOrSkewingX: ki,
  skewCursorStyleHandler: _i,
  skewHandlerX: Ci,
  skewHandlerY: bi,
  wrapWithFireEvent: ti,
  wrapWithFixedAnchor: ei
});
var Fa = (t3) => void 0 !== t3.webgl;
var Ra = "precision highp float";
var Ba = "\n    ".concat(Ra, ";\n    varying vec2 vTexCoord;\n    uniform sampler2D uTexture;\n    void main() {\n      gl_FragColor = texture2D(uTexture, vTexCoord);\n    }");
var Ia = [
  "type"
];
var Xa = [
  "type"
];
var Wa = new RegExp(Ra, "g");
var Ya = class {
  get type() {
    return this.constructor.type;
  }
  constructor() {
    let t3 = i(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Ia);
    Object.assign(this, this.constructor.defaults, t3);
  }
  getFragmentSource() {
    return Ba;
  }
  getVertexSource() {
    return "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    void main() {\n      vTexCoord = aPosition;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }";
  }
  createProgram(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getFragmentSource(), s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.getVertexSource();
    const { WebGLProbe: { GLPrecision: i3 = "highp" } } = p();
    "highp" !== i3 && (e4 = e4.replace(Wa, Ra.replace("highp", i3)));
    const r3 = t3.createShader(t3.VERTEX_SHADER), n3 = t3.createShader(t3.FRAGMENT_SHADER), o3 = t3.createProgram();
    if (!r3 || !n3 || !o3) throw new h("Vertex, fragment shader or program creation error");
    if (t3.shaderSource(r3, s3), t3.compileShader(r3), !t3.getShaderParameter(r3, t3.COMPILE_STATUS)) throw new h("Vertex shader compile error for ".concat(this.type, ": ").concat(t3.getShaderInfoLog(r3)));
    if (t3.shaderSource(n3, e4), t3.compileShader(n3), !t3.getShaderParameter(n3, t3.COMPILE_STATUS)) throw new h("Fragment shader compile error for ".concat(this.type, ": ").concat(t3.getShaderInfoLog(n3)));
    if (t3.attachShader(o3, r3), t3.attachShader(o3, n3), t3.linkProgram(o3), !t3.getProgramParameter(o3, t3.LINK_STATUS)) throw new h('Shader link error for "'.concat(this.type, '" ').concat(t3.getProgramInfoLog(o3)));
    const a3 = this.getUniformLocations(t3, o3) || {};
    return a3.uStepW = t3.getUniformLocation(o3, "uStepW"), a3.uStepH = t3.getUniformLocation(o3, "uStepH"), {
      program: o3,
      attributeLocations: this.getAttributeLocations(t3, o3),
      uniformLocations: a3
    };
  }
  getAttributeLocations(t3, e4) {
    return {
      aPosition: t3.getAttribLocation(e4, "aPosition")
    };
  }
  getUniformLocations(t3, e4) {
    const s3 = this.constructor.uniformLocations, i3 = {};
    for (let r3 = 0; r3 < s3.length; r3++) i3[s3[r3]] = t3.getUniformLocation(e4, s3[r3]);
    return i3;
  }
  sendAttributeData(t3, e4, s3) {
    const i3 = e4.aPosition, r3 = t3.createBuffer();
    t3.bindBuffer(t3.ARRAY_BUFFER, r3), t3.enableVertexAttribArray(i3), t3.vertexAttribPointer(i3, 2, t3.FLOAT, false, 0, 0), t3.bufferData(t3.ARRAY_BUFFER, s3, t3.STATIC_DRAW);
  }
  _setupFrameBuffer(t3) {
    const e4 = t3.context;
    if (t3.passes > 1) {
      const s3 = t3.destinationWidth, i3 = t3.destinationHeight;
      t3.sourceWidth === s3 && t3.sourceHeight === i3 || (e4.deleteTexture(t3.targetTexture), t3.targetTexture = t3.filterBackend.createTexture(e4, s3, i3)), e4.framebufferTexture2D(e4.FRAMEBUFFER, e4.COLOR_ATTACHMENT0, e4.TEXTURE_2D, t3.targetTexture, 0);
    } else e4.bindFramebuffer(e4.FRAMEBUFFER, null), e4.finish();
  }
  _swapTextures(t3) {
    t3.passes--, t3.pass++;
    const e4 = t3.targetTexture;
    t3.targetTexture = t3.sourceTexture, t3.sourceTexture = e4;
  }
  isNeutralState(t3) {
    return false;
  }
  applyTo(t3) {
    Fa(t3) ? (this._setupFrameBuffer(t3), this.applyToWebGL(t3), this._swapTextures(t3)) : this.applyTo2d(t3);
  }
  applyTo2d(t3) {
  }
  getCacheKey() {
    return this.type;
  }
  retrieveShader(t3) {
    const e4 = this.getCacheKey();
    return t3.programCache[e4] || (t3.programCache[e4] = this.createProgram(t3.context)), t3.programCache[e4];
  }
  applyToWebGL(t3) {
    const e4 = t3.context, s3 = this.retrieveShader(t3);
    0 === t3.pass && t3.originalTexture ? e4.bindTexture(e4.TEXTURE_2D, t3.originalTexture) : e4.bindTexture(e4.TEXTURE_2D, t3.sourceTexture), e4.useProgram(s3.program), this.sendAttributeData(e4, s3.attributeLocations, t3.aPosition), e4.uniform1f(s3.uniformLocations.uStepW, 1 / t3.sourceWidth), e4.uniform1f(s3.uniformLocations.uStepH, 1 / t3.sourceHeight), this.sendUniformData(e4, s3.uniformLocations), e4.viewport(0, 0, t3.destinationWidth, t3.destinationHeight), e4.drawArrays(e4.TRIANGLE_STRIP, 0, 4);
  }
  bindAdditionalTexture(t3, e4, s3) {
    t3.activeTexture(s3), t3.bindTexture(t3.TEXTURE_2D, e4), t3.activeTexture(t3.TEXTURE0);
  }
  unbindAdditionalTexture(t3, e4) {
    t3.activeTexture(e4), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE0);
  }
  sendUniformData(t3, e4) {
  }
  createHelpLayer(t3) {
    if (!t3.helpLayer) {
      const { sourceWidth: e4, sourceHeight: s3 } = t3, i3 = vt({
        width: e4,
        height: s3
      });
      t3.helpLayer = i3;
    }
  }
  toObject() {
    const t3 = Object.keys(this.constructor.defaults || {});
    return s({
      type: this.type
    }, t3.reduce((t4, e4) => (t4[e4] = this[e4], t4), {}));
  }
  toJSON() {
    return this.toObject();
  }
  static async fromObject(t3, e4) {
    return new this(i(t3, Xa));
  }
};
t(Ya, "type", "BaseFilter"), t(Ya, "uniformLocations", []);
var Va = {
  multiply: "gl_FragColor.rgb *= uColor.rgb;\n",
  screen: "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",
  add: "gl_FragColor.rgb += uColor.rgb;\n",
  difference: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",
  subtract: "gl_FragColor.rgb -= uColor.rgb;\n",
  lighten: "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",
  darken: "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",
  exclusion: "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",
  overlay: "\n    if (uColor.r < 0.5) {\n      gl_FragColor.r *= 2.0 * uColor.r;\n    } else {\n      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n    }\n    if (uColor.g < 0.5) {\n      gl_FragColor.g *= 2.0 * uColor.g;\n    } else {\n      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n    }\n    if (uColor.b < 0.5) {\n      gl_FragColor.b *= 2.0 * uColor.b;\n    } else {\n      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n    }\n    ",
  tint: "\n    gl_FragColor.rgb *= (1.0 - uColor.a);\n    gl_FragColor.rgb += uColor.rgb;\n    "
};
var Ga = class extends Ya {
  getCacheKey() {
    return "".concat(this.type, "_").concat(this.mode);
  }
  getFragmentSource() {
    return "\n      precision highp float;\n      uniform sampler2D uTexture;\n      uniform vec4 uColor;\n      varying vec2 vTexCoord;\n      void main() {\n        vec4 color = texture2D(uTexture, vTexCoord);\n        gl_FragColor = color;\n        if (color.a > 0.0) {\n          ".concat(Va[this.mode], "\n        }\n      }\n      ");
  }
  applyTo2d(t3) {
    let { imageData: { data: e4 } } = t3;
    const s3 = new Le(this.color).getSource(), i3 = this.alpha, r3 = s3[0] * i3, n3 = s3[1] * i3, o3 = s3[2] * i3, a3 = 1 - i3;
    for (let t4 = 0; t4 < e4.length; t4 += 4) {
      const s4 = e4[t4], i4 = e4[t4 + 1], h3 = e4[t4 + 2];
      let c3, l3, u3;
      switch (this.mode) {
        case "multiply":
          c3 = s4 * r3 / 255, l3 = i4 * n3 / 255, u3 = h3 * o3 / 255;
          break;
        case "screen":
          c3 = 255 - (255 - s4) * (255 - r3) / 255, l3 = 255 - (255 - i4) * (255 - n3) / 255, u3 = 255 - (255 - h3) * (255 - o3) / 255;
          break;
        case "add":
          c3 = s4 + r3, l3 = i4 + n3, u3 = h3 + o3;
          break;
        case "difference":
          c3 = Math.abs(s4 - r3), l3 = Math.abs(i4 - n3), u3 = Math.abs(h3 - o3);
          break;
        case "subtract":
          c3 = s4 - r3, l3 = i4 - n3, u3 = h3 - o3;
          break;
        case "darken":
          c3 = Math.min(s4, r3), l3 = Math.min(i4, n3), u3 = Math.min(h3, o3);
          break;
        case "lighten":
          c3 = Math.max(s4, r3), l3 = Math.max(i4, n3), u3 = Math.max(h3, o3);
          break;
        case "overlay":
          c3 = r3 < 128 ? 2 * s4 * r3 / 255 : 255 - 2 * (255 - s4) * (255 - r3) / 255, l3 = n3 < 128 ? 2 * i4 * n3 / 255 : 255 - 2 * (255 - i4) * (255 - n3) / 255, u3 = o3 < 128 ? 2 * h3 * o3 / 255 : 255 - 2 * (255 - h3) * (255 - o3) / 255;
          break;
        case "exclusion":
          c3 = r3 + s4 - 2 * r3 * s4 / 255, l3 = n3 + i4 - 2 * n3 * i4 / 255, u3 = o3 + h3 - 2 * o3 * h3 / 255;
          break;
        case "tint":
          c3 = r3 + s4 * a3, l3 = n3 + i4 * a3, u3 = o3 + h3 * a3;
      }
      e4[t4] = c3, e4[t4 + 1] = l3, e4[t4 + 2] = u3;
    }
  }
  sendUniformData(t3, e4) {
    const s3 = new Le(this.color).getSource();
    s3[0] = this.alpha * s3[0] / 255, s3[1] = this.alpha * s3[1] / 255, s3[2] = this.alpha * s3[2] / 255, s3[3] = this.alpha, t3.uniform4fv(e4.uColor, s3);
  }
};
t(Ga, "defaults", {
  color: "#F95C63",
  mode: "multiply",
  alpha: 1
}), t(Ga, "type", "BlendColor"), t(Ga, "uniformLocations", [
  "uColor"
]), tt.setClass(Ga);
var za = {
  multiply: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.rgba *= color2.rgba;\n      gl_FragColor = color;\n    }\n    ",
  mask: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.a = color2.a;\n      gl_FragColor = color;\n    }\n    "
};
var Ha = [
  "type",
  "image"
];
var Na = class extends Ya {
  getCacheKey() {
    return "".concat(this.type, "_").concat(this.mode);
  }
  getFragmentSource() {
    return za[this.mode];
  }
  getVertexSource() {
    return "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    uniform mat3 uTransformMatrix;\n    void main() {\n      vTexCoord = aPosition;\n      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ";
  }
  applyToWebGL(t3) {
    const e4 = t3.context, s3 = this.createTexture(t3.filterBackend, this.image);
    this.bindAdditionalTexture(e4, s3, e4.TEXTURE1), super.applyToWebGL(t3), this.unbindAdditionalTexture(e4, e4.TEXTURE1);
  }
  createTexture(t3, e4) {
    return t3.getCachedTexture(e4.cacheKey, e4.getElement());
  }
  calculateMatrix() {
    const t3 = this.image, { width: e4, height: s3 } = t3.getElement();
    return [
      1 / t3.scaleX,
      0,
      0,
      0,
      1 / t3.scaleY,
      0,
      -t3.left / e4,
      -t3.top / s3,
      1
    ];
  }
  applyTo2d(t3) {
    let { imageData: { data: e4, width: s3, height: i3 }, filterBackend: { resources: r3 } } = t3;
    const n3 = this.image;
    r3.blendImage || (r3.blendImage = pt());
    const o3 = r3.blendImage, a3 = o3.getContext("2d");
    o3.width !== s3 || o3.height !== i3 ? (o3.width = s3, o3.height = i3) : a3.clearRect(0, 0, s3, i3), a3.setTransform(n3.scaleX, 0, 0, n3.scaleY, n3.left, n3.top), a3.drawImage(n3.getElement(), 0, 0, s3, i3);
    const h3 = a3.getImageData(0, 0, s3, i3).data;
    for (let t4 = 0; t4 < e4.length; t4 += 4) {
      const s4 = e4[t4], i4 = e4[t4 + 1], r4 = e4[t4 + 2], n4 = e4[t4 + 3], o4 = h3[t4], a4 = h3[t4 + 1], c3 = h3[t4 + 2], l3 = h3[t4 + 3];
      switch (this.mode) {
        case "multiply":
          e4[t4] = s4 * o4 / 255, e4[t4 + 1] = i4 * a4 / 255, e4[t4 + 2] = r4 * c3 / 255, e4[t4 + 3] = n4 * l3 / 255;
          break;
        case "mask":
          e4[t4 + 3] = l3;
      }
    }
  }
  sendUniformData(t3, e4) {
    const s3 = this.calculateMatrix();
    t3.uniform1i(e4.uImage, 1), t3.uniformMatrix3fv(e4.uTransformMatrix, false, s3);
  }
  toObject() {
    return s(s({}, super.toObject()), {}, {
      image: this.image && this.image.toObject()
    });
  }
  static async fromObject(t3, e4) {
    let { type: r3, image: n3 } = t3, o3 = i(t3, Ha);
    return na.fromObject(n3, e4).then((t4) => new this(s(s({}, o3), {}, {
      image: t4
    })));
  }
};
t(Na, "type", "BlendImage"), t(Na, "defaults", {
  mode: "multiply",
  alpha: 1
}), t(Na, "uniformLocations", [
  "uTransformMatrix",
  "uImage"
]), tt.setClass(Na);
var Ua = class extends Ya {
  getFragmentSource() {
    return "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform vec2 uDelta;\n    varying vec2 vTexCoord;\n    const float nSamples = 15.0;\n    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);\n    float random(vec3 scale) {\n      /* use the fragment position for a different seed per-pixel */\n      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n    }\n    void main() {\n      vec4 color = vec4(0.0);\n      float totalC = 0.0;\n      float totalA = 0.0;\n      float offset = random(v3offset);\n      for (float t = -nSamples; t <= nSamples; t++) {\n        float percent = (t + offset - 0.5) / nSamples;\n        vec4 sample = texture2D(uTexture, vTexCoord + uDelta * percent);\n        float weight = 1.0 - abs(percent);\n        float alpha = weight * sample.a;\n        color.rgb += sample.rgb * alpha;\n        color.a += alpha;\n        totalA += weight;\n        totalC += alpha;\n      }\n      gl_FragColor.rgb = color.rgb / totalC;\n      gl_FragColor.a = color.a / totalA;\n    }\n  ";
  }
  applyTo(t3) {
    Fa(t3) ? (this.aspectRatio = t3.sourceWidth / t3.sourceHeight, t3.passes++, this._setupFrameBuffer(t3), this.horizontal = true, this.applyToWebGL(t3), this._swapTextures(t3), this._setupFrameBuffer(t3), this.horizontal = false, this.applyToWebGL(t3), this._swapTextures(t3)) : this.applyTo2d(t3);
  }
  applyTo2d(t3) {
    let { imageData: { data: e4, width: s3, height: i3 } } = t3;
    this.aspectRatio = s3 / i3, this.horizontal = true;
    let r3 = this.getBlurValue() * s3;
    const n3 = new Uint8ClampedArray(e4), o3 = 15, a3 = 4 * s3;
    for (let t4 = 0; t4 < e4.length; t4 += 4) {
      let s4 = 0, i4 = 0, h3 = 0, c3 = 0, l3 = 0;
      const u3 = t4 - t4 % a3, d3 = u3 + a3;
      for (let n4 = -14; n4 < o3; n4++) {
        const a4 = n4 / o3, g3 = 4 * Math.floor(r3 * a4), f2 = 1 - Math.abs(a4);
        let p3 = t4 + g3;
        p3 < u3 ? p3 = u3 : p3 > d3 && (p3 = d3);
        const m3 = e4[p3 + 3] * f2;
        s4 += e4[p3] * m3, i4 += e4[p3 + 1] * m3, h3 += e4[p3 + 2] * m3, c3 += m3, l3 += f2;
      }
      n3[t4] = s4 / c3, n3[t4 + 1] = i4 / c3, n3[t4 + 2] = h3 / c3, n3[t4 + 3] = c3 / l3;
    }
    this.horizontal = false, r3 = this.getBlurValue() * i3;
    for (let t4 = 0; t4 < n3.length; t4 += 4) {
      let s4 = 0, i4 = 0, h3 = 0, c3 = 0, l3 = 0;
      const u3 = t4 % a3, d3 = n3.length - a3 + u3;
      for (let e5 = -14; e5 < o3; e5++) {
        const g3 = e5 / o3, f2 = Math.floor(r3 * g3) * a3, p3 = 1 - Math.abs(g3);
        let m3 = t4 + f2;
        m3 < u3 ? m3 = u3 : m3 > d3 && (m3 = d3);
        const v3 = n3[m3 + 3] * p3;
        s4 += n3[m3] * v3, i4 += n3[m3 + 1] * v3, h3 += n3[m3 + 2] * v3, c3 += v3, l3 += p3;
      }
      e4[t4] = s4 / c3, e4[t4 + 1] = i4 / c3, e4[t4 + 2] = h3 / c3, e4[t4 + 3] = c3 / l3;
    }
  }
  sendUniformData(t3, e4) {
    const s3 = this.chooseRightDelta();
    t3.uniform2fv(e4.uDelta, s3);
  }
  isNeutralState() {
    return 0 === this.blur;
  }
  getBlurValue() {
    let t3 = 1;
    const { horizontal: e4, aspectRatio: s3 } = this;
    return e4 ? s3 > 1 && (t3 = 1 / s3) : s3 < 1 && (t3 = s3), t3 * this.blur * 0.12;
  }
  chooseRightDelta() {
    const t3 = this.getBlurValue();
    return this.horizontal ? [
      t3,
      0
    ] : [
      0,
      t3
    ];
  }
};
t(Ua, "type", "Blur"), t(Ua, "defaults", {
  blur: 0
}), t(Ua, "uniformLocations", [
  "uDelta"
]), tt.setClass(Ua);
var qa = class extends Ya {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBrightness;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += uBrightness;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t3) {
    let { imageData: { data: e4 } } = t3;
    const s3 = Math.round(255 * this.brightness);
    for (let t4 = 0; t4 < e4.length; t4 += 4) e4[t4] += s3, e4[t4 + 1] += s3, e4[t4 + 2] += s3;
  }
  isNeutralState() {
    return 0 === this.brightness;
  }
  sendUniformData(t3, e4) {
    t3.uniform1f(e4.uBrightness, this.brightness);
  }
};
t(qa, "type", "Brightness"), t(qa, "defaults", {
  brightness: 0
}), t(qa, "uniformLocations", [
  "uBrightness"
]), tt.setClass(qa);
var Ka = {
  matrix: [
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0
  ],
  colorsOnly: true
};
var Ja = class extends Ya {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  varying vec2 vTexCoord;\n  uniform mat4 uColorMatrix;\n  uniform vec4 uConstants;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color *= uColorMatrix;\n    color += uConstants;\n    gl_FragColor = color;\n  }";
  }
  applyTo2d(t3) {
    const e4 = t3.imageData.data, s3 = this.matrix, i3 = this.colorsOnly;
    for (let t4 = 0; t4 < e4.length; t4 += 4) {
      const r3 = e4[t4], n3 = e4[t4 + 1], o3 = e4[t4 + 2];
      if (e4[t4] = r3 * s3[0] + n3 * s3[1] + o3 * s3[2] + 255 * s3[4], e4[t4 + 1] = r3 * s3[5] + n3 * s3[6] + o3 * s3[7] + 255 * s3[9], e4[t4 + 2] = r3 * s3[10] + n3 * s3[11] + o3 * s3[12] + 255 * s3[14], !i3) {
        const i4 = e4[t4 + 3];
        e4[t4] += i4 * s3[3], e4[t4 + 1] += i4 * s3[8], e4[t4 + 2] += i4 * s3[13], e4[t4 + 3] = r3 * s3[15] + n3 * s3[16] + o3 * s3[17] + i4 * s3[18] + 255 * s3[19];
      }
    }
  }
  sendUniformData(t3, e4) {
    const s3 = this.matrix, i3 = [
      s3[0],
      s3[1],
      s3[2],
      s3[3],
      s3[5],
      s3[6],
      s3[7],
      s3[8],
      s3[10],
      s3[11],
      s3[12],
      s3[13],
      s3[15],
      s3[16],
      s3[17],
      s3[18]
    ], r3 = [
      s3[4],
      s3[9],
      s3[14],
      s3[19]
    ];
    t3.uniformMatrix4fv(e4.uColorMatrix, false, i3), t3.uniform4fv(e4.uConstants, r3);
  }
  toObject() {
    return s(s({}, super.toObject()), {}, {
      matrix: [
        ...this.matrix
      ]
    });
  }
};
function Qa(e4, s3) {
  var i3;
  const r3 = (t(i3 = class extends Ja {
    toObject() {
      return {
        type: this.type,
        colorsOnly: this.colorsOnly
      };
    }
  }, "type", e4), t(i3, "defaults", {
    colorsOnly: false,
    matrix: s3
  }), i3);
  return tt.setClass(r3, e4), r3;
}
t(Ja, "type", "ColorMatrix"), t(Ja, "defaults", Ka), t(Ja, "uniformLocations", [
  "uColorMatrix",
  "uConstants"
]), tt.setClass(Ja);
var Za = Qa("Brownie", [
  0.5997,
  0.34553,
  -0.27082,
  0,
  0.186,
  -0.0377,
  0.86095,
  0.15059,
  0,
  -0.1449,
  0.24113,
  -0.07441,
  0.44972,
  0,
  -0.02965,
  0,
  0,
  0,
  1,
  0
]);
var $a = Qa("Vintage", [
  0.62793,
  0.32021,
  -0.03965,
  0,
  0.03784,
  0.02578,
  0.64411,
  0.03259,
  0,
  0.02926,
  0.0466,
  -0.08512,
  0.52416,
  0,
  0.02023,
  0,
  0,
  0,
  1,
  0
]);
var th = Qa("Kodachrome", [
  1.12855,
  -0.39673,
  -0.03992,
  0,
  0.24991,
  -0.16404,
  1.08352,
  -0.05498,
  0,
  0.09698,
  -0.16786,
  -0.56034,
  1.60148,
  0,
  0.13972,
  0,
  0,
  0,
  1,
  0
]);
var eh = Qa("Technicolor", [
  1.91252,
  -0.85453,
  -0.09155,
  0,
  0.04624,
  -0.30878,
  1.76589,
  -0.10601,
  0,
  -0.27589,
  -0.2311,
  -0.75018,
  1.84759,
  0,
  0.12137,
  0,
  0,
  0,
  1,
  0
]);
var sh = Qa("Polaroid", [
  1.438,
  -0.062,
  -0.062,
  0,
  0,
  -0.122,
  1.378,
  -0.122,
  0,
  0,
  -0.016,
  -0.016,
  1.483,
  0,
  0,
  0,
  0,
  0,
  1,
  0
]);
var ih = Qa("Sepia", [
  0.393,
  0.769,
  0.189,
  0,
  0,
  0.349,
  0.686,
  0.168,
  0,
  0,
  0.272,
  0.534,
  0.131,
  0,
  0,
  0,
  0,
  0,
  1,
  0
]);
var rh = Qa("BlackWhite", [
  1.5,
  1.5,
  1.5,
  0,
  -1,
  1.5,
  1.5,
  1.5,
  0,
  -1,
  1.5,
  1.5,
  1.5,
  0,
  -1,
  0,
  0,
  0,
  1,
  0
]);
var nh = class extends Ya {
  constructor() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    super(t3), this.subFilters = t3.subFilters || [];
  }
  applyTo(t3) {
    Fa(t3) && (t3.passes += this.subFilters.length - 1), this.subFilters.forEach((e4) => {
      e4.applyTo(t3);
    });
  }
  toObject() {
    return {
      type: this.type,
      subFilters: this.subFilters.map((t3) => t3.toObject())
    };
  }
  isNeutralState() {
    return !this.subFilters.some((t3) => !t3.isNeutralState());
  }
  static fromObject(t3, e4) {
    return Promise.all((t3.subFilters || []).map((t4) => tt.getClass(t4.type).fromObject(t4, e4))).then((t4) => new this({
      subFilters: t4
    }));
  }
};
t(nh, "type", "Composed"), tt.setClass(nh);
var oh = class extends Ya {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uContrast;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\n    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;\n    gl_FragColor = color;\n  }";
  }
  isNeutralState() {
    return 0 === this.contrast;
  }
  applyTo2d(t3) {
    let { imageData: { data: e4 } } = t3;
    const s3 = Math.floor(255 * this.contrast), i3 = 259 * (s3 + 255) / (255 * (259 - s3));
    for (let t4 = 0; t4 < e4.length; t4 += 4) e4[t4] = i3 * (e4[t4] - 128) + 128, e4[t4 + 1] = i3 * (e4[t4 + 1] - 128) + 128, e4[t4 + 2] = i3 * (e4[t4 + 2] - 128) + 128;
  }
  sendUniformData(t3, e4) {
    t3.uniform1f(e4.uContrast, this.contrast);
  }
};
t(oh, "type", "Contrast"), t(oh, "defaults", {
  contrast: 0
}), t(oh, "uniformLocations", [
  "uContrast"
]), tt.setClass(oh);
var ah = {
  Convolute_3_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
  Convolute_3_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
  Convolute_5_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
  Convolute_5_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
  Convolute_7_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
  Convolute_7_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
  Convolute_9_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
  Convolute_9_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    "
};
var hh = class extends Ya {
  getCacheKey() {
    return "".concat(this.type, "_").concat(Math.sqrt(this.matrix.length), "_").concat(this.opaque ? 1 : 0);
  }
  getFragmentSource() {
    return ah[this.getCacheKey()];
  }
  applyTo2d(t3) {
    const e4 = t3.imageData, s3 = e4.data, i3 = this.matrix, r3 = Math.round(Math.sqrt(i3.length)), n3 = Math.floor(r3 / 2), o3 = e4.width, a3 = e4.height, h3 = t3.ctx.createImageData(o3, a3), c3 = h3.data, l3 = this.opaque ? 1 : 0;
    let u3, d3, g3, f2, p3, m3, v3, y3, _3, x3, C3, b3, S3;
    for (C3 = 0; C3 < a3; C3++) for (x3 = 0; x3 < o3; x3++) {
      for (p3 = 4 * (C3 * o3 + x3), u3 = 0, d3 = 0, g3 = 0, f2 = 0, S3 = 0; S3 < r3; S3++) for (b3 = 0; b3 < r3; b3++) v3 = C3 + S3 - n3, m3 = x3 + b3 - n3, v3 < 0 || v3 >= a3 || m3 < 0 || m3 >= o3 || (y3 = 4 * (v3 * o3 + m3), _3 = i3[S3 * r3 + b3], u3 += s3[y3] * _3, d3 += s3[y3 + 1] * _3, g3 += s3[y3 + 2] * _3, l3 || (f2 += s3[y3 + 3] * _3));
      c3[p3] = u3, c3[p3 + 1] = d3, c3[p3 + 2] = g3, c3[p3 + 3] = l3 ? s3[p3 + 3] : f2;
    }
    t3.imageData = h3;
  }
  sendUniformData(t3, e4) {
    t3.uniform1fv(e4.uMatrix, this.matrix);
  }
  toObject() {
    return s(s({}, super.toObject()), {}, {
      opaque: this.opaque,
      matrix: [
        ...this.matrix
      ]
    });
  }
};
t(hh, "type", "Convolute"), t(hh, "defaults", {
  opaque: false,
  matrix: [
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0
  ]
}), t(hh, "uniformLocations", [
  "uMatrix",
  "uOpaque",
  "uHalfSize",
  "uSize"
]), tt.setClass(hh);
var ch = "Gamma";
var lh = class extends Ya {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform vec3 uGamma;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    vec3 correction = (1.0 / uGamma);\n    color.r = pow(color.r, correction.r);\n    color.g = pow(color.g, correction.g);\n    color.b = pow(color.b, correction.b);\n    gl_FragColor = color;\n    gl_FragColor.rgb *= color.a;\n  }\n";
  }
  constructor() {
    let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    super(t3), this.gamma = t3.gamma || this.constructor.defaults.gamma.concat();
  }
  applyTo2d(t3) {
    let { imageData: { data: e4 } } = t3;
    const s3 = this.gamma, i3 = 1 / s3[0], r3 = 1 / s3[1], n3 = 1 / s3[2];
    this.rgbValues || (this.rgbValues = {
      r: new Uint8Array(256),
      g: new Uint8Array(256),
      b: new Uint8Array(256)
    });
    const o3 = this.rgbValues;
    for (let t4 = 0; t4 < 256; t4++) o3.r[t4] = 255 * Math.pow(t4 / 255, i3), o3.g[t4] = 255 * Math.pow(t4 / 255, r3), o3.b[t4] = 255 * Math.pow(t4 / 255, n3);
    for (let t4 = 0; t4 < e4.length; t4 += 4) e4[t4] = o3.r[e4[t4]], e4[t4 + 1] = o3.g[e4[t4 + 1]], e4[t4 + 2] = o3.b[e4[t4 + 2]];
  }
  sendUniformData(t3, e4) {
    t3.uniform3fv(e4.uGamma, this.gamma);
  }
  isNeutralState() {
    const { gamma: t3 } = this;
    return 1 === t3[0] && 1 === t3[1] && 1 === t3[2];
  }
  toObject() {
    return {
      type: ch,
      gamma: this.gamma.concat()
    };
  }
};
t(lh, "type", ch), t(lh, "defaults", {
  gamma: [
    1,
    1,
    1
  ]
}), t(lh, "uniformLocations", [
  "uGamma"
]), tt.setClass(lh);
var uh = {
  average: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      float average = (color.r + color.b + color.g) / 3.0;\n      gl_FragColor = vec4(average, average, average, color.a);\n    }\n    ",
  lightness: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    ",
  luminosity: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    "
};
var dh = class extends Ya {
  applyTo2d(t3) {
    let { imageData: { data: e4 } } = t3;
    for (let t4, s3 = 0; s3 < e4.length; s3 += 4) {
      const i3 = e4[s3], r3 = e4[s3 + 1], n3 = e4[s3 + 2];
      switch (this.mode) {
        case "average":
          t4 = (i3 + r3 + n3) / 3;
          break;
        case "lightness":
          t4 = (Math.min(i3, r3, n3) + Math.max(i3, r3, n3)) / 2;
          break;
        case "luminosity":
          t4 = 0.21 * i3 + 0.72 * r3 + 0.07 * n3;
      }
      e4[s3 + 2] = e4[s3 + 1] = e4[s3] = t4;
    }
  }
  getCacheKey() {
    return "".concat(this.type, "_").concat(this.mode);
  }
  getFragmentSource() {
    return uh[this.mode];
  }
  sendUniformData(t3, e4) {
    t3.uniform1i(e4.uMode, 1);
  }
  isNeutralState() {
    return false;
  }
};
t(dh, "type", "Grayscale"), t(dh, "defaults", {
  mode: "average"
}), t(dh, "uniformLocations", [
  "uMode"
]), tt.setClass(dh);
var gh = s(s({}, Ka), {}, {
  rotation: 0
});
var fh = class extends Ja {
  calculateMatrix() {
    const t3 = this.rotation * Math.PI, e4 = rt(t3), s3 = nt(t3), i3 = 1 / 3, r3 = Math.sqrt(i3) * s3, n3 = 1 - e4;
    this.matrix = [
      e4 + n3 / 3,
      i3 * n3 - r3,
      i3 * n3 + r3,
      0,
      0,
      i3 * n3 + r3,
      e4 + i3 * n3,
      i3 * n3 - r3,
      0,
      0,
      i3 * n3 - r3,
      i3 * n3 + r3,
      e4 + i3 * n3,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
  }
  isNeutralState() {
    return 0 === this.rotation;
  }
  applyTo(t3) {
    this.calculateMatrix(), super.applyTo(t3);
  }
  toObject() {
    return {
      type: this.type,
      rotation: this.rotation
    };
  }
};
t(fh, "type", "HueRotation"), t(fh, "defaults", gh), tt.setClass(fh);
var ph = class extends Ya {
  applyTo2d(t3) {
    let { imageData: { data: e4 } } = t3;
    for (let t4 = 0; t4 < e4.length; t4 += 4) e4[t4] = 255 - e4[t4], e4[t4 + 1] = 255 - e4[t4 + 1], e4[t4 + 2] = 255 - e4[t4 + 2], this.alpha && (e4[t4 + 3] = 255 - e4[t4 + 3]);
  }
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform int uInvert;\n  uniform int uAlpha;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    if (uInvert == 1) {\n      if (uAlpha == 1) {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);\n      } else {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n      }\n    } else {\n      gl_FragColor = color;\n    }\n  }\n";
  }
  isNeutralState() {
    return !this.invert;
  }
  sendUniformData(t3, e4) {
    t3.uniform1i(e4.uInvert, Number(this.invert)), t3.uniform1i(e4.uAlpha, Number(this.alpha));
  }
};
t(ph, "type", "Invert"), t(ph, "defaults", {
  alpha: false,
  invert: true
}), t(ph, "uniformLocations", [
  "uInvert",
  "uAlpha"
]), tt.setClass(ph);
var mh = class extends Ya {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uStepH;\n  uniform float uNoise;\n  uniform float uSeed;\n  varying vec2 vTexCoord;\n  float rand(vec2 co, float seed, float vScale) {\n    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n  }\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t3) {
    let { imageData: { data: e4 } } = t3;
    const s3 = this.noise;
    for (let t4 = 0; t4 < e4.length; t4 += 4) {
      const i3 = (0.5 - Math.random()) * s3;
      e4[t4] += i3, e4[t4 + 1] += i3, e4[t4 + 2] += i3;
    }
  }
  sendUniformData(t3, e4) {
    t3.uniform1f(e4.uNoise, this.noise / 255), t3.uniform1f(e4.uSeed, Math.random());
  }
  isNeutralState() {
    return 0 === this.noise;
  }
};
t(mh, "type", "Noise"), t(mh, "defaults", {
  noise: 0
}), t(mh, "uniformLocations", [
  "uNoise",
  "uSeed"
]), tt.setClass(mh);
var vh = class extends Ya {
  applyTo2d(t3) {
    let { imageData: { data: e4, width: s3, height: i3 } } = t3;
    for (let t4 = 0; t4 < i3; t4 += this.blocksize) for (let r3 = 0; r3 < s3; r3 += this.blocksize) {
      const n3 = 4 * t4 * s3 + 4 * r3, o3 = e4[n3], a3 = e4[n3 + 1], h3 = e4[n3 + 2], c3 = e4[n3 + 3];
      for (let n4 = t4; n4 < Math.min(t4 + this.blocksize, i3); n4++) for (let t5 = r3; t5 < Math.min(r3 + this.blocksize, s3); t5++) {
        const i4 = 4 * n4 * s3 + 4 * t5;
        e4[i4] = o3, e4[i4 + 1] = a3, e4[i4 + 2] = h3, e4[i4 + 3] = c3;
      }
    }
  }
  isNeutralState() {
    return 1 === this.blocksize;
  }
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBlocksize;\n  uniform float uStepW;\n  uniform float uStepH;\n  varying vec2 vTexCoord;\n  void main() {\n    float blockW = uBlocksize * uStepW;\n    float blockH = uBlocksize * uStepH;\n    int posX = int(vTexCoord.x / blockW);\n    int posY = int(vTexCoord.y / blockH);\n    float fposX = float(posX);\n    float fposY = float(posY);\n    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\n    vec4 color = texture2D(uTexture, squareCoords);\n    gl_FragColor = color;\n  }\n";
  }
  sendUniformData(t3, e4) {
    t3.uniform1f(e4.uBlocksize, this.blocksize);
  }
};
t(vh, "type", "Pixelate"), t(vh, "defaults", {
  blocksize: 4
}), t(vh, "uniformLocations", [
  "uBlocksize"
]), tt.setClass(vh);
var yh = class extends Ya {
  getFragmentSource() {
    return "\nprecision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_FragColor = texture2D(uTexture, vTexCoord);\n  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\n    gl_FragColor.a = 0.0;\n  }\n}\n";
  }
  applyTo2d(t3) {
    let { imageData: { data: e4 } } = t3;
    const s3 = 255 * this.distance, i3 = new Le(this.color).getSource(), r3 = [
      i3[0] - s3,
      i3[1] - s3,
      i3[2] - s3
    ], n3 = [
      i3[0] + s3,
      i3[1] + s3,
      i3[2] + s3
    ];
    for (let t4 = 0; t4 < e4.length; t4 += 4) {
      const s4 = e4[t4], i4 = e4[t4 + 1], o3 = e4[t4 + 2];
      s4 > r3[0] && i4 > r3[1] && o3 > r3[2] && s4 < n3[0] && i4 < n3[1] && o3 < n3[2] && (e4[t4 + 3] = 0);
    }
  }
  sendUniformData(t3, e4) {
    const s3 = new Le(this.color).getSource(), i3 = this.distance, r3 = [
      0 + s3[0] / 255 - i3,
      0 + s3[1] / 255 - i3,
      0 + s3[2] / 255 - i3,
      1
    ], n3 = [
      s3[0] / 255 + i3,
      s3[1] / 255 + i3,
      s3[2] / 255 + i3,
      1
    ];
    t3.uniform4fv(e4.uLow, r3), t3.uniform4fv(e4.uHigh, n3);
  }
};
t(yh, "type", "RemoveColor"), t(yh, "defaults", {
  color: "#FFFFFF",
  distance: 0.02,
  useAlpha: false
}), t(yh, "uniformLocations", [
  "uLow",
  "uHigh"
]), tt.setClass(yh);
var _h = class extends Ya {
  sendUniformData(t3, e4) {
    t3.uniform2fv(e4.uDelta, this.horizontal ? [
      1 / this.width,
      0
    ] : [
      0,
      1 / this.height
    ]), t3.uniform1fv(e4.uTaps, this.taps);
  }
  getFilterWindow() {
    const t3 = this.tempScale;
    return Math.ceil(this.lanczosLobes / t3);
  }
  getCacheKey() {
    const t3 = this.getFilterWindow();
    return "".concat(this.type, "_").concat(t3);
  }
  getFragmentSource() {
    const t3 = this.getFilterWindow();
    return this.generateShader(t3);
  }
  getTaps() {
    const t3 = this.lanczosCreate(this.lanczosLobes), e4 = this.tempScale, s3 = this.getFilterWindow(), i3 = new Array(s3);
    for (let r3 = 1; r3 <= s3; r3++) i3[r3 - 1] = t3(r3 * e4);
    return i3;
  }
  generateShader(t3) {
    const e4 = new Array(t3);
    for (let s3 = 1; s3 <= t3; s3++) e4[s3 - 1] = "".concat(s3, ".0 * uDelta");
    return "\n      precision highp float;\n      uniform sampler2D uTexture;\n      uniform vec2 uDelta;\n      varying vec2 vTexCoord;\n      uniform float uTaps[".concat(t3, "];\n      void main() {\n        vec4 color = texture2D(uTexture, vTexCoord);\n        float sum = 1.0;\n        ").concat(e4.map((t4, e5) => "\n              color += texture2D(uTexture, vTexCoord + ".concat(t4, ") * uTaps[").concat(e5, "] + texture2D(uTexture, vTexCoord - ").concat(t4, ") * uTaps[").concat(e5, "];\n              sum += 2.0 * uTaps[").concat(e5, "];\n            ")).join("\n"), "\n        gl_FragColor = color / sum;\n      }\n    ");
  }
  applyToForWebgl(t3) {
    t3.passes++, this.width = t3.sourceWidth, this.horizontal = true, this.dW = Math.round(this.width * this.scaleX), this.dH = t3.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), t3.destinationWidth = this.dW, super.applyTo(t3), t3.sourceWidth = t3.destinationWidth, this.height = t3.sourceHeight, this.horizontal = false, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), t3.destinationHeight = this.dH, super.applyTo(t3), t3.sourceHeight = t3.destinationHeight;
  }
  applyTo(t3) {
    Fa(t3) ? this.applyToForWebgl(t3) : this.applyTo2d(t3);
  }
  isNeutralState() {
    return 1 === this.scaleX && 1 === this.scaleY;
  }
  lanczosCreate(t3) {
    return (e4) => {
      if (e4 >= t3 || e4 <= -t3) return 0;
      if (e4 < 11920929e-14 && e4 > -11920929e-14) return 1;
      const s3 = (e4 *= Math.PI) / t3;
      return Math.sin(e4) / e4 * Math.sin(s3) / s3;
    };
  }
  applyTo2d(t3) {
    const e4 = t3.imageData, s3 = this.scaleX, i3 = this.scaleY;
    this.rcpScaleX = 1 / s3, this.rcpScaleY = 1 / i3;
    const r3 = e4.width, n3 = e4.height, o3 = Math.round(r3 * s3), a3 = Math.round(n3 * i3);
    let h3;
    h3 = "sliceHack" === this.resizeType ? this.sliceByTwo(t3, r3, n3, o3, a3) : "hermite" === this.resizeType ? this.hermiteFastResize(t3, r3, n3, o3, a3) : "bilinear" === this.resizeType ? this.bilinearFiltering(t3, r3, n3, o3, a3) : "lanczos" === this.resizeType ? this.lanczosResize(t3, r3, n3, o3, a3) : new ImageData(o3, a3), t3.imageData = h3;
  }
  sliceByTwo(t3, e4, s3, i3, r3) {
    const n3 = t3.imageData, o3 = 0.5;
    let a3 = false, h3 = false, c3 = e4 * o3, l3 = s3 * o3;
    const u3 = t3.filterBackend.resources;
    let d3 = 0, g3 = 0;
    const f2 = e4;
    let p3 = 0;
    u3.sliceByTwo || (u3.sliceByTwo = pt());
    const m3 = u3.sliceByTwo;
    (m3.width < 1.5 * e4 || m3.height < s3) && (m3.width = 1.5 * e4, m3.height = s3);
    const v3 = m3.getContext("2d");
    for (v3.clearRect(0, 0, 1.5 * e4, s3), v3.putImageData(n3, 0, 0), i3 = Math.floor(i3), r3 = Math.floor(r3); !a3 || !h3; ) e4 = c3, s3 = l3, i3 < Math.floor(c3 * o3) ? c3 = Math.floor(c3 * o3) : (c3 = i3, a3 = true), r3 < Math.floor(l3 * o3) ? l3 = Math.floor(l3 * o3) : (l3 = r3, h3 = true), v3.drawImage(m3, d3, g3, e4, s3, f2, p3, c3, l3), d3 = f2, g3 = p3, p3 += l3;
    return v3.getImageData(d3, g3, i3, r3);
  }
  lanczosResize(t3, e4, s3, i3, r3) {
    const n3 = t3.imageData.data, o3 = t3.ctx.createImageData(i3, r3), a3 = o3.data, h3 = this.lanczosCreate(this.lanczosLobes), c3 = this.rcpScaleX, l3 = this.rcpScaleY, u3 = 2 / this.rcpScaleX, d3 = 2 / this.rcpScaleY, g3 = Math.ceil(c3 * this.lanczosLobes / 2), f2 = Math.ceil(l3 * this.lanczosLobes / 2), p3 = {}, m3 = {
      x: 0,
      y: 0
    }, v3 = {
      x: 0,
      y: 0
    };
    return function t4(y3) {
      let _3, x3, C3, b3, S3, w3, T2, O2, k3, D2, M3;
      for (m3.x = (y3 + 0.5) * c3, v3.x = Math.floor(m3.x), _3 = 0; _3 < r3; _3++) {
        for (m3.y = (_3 + 0.5) * l3, v3.y = Math.floor(m3.y), S3 = 0, w3 = 0, T2 = 0, O2 = 0, k3 = 0, x3 = v3.x - g3; x3 <= v3.x + g3; x3++) if (!(x3 < 0 || x3 >= e4)) {
          D2 = Math.floor(1e3 * Math.abs(x3 - m3.x)), p3[D2] || (p3[D2] = {});
          for (let t5 = v3.y - f2; t5 <= v3.y + f2; t5++) t5 < 0 || t5 >= s3 || (M3 = Math.floor(1e3 * Math.abs(t5 - m3.y)), p3[D2][M3] || (p3[D2][M3] = h3(Math.sqrt(Math.pow(D2 * u3, 2) + Math.pow(M3 * d3, 2)) / 1e3)), C3 = p3[D2][M3], C3 > 0 && (b3 = 4 * (t5 * e4 + x3), S3 += C3, w3 += C3 * n3[b3], T2 += C3 * n3[b3 + 1], O2 += C3 * n3[b3 + 2], k3 += C3 * n3[b3 + 3]));
        }
        b3 = 4 * (_3 * i3 + y3), a3[b3] = w3 / S3, a3[b3 + 1] = T2 / S3, a3[b3 + 2] = O2 / S3, a3[b3 + 3] = k3 / S3;
      }
      return ++y3 < i3 ? t4(y3) : o3;
    }(0);
  }
  bilinearFiltering(t3, e4, s3, i3, r3) {
    let n3, o3, a3, h3, c3, l3, u3, d3, g3, f2, p3, m3, v3, y3 = 0;
    const _3 = this.rcpScaleX, x3 = this.rcpScaleY, C3 = 4 * (e4 - 1), b3 = t3.imageData.data, S3 = t3.ctx.createImageData(i3, r3), w3 = S3.data;
    for (u3 = 0; u3 < r3; u3++) for (d3 = 0; d3 < i3; d3++) for (c3 = Math.floor(_3 * d3), l3 = Math.floor(x3 * u3), g3 = _3 * d3 - c3, f2 = x3 * u3 - l3, v3 = 4 * (l3 * e4 + c3), p3 = 0; p3 < 4; p3++) n3 = b3[v3 + p3], o3 = b3[v3 + 4 + p3], a3 = b3[v3 + C3 + p3], h3 = b3[v3 + C3 + 4 + p3], m3 = n3 * (1 - g3) * (1 - f2) + o3 * g3 * (1 - f2) + a3 * f2 * (1 - g3) + h3 * g3 * f2, w3[y3++] = m3;
    return S3;
  }
  hermiteFastResize(t3, e4, s3, i3, r3) {
    const n3 = this.rcpScaleX, o3 = this.rcpScaleY, a3 = Math.ceil(n3 / 2), h3 = Math.ceil(o3 / 2), c3 = t3.imageData.data, l3 = t3.ctx.createImageData(i3, r3), u3 = l3.data;
    for (let t4 = 0; t4 < r3; t4++) for (let s4 = 0; s4 < i3; s4++) {
      const r4 = 4 * (s4 + t4 * i3);
      let l4 = 0, d3 = 0, g3 = 0, f2 = 0, p3 = 0, m3 = 0, v3 = 0;
      const y3 = (t4 + 0.5) * o3;
      for (let i4 = Math.floor(t4 * o3); i4 < (t4 + 1) * o3; i4++) {
        const t5 = Math.abs(y3 - (i4 + 0.5)) / h3, r5 = (s4 + 0.5) * n3, o4 = t5 * t5;
        for (let t6 = Math.floor(s4 * n3); t6 < (s4 + 1) * n3; t6++) {
          let s5 = Math.abs(r5 - (t6 + 0.5)) / a3;
          const n4 = Math.sqrt(o4 + s5 * s5);
          n4 > 1 && n4 < -1 || (l4 = 2 * n4 * n4 * n4 - 3 * n4 * n4 + 1, l4 > 0 && (s5 = 4 * (t6 + i4 * e4), v3 += l4 * c3[s5 + 3], g3 += l4, c3[s5 + 3] < 255 && (l4 = l4 * c3[s5 + 3] / 250), f2 += l4 * c3[s5], p3 += l4 * c3[s5 + 1], m3 += l4 * c3[s5 + 2], d3 += l4));
        }
      }
      u3[r4] = f2 / d3, u3[r4 + 1] = p3 / d3, u3[r4 + 2] = m3 / d3, u3[r4 + 3] = v3 / g3;
    }
    return l3;
  }
};
t(_h, "type", "Resize"), t(_h, "defaults", {
  resizeType: "hermite",
  scaleX: 1,
  scaleY: 1,
  lanczosLobes: 3
}), t(_h, "uniformLocations", [
  "uDelta",
  "uTaps"
]), tt.setClass(_h);
var xh = class extends Ya {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uSaturation;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float rgMax = max(color.r, color.g);\n    float rgbMax = max(rgMax, color.b);\n    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\n    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\n    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t3) {
    let { imageData: { data: e4 } } = t3;
    const s3 = -this.saturation;
    for (let t4 = 0; t4 < e4.length; t4 += 4) {
      const i3 = e4[t4], r3 = e4[t4 + 1], n3 = e4[t4 + 2], o3 = Math.max(i3, r3, n3);
      e4[t4] += o3 !== i3 ? (o3 - i3) * s3 : 0, e4[t4 + 1] += o3 !== r3 ? (o3 - r3) * s3 : 0, e4[t4 + 2] += o3 !== n3 ? (o3 - n3) * s3 : 0;
    }
  }
  sendUniformData(t3, e4) {
    t3.uniform1f(e4.uSaturation, -this.saturation);
  }
  isNeutralState() {
    return 0 === this.saturation;
  }
};
t(xh, "type", "Saturation"), t(xh, "defaults", {
  saturation: 0
}), t(xh, "uniformLocations", [
  "uSaturation"
]), tt.setClass(xh);
var Ch = class extends Ya {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uVibrance;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float max = max(color.r, max(color.g, color.b));\n    float avg = (color.r + color.g + color.b) / 3.0;\n    float amt = (abs(max - avg) * 2.0) * uVibrance;\n    color.r += max != color.r ? (max - color.r) * amt : 0.00;\n    color.g += max != color.g ? (max - color.g) * amt : 0.00;\n    color.b += max != color.b ? (max - color.b) * amt : 0.00;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t3) {
    let { imageData: { data: e4 } } = t3;
    const s3 = -this.vibrance;
    for (let t4 = 0; t4 < e4.length; t4 += 4) {
      const i3 = e4[t4], r3 = e4[t4 + 1], n3 = e4[t4 + 2], o3 = Math.max(i3, r3, n3), a3 = (i3 + r3 + n3) / 3, h3 = 2 * Math.abs(o3 - a3) / 255 * s3;
      e4[t4] += o3 !== i3 ? (o3 - i3) * h3 : 0, e4[t4 + 1] += o3 !== r3 ? (o3 - r3) * h3 : 0, e4[t4 + 2] += o3 !== n3 ? (o3 - n3) * h3 : 0;
    }
  }
  sendUniformData(t3, e4) {
    t3.uniform1f(e4.uVibrance, -this.vibrance);
  }
  isNeutralState() {
    return 0 === this.vibrance;
  }
};
t(Ch, "type", "Vibrance"), t(Ch, "defaults", {
  vibrance: 0
}), t(Ch, "uniformLocations", [
  "uVibrance"
]), tt.setClass(Ch);
var bh = Object.freeze({
  __proto__: null,
  BaseFilter: Ya,
  BlackWhite: rh,
  BlendColor: Ga,
  BlendImage: Na,
  Blur: Ua,
  Brightness: qa,
  Brownie: Za,
  ColorMatrix: Ja,
  Composed: nh,
  Contrast: oh,
  Convolute: hh,
  Gamma: lh,
  Grayscale: dh,
  HueRotation: fh,
  Invert: ph,
  Kodachrome: th,
  Noise: mh,
  Pixelate: vh,
  Polaroid: sh,
  RemoveColor: yh,
  Resize: _h,
  Saturation: xh,
  Sepia: ih,
  Technicolor: eh,
  Vibrance: Ch,
  Vintage: $a
});

// deno:https://cdn.jsdelivr.net/npm/svgpath@2.6.0/+esm
var t2 = {
  a: 7,
  c: 6,
  h: 1,
  l: 2,
  m: 2,
  r: 4,
  q: 4,
  s: 4,
  t: 2,
  v: 1,
  z: 0
};
var e3 = [
  5760,
  6158,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8239,
  8287,
  12288,
  65279
];
function r2(t3) {
  return t3 >= 48 && t3 <= 57;
}
function a2(t3) {
  return t3 >= 48 && t3 <= 57 || 43 === t3 || 45 === t3 || 46 === t3;
}
function s2(t3) {
  this.index = 0, this.path = t3, this.max = t3.length, this.result = [], this.param = 0, this.err = "", this.segmentStart = 0, this.data = [];
}
function i2(t3) {
  for (; t3.index < t3.max && (10 === (r3 = t3.path.charCodeAt(t3.index)) || 13 === r3 || 8232 === r3 || 8233 === r3 || 32 === r3 || 9 === r3 || 11 === r3 || 12 === r3 || 160 === r3 || r3 >= 5760 && e3.indexOf(r3) >= 0); ) t3.index++;
  var r3;
}
function n2(t3) {
  var e4 = t3.path.charCodeAt(t3.index);
  return 48 === e4 ? (t3.param = 0, void t3.index++) : 49 === e4 ? (t3.param = 1, void t3.index++) : void (t3.err = "SvgPath: arc flag can be 0 or 1 only (at pos " + t3.index + ")");
}
function h2(t3) {
  var e4, a3 = t3.index, s3 = a3, i3 = t3.max, n3 = false, h3 = false, o3 = false, c3 = false;
  if (s3 >= i3) t3.err = "SvgPath: missed param (at pos " + s3 + ")";
  else if (43 !== (e4 = t3.path.charCodeAt(s3)) && 45 !== e4 || (e4 = ++s3 < i3 ? t3.path.charCodeAt(s3) : 0), r2(e4) || 46 === e4) {
    if (46 !== e4) {
      if (n3 = 48 === e4, e4 = ++s3 < i3 ? t3.path.charCodeAt(s3) : 0, n3 && s3 < i3 && e4 && r2(e4)) return void (t3.err = "SvgPath: numbers started with `0` such as `09` are illegal (at pos " + a3 + ")");
      for (; s3 < i3 && r2(t3.path.charCodeAt(s3)); ) s3++, h3 = true;
      e4 = s3 < i3 ? t3.path.charCodeAt(s3) : 0;
    }
    if (46 === e4) {
      for (c3 = true, s3++; r2(t3.path.charCodeAt(s3)); ) s3++, o3 = true;
      e4 = s3 < i3 ? t3.path.charCodeAt(s3) : 0;
    }
    if (101 === e4 || 69 === e4) {
      if (c3 && !h3 && !o3) return void (t3.err = "SvgPath: invalid float exponent (at pos " + s3 + ")");
      if (43 !== (e4 = ++s3 < i3 ? t3.path.charCodeAt(s3) : 0) && 45 !== e4 || s3++, !(s3 < i3 && r2(t3.path.charCodeAt(s3)))) return void (t3.err = "SvgPath: invalid float exponent (at pos " + s3 + ")");
      for (; s3 < i3 && r2(t3.path.charCodeAt(s3)); ) s3++;
    }
    t3.index = s3, t3.param = parseFloat(t3.path.slice(a3, s3)) + 0;
  } else t3.err = "SvgPath: param should start with 0..9 or `.` (at pos " + s3 + ")";
}
function o2(e4) {
  var r3, a3;
  a3 = (r3 = e4.path[e4.segmentStart]).toLowerCase();
  var s3 = e4.data;
  if ("m" === a3 && s3.length > 2 && (e4.result.push([
    r3,
    s3[0],
    s3[1]
  ]), s3 = s3.slice(2), a3 = "l", r3 = "m" === r3 ? "l" : "L"), "r" === a3) e4.result.push([
    r3
  ].concat(s3));
  else for (; s3.length >= t2[a3] && (e4.result.push([
    r3
  ].concat(s3.splice(0, t2[a3]))), t2[a3]); ) ;
}
function c2(e4) {
  var r3, s3, c3, u3, f2, l3 = e4.max;
  if (e4.segmentStart = e4.index, r3 = e4.path.charCodeAt(e4.index), s3 = 97 == (32 | r3), function(t3) {
    switch (32 | t3) {
      case 109:
      case 122:
      case 108:
      case 104:
      case 118:
      case 99:
      case 115:
      case 113:
      case 116:
      case 97:
      case 114:
        return true;
    }
    return false;
  }(r3)) if (u3 = t2[e4.path[e4.index].toLowerCase()], e4.index++, i2(e4), e4.data = [], u3) {
    for (c3 = false; ; ) {
      for (f2 = u3; f2 > 0; f2--) {
        if (!s3 || 3 !== f2 && 4 !== f2 ? h2(e4) : n2(e4), e4.err.length) return void o2(e4);
        e4.data.push(e4.param), i2(e4), c3 = false, e4.index < l3 && 44 === e4.path.charCodeAt(e4.index) && (e4.index++, i2(e4), c3 = true);
      }
      if (!c3) {
        if (e4.index >= e4.max) break;
        if (!a2(e4.path.charCodeAt(e4.index))) break;
      }
    }
    o2(e4);
  } else o2(e4);
  else e4.err = "SvgPath: bad command " + e4.path[e4.index] + " (at pos " + e4.index + ")";
}
function u2() {
  if (!(this instanceof u2)) return new u2();
  this.queue = [], this.cache = null;
}
u2.prototype.matrix = function(t3) {
  return 1 === t3[0] && 0 === t3[1] && 0 === t3[2] && 1 === t3[3] && 0 === t3[4] && 0 === t3[5] || (this.cache = null, this.queue.push(t3)), this;
}, u2.prototype.translate = function(t3, e4) {
  return 0 === t3 && 0 === e4 || (this.cache = null, this.queue.push([
    1,
    0,
    0,
    1,
    t3,
    e4
  ])), this;
}, u2.prototype.scale = function(t3, e4) {
  return 1 === t3 && 1 === e4 || (this.cache = null, this.queue.push([
    t3,
    0,
    0,
    e4,
    0,
    0
  ])), this;
}, u2.prototype.rotate = function(t3, e4, r3) {
  var a3, s3, i3;
  return 0 !== t3 && (this.translate(e4, r3), a3 = t3 * Math.PI / 180, s3 = Math.cos(a3), i3 = Math.sin(a3), this.queue.push([
    s3,
    i3,
    -i3,
    s3,
    0,
    0
  ]), this.cache = null, this.translate(-e4, -r3)), this;
}, u2.prototype.skewX = function(t3) {
  return 0 !== t3 && (this.cache = null, this.queue.push([
    1,
    0,
    Math.tan(t3 * Math.PI / 180),
    1,
    0,
    0
  ])), this;
}, u2.prototype.skewY = function(t3) {
  return 0 !== t3 && (this.cache = null, this.queue.push([
    1,
    Math.tan(t3 * Math.PI / 180),
    0,
    1,
    0,
    0
  ])), this;
}, u2.prototype.toArray = function() {
  if (this.cache) return this.cache;
  if (!this.queue.length) return this.cache = [
    1,
    0,
    0,
    1,
    0,
    0
  ], this.cache;
  if (this.cache = this.queue[0], 1 === this.queue.length) return this.cache;
  for (var t3 = 1; t3 < this.queue.length; t3++) this.cache = (e4 = this.cache, r3 = this.queue[t3], [
    e4[0] * r3[0] + e4[2] * r3[1],
    e4[1] * r3[0] + e4[3] * r3[1],
    e4[0] * r3[2] + e4[2] * r3[3],
    e4[1] * r3[2] + e4[3] * r3[3],
    e4[0] * r3[4] + e4[2] * r3[5] + e4[4],
    e4[1] * r3[4] + e4[3] * r3[5] + e4[5]
  ]);
  var e4, r3;
  return this.cache;
}, u2.prototype.calc = function(t3, e4, r3) {
  var a3;
  return this.queue.length ? (this.cache || (this.cache = this.toArray()), [
    t3 * (a3 = this.cache)[0] + e4 * a3[2] + (r3 ? 0 : a3[4]),
    t3 * a3[1] + e4 * a3[3] + (r3 ? 0 : a3[5])
  ]) : [
    t3,
    e4
  ];
};
var f = u2;
var l2 = f;
var p2 = {
  matrix: true,
  scale: true,
  rotate: true,
  translate: true,
  skewX: true,
  skewY: true
};
var d2 = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/;
var v2 = /[\s,]+/;
var x2 = 2 * Math.PI;
function m2(t3, e4, r3, a3) {
  var s3 = t3 * r3 + e4 * a3;
  return s3 > 1 && (s3 = 1), s3 < -1 && (s3 = -1), (t3 * a3 - e4 * r3 < 0 ? -1 : 1) * Math.acos(s3);
}
function g2(t3, e4) {
  var r3 = 4 / 3 * Math.tan(e4 / 4), a3 = Math.cos(t3), s3 = Math.sin(t3), i3 = Math.cos(t3 + e4), n3 = Math.sin(t3 + e4);
  return [
    a3,
    s3,
    a3 - s3 * r3,
    s3 + a3 * r3,
    i3 + n3 * r3,
    n3 - i3 * r3,
    i3,
    n3
  ];
}
var _2 = 1e-10;
var M2 = Math.PI / 180;
function y2(t3, e4, r3) {
  if (!(this instanceof y2)) return new y2(t3, e4, r3);
  this.rx = t3, this.ry = e4, this.ax = r3;
}
y2.prototype.transform = function(t3) {
  var e4 = Math.cos(this.ax * M2), r3 = Math.sin(this.ax * M2), a3 = [
    this.rx * (t3[0] * e4 + t3[2] * r3),
    this.rx * (t3[1] * e4 + t3[3] * r3),
    this.ry * (-t3[0] * r3 + t3[2] * e4),
    this.ry * (-t3[1] * r3 + t3[3] * e4)
  ], s3 = a3[0] * a3[0] + a3[2] * a3[2], i3 = a3[1] * a3[1] + a3[3] * a3[3], n3 = ((a3[0] - a3[3]) * (a3[0] - a3[3]) + (a3[2] + a3[1]) * (a3[2] + a3[1])) * ((a3[0] + a3[3]) * (a3[0] + a3[3]) + (a3[2] - a3[1]) * (a3[2] - a3[1])), h3 = (s3 + i3) / 2;
  if (n3 < _2 * h3) return this.rx = this.ry = Math.sqrt(h3), this.ax = 0, this;
  var o3 = a3[0] * a3[1] + a3[2] * a3[3], c3 = h3 + (n3 = Math.sqrt(n3)) / 2, u3 = h3 - n3 / 2;
  return this.ax = Math.abs(o3) < _2 && Math.abs(c3 - i3) < _2 ? 90 : 180 * Math.atan(Math.abs(o3) > Math.abs(c3 - i3) ? (c3 - s3) / o3 : o3 / (c3 - i3)) / Math.PI, this.ax >= 0 ? (this.rx = Math.sqrt(c3), this.ry = Math.sqrt(u3)) : (this.ax += 90, this.rx = Math.sqrt(u3), this.ry = Math.sqrt(c3)), this;
}, y2.prototype.isDegenerate = function() {
  return this.rx < _2 * this.ry || this.ry < _2 * this.rx;
};
var k2 = function(t3) {
  var e4 = new s2(t3), r3 = e4.max;
  for (i2(e4); e4.index < r3 && !e4.err.length; ) c2(e4);
  return e4.result.length && ("mM".indexOf(e4.result[0][0]) < 0 ? (e4.err = "SvgPath: string should start with `M` or `m`", e4.result = []) : e4.result[0][0] = "M"), {
    err: e4.err,
    segments: e4.result
  };
};
var w2 = function(t3) {
  var e4, r3, a3 = new l2();
  return t3.split(d2).forEach(function(t4) {
    if (t4.length) if (void 0 === p2[t4]) switch (r3 = t4.split(v2).map(function(t5) {
      return +t5 || 0;
    }), e4) {
      case "matrix":
        return void (6 === r3.length && a3.matrix(r3));
      case "scale":
        return void (1 === r3.length ? a3.scale(r3[0], r3[0]) : 2 === r3.length && a3.scale(r3[0], r3[1]));
      case "rotate":
        return void (1 === r3.length ? a3.rotate(r3[0], 0, 0) : 3 === r3.length && a3.rotate(r3[0], r3[1], r3[2]));
      case "translate":
        return void (1 === r3.length ? a3.translate(r3[0], 0) : 2 === r3.length && a3.translate(r3[0], r3[1]));
      case "skewX":
        return void (1 === r3.length && a3.skewX(r3[0]));
      case "skewY":
        return void (1 === r3.length && a3.skewY(r3[0]));
    }
    else e4 = t4;
  }), a3;
};
var A2 = f;
var q2 = function(t3, e4, r3, a3, s3, i3, n3, h3, o3) {
  var c3 = Math.sin(o3 * x2 / 360), u3 = Math.cos(o3 * x2 / 360), f2 = u3 * (t3 - r3) / 2 + c3 * (e4 - a3) / 2, l3 = -c3 * (t3 - r3) / 2 + u3 * (e4 - a3) / 2;
  if (0 === f2 && 0 === l3) return [];
  if (0 === n3 || 0 === h3) return [];
  n3 = Math.abs(n3), h3 = Math.abs(h3);
  var p3 = f2 * f2 / (n3 * n3) + l3 * l3 / (h3 * h3);
  p3 > 1 && (n3 *= Math.sqrt(p3), h3 *= Math.sqrt(p3));
  var d3 = function(t4, e5, r4, a4, s4, i4, n4, h4, o4, c4) {
    var u4 = c4 * (t4 - r4) / 2 + o4 * (e5 - a4) / 2, f3 = -o4 * (t4 - r4) / 2 + c4 * (e5 - a4) / 2, l4 = n4 * n4, p4 = h4 * h4, d4 = u4 * u4, v4 = f3 * f3, g3 = l4 * p4 - l4 * v4 - p4 * d4;
    g3 < 0 && (g3 = 0), g3 /= l4 * v4 + p4 * d4;
    var _4 = (g3 = Math.sqrt(g3) * (s4 === i4 ? -1 : 1)) * n4 / h4 * f3, M4 = g3 * -h4 / n4 * u4, y4 = c4 * _4 - o4 * M4 + (t4 + r4) / 2, k4 = o4 * _4 + c4 * M4 + (e5 + a4) / 2, w3 = (u4 - _4) / n4, A3 = (f3 - M4) / h4, q3 = (-u4 - _4) / n4, C3 = (-f3 - M4) / h4, b3 = m2(1, 0, w3, A3), F3 = m2(w3, A3, q3, C3);
    return 0 === i4 && F3 > 0 && (F3 -= x2), 1 === i4 && F3 < 0 && (F3 += x2), [
      y4,
      k4,
      b3,
      F3
    ];
  }(t3, e4, r3, a3, s3, i3, n3, h3, c3, u3), v3 = [], _3 = d3[2], M3 = d3[3], y3 = Math.max(Math.ceil(Math.abs(M3) / (x2 / 4)), 1);
  M3 /= y3;
  for (var k3 = 0; k3 < y3; k3++) v3.push(g2(_3, M3)), _3 += M3;
  return v3.map(function(t4) {
    for (var e5 = 0; e5 < t4.length; e5 += 2) {
      var r4 = t4[e5 + 0], a4 = t4[e5 + 1], s4 = u3 * (r4 *= n3) - c3 * (a4 *= h3), i4 = c3 * r4 + u3 * a4;
      t4[e5 + 0] = s4 + d3[0], t4[e5 + 1] = i4 + d3[1];
    }
    return t4;
  });
};
var C2 = y2;
function b2(t3) {
  if (!(this instanceof b2)) return new b2(t3);
  var e4 = k2(t3);
  this.segments = e4.segments, this.err = e4.err, this.__stack = [];
}
b2.from = function(t3) {
  if ("string" == typeof t3) return new b2(t3);
  if (t3 instanceof b2) {
    var e4 = new b2("");
    return e4.err = t3.err, e4.segments = t3.segments.map(function(t4) {
      return t4.slice();
    }), e4.__stack = t3.__stack.map(function(t4) {
      return A2().matrix(t4.toArray());
    }), e4;
  }
  throw new Error("SvgPath.from: invalid param type " + t3);
}, b2.prototype.__matrix = function(t3) {
  var e4, r3 = this;
  t3.queue.length && this.iterate(function(a3, s3, i3, n3) {
    var h3, o3, c3, u3;
    switch (a3[0]) {
      case "v":
        o3 = 0 === (h3 = t3.calc(0, a3[1], true))[0] ? [
          "v",
          h3[1]
        ] : [
          "l",
          h3[0],
          h3[1]
        ];
        break;
      case "V":
        o3 = (h3 = t3.calc(i3, a3[1], false))[0] === t3.calc(i3, n3, false)[0] ? [
          "V",
          h3[1]
        ] : [
          "L",
          h3[0],
          h3[1]
        ];
        break;
      case "h":
        o3 = 0 === (h3 = t3.calc(a3[1], 0, true))[1] ? [
          "h",
          h3[0]
        ] : [
          "l",
          h3[0],
          h3[1]
        ];
        break;
      case "H":
        o3 = (h3 = t3.calc(a3[1], n3, false))[1] === t3.calc(i3, n3, false)[1] ? [
          "H",
          h3[0]
        ] : [
          "L",
          h3[0],
          h3[1]
        ];
        break;
      case "a":
      case "A":
        var f2 = t3.toArray(), l3 = C2(a3[1], a3[2], a3[3]).transform(f2);
        if (f2[0] * f2[3] - f2[1] * f2[2] < 0 && (a3[5] = a3[5] ? "0" : "1"), h3 = t3.calc(a3[6], a3[7], "a" === a3[0]), "A" === a3[0] && a3[6] === i3 && a3[7] === n3 || "a" === a3[0] && 0 === a3[6] && 0 === a3[7]) {
          o3 = [
            "a" === a3[0] ? "l" : "L",
            h3[0],
            h3[1]
          ];
          break;
        }
        o3 = l3.isDegenerate() ? [
          "a" === a3[0] ? "l" : "L",
          h3[0],
          h3[1]
        ] : [
          a3[0],
          l3.rx,
          l3.ry,
          l3.ax,
          a3[4],
          a3[5],
          h3[0],
          h3[1]
        ];
        break;
      case "m":
        u3 = s3 > 0, o3 = [
          "m",
          (h3 = t3.calc(a3[1], a3[2], u3))[0],
          h3[1]
        ];
        break;
      default:
        for (o3 = [
          c3 = a3[0]
        ], u3 = c3.toLowerCase() === c3, e4 = 1; e4 < a3.length; e4 += 2) h3 = t3.calc(a3[e4], a3[e4 + 1], u3), o3.push(h3[0], h3[1]);
    }
    r3.segments[s3] = o3;
  }, true);
}, b2.prototype.__evaluateStack = function() {
  var t3, e4;
  if (this.__stack.length) {
    if (1 === this.__stack.length) return this.__matrix(this.__stack[0]), void (this.__stack = []);
    for (t3 = A2(), e4 = this.__stack.length; --e4 >= 0; ) t3.matrix(this.__stack[e4].toArray());
    this.__matrix(t3), this.__stack = [];
  }
}, b2.prototype.toString = function() {
  var t3 = "", e4 = "", r3 = false;
  this.__evaluateStack();
  for (var a3 = 0, s3 = this.segments.length; a3 < s3; a3++) {
    var i3 = this.segments[a3], n3 = i3[0];
    n3 !== e4 || "m" === n3 || "M" === n3 ? ("m" === n3 && "z" === e4 && (t3 += " "), t3 += n3, r3 = false) : r3 = true;
    for (var h3 = 1; h3 < i3.length; h3++) {
      var o3 = i3[h3];
      1 === h3 ? r3 && o3 >= 0 && (t3 += " ") : o3 >= 0 && (t3 += " "), t3 += o3;
    }
    e4 = n3;
  }
  return t3;
}, b2.prototype.translate = function(t3, e4) {
  return this.__stack.push(A2().translate(t3, e4 || 0)), this;
}, b2.prototype.scale = function(t3, e4) {
  return this.__stack.push(A2().scale(t3, e4 || 0 === e4 ? e4 : t3)), this;
}, b2.prototype.rotate = function(t3, e4, r3) {
  return this.__stack.push(A2().rotate(t3, e4 || 0, r3 || 0)), this;
}, b2.prototype.skewX = function(t3) {
  return this.__stack.push(A2().skewX(t3)), this;
}, b2.prototype.skewY = function(t3) {
  return this.__stack.push(A2().skewY(t3)), this;
}, b2.prototype.matrix = function(t3) {
  return this.__stack.push(A2().matrix(t3)), this;
}, b2.prototype.transform = function(t3) {
  return t3.trim() ? (this.__stack.push(w2(t3)), this) : this;
}, b2.prototype.round = function(t3) {
  var e4, r3 = 0, a3 = 0, s3 = 0, i3 = 0;
  return t3 = t3 || 0, this.__evaluateStack(), this.segments.forEach(function(n3) {
    var h3 = n3[0].toLowerCase() === n3[0];
    switch (n3[0]) {
      case "H":
      case "h":
        return h3 && (n3[1] += s3), s3 = n3[1] - n3[1].toFixed(t3), void (n3[1] = +n3[1].toFixed(t3));
      case "V":
      case "v":
        return h3 && (n3[1] += i3), i3 = n3[1] - n3[1].toFixed(t3), void (n3[1] = +n3[1].toFixed(t3));
      case "Z":
      case "z":
        return s3 = r3, void (i3 = a3);
      case "M":
      case "m":
        return h3 && (n3[1] += s3, n3[2] += i3), s3 = n3[1] - n3[1].toFixed(t3), i3 = n3[2] - n3[2].toFixed(t3), r3 = s3, a3 = i3, n3[1] = +n3[1].toFixed(t3), void (n3[2] = +n3[2].toFixed(t3));
      case "A":
      case "a":
        return h3 && (n3[6] += s3, n3[7] += i3), s3 = n3[6] - n3[6].toFixed(t3), i3 = n3[7] - n3[7].toFixed(t3), n3[1] = +n3[1].toFixed(t3), n3[2] = +n3[2].toFixed(t3), n3[3] = +n3[3].toFixed(t3 + 2), n3[6] = +n3[6].toFixed(t3), void (n3[7] = +n3[7].toFixed(t3));
      default:
        return e4 = n3.length, h3 && (n3[e4 - 2] += s3, n3[e4 - 1] += i3), s3 = n3[e4 - 2] - n3[e4 - 2].toFixed(t3), i3 = n3[e4 - 1] - n3[e4 - 1].toFixed(t3), void n3.forEach(function(e5, r4) {
          r4 && (n3[r4] = +n3[r4].toFixed(t3));
        });
    }
  }), this;
}, b2.prototype.iterate = function(t3, e4) {
  var r3, a3, s3, i3 = this.segments, n3 = {}, h3 = false, o3 = 0, c3 = 0, u3 = 0, f2 = 0;
  if (e4 || this.__evaluateStack(), i3.forEach(function(e5, r4) {
    var a4 = t3(e5, r4, o3, c3);
    Array.isArray(a4) && (n3[r4] = a4, h3 = true);
    var s4 = e5[0] === e5[0].toLowerCase();
    switch (e5[0]) {
      case "m":
      case "M":
        return o3 = e5[1] + (s4 ? o3 : 0), c3 = e5[2] + (s4 ? c3 : 0), u3 = o3, void (f2 = c3);
      case "h":
      case "H":
        return void (o3 = e5[1] + (s4 ? o3 : 0));
      case "v":
      case "V":
        return void (c3 = e5[1] + (s4 ? c3 : 0));
      case "z":
      case "Z":
        return o3 = u3, void (c3 = f2);
      default:
        o3 = e5[e5.length - 2] + (s4 ? o3 : 0), c3 = e5[e5.length - 1] + (s4 ? c3 : 0);
    }
  }), !h3) return this;
  for (s3 = [], r3 = 0; r3 < i3.length; r3++) if (void 0 !== n3[r3]) for (a3 = 0; a3 < n3[r3].length; a3++) s3.push(n3[r3][a3]);
  else s3.push(i3[r3]);
  return this.segments = s3, this;
}, b2.prototype.abs = function() {
  return this.iterate(function(t3, e4, r3, a3) {
    var s3, i3 = t3[0], n3 = i3.toUpperCase();
    if (i3 !== n3) switch (t3[0] = n3, i3) {
      case "v":
        return void (t3[1] += a3);
      case "a":
        return t3[6] += r3, void (t3[7] += a3);
      default:
        for (s3 = 1; s3 < t3.length; s3++) t3[s3] += s3 % 2 ? r3 : a3;
    }
  }, true), this;
}, b2.prototype.rel = function() {
  return this.iterate(function(t3, e4, r3, a3) {
    var s3, i3 = t3[0], n3 = i3.toLowerCase();
    if (i3 !== n3 && (0 !== e4 || "M" !== i3)) switch (t3[0] = n3, i3) {
      case "V":
        return void (t3[1] -= a3);
      case "A":
        return t3[6] -= r3, void (t3[7] -= a3);
      default:
        for (s3 = 1; s3 < t3.length; s3++) t3[s3] -= s3 % 2 ? r3 : a3;
    }
  }, true), this;
}, b2.prototype.unarc = function() {
  return this.iterate(function(t3, e4, r3, a3) {
    var s3, i3, n3, h3 = [], o3 = t3[0];
    return "A" !== o3 && "a" !== o3 ? null : ("a" === o3 ? (i3 = r3 + t3[6], n3 = a3 + t3[7]) : (i3 = t3[6], n3 = t3[7]), 0 === (s3 = q2(r3, a3, i3, n3, t3[4], t3[5], t3[1], t3[2], t3[3])).length ? [
      [
        "a" === t3[0] ? "l" : "L",
        t3[6],
        t3[7]
      ]
    ] : (s3.forEach(function(t4) {
      h3.push([
        "C",
        t4[2],
        t4[3],
        t4[4],
        t4[5],
        t4[6],
        t4[7]
      ]);
    }), h3));
  }), this;
}, b2.prototype.unshort = function() {
  var t3, e4, r3, a3, s3, i3 = this.segments;
  return this.iterate(function(n3, h3, o3, c3) {
    var u3, f2 = n3[0], l3 = f2.toUpperCase();
    h3 && ("T" === l3 ? (u3 = "t" === f2, "Q" === (r3 = i3[h3 - 1])[0] ? (t3 = r3[1] - o3, e4 = r3[2] - c3) : "q" === r3[0] ? (t3 = r3[1] - r3[3], e4 = r3[2] - r3[4]) : (t3 = 0, e4 = 0), a3 = -t3, s3 = -e4, u3 || (a3 += o3, s3 += c3), i3[h3] = [
      u3 ? "q" : "Q",
      a3,
      s3,
      n3[1],
      n3[2]
    ]) : "S" === l3 && (u3 = "s" === f2, "C" === (r3 = i3[h3 - 1])[0] ? (t3 = r3[3] - o3, e4 = r3[4] - c3) : "c" === r3[0] ? (t3 = r3[3] - r3[5], e4 = r3[4] - r3[6]) : (t3 = 0, e4 = 0), a3 = -t3, s3 = -e4, u3 || (a3 += o3, s3 += c3), i3[h3] = [
      u3 ? "c" : "C",
      a3,
      s3,
      n3[1],
      n3[2],
      n3[3],
      n3[4]
    ]));
  }), this;
};
var F2 = b2;
var S2 = F2.from;

// src/index.js
var htmlLang = document.documentElement.lang;
var ttsLang = getTTSLang(htmlLang);
var correctCount = 0;
var audioContext;
var audioBufferCache = {};
var ttsVoices = [];
loadVoices();
loadConfig();
function loadConfig() {
  if (localStorage.getItem("darkMode") == 1) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
}
function toggleDarkMode() {
  if (localStorage.getItem("darkMode") == 1) {
    localStorage.setItem("darkMode", 0);
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    localStorage.setItem("darkMode", 1);
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
}
function createAudioContext() {
  if (globalThis.AudioContext) {
    return new globalThis.AudioContext();
  } else {
    console.error("Web Audio API is not supported in this browser");
    return null;
  }
}
function unlockAudio() {
  const uttr = new SpeechSynthesisUtterance("");
  uttr.lang = ttsLang;
  speechSynthesis.speak(uttr);
  if (audioContext) {
    audioContext.resume();
  } else {
    audioContext = createAudioContext();
    loadAudio("modified", "/japan-map-puzzle/mp3/decision50.mp3");
    loadAudio("correct", "/japan-map-puzzle/mp3/correct3.mp3");
    loadAudio("correctAll", "/japan-map-puzzle/mp3/correct1.mp3");
  }
  document.removeEventListener("click", unlockAudio);
  document.removeEventListener("keydown", unlockAudio);
}
async function loadAudio(name, url) {
  if (!audioContext) return;
  if (audioBufferCache[name]) return audioBufferCache[name];
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    audioBufferCache[name] = audioBuffer;
    return audioBuffer;
  } catch (error) {
    console.error(`Loading audio ${name} error:`, error);
    throw error;
  }
}
function playAudio(name, volume) {
  if (!audioContext) return;
  const audioBuffer = audioBufferCache[name];
  if (!audioBuffer) {
    console.error(`Audio ${name} is not found in cache`);
    return;
  }
  const sourceNode = audioContext.createBufferSource();
  sourceNode.buffer = audioBuffer;
  const gainNode = audioContext.createGain();
  if (volume) gainNode.gain.value = volume;
  gainNode.connect(audioContext.destination);
  sourceNode.connect(gainNode);
  sourceNode.start();
}
function loadVoices() {
  const allVoicesObtained = new Promise((resolve) => {
    let voices = speechSynthesis.getVoices();
    if (voices.length !== 0) {
      resolve(voices);
    } else {
      let supported = false;
      speechSynthesis.addEventListener("voiceschanged", () => {
        supported = true;
        voices = speechSynthesis.getVoices();
        resolve(voices);
      });
      setTimeout(() => {
        if (!supported) {
          document.getElementById("noTTS").classList.remove("d-none");
        }
      }, 1e3);
    }
  });
  allVoicesObtained.then((voices) => {
    ttsVoices = voices.filter((voice) => voice.lang == ttsLang);
  });
}
function speak(text) {
  speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(text);
  msg.voice = ttsVoices[Math.floor(Math.random() * ttsVoices.length)];
  msg.lang = ttsLang;
  speechSynthesis.speak(msg);
  return msg;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function getPrefectureId(node) {
  while (!node.dataset.code) {
    node = node.parentNode;
  }
  const code = node.dataset.code;
  return parseInt(code) - 1;
}
function movePathPoints(path, x3, y3) {
  path = path.cloneNode(true);
  const data = F2(path.getAttribute("d"));
  data.translate(-x3, -y3);
  path.setAttribute("d", data.toString());
  return path;
}
function movePolygonPoints(polygon, x3, y3) {
  polygon = polygon.cloneNode(true);
  const data = polygon.getAttribute("points").split(" ").map(Number);
  const points = data.map((p3, i3) => i3 % 2 == 0 ? p3 - y3 : p3 - x3);
  polygon.setAttribute("points", points.join(" "));
  return polygon;
}
function moveGroupPoints(g3, x3, y3) {
  g3 = g3.cloneNode(true);
  g3.querySelectorAll("path, polygon").forEach((node) => {
    switch (node.tagName) {
      case "path":
        node.replaceWith(movePathPoints(node, x3, y3));
        break;
      case "polygon":
        node.replaceWith(movePolygonPoints(node, x3, y3));
        break;
    }
  });
  return g3;
}
function movePoints(node, x3, y3) {
  switch (node.tagName) {
    case "path":
      return movePathPoints(node, x3, y3);
    case "polygon":
      return movePolygonPoints(node, x3, y3);
    case "g":
      return moveGroupPoints(node, x3, y3);
    default:
      throw new Error("not supported");
  }
}
function getPieceSvg(island, scale) {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNamespace, "svg");
  const rect = island.getBBox();
  const { x: x3, y: y3, width, height } = rect;
  svg.setAttribute("width", width * scale);
  svg.setAttribute("height", height * scale);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("fill", "black");
  svg.setAttribute("opacity", "0.8");
  const piece = movePoints(island, x3, y3);
  svg.appendChild(piece);
  return svg;
}
function checkSpinnedPosition(island, wrapper, group) {
  let diff = Math.abs(group.angle + wrapper.angle);
  if (diff > 180) diff = 360 - diff;
  if (diff > angleThreshold) return false;
  const center = wrapper.getCenterPoint();
  const original = island.getBoundingClientRect();
  const centerX = original.left + original.width / 2;
  const centerY = original.top + original.height / 2;
  const originalScale = group.width / original.width;
  const scaleX = originalScale * group.scaleX * wrapper.scaleX;
  const scaleY = originalScale * group.scaleY * wrapper.scaleY;
  if (Math.abs(center.x - centerX) > positionThreshold) return false;
  if (Math.abs(center.y - centerY) > positionThreshold) return false;
  if (Math.abs(scaleX - 1) > scaleThreshold) return false;
  if (Math.abs(scaleY - 1) > scaleThreshold) return false;
  return true;
}
function checkPosition(island, rect) {
  const original = island.getBoundingClientRect();
  const width = rect.width * rect.scaleX;
  const height = rect.height * rect.scaleY;
  const left = rect.left - width / 2;
  const top = rect.top - height / 2;
  if (Math.abs(left - original.x) > positionThreshold) return false;
  if (Math.abs(top - original.y) > positionThreshold) return false;
  if (Math.abs(width - original.width) > positionThreshold) return false;
  if (Math.abs(height - original.height) > positionThreshold) return false;
  return true;
}
function addPrefectureText(prefectureName) {
  clearTimeout(prefectureTimer);
  canvas.remove(prefectureText);
  const fontSize = canvas.width / prefectureTextLength;
  prefectureText = new Eo(prefectureName, {
    fontSize,
    fontFamily: "serif",
    left: canvas.width / 2,
    top: canvas.height / 2,
    originX: "center",
    originY: "center",
    selectable: false,
    fill: "blue"
  });
  canvas.add(prefectureText);
  canvas.sendObjectToBack(prefectureText);
  prefectureTimer = setTimeout(() => {
    canvas.remove(prefectureText);
  }, 2e3);
}
function setMovableOption(group, grade) {
  switch (grade) {
    case 0:
    case 1:
    case 2:
      group.setControlsVisibility({
        bl: false,
        br: false,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        tl: false,
        tr: false,
        mtr: false
      });
      group.hasBorders = false;
      break;
    case 3:
    case 4:
    case 5: {
      const centerX = group.left + group.width / 2;
      const centerY = group.top + group.height / 2;
      group.set({
        originX: "center",
        originY: "center",
        left: centerX,
        top: centerY,
        angle: Math.random() * 360,
        selectable: false
      });
      break;
    }
    case 6:
    case 7:
    case 8: {
      group.setControlsVisibility({
        mtr: false
      });
      const width = (0.5 + Math.random()) * canvas.width / 10;
      const height = (0.5 + Math.random()) * canvas.height / 10;
      group.set({
        scaleX: width / group.width,
        scaleY: height / group.height
      });
      break;
    }
    case 9:
    case 10:
    case 11: {
      const width = (0.5 + Math.random()) * canvas.width / 10;
      const height = (0.5 + Math.random()) * canvas.height / 10;
      group.set({
        scaleX: width / group.width,
        scaleY: height / group.height
      });
      const centerX = group.left + group.width / 2;
      const centerY = group.top + group.height / 2;
      group.set({
        originX: "center",
        originY: "center",
        left: centerX,
        top: centerY,
        angle: Math.random() * 360,
        selectable: false
      });
      break;
    }
  }
}
function addControlRect(group, grade) {
  group.setCoords();
  const rect = group.getBoundingRect();
  const rectLength = Math.max(rect.width, rect.height);
  const controlRect = new Er({
    originX: "center",
    originY: "center",
    left: group.left,
    top: group.top,
    width: rectLength,
    height: rectLength,
    opacity: 0,
    selectable: false
  });
  canvas.add(controlRect);
  const wrapper = new Hr([controlRect, group], {
    originX: "center",
    originY: "center",
    width: rectLength,
    height: rectLength,
    opacity: group.opacity,
    transparentCorners: false,
    borderColor: "blue",
    cornerColor: "blue",
    cornerStyle: "circle"
  });
  if (grade < 9) {
    wrapper.setControlsVisibility({
      bl: false,
      br: false,
      ml: false,
      mt: false,
      mr: false,
      mb: false,
      tl: false,
      tr: false
    });
  }
  canvas.add(wrapper);
  return wrapper;
}
function addScoreText() {
  const time = ((Date.now() - startTime) * 1e3 / 1e6).toFixed(3);
  const text = `${time} sec!`;
  const fontSize = canvas.width / 8;
  scoreText = new Eo(text, {
    fontSize,
    left: canvas.width / 2,
    top: canvas.height / 2,
    originX: "center",
    originY: "center",
    selectable: false,
    fill: "blue"
  });
  setTimeout(() => {
    canvas.add(scoreText);
    canvas.sendObjectToBack(scoreText);
  }, 2e3);
}
function setCorrectPiece(island) {
  island.setAttribute("fill", "silver");
  correctCount += 1;
  if (correctCount == prefectureNames.length) {
    playAudio("correctAll");
    addScoreText();
  } else {
    playAudio("correct", 0.3);
  }
  const id = getPrefectureId(island);
  const prefectureName = prefectureNames[id];
  addPrefectureText(prefectureName);
  speak(prefectureName);
}
function adjustElementPosition(element) {
  const width = element.width * element.scaleX;
  const height = element.height * element.scaleY;
  const w22 = width / 2;
  const h22 = height / 2;
  if (element.left < w22) {
    element.set({ left: w22 });
  } else if (canvas.width < element.left + w22) {
    const maxLeft = canvas.width - w22;
    element.set({ left: maxLeft });
  }
  if (element.top < h22) {
    element.set({ top: h22 });
  } else if (canvas.height < element.top + h22) {
    const maxTop = canvas.height - h22;
    element.set({ top: maxTop });
  }
  element.setCoords();
}
function setPieceGuideEvent(island, group) {
  let lastTouchTime = 0;
  group.on("mousedown", (event) => {
    const pieceGuide = document.getElementById("pieceGuide");
    if (pieceGuide) pieceGuide.remove();
    const now = Date.now();
    if (now - lastTouchTime < 200) {
      const e4 = event.e;
      const touch = e4 instanceof TouchEvent ? e4.touches[0] : e4;
      const tx = touch.pageX;
      const ty = touch.pageY - 30;
      const id = getPrefectureId(island);
      const prefectureName = prefectureNames[id];
      const html = `
        <div id="pieceGuide" class="tooltip show" role="tooltip"
          style="position:absolute; inset:0px auto auto 0px; transform:translate(${tx}px,${ty}px);">
          <div class="tooltip-inner">${prefectureName}</div>
        </div>
      `;
      document.getElementById("guide").insertAdjacentHTML("beforeend", html);
    }
    lastTouchTime = now;
  });
}
async function setMovable(island, svg, grade) {
  const result = await xa(svg.outerHTML);
  const group = kn.groupSVGElements(result.objects, result.options);
  group.set({
    left: getRandomInt(0, canvas.width / 2),
    top: getRandomInt(0, canvas.height / 2)
  });
  group.set({
    left: group.left + group.width / 2,
    top: group.top + group.height / 2,
    originX: "center",
    originY: "center",
    transparentCorners: false,
    borderColor: "blue",
    cornerColor: "blue",
    cornerStyle: "circle"
  });
  setMovableOption(group, grade);
  canvas.add(group);
  if (group.selectable) {
    setPieceGuideEvent(island, group);
    group.on("mouseup", () => {
      playAudio("modified");
      if (checkPosition(island, group)) {
        canvas.remove(group);
        setCorrectPiece(island);
      } else {
        adjustElementPosition(group);
      }
    });
  } else {
    const wrapper = addControlRect(group, grade);
    setPieceGuideEvent(island, wrapper);
    wrapper.on("mouseup", () => {
      playAudio("modified");
      if (checkSpinnedPosition(island, wrapper, group)) {
        wrapper.getObjects().forEach((obj) => {
          canvas.remove(obj);
        });
        canvas.remove(wrapper);
        setCorrectPiece(island);
      } else {
        adjustElementPosition(wrapper);
      }
    });
  }
}
function getSVGScale(map2, doc) {
  const svg = doc.querySelector("svg");
  const width = svg.getAttribute("viewBox").split(" ")[2];
  const rect = map2.getBoundingClientRect();
  return rect.width / Number(width);
}
async function shuffleSVG() {
  canvas.clear();
  const grade = document.getElementById("gradeOption").selectedIndex;
  const doc = map.contentDocument;
  const scale = getSVGScale(map, doc);
  const islands = doc.querySelectorAll("polygon, path");
  for (const island of islands) {
    if (island.classList.contains("main")) {
      island.removeAttribute("fill");
      const svg = getPieceSvg(island, scale);
      await setMovable(island, svg, grade);
    } else {
      island.setAttribute("fill", "#ccc");
    }
  }
  const prefectures = doc.querySelectorAll(".prefecture");
  switch (grade % 3) {
    case 0:
      prefectures.forEach((prefecture) => {
        prefecture.setAttribute("fill", "#eee");
        prefecture.setAttribute("stroke-width", 1);
      });
      break;
    case 1:
      prefectures.forEach((prefecture) => {
        prefecture.setAttribute("fill", "#eee");
        prefecture.setAttribute("stroke-width", 0);
      });
      break;
    case 2:
      prefectures.forEach((prefecture) => {
        prefecture.setAttribute("fill", "none");
        prefecture.setAttribute("stroke-width", 0);
      });
      break;
  }
}
async function startGame() {
  if (!canvas) canvas = initCanvas();
  canvas.remove(scoreText);
  await shuffleSVG();
  correctCount = 0;
  startTime = Date.now();
}
function setMapGuideMouseEvent(canvas2) {
  let lastTouchTime = 0;
  canvas2.on("mouse:down", (event) => {
    const now = Date.now();
    if (now - lastTouchTime < 200) {
      if (!event.target) {
        const e4 = event.e;
        const islands = findPieceNodes(e4.offsetX, e4.offsetY);
        islands.forEach((island) => setMapGuideTooltip(e4, island));
      }
    }
    lastTouchTime = now;
  });
}
function setMapGuideTouchEvent(canvas2) {
  let lastTouchTime = 0;
  canvas2.wrapperEl.addEventListener("touchstart", (event) => {
    const now = Date.now();
    if (now - lastTouchTime < 200) {
      const touch = event.changedTouches[0];
      const target = canvas2.findTarget(touch);
      if (!target) {
        const rect = map.getBoundingClientRect();
        const offsetX = touch.pageX - rect.left;
        const offsetY = touch.pageY - rect.top;
        const islands = findPieceNodes(offsetX, offsetY);
        islands.forEach((island) => setMapGuideTooltip(touch, island));
      }
    }
    lastTouchTime = now;
  });
}
function findPieceNodes(offsetX, offsetY) {
  const candidates = map.contentDocument.elementsFromPoint(offsetX, offsetY);
  const islands = candidates.filter((node) => node.classList.contains("main"));
  return islands;
}
function setMapGuideTooltip(event, island) {
  const tx = event.pageX;
  const ty = event.pageY - 30;
  const id = getPrefectureId(island);
  const prefectureName = prefectureNames[id];
  const html = `
    <div class="tooltip show" role="tooltip"
      style="position:absolute; inset:0px auto auto 0px; transform:translate(${tx}px,${ty}px);">
      <div class="tooltip-inner">${prefectureName}</div>
    </div>
  `;
  const guide = document.getElementById("guide");
  guide.insertAdjacentHTML("beforeend", html);
  const tooltip = guide.lastElementChild;
  tooltip.onclick = () => {
    tooltip.remove();
  };
}
function initCanvas() {
  const rect = map.getBoundingClientRect();
  const canvas2 = new Bn("canvas", {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height
  });
  if (navigator.maxTouchPoints > 0) {
    setMapGuideTouchEvent(canvas2);
  } else {
    setMapGuideMouseEvent(canvas2);
  }
  canvas2.selection = false;
  document.getElementById("canvas").parentNode.style.position = "absolute";
  return canvas2;
}
function resizePieces() {
  const rect = map.getBoundingClientRect();
  const scale = rect.width / canvas.getWidth();
  canvas.setDimensions({ width: rect.width, height: rect.height });
  canvas.getObjects().forEach((object) => {
    object.left *= scale;
    object.top *= scale;
    object.scaleX *= scale;
    object.scaleY *= scale;
    object.setCoords();
  });
}
function calcPrefectureTextLength(lang, prefectureNames2) {
  const max = Math.max(...prefectureNames2.map((str) => str.length));
  switch (lang) {
    case "ja":
      return max;
    case "en":
      return Math.ceil(max / 1.5);
  }
}
function changeLang() {
  const langObj = document.getElementById("lang");
  const lang = langObj.options[langObj.selectedIndex].value;
  location.href = `/japan-map-puzzle/${lang}/`;
}
function getTTSLang(htmlLang2) {
  switch (htmlLang2) {
    case "en":
      return "en-US";
    case "ja":
      return "ja-JP";
  }
}
async function initPrefecturesInfo(htmlLang2) {
  const response = await fetch(`/japan-map-puzzle/data/${htmlLang2}.lst`);
  const text = await response.text();
  prefectureNames = text.trimEnd().split("\n");
  prefectureTextLength = calcPrefectureTextLength(htmlLang2, prefectureNames);
}
var map = document.getElementById("map");
var positionThreshold = 20;
var scaleThreshold = 0.3;
var angleThreshold = 20;
var canvas;
var prefectureNames;
var prefectureText;
var prefectureTextLength;
var prefectureTimer;
var startTime;
var scoreText;
initPrefecturesInfo(htmlLang);
document.getElementById("startButton").onclick = startGame;
document.getElementById("toggleDarkMode").onclick = toggleDarkMode;
document.getElementById("lang").onchange = changeLang;
document.addEventListener("click", unlockAudio, { once: true });
document.addEventListener("keydown", unlockAudio, { once: true });
globalThis.addEventListener("resize", () => {
  if (!canvas) return;
  resizePieces();
  if (prefectureText) {
    prefectureText.set({
      left: canvas.width / 2,
      top: canvas.height / 2
    });
  }
  if (scoreText) {
    scoreText.set({
      left: canvas.width / 2,
      top: canvas.height / 2
    });
  }
});
