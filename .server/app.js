"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vueRouter = require("vue-router");
var vue = require("vue");
require("@vue/devtools-api");
var core = require("@vueuse/core");
var serverRenderer = require("vue/server-renderer");
var a$7 = require("lodash.debounce");
var throttle = require("lodash.throttle");
var bcryptjs = require("bcryptjs");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n2 = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    Object.keys(e).forEach(function(k2) {
      if (k2 !== "default") {
        var d2 = Object.getOwnPropertyDescriptor(e, k2);
        Object.defineProperty(n2, k2, d2.get ? d2 : {
          enumerable: true,
          get: function() {
            return e[k2];
          }
        });
      }
    });
  }
  n2["default"] = e;
  return Object.freeze(n2);
}
var a__default = /* @__PURE__ */ _interopDefaultLegacy(a$7);
var throttle__default = /* @__PURE__ */ _interopDefaultLegacy(throttle);
var hopeInject = "";
var clientAppEnhance0 = () => {
};
const ClientOnly$1 = vue.defineComponent({
  setup(_2, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$w;
  })),
  "v-22a39d25": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return about_html$2;
  })),
  "v-6d34f632": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return contact_html$2;
  })),
  "v-7444d4f5": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$u;
  })),
  "v-76d72bc4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return four_html$2;
  })),
  "v-e12556a0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return three_html$2;
  })),
  "v-7446daa2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$s;
  })),
  "v-5cbdbad5": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return one_html$2;
  })),
  "v-514c26af": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return two_html$2;
  })),
  "v-298737c8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$q;
  })),
  "v-024e9ac2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return five_html$2;
  })),
  "v-67eb30ff": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return six_html$2;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  })),
  "v-5bc93818": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$o;
  })),
  "v-744d024e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$m;
  })),
  "v-e52c881c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$k;
  })),
  "v-75ed4ea4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$i;
  })),
  "v-2897d318": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$g;
  })),
  "v-154dc4c4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$e;
  })),
  "v-01560935": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$c;
  }))
};
const pagesData$2 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$a;
  }).then(({ data: data2 }) => data2),
  "v-22a39d25": () => Promise.resolve().then(function() {
    return about_html;
  }).then(({ data: data2 }) => data2),
  "v-6d34f632": () => Promise.resolve().then(function() {
    return contact_html;
  }).then(({ data: data2 }) => data2),
  "v-7444d4f5": () => Promise.resolve().then(function() {
    return index_html$9;
  }).then(({ data: data2 }) => data2),
  "v-76d72bc4": () => Promise.resolve().then(function() {
    return four_html;
  }).then(({ data: data2 }) => data2),
  "v-e12556a0": () => Promise.resolve().then(function() {
    return three_html;
  }).then(({ data: data2 }) => data2),
  "v-7446daa2": () => Promise.resolve().then(function() {
    return index_html$8;
  }).then(({ data: data2 }) => data2),
  "v-5cbdbad5": () => Promise.resolve().then(function() {
    return one_html;
  }).then(({ data: data2 }) => data2),
  "v-514c26af": () => Promise.resolve().then(function() {
    return two_html;
  }).then(({ data: data2 }) => data2),
  "v-298737c8": () => Promise.resolve().then(function() {
    return index_html$7;
  }).then(({ data: data2 }) => data2),
  "v-024e9ac2": () => Promise.resolve().then(function() {
    return five_html;
  }).then(({ data: data2 }) => data2),
  "v-67eb30ff": () => Promise.resolve().then(function() {
    return six_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2),
  "v-5bc93818": () => Promise.resolve().then(function() {
    return index_html$6;
  }).then(({ data: data2 }) => data2),
  "v-744d024e": () => Promise.resolve().then(function() {
    return index_html$5;
  }).then(({ data: data2 }) => data2),
  "v-e52c881c": () => Promise.resolve().then(function() {
    return index_html$4;
  }).then(({ data: data2 }) => data2),
  "v-75ed4ea4": () => Promise.resolve().then(function() {
    return index_html$3;
  }).then(({ data: data2 }) => data2),
  "v-2897d318": () => Promise.resolve().then(function() {
    return index_html$2;
  }).then(({ data: data2 }) => data2),
  "v-154dc4c4": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-01560935": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData$1 = vue.ref(pagesData$2);
const pageDataEmpty$1 = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData$1 = vue.ref(pageDataEmpty$1);
const usePageData$1 = () => pageData$1;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData$1.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData$1.value.key) {
      pageData$1.value = data2;
    }
  };
}
const pageFrontmatterSymbol$1 = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol$1);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const pageHeadTitleSymbol$1 = Symbol("");
const usePageHeadTitle = () => {
  const pageHeadTitle = vue.inject(pageHeadTitleSymbol$1);
  if (!pageHeadTitle) {
    throw new Error("usePageHeadTitle() is called without provider.");
  }
  return pageHeadTitle;
};
const pageLangSymbol$1 = Symbol("");
const usePageLang$1 = () => {
  const pageLang = vue.inject(pageLangSymbol$1);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const routeLocaleSymbol$1 = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol$1);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const siteData$2 = {
  "base": "/hope-demo/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN",
      "title": "\u4E3B\u9898\u6F14\u793A",
      "description": "vuepress-theme-hope \u7684\u6F14\u793A"
    }
  }
};
const siteData$1 = vue.ref(siteData$2);
const useSiteData$1 = () => siteData$1;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData$1.value = data2;
  };
}
const siteLocaleDataSymbol$1 = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol$1);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const Content$1 = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page2 = usePageData$1();
    key = page2.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content$1.displayName = "Content";
Content$1.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404$1;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout$1;
  })),
  "Slide": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return SlidePage;
  })),
  "Blog": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Blog$1;
  }))
};
process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
const isArray = Array.isArray;
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier$1 = ([tag2, attrs, content]) => {
  if (tag2 === "meta" && attrs.name) {
    return `${tag2}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag2)) {
    return tag2;
  }
  if (tag2 === "template" && attrs.id) {
    return `${tag2}.${attrs.id}`;
  }
  return JSON.stringify([tag2, attrs, content]);
};
const dedupeHead$1 = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier$1(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const ensureEndingSlash = (str2) => /(\.html|\/)$/.test(str2) ? str2 : str2 + "/";
const isLinkFtp = (link) => link.startsWith("ftp://");
const isLinkHttp$1 = (link) => /^(https?:)?\/\//.test(link);
const isLinkExternal = (link, base = "/") => {
  if (isLinkHttp$1(link) || isLinkFtp(link)) {
    return true;
  }
  if (link.startsWith("/") && !link.startsWith(base)) {
    return true;
  }
  return false;
};
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash$1 = (str2) => str2.replace(/\/$/, "");
const removeLeadingSlash$1 = (str2) => str2.replace(/^\//, "");
const resolveLocalePath$1 = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a2, b2) => {
    const levelDelta = b2.split("/").length - a2.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b2.length - a2.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page2 = usePageData$1();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page2.value.path) {
        const frontmatterLayout = page2.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase$1 = (url) => {
  if (isLinkHttp$1(url))
    return url;
  const base = useSiteData$1().value.base;
  return `${base}${removeLeadingSlash$1(url)}`;
};
var message = "";
const s$4 = (t2) => `${t2.charAt(0).toUpperCase()}${t2.slice(1)}`;
var a$6, c$6 = function() {
  var t2 = 1e3, e = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", o2 = "hour", a2 = "day", u2 = "week", c2 = "month", f2 = "quarter", d2 = "year", l2 = "date", h2 = "Invalid Date", m2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, $2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, p2 = function(t3, e2, n3) {
    var r3 = String(t3);
    return !r3 || r3.length >= e2 ? t3 : "" + Array(e2 + 1 - r3.length).join(n3) + t3;
  }, y2 = { s: p2, z: function(t3) {
    var e2 = -t3.utcOffset(), n3 = Math.abs(e2), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
    return (e2 <= 0 ? "+" : "-") + p2(r3, 2, "0") + ":" + p2(i3, 2, "0");
  }, m: function t3(e2, n3) {
    if (e2.date() < n3.date())
      return -t3(n3, e2);
    var r3 = 12 * (n3.year() - e2.year()) + (n3.month() - e2.month()), i3 = e2.clone().add(r3, c2), s3 = n3 - i3 < 0, o3 = e2.clone().add(r3 + (s3 ? -1 : 1), c2);
    return +(-(r3 + (n3 - i3) / (s3 ? i3 - o3 : o3 - i3)) || 0);
  }, a: function(t3) {
    return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
  }, p: function(t3) {
    return { M: c2, y: d2, w: u2, d: a2, D: l2, h: o2, m: s2, s: i2, ms: r2, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
  }, u: function(t3) {
    return t3 === void 0;
  } }, g2 = "en", M2 = {};
  M2[g2] = v2;
  var D2 = function(t3) {
    return t3 instanceof w2;
  }, _2 = function t3(e2, n3, r3) {
    var i3;
    if (!e2)
      return g2;
    if (typeof e2 == "string") {
      var s3 = e2.toLowerCase();
      M2[s3] && (i3 = s3), n3 && (M2[s3] = n3, i3 = s3);
      var o3 = e2.split("-");
      if (!i3 && o3.length > 1)
        return t3(o3[0]);
    } else {
      var a3 = e2.name;
      M2[a3] = e2, i3 = a3;
    }
    return !r3 && i3 && (g2 = i3), i3 || !r3 && g2;
  }, Y = function(t3, e2) {
    if (D2(t3))
      return t3.clone();
    var n3 = typeof e2 == "object" ? e2 : {};
    return n3.date = t3, n3.args = arguments, new w2(n3);
  }, S2 = y2;
  S2.l = _2, S2.i = D2, S2.w = function(t3, e2) {
    return Y(t3, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
  };
  var w2 = function() {
    function v3(t3) {
      this.$L = _2(t3.locale, null, true), this.parse(t3);
    }
    var p3 = v3.prototype;
    return p3.parse = function(t3) {
      this.$d = function(t4) {
        var e2 = t4.date, n3 = t4.utc;
        if (e2 === null)
          return new Date(NaN);
        if (S2.u(e2))
          return new Date();
        if (e2 instanceof Date)
          return new Date(e2);
        if (typeof e2 == "string" && !/Z$/i.test(e2)) {
          var r3 = e2.match(m2);
          if (r3) {
            var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
            return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
          }
        }
        return new Date(e2);
      }(t3), this.$x = t3.x || {}, this.init();
    }, p3.init = function() {
      var t3 = this.$d;
      this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
    }, p3.$utils = function() {
      return S2;
    }, p3.isValid = function() {
      return !(this.$d.toString() === h2);
    }, p3.isSame = function(t3, e2) {
      var n3 = Y(t3);
      return this.startOf(e2) <= n3 && n3 <= this.endOf(e2);
    }, p3.isAfter = function(t3, e2) {
      return Y(t3) < this.startOf(e2);
    }, p3.isBefore = function(t3, e2) {
      return this.endOf(e2) < Y(t3);
    }, p3.$g = function(t3, e2, n3) {
      return S2.u(t3) ? this[e2] : this.set(n3, t3);
    }, p3.unix = function() {
      return Math.floor(this.valueOf() / 1e3);
    }, p3.valueOf = function() {
      return this.$d.getTime();
    }, p3.startOf = function(t3, e2) {
      var n3 = this, r3 = !!S2.u(e2) || e2, f3 = S2.p(t3), h3 = function(t4, e3) {
        var i3 = S2.w(n3.$u ? Date.UTC(n3.$y, e3, t4) : new Date(n3.$y, e3, t4), n3);
        return r3 ? i3 : i3.endOf(a2);
      }, m3 = function(t4, e3) {
        return S2.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n3);
      }, $3 = this.$W, v4 = this.$M, p4 = this.$D, y3 = "set" + (this.$u ? "UTC" : "");
      switch (f3) {
        case d2:
          return r3 ? h3(1, 0) : h3(31, 11);
        case c2:
          return r3 ? h3(1, v4) : h3(0, v4 + 1);
        case u2:
          var g3 = this.$locale().weekStart || 0, M3 = ($3 < g3 ? $3 + 7 : $3) - g3;
          return h3(r3 ? p4 - M3 : p4 + (6 - M3), v4);
        case a2:
        case l2:
          return m3(y3 + "Hours", 0);
        case o2:
          return m3(y3 + "Minutes", 1);
        case s2:
          return m3(y3 + "Seconds", 2);
        case i2:
          return m3(y3 + "Milliseconds", 3);
        default:
          return this.clone();
      }
    }, p3.endOf = function(t3) {
      return this.startOf(t3, false);
    }, p3.$set = function(t3, e2) {
      var n3, u3 = S2.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), h3 = (n3 = {}, n3[a2] = f3 + "Date", n3[l2] = f3 + "Date", n3[c2] = f3 + "Month", n3[d2] = f3 + "FullYear", n3[o2] = f3 + "Hours", n3[s2] = f3 + "Minutes", n3[i2] = f3 + "Seconds", n3[r2] = f3 + "Milliseconds", n3)[u3], m3 = u3 === a2 ? this.$D + (e2 - this.$W) : e2;
      if (u3 === c2 || u3 === d2) {
        var $3 = this.clone().set(l2, 1);
        $3.$d[h3](m3), $3.init(), this.$d = $3.set(l2, Math.min(this.$D, $3.daysInMonth())).$d;
      } else
        h3 && this.$d[h3](m3);
      return this.init(), this;
    }, p3.set = function(t3, e2) {
      return this.clone().$set(t3, e2);
    }, p3.get = function(t3) {
      return this[S2.p(t3)]();
    }, p3.add = function(r3, f3) {
      var l3, h3 = this;
      r3 = Number(r3);
      var m3 = S2.p(f3), $3 = function(t3) {
        var e2 = Y(h3);
        return S2.w(e2.date(e2.date() + Math.round(t3 * r3)), h3);
      };
      if (m3 === c2)
        return this.set(c2, this.$M + r3);
      if (m3 === d2)
        return this.set(d2, this.$y + r3);
      if (m3 === a2)
        return $3(1);
      if (m3 === u2)
        return $3(7);
      var v4 = (l3 = {}, l3[s2] = e, l3[o2] = n2, l3[i2] = t2, l3)[m3] || 1, p4 = this.$d.getTime() + r3 * v4;
      return S2.w(p4, this);
    }, p3.subtract = function(t3, e2) {
      return this.add(-1 * t3, e2);
    }, p3.format = function(t3) {
      var e2 = this, n3 = this.$locale();
      if (!this.isValid())
        return n3.invalidDate || h2;
      var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = S2.z(this), s3 = this.$H, o3 = this.$m, a3 = this.$M, u3 = n3.weekdays, c3 = n3.months, f3 = function(t4, n4, i4, s4) {
        return t4 && (t4[n4] || t4(e2, r3)) || i4[n4].substr(0, s4);
      }, d3 = function(t4) {
        return S2.s(s3 % 12 || 12, t4, "0");
      }, l3 = n3.meridiem || function(t4, e3, n4) {
        var r4 = t4 < 12 ? "AM" : "PM";
        return n4 ? r4.toLowerCase() : r4;
      }, m3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a3 + 1, MM: S2.s(a3 + 1, 2, "0"), MMM: f3(n3.monthsShort, a3, c3, 3), MMMM: f3(c3, a3), D: this.$D, DD: S2.s(this.$D, 2, "0"), d: String(this.$W), dd: f3(n3.weekdaysMin, this.$W, u3, 2), ddd: f3(n3.weekdaysShort, this.$W, u3, 3), dddd: u3[this.$W], H: String(s3), HH: S2.s(s3, 2, "0"), h: d3(1), hh: d3(2), a: l3(s3, o3, true), A: l3(s3, o3, false), m: String(o3), mm: S2.s(o3, 2, "0"), s: String(this.$s), ss: S2.s(this.$s, 2, "0"), SSS: S2.s(this.$ms, 3, "0"), Z: i3 };
      return r3.replace($2, function(t4, e3) {
        return e3 || m3[t4] || i3.replace(":", "");
      });
    }, p3.utcOffset = function() {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, p3.diff = function(r3, l3, h3) {
      var m3, $3 = S2.p(l3), v4 = Y(r3), p4 = (v4.utcOffset() - this.utcOffset()) * e, y3 = this - v4, g3 = S2.m(this, v4);
      return g3 = (m3 = {}, m3[d2] = g3 / 12, m3[c2] = g3, m3[f2] = g3 / 3, m3[u2] = (y3 - p4) / 6048e5, m3[a2] = (y3 - p4) / 864e5, m3[o2] = y3 / n2, m3[s2] = y3 / e, m3[i2] = y3 / t2, m3)[$3] || y3, h3 ? g3 : S2.a(g3);
    }, p3.daysInMonth = function() {
      return this.endOf(c2).$D;
    }, p3.$locale = function() {
      return M2[this.$L];
    }, p3.locale = function(t3, e2) {
      if (!t3)
        return this.$L;
      var n3 = this.clone(), r3 = _2(t3, e2, true);
      return r3 && (n3.$L = r3), n3;
    }, p3.clone = function() {
      return S2.w(this.$d, this);
    }, p3.toDate = function() {
      return new Date(this.valueOf());
    }, p3.toJSON = function() {
      return this.isValid() ? this.toISOString() : null;
    }, p3.toISOString = function() {
      return this.$d.toISOString();
    }, p3.toString = function() {
      return this.$d.toUTCString();
    }, v3;
  }(), O2 = w2.prototype;
  return Y.prototype = O2, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", o2], ["$W", a2], ["$M", c2], ["$y", d2], ["$D", l2]].forEach(function(t3) {
    O2[t3[1]] = function(e2) {
      return this.$g(e2, t3[0], t3[1]);
    };
  }), Y.extend = function(t3, e2) {
    return t3.$i || (t3(e2, w2, Y), t3.$i = true), Y;
  }, Y.locale = _2, Y.isDayjs = D2, Y.unix = function(t3) {
    return Y(1e3 * t3);
  }, Y.en = M2[g2], Y.Ls = M2, Y.p = {}, Y;
}(), d$3 = (a$6 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, function(t2, e, n2) {
  var r2 = e.prototype, i2 = r2.format;
  n2.en.formats = a$6, r2.format = function(t3) {
    t3 === void 0 && (t3 = "YYYY-MM-DDTHH:mm:ssZ");
    var e2 = this.$locale().formats, n3 = function(t4, e3) {
      return t4.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t5, n4, r3) {
        var i3 = r3 && r3.toUpperCase();
        return n4 || e3[r3] || a$6[r3] || e3[i3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t6, e4, n5) {
          return e4 || n5.slice(1);
        });
      });
    }(t3, e2 === void 0 ? {} : e2);
    return i2.call(this, n3);
  };
}), h$3 = function(t2, e, n2) {
  var r2 = e.prototype, i2 = function(t3) {
    var e2, i3 = t3.date, s3 = t3.utc, o3 = {};
    if (!((e2 = i3) instanceof Date) && !(e2 instanceof Array) && e2 instanceof Object) {
      if (!Object.keys(i3).length)
        return new Date();
      var a3 = s3 ? n2.utc() : n2();
      Object.keys(i3).forEach(function(t4) {
        var e3, n3;
        o3[e3 = t4, n3 = r2.$utils().p(e3), n3 === "date" ? "day" : n3] = i3[t4];
      });
      var u3 = o3.day || (o3.year || o3.month >= 0 ? 1 : a3.date()), c2 = o3.year || a3.year(), f2 = o3.month >= 0 ? o3.month : o3.year || o3.day ? 0 : a3.month(), d2 = o3.hour || 0, l2 = o3.minute || 0, h2 = o3.second || 0, m2 = o3.millisecond || 0;
      return s3 ? new Date(Date.UTC(c2, f2, u3, d2, l2, h2, m2)) : new Date(c2, f2, u3, d2, l2, h2, m2);
    }
    return i3;
  }, s2 = r2.parse;
  r2.parse = function(t3) {
    t3.date = i2.bind(this)(t3), s2.bind(this)(t3);
  };
  var o2 = r2.set, a2 = r2.add, u2 = function(t3, e2, n3, r3) {
    if (r3 === void 0 && (r3 = 1), e2 instanceof Object) {
      var i3 = Object.keys(e2), s3 = this;
      return i3.forEach(function(n4) {
        s3 = t3.bind(s3)(e2[n4] * r3, n4);
      }), s3;
    }
    return t3.bind(this)(e2 * r3, n3);
  };
  r2.set = function(t3, e2) {
    return e2 = e2 === void 0 ? t3 : e2, u2.bind(this)(function(t4, e3) {
      return o2.bind(this)(e3, t4);
    }, e2, t3);
  }, r2.add = function(t3, e2) {
    return u2.bind(this)(a2, t3, e2);
  }, r2.subtract = function(t3, e2) {
    return u2.bind(this)(a2, t3, e2, -1);
  };
}, $ = function() {
  var t2 = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
  return function(n2, r2, i2) {
    var s2, o2 = function(t3, n3, r3) {
      r3 === void 0 && (r3 = {});
      var i3 = new Date(t3), s3 = function(t4, n4) {
        n4 === void 0 && (n4 = {});
        var r4 = n4.timeZoneName || "short", i4 = t4 + "|" + r4, s4 = e[i4];
        return s4 || (s4 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t4, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: r4 }), e[i4] = s4), s4;
      }(n3, r3);
      return s3.formatToParts(i3);
    }, a2 = function(e2, n3) {
      for (var r3 = o2(e2, n3), s3 = [], a3 = 0; a3 < r3.length; a3 += 1) {
        var u3 = r3[a3], c3 = u3.type, f2 = u3.value, d2 = t2[c3];
        d2 >= 0 && (s3[d2] = parseInt(f2, 10));
      }
      var l2 = s3[3], h2 = l2 === 24 ? 0 : l2, m2 = s3[0] + "-" + s3[1] + "-" + s3[2] + " " + h2 + ":" + s3[4] + ":" + s3[5] + ":000", $2 = +e2;
      return (i2.utc(m2).valueOf() - ($2 -= $2 % 1e3)) / 6e4;
    }, u2 = r2.prototype;
    u2.tz = function(t3, e2) {
      t3 === void 0 && (t3 = s2);
      var n3 = this.utcOffset(), r3 = this.toDate(), o3 = r3.toLocaleString("en-US", { timeZone: t3 }), a3 = Math.round((r3 - new Date(o3)) / 1e3 / 60), u3 = i2(o3).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r3.getTimezoneOffset() / 15) - a3, true);
      if (e2) {
        var c3 = u3.utcOffset();
        u3 = u3.add(n3 - c3, "minute");
      }
      return u3.$x.$timezone = t3, u3;
    }, u2.offsetName = function(t3) {
      var e2 = this.$x.$timezone || i2.tz.guess(), n3 = o2(this.valueOf(), e2, { timeZoneName: t3 }).find(function(t4) {
        return t4.type.toLowerCase() === "timezonename";
      });
      return n3 && n3.value;
    };
    var c2 = u2.startOf;
    u2.startOf = function(t3, e2) {
      if (!this.$x || !this.$x.$timezone)
        return c2.call(this, t3, e2);
      var n3 = i2(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
      return c2.call(n3, t3, e2).tz(this.$x.$timezone, true);
    }, i2.tz = function(t3, e2, n3) {
      var r3 = n3 && e2, o3 = n3 || e2 || s2, u3 = a2(+i2(), o3);
      if (typeof t3 != "string")
        return i2(t3).tz(o3);
      var c3 = function(t4, e3, n4) {
        var r4 = t4 - 60 * e3 * 1e3, i3 = a2(r4, n4);
        if (e3 === i3)
          return [r4, e3];
        var s3 = a2(r4 -= 60 * (i3 - e3) * 1e3, n4);
        return i3 === s3 ? [r4, i3] : [t4 - 60 * Math.min(i3, s3) * 1e3, Math.max(i3, s3)];
      }(i2.utc(t3, r3).valueOf(), u3, o3), f2 = c3[0], d2 = c3[1], l2 = i2(f2).utcOffset(d2);
      return l2.$x.$timezone = o3, l2;
    }, i2.tz.guess = function() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }, i2.tz.setDefault = function(t3) {
      s2 = t3;
    };
  };
}(), p$7 = function() {
  var t2 = "minute", e = /[+-]\d\d(?::?\d\d)?/g, n2 = /([+-]|\d\d)/g;
  return function(r2, i2, s2) {
    var o2 = i2.prototype;
    s2.utc = function(t3) {
      return new i2({ date: t3, utc: true, args: arguments });
    }, o2.utc = function(e2) {
      var n3 = s2(this.toDate(), { locale: this.$L, utc: true });
      return e2 ? n3.add(this.utcOffset(), t2) : n3;
    }, o2.local = function() {
      return s2(this.toDate(), { locale: this.$L, utc: false });
    };
    var a2 = o2.parse;
    o2.parse = function(t3) {
      t3.utc && (this.$u = true), this.$utils().u(t3.$offset) || (this.$offset = t3.$offset), a2.call(this, t3);
    };
    var u2 = o2.init;
    o2.init = function() {
      if (this.$u) {
        var t3 = this.$d;
        this.$y = t3.getUTCFullYear(), this.$M = t3.getUTCMonth(), this.$D = t3.getUTCDate(), this.$W = t3.getUTCDay(), this.$H = t3.getUTCHours(), this.$m = t3.getUTCMinutes(), this.$s = t3.getUTCSeconds(), this.$ms = t3.getUTCMilliseconds();
      } else
        u2.call(this);
    };
    var c2 = o2.utcOffset;
    o2.utcOffset = function(r3, i3) {
      var s3 = this.$utils().u;
      if (s3(r3))
        return this.$u ? 0 : s3(this.$offset) ? c2.call(this) : this.$offset;
      if (typeof r3 == "string" && (r3 = function(t3) {
        t3 === void 0 && (t3 = "");
        var r4 = t3.match(e);
        if (!r4)
          return null;
        var i4 = ("" + r4[0]).match(n2) || ["-", 0, 0], s4 = i4[0], o4 = 60 * +i4[1] + +i4[2];
        return o4 === 0 ? 0 : s4 === "+" ? o4 : -o4;
      }(r3), r3 === null))
        return this;
      var o3 = Math.abs(r3) <= 16 ? 60 * r3 : r3, a3 = this;
      if (i3)
        return a3.$offset = o3, a3.$u = r3 === 0, a3;
      if (r3 !== 0) {
        var u3 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        (a3 = this.local().add(o3 + u3, t2)).$offset = o3, a3.$x.$localOffset = u3;
      } else
        a3 = this.utc();
      return a3;
    };
    var f2 = o2.format;
    o2.format = function(t3) {
      var e2 = t3 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
      return f2.call(this, e2);
    }, o2.valueOf = function() {
      var t3 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || new Date().getTimezoneOffset());
      return this.$d.valueOf() - 6e4 * t3;
    }, o2.isUTC = function() {
      return !!this.$u;
    }, o2.toISOString = function() {
      return this.toDate().toISOString();
    }, o2.toString = function() {
      return this.toDate().toUTCString();
    };
    var d2 = o2.toDate;
    o2.toDate = function(t3) {
      return t3 === "s" && this.$offset ? s2(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d2.call(this);
    };
    var l2 = o2.diff;
    o2.diff = function(t3, e2, n3) {
      if (t3 && this.$u === t3.$u)
        return l2.call(this, t3, e2, n3);
      var r3 = this.local(), i3 = s2(t3).local();
      return l2.call(r3, i3, e2, n3);
    };
  };
}();
c$6.extend(d$3), c$6.extend(h$3), c$6.extend(p$7), c$6.extend($);
const y$3 = { name: "zh-cn", weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"), weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"), weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"), months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), ordinal: (t2, e) => e === "W" ? `${t2}\u5468` : `${t2}\u65E5`, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206", LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" }, relativeTime: { future: "%s\u5185", past: "%s\u524D", s: "\u51E0\u79D2", m: "1 \u5206\u949F", mm: "%d \u5206\u949F", h: "1 \u5C0F\u65F6", hh: "%d \u5C0F\u65F6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4E2A\u6708", MM: "%d \u4E2A\u6708", y: "1 \u5E74", yy: "%d \u5E74" }, meridiem: (t2, e) => {
  const n2 = 100 * t2 + e;
  return n2 < 600 ? "\u51CC\u6668" : n2 < 900 ? "\u65E9\u4E0A" : n2 < 1100 ? "\u4E0A\u5348" : n2 < 1300 ? "\u4E2D\u5348" : n2 < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
} }, g$1 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") };
c$6.locale("zh", y$3), c$6.locale("en", g$1);
const M$1 = c$6, D = (t2, e = {}) => {
  const { lang: n2, timezone: r2, type: i2 } = e;
  M$1.locale(((t3 = "en") => {
    const e2 = t3.toLowerCase();
    return e2 === "zh" || e2 === "zh-cn" ? "zh" : (e2 === "en-us" || e2 === "en-uk" || e2 === "en" || console.warn(`${t3} locale missing in config`), "en");
  })(n2));
  const s2 = r2 ? M$1(t2).tz(r2).format("LL") : M$1(t2).format("LL"), o2 = r2 ? M$1(t2).tz(r2).format("HH:mm") : M$1(t2).format("HH:mm");
  return i2 === "date" ? s2 : i2 === "time" ? o2 : `${s2} ${o2}`;
}, _ = (t2, e = {}) => {
  const { timezone: n2 } = e;
  if (t2) {
    if (M$1(t2 instanceof Date ? t2 : t2.trim()).isValid()) {
      const r3 = n2 ? M$1(t2).tz(n2) : M$1(t2), i2 = r3.year(), s2 = r3.month() + 1, o2 = r3.date(), a2 = r3.hour(), u2 = r3.minute(), c2 = r3.second(), f2 = r3.millisecond(), d2 = a2 === 0 && u2 === 0 && c2 === 0 && f2 === 0, l2 = r3.toDate();
      return { display: D(l2, __spreadValues({ type: d2 ? "date" : "full" }, e)), value: l2, detail: __spreadValues({ year: i2, month: s2, day: o2 }, d2 ? {} : { hour: a2, minute: u2, second: c2 }) };
    }
    const r2 = /(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(t2.trim());
    if (r2) {
      const [, t3, n3, i2, s2, o2, a2] = r2, u2 = (t4) => t4 === void 0 ? void 0 : Number(t4), c2 = (t4) => s2 && o2 && !a2 ? 0 : t4, f2 = { year: ((t4) => t4 && t4 < 100 ? t4 + 2e3 : t4)(u2(t3)), month: u2(n3), day: u2(i2), hour: u2(s2), minute: u2(o2), second: c2(u2(a2)) }, d2 = t3 === void 0 && n3 === void 0 && i2 === void 0, l2 = s2 === void 0 && o2 === void 0 && a2 === void 0, h2 = M$1(__spreadProps(__spreadValues({}, f2), { month: f2.month - 1 })).toDate();
      return { display: D(h2, __spreadValues({ type: l2 ? "date" : d2 ? "time" : "full" }, e)), value: d2 ? void 0 : h2, detail: l2 ? { year: f2.year, month: f2.month, day: f2.day } : d2 ? { hour: f2.hour, minute: f2.minute, second: f2.second } : f2 };
    }
  }
  return null;
}, S = (t2, e = false) => t2 ? Array.isArray(t2) ? t2.map((t3) => typeof t3 == "string" ? { name: t3 } : t3) : typeof t2 == "string" ? [{ name: t2 }] : typeof t2 == "object" && t2.name ? [t2] : (console.error(`Expect 'author' to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e ? "" : "| false"} | undefined\`, but got`, t2), []) : [], w$1 = (t2) => {
  if (t2) {
    if (Array.isArray(t2))
      return t2.map(s$4);
    if (typeof t2 == "string")
      return [s$4(t2)];
    console.error("Expect 'category' to be `string[] | string | undefined`, but got", t2);
  }
  return [];
}, O$1 = (t2) => {
  if (t2) {
    if (Array.isArray(t2))
      return t2;
    if (typeof t2 == "string")
      return [t2];
    console.error("Expect 'tag' to be `string[] | string | undefined`, but got", t2);
  }
  return [];
}, T$1 = vue.defineComponent({ name: "IconBase", props: { name: { type: String, default: "" }, color: { type: String, default: "currentColor" } }, setup: (t2, { slots: n2 }) => () => {
  var r2;
  return vue.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${t2.name}-icon`], viewBox: "0 0 1024 1024", ariaLabelledby: t2.name }, [vue.h("title", { id: t2.name, lang: "en" }, `${t2.name} icon`), vue.h("g", { fill: t2.color }, (r2 = n2.default) === null || r2 === void 0 ? void 0 : r2.call(n2))]);
} }), x = (t2) => {
  const e = useRouteLocale();
  return vue.computed(() => t2[e.value]);
};
const U = (t2, e) => {
  let n2 = 1;
  for (let e2 = 0; e2 < t2.length; e2++)
    n2 += t2.charCodeAt(e2), n2 += n2 << 10, n2 ^= n2 >> 6;
  return n2 += n2 << 3, n2 ^= n2 >> 11, n2 % e;
}, N$1 = /#.*$/u, I$1 = (t2) => {
  const e = N$1.exec(t2);
  return e ? e[0] : "";
}, k = (t2) => decodeURI(t2).replace(N$1, "").replace(/(index)?\.(md|html)$/, ""), W = (t2, e) => {
  if (e === void 0)
    return false;
  const n2 = k(t2.path), r2 = k(e), i2 = I$1(e);
  return i2 ? i2 === t2.hash && (!r2 || n2 === r2) : n2 === r2;
};
class F {
  constructor() {
    const t2 = "message-container", e = document.getElementById(t2);
    e ? this.containerElement = e : (this.containerElement = document.createElement("div"), this.containerElement.id = t2, document.body.appendChild(this.containerElement));
  }
  pop(t2, e = 2e3) {
    const n2 = document.createElement("div");
    n2.className = "message move-in", n2.innerHTML = t2, this.containerElement.appendChild(n2), e > 0 && setTimeout(() => {
      this.close(n2);
    }, e);
  }
  close(t2) {
    t2.className = t2.className.replace("move-in", ""), t2.className += "move-out", t2.addEventListener("animationend", () => {
      t2.remove();
    });
  }
}
process.env.NODE_ENV === "production" || Object.freeze({}), process.env.NODE_ENV === "production" || Object.freeze([]);
const j = (t2, ...e) => {
  const n2 = t2.resolve(...e), r2 = n2.matched[n2.matched.length - 1];
  if (!(r2 == null ? void 0 : r2.redirect))
    return n2;
  const { redirect: i2 } = r2, s2 = typeof i2 == "function" ? i2(n2) : i2;
  const o2 = ((t3) => typeof t3 == "string")(s2) ? { path: s2 } : s2;
  return j(t2, __spreadValues({ hash: n2.hash, query: n2.query, params: n2.params }, o2));
};
const themeData$1 = {
  "blog": {
    "description": "\u4E00\u4E2A\u524D\u7AEF\u5F00\u53D1\u8005",
    "intro": "/intro.html",
    "medias": {
      "Baidu": "https://example.com",
      "Bitbucket": "https://example.com",
      "Dingding": "https://example.com",
      "Discord": "https://example.com",
      "Dribbble": "https://example.com",
      "Email": "https://example.com",
      "Evernote": "https://example.com",
      "Facebook": "https://example.com",
      "Flipboard": "https://example.com",
      "Gitee": "https://example.com",
      "GitHub": "https://example.com",
      "Gitlab": "https://example.com",
      "Gmail": "https://example.com",
      "Instagram": "https://example.com",
      "Lines": "https://example.com",
      "Linkedin": "https://example.com",
      "Pinterest": "https://example.com",
      "Pocket": "https://example.com",
      "QQ": "https://example.com",
      "Qzone": "https://example.com",
      "Reddit": "https://example.com",
      "Rss": "https://example.com",
      "Steam": "https://example.com",
      "Twitter": "https://example.com",
      "Wechat": "https://example.com",
      "Weibo": "https://example.com",
      "Whatsapp": "https://example.com",
      "Youtube": "https://example.com",
      "Zhihu": "https://example.com"
    }
  },
  "encrypt": {
    "global": false,
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$RQI2adpQoZG4vnAcmQ6PQ.zlcB5nXKm/CJ4BR.hv7KFm0eHmpGbhq"
      ]
    }
  },
  "pure": false,
  "iconPrefix": "iconfont icon-",
  "darkmode": "auto-switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullscreen": true,
  "locales": {
    "/": {
      "blog": {},
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": {
        "/foo/": "structure",
        "/bar/": "structure",
        "/": [
          "",
          "contact",
          "about"
        ]
      },
      "sidebarIcon": true,
      "headerDepth": 2,
      "author": {
        "name": "Mr.Hope",
        "url": "https://mrhope.site"
      },
      "logo": "/logo.svg",
      "repo": "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
      "docsDir": "demo/src",
      "navbar": [
        {
          "text": "foo",
          "icon": "creative",
          "link": "/foo/"
        },
        {
          "text": "bar",
          "icon": "creative",
          "link": "/bar/"
        },
        {
          "text": "\u4E3B\u9898\u6587\u6863",
          "icon": "note",
          "link": "https://vuepress-theme-hope.github.io/v2/zh/"
        }
      ],
      "footer": "\u9ED8\u8BA4\u9875\u811A",
      "displayFooter": true,
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ],
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "\u7B80\u4F53\u4E2D\u6587",
        "selectLangText": "\u9009\u62E9\u8BED\u8A00",
        "selectLangAriaLabel": "\u9009\u62E9\u8BED\u8A00"
      },
      "metaLocales": {
        "prev": "\u4E0A\u4E00\u9875",
        "next": "\u4E0B\u4E00\u9875",
        "lastUpdated": "\u4E0A\u6B21\u7F16\u8F91\u4E8E",
        "contributors": "\u8D21\u732E\u8005",
        "editLink": "\u7F16\u8F91\u6B64\u9875"
      },
      "blogLocales": {
        "article": "\u6587\u7AE0",
        "articleList": "\u6587\u7AE0\u5217\u8868",
        "category": "\u5206\u7C7B",
        "tag": "\u6807\u7B7E",
        "timeline": "\u65F6\u95F4\u8F74",
        "timelineTitle": "\u6628\u65E5\u4E0D\u5728",
        "all": "\u5168\u90E8",
        "intro": "\u4E2A\u4EBA\u4ECB\u7ECD",
        "star": "\u6536\u85CF",
        "slides": "\u5E7B\u706F\u7247",
        "encrypt": "\u52A0\u5BC6"
      },
      "outlookLocales": {
        "themeColor": "\u4E3B\u9898\u8272",
        "darkmode": "\u5916\u89C2",
        "fullscreen": "\u5168\u5C4F"
      },
      "encryptLocales": {
        "title": "\u8BF7\u8F93\u5165\u5BC6\u7801",
        "errorHint": "\u8BF7\u8F93\u5165\u6B63\u786E\u5BC6\u7801"
      },
      "routeLocales": {
        "404msg": [
          "\u8FD9\u91CC\u4EC0\u4E48\u4E5F\u6CA1\u6709",
          "\u6211\u4EEC\u662F\u600E\u4E48\u6765\u5230\u8FD9\u513F\u7684\uFF1F",
          "\u8FD9 \u662F \u56DB \u96F6 \u56DB !",
          "\u770B\u8D77\u6765\u4F60\u8BBF\u95EE\u4E86\u4E00\u4E2A\u5931\u6548\u7684\u94FE\u63A5"
        ],
        "back": "\u8FD4\u56DE\u4E0A\u4E00\u9875",
        "home": "\u5E26\u6211\u56DE\u5BB6"
      }
    }
  }
};
const themeData = vue.ref(themeData$1);
const useThemeData$1 = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
var backToTop = "";
const d$2 = () => vue.h(T$1, { name: "back-to-top" }, () => [vue.h("path", { d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z" }), vue.h("path", { d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z" })]);
d$2.displayName = "BacktoTopIcon";
var i$7 = vue.defineComponent({ name: "BackToTop", props: { threshold: { type: Number, default: 300 } }, setup(o2) {
  const r2 = usePageFrontmatter(), i2 = useThemeData$1(), v2 = x({ "/": { "backToTop": "\u8FD4\u56DE\u9876\u90E8" } }), b2 = vue.ref(0), T2 = vue.computed(() => {
    const { backToTop: e } = i2.value;
    return typeof e == "number" ? e : o2.threshold;
  }), f2 = vue.computed(() => {
    const o3 = i2.value.backToTop !== false, e = r2.value.backToTop;
    return (e || o3 && e !== false) && b2.value > T2.value;
  }), h2 = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, k2 = a__default["default"](() => {
    b2.value = h2();
  }, 100);
  return vue.onMounted(() => {
    b2.value = h2(), window.addEventListener("scroll", k2);
  }), vue.onUnmounted(() => {
    window.removeEventListener("scroll", k2);
  }), () => vue.h(vue.Transition, { name: "fade" }, () => f2.value ? vue.h("button", { class: "back-to-top", ariaLabel: v2.value.backToTop, "data-balloon-pos": "left", onClick: () => {
    window.scrollTo({ top: 0, behavior: "smooth" }), b2.value = 0;
  } }, vue.h(d$2)) : null);
} });
const clientAppRootComponents = [
  i$7
];
var clientAppSetup0 = defineClientAppSetup(() => {
  return;
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var nprogress$1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(module, exports2) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var NProgress = {};
    NProgress.version = "0.2.0";
    var Settings = NProgress.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress.configure = function(options) {
      var key, value2;
      for (key in options) {
        value2 = options[key];
        if (value2 !== void 0 && options.hasOwnProperty(key))
          Settings[key] = value2;
      }
      return this;
    };
    NProgress.status = null;
    NProgress.set = function(n2) {
      var started = NProgress.isStarted();
      n2 = clamp(n2, Settings.minimum, 1);
      NProgress.status = n2 === 1 ? null : n2;
      var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
      progress.offsetWidth;
      queue(function(next) {
        if (Settings.positionUsing === "")
          Settings.positionUsing = NProgress.getPositioningCSS();
        css(bar, barPositionCSS(n2, speed, ease));
        if (n2 === 1) {
          css(progress, {
            transition: "none",
            opacity: 1
          });
          progress.offsetWidth;
          setTimeout(function() {
            css(progress, {
              transition: "all " + speed + "ms linear",
              opacity: 0
            });
            setTimeout(function() {
              NProgress.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });
      return this;
    };
    NProgress.isStarted = function() {
      return typeof NProgress.status === "number";
    };
    NProgress.start = function() {
      if (!NProgress.status)
        NProgress.set(0);
      var work = function() {
        setTimeout(function() {
          if (!NProgress.status)
            return;
          NProgress.trickle();
          work();
        }, Settings.trickleSpeed);
      };
      if (Settings.trickle)
        work();
      return this;
    };
    NProgress.done = function(force) {
      if (!force && !NProgress.status)
        return this;
      return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress.inc = function(amount) {
      var n2 = NProgress.status;
      if (!n2) {
        return NProgress.start();
      } else {
        if (typeof amount !== "number") {
          amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
        }
        n2 = clamp(n2 + amount, 0, 0.994);
        return NProgress.set(n2);
      }
    };
    NProgress.trickle = function() {
      return NProgress.inc(Math.random() * Settings.trickleRate);
    };
    (function() {
      var initial = 0, current = 0;
      NProgress.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }
        if (current === 0) {
          NProgress.start();
        }
        initial++;
        current++;
        $promise.always(function() {
          current--;
          if (current === 0) {
            initial = 0;
            NProgress.done();
          } else {
            NProgress.set((initial - current) / initial);
          }
        });
        return this;
      };
    })();
    NProgress.render = function(fromStart) {
      if (NProgress.isRendered())
        return document.getElementById("nprogress");
      addClass(document.documentElement, "nprogress-busy");
      var progress = document.createElement("div");
      progress.id = "nprogress";
      progress.innerHTML = Settings.template;
      var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
      css(bar, {
        transition: "all 0 linear",
        transform: "translate3d(" + perc + "%,0,0)"
      });
      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement(spinner);
      }
      if (parent != document.body) {
        addClass(parent, "nprogress-custom-parent");
      }
      parent.appendChild(progress);
      return progress;
    };
    NProgress.remove = function() {
      removeClass(document.documentElement, "nprogress-busy");
      removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
      var progress = document.getElementById("nprogress");
      progress && removeElement(progress);
    };
    NProgress.isRendered = function() {
      return !!document.getElementById("nprogress");
    };
    NProgress.getPositioningCSS = function() {
      var bodyStyle = document.body.style;
      var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
      if (vendorPrefix + "Perspective" in bodyStyle) {
        return "translate3d";
      } else if (vendorPrefix + "Transform" in bodyStyle) {
        return "translate";
      } else {
        return "margin";
      }
    };
    function clamp(n2, min, max) {
      if (n2 < min)
        return min;
      if (n2 > max)
        return max;
      return n2;
    }
    function toBarPerc(n2) {
      return (-1 + n2) * 100;
    }
    function barPositionCSS(n2, speed, ease) {
      var barCSS;
      if (Settings.positionUsing === "translate3d") {
        barCSS = { transform: "translate3d(" + toBarPerc(n2) + "%,0,0)" };
      } else if (Settings.positionUsing === "translate") {
        barCSS = { transform: "translate(" + toBarPerc(n2) + "%,0)" };
      } else {
        barCSS = { "margin-left": toBarPerc(n2) + "%" };
      }
      barCSS.transition = "all " + speed + "ms " + ease;
      return barCSS;
    }
    var queue = function() {
      var pending = [];
      function next() {
        var fn = pending.shift();
        if (fn) {
          fn(next);
        }
      }
      return function(fn) {
        pending.push(fn);
        if (pending.length == 1)
          next();
      };
    }();
    var css = function() {
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
      function camelCase(string) {
        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }
      function getVendorProp(name) {
        var style = document.body.style;
        if (name in style)
          return name;
        var i2 = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
        while (i2--) {
          vendorName = cssPrefixes[i2] + capName;
          if (vendorName in style)
            return vendorName;
        }
        return name;
      }
      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }
      function applyCss(element, prop, value2) {
        prop = getStyleProp(prop);
        element.style[prop] = value2;
      }
      return function(element, properties) {
        var args = arguments, prop, value2;
        if (args.length == 2) {
          for (prop in properties) {
            value2 = properties[prop];
            if (value2 !== void 0 && properties.hasOwnProperty(prop))
              applyCss(element, prop, value2);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      };
    }();
    function hasClass(element, name) {
      var list = typeof element == "string" ? element : classList(element);
      return list.indexOf(" " + name + " ") >= 0;
    }
    function addClass(element, name) {
      var oldList = classList(element), newList = oldList + name;
      if (hasClass(oldList, name))
        return;
      element.className = newList.substring(1);
    }
    function removeClass(element, name) {
      var oldList = classList(element), newList;
      if (!hasClass(element, name))
        return;
      newList = oldList.replace(" " + name + " ", " ");
      element.className = newList.substring(1, newList.length - 1);
    }
    function classList(element) {
      return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    function removeElement(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress;
  });
})(nprogress$1);
var vars$1 = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress$1.exports.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.exports.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.exports.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var balloon = "";
var button = "";
const n$4 = { "selector": '.theme-hope-content div[class*="language-"] pre', "pure": false }, a$5 = () => !!navigator && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(navigator.userAgent);
var l$3 = defineClientAppSetup(() => {
  const o2 = vueRouter.useRoute(), l2 = x({ "/": { "copy": "\u590D\u5236\u6210\u529F \u{1F389}", "hint": "\u590D\u5236\u4EE3\u7801" } });
  let i2;
  const p2 = (e) => {
    if (!e.hasAttribute("copy-code-registerd")) {
      const t2 = document.createElement("button");
      t2.className = "copy-code-button", t2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="icon-copy-code"><path fill="currentColor" d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 00-6-6H102a6 6 0 00-6 6v20a6 6 0 006 6h180a6 6 0 006-6z" /></svg>', t2.addEventListener("click", () => {
        ((e2) => {
          const t3 = document.getSelection(), o3 = !!(t3 && t3.rangeCount > 0) && t3.getRangeAt(0), c2 = document.createElement("textarea");
          c2.value = e2, c2.setAttribute("readonly", ""), c2.style.position = "absolute", c2.style.top = "-9999px", document.body.appendChild(c2), c2.select(), document.execCommand("copy"), i2.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg><span>${l2.value.copy}</span>`, n$4.duration), document.body.removeChild(c2), o3 && t3 && (t3.removeAllRanges(), t3.addRange(o3));
        })(e.innerText);
      }), t2.setAttribute("aria-label", l2.value.hint), t2.setAttribute("data-balloon-pos", "left"), e.parentElement && e.parentElement.insertBefore(t2, e), e.setAttribute("copy-code-registerd", "");
    }
  }, d2 = () => {
    const e = n$4.selector;
    setTimeout(() => {
      document.querySelectorAll(e).forEach(p2);
    }, n$4.delay || 500);
  };
  vue.onMounted(() => {
    i2 = new F(), a$5() && !n$4.showInMobile || d2();
  }), vue.watch(() => o2.path, () => {
    a$5() && !n$4.showInMobile || d2();
  });
});
var photoswipe = "";
const s$3 = ".theme-hope-content :not(a) > img", a$4 = { "/": { "closeTitle": "\u5173\u95ED", "downloadTitle": "\u4E0B\u8F7D\u56FE\u7247", "fullscreenTitle": "\u5207\u6362\u5168\u5C4F", "zoomTitle": "\u7F29\u653E", "arrowPrevTitle": "\u4E0A\u4E00\u4E2A (\u5DE6\u7BAD\u5934)", "arrowNextTitle": "\u4E0B\u4E00\u4E2A (\u53F3\u7BAD\u5934)" } }, l$2 = 500, m$2 = {}, p$6 = (e) => ({ src: e.src, width: e.naturalWidth, height: e.naturalHeight, alt: e.alt });
var h$2 = defineClientAppSetup(() => {
  const { isSupported: t2, toggle: h2 } = core.useFullscreen(), u2 = x(a$4), d2 = vueRouter.useRoute(), c2 = () => {
    Promise.all([Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("photoswipe"));
    }), new Promise((e) => setTimeout(e, l$2)).then(() => ((e) => {
      const t3 = Array.from(document.querySelectorAll(e));
      return Promise.all(t3.map((e2) => new Promise((t4, o2) => {
        e2.complete ? t4(p$6(e2)) : (e2.onload = () => t4(p$6(e2)), e2.onerror = (e3) => o2(e3));
      }))).then((e2) => ({ elements: t3, infos: e2 }));
    })(s$3))]).then(([e, o2]) => {
      o2.elements.forEach((r2, i2) => {
        r2.addEventListener("click", () => {
          const r3 = new e.default(__spreadProps(__spreadValues(__spreadValues({ dataSource: o2.infos }, u2.value), m$2), { index: i2 }));
          r3.on("uiRegister", () => {
            t2 && r3.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
              h2();
            } }), r3.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (e2, t3) => {
              e2.setAttribute("download", ""), e2.setAttribute("target", "_blank"), e2.setAttribute("rel", "noopener"), t3.on("change", () => {
                e2.href = t3.currSlide.data.src;
              });
            } });
          }), r3.init();
        });
      });
    });
  };
  vue.watch(() => d2.path, () => c2()), vue.onMounted(() => c2());
});
const categoryMap = { "category": { "/": { "path": "/category/", "map": {} } }, "tag": { "/": { "path": "/tag/", "map": {} } } };
if (void 0) {
  (void 0).accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  }
}
const typeMap = { "article": { "/": { "path": "/article/", "keys": ["v-8daa1a0e", "v-22a39d25", "v-6d34f632", "v-7444d4f5", "v-76d72bc4", "v-e12556a0", "v-7446daa2", "v-5cbdbad5", "v-514c26af", "v-298737c8", "v-024e9ac2", "v-67eb30ff"] } }, "encrypted": { "/": { "path": "/encrypted/", "keys": [] } }, "slide": { "/": { "path": "/slides/", "keys": [] } }, "star": { "/": { "path": "/star/", "keys": [] } }, "timeline": { "/": { "path": "/timeline/", "keys": ["v-8daa1a0e", "v-22a39d25", "v-6d34f632", "v-7444d4f5", "v-76d72bc4", "v-e12556a0", "v-7446daa2", "v-5cbdbad5", "v-514c26af", "v-298737c8", "v-024e9ac2", "v-67eb30ff"] } } };
if (void 0) {
  (void 0).accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  }
}
const i$6 = vue.ref(categoryMap), u$5 = (e = "") => {
  const p2 = vueRouter.useRouter(), n2 = vueRouter.useRoute(), u2 = useRouteLocale();
  return vue.computed(() => {
    var o2;
    const m2 = e || ((o2 = usePageFrontmatter().value.blog) === null || o2 === void 0 ? void 0 : o2.key) || "", r2 = p2.getRoutes(), s2 = i$6.value[m2][u2.value], l2 = { path: s2.path, map: {} };
    for (const e2 in s2.map) {
      const o3 = s2.map[e2];
      l2.map[e2] = { path: o3.path, items: [] };
      for (const a2 of o3.keys) {
        const o4 = r2.find(({ name: t2 }) => t2 === a2);
        if (o4) {
          const a3 = j(p2, o4.path);
          l2.map[e2].items.push({ path: a3.path, info: a3.meta });
        }
      }
      n2.path === o3.path && (l2.currentItems = l2.map[e2].items);
    }
    return l2;
  });
};
const l$1 = vue.ref(typeMap), c$5 = (e = "") => {
  const p2 = vueRouter.useRouter(), s2 = useRouteLocale();
  return vue.computed(() => {
    var o2;
    const m2 = e || ((o2 = usePageFrontmatter().value.blog) === null || o2 === void 0 ? void 0 : o2.key) || "", r2 = p2.getRoutes(), n2 = l$1.value[m2][s2.value], i2 = { path: n2.path, items: [] };
    for (const e2 of n2.keys) {
      const o3 = r2.find(({ name: t2 }) => t2 === e2);
      if (o3) {
        const e3 = j(p2, o3.path);
        i2.items.push({ path: e3.path, info: e3.meta });
      }
    }
    return i2;
  });
};
const categoryMapSymbol = Symbol.for("categoryMap");
const useCategoryMap = () => {
  const categoryMap2 = vue.inject(categoryMapSymbol);
  if (!categoryMap2) {
    throw new Error("useCategoryMap() is called without provider.");
  }
  return categoryMap2;
};
const setupCategoryMap = () => {
  const categoryMap2 = u$5("category");
  vue.provide(categoryMapSymbol, categoryMap2);
};
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const useIconPrefix = () => vue.computed(() => useThemeData().value.iconPrefix);
const usePure = () => vue.computed(() => Boolean(useThemeData().value.pure));
const useMobile = () => {
  const themeData2 = useThemeData();
  const isMobile = vue.ref(false);
  const mobileHandler = () => {
    isMobile.value = window.innerWidth <= (themeData2.value.mobileBreakPoint || 719);
  };
  vue.onMounted(() => {
    mobileHandler();
    window.addEventListener("orientationchange", mobileHandler, false);
    window.addEventListener("resize", mobileHandler, false);
  });
  vue.onUnmounted(() => {
    window.removeEventListener("orientationchange", mobileHandler, false);
    window.removeEventListener("resize", mobileHandler, false);
  });
  return isMobile;
};
const useNavigate = () => {
  const router = vueRouter.useRouter();
  const route = vueRouter.useRoute();
  return (url) => {
    if (url) {
      if (url.startsWith("/")) {
        if (route.path !== url)
          void router.push(url);
      } else if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("mailto:")) {
        if (window)
          window.open(url);
      } else {
        const base = route.path.slice(0, route.path.lastIndexOf("/"));
        void router.push(`${base}/${encodeURI(url)}`);
      }
    }
  };
};
const useAutoLink = (item) => {
  const router = vueRouter.useRouter();
  const resolved = j(router, item);
  return {
    icon: resolved.meta.icon,
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
const resolveRepoType = (repo) => !isLinkHttp$1(repo) || /github\.com/.test(repo) ? "GitHub" : /bitbucket\.org/.test(repo) ? "Bitbucket" : /gitlab\.com/.test(repo) ? "GitLab" : /gitee\.com/.test(repo) ? "Gitee" : null;
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const repoType = resolveRepoType(docsRepo);
  let pattern;
  if (editLinkPattern)
    pattern = editLinkPattern;
  else if (repoType !== null)
    pattern = editLinkPatterns[repoType];
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp$1(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash$1(`${removeEndingSlash$1(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData$1();
  const frontmatter = usePageFrontmatter();
  return vue.computed(() => {
    var _a, _b;
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern } = themeLocale.value;
    const showEditLink = (_b = (_a = frontmatter.value.editLink) !== null && _a !== void 0 ? _a : editLink) !== null && _b !== void 0 ? _b : true;
    if (!showEditLink)
      return null;
    if (!docsRepo)
      return null;
    const link = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      editLinkPattern,
      filePathRelative: page2.value.filePathRelative
    });
    if (!link)
      return null;
    return {
      text: themeLocale.value.metaLocales.editLink,
      link
    };
  });
};
const useUpdateTime = () => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData$1();
  const frontmatter = usePageFrontmatter();
  return vue.computed(() => {
    var _a, _b, _c, _d;
    const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) !== null && _a !== void 0 ? _a : themeLocale.value.lastUpdated) !== null && _b !== void 0 ? _b : true;
    if (!showLastUpdated)
      return null;
    if (!((_c = page2.value.git) === null || _c === void 0 ? void 0 : _c.updatedTime))
      return null;
    const updatedDate = new Date((_d = page2.value.git) === null || _d === void 0 ? void 0 : _d.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData$1();
  const frontmatter = usePageFrontmatter();
  return vue.computed(() => {
    var _a, _b, _c, _d;
    const showContributors = (_b = (_a = frontmatter.value.contributors) !== null && _a !== void 0 ? _a : themeLocale.value.contributors) !== null && _b !== void 0 ? _b : true;
    if (!showContributors)
      return null;
    return (_d = (_c = page2.value.git) === null || _c === void 0 ? void 0 : _c.contributors) !== null && _d !== void 0 ? _d : null;
  });
};
const usePageAuthor = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  return vue.computed(() => {
    const { author } = frontmatter.value;
    if (author)
      return S(author);
    if (author === false)
      return [];
    return S(themeLocale.value.author, false);
  });
};
const usePageCategory = () => {
  const frontmatter = usePageFrontmatter();
  return vue.computed(() => w$1(frontmatter.value.category).map((name) => {
    var _a, _b;
    return {
      name,
      path: ((_b = (_a = vue.inject(Symbol.for("categoryMap"))) === null || _a === void 0 ? void 0 : _a.value.map[name]) === null || _b === void 0 ? void 0 : _b.path) || ""
    };
  }));
};
const usePageTag = () => {
  const frontmatter = usePageFrontmatter();
  return vue.computed(() => O$1(frontmatter.value.tag).map((name) => {
    var _a, _b;
    return {
      name,
      path: ((_b = (_a = vue.inject(Symbol.for("tagMap"))) === null || _a === void 0 ? void 0 : _a.value.map[name]) === null || _b === void 0 ? void 0 : _b.path) || ""
    };
  }));
};
const usePageDate = () => {
  const frontmatter = usePageFrontmatter();
  const page2 = usePageData$1();
  const pageLang = usePageLang$1();
  return vue.computed(() => {
    const { date } = frontmatter.value;
    const options = { lang: pageLang.value, type: "date" };
    if (date)
      return _(date, options);
    const { createdTime } = page2.value.git || {};
    if (createdTime)
      return _(new Date(createdTime), options);
    return null;
  });
};
const usePageInfo = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData$1();
  const frontmatter = usePageFrontmatter();
  const author = usePageAuthor();
  const category2 = usePageCategory();
  const tag2 = usePageTag();
  const date = usePageDate();
  const pure = usePure();
  return vue.reactive({
    config: frontmatter.value.pageInfo === false ? false : frontmatter.value.pageInfo || themeLocale.value.pageInfo,
    author: author.value,
    category: category2.value,
    date: date.value,
    tag: tag2.value,
    isOriginal: frontmatter.value.isOriginal,
    readingTime: page2.value.readingTime,
    pageview: "pageview" in frontmatter.value ? frontmatter.value.pageview : false,
    color: !pure.value,
    hint: !pure.value
  });
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const useBlogOptions = () => {
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return vue.computed(() => __spreadValues(__spreadValues({}, themeData2.value.blog), themeLocale.value.blog));
};
const tagMapSymbol = Symbol.for("tagMap");
const useTagMap = () => {
  const tagMap = vue.inject(tagMapSymbol);
  if (!tagMap) {
    throw new Error("useTagMap() is called without provider.");
  }
  return tagMap;
};
const setupTagMap = () => {
  const tagMap = u$5("tag");
  vue.provide(tagMapSymbol, tagMap);
};
const useArticleAuthor = (info) => {
  const themeLocale = useThemeLocaleData();
  return vue.computed(() => {
    const { author } = info.value;
    if (author)
      return S(author);
    if (author === false)
      return [];
    return S(themeLocale.value.author, false);
  });
};
const useArticleCategory = (info) => {
  const categoryMap2 = useCategoryMap();
  return vue.computed(() => w$1(info.value.category).map((name) => ({
    name,
    path: categoryMap2.value.map[name].path
  })));
};
const useArticleTag = (info) => {
  const tagMap = useTagMap();
  return vue.computed(() => O$1(info.value.tag).map((name) => ({
    name,
    path: tagMap.value.map[name].path
  })));
};
const useArticleDate = (info) => {
  const pageLang = usePageLang$1();
  return vue.computed(() => {
    const { date } = info.value;
    return date ? _(date, { lang: pageLang.value, type: "date" }) : null;
  });
};
const useArticleInfo = (info) => {
  const blogOptions = useBlogOptions();
  const author = useArticleAuthor(info);
  const category2 = useArticleCategory(info);
  const tag2 = useArticleTag(info);
  const date = useArticleDate(info);
  const pure = usePure();
  return vue.reactive({
    config: blogOptions.value.articleInfo || [
      "Author",
      "Original",
      "Date",
      "PageView",
      "Category",
      "Tag",
      "ReadingTime"
    ],
    author: author.value,
    category: category2.value,
    date: date.value,
    tag: tag2.value,
    isOriginal: info.value.isOriginal,
    readingTime: info.value.readingTime,
    color: !pure.value,
    hint: !pure.value
  });
};
const articlesSymbol = Symbol.for("articles");
const useArticles = () => {
  const articles = vue.inject(articlesSymbol);
  if (!articles) {
    throw new Error("useArticles() is called without provider.");
  }
  return articles;
};
const setupArticles = () => {
  const articles = c$5("article");
  vue.provide(articlesSymbol, articles);
};
const encryptedArticlesSymbol = Symbol.for("encryptedArticles");
const useEncryptedArticles = () => {
  const encryptedArticles = vue.inject(encryptedArticlesSymbol);
  if (!encryptedArticles) {
    throw new Error("useEncryptedArticles() is called without provider.");
  }
  return encryptedArticles;
};
const setupEncryptedArticles = () => {
  const encryptedArticles = c$5("encrypted");
  vue.provide(encryptedArticlesSymbol, encryptedArticles);
};
const slidesSymbol = Symbol.for("slides");
const useSlides = () => {
  const slides = vue.inject(slidesSymbol);
  if (!slides) {
    throw new Error("useSlides() is called without provider.");
  }
  return slides;
};
const setupSlides = () => {
  const slides = c$5("slide");
  vue.provide(slidesSymbol, slides);
};
const starsSymbol = Symbol.for("stars");
const useStars = () => {
  const stars = vue.inject(starsSymbol);
  if (!stars) {
    throw new Error("useStars() is called without provider.");
  }
  return stars;
};
const setupStars = () => {
  const stars = c$5("star");
  vue.provide(starsSymbol, stars);
};
const timelinesSymbol = Symbol.for("timelines");
const useTimelines = () => {
  const timelines = vue.inject(timelinesSymbol);
  if (!timelines) {
    throw new Error("useTimelines() is called without provider.");
  }
  return timelines;
};
const setupTimelines = () => {
  const timelines = c$5("timeline");
  const timelineItems2 = vue.computed(() => {
    const timelineItems3 = [];
    timelines.value.items.forEach(({ info, path }) => {
      var _a;
      const { year, month, day } = ((_a = _(info.date, { type: "date" })) === null || _a === void 0 ? void 0 : _a.detail) || {};
      if (year && month && day) {
        if (!timelineItems3[0] || timelineItems3[0].year !== year)
          timelineItems3.unshift({ year, items: [] });
        timelineItems3[0].items.push({
          date: `${month}/${day}`,
          info,
          path
        });
      }
    });
    return __spreadProps(__spreadValues({}, timelines.value), {
      config: timelineItems3.reverse()
    });
  });
  vue.provide(timelinesSymbol, timelineItems2);
};
const setupBlog = () => {
  setupArticles();
  setupCategoryMap();
  setupEncryptedArticles();
  setupSlides();
  setupStars();
  setupTagMap();
  setupTimelines();
};
var clientAppSetup4 = defineClientAppSetup(() => {
  setupBlog();
});
const darkModeSymbol = Symbol.for("darkMode");
const useDarkMode = () => {
  const darkmode = vue.inject(darkModeSymbol);
  if (!darkmode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return darkmode;
};
const updateDarkModeAttr = (isDarkMode) => {
  const update = (isDark = isDarkMode.value) => {
    const html = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    html === null || html === void 0 ? void 0 : html.setAttribute("data-theme", isDark ? "dark" : "light");
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const setupDarkMode = () => {
  const themeData2 = useThemeData();
  const isDarkPreferred = core.usePreferredDark();
  const darkmodeStorage = core.useStorage("vuepress-theme-hope-scheme", "auto");
  const isDarkMode = vue.computed(() => {
    const { darkmode } = themeData2.value;
    return darkmode === "disable" ? false : darkmode === "force-dark" ? true : darkmode === "auto" ? isDarkPreferred.value : darkmode === "switch" ? darkmodeStorage.value === "dark" : darkmodeStorage.value === "dark" || darkmodeStorage.value === "auto" && isDarkPreferred.value;
  });
  vue.provide(darkModeSymbol, { isDarkMode, status: darkmodeStorage });
  updateDarkModeAttr(isDarkMode);
};
var clientAppSetup5 = defineClientAppSetup(() => {
  setupDarkMode();
});
var vars = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = vue.defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = vue.computed(() => {
      var _a;
      return (_a = props.locales[routeLocale.value]) !== null && _a !== void 0 ? _a : {
        openInNewWindow: "open in new window"
      };
    });
    return () => vue.h("span", [
      svg,
      vue.h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
var AutoLink = vue.defineComponent({
  name: "AutoLink",
  inheritAttrs: false,
  props: {
    config: {
      type: Object,
      required: true
    },
    exact: {
      type: Boolean,
      default: false
    }
  },
  emits: ["focusout"],
  setup(props, { attrs, emit, slots }) {
    const route = vueRouter.useRoute();
    const site = useSiteData$1();
    const iconPrefix = useIconPrefix();
    const config = vue.toRef(props, "config");
    const hasHttpProtocol = vue.computed(() => isLinkHttp$1(config.value.link));
    const hasNonHttpProtocal = vue.computed(() => isLinkMailto(config.value.link) || isLinkTel(config.value.link));
    const linkTarget = vue.computed(() => hasNonHttpProtocal.value ? void 0 : config.value.target ? config.value.target : hasHttpProtocol.value ? "_blank" : void 0);
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const renderRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocal.value && !isBlankTarget.value);
    const anchorRel = vue.computed(() => hasNonHttpProtocal.value ? void 0 : config.value.rel ? config.value.rel : isBlankTarget.value ? "noopener noreferrer" : void 0);
    const linkAriaLabel = vue.computed(() => config.value.ariaLabel || config.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      if (props.exact)
        return false;
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length)
        return !localeKeys.some((key) => key === config.value.link);
      return config.value.link !== "/";
    });
    const isActive = vue.computed(() => !renderRouterLink.value ? false : config.value.activeMatch ? new RegExp(config.value.activeMatch).test(route.path) : !shouldBeActiveInSubpath.value ? route.path === config.value.link : route.path.startsWith(config.value.link));
    const renderIcon2 = (item) => item.icon ? vue.h("i", {
      class: `icon ${iconPrefix.value}${item.icon}`
    }) : null;
    return () => {
      var _a, _b;
      return renderRouterLink.value ? vue.h(vueRouter.RouterLink, __spreadProps(__spreadValues({
        to: config.value.link,
        ariaLabel: linkAriaLabel.value
      }, attrs), {
        class: ["nav-link", { active: isActive.value }, attrs.class],
        onFocusOut: () => emit("focusout")
      }), () => {
        var _a2, _b2, _c;
        return ((_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots)) || [
          ((_b2 = slots.before) === null || _b2 === void 0 ? void 0 : _b2.call(slots)) || renderIcon2(config.value),
          config.value.text,
          (_c = slots.after) === null || _c === void 0 ? void 0 : _c.call(slots)
        ];
      }) : vue.h("a", __spreadProps(__spreadValues({
        href: config.value.link,
        rel: anchorRel.value,
        target: linkTarget.value,
        ariaLabel: linkAriaLabel.value
      }, attrs), {
        class: ["nav-link", attrs.class],
        onFocusOut: () => emit("focusout")
      }), [
        ((_a = slots.before) === null || _a === void 0 ? void 0 : _a.call(slots)) || renderIcon2(config.value),
        config.value.text,
        vue.h(ExternalLinkIcon),
        (_b = slots.after) === null || _b === void 0 ? void 0 : _b.call(slots)
      ]);
    };
  }
});
const isActiveSidebarItem = (route, item, exact = false) => {
  if (W(route, item.link))
    return true;
  if (item.children && !exact)
    return item.children.some((child) => isActiveSidebarItem(route, child));
  return false;
};
const renderIcon = (icon) => icon ? vue.h("i", {
  class: ["icon", `${useIconPrefix().value}${icon}`]
}) : null;
const renderItem = (config, props) => config.link ? vue.h(AutoLink, __spreadProps(__spreadValues({}, props), {
  config
})) : vue.h("p", props, [renderIcon(config.icon), config.text]);
const renderChildren = (children) => {
  const route = vueRouter.useRoute();
  if (!children)
    return null;
  return vue.h("ul", { class: "sidebar-sub-headers" }, children.map((child) => {
    const active = isActiveSidebarItem(route, child, true);
    return vue.h("li", { class: "sidebar-sub-header" }, [
      renderItem(child, {
        class: ["sidebar-link", "heading", { active }]
      }),
      renderChildren(child.children)
    ]);
  }));
};
const sidebarData = { "/foo/": ["README.md", "one.md", "two.md"], "/bar/": ["README.md", { "text": "child", "collapsable": true, "prefix": "child/", "children": ["README.md", "five.md", "six.md"] }, "four.md", "three.md"] };
const resolvePrefix = (prefix2 = "", path = "") => path.startsWith("/") ? path : `${ensureEndingSlash(prefix2)}${path}`;
const headerToSidebarItem = (header, headerDepth) => {
  const page2 = usePageData$1();
  return {
    type: "heading",
    text: header.title,
    link: `${page2.value.path}#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, headerDepth)
  };
};
const headersToSidebarItemChildren = (headers, headerDepth) => headerDepth > 0 ? headers.map((header) => headerToSidebarItem(header, headerDepth - 1)) : [];
const resolveHeadingSidebarItems = (headerDepth) => {
  const page2 = usePageData$1();
  return headersToSidebarItemChildren(page2.value.headers, headerDepth);
};
const resolveArraySidebarItems = (sidebarConfig, headerDepth, prefix2 = "") => {
  const page2 = usePageData$1();
  const route = vueRouter.useRoute();
  if (!Array.isArray(sidebarConfig)) {
    console.warn(`Expecting array, but getting invalid sidebar config${prefix2 ? ` under ${prefix2}` : ""} with:`, sidebarConfig);
    return [];
  }
  const handleChildItem = (item, pathPrefix = prefix2) => {
    var _a;
    const childItem = isString(item) ? useAutoLink(resolvePrefix(pathPrefix, item)) : item.link ? __spreadValues(__spreadValues({}, item), !isLinkExternal(item.link) ? { link: useAutoLink(resolvePrefix(pathPrefix, item.link)).link } : {}) : item;
    if ("children" in childItem) {
      const prefix3 = resolvePrefix(pathPrefix, childItem.prefix);
      const children = childItem.children === "structure" ? sidebarData[prefix3] : childItem.children;
      if (!Array.isArray(children)) {
        console.warn(`Expecting array, but getting invalid sidebar config${prefix3 ? ` under ${prefix3}` : ""} with:`, children);
        return __spreadProps(__spreadValues({
          type: "group"
        }, childItem), {
          children: []
        });
      }
      return __spreadProps(__spreadValues({
        type: "group"
      }, childItem), {
        children: children.map((item2) => handleChildItem(item2, prefix3))
      });
    }
    return __spreadProps(__spreadValues({
      type: "page"
    }, childItem), {
      children: childItem.link === route.path ? headersToSidebarItemChildren(((_a = page2.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page2.value.headers[0].children : page2.value.headers, headerDepth) : []
    });
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, headerDepth) => {
  const route = vueRouter.useRoute();
  const keys = Object.keys(sidebarConfig).sort((x2, y2) => y2.length - x2.length);
  for (const base of keys) {
    if (decodeURI(route.path).startsWith(base)) {
      const matchedConfig = sidebarConfig[base];
      return matchedConfig ? resolveArraySidebarItems(matchedConfig === "structure" ? sidebarData[base] : matchedConfig, headerDepth, base) : [];
    }
  }
  console.warn(`${route.path} do not have valid sidebar config`);
  return [];
};
const resolveSidebarItems = () => {
  var _a, _b, _c, _d;
  const routeLocale = useRouteLocale();
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const sidebarConfig = frontmatter.value.home ? false : (_b = (_a = frontmatter.value.sidebar) !== null && _a !== void 0 ? _a : themeLocale.value.sidebar) !== null && _b !== void 0 ? _b : "structure";
  const headerDepth = (_d = (_c = frontmatter.value.headerDepth) !== null && _c !== void 0 ? _c : themeLocale.value.headerDepth) !== null && _d !== void 0 ? _d : 2;
  return sidebarConfig === false ? [] : sidebarConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : sidebarConfig === "structure" ? resolveArraySidebarItems(sidebarData[routeLocale.value], headerDepth, routeLocale.value) : isArray(sidebarConfig) ? resolveArraySidebarItems(sidebarConfig, headerDepth) : isPlainObject(sidebarConfig) ? resolveMultiSidebarItems(sidebarConfig, headerDepth) : [];
};
const sidebarItemsSymbol = Symbol.for("sidebarItems");
const setupSidebarItems = () => {
  const sidebarItems = vue.computed(() => resolveSidebarItems());
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
var clientAppSetup6 = defineClientAppSetup(() => {
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  l$3,
  h$2,
  clientAppSetup4,
  clientAppSetup5,
  clientAppSetup6
];
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "foo about", "type": "article", "readingTime": { "minutes": 0.01, "words": 2 }, "excerpt": "foo about", "date": "2022-03-21T05:05:45.000Z" }, ["/index.html", "/README.md"]],
  ["v-22a39d25", "/about.html", { "title": "about", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "about", "date": "2022-03-21T05:05:45.000Z" }, ["/about", "/about.md"]],
  ["v-6d34f632", "/contact.html", { "title": "contact", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "contact", "date": "2022-03-21T05:05:45.000Z" }, ["/contact", "/contact.md"]],
  ["v-7444d4f5", "/bar/", { "title": "bar readme", "type": "article", "readingTime": { "minutes": 0.01, "words": 2 }, "excerpt": "bar readme", "date": "2022-03-21T05:05:45.000Z" }, ["/bar/index.html", "/bar/README.md"]],
  ["v-76d72bc4", "/bar/four.html", { "title": "four", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "four", "date": "2022-03-21T05:05:45.000Z" }, ["/bar/four", "/bar/four.md"]],
  ["v-e12556a0", "/bar/three.html", { "title": "three", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "three", "date": "2022-03-21T05:05:45.000Z" }, ["/bar/three", "/bar/three.md"]],
  ["v-7446daa2", "/foo/", { "title": "README FOO", "type": "article", "readingTime": { "minutes": 0.01, "words": 2 }, "excerpt": "README FOO", "date": "2022-03-21T05:05:45.000Z" }, ["/foo/index.html", "/foo/README.md"]],
  ["v-5cbdbad5", "/foo/one.html", { "title": "one", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "one", "date": "2022-03-21T05:05:45.000Z" }, ["/foo/one", "/foo/one.md"]],
  ["v-514c26af", "/foo/two.html", { "title": "two", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "two", "date": "2022-03-21T05:05:45.000Z" }, ["/foo/two", "/foo/two.md"]],
  ["v-298737c8", "/bar/child/", { "title": "child", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "child", "date": "2022-03-21T05:05:45.000Z" }, ["/bar/child/index.html", "/bar/child/README.md"]],
  ["v-024e9ac2", "/bar/child/five.html", { "title": "five", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "five", "date": "2022-03-21T05:05:45.000Z" }, ["/bar/child/five", "/bar/child/five.md"]],
  ["v-67eb30ff", "/bar/child/six.html", { "title": "six", "type": "article", "readingTime": { "minutes": 0, "words": 1 }, "excerpt": "six", "date": "2022-03-21T05:05:45.000Z" }, ["/bar/child/six", "/bar/child/six.md"]],
  ["v-3706649a", "/404.html", { "title": "", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/404"]],
  ["v-5bc93818", "/category/", { "title": "\u5206\u7C7B", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/category/index.html"]],
  ["v-744d024e", "/tag/", { "title": "\u6807\u7B7E", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/index.html"]],
  ["v-e52c881c", "/article/", { "title": "\u6587\u7AE0", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/article/index.html"]],
  ["v-75ed4ea4", "/encrypted/", { "title": "\u52A0\u5BC6", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/encrypted/index.html"]],
  ["v-2897d318", "/slides/", { "title": "\u5E7B\u706F\u7247", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/slides/index.html"]],
  ["v-154dc4c4", "/star/", { "title": "\u6536\u85CF", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/star/index.html"]],
  ["v-01560935", "/timeline/", { "title": "\u65F6\u95F4\u8F74", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/timeline/index.html"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData$1.value[pageKey];
    const pageData2 = await (pageDataResolver === null || pageDataResolver === void 0 ? void 0 : pageDataResolver());
    return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty$1;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead$1(head);
  },
  resolvePageHeadTitle: (page2, siteLocale) => `${page2.title ? `${page2.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath$1(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
var category = "";
var tag = "";
var articleInfo = "";
const m$1 = () => vue.h(T$1, { name: "author" }, () => vue.h("path", { d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" }));
m$1.displayName = "AuthorIcon";
const g = () => vue.h(T$1, { name: "calendar" }, () => vue.h("path", { d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z" }));
g.displayName = "CalendarIcon";
const y$2 = () => vue.h(T$1, { name: "category" }, () => vue.h("path", { d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z" }));
y$2.displayName = "CategoryIcon";
const h$1 = () => vue.h(T$1, { name: "eye" }, () => vue.h("path", { d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z" }));
h$1.displayName = "EyeIcon";
const f$2 = () => vue.h(T$1, { name: "fire" }, () => vue.h("path", { d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z" }));
f$2.displayName = "FireIcon";
const v$1 = () => vue.h(T$1, { name: "tag" }, () => vue.h("path", { d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z" }));
v$1.displayName = "TagIcon";
const I = () => vue.h(T$1, { name: "timer" }, () => vue.h("path", { d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z" }));
I.displayName = "TimerIcon";
const b = () => vue.h(T$1, { name: "word" }, () => [vue.h("path", { d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z" }), vue.h("path", { d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z" })]);
b.displayName = "WordIcon";
const w = { "/": { "author": "\u4F5C\u8005\u{1F58A}", "date": "\u5199\u4F5C\u65E5\u671F\u{1F4C5}", "origin": "\u539F\u521B\u{1F4A1}", "views": "\u8BBF\u95EE\u91CF\u{1F522}", "category": "\u5206\u7C7B\u{1F308}", "tag": "\u6807\u7B7E\u{1F3F7}", "readingTime": "\u9605\u8BFB\u65F6\u95F4\u231B", "words": "\u5B57\u6570\u{1F520}" } }, T = { "/": { "word": "\u7EA6 $word \u5B57", "less1Minute": "\u5C0F\u4E8E 1 \u5206\u949F", "time": "\u5927\u7EA6 $time \u5206\u949F" } };
var M = vue.defineComponent({ name: "AuthorInfo", props: { author: { type: Array, required: true }, hint: { type: Boolean, default: true } }, setup(e) {
  const t2 = x(w);
  return () => e.author.length ? vue.h("span", __spreadValues({ class: "author-info", ariaLabel: t2.value.author }, e.hint ? { "data-balloon-pos": "down" } : {}), [vue.h(m$1), vue.h("span", e.author.map((e2) => e2.url ? vue.h("a", { class: "author-item", href: e2.url, target: "_blank", rel: "noopener noreferrer" }, e2.name) : vue.h("span", { class: "author-item" }, e2.name))), vue.h("span", { property: "author", content: e.author.map((a2) => a2.name).join(", ") })]) : null;
} }), A = vue.defineComponent({ name: "CategoryInfo", props: { category: { type: Array, required: true }, hint: { type: Boolean, default: true }, color: { type: Boolean, default: true } }, setup(e) {
  const t2 = vueRouter.useRouter(), o2 = vueRouter.useRoute(), n2 = x(w);
  return () => e.category.length ? vue.h("span", __spreadValues({ class: "category-info", ariaLabel: n2.value.category }, e.hint ? { "data-balloon-pos": "down" } : {}), [vue.h(y$2), vue.h("ul", { class: "categories-wrapper" }, [...e.category.map(({ name: n3, path: l2 }) => vue.h("li", { class: ["category", { [`category${U(n3, 9)}`]: e.color, clickable: l2 }], role: l2 ? "navigation" : "", onClick: () => ((a2 = "") => {
    a2 && o2.path !== a2 && t2.push(a2);
  })(l2) }, n3)), vue.h("meta", { property: "articleSection", content: e.category.map(({ name: a2 }) => a2).join(",") })])]) : null;
} }), z = vue.defineComponent({ name: "DateInfo", props: { date: { type: Object, default: null }, hint: { type: Boolean, default: true } }, setup(e) {
  const t2 = x(w);
  return () => {
    var o2, n2, l2;
    return e.date ? vue.h("span", __spreadValues({ class: "date-info", ariaLabel: t2.value.date }, e.hint !== false ? { "data-balloon-pos": "down" } : {}), [vue.h(g), vue.h("span", (o2 = e.date) === null || o2 === void 0 ? void 0 : o2.display), vue.h("meta", { property: "datePublished", content: ((l2 = (n2 = e.date) === null || n2 === void 0 ? void 0 : n2.value) === null || l2 === void 0 ? void 0 : l2.toISOString()) || "" })]) : null;
  };
} }), C = vue.defineComponent({ name: "PageViewInfo", props: { hint: { type: Boolean, default: true }, pageview: { type: [Boolean, String], default: false } }, setup(e) {
  const l2 = vueRouter.useRoute(), r2 = x(w), i2 = vue.ref(0), c2 = () => {
    const a2 = document.querySelector(".waline-visitor-count");
    if (a2) {
      const e2 = a2.textContent;
      e2 && !isNaN(Number(e2)) ? i2.value = Number(e2) : setTimeout(c2, 500);
    }
  };
  return vue.onMounted(() => {
    setTimeout(c2, 1500);
  }), vue.watch(() => l2.path, (a2, e2) => {
    a2 !== e2 && setTimeout(c2, 500);
  }), () => e.pageview ? vue.h("span", __spreadValues({ class: "visitor-info", ariaLabel: r2.value.views }, e.hint !== false ? { "data-balloon-pos": "down" } : {}), [vue.h(i2.value < 1e3 ? h$1 : f$2), vue.h("span", { class: "waline-visitor-count", id: typeof e.pageview == "string" ? e.pageview : withBase$1(l2.path) }, "...")]) : null;
} }), B = vue.defineComponent({ name: "ReadingTimeInfo", props: { readingTime: { type: Object, default: () => null }, hint: { type: Boolean, default: true } }, setup(e) {
  const t2 = x(w), o2 = x(T), n2 = vue.computed(() => {
    if (!e.readingTime)
      return null;
    const { minutes: a2 } = e.readingTime;
    return a2 < 1 ? { text: o2.value.less1Minute, time: "PT1M" } : { text: o2.value.time.replace("$time", Math.round(a2).toString()), time: `PT${Math.round(a2)}M` };
  });
  return () => n2.value ? vue.h("span", __spreadValues({ class: "reading-time-info", ariaLabel: t2.value.readingTime }, e.hint !== false ? { "data-balloon-pos": "down" } : {}), [vue.h(I), vue.h("span", n2.value.text), vue.h("meta", { property: "timeRequired", content: n2.value.time })]) : null;
} }), O = vue.defineComponent({ name: "TagInfo", props: { tag: { type: Array, default: () => [] }, hint: { type: Boolean, default: true }, color: { type: Boolean, default: true } }, setup(e) {
  const t2 = vueRouter.useRouter(), o2 = vueRouter.useRoute(), n2 = x(w);
  return () => e.tag.length ? vue.h("span", __spreadValues({ ariaLabel: n2.value.tag }, e.hint ? { "data-balloon-pos": "down" } : {}), [vue.h(v$1), vue.h("ul", { class: "tags-wrapper" }, e.tag.map(({ name: n3, path: l2 }) => vue.h("li", { class: ["tag", { [`tag${U(n3, 9)}`]: e.color, clickable: l2 }], role: l2 ? "navigation" : "", onClick: () => ((a2 = "") => {
    a2 && o2.path !== a2 && t2.push(a2);
  })(l2) }, n3))), vue.h("meta", { property: "keywords", content: e.tag.map(({ name: a2 }) => a2).join(",") })]) : null;
} }), H = vue.defineComponent({ name: "OriginalMark", props: { isOriginal: { type: Boolean, default: false } }, setup(e) {
  const t2 = x(w);
  return () => e.isOriginal ? vue.h("span", { class: "origin" }, t2.value.origin) : null;
} }), L = vue.defineComponent({ name: "ReadTimeInfo", props: { readingTime: { type: Object, default: () => null }, hint: { type: Boolean, default: true } }, setup(e) {
  const t2 = x(w), o2 = x(T), n2 = vue.computed(() => {
    var a2;
    return (a2 = e.readingTime) === null || a2 === void 0 ? void 0 : a2.words.toString();
  }), r2 = vue.computed(() => o2.value.word.replace("$word", n2.value || ""));
  return () => n2.value ? vue.h("span", __spreadValues({ class: "words-info", ariaLabel: t2.value.words }, e.hint !== false ? { "data-balloon-pos": "down" } : {}), [vue.h(b), vue.h("span", r2.value), vue.h("meta", { property: "wordCount", content: n2.value })]) : null;
} }), N = vue.defineComponent({ name: "ArticleInfo", components: { AuthorInfo: M, CategoryInfo: A, DateInfo: z, OriginalInfo: H, PageViewInfo: C, ReadingTimeInfo: B, TagInfo: O, WordInfo: L }, props: { config: { type: [Array, Boolean], default: () => ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"] }, hint: { type: Boolean, default: true }, author: { type: Array, default: () => [] }, category: { type: Array, default: () => [] }, tag: { type: Array, default: () => [] }, date: { type: Object, default: null }, isOriginal: { type: Boolean, default: false }, pageview: { type: [Boolean, String], default: false }, readingTime: { type: Object, default: () => null }, color: { type: Boolean, default: true } }, setup: (e) => () => e.config ? vue.h("div", { class: "article-info" }, e.config.map((t2) => vue.h(vue.resolveComponent(`${t2}Info`), e))) : null });
var badge = "";
var r$4 = vue.defineComponent({ name: "Badge", props: { type: { type: String, default: "tip" }, text: { type: String, default: "" }, vertical: { type: String, default: "top" }, color: { type: String, default: "" } }, setup(t2, { slots: r2 }) {
  const a2 = vue.computed(() => {
    const e = { class: ["badge", t2.type], style: { verticalAlign: t2.vertical } };
    return t2.color && (e.class.push("diy"), e.style.backgroundColor = t2.color, e["data-color"] = t2.color), e;
  });
  return () => {
    var e;
    return vue.h("span", a2.value, t2.text || ((e = r2.default) === null || e === void 0 ? void 0 : e.call(r2)));
  };
} });
var breadcrumb = "";
var f$1 = vue.defineComponent({ name: "BreadCrumb", props: { enable: { type: Boolean, default: true }, icon: { type: Boolean, default: true }, iconPrefix: { type: String, default: "" } }, setup(r2) {
  const f2 = vueRouter.useRouter(), h2 = vueRouter.useRoute(), v2 = useRouteLocale(), b2 = vue.ref([]), d2 = vue.computed(() => r2.enable && b2.value.length > 1), y2 = () => {
    const t2 = f2.getRoutes(), r3 = ((e, t3) => {
      const r4 = e.path.replace(t3, "/").split("/"), o2 = [];
      let a2 = removeEndingSlash$1(t3);
      return r4.forEach((e2, t4) => {
        t4 !== r4.length - 1 ? (a2 += `${e2}/`, o2.push(a2)) : e2 !== "" && (a2 += e2, o2.push(a2));
      }), o2;
    })(h2, v2.value).map((r4) => {
      const o2 = t2.find((e) => e.path === r4);
      if (o2) {
        const { meta: t3, path: r5 } = j(f2, o2.path);
        if (typeof t3.title == "string")
          return { title: t3.title, icon: t3.icon, path: r5 };
      }
      return null;
    }).filter((e) => e !== null);
    r3.length > 1 && (b2.value = r3);
  };
  let g2;
  return vue.onMounted(() => {
    y2(), g2 = vue.watch(() => h2.path, y2);
  }), vue.onUnmounted(() => {
    g2();
  }), () => vue.h("nav", { class: ["breadcrumb", { disable: !d2.value }] }, d2.value ? vue.h("ol", { vocab: "https://schema.org/", typeof: "BreadcrumbList" }, b2.value.map((e, t2) => vue.h("li", { class: { "is-active": b2.value.length - 1 === t2 }, property: "itemListElement", typeof: "ListItem" }, vue.h(vueRouter.RouterLink, { to: e.path, property: "item", typeof: "WebPage" }, () => [r2.icon && e.icon ? vue.h("i", { class: ["icon", `${r2.iconPrefix}${e.icon}`] }) : null, vue.h("span", { property: "name" }, e.title || "Unknown"), vue.h("meta", { property: "position", content: t2 + 1 })])))) : []);
} });
var fullScreen$1 = "";
const r$3 = () => vue.h(T$1, { name: "enter-fullscreen" }, () => vue.h("path", { d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z" }));
r$3.displayName = "EnterFullScreenIcon";
const n$3 = () => vue.h(T$1, { name: "cancel-fullscreen" }, () => vue.h("path", { d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z" }));
n$3.displayName = "CancelFullScreenIcon";
var a$3 = vue.defineComponent({ name: "FullScreen", props: { enable: { type: Boolean, default: true } }, setup(l2) {
  const { isSupported: s2, isFullscreen: a2, toggle: t2 } = core.useFullscreen();
  return () => s2 && l2.enable ? vue.h("button", { class: "full-screen", ariaPressed: a2.value, onClick: () => t2() }, a2.value ? vue.h(n$3) : vue.h(r$3)) : null;
} });
var pagination = "";
var u$4 = vue.defineComponent({ name: "Pagination", props: { total: { type: Number, default: 10 }, perPage: { type: Number, default: 10 }, currentPage: { type: Number, default: 1 } }, emits: ["updateCurrentPage"], setup(a2, { emit: u2 }) {
  const r2 = x({ "/": { "prev": "\u4E0A\u4E00\u9875", "next": "\u4E0B\u4E00\u9875", "navigate": "\u8DF3\u8F6C\u5230", "button": "\u524D\u5F80", "errorText": "\u8BF7\u8F93\u5165 1 \u5230 $page \u4E4B\u524D\u7684\u9875\u7801\uFF01" } }), i2 = vue.ref(""), v2 = vue.computed(() => Math.ceil(a2.total / a2.perPage)), o2 = vue.computed(() => Boolean(v2.value) && v2.value !== 1), s2 = vue.computed(() => !(v2.value < 7) && a2.currentPage > 4), c2 = vue.computed(() => !(v2.value < 7) && a2.currentPage < v2.value - 3), p2 = vue.computed(() => {
    const { currentPage: e } = a2;
    let l2 = 1, t2 = v2.value;
    const n2 = [];
    v2.value >= 7 && (e <= 4 && e < v2.value - 3 ? (l2 = 1, t2 = 5) : e > 4 && e >= v2.value - 3 ? (t2 = v2.value, l2 = v2.value - 4) : v2.value > 7 && (l2 = e - 2, t2 = e + 2));
    for (let e2 = l2; e2 <= t2; e2++)
      n2.push(e2);
    return n2;
  }), g2 = (e) => u2("updateCurrentPage", e), d2 = (e) => {
    const a3 = parseInt(e);
    a3 <= v2.value && a3 > 0 ? g2(a3) : alert(r2.value.errorText.replace(/\$page/g, v2.value.toString()));
  };
  return () => vue.h("div", { class: "pagination-wrapper" }, o2.value ? vue.h("div", { class: "pagination-list" }, [vue.h("div", { class: "page-number" }, [a2.currentPage > 1 ? vue.h("div", { class: "prev", role: "navigation", unselectable: "on", onClick: () => g2(a2.currentPage - 1) }, r2.value.prev) : null, ...s2.value ? [vue.h("div", { role: "navigation", onClick: () => g2(1) }, 1), vue.h("div", { class: "ellipsis" }, "...")] : [], ...p2.value.map((e) => vue.h("div", { key: e, class: { active: a2.currentPage === e }, role: "navigation", onClick: () => g2(e) }, e)), ...c2.value ? [vue.h("div", { class: "ellipsis" }, "..."), vue.h("div", { role: "navigation", onClick: () => g2(v2.value) }, v2.value)] : [], a2.currentPage < v2.value ? vue.h("div", { class: "next", role: "navigation", unselectable: "on", onClick: () => g2(a2.currentPage + 1) }, r2.value.next) : null]), vue.h("div", { class: "navigate-wrapper" }, [vue.h("label", { for: "navigation-text" }, `${r2.value.navigate}: `), vue.h("input", { id: "navigation-text", value: i2.value, onInput: ({ target: e }) => {
    i2.value = e.value;
  }, onKeydown: (e) => {
    e.key === "Enter" && (e.preventDefault(), d2(i2.value));
  } }), vue.h("button", { class: "navigate", role: "navigation", title: r2.value.button, onClick: () => d2(i2.value) }, r2.value.button)])]) : []);
} });
var toc = "";
const c$4 = ({ title: e, level: t2, slug: s2 }) => vue.h(vueRouter.RouterLink, { to: `#${s2}`, class: ["toc-link", { [`level${t2}`]: t2 }] }, () => e), i$5 = (e, s2) => {
  const r2 = vueRouter.useRoute();
  return e.length && s2 > 0 ? vue.h("ul", { class: "toc-list" }, e.map((e2) => [vue.h("li", { class: ["toc-item", { active: W(r2, `#${e2.slug}`) }] }, [c$4(e2)]), i$5(e2.children, s2 - 1)])) : null;
};
var p$5 = vue.defineComponent({ name: "TOC", props: { items: { type: Array, default: () => [] }, headerDepth: { type: Number, default: 2 } }, setup(t2) {
  const r2 = usePageData$1(), a2 = x({ "/": { "header": "\u6B64\u9875\u5185\u5BB9" } });
  return () => {
    const e = t2.items.length ? i$5(t2.items, t2.headerDepth) : r2.value.headers ? i$5(r2.value.headers, t2.headerDepth) : null;
    return vue.h("div", { class: "toc-place-holder" }, [vue.h("aside", { id: "toc-list" }, e ? [vue.h("div", { class: "toc-header" }, a2.value.header), vue.h("div", { class: "toc-wrapper" }, [e])] : [])]);
  };
} });
var p$4 = defineClientAppEnhance(({ app: o2 }) => {
  N.name && o2.component("ArticleInfo", N), r$4.name && o2.component("Badge", r$4), f$1.name && o2.component("BreadCrumb", f$1), a$3.name && o2.component("FullScreen", a$3), p$5.name && o2.component("TOC", p$5), u$4.name && o2.component("Pagination", u$4);
});
const locales = {};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", vue.h(ExternalLinkIcon, { locales }));
});
var clientAppEnhance3 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData$1();
  const routeLocale = app._context.provides[routeLocaleSymbol$1];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
var giscus = "";
const a$2 = { "type": "giscus", "repo": "vuepress-theme-hope/giscus-discussions", "repoId": "R_kgDOG_Pt2A", "category": "Announcements", "categoryId": "DIC_kwDOG_Pt2M4COD69" }, i$4 = a$2, p$3 = Boolean(i$4 && i$4.type === "giscus" && i$4.repo && i$4.repoId && i$4.category && i$4.categoryId), c$3 = a$2;
Boolean(c$3 && c$3.type === "twikoo" && c$3.envId);
const u$3 = a$2;
Boolean(u$3 && u$3.type === "waline" && u$3.serverURL);
const l = ["de", "gsw", "en", "es", "fr", "id", "it", "ja", "ko", "pl", "ro", "ru", "vi", "zh-CN", "zh-TW"];
var d$1 = vue.defineComponent({ name: "GiscusComment", props: { darkmode: { type: Boolean, default: false } }, setup(t2) {
  const a2 = usePageFrontmatter(), c2 = vue.computed(() => {
    const e = usePageLang$1().value;
    if (l.includes(e))
      return e;
    const t3 = e.split("-")[0];
    return l.includes(t3) ? t3 : "en";
  }), u2 = vue.computed(() => {
    if (!p$3)
      return false;
    const e = i$4.comment !== false, o2 = a2.value.comment;
    return Boolean(o2) || e !== false && o2 !== false;
  }), d2 = vue.computed(() => ({ repo: i$4.repo, repoId: i$4.repoId, category: i$4.category, categoryId: i$4.categoryId, lang: c2.value, theme: t2.darkmode ? "dark" : "light", mapping: i$4.mapping || "pathname", inputPosition: i$4.inputPosition || "top", reactionsEnabled: i$4.reactionsEnabled !== false ? "1" : "0", emitMetadata: "0" }));
  return vue.onMounted(() => {
    Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("giscus"));
    });
  }), () => vue.h("div", { class: ["giscus-wrapper", { "input-top": i$4.inputPosition !== "bottom" }], style: { display: u2.value ? "block" : "none" } }, vue.h("giscus-widget", d2.value));
} });
var r$2 = vue.defineComponent({ setup: () => () => null });
const p$2 = { "type": "giscus", "repo": "vuepress-theme-hope/giscus-discussions", "repoId": "R_kgDOG_Pt2A", "category": "Announcements", "categoryId": "DIC_kwDOG_Pt2M4COD69" }, s$2 = p$2;
Boolean(s$2 && s$2.type === "giscus" && s$2.repo && s$2.repoId && s$2.category && s$2.categoryId);
const i$3 = p$2;
Boolean(i$3 && i$3.type === "twikoo" && i$3.envId);
const c$2 = p$2;
Boolean(c$2 && c$2.type === "waline" && c$2.serverURL);
var u$2 = vue.defineComponent({ name: "CommentService", props: { darkmode: { type: Boolean, default: false } }, setup(o2) {
  const t2 = usePageFrontmatter(), s2 = vue.computed(() => t2.value.comment || p$2.comment !== false && t2.value.comment !== false);
  return () => p$2.type === "waline" ? vue.h(r$2, { style: { display: s2.value ? "block" : "none" } }) : p$2.type === "giscus" ? vue.h(d$1, { darkmode: o2.darkmode, style: { display: s2.value ? "block" : "none" } }) : p$2.type === "twikoo" ? vue.h(r$2, { style: { display: s2.value ? "block" : "none" } }) : null;
} }), y$1 = defineClientAppEnhance(({ app: e }) => {
  e.component("CommentService", u$2);
});
var codeGroup = "";
var t = vue.defineComponent({ name: "CodeGroup", setup(e, { slots: t2 }) {
  const o2 = vue.ref(-1), r2 = vue.ref([]);
  const v2 = (e2, a2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), o2.value = a2) : e2.key === "ArrowRight" ? (e2.preventDefault(), ((e3 = o2.value) => {
      o2.value = e3 < r2.value.length - 1 ? e3 + 1 : 0, r2.value[o2.value].focus();
    })(a2)) : e2.key === "ArrowLeft" && (e2.preventDefault(), ((e3 = o2.value) => {
      o2.value = e3 > 0 ? e3 - 1 : r2.value.length - 1, r2.value[o2.value].focus();
    })(a2));
  };
  return () => {
    var e2;
    const a2 = (((e2 = t2.default) === null || e2 === void 0 ? void 0 : e2.call(t2)) || []).filter((e3) => e3.type.name === "CodeGroupItem").map((e3) => (e3.props === null && (e3.props = {}), e3));
    return a2.length === 0 ? null : (o2.value < 0 || o2.value > a2.length - 1 ? (o2.value = a2.findIndex((e3) => "active" in e3.props), o2.value === -1 && (o2.value = 0)) : a2.forEach((e3, a3) => {
      e3.props.active = a3 === o2.value;
    }), vue.h("div", { class: "code-group" }, [vue.h("div", { class: "code-group-nav" }, a2.map((e3, a3) => {
      const l2 = a3 === o2.value;
      return vue.h("button", { ref: (e4) => {
        e4 && (r2.value[a3] = e4);
      }, class: ["code-group-nav-tab", { active: l2 }], ariaPressed: l2, ariaExpanded: l2, onClick: () => {
        o2.value = a3;
      }, onKeydown: (e4) => v2(e4, a3) }, e3.props.title);
    })), a2]));
  };
} });
var a$1 = vue.defineComponent({ name: "CodeGroupItem", props: { title: { type: String, required: true }, active: { type: Boolean, default: false } }, setup: (e, { slots: a2 }) => () => {
  var r2;
  return vue.h("div", { class: ["code-group-item", { active: e.active }], ariaSelected: e.active }, (r2 = a2.default) === null || r2 === void 0 ? void 0 : r2.call(a2));
} });
var codeDemo = "";
const n$2 = { "useBabel": false, "jsLib": [], "cssLib": [], "codepenLayout": "left", "codepenEditors": "101", "babel": "https://unpkg.com/@babel/standalone/babel.min.js", "vue": "https://unpkg.com/vue/dist/vue.global.prod.js", "react": "https://unpkg.com/react/umd/react.production.min.js", "reactDOM": "https://unpkg.com/react-dom/umd/react-dom.production.min.js" }, i$2 = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, r$1 = (e) => __spreadProps(__spreadValues(__spreadValues({}, n$2), e), { jsLib: Array.from(/* @__PURE__ */ new Set([...n$2.jsLib || [], ...e.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...n$2.cssLib || [], ...e.cssLib || []])) }), o$1 = (e, t2) => {
  if (e[t2] !== void 0)
    return e[t2];
  const s2 = new Promise((e2) => {
    var s3;
    const a2 = document.createElement("script");
    a2.src = t2, (s3 = document.querySelector("body")) === null || s3 === void 0 || s3.appendChild(a2), a2.onload = () => {
      e2();
    };
  });
  return e[t2] = s2, s2;
}, c$1 = (e, t2) => {
  if (t2.css && Array.from(e.childNodes).every((e2) => e2.nodeName !== "STYLE")) {
    const s2 = ((e2, t3, s3) => {
      const a2 = document.createElement(e2);
      return t3 && Object.keys(t3).forEach((e3) => {
        if (e3.indexOf("data"))
          a2[e3] = t3[e3];
        else {
          const s4 = e3.replace("data", "");
          a2.dataset[s4] = t3[e3];
        }
      }), s3 && s3.forEach((e3) => {
        a2.appendChild(e3);
      }), a2;
    })("style", { innerHTML: t2.css });
    e.appendChild(s2);
  }
}, p$1 = (e) => e.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), d = (e) => `<div id="app">
${p$1(e)}
</div>`, u$1 = (e) => `${e.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, m = (e) => e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), v = (e) => `(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?module.exports.default:module.exports;})({})`, h = {};
var y = vue.defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, setup(e, { slots: n2 }) {
  const y2 = vue.ref(false), f2 = vue.ref(null), g2 = vue.ref(null), b2 = vue.ref("0px"), w2 = vue.ref(false), L2 = vue.computed(() => JSON.parse(decodeURIComponent(e.config || "{}"))), j2 = vue.computed(() => ((e2) => {
    const t2 = Object.keys(e2), s2 = { html: [], js: [], css: [], isLegal: false };
    return ["html", "js", "css"].forEach((a2) => {
      const l2 = t2.filter((e3) => i$2[a2].types.includes(e3));
      if (l2.length) {
        const t3 = l2[0];
        s2[a2] = [e2[t3].replace(/^\n|\n$/g, ""), i$2[a2].map[t3] || t3];
      }
    }), s2.isLegal = !(s2.html.length && s2.html[1] !== "none" || s2.js.length && s2.js[1] !== "none" || s2.css.length && s2.css[1] !== "none"), s2;
  })(JSON.parse(decodeURIComponent(e.code || "{}")))), S2 = vue.computed(() => e.type === "react" ? ((e2, t2) => {
    const s2 = r$1(t2);
    return __spreadProps(__spreadValues({}, s2), { html: d(""), js: u$1(e2.js[0] || ""), css: e2.css[0] || (e2.js[0] ? e2.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e2.isLegal, jsLib: [s2.react, s2.reactDOM, ...s2.jsLib], jsx: true, getScript: () => {
      var t3, s3;
      const a2 = ((s3 = (t3 = window.Babel) === null || t3 === void 0 ? void 0 : t3.transform(e2.js[0] || "", { presets: ["es2015", "react"] })) === null || s3 === void 0 ? void 0 : s3.code) || "";
      return `window.ReactDOM.render(window.React.createElement(${v(a2)}), document.firstElementChild)`;
    } });
  })(j2.value, L2.value) : e.type === "vue" ? ((e2, t2) => {
    const s2 = r$1(t2), a2 = e2.html[0] || "", l2 = /<template>([\s\S]+)<\/template>/u.exec(a2), n3 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(a2), i2 = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(a2), o2 = l2 ? l2[1].replace(/^\n|\n$/g, "") : "", [c2 = "", p2 = ""] = n3 ? [n3[4].replace(/^\n|\n$/g, ""), n3[3]] : [], [u2 = "", h2 = ""] = i2 ? [i2[4].replace(/^\n|\n$/g, ""), i2[3]] : [], y3 = p2 === "" && (h2 === "" || h2 === "css");
    return __spreadProps(__spreadValues({}, s2), { html: d(o2), js: m(c2), css: u2, isLegal: y3, jsLib: [s2.vue, ...s2.jsLib], getScript: () => {
      var e3, s3;
      const a3 = t2.useBabel ? ((s3 = (e3 = window.Babel) === null || e3 === void 0 ? void 0 : e3.transform(c2, { presets: ["es2015"] })) === null || s3 === void 0 ? void 0 : s3.code) || "" : c2.replace(/export\s+default/u, "return");
      return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${v(a3)};appOptions.template=\`${o2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
    } });
  })(j2.value, L2.value) : ((e2, t2) => {
    const s2 = r$1(t2), a2 = e2.js[0] || "";
    return __spreadProps(__spreadValues({}, s2), { html: p$1(e2.html[0] || ""), js: a2, css: e2.css[0] || "", isLegal: e2.isLegal, getScript: () => {
      var e3;
      return s2.useBabel ? ((e3 = window.Babel.transform(a2, { presets: ["es2015"] })) === null || e3 === void 0 ? void 0 : e3.code) || "" : a2;
    } });
  })(j2.value, L2.value)), x2 = vue.computed(() => S2.value.isLegal), C2 = (t2 = false) => {
    const s2 = f2.value.attachShadow({ mode: "open" }), a2 = document.createElement("div");
    a2.classList.add("code-demo-app"), s2.appendChild(a2), x2.value ? (t2 && (a2.innerHTML = S2.value.html), c$1(s2, S2.value), ((e2, t3, s3) => {
      const a3 = s3.getScript();
      if (a3 && Array.from(t3.childNodes).every((e3) => e3.nodeName !== "SCRIPT")) {
        const s4 = document.createElement("script");
        s4.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .demo-wrapper').shadowRoot;
${a3}}`)), t3.appendChild(s4);
      }
    })(e.id, s2, S2.value), b2.value = "0") : b2.value = "auto", w2.value = true;
  }, M2 = () => {
    switch (e.type) {
      case "react":
        return ((e2) => Promise.all([o$1(h, e2.babel), o$1(h, e2.react), o$1(h, e2.reactDOM)]))(S2.value).then(() => C2());
      case "vue":
        return ((e2) => {
          const t2 = [o$1(h, e2.vue)];
          return e2.useBabel && t2.push(o$1(h, e2.babel)), Promise.all(t2);
        })(S2.value).then(() => C2());
      default:
        return ((e2) => e2.useBabel ? o$1(h, e2.babel) : Promise.resolve())(S2.value).then(() => C2(true));
    }
  };
  return vue.onMounted(() => {
    setTimeout(() => {
      M2();
    }, 500);
  }), () => {
    var t2;
    return vue.h("div", { class: "code-demo-wrapper", id: e.id }, [w2.value ? null : vue.h("div", { class: ["loading"], innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/></circle></svg>' }), vue.h("div", { ref: f2, class: "demo-wrapper", style: { display: x2.value && w2.value ? "block" : "none" } }), vue.h("div", { class: "code-wrapper", style: { height: b2.value } }, vue.h("div", { ref: g2, class: "code-container" }, (t2 = n2.default) === null || t2 === void 0 ? void 0 : t2.call(n2))), vue.h("div", { class: "code-demo-footer" }, [S2.value.isLegal ? vue.h("button", { class: ["toggle-button", { down: !y2.value }], onClick: () => {
      b2.value = y2.value ? "0" : `${g2.value.clientHeight + 13.8}px`, y2.value = !y2.value;
    } }) : null, e.title ? vue.h("span", { class: "title" }, decodeURIComponent(e.title)) : null, S2.value.isLegal && L2.value.jsfiddle !== false ? vue.h("form", { className: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [vue.h("input", { type: "hidden", name: "html", value: S2.value.html }), vue.h("input", { type: "hidden", name: "js", value: S2.value.js }), vue.h("input", { type: "hidden", name: "css", value: S2.value.css }), vue.h("input", { type: "hidden", name: "wrap", value: "1" }), vue.h("input", { type: "hidden", name: "panel_js", value: "3" }), vue.h("input", { type: "hidden", name: "resources", value: [...S2.value.cssLib, ...S2.value.jsLib].join(",") }), vue.h("button", { type: "submit", className: "button", innerHTML: '<svg class="icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="228.516" height="200"><defs><style/></defs><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>', ariaLabel: "JSFiddle", "data-tip": "JSFiddle" })]) : null, S2.value.isLegal && L2.value.codepen === false ? null : vue.h("form", { className: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [vue.h("input", { type: "hidden", name: "data", value: JSON.stringify({ html: S2.value.html, js: S2.value.js, css: S2.value.css, js_external: S2.value.jsLib.join(";"), css_external: S2.value.cssLib.join(";"), layout: S2.value.codepenLayout, html_pre_processor: j2.value ? j2.value.html[1] : "none", js_pre_processor: j2.value ? j2.value.js[1] : S2.value.jsx ? "babel" : "none", css_pre_processor: j2.value ? j2.value.css[1] : "none", editors: S2.value.codepenEditors }) }), vue.h("button", { type: "submit", innerHTML: '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><defs><style/></defs><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', className: "button", ariaLabel: "Codepen", "data-tip": "Codepen" })])])]);
  };
} });
var chart = "";
const loadingSvgString = '<svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/></circle></svg>', parseChartConfig = (str) => JSON.parse(str, (_key, value) => {
  if (typeof value != "string" || value.length < 8)
    return value;
  const prefix = value.substring(0, 8);
  return prefix === "function" ? eval(`(${value})`) : prefix === "_PxEgEr_" || prefix === "_NuFrRa_" ? eval(value.slice(8)) : value;
});
var ChartJS = vue.defineComponent({ name: "ChartJS", props: { title: { type: String, default: "" }, config: { type: String, required: true }, id: { type: String, required: true } }, setup(e) {
  const t2 = vue.ref(null), i2 = vue.ref(null), r2 = vue.ref(true);
  return vue.onMounted(() => {
    Promise.all([Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("chart.js/auto"));
    }), new Promise((e2) => setTimeout(e2, 500))]).then(([{ default: t3 }]) => {
      var n2;
      t3.defaults.maintainAspectRatio = false;
      const a2 = parseChartConfig(decodeURIComponent(e.config));
      new t3((n2 = i2.value) === null || n2 === void 0 ? void 0 : n2.getContext("2d"), a2), r2.value = false;
    });
  }), () => [e.title ? vue.h("div", { class: "chart-title" }, e.title) : null, r2.value ? vue.h("div", { class: ["chart-loading-wrapper"], innerHTML: loadingSvgString }) : null, vue.h("div", { ref: t2, class: "chart-wrapper", id: e.id, style: { display: r2.value ? "none" : "block" } }, vue.h("canvas", { ref: i2, height: 400 }))];
} });
var flowchart = "";
var s$1 = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, c = __spreadProps(__spreadValues({}, s$1), { symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }), a = __spreadProps(__spreadValues({}, s$1), { "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" } } }), f = { ant: c, vue: __spreadProps(__spreadValues({}, s$1), { symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } }), pie: a }, p = vue.defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(e) {
  let s2, c2;
  const a2 = vue.ref(), p2 = vue.ref(true), d2 = vue.ref(1), u2 = vue.computed(() => {
    const l2 = f[e.preset];
    return l2 || (console.warn(`[md-enhance:flowchart] Unknown preset: ${e.preset}`), f.vue);
  }), m2 = (e2) => e2 < 419 ? 0.8 : e2 > 1280 ? 1 : 0.9;
  return vue.onMounted(() => {
    Promise.all([Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("flowchart.js"));
    }), new Promise((e2) => setTimeout(e2, 500))]).then(([l2]) => {
      const { parse: t2 } = l2;
      s2 = t2(decodeURIComponent(e.code)), d2.value = m2(window.innerWidth), p2.value = false, s2.drawSVG(e.id, __spreadProps(__spreadValues({}, u2.value), { scale: d2.value })), c2 = a__default["default"](() => {
        const l3 = m2(window.innerWidth);
        d2.value !== l3 && (d2.value = l3, s2.drawSVG(e.id, __spreadProps(__spreadValues({}, u2.value), { scale: l3 })));
      }, 100), window.addEventListener("resize", c2);
    });
  }), vue.onBeforeUnmount(() => {
    window.removeEventListener("resize", c2);
  }), () => [p2.value ? vue.h("div", { class: ["flowchart-loading-wrapper"], innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/></circle></svg>' }) : null, vue.h("div", { ref: a2, class: ["flowchart-wrapper", e.preset], id: e.id, style: { display: p2.value ? "none" : "block" } })];
} });
var mermaid = "";
const n$1 = () => vue.h(T$1, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((r2) => vue.h("circle", { cx: 50, cy: 50, r: 0, fill: "none", stroke: "currentColor", strokeWidth: "2" }, [vue.h("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;40", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: r2 }), vue.h("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: r2 })])));
var s = vue.defineComponent({ name: "MermaidChart", props: { id: { type: String, required: true } }, setup(r2) {
  const d2 = vue.ref(""), s2 = vue.ref(), f2 = vue.ref(false);
  let c2;
  return vue.onMounted(() => {
    var e;
    const t2 = document.querySelector("html"), o2 = decodeURIComponent(((e = s2.value) === null || e === void 0 ? void 0 : e.dataset.code) || ""), l2 = () => t2.classList.contains("dark") || t2.getAttribute("data-theme") === "dark";
    f2.value = l2(), Promise.all([Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("mermaid"));
    }), new Promise((e2) => setTimeout(e2, 500))]).then(([e2]) => {
      const { initialize: n2, render: s3 } = e2.default, u2 = () => {
        const e3 = document.createElement("div");
        e3.style.position = "relative", e3.style.top = "-9999px";
        const t3 = (r3) => {
          d2.value = r3, document.body.removeChild(e3);
        };
        var a2;
        n2(__spreadProps(__spreadValues({ theme: "base", themeVariables: (a2 = f2.value, { dark: a2, background: a2 ? "#1e1e1e" : "#fff", primaryColor: a2 ? "#389d70" : "#4abf8a", primaryBorderColor: a2 ? "#389d70" : "#4abf8a", primaryTextColor: "#fff", secondaryColor: "#f39c12", secondaryBorderColor: a2 ? "#fff" : "#000", secondaryTextColor: a2 ? "#ddd" : "#333", tertiaryColor: a2 ? "#22182d" : "#eeeaf3", tertiaryBorderColor: a2 ? "#fff" : "#000", tertiaryTextColor: a2 ? "#ddd" : "#333", noteBkgColor: a2 ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: a2 ? "#f6d365" : "#333", lineColor: a2 ? "#d3d3d3" : "#333", textColor: a2 ? "#fff" : "#242424", mainBkg: a2 ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: a2 ? "#389d70" : "#4abf8a", nodeTextColor: a2 ? "#fff" : "#242424", signalTextColor: a2 ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", fillType0: a2 ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" }), flowchart: { useMaxWidth: false }, sequence: { useMaxWidth: false }, journey: { useMaxWidth: false }, gantt: { useMaxWidth: false }, er: { useMaxWidth: false }, pie: { useMaxWidth: false } }, {}), { startOnLoad: false })), d2.value = "", document.body.appendChild(e3), vue.nextTick(() => {
          s3(r2.id, o2, t3, e3);
        });
      };
      u2(), c2 = new MutationObserver(() => {
        console.log("update"), f2.value = l2();
      }), c2.observe(t2, { attributeFilter: ["class", "data-theme"], attributes: true }), vue.watch(f2, u2);
    });
  }), vue.onBeforeUnmount(() => {
    c2.disconnect();
  }), () => vue.h("div", { ref: s2, class: ["md-enhance-mermaid", { loading: !d2.value }] }, d2.value ? vue.h("div", { class: "content", innerHTML: d2.value }) : vue.h(n$1));
} });
var index$3 = "";
var leagueGothic = "";
var sourceSansPro = "";
const n = () => vue.h(T$1, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((s2) => vue.h("circle", { cx: 50, cy: 50, r: 0, fill: "none", stroke: "currentColor", strokeWidth: "2" }, [vue.h("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;40", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: s2 }), vue.h("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: s2 })])));
var o = vue.defineComponent({ name: "PresentationViewer", props: { id: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(s2) {
  const r2 = usePageFrontmatter(), o2 = vue.ref(""), u2 = vue.ref(false), p2 = vue.ref(), d2 = vue.ref();
  let m2;
  return vue.onMounted(() => {
    var e;
    if (d2.value) {
      o2.value = decodeURIComponent(((e = p2.value) === null || e === void 0 ? void 0 : e.dataset.code) || ""), d2.value.setAttribute("id", s2.id), d2.value.setAttribute("data-theme", s2.theme);
      const t2 = [new Promise((e2) => setTimeout(e2, 500)), Promise.resolve().then(function() {
        return /* @__PURE__ */ _interopNamespace(require("reveal.js/dist/reveal.esm.js"));
      })];
      t2.push(Promise.resolve().then(function() {
        return /* @__PURE__ */ _interopNamespace(require("reveal.js/plugin/markdown/markdown.esm.js"));
      })), t2.push(Promise.resolve().then(function() {
        return /* @__PURE__ */ _interopNamespace(require("reveal.js/plugin/highlight/highlight.esm.js"));
      })), t2.push(Promise.resolve().then(function() {
        return /* @__PURE__ */ _interopNamespace(require("reveal.js/plugin/math/math.esm.js"));
      })), t2.push(Promise.resolve().then(function() {
        return /* @__PURE__ */ _interopNamespace(require("reveal.js/plugin/search/search.esm.js"));
      })), t2.push(Promise.resolve().then(function() {
        return /* @__PURE__ */ _interopNamespace(require("reveal.js/plugin/notes/notes.esm.js"));
      })), t2.push(Promise.resolve().then(function() {
        return /* @__PURE__ */ _interopNamespace(require("reveal.js/plugin/zoom/zoom.esm.js"));
      })), Promise.all(t2).then(([, e2, ...s3]) => {
        m2 = new e2.default(d2.value, { plugins: s3.map((e3) => e3.default) }), m2.initialize(__spreadProps(__spreadValues(__spreadValues({ backgroundTransition: "slide", hash: r2.value.layout === "Slide", mouseWheel: r2.value.layout === "Slide", transition: "slide", slideNumber: true }, {}), r2.value.reveal || {}), { embedded: r2.value.layout !== "Slide" })).then(() => {
          u2.value = false, m2.configure({ backgroundTransition: "slide" });
        });
      });
    }
  }), vue.onBeforeUnmount(() => {
    m2 == null || m2.destroy();
  }), () => vue.h("div", { ref: p2, class: { "md-enhance-presentation": true, loading: u2.value } }, [u2.value ? vue.h(n) : null, vue.h("div", { ref: d2, class: ["reveal", "reveal-viewport"] }, vue.h("div", { class: "slides", style: { display: u2.value ? "none" : "block" }, innerHTML: `<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${o2.value}<\/script></section>` }))]);
} });
var i$1 = defineClientAppEnhance(({ app: o$12 }) => {
  Promise.resolve().then(function() {
    return align$1;
  }), Promise.resolve().then(function() {
    return index$1;
  }), Promise.resolve().then(function() {
    return footnote$1;
  }), Promise.resolve().then(function() {
    return image$1;
  }), ChartJS.name && o$12.component("ChartJS", ChartJS), y.name && o$12.component("CodeDemo", y), t.name && (o$12.component("CodeGroup", t), o$12.component("CodeGroupItem", a$1)), p.name && o$12.component("FlowChart", p), s.name && o$12.component("MermaidChart", s), o.name && o$12.component("PresentationViewer", o), Promise.resolve().then(function() {
    return tasklist$1;
  }), Promise.resolve().then(function() {
    return tex$1;
  });
});
var footer = "";
var PageFooter = vue.defineComponent({
  name: "PageFooter",
  setup() {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const author = usePageAuthor();
    const enable = vue.computed(() => {
      const { copyright: copyright2, footer: footer2 } = frontmatter.value;
      return footer2 !== false && Boolean(copyright2 || footer2 || themeLocale.value.displayFooter);
    });
    const content = vue.computed(() => {
      const { footer: footer2 } = frontmatter.value;
      return footer2 === false ? false : typeof footer2 === "string" ? footer2 : themeLocale.value.footer || "";
    });
    const copyright = vue.computed(() => frontmatter.value.copyright === false ? false : frontmatter.value.copyright || (themeLocale.value.copyright === false ? false : themeLocale.value.copyright || (author.value.length ? `Copyright \xA9 ${new Date().getFullYear()} ${author.value[0].name}` : "")));
    return () => enable.value ? vue.h("footer", { class: "footer-wrapper" }, [
      vue.h("div", { class: "footer", innerHTML: content.value }),
      copyright.value ? vue.h("div", {
        class: "copyright",
        innerHTML: copyright.value
      }) : null
    ]) : null;
  }
});
var passwordModal = "";
var PasswordModal = vue.defineComponent({
  name: "PasswordModal",
  props: {
    full: { type: Boolean, default: false }
  },
  emits: ["verify"],
  setup(props, { emit }) {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const password = vue.ref("");
    const hasTried = vue.ref(false);
    const locale = vue.computed(() => themeLocale.value.encryptLocales);
    let hintHandler = null;
    const verify = () => {
      if (hintHandler)
        clearTimeout(hintHandler);
      hasTried.value = false;
      emit("verify", password.value);
      void vue.nextTick().then(() => {
        hasTried.value = true;
        hintHandler = setTimeout(() => {
          hasTried.value = false;
        }, 1e3);
      });
    };
    return () => vue.h("div", {
      class: [
        "password-modal",
        { expand: props.full || frontmatter.value.home }
      ]
    }, [
      vue.h("div", { class: ["hint", { tried: hasTried.value }] }, hasTried.value ? locale.value.errorHint : locale.value.title),
      vue.h("div", { class: "input" }, [
        vue.h("input", {
          type: "password",
          value: password.value,
          onInput: ({ target }) => {
            password.value = target.value;
          },
          onKeydown: ({ key }) => {
            if (key === "Enter")
              verify();
          }
        }),
        vue.h("button", { onClick: () => verify() }, "OK")
      ])
    ]);
  }
});
const useEncryptData = () => {
  const themeData2 = useThemeData();
  return vue.computed(() => themeData2.value.encrypt || {});
};
const STORAGE_KEY$1 = "vuepress-theme-hope-global-token";
const useGlobalEcrypt = () => {
  const options = useEncryptData();
  const globalToken = vue.ref("");
  const isGlobalEncrypted = vue.computed(() => {
    if (options.value.global && options.value.admin) {
      return !options.value.admin || [].some((hash) => bcryptjs.compareSync(globalToken.value, hash));
    }
    return false;
  });
  const validateGlobalToken = (inputToken, keep = false) => {
    if ((options.value.admin || []).some((hash) => bcryptjs.compareSync(inputToken, hash))) {
      globalToken.value = inputToken;
      (keep ? localStorage : sessionStorage).setItem(STORAGE_KEY$1, inputToken);
    }
  };
  vue.onMounted(() => {
    const token = sessionStorage.getItem(STORAGE_KEY$1) || localStorage.getItem(STORAGE_KEY$1);
    if (token)
      validateGlobalToken(token);
  });
  return {
    isGlobalEncrypted,
    validateGlobalToken
  };
};
const checkToken = (token = "", hash) => Boolean(token) && bcryptjs.compareSync(token, hash);
const STORAGE_KEY = "vuepress-theme-hope-path-token";
const localConfig = vue.ref({});
const sessionConfig = vue.ref({});
const usePathEncrypt = () => {
  const route = vueRouter.useRoute();
  const options = useEncryptData();
  const getPathMatchedKeys = (path) => typeof options.value.config === "object" ? Object.keys(options.value.config).filter((key) => path.startsWith(key)).sort((a2, b2) => b2.length - a2.length) : [];
  const getPathEncryptStatus = (path) => {
    const matchedKeys = getPathMatchedKeys(path);
    if (matchedKeys.length !== 0) {
      const { config = {} } = options.value;
      return !matchedKeys.some((key) => config[key].some((token) => checkToken(localConfig.value[key], token) || checkToken(sessionConfig.value[key], token)));
    }
    return false;
  };
  const isEncrypted = vue.computed(() => getPathEncryptStatus(route.path));
  const validateToken = (inputToken, keep = false) => {
    const { config = {} } = options.value;
    const matchedKeys = getPathMatchedKeys(route.path);
    for (const hitKey of matchedKeys) {
      if (config[hitKey].filter((token) => checkToken(inputToken, token))) {
        (keep ? localConfig : sessionConfig).value[hitKey] = inputToken;
        if (keep)
          localStorage.setItem(STORAGE_KEY, JSON.stringify(localConfig.value));
        else
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(sessionConfig.value));
        break;
      }
    }
  };
  vue.onMounted(() => {
    try {
      localConfig.value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (err) {
    }
    try {
      sessionConfig.value = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
    } catch (err) {
    }
  });
  return {
    isEncrypted,
    getPathEncryptStatus,
    validateToken
  };
};
var common = "";
var CommonWrapper = vue.defineComponent({
  name: "CommonWrapper",
  props: {
    navbar: {
      type: Boolean,
      default: true
    },
    sidebar: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const router = vueRouter.useRouter();
    const page2 = usePageData$1();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { isGlobalEncrypted, validateGlobalToken } = useGlobalEcrypt();
    const isMobile = useMobile();
    const hideNavbar = vue.ref(false);
    const enableNavbar = vue.computed(() => {
      if (props.navbar === false)
        return false;
      if (frontmatter.value.navbar === false || themeLocale.value.navbar == false)
        return false;
      return Boolean(page2.value.title || themeLocale.value.logo || themeLocale.value.repo || themeLocale.value.navbar);
    });
    const sidebarItems = useSidebarItems();
    const enableSidebar = vue.computed(() => {
      if (props.sidebar === false)
        return false;
      return frontmatter.value.sidebar !== false && sidebarItems.value.length !== 0 && !frontmatter.value.home;
    });
    const isMobileSidebarOpen = vue.ref(false);
    const isDesktopSidebarOpen = vue.ref(true);
    const toggleMobileSidebar = (value2) => {
      isMobileSidebarOpen.value = typeof value2 === "boolean" ? value2 : !isMobileSidebarOpen.value;
    };
    const toggleDesktopSidebar = (value2) => {
      isDesktopSidebarOpen.value = typeof value2 === "boolean" ? value2 : !isDesktopSidebarOpen.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80)
          toggleMobileSidebar(true);
        else
          toggleMobileSidebar(false);
      }
    };
    const enableToc = vue.computed(() => frontmatter.value.toc || themeLocale.value.toc !== false && frontmatter.value.toc !== false);
    const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let unregisterRouterHook;
    let lastDistance = 0;
    const scrollHandler = throttle__default["default"](() => {
      const distance = getScrollTop();
      if (lastDistance < distance && distance > 58) {
        if (!isMobileSidebarOpen.value)
          hideNavbar.value = true;
      } else
        hideNavbar.value = false;
      lastDistance = distance;
    }, 300);
    vue.watch(isMobile, (value2) => {
      if (!value2)
        toggleMobileSidebar(false);
    });
    vue.onMounted(() => {
      unregisterRouterHook = router.afterEach(() => {
        toggleMobileSidebar(false);
      });
      window.addEventListener("scroll", scrollHandler);
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
      window.removeEventListener("scroll", scrollHandler);
    });
    return () => {
      var _a;
      return vue.h("div", {
        class: [
          "theme-container",
          {
            "no-navbar": !enableNavbar.value,
            "no-sidebar": !enableSidebar.value && !(slots.sidebar || slots.sidebarTop || slots.sidebarBottom),
            "has-toc": enableToc.value,
            "hide-navbar": hideNavbar.value,
            "sidebar-open": isMobile.value ? isMobileSidebarOpen.value : isDesktopSidebarOpen.value
          },
          frontmatter.value.containerClass || ""
        ],
        onTouchStart,
        onTouchEnd
      }, isGlobalEncrypted.value ? vue.h(PasswordModal, { full: true, onVerify: validateGlobalToken }) : [
        enableNavbar.value ? vue.h(vue.resolveComponent("Navbar"), { onToggleSidebar: () => toggleMobileSidebar() }, {
          left: () => {
            var _a2;
            return (_a2 = slots.navbarLeft) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
          },
          center: () => {
            var _a2;
            return (_a2 = slots.navbarCenter) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
          },
          right: () => {
            var _a2;
            return (_a2 = slots.navbarRight) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
          },
          screenTop: () => {
            var _a2;
            return (_a2 = slots.navScreenTop) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
          },
          screenBottom: () => {
            var _a2;
            return (_a2 = slots.navScreenBottom) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
          }
        }) : null,
        vue.h(vue.Transition, { name: "fade" }, () => isMobileSidebarOpen.value ? vue.h("div", {
          class: "sidebar-mask",
          onClick: () => toggleMobileSidebar(false)
        }) : null),
        vue.h(vue.Transition, { name: "fade" }, () => isMobile.value ? null : vue.h("div", {
          class: "toggle-sidebar-wrapper",
          onClick: () => toggleDesktopSidebar()
        }, vue.h("span", {
          class: [
            "arrow",
            isDesktopSidebarOpen.value ? "left" : "right"
          ]
        }))),
        vue.h(vue.resolveComponent("Sidebar"), {}, __spreadProps(__spreadValues({}, slots.sidebar ? { default: () => {
          var _a2;
          return (_a2 = slots.sidebar) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
        } } : {}), {
          top: () => {
            var _a2;
            return (_a2 = slots.sidebarTop) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
          },
          bottom: () => {
            var _a2;
            return (_a2 = slots.sidebarBottom) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
          }
        })),
        (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots),
        vue.h(PageFooter)
      ]);
    };
  }
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$l = vue.defineComponent({
  name: "DropTransition",
  components: {
    Transition: vue.Transition,
    TransitionGroup: vue.TransitionGroup
  },
  props: {
    type: { type: String, default: "single" },
    delay: { type: Number, default: 0 },
    duration: { type: Number, default: 0.25 }
  },
  setup(props) {
    const setStyle = (item) => {
      item.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      item.style.transform = "translateY(-20px)";
      item.style.opacity = "0";
    };
    const unsetStyle = (item) => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    };
    return {
      setStyle,
      unsetStyle
    };
  }
});
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if (_ctx.type === "single") {
    serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.type === "group") {
    _push(`<!--[-->`);
    serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/vuepress-theme-hope/lib/client/components/transitions/DropTransition.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var DropTransition = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l], ["__file", "DropTransition.vue"]]);
var fadeSlideY = "";
var FadeSlideY = vue.defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    return () => vue.h(vue.Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    });
  }
});
var HomeFeatures = vue.defineComponent({
  name: "HomeFeatures",
  setup() {
    const iconPrefix = useIconPrefix();
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features))
        return frontmatter.value.features;
      return [];
    });
    const getIcon = (icon = "") => {
      return isLinkHttp$1(icon) ? vue.h("img", { class: "icon", src: icon }) : icon.startsWith("/") ? vue.h("img", { class: "icon", src: withBase$1(icon) }) : icon ? vue.h("span", {
        class: ["icon", `${iconPrefix.value}${icon}`]
      }) : null;
    };
    return () => {
      var _a;
      return features.value.length ? vue.h("div", { class: "features" }, (_a = frontmatter.value.features) === null || _a === void 0 ? void 0 : _a.map((feature) => {
        const children = [
          getIcon(feature.icon),
          vue.h("h2", { innerHTML: feature.title }),
          vue.h("p", { innerHTML: feature.details })
        ];
        return feature.link ? isLinkExternal(feature.link) ? vue.h("a", {
          class: "feature link",
          href: feature.link,
          role: "navigation",
          target: "_blank"
        }, children) : vue.h(vueRouter.RouterLink, {
          class: "feature link",
          to: feature.link,
          role: "navigation"
        }, () => children) : vue.h("div", { class: "feature" }, children);
      })) : null;
    };
  }
});
const MarkdownContent = ({ custom }) => vue.h("div", { class: ["theme-hope-content", { custom }] }, vue.h(Content$1));
MarkdownContent.displayName = "MarkdownContent";
var MarkdownContent$1 = MarkdownContent;
var HomeHero = vue.defineComponent({
  name: "HomeHero",
  setup() {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null)
        return null;
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null)
        return null;
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = vue.computed(() => {
      if (!frontmatter.value.heroImage)
        return null;
      return withBase$1(frontmatter.value.heroImage);
    });
    const heroImageDark = vue.computed(() => {
      if (!frontmatter.value.heroImageDark)
        return null;
      return withBase$1(frontmatter.value.heroImageDark);
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions))
        return [];
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    return () => vue.h("header", { class: "hero" }, [
      vue.h(DropTransition, { type: "group" }, () => [
        heroImage.value ? vue.h("img", {
          key: "light",
          class: { light: heroImageDark.value },
          src: heroImage.value,
          alt: heroAlt
        }) : null,
        heroImageDark.value ? vue.h("img", {
          key: "dark",
          class: "dark",
          src: heroImageDark.value,
          alt: heroAlt
        }) : null
      ]),
      vue.h("div", { class: "hero-info" }, [
        heroText.value ? vue.h(DropTransition, { delay: 0.04 }, () => vue.h("h1", { id: "main-title" }, heroText.value)) : null,
        tagline.value ? vue.h(DropTransition, { delay: 0.08 }, () => vue.h("p", { class: "description" }, tagline.value)) : null,
        actions.value.length ? vue.h(DropTransition, { delay: 0.12 }, () => vue.h("p", { class: "actions" }, actions.value.map((action) => vue.h(AutoLink, {
          class: ["action-button", action.type],
          config: action
        })))) : null
      ])
    ]);
  }
});
var homePage = "";
var HomePage = vue.defineComponent({
  name: "HopePage",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    return () => {
      var _a, _b, _c;
      return vue.h("main", {
        class: "home project",
        id: "main-content",
        "aria-labelledby": frontmatter.value.heroText === null ? void 0 : "main-title"
      }, [
        (_a = slots.top) === null || _a === void 0 ? void 0 : _a.call(slots),
        vue.h(HomeHero),
        vue.h(DropTransition, { delay: 0.16 }, () => vue.h(HomeFeatures)),
        (_b = slots.center) === null || _b === void 0 ? void 0 : _b.call(slots),
        vue.h(DropTransition, { delay: 0.24 }, () => vue.h(MarkdownContent$1, { custom: true })),
        (_c = slots.bottom) === null || _c === void 0 ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const EditIcon = () => vue.h(T$1, { name: "edit" }, () => [
  vue.h("path", {
    d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"
  }),
  vue.h("path", {
    d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"
  })
]);
EditIcon.displayName = "EditIcon";
const _sfc_main$k = vue.defineComponent({
  name: "Page404Icon"
});
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    class: "page-404-icon",
    viewBox: "0 0 178 130"
  }, _attrs))}><defs><linearGradient id="b" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e9e9e9"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="c" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dcdcdc"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="d" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f1f1f1"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="e" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dedede"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="f" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e8e8e8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="g" x1=".213" y1="1.265" x2=".846" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#f5f5f5"></stop></linearGradient><linearGradient id="h" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c5c5c5"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="i" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#acacac"></stop><stop offset="1" stop-color="#f2f2f2" stop-opacity=".388"></stop></linearGradient><clipPath id="a"><path transform="translate(744 1111)" fill="none" d="M0 0h178v130H0z"></path></clipPath></defs><g transform="translate(-744 -1111)" clip-path="url(#a)"><g><path d="M0 10.795 36.6 0v93.779L0 104.574z" transform="translate(772.466 1122.142)" fill="url(#b)"></path><path d="M-8.492 10.642-26.361-.469v93.78l17.868 11.111z" transform="translate(780.958 1122.293)" fill="url(#c)"></path><path d="M-8.5 5.55 28.106-5.3 10.228-16.437l-36.6 10.845z" transform="translate(780.963 1127.438)" fill="url(#d)"></path><path d="M0 10.539 35.741 0v91.56L0 102.1z" transform="translate(870.158 1123.617)" fill="url(#d)"></path><path d="M-8.913 10.38-26.361-.469v91.562l17.448 10.848z" transform="translate(879.071 1123.775)" fill="url(#e)"></path><path d="m-8.918 5.032 35.741-10.59L9.366-16.437-26.375-5.848z" transform="translate(879.076 1129.175)" fill="url(#d)"></path><path d="M0 9.137 30.839 0v79.381L0 88.519z" transform="translate(799.678 1151.579)" fill="url(#f)"></path><path d="m-11.306 8.936-15.054-9.4v79.377l15.054 9.4z" transform="translate(810.985 1151.78)" fill="url(#c)"></path><path d="M-11.313 2.087 19.526-7.05 4.464-16.437-26.375-7.3z" transform="translate(810.991 1158.63)" fill="url(#g)"></path><path d="M178 53H0a51.361 51.361 0 0 1 10.453-20.952 74.532 74.532 0 0 1 19.742-16.811A103.3 103.3 0 0 1 57.089 4.058a127.515 127.515 0 0 1 63.823 0 103.3 103.3 0 0 1 26.894 11.179 74.532 74.532 0 0 1 19.741 16.811A51.363 51.363 0 0 1 178 53z" transform="translate(744 1187.549)" fill="url(#h)"></path><path d="m814.529 1199.586-1.272 1.212h2.3l1.2-1.212z" fill="#cbcbcb"></path><path d="m816.725 1194.909-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"></path><path d="m863.284 1199.585-1.272 1.212h2.3l1.2-1.212z" fill="#cbcbcb"></path><path d="m865.519 1194.9-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"></path><path d="m799.527 1191.21 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#c6c6c6"></path><path d="m798.306 1192.431 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#b2b2b2"></path><path d="m-27.694-19.435 10.182 14.517h4.381l-9.931-14.352h14.876v-2.606h-19.508zm13.081 6.273h4.152v-11.8h-4.152zM6.115-25.156q-4.256 0-6.457 1.5a4.8 4.8 0 0 0-2.2 4.191v9.113a4.784 4.784 0 0 0 2.212 4.2 11.511 11.511 0 0 0 6.447 1.5q4.256 0 6.457-1.489a4.786 4.786 0 0 0 2.2-4.2v-9.113a4.784 4.784 0 0 0-2.212-4.2 11.511 11.511 0 0 0-6.447-1.502zm0 2.675a5.705 5.705 0 0 1 3.328.779 2.6 2.6 0 0 1 1.074 2.24v9.113a2.607 2.607 0 0 1-1.064 2.24 5.7 5.7 0 0 1-3.338.779 5.7 5.7 0 0 1-3.338-.779 2.607 2.607 0 0 1-1.064-2.24v-9.113A2.6 2.6 0 0 1 2.788-21.7a5.705 5.705 0 0 1 3.327-.782zm14.927 3.047L31.224-4.918h4.381l-9.931-14.351H40.55v-2.606H21.043zm13.081 6.273h4.152v-11.8h-4.151z" transform="translate(826 1226.245)" opacity=".32" fill="url(#i)"></path><g fill="#e6e6e6"><path d="m858.428 1169.23-1.2 1.259h4.388l1.178-1.259z"></path><path d="m802.944 1192.187 1.288-1.375h7.143v1.375zm8.415-9.25 1.273-1.234h4.15l-1.235 1.234zm-2.855-12.469 1.198-1.259h4.367l-1.178 1.259z"></path><path d="m861.362 1181.678-1.27 1.3h4.188l1.236-1.3z"></path><path d="m865.519 1190.9-1.27 1.3h2.3l1.162-1.3z"></path><path d="m852.838 1190.791-1.207 1.508h8.447v-1.508z"></path></g></g></g></svg>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/vuepress-theme-hope/lib/client/components/icons/Page404.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var Page404Icon = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k], ["__file", "Page404.vue"]]);
var pageMeta = "";
var PageMeta = vue.defineComponent({
  name: "PageMeta",
  setup() {
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const updateTime = useUpdateTime();
    const contributors = useContributors();
    return () => {
      const { metaLocales } = themeLocale.value;
      return vue.h("footer", { class: "page-meta" }, [
        editLink.value ? vue.h("div", { class: "meta-item edit-link" }, vue.h(AutoLink, { class: "label", config: editLink.value }, { before: () => vue.h(EditIcon) })) : null,
        updateTime.value ? vue.h("div", { class: "meta-item update-time" }, [
          vue.h("span", { class: "label" }, `${metaLocales.lastUpdated}: `),
          vue.h("span", { class: "info" }, updateTime.value)
        ]) : null,
        contributors.value && contributors.value.length ? vue.h("div", { class: "meta-item contributors" }, [
          vue.h("span", { class: "label" }, `${metaLocales.contributors}: `),
          contributors.value.map(({ email, name }, index2) => [
            vue.h("span", { class: "contributor", title: `email: ${email}` }, name),
            index2 !== contributors.value.length - 1 ? "," : ""
          ])
        ]) : null
      ]);
    };
  }
});
var pageNav = "";
const resolveFromFrontmatterConfig = (conf) => {
  if (conf === false)
    return null;
  if (isString(conf))
    return useAutoLink(conf);
  if (isPlainObject(conf))
    return conf;
  return false;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const index2 = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index2 !== -1) {
    const targetItem = sidebarItems[index2 + offset];
    if (!(targetItem === null || targetItem === void 0 ? void 0 : targetItem.link))
      return null;
    return targetItem;
  }
  for (const item of sidebarItems)
    if (item.children) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult)
        return childResult;
    }
  return null;
};
var PageNav = vue.defineComponent({
  name: "PageNav",
  setup() {
    const themeLocale = useThemeLocaleData();
    const iconPrefix = useIconPrefix();
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const navigate = useNavigate();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      return prevConfig !== false ? prevConfig : resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      return nextConfig !== false ? nextConfig : resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    const keyboardListener = (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextNavLink.value) {
            navigate(nextNavLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevNavLink.value) {
            navigate(prevNavLink.value.link);
            event.preventDefault();
          }
        }
      }
    };
    vue.onMounted(() => {
      window.addEventListener("keydown", keyboardListener);
    });
    vue.onUnmounted(() => {
      window.removeEventListener("keydown", keyboardListener);
    });
    return () => prevNavLink.value || nextNavLink.value ? vue.h("nav", { class: "page-nav" }, [
      prevNavLink.value ? vue.h(AutoLink, { class: "prev", config: prevNavLink.value }, () => {
        var _a, _b;
        return [
          vue.h("div", { class: "hint" }, [
            vue.h("span", { class: "arrow left" }),
            themeLocale.value.metaLocales.prev
          ]),
          vue.h("div", { class: "link" }, [
            ((_a = prevNavLink.value) === null || _a === void 0 ? void 0 : _a.icon) ? vue.h("i", {
              class: `icon ${iconPrefix.value}${prevNavLink.value.icon}`
            }) : null,
            (_b = prevNavLink.value) === null || _b === void 0 ? void 0 : _b.text
          ])
        ];
      }) : null,
      nextNavLink.value ? vue.h(AutoLink, { class: "next", config: nextNavLink.value }, () => {
        var _a, _b;
        return [
          vue.h("div", { class: "hint" }, [
            themeLocale.value.metaLocales.next,
            vue.h("span", { class: "arrow right" })
          ]),
          vue.h("div", { class: "link" }, [
            (_a = nextNavLink.value) === null || _a === void 0 ? void 0 : _a.text,
            ((_b = nextNavLink.value) === null || _b === void 0 ? void 0 : _b.icon) ? vue.h("i", {
              class: `icon ${iconPrefix.value}${nextNavLink.value.icon}`
            }) : null
          ])
        ];
      }) : null
    ]) : null;
  }
});
var pageTitle = "";
var PageTitle = vue.defineComponent({
  name: "PageTitle",
  setup() {
    const page2 = usePageData$1();
    const frontmatter = usePageFrontmatter();
    const pageInfoProps = usePageInfo();
    const themeLocale = useThemeLocaleData();
    const iconPrefix = useIconPrefix();
    return () => vue.h("div", { class: "page-title" }, [
      vue.h("h1", [
        themeLocale.value.titleIcon !== false && frontmatter.value.icon ? vue.h("i", {
          class: ["icon", `${iconPrefix.value}${frontmatter.value.icon}`]
        }) : null,
        page2.value.title
      ]),
      vue.h(vue.resolveComponent("ArticleInfo"), __spreadValues({}, pageInfoProps)),
      vue.h("hr")
    ]);
  }
});
var page$1 = "";
var NormalPage = vue.defineComponent({
  name: "NormalPage",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const { isDarkMode } = useDarkMode();
    const iconPrefix = useIconPrefix();
    const themeLocale = useThemeLocaleData();
    const { isEncrypted, validateToken } = usePathEncrypt();
    const breadcrumbEnable = vue.computed(() => frontmatter.value.breadcrumb || frontmatter.value.breadcrumb !== false && themeLocale.value.breadcrumb !== false);
    const breadcrumbIconEnable = vue.computed(() => frontmatter.value.breadcrumbIcon || frontmatter.value.breadcrumbIcon !== false && themeLocale.value.breadcrumbIcon !== false);
    const tocEnable = vue.computed(() => frontmatter.value.toc || frontmatter.value.toc !== false && themeLocale.value.toc !== false);
    return () => {
      var _a, _b, _c, _d, _e;
      return vue.h("main", { class: "page", id: "main-content" }, isEncrypted.value ? vue.h(PasswordModal, { onVerify: validateToken }) : [
        (_a = slots.top) === null || _a === void 0 ? void 0 : _a.call(slots),
        vue.h(vue.resolveComponent("BreadCrumb"), {
          enable: breadcrumbEnable.value,
          icon: breadcrumbIconEnable.value,
          iconPrefix: iconPrefix.value
        }),
        vue.h(PageTitle),
        tocEnable.value ? vue.h(vue.resolveComponent("TOC"), {
          headerDepth: (_b = frontmatter.value.headerDepth) !== null && _b !== void 0 ? _b : themeLocale.value.headerDepth
        }) : null,
        (_c = slots.contentBefore) === null || _c === void 0 ? void 0 : _c.call(slots),
        vue.h(MarkdownContent$1),
        (_d = slots.contentAfter) === null || _d === void 0 ? void 0 : _d.call(slots),
        vue.h(PageMeta),
        vue.h(PageNav),
        vue.h(vue.resolveComponent("PageComment"), {
          darkmode: isDarkMode.value
        }),
        (_e = slots.bottom) === null || _e === void 0 ? void 0 : _e.call(slots)
      ]);
    };
  }
});
var index$2 = "";
var clientAppEnhance6 = defineClientAppEnhance(({ app, router }) => {
  app.component("PageComment", ({ darkmode }) => {
    const CommentService = app.component("CommentService");
    return CommentService ? vue.h(CommentService, { darkmode }) : null;
  });
  app.component("CommonWrapper", CommonWrapper);
  app.component("HomePage", HomePage);
  app.component("NormalPage", NormalPage);
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
var navbarBrand = "";
var NavbarBrand = vue.defineComponent({
  name: "NavbarBrand",
  setup(_2, { slots }) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const siteBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandTitle = vue.computed(() => siteLocale.value.title);
    const siteBrandLogo = vue.computed(() => themeLocale.value.logo ? withBase$1(themeLocale.value.logo) : null);
    const siteBrandLogoDark = vue.computed(() => themeLocale.value.logoDark ? withBase$1(themeLocale.value.logoDark) : null);
    return () => vue.h(vueRouter.RouterLink, { to: siteBrandLink.value, class: "home-link" }, () => {
      var _a;
      return [
        siteBrandLogo.value ? vue.h("img", {
          class: ["logo", { light: Boolean(siteBrandLogoDark.value) }],
          src: siteBrandLogo.value,
          alt: siteBrandTitle.value
        }) : null,
        siteBrandLogoDark.value ? vue.h("img", {
          class: ["logo dark", { light: Boolean(siteBrandLogoDark) }],
          src: siteBrandLogo.value,
          alt: siteBrandTitle.value
        }) : null,
        siteBrandTitle.value ? vue.h("span", { class: ["site-name", { "hide-in-pad": siteBrandLogo }] }, siteBrandTitle.value) : null,
        (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)
      ];
    });
  }
});
var dropdownLink = "";
var DropdownLink = vue.defineComponent({
  name: "NavbarDropdownLink",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props, { slots }) {
    const route = vueRouter.useRoute();
    const iconPrefix = useIconPrefix();
    const config = vue.toRef(props, "config");
    const dropdownAriaLabel = vue.computed(() => config.value.ariaLabel || config.value.text);
    const open = vue.ref(false);
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const handleDropdown = (event) => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab)
        open.value = !open.value;
    };
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => {
      var _a;
      return vue.h("div", { class: ["dropdown-wrapper", { open: open.value }] }, [
        vue.h("button", {
          class: "dropdown-title",
          type: "button",
          ariaLabel: dropdownAriaLabel.value,
          onClick: handleDropdown
        }, [
          ((_a = slots.title) === null || _a === void 0 ? void 0 : _a.call(slots)) || vue.h("span", { class: "title" }, [
            config.value.icon ? vue.h("i", {
              class: `icon ${iconPrefix.value}${config.value.icon}`
            }) : null,
            props.config.text
          ]),
          vue.h("span", { class: "arrow" }),
          vue.h("ul", { class: "nav-dropdown" }, config.value.children.map((child) => vue.h("li", { class: "dropdown-item" }, "children" in child ? [
            vue.h("h4", { class: "dropdown-subtitle" }, child.link ? vue.h(AutoLink, {
              config: child,
              onFocusout: () => {
                if (isLastItemOfArray(child, config.value.children) && child.children.length === 0)
                  open.value = false;
              }
            }) : vue.h("span", child.text)),
            vue.h("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => vue.h("li", { class: "dropdown-subitem" }, vue.h(AutoLink, {
              config: grandchild,
              onFocusout: () => {
                if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config.value.children))
                  open.value = false;
              }
            }))))
          ] : vue.h(AutoLink, {
            config: child,
            onFocusout: () => {
              if (isLastItemOfArray(child, config.value.children))
                open.value = false;
            }
          }))))
        ])
      ]);
    };
  }
});
const resolveNavbarItem = (item, prefix2 = "") => {
  if (isString(item))
    return useAutoLink(`${prefix2}${item}`);
  if ("children" in item)
    return __spreadProps(__spreadValues(__spreadValues({}, item), item.link && !isLinkExternal(item.link) ? useAutoLink(`${prefix2}${item.link}`) : {}), {
      children: item.children.map((child) => resolveNavbarItem(child, `${prefix2}${item.prefix || ""}`))
    });
  return __spreadProps(__spreadValues({}, item), {
    link: isLinkExternal(item.link) ? item.link : useAutoLink(`${prefix2}${item.link}`).link
  });
};
const useNavbarConfig = () => vue.computed(() => (useThemeLocaleData().value.navbar || []).map((item) => resolveNavbarItem(item)));
const useNavbarLanguageDropdown = () => {
  const router = vueRouter.useRouter();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return vue.computed(() => {
    const localePaths = Object.keys(siteLocale.value.locales);
    if (localePaths.length < 2)
      return null;
    const currentPath = router.currentRoute.value.path;
    const { navbarLocales } = themeLocale.value;
    const languageDropdown = {
      text: navbarLocales === null || navbarLocales === void 0 ? void 0 : navbarLocales.selectLangText,
      ariaLabel: navbarLocales === null || navbarLocales === void 0 ? void 0 : navbarLocales.selectLangAriaLabel,
      children: localePaths.map((targetLocalePath) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const targetSiteLocale = (_b = (_a = siteLocale.value.locales) === null || _a === void 0 ? void 0 : _a[targetLocalePath]) !== null && _b !== void 0 ? _b : {};
        const targetThemeLocale = (_d = (_c = themeData2.value.locales) === null || _c === void 0 ? void 0 : _c[targetLocalePath]) !== null && _d !== void 0 ? _d : {};
        const targetLang = targetSiteLocale.lang || "";
        const text = (_f = (_e = targetThemeLocale.navbarLocales) === null || _e === void 0 ? void 0 : _e.langName) !== null && _f !== void 0 ? _f : targetLang;
        let link;
        if (targetLang === siteLocale.value.lang) {
          link = currentPath;
        } else {
          const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
          link = router.getRoutes().some((item) => item.path === targetLocalePage) ? targetLocalePage : (_g = targetThemeLocale.home) !== null && _g !== void 0 ? _g : targetLocalePath;
        }
        return {
          text,
          link
        };
      })
    };
    return languageDropdown;
  });
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = vue.computed(() => themeLocale.value.repo);
  const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
  const repoLink = vue.computed(() => {
    if (repo.value && !isLinkHttp$1(repo.value))
      return `https://github.com/${repo.value}`;
    return repo.value;
  });
  const repoLabel = vue.computed(() => {
    if (!repoLink.value)
      return null;
    if (themeLocale.value.repoLabel)
      return themeLocale.value.repoLabel;
    if (repoType.value === null)
      return "Source";
    return repoType.value;
  });
  return vue.computed(() => {
    if (!repoLink.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
      return null;
    return {
      type: repoType.value || "Source",
      label: repoLabel.value,
      link: repoLink.value
    };
  });
};
var navbarLinks = "";
var NavbarLinks = vue.defineComponent({
  name: "NavbarLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? vue.h("nav", { class: "nav-links" }, [
      ...navbarConfig.value.map((config) => vue.h("div", { class: ["nav-item", "hide-in-mobile"] }, "children" in config ? vue.h(DropdownLink, { config }) : vue.h(AutoLink, { config })))
    ]) : null;
  }
});
var toggleSidebarButton = "";
var ToggleSidebarButton = vue.defineComponent({
  name: "ToggleSidebarButton",
  emits: ["toggle"],
  setup(_props, { emit }) {
    return () => vue.h("button", {
      class: "toggle-sidebar-button",
      title: "Toggle Sidebar",
      onClick: () => emit("toggle")
    }, vue.h("span", { class: "icon" }));
  }
});
const I18nIcon = () => vue.h(T$1, { name: "i18n" }, () => [
  vue.h("path", {
    d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"
  })
]);
I18nIcon.displayName = "I18nIcon";
const GitHubIcon = () => vue.h(T$1, { name: "github" }, () => vue.h("path", {
  d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"
}));
GitHubIcon.displayName = "GitHubIcon";
const GitlabIcon = () => vue.h(T$1, { name: "gitlab" }, () => vue.h("path", {
  d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"
}));
GitlabIcon.displayName = "GitlabIcon";
const GiteeIcon = () => vue.h(T$1, { name: "gitee" }, () => vue.h("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"
}));
GiteeIcon.displayName = "GiteeIcon";
const BitbucketIcon = () => vue.h(T$1, { name: "bitbucket" }, () => vue.h("path", {
  d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"
}));
BitbucketIcon.displayName = "BitbucketIcon";
const SourceIcon = () => vue.h(T$1, { name: "source" }, () => vue.h("path", {
  d: "M552.298 961.121 445.07 930.008c-11.25-3.164-17.578-14.942-14.414-26.192L670.6 77.293c3.164-11.25 14.941-17.578 26.191-14.414l107.227 31.113c11.25 3.164 17.578 14.942 14.414 26.192L578.489 946.707c-3.34 11.25-14.941 17.754-26.191 14.414zm-200.39-197.226 76.464-81.563c8.086-8.613 7.559-22.324-1.406-30.234L267.708 512l159.258-140.098c8.965-7.91 9.668-21.62 1.406-30.234l-76.465-81.563c-7.91-8.437-21.27-8.964-29.883-.878L68.724 496.53c-8.965 8.262-8.965 22.5 0 30.762l253.3 237.48c8.614 8.086 21.973 7.735 29.883-.878zm575.155 1.054 253.301-237.48c8.965-8.262 8.965-22.5 0-30.762l-253.3-237.656c-8.438-7.91-21.797-7.559-29.883.879l-76.465 81.562c-8.086 8.613-7.559 22.324 1.406 30.235L981.38 512 822.122 652.098c-8.965 7.91-9.668 21.62-1.406 30.234l76.465 81.563c7.91 8.613 21.27 8.964 29.882 1.054z"
}));
SourceIcon.displayName = "SourceIcon";
var LanguageDropdown = vue.defineComponent({
  name: "LanguageDropdown",
  setup() {
    const dropdown = useNavbarLanguageDropdown();
    return () => dropdown.value ? vue.h(DropdownLink, { class: "i18n-dropdown", config: dropdown.value }, {
      title: () => {
        var _a;
        return vue.h(I18nIcon, {
          ariaLabel: (_a = dropdown.value) === null || _a === void 0 ? void 0 : _a.ariaLabel,
          style: {
            width: "1rem",
            height: "1rem",
            verticalAlign: "middle"
          }
        });
      }
    }) : null;
  }
});
var RepoLink = vue.defineComponent({
  name: "RepoLink",
  components: { BitbucketIcon, GiteeIcon, GitHubIcon, GitlabIcon, SourceIcon },
  setup() {
    const repo = useNavbarRepo();
    return () => repo.value ? vue.h("div", { class: "nav-item" }, vue.h("a", {
      class: "repo-link",
      href: repo.value.link,
      target: "_blank",
      rel: "noopener noreferrer"
    }, vue.h(vue.resolveComponent(`${repo.value.type}Icon`), {
      style: {
        width: "1.25rem",
        height: "1.25rem",
        verticalAlign: "middle"
      }
    }))) : null;
  }
});
const DarkIcon = () => vue.h(T$1, { name: "dark" }, () => vue.h("path", {
  d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
}));
DarkIcon.displayName = "DarkIcon";
const LightIcon = () => vue.h(T$1, { name: "light" }, () => vue.h("path", {
  d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"
}));
LightIcon.displayName = "LightIcon";
const AutoIcon = () => vue.h(T$1, { name: "auto" }, () => vue.h("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"
}));
AutoIcon.displayName = "AutoIcon";
const OutlookIcon = () => vue.h(T$1, { name: "outlook" }, () => [
  vue.h("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon.displayName = "OutlookIcon";
var appearanceSwitch = "";
var AppearanceSwitch = vue.defineComponent({
  name: "AppearanceSwitch",
  setup() {
    const themeData2 = useThemeData();
    const { status } = useDarkMode();
    const darkmode = vue.computed(() => themeData2.value.darkmode);
    const toggleDarkMode = () => {
      if (darkmode.value === "auto-switch") {
        status.value = { light: "dark", dark: "auto", auto: "light" }[status.value];
      } else
        status.value = status.value === "light" ? "dark" : "light";
    };
    return () => vue.h("button", {
      id: "appearance-switch",
      onClick: () => toggleDarkMode()
    }, [
      vue.h(AutoIcon, {
        style: {
          display: status.value === "auto" ? "block" : "none"
        }
      }),
      vue.h(DarkIcon, {
        style: {
          display: status.value === "dark" ? "block" : "none"
        }
      }),
      vue.h(LightIcon, {
        style: {
          display: status.value === "light" ? "block" : "none"
        }
      })
    ]);
  }
});
var fullScreen = "";
var ToggleFullScreen = vue.defineComponent({
  name: "ToggleFullScreen",
  setup() {
    const themeLocale = useThemeLocaleData();
    const FullScreen = vue.resolveComponent("FullScreen");
    const fullscreenLocale = vue.computed(() => themeLocale.value.outlookLocales.fullscreen);
    return () => vue.h("div", { class: "fullscreen-wrapper" }, [
      vue.h("label", { class: "full-screen-title", for: "full-screen-switch" }, fullscreenLocale.value),
      vue.h(FullScreen, { id: "full-screen-switch" })
    ]);
  }
});
var AppearanceMode = vue.defineComponent({
  name: "AppearanceMode",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = vue.computed(() => themeLocale.value.outlookLocales.darkmode);
    const darkmode = vue.computed(() => themeData2.value.darkmode);
    const enable = vue.computed(() => darkmode.value === "auto-switch" || darkmode.value === "switch");
    return () => enable.value ? vue.h("div", { class: "appearance-wrapper" }, [
      vue.h("label", { class: "appearance-title", for: "appearance-switch" }, locale.value),
      vue.h(AppearanceSwitch)
    ]) : null;
  }
});
var themeColorPicker = "";
var ThemeColorPicker = vue.defineComponent({
  name: "ThemeColorPicker",
  props: {
    themeColor: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const themeData2 = useThemeData();
    const themeColor = vue.computed(() => {
      const { themeColor: themeColor2 } = themeData2.value;
      return themeColor2 === false ? null : themeColor2;
    });
    const setThemeColor = (theme = "") => {
      if (themeColor.value) {
        const classes = document.documentElement.classList;
        const themes = Object.keys(themeColor.value).map((color) => `theme-${color}`);
        if (!theme) {
          localStorage.removeItem("theme");
          classes.remove(...themes);
          return;
        }
        classes.remove(...themes.filter((themeclass) => themeclass !== `theme-${theme}`));
        classes.add(`theme-${theme}`);
        localStorage.setItem("theme", theme);
      }
    };
    vue.onMounted(() => {
      const theme = localStorage.getItem("theme");
      if (theme)
        setThemeColor(theme);
    });
    return () => vue.h("ul", { id: "themecolor-picker" }, [
      vue.h("li", vue.h("span", {
        class: "theme-color",
        onClick: () => setThemeColor()
      })),
      ...Object.entries(props.themeColor).map(([color, value2]) => vue.h("li", vue.h("span", {
        style: { background: value2 },
        onClick: () => setThemeColor(color)
      })))
    ]);
  }
});
var ThemeColor = vue.defineComponent({
  name: "ThemeColor",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = vue.computed(() => themeLocale.value.outlookLocales.themeColor);
    const themeColor = vue.computed(() => {
      const { themeColor: themeColor2 } = themeData2.value;
      return themeColor2 === false ? null : themeColor2;
    });
    return () => themeColor.value ? vue.h("div", { class: "themecolor-wrapper" }, [
      vue.h("label", { class: "themecolor-title", for: "theme-color-picker" }, locale.value),
      vue.h(ThemeColorPicker, { themeColor: themeColor.value })
    ]) : null;
  }
});
var OutlookSettings = vue.defineComponent({
  name: "OutlookSettings",
  setup() {
    const themeData2 = useThemeData();
    const pure = usePure();
    const { isSupported } = core.useFullscreen();
    const enableDarkmode = vue.computed(() => themeData2.value.darkmode !== "disable" && themeData2.value.darkmode !== "force-dark");
    const enableThemeColor = vue.computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = vue.computed(() => !pure.value && themeData2.value.fullscreen);
    return () => vue.h(ClientOnly$1, () => [
      enableThemeColor.value ? vue.h(ThemeColor) : null,
      enableDarkmode.value ? vue.h(AppearanceMode) : null,
      isSupported && enableFullScreen.value ? vue.h(ToggleFullScreen) : null
    ]);
  }
});
var outlookButton = "";
var OutlookButton = vue.defineComponent({
  name: "OutlookButton",
  setup() {
    const themeData2 = useThemeData();
    const pure = usePure();
    const route = vueRouter.useRoute();
    const open = vue.ref(false);
    const enableDarkmode = vue.computed(() => themeData2.value.darkmode !== "disable" && themeData2.value.darkmode !== "force-dark");
    const enableThemeColor = vue.computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = vue.computed(() => !pure.value && themeData2.value.fullscreen);
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    return () => enableDarkmode.value || enableFullScreen.value || enableThemeColor.value ? vue.h("div", { class: "nav-item hide-in-mobile" }, enableDarkmode.value && !enableFullScreen.value && !enableThemeColor.value ? vue.h(AppearanceSwitch) : enableFullScreen.value && !enableDarkmode.value && !enableThemeColor.value ? vue.h(ToggleFullScreen) : vue.h("button", {
      class: ["outlook-button", { open: open.value }],
      tabindex: "-1",
      ariaHidden: true
    }, [
      vue.h(OutlookIcon),
      vue.h("div", { class: "outlook-dropdown" }, vue.h(OutlookSettings))
    ])) : null;
  }
});
var toggleNavbarButton = "";
var ToggleNavbarButton = vue.defineComponent({
  name: "ToggleNavbarButton",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ["toggle"],
  setup(props, { emit }) {
    return () => vue.h("button", {
      class: ["toggle-navbar-button", { "is-active": props.active }],
      "aria-label": "Toggle Navbar",
      "aria-expanded": props.active,
      "aria-controls": "nav-screen",
      onClick: () => emit("toggle")
    }, vue.h("span", { class: "button-container" }, [
      vue.h("span", { class: "button-top" }),
      vue.h("span", { class: "button-middle" }),
      vue.h("span", { class: "button-bottom" })
    ]));
  }
});
var navbarActions = "";
var NavActions = vue.defineComponent({
  name: "NavActions",
  props: {
    showScreen: { type: Boolean, default: false }
  },
  emits: ["toggleScreen"],
  setup(props, { emit, slots }) {
    return () => {
      var _a, _b;
      return vue.h("div", { class: "nav-actions-wrapper" }, [
        (_a = slots.before) === null || _a === void 0 ? void 0 : _a.call(slots),
        vue.h("div", { class: "nav-item" }, vue.h(LanguageDropdown)),
        vue.h(RepoLink),
        vue.h(OutlookButton),
        vue.h(vue.resolveComponent("NavbarSearch")),
        vue.h(ToggleNavbarButton, {
          active: props.showScreen,
          onToggle: () => emit("toggleScreen")
        }),
        (_b = slots.after) === null || _b === void 0 ? void 0 : _b.call(slots)
      ]);
    };
  }
});
var navScreenDropdown = "";
var NavScreenDropdown = vue.defineComponent({
  name: "NavScreenDropdown",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = vueRouter.useRoute();
    const iconPrefix = useIconPrefix();
    const config = vue.toRef(props, "config");
    const dropdownAriaLabel = vue.computed(() => config.value.ariaLabel || config.value.text);
    const open = vue.ref(false);
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => [
      vue.h("button", {
        class: ["nav-screen-dropdown-title", { active: open.value }],
        type: "button",
        ariaLabel: dropdownAriaLabel.value,
        onClick: () => {
          open.value = !open.value;
        }
      }, [
        vue.h("span", { class: "title" }, [
          config.value.icon ? vue.h("i", {
            class: `icon ${iconPrefix.value}${config.value.icon}`
          }) : null,
          props.config.text
        ]),
        vue.h("span", { class: ["arrow", open.value ? "down" : "right"] })
      ]),
      vue.h("ul", {
        class: ["nav-screen-dropdown", { hide: !open.value }]
      }, config.value.children.map((child) => vue.h("li", { class: "dropdown-item" }, "children" in child ? [
        vue.h("h4", { class: "dropdown-subtitle" }, child.link ? vue.h(AutoLink, {
          config: child,
          onFocusout: () => {
            if (isLastItemOfArray(child, config.value.children) && child.children.length === 0)
              open.value = false;
          }
        }) : vue.h("span", child.text)),
        vue.h("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => vue.h("li", { class: "dropdown-subitem" }, vue.h(AutoLink, {
          config: grandchild,
          onFocusout: () => {
            if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config.value.children))
              open.value = false;
          }
        }))))
      ] : vue.h(AutoLink, {
        config: child,
        onFocusout: () => {
          if (isLastItemOfArray(child, config.value.children))
            open.value = false;
        }
      }))))
    ];
  }
});
var navScreenLinks = "";
var NavScreenLinks = vue.defineComponent({
  name: "NavScreenLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? vue.h("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config) => vue.h("div", { class: "navbar-links-item" }, "children" in config ? vue.h(NavScreenDropdown, { config }) : vue.h(AutoLink, { config })))) : null;
  }
});
var navScreen = "";
var NavScreen = vue.defineComponent({
  name: "NavScreen",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const route = vueRouter.useRoute();
    const isMobile = useMobile();
    const body = vue.ref();
    const isLocked = core.useScrollLock(body);
    vue.watch(isMobile, (value2) => {
      if (!value2 && props.active)
        emit("close");
    });
    vue.watch(() => route.path, () => {
      isLocked.value = false;
      emit("close");
    });
    vue.onMounted(() => {
      body.value = document.body;
    });
    vue.onBeforeUnmount(() => {
      isLocked.value = false;
    });
    return () => vue.h(vue.Transition, {
      name: "fade",
      onEnter: () => {
        isLocked.value = true;
      },
      onAfterLeave: () => {
        isLocked.value = false;
      }
    }, () => {
      var _a, _b;
      return props.active ? vue.h("div", { id: "nav-screen" }, vue.h("div", { class: "container" }, [
        (_a = slots.before) === null || _a === void 0 ? void 0 : _a.call(slots),
        vue.h(NavScreenLinks),
        vue.h("div", { class: "outlook-wrapper" }, vue.h(OutlookSettings)),
        (_b = slots.after) === null || _b === void 0 ? void 0 : _b.call(slots)
      ])) : null;
    });
  }
});
var navbar = "";
var Navbar = vue.defineComponent({
  name: "NavBar",
  emits: ["toggle-sidebar"],
  setup(_props, { emit, slots }) {
    const themeLocale = useThemeLocaleData();
    const isMobile = useMobile();
    const showScreen = vue.ref(false);
    const navbar2 = vue.ref();
    const siteBrand = vue.ref();
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value)
        return {};
      return {
        "max-width": `${linksWrapperMaxWidth.value}px`
      };
    });
    const autoHide = vue.computed(() => {
      const { navbarAutoHide } = themeLocale.value;
      return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
    });
    return () => [
      vue.h("header", {
        class: [
          "navbar",
          {
            "auto-hide": autoHide.value,
            "hide-icon": !themeLocale.value.navbarIcon
          }
        ],
        ref: navbar2
      }, [
        vue.h(ToggleSidebarButton, {
          onToggle: () => {
            if (showScreen.value)
              showScreen.value = false;
            emit("toggle-sidebar");
          }
        }),
        vue.h(NavbarBrand, { ref: siteBrand }, () => {
          var _a;
          return (_a = slots.left) === null || _a === void 0 ? void 0 : _a.call(slots);
        }),
        vue.h(NavbarLinks, {
          style: linksWrapperStyle.value
        }),
        vue.h(NavActions, {
          showScreen: showScreen.value,
          onToggleScreen: () => {
            showScreen.value = !showScreen.value;
          }
        }, {
          before: () => {
            var _a;
            return (_a = slots.center) === null || _a === void 0 ? void 0 : _a.call(slots);
          },
          after: () => {
            var _a;
            return (_a = slots.right) === null || _a === void 0 ? void 0 : _a.call(slots);
          }
        })
      ]),
      vue.h(NavScreen, {
        active: showScreen.value,
        onClose: () => {
          showScreen.value = false;
        }
      }, {
        before: () => {
          var _a;
          return (_a = slots.screenTop) === null || _a === void 0 ? void 0 : _a.call(slots);
        },
        after: () => {
          var _a;
          return (_a = slots.screenBottom) === null || _a === void 0 ? void 0 : _a.call(slots);
        }
      })
    ];
  }
});
var clientAppEnhance7 = defineClientAppEnhance(({ app }) => {
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    return SearchComponent ? vue.h(SearchComponent) : null;
  });
  app.component("Navbar", Navbar);
});
var sidebarChild = "";
var SidebarChild = vue.defineComponent({
  name: "SidebarChild",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = vueRouter.useRoute();
    return () => [
      renderItem(props.config, {
        class: [
          "sidebar-link",
          `sidebar-${props.config.type}`,
          {
            active: isActiveSidebarItem(route, props.config, true)
          }
        ],
        exact: true
      }),
      renderChildren(props.config.children)
    ];
  }
});
var sidebarGroup = "";
var SidebarGroup = vue.defineComponent({
  name: "SidebarGroup",
  props: {
    config: {
      type: Object,
      required: true
    },
    open: { type: Boolean, required: true }
  },
  emits: ["toggle"],
  setup(props, { emit }) {
    const route = vueRouter.useRoute();
    const active = vue.computed(() => isActiveSidebarItem(route, props.config));
    const exact = vue.computed(() => isActiveSidebarItem(route, props.config, true));
    return () => {
      const { collapsable, children = [], icon, link, text } = props.config;
      return [
        vue.h("section", { class: "sidebar-group" }, [
          vue.h(collapsable ? "button" : "p", __spreadValues({
            class: [
              "sidebar-heading",
              {
                clickable: collapsable || link,
                exact: exact.value,
                active: active.value
              }
            ]
          }, collapsable ? {
            onClick: () => emit("toggle"),
            onKeydown: (event) => {
              if (event.key === "Enter")
                emit("toggle");
            }
          } : {}), [
            renderIcon(icon),
            link ? vue.h(vueRouter.RouterLink, { to: link, class: "title" }, () => text) : vue.h("span", { class: "title" }, text),
            collapsable ? vue.h("span", { class: ["arrow", props.open ? "down" : "right"] }) : null
          ]),
          vue.h(DropTransition, () => props.open || !collapsable ? vue.h(SidebarLinks, { config: children }) : null)
        ])
      ];
    };
  }
});
var sidebarLinks = "";
const isDescendantActive = (route, item) => {
  if (item.type === "group")
    return item.children.some((child) => {
      if (child.type === "group")
        return isDescendantActive(route, child);
      return child.type === "page" && isActiveSidebarItem(route, child, true);
    });
  return false;
};
const resolveOpenGroupIndex = (route, items) => {
  for (let i2 = 0; i2 < items.length; i2++)
    if (isDescendantActive(route, items[i2]))
      return i2;
  return -1;
};
var SidebarLinks = vue.defineComponent({
  name: "SidebarLinks",
  props: {
    config: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const route = vueRouter.useRoute();
    const openGroupIndex = vue.ref(-1);
    const toggleGroup = (index2) => {
      openGroupIndex.value = index2 === openGroupIndex.value ? -1 : index2;
    };
    vue.watch(() => [route.path, props.config], () => {
      const index2 = resolveOpenGroupIndex(route, props.config);
      openGroupIndex.value = index2;
    }, { immediate: true });
    return () => vue.h("ul", { class: "sidebar-links" }, props.config.map((config, index2) => vue.h("li", config.type === "group" ? vue.h(SidebarGroup, {
      config,
      open: index2 === openGroupIndex.value,
      onToggle: () => toggleGroup(index2)
    }) : vue.h(SidebarChild, { config }))));
  }
});
var sidebar = "";
var Sidebar = vue.defineComponent({
  name: "SideBar",
  setup(_props, { slots }) {
    const themeLocale = useThemeLocaleData();
    const sidebarItems = useSidebarItems();
    return () => {
      var _a, _b, _c;
      return vue.h("aside", { class: ["sidebar", { "hide-icon": !themeLocale.value.sidebarIcon }] }, [
        (_a = slots.top) === null || _a === void 0 ? void 0 : _a.call(slots),
        ((_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)) || vue.h(SidebarLinks, { config: sidebarItems.value }),
        (_c = slots.bottom) === null || _c === void 0 ? void 0 : _c.call(slots)
      ]);
    };
  }
});
var clientAppEnhance8 = defineClientAppEnhance(({ app }) => {
  app.component("Sidebar", Sidebar);
});
const icons = { "Baidu": '<svg xmlns="http://www.w3.org/2000/svg" class="icon baidu-icon" viewBox="0 0 1024 1024" ariaLabelledby="baidu"><circle cx="512" cy="512" r="512" fill="#1D2FE3" />,<path d="M239.022 704.978c.098-4.865-.314-9.772.162-14.591 5.178-52.464 197.571-253.377 249.641-259.233 42.996-4.833 75.768 16.545 99.824 49.144 37.893 51.351 82.81 95.455 131.292 136.237 52.903 44.503 56.525 99.801 32.6 158.592-23.425 57.56-75.34 69.833-127.771 58.804-84.971-17.874-168.158-13.744-253.37-4.536-86.35 9.333-133.788-39.4-132.378-124.417zM352.464 412.86c-3.58 50.707-17.93 96.128-75.9 98.12-58.053 1.995-80.093-41.432-79.275-91.71.81-49.705 13.416-104.053 76.851-102.136 53.84 1.625 74.74 45.8 78.324 95.726zm386.053 142.168c-68.494-1.735-84.188-43.331-82.635-93.812 1.46-47.519 10.082-97.628 73.299-96.65 61.395.95 81.6 43.207 81.553 98.668-.047 53.156-19.818 89.398-72.217 91.794zm-45.235-278.345c-10.464 42.665-24.513 91.761-85.919 94.502-52.74 2.354-71.705-34.482-72.805-81.242-1.233-52.42 48.08-112.965 87.582-110.373 33.943 2.226 71.146 49.541 71.142 97.113zm-195.147-14.097c-7.005 46.274-13.63 100.025-71.562 101.351-57.077 1.306-73.567-47.922-73.638-97.109-.068-48.054 12.128-99.024 69.345-101.426 59.45-2.493 67.11 51.093 75.855 97.184z" fill="#fff" />,<path d="M479.52 663.165c.006 12.194 1.498 24.61-.284 36.537-4.707 31.503 18.862 78.749-45.326 77.534-54.226-1.027-103.338-3.31-113.231-73.536-7.164-50.852 7.78-85.674 57.687-102.668 17.67-6.016 39.618 5.058 54.096-14.548 10.84-14.679-2.901-54.592 33.418-41.47 24.075 8.7 11.477 38.922 13.278 59.652 1.68 19.366.359 38.99.363 58.5zm175.45 41.902c4.291 39.657 5.093 78.047-64.709 73.503-60.097-3.912-95.56-20.794-86.293-85.624 4.287-29.991-21.148-83.238 22.19-84.867 42.71-1.606 13.57 50.41 20.825 77.622 5.276 19.794-3.984 46.774 29.753 48.193 41.337 1.738 28.383-30.022 31.099-51.604 1.209-9.61-.85-19.65.528-29.215 2.516-17.474-8.928-44.716 19.554-47.191 36.044-3.133 24.155 28.376 26.678 47.523 1.896 14.387.375 29.225.375 51.66z" fill="#1D2FE3" />,<path d="M435.669 685.038c-2.255 24.07 5.605 53.68-33.623 52.136-34.594-1.362-35.274-31.818-38.513-53.078-4.028-26.448 11.38-48.18 40.785-50.023 40.967-2.564 27.097 30.764 31.35 50.965z" fill="#fff" /></svg>', "Bitbucket": '<svg xmlns="http://www.w3.org/2000/svg" class="icon bitbucket-icon" viewBox="0 0 1024 1024" ariaLabelledby="bitbucket"><circle cx="512" cy="512" r="512" fill="#205081" />,<path d="M512 191.32v.01-.01c-152.76 0-277.805 41.114-277.805 92.166 0 13.443 33.353 206.247 46.577 282.708 5.932 34.285 94.508 84.563 231.126 84.563l.102-.407v.407c137.484 0 225.26-50.278 231.192-84.578 13.23-76.457 46.592-269.255 46.592-282.698.005-51.047-125.024-92.165-277.784-92.165zm0 397.493c-48.771 0-88.31-39.545-88.31-88.31 0-48.772 39.539-88.306 88.31-88.306s88.31 39.534 88.31 88.31c0 48.766-39.539 88.306-88.31 88.306zm-.05-276.842c-98.256-.153-177.885-17.232-177.855-38.14.036-20.912 79.72-37.731 177.976-37.568 98.256.153 177.884 17.22 177.849 38.139-.026 20.908-79.705 37.716-177.966 37.564z" fill="#fff" />,<path d="M711.668 642.814c-4.227 0-7.608 2.994-7.608 2.994S635.65 699.987 512 699.987s-192.06-54.18-192.06-54.18-3.386-2.988-7.608-2.988c-5.04 0-9.827 3.391-9.827 10.871 0 .79.076 1.579.224 2.353 10.617 56.826 18.382 97.206 19.736 103.347 9.268 41.805 91.045 73.411 189.525 73.411h.01c98.49 0 180.267-31.606 189.535-73.411 1.364-6.136 9.114-46.49 19.736-103.317.143-.779.224-1.578.224-2.368 0-7.485-4.786-10.881-9.827-10.881zM467.659 500.477a44.255 44.255 0 1 0 88.51 0 44.255 44.255 0 1 0-88.51 0z" fill="#fff" /></svg>', "Dingding": '<svg xmlns="http://www.w3.org/2000/svg" class="icon dingding-icon" viewBox="0 0 1024 1024" ariaLabelledby="dingding"><circle cx="512" cy="512" r="512" fill="#1C9DF7" />,<path d="M760.551 442.095c0 5.178-5.178 12.945-7.767 20.713-23.302 49.192-82.85 144.988-82.85 144.988l-18.124 31.069h85.44L576.727 853.758l36.247-144.988h-67.316l23.302-95.796c-18.124 5.178-41.426 10.356-67.316 18.124 0 0-36.247 20.712-100.974-38.837 0 0-44.015-38.836-18.124-49.192 10.356-5.178 54.37-10.356 88.029-12.945 44.014-5.179 72.494-10.357 72.494-10.357s-139.81 2.59-173.468-2.589c-33.658-5.178-75.083-59.549-82.85-108.741 0 0-12.946-25.89 28.48-12.945 44.013 12.945 222.66 49.192 222.66 49.192s-235.606-72.494-251.14-90.618c-15.535-18.123-46.604-95.796-41.426-144.988 0 0 2.59-12.945 12.945-7.767 0 0 173.469 80.261 292.566 121.686 119.098 41.426 222.66 64.727 209.715 119.098z" fill="#fff" /></svg>', "Discord": '<svg xmlns="http://www.w3.org/2000/svg" class="icon discord-icon" viewBox="0 0 1024 1024" ariaLabelledby="discord"><circle cx="512" cy="512" r="512" fill="#2DAAE1" />,<path d="m422.935 240.147 5.851 8.052c-113.039 34.253-165.649 84.585-165.649 84.585s13.645-8.052 37.024-18.123c66.28-30.215 118.865-38.267 142.244-40.286 3.91 0 7.819-1.994 9.76-1.994 38.966-6.058 81.816-6.058 126.658-2.02 58.462 8.053 122.749 24.157 187.061 62.423 0 0-48.7-48.338-155.862-82.566l7.767-10.071h1.968c13.308.233 91.757 4.246 173.416 68.481 0 0 89.634 169.144 89.634 376.555 1.942-2.02-50.668 92.637-189.003 96.65 0 0-23.405-28.194-40.933-52.35 81.84-24.157 113.013-76.534 113.013-76.534a313.796 313.796 0 0 1-72.106 38.267c-31.172 14.11-60.403 22.162-89.633 28.22-60.404 12.066-114.955 8.027-161.74 0a636.81 636.81 0 0 1-91.576-28.22c-13.644-6.033-29.23-12.065-44.817-22.137-1.941-2.02-3.883-2.02-5.85-4.039-1.943 0-1.943-2.02-1.943-2.02-11.702-6.032-17.528-10.07-17.528-10.07s29.23 52.376 109.104 76.532c-19.47 24.157-40.907 54.371-40.907 54.371-138.36-4.039-190.97-98.67-190.97-98.67 0-207.41 89.633-376.555 89.633-376.555 89.634-70.5 175.384-68.481 175.384-68.481zm213.961 233.017c-35.315 0-64.727 34.512-64.727 77.672s29.412 77.672 64.727 77.672 64.727-34.512 64.727-77.672-29.412-77.672-64.727-77.672zm-233.016 0c-35.315 0-64.727 34.512-64.727 77.672s29.412 77.672 64.727 77.672 64.726-34.512 64.726-77.672-29.411-77.672-64.726-77.672z" fill="#fff" /></svg>', "Dribbble": '<svg xmlns="http://www.w3.org/2000/svg" class="icon dribbble-icon" viewBox="0 0 1024 1024" ariaLabelledby="dribbble"><circle cx="512" cy="512" r="512" fill="#DC4373" />,<path d="M716.668 302.752c-13.332 5.154-28.61 3.676-35.726-1.068-86.196-48.27-179.286-62.06-265.482-37.926C292.074 300.212 241.674 437.028 242 564.746c22.622 42.136 52.558 105.234 61.854 153.104l298.24 298.246c210.532-37.376 376.584-203.408 413.986-413.928L716.668 302.752z" fill="#C13366" />,<path d="M511.994 219.308c-161.592 0-293.058 131.31-293.058 292.696s131.466 292.684 293.058 292.684c161.598 0 293.07-131.292 293.07-292.684 0-161.386-131.472-292.696-293.07-292.696zm192.842 138.148c33.43 41.432 53.744 93.756 54.682 150.772-11.122-2.282-58.23-11.068-114.526-11.068-18.164 0-37.282.91-56.448 3.278a822.854 822.854 0 0 0-4.938-11.812c-4.972-11.692-10.326-23.29-15.874-34.72 86.642-35.696 128.436-85.238 137.104-96.45zm-192.842-92.33c62.446 0 119.528 23.2 163.126 61.412-6.902 9.416-44.332 56.202-127.876 87.768-38.67-70.688-80.996-129.22-91.07-142.812a247.13 247.13 0 0 1 55.82-6.368zm-106.352 23.99c8.536 11.758 50.928 70.918 90.592 141.036-106.448 27.982-200.976 29.806-223.79 29.806h-2.424c16.39-75.534 67.424-138.298 135.622-170.842zM264.402 512.39c0-2.038.034-4.076.1-6.102 1.48.018 3.666.018 6.5.018 30.726 0 137.382-2.538 247.288-35.154a828.402 828.402 0 0 1 18.928 39.526 232.24 232.24 0 0 0-8.234 2.482C405.236 553.126 337.216 658.936 326.75 676.232c-38.778-43.696-62.348-101.058-62.348-163.842zm247.592 247.246c-56.786 0-109.192-19.232-151.01-51.48 7.074-13.868 58.412-106.3 194.026-153.5a1.806 1.806 0 0 1 .272-.09c34.006 88.53 48.408 162.834 52.358 185.862-29.432 12.374-61.752 19.208-95.646 19.208zm140.236-43.584c-3.32-19.052-16.66-88.688-47.452-173.618 17.27-2.686 34.072-3.748 49.828-3.748 51.748 0 92.23 11.33 101.634 14.204-11.182 67.444-49.794 125.808-104.01 163.162z" fill="#F0F1F1" />,<path d="M511.994 219.308c-.382 0-.758.028-1.142.028v45.804c.38 0 .758-.018 1.142-.018 62.446 0 119.528 23.2 163.126 61.412-6.902 9.416-44.332 56.202-127.876 87.768-12.14-22.194-24.642-43.188-36.392-61.968V473.29c2.476-.706 4.954-1.41 7.434-2.144a828.402 828.402 0 0 1 18.928 39.526c-2.776.796-5.514 1.592-8.234 2.478a323.314 323.314 0 0 0-18.128 6.52v53.228a418.976 418.976 0 0 1 44.428-18.332c34.006 88.53 48.408 162.834 52.358 185.862-29.428 12.374-61.746 19.208-95.646 19.208-.382 0-.758-.024-1.142-.024v45.05c.382 0 .758.028 1.142.028 161.598 0 293.07-131.292 293.07-292.684.002-161.388-131.47-292.698-293.068-292.698zm71.614 269.316c-4.972-11.692-10.326-23.29-15.874-34.72 86.64-35.696 128.434-85.236 137.102-96.45 33.43 41.432 53.748 93.756 54.682 150.77-11.122-2.282-58.23-11.068-114.522-11.068-18.164 0-37.282.914-56.448 3.278-1.624-3.932-3.24-7.852-4.94-11.81zm68.622 227.428c-3.32-19.052-16.66-88.688-47.452-173.618 17.27-2.686 34.072-3.748 49.828-3.748 51.748 0 92.23 11.33 101.634 14.204-11.182 67.444-49.794 125.808-104.01 163.162z" fill="#D1D1D1" /></svg>', "Email": '<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024" ariaLabelledby="email"><circle cx="512" cy="512" r="512" fill="#1384FF" />,<path d="M299.372 313.572H722.93c28.945 0 52.61 21.845 52.975 48.787L511.333 500.35 246.76 362.481c.182-27.003 23.666-48.97 52.611-48.97zm-52.671 101.702l-.243 244.121c0 27.186 23.848 49.395 52.914 49.395H722.93c29.127 0 52.975-22.21 52.975-49.395V415.152L517.522 546.71a13.957 13.957 0 01-12.682 0L246.7 415.274z" fill="#fff" /></svg>', "Evernote": '<svg xmlns="http://www.w3.org/2000/svg" class="icon evernote-icon" viewBox="0 0 1024 1024" ariaLabelledby="evernote"><circle cx="512" cy="512" r="512" fill="#36D613" />,<path d="M347.671 193.259v87.51h-87.51z" fill="#595757" />,<path d="M788.047 323.645s3.65-77.491-73.84-103.02c0 0-89.479-12.867-151.41-11.91 0 0-8.595-53.23-103.33-53.23 0 0-89.556-1.244-89.892 70.526v61.671s2.848 14.991-27.833 14.991h-81.581s-34.28 5.282-34.28 72.934c0 0 3.133 120.082 41.322 200.24 0 0 9.398 34.667 58.228 46.577 0 0 95.822 25.477 123.991 21.722 0 0 58.228 22.137 62.008-111.874 0 0 3.755-19.935 6.266 11.392 0 0-1.89 68.948 57.607 72.702 0 0 45.723 12.557 73.892 10.045 0 0 37.568 2.15 37.568 64.158 0 0 13.152 71.665-34.435 71.665h-65.763s-18.149 4.428-18.149-21.877c0 0-4.997-21.878 26.305-21.878h15.534v-43.756h-43.082s-66.332-6.317-66.332 50.047v75.135s9.347 49.866 66.332 49.866h121.273s48.441.44 76.61-90.359c0-.078 48.52-182.323 22.991-435.767zM625.272 486.523c0-21.877 18.02-51.16 39.432-51.16s36.48 36.118 36.48 58.022c-28.79-7.897-45.827-9.606-75.912-6.862z" fill="#595757" /></svg>', "Facebook": '<svg xmlns="http://www.w3.org/2000/svg" class="icon facebook-icon" viewBox="0 0 1024 1024" ariaLabelledby="facebook"><circle cx="512" cy="512" r="512" fill="#3C599B" />,<path d="M372.568 413.895h59.898V355.68c0-25.67.647-65.257 19.294-89.774 19.642-25.965 46.605-43.613 92.983-43.613 75.565 0 107.384 10.778 107.384 10.778l-14.971 88.74s-24.967-7.217-48.254-7.217c-23.302 0-44.16 8.35-44.16 31.635v67.666h95.526l-6.67 86.678h-88.855V801.69H432.466V500.574h-59.898v-86.68z" fill="#fff" /></svg>', "Flipboard": '<svg xmlns="http://www.w3.org/2000/svg" class="icon flipboard-icon" viewBox="0 0 1024 1024" ariaLabelledby="flipboard"><circle cx="512" cy="512" r="512" fill="#E12828" />,<path d="M293.58 292.18h160.343v481.003H293.58V292.18z" fill="#fff" />,<path d="M453.922 292.18h320.662v160.343H453.922V292.18z" fill="#FCE9E9" />,<path d="M453.922 452.523h160.343v160.343H453.922V452.523z" fill="#F6BEBE" /></svg>', "Gitee": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024" ariaLabelledby="gitee"><circle cx="512" cy="512" r="512" fill="#C71D23" />,<path d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z" fill="#fff" /></svg>', "GitHub": '<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024" ariaLabelledby="github"><circle cx="512" cy="512" r="512" fill="#171515" />,<path d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z" fill="#fff" /></svg>', "Gitlab": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gitlab-icon" viewBox="0 0 1024 1024" ariaLabelledby="gitlab"><circle cx="512" cy="512" r="512" fill="#E8F0FF" />,<path d="m512 848.182 134.473-413.8H377.527L512 848.182z" fill="#E24329" />,<path d="m512 848.182-134.473-413.8h-188.36L512 848.182z" fill="#FC6D26" />,<path d="M189.167 434.382h188.36l-80.832-249.17c-4.202-12.854-22.247-12.854-26.45 0l-81.078 249.17z" fill="#E24329" />,<path d="m512 848.182 134.473-413.8h188.36L512 848.182z" fill="#FC6D26" />,<path d="m834.833 434.382 40.787 125.82a27.8 27.8 0 0 1-10.135 31.147L512 848.182l322.833-413.8z" fill="#FCA326" />,<path d="M834.833 434.382h-188.36l81.079-249.17c4.202-12.854 22.247-12.854 26.45 0l80.831 249.17z" fill="#E24329" /></svg>', "Gmail": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024" ariaLabelledby="gmail"><circle cx="512" cy="512" r="512" fill="#DB4437" />,<path d="M277.48 285.567h465.767v441.362H277.48V285.567z" fill="#E67C73" />,<path d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z" fill="#FFF" /></svg>', "Instagram": '<svg xmlns="http://www.w3.org/2000/svg" class="icon instagram-icon" viewBox="0 0 1024 1024" ariaLabelledby="instagram"><circle cx="512" cy="512" r="512" fill="#181818" />,<path d="M512 348.16c-88.222 0-163.84 71.417-163.84 163.84 0 88.222 71.417 163.84 163.84 163.84 88.222 0 163.84-71.417 163.84-163.84 0-88.222-75.618-163.84-163.84-163.84zm0 268.866c-58.814 0-105.026-46.212-105.026-105.026S453.186 406.974 512 406.974 617.026 453.186 617.026 512 570.814 617.026 512 617.026zM680.041 306.15c-21.005 0-37.81 16.804-37.81 37.809s16.805 37.81 37.81 37.81 37.81-16.805 37.81-37.81-16.805-37.81-37.81-37.81z" fill="#fff" />,<path d="M659.036 196.923h-16.804c-50.413-4.2-210.051-4.2-260.464 0-96.623-4.2-180.644 71.418-184.845 168.041v16.804c-4.2 50.413-4.2 210.051 0 260.464-4.2 96.623 71.418 180.644 168.041 184.845h16.804c50.413 4.2 210.051 4.2 260.464 0 96.623 4.2 180.644-71.418 184.845-168.041V381.768c4.2-96.623-71.418-180.644-168.041-184.845zM759.86 696.845c-12.604 29.407-33.609 50.412-58.815 58.814-121.83 16.805-247.86 16.805-373.891 0-29.407-12.603-50.412-33.608-58.814-58.814-12.604-63.015-16.805-126.03-12.604-184.845-4.2-63.015 0-126.03 12.604-184.845 12.603-29.407 33.608-50.412 58.814-58.814 121.83-16.805 247.86-16.805 373.891 0 29.407 12.603 50.412 33.608 58.815 58.814 12.603 63.015 16.804 126.03 12.603 184.845 4.2 63.015 0 126.03-12.603 184.845z" fill="#FFF" /></svg>', "Lines": '<svg xmlns="http://www.w3.org/2000/svg" class="icon lines-icon" viewBox="0 0 1024 1024" ariaLabelledby="lines"><circle cx="512" cy="512" r="512" fill="#00C300" />,<path d="M861.44 469.76C861.44 313.28 704 186.08 512 186.08s-349.44 127.2-349.44 283.68C162.56 608 286.88 727.52 454.88 752c11.52 2.4 26.88 7.68 30.72 17.28a71.04 71.04 0 0 1 0 31.68l-5.28 29.76c0 8.64-7.2 34.56 30.24 18.72a1104 1104 0 0 0 274.56-202.56A251.52 251.52 0 0 0 860 472.16zM375.2 562.88h-69.12a17.76 17.76 0 0 1-18.24-18.24v-139.2a17.76 17.76 0 0 1 18.24-18.24 18.24 18.24 0 0 1 18.24 18.24v120.48h50.88a18.72 18.72 0 0 1 18.24 18.72 18.24 18.24 0 0 1-18.24 18.24zm72-18.24a18.24 18.24 0 1 1-36.48 0v-139.2a18.24 18.24 0 0 1 36.48 0zm167.04 0a18.24 18.24 0 0 1-12.48 17.28H596a18.24 18.24 0 0 1-14.4-7.2l-69.6-96v85.92a18.24 18.24 0 1 1-36.48 0v-139.2A18.24 18.24 0 0 1 488 388.16h5.76a18.24 18.24 0 0 1 14.4 7.2l71.52 96v-85.92a18.24 18.24 0 1 1 36.48 0zm112.32-87.84a18.24 18.24 0 0 1 18.24 18.24 17.76 17.76 0 0 1-18.24 18.24h-50.88v32.64h50.88a18.72 18.72 0 0 1 18.24 18.72 18.24 18.24 0 0 1-18.24 18.24H656a18.24 18.24 0 0 1-18.24-18.24v-139.2A18.24 18.24 0 0 1 656 387.2h69.12a18.24 18.24 0 0 1 18.24 18.24 18.24 18.24 0 0 1-18.24 18.72h-49.44v32.64zm0 0" fill="#fff" /></svg>', "Linkedin": '<svg xmlns="http://www.w3.org/2000/svg" class="icon linkedin-icon" viewBox="0 0 1024 1024" ariaLabelledby="linkedin"><circle cx="512" cy="512" r="512" fill="#4376B1" />,<path d="M838.301 555.94v225.157h-130.54V571.03c0-52.746-18.847-88.766-66.112-88.766-36.069 0-57.496 24.25-66.959 47.732-3.436 8.391-4.322 20.045-4.322 31.814v219.277h-130.55s1.752-355.784 0-392.613h130.56v55.637c-.263.438-.633.867-.867 1.285h.866v-1.285c17.349-26.694 48.287-64.856 117.651-64.856 85.884 0 150.273 56.114 150.273 176.685zm-535.05-356.72c-44.655 0-73.87 29.314-73.87 67.826 0 37.695 28.368 67.855 72.157 67.855h.847c45.532 0 73.842-30.16 73.842-67.855-.866-38.512-28.31-67.825-72.975-67.825zM237.14 781.098h130.5V388.474h-130.5v392.623z" fill="#F1F2F2" /></svg>', "Pinterest": '<svg xmlns="http://www.w3.org/2000/svg" class="icon pinterest-icon" viewBox="0 0 1024 1024" ariaLabelledby="pinterest"><path d="M512 1023.147c282.773 0 512-228.288 512-509.888 0-281.622-229.227-509.91-512-509.91S0 231.637 0 513.26c0 281.6 229.227 509.888 512 509.888z" fill="#fff" />,<path d="M512 3.35C229.248 3.35 0 231.658 0 513.258c0 216.128 134.848 400.789 325.312 475.05-4.63-40.277-8.427-102.378 1.685-146.453 9.28-39.872 59.84-253.483 59.84-253.483s-15.168-30.634-15.168-75.541c0-70.933 41.302-123.797 92.715-123.797 43.819 0 64.896 32.725 64.896 71.765 0 43.627-27.819 109.099-42.56 169.963-12.224 50.773 25.707 92.33 75.84 92.33 91.03 0 160.981-95.68 160.981-233.344 0-122.133-88.064-207.317-214.058-207.317-145.814 0-231.36 108.693-231.36 221.163 0 43.648 16.853 90.645 37.93 116.245a15.19 15.19 0 0 1 3.371 14.699c-3.797 15.936-12.65 50.773-14.336 57.92-2.09 9.216-7.573 11.328-17.28 6.698-64.043-29.781-104.085-122.538-104.085-197.653 0-160.747 117.162-308.459 338.389-308.459 177.408 0 315.627 125.888 315.627 294.614 0 175.829-111.254 317.269-265.472 317.269-51.84 0-100.715-26.859-117.163-58.752l-32.021 121.28c-11.371 44.48-42.56 99.883-63.638 133.867A516.01 516.01 0 0 0 511.168 1024c282.752 0 512-228.31 512-509.91C1024 231.66 794.752 3.35 512 3.35z" fill="#CA242D" /></svg>', "Pocket": '<svg xmlns="http://www.w3.org/2000/svg" class="icon pocket-icon" viewBox="0 0 1024 1024" ariaLabelledby="pocket"><circle cx="512" cy="512" r="512" fill="#EE4056" />,<path d="M716.52 309.066c12.549 0 23.172 4.394 31.87 13.182 8.697 8.788 13.023 19.48 13.023 32.006v150.4c0 33.975-6.568 66.41-19.705 97.307-13.138 30.918-30.76 57.487-52.89 79.685-22.106 22.197-48.562 39.864-79.367 52.888-30.804 13.024-63.081 19.547-96.876 19.547a246.897 246.897 0 0 1-97.215-19.547c-30.805-13.046-57.306-30.668-79.504-52.888-22.198-22.198-39.865-48.767-53.003-79.663a246.311 246.311 0 0 1-19.728-97.33V354.255c0-12.321 4.44-22.945 13.319-31.847a43.489 43.489 0 0 1 31.87-13.341H716.52zM512.574 617.339c9.06 0 16.989-3.216 23.738-9.581l117.103-112.415a32.622 32.622 0 0 0 10.691-24.62c0-9.469-3.33-17.533-9.966-24.191a32.958 32.958 0 0 0-24.237-10.012c-9.06 0-16.988 3.171-23.737 9.56l-93.547 89.808-93.614-89.809a33.185 33.185 0 0 0-23.443-9.559c-9.468 0-17.532 3.33-24.19 9.967-6.66 6.682-9.967 14.722-9.967 24.236 0 9.83 3.443 18.03 10.419 24.599l117.33 112.413c6.342 6.342 14.179 9.56 23.466 9.56l-.046.044z" fill="#fff" /></svg>', "QQ": '<svg xmlns="http://www.w3.org/2000/svg" class="icon qq-icon" viewBox="0 0 1024 1024" ariaLabelledby="qq"><circle cx="512" cy="512" r="512" fill="#5EAADE" />,<path d="M729.46 627.3c-3.157-39.628-24.045-83.747-32.624-105.91l-22.084-57.047c-.702-23.73 6.312-78.322-30.511-146.61s-110.82-74.446-124.497-75.147c-13.677-.701-99.248-1.403-141.331 72.945-42.084 74.347-30.745 148.812-30.745 148.812l-23.523 57.478c-.001.002-10.962 26.223-20.43 58.135-9.469 31.914-18.938 82.064-9.469 92.234 9.47 10.17 43.837-46.643 46.993-51.903 0 0 2.456 27.18 8.943 41.383l.81 1.776.33.723.38.826.3.652.444.96.203.436a281.465 281.465 0 0 0 1.917 4.025l.189.386c.231.473.468.953.711 1.442l.146.292c6.886 13.807 18.61 33.823 37.443 50.42l.018.016-1.184.387c-10.667 3.516-31.694 11.21-40.625 19.82-1.717 1.655-2.987 3.344-3.65 5.045-5.376 13.794 4.208 15.43 20.575 16.366 16.366.934 94.923 3.04 132.564-2.221.407-.056.787-.114 1.17-.171 2.711.094 5.324.142 7.83.16l.151.002c.836.005 1.663.008 2.475.008.496 0 1.015-.002 1.542-.006l.21-.001a222.593 222.593 0 0 0 5.462-.107c.26.038.508.076.778.114 37.642 5.26 116.198 3.156 132.564 2.22 16.366-.934 25.951-2.571 20.574-16.365-4.302-11.037-34.175-21.62-45.956-25.413a141.388 141.388 0 0 0 7.958-7.645l.237-.245a142.494 142.494 0 0 0 2.53-2.702c42.435-46.643 38.928-76.101 40.682-92.935 0 0 35.775 51.553 43.488 53.306 7.713 1.754 10.169-6.31 7.012-45.94z" fill="#fff" /></svg>', "Qzone": '<svg xmlns="http://www.w3.org/2000/svg" class="icon qzone-icon" viewBox="0 0 1024 1024" ariaLabelledby="qzone"><circle cx="512" cy="512" r="512" fill="#0985DD" />,<path d="M722.38 595.24c22.486-4.056 11.345-12.424 2.156-11.346-16.685 1.72-40.43 1.925-66.562 1.284l3.029 17.79a656.641 656.641 0 0 0 61.402-7.702l-.025-.026zm68.95-174.915a5.287 5.287 0 0 0-4.493-3.645L598.42 389.29l-84.326-170.628c-1.925-3.594-7.958-3.594-9.857 0L419.885 389.29l-188.417 27.39a5.338 5.338 0 0 0-4.466 3.645 5.493 5.493 0 0 0 1.488 5.57l136.36 132.92-32.088 187.519a5.263 5.263 0 0 0 2.13 5.39c1.695 1.284 3.851 1.463 5.776.385l168.651-88.407 168.524 88.638 2.567.642 3.209-1.079c1.72-1.283 2.566-3.208 2.13-5.34l-24.591-143.648c-27.21 2.156-54.37 3.183-76.42 3.183-77.267 0-135.075-3.645-135.948-3.645a16.48 16.48 0 0 1-14.785-11.757 16.247 16.247 0 0 1 5.981-17.764l155.431-113.05c-99.959-7.906-183.873-6.418-184.721-6.418-13.502.642-25.67-3.645.642-14.375 4.518-1.694 109.2-23.72 230.362-7.445 6.673.847 12.013 5.75 13.733 12.194a16.61 16.61 0 0 1-6.263 17.302L497.204 571.598c27.826 5.802 100.37 12.014 160.745 13.502l-4.519-26.312 136.308-132.97a5.338 5.338 0 0 0 1.54-5.544l.051.051z" fill="#fff" /></svg>', "Reddit": '<svg xmlns="http://www.w3.org/2000/svg" class="icon reddit-icon" viewBox="0 0 1024 1024" ariaLabelledby="reddit"><circle cx="512" cy="512" r="512" fill="#EB5528" />,<path d="M617.199 680.55c5.666 5.974 5.666 11.742 0 17.34-21.845 23.143-56.9 34.714-105.199 34.714s-83.354-11.571-105.199-34.714c-5.666-5.598-5.666-11.366 0-17.34a10.445 10.445 0 0 1 7.919-3.379c3.174 0 5.803 1.127 7.919 3.38 16.93 18.295 46.728 27.408 89.361 27.408 42.325 0 72.09-9.113 89.361-27.409a10.445 10.445 0 0 1 7.919-3.379c3.174 0 5.803 1.127 7.919 3.38zm-176.06-136.635c9.182 9.694 13.756 21.47 13.756 35.294 0 13.79-4.574 25.565-13.756 35.26a44.134 44.134 0 0 1-33.28 14.54c-13.073 0-24.234-4.847-33.587-14.54a49.015 49.015 0 0 1-13.995-35.26c0-14.2 4.642-26.147 13.995-35.84 9.353-9.728 20.514-14.575 33.587-14.575 13.04 0 24.132 5.051 33.28 15.12zm222.584 35.294c0 13.79-4.642 25.565-13.995 35.26a44.954 44.954 0 0 1-33.587 14.54c-13.04 0-24.132-4.847-33.28-14.54a49.493 49.493 0 0 1-13.756-35.26c0-13.824 4.574-25.669 13.756-35.567 9.148-9.9 20.24-14.848 33.28-14.848 13.073 0 24.234 4.847 33.587 14.575 9.353 9.693 13.995 21.64 13.995 35.84zM796.433 512c0-18.295-6.144-33.963-18.5-47.036a59.494 59.494 0 0 0-44.92-19.592c-17.647 0-32.768 6.724-45.465 20.138-45.841-33.587-100.66-51.507-164.455-53.725l33.314-158.482 105.746 25.19c0 13.825 4.573 25.6 13.755 35.295 9.148 9.694 20.241 14.54 33.314 14.54 13.04 0 24.235-4.915 33.553-14.813 9.353-9.899 13.995-21.743 13.995-35.567s-4.642-25.669-13.995-35.567a44.578 44.578 0 0 0-33.553-14.814c-19.046 0-33.143 9.318-42.325 27.99L550.06 228.112c-6.69-1.877-11.094 1.126-13.21 8.977l-36.488 174.695c-63.454 2.594-117.897 20.718-163.363 54.272a59.187 59.187 0 0 0-46.011-20.685c-17.613 0-32.598 6.52-44.92 19.592a66.082 66.082 0 0 0-18.5 47.036c0 13.073 3.243 25.02 9.762 35.84 6.52 10.82 15.258 19.046 26.18 24.644a152.303 152.303 0 0 0-3.174 31.335c0 53.009 24.678 98.372 74.035 136.09 49.323 37.682 108.715 56.524 178.176 56.524 69.769 0 129.365-18.842 178.688-56.525 49.357-37.717 74.001-83.08 74.001-136.09 0-11.946-1.229-22.561-3.686-31.914 10.581-5.598 19.046-13.722 25.395-24.337 6.315-10.65 9.49-22.528 9.49-35.567z" fill="#fff" /></svg>', "Rss": '<svg xmlns="http://www.w3.org/2000/svg" class="icon rss-icon" viewBox="0 0 1024 1024" ariaLabelledby="rss"><circle cx="512" cy="512" r="512" fill="#FD9B00" />,<path d="M687.981 740.39c0-225.92-183.617-409.777-409.21-409.777v-97.205c279.353 0 506.617 227.506 506.617 506.98H687.98zm-74.841 0h-97.538c0-63.567-24.688-123.245-69.43-167.993-44.762-44.856-104.24-69.556-167.54-69.556v-97.176c184.44 0 334.508 150.046 334.508 334.725zM346.038 605.166c37.35 0 67.514 30.357 67.514 67.39 0 37.146-30.163 67.177-67.514 67.177-37.219 0-67.458-30.03-67.458-67.176 0-37.034 30.24-67.391 67.458-67.391z" fill="#fff" /></svg>', "Steam": '<svg xmlns="http://www.w3.org/2000/svg" class="icon steam-icon" viewBox="0 0 1024 1024" ariaLabelledby="steam"><circle cx="512" cy="512" r="488" fill="#fff" />,<path d="M1008 512c0 274-222.4 496-496.8 496-227.6 0-419.2-152.6-478-360.8l190.4 78.6c12.8 64.2 69.8 112.8 137.8 112.8 78.4 0 143.8-64.8 140.4-147l169-120.4c104.2 2.6 191.6-81.8 191.6-187 0-103.2-84-187-187.4-187s-187.4 84-187.4 187v2.4L369.2 558c-31-1.8-61.4 6.8-87 24.2L16 472.2C36.4 216.8 250.2 16 511.2 16 785.6 16 1008 238 1008 512zM327.4 768.6l-61-25.2a105.58 105.58 0 0 0 54.4 51.6c53.8 22.4 115.6-3.2 138-56.8 10.8-26 11-54.6.2-80.6-10.8-26-31-46.4-57-57.2-25.8-10.8-53.4-10.4-77.8-1.2l63 26c39.6 16.4 58.4 61.8 41.8 101.4-16.6 39.8-62 58.4-101.6 42zM675 508.8c-68.8 0-124.8-56-124.8-124.6s56-124.6 124.8-124.6 124.8 56 124.8 124.6S744 508.8 675 508.8zm.2-31.2c51.8 0 93.8-42 93.8-93.6 0-51.8-42-93.6-93.8-93.6s-93.8 42-93.8 93.6c.2 51.6 42.2 93.6 93.8 93.6z" fill="#13227a" /></svg>', "Twitter": '<svg xmlns="http://www.w3.org/2000/svg" class="icon twitter-icon" viewBox="0 0 1024 1024" ariaLabelledby="twitter"><circle cx="512" cy="512" r="512" fill="#5EAADE" />,<path d="M749.737 364.631c-17.594 7.805-36.513 13.088-56.371 15.459 20.269-12.148 35.836-31.387 43.156-54.312A196.233 196.233 0 0 1 674.2 349.6c-17.894-19.083-43.406-30.997-71.636-30.997-54.2 0-98.137 43.944-98.137 98.157 0 7.695.861 15.19 2.544 22.373-81.57-4.092-153.876-43.174-202.284-102.558-8.443 14.498-13.285 31.356-13.285 49.348 0 34.05 17.326 64.096 43.656 81.697a97.69 97.69 0 0 1-44.447-12.277c-.01.41-.01.82-.01 1.24 0 47.558 33.822 87.23 78.72 96.249a98.285 98.285 0 0 1-25.852 3.448 97.491 97.491 0 0 1-18.465-1.768c12.483 39.002 48.725 67.38 91.672 68.17-33.582 26.334-75.897 42.024-121.884 42.024-7.924 0-15.736-.46-23.408-1.37 43.434 27.844 95.014 44.104 150.443 44.104 180.505 0 279.221-149.576 279.221-279.294 0-4.263-.09-8.494-.278-12.708 19.178-13.835 35.813-31.115 48.967-50.807z" fill="#fff" /></svg>', "Wechat": '<svg xmlns="http://www.w3.org/2000/svg" class="icon wechat-icon" viewBox="0 0 1024 1024" ariaLabelledby="wechat"><circle cx="512" cy="512" r="512" fill="#1AC88E" />,<path d="M827.551 578.742a176.583 176.583 0 0 0-185.685-158.379 172.942 172.942 0 0 0-186.3 158.379 172.942 172.942 0 0 0 185.686 158.379 282.169 282.169 0 0 0 65.536-10.923l60.689 32.768-16.384-54.613a166.275 166.275 0 0 0 76.458-125.611zm-245.76-27.307a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.307 21.845 24.872 24.872 0 0 1-27.921 21.845h.614zm121.356 0a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.306 21.845 24.872 24.872 0 0 1-28.512 21.845h1.206z" fill="#fff" />,<path d="M623.662 400.953h21.23A222.709 222.709 0 0 0 419.772 245.6a208.145 208.145 0 0 0-223.323 189.94 182.044 182.044 0 0 0 89.201 150.483l-22.436 67.356 78.279-39.435a389.575 389.575 0 0 0 78.279 10.923h20.616a163.226 163.226 0 0 1-6.667-46.718 182.044 182.044 0 0 1 189.94-177.197zm-121.379-60.69a27.921 27.921 0 1 1 0 55.843 31.562 31.562 0 0 1-33.36-27.921 31.562 31.562 0 0 1 34.59-27.921h-1.23zM346.34 396.107a31.562 31.562 0 0 1-33.383-27.921 31.562 31.562 0 0 1 33.383-27.921 27.921 27.921 0 1 1 0 55.842z" fill="#fff" /></svg>', "Weibo": '<svg xmlns="http://www.w3.org/2000/svg" class="icon weibo-icon" viewBox="0 0 1024 1024" ariaLabelledby="weibo"><circle cx="512" cy="512" r="512" fill="#E6162D" />,<path d="M745.314 454.802c9.652 0 17.869-7.258 19.239-16.728a8.39 8.39 0 0 0 .261-2.12C779.445 302.233 657.02 325.25 657.02 325.25c-10.869 0-19.567 8.94-19.567 20.089 0 10.97 8.698 19.907 19.567 19.907 87.95-19.732 68.54 69.649 68.54 69.649-.004 11.06 8.842 19.908 19.754 19.908z" fill="#fff" />,<path d="M731.054 221.409c-42.342-10.077-85.862-1.393-98.055.981-.938.09-1.829.994-2.697 1.17-.415.088-.673.532-.673.532-12.045 3.457-20.828 14.77-20.828 28.14 0 15.932 12.694 29.034 28.564 29.034 0 0 15.39-2.097 25.846-6.252 10.364-4.246 98.012-3.16 141.576 71.17 23.734 54.247 10.428 90.553 8.778 96.387 0 0-5.653 14.095-5.653 27.973 0 16.024 12.694 26.083 28.433 26.083 13.169 0 24.211-1.821 27.452-24.447h.172c46.768-158.386-57.183-232.81-132.915-250.771zm-44.083 282.78c-28.28-5.579-14.519-21.062-14.519-21.062s27.67-46.38-5.482-80.099c-41.104-41.761-140.966 5.314-140.966 5.314-38.144 12.032-28.02-5.49-22.629-35.31 0-35.13-11.844-94.596-113.445-59.47-101.49 35.309-188.654 159.03-188.654 159.03-60.603 82.207-52.56 145.747-52.56 145.747 15.128 140.268 161.749 178.772 275.782 187.89 119.967 9.564 281.905-42.045 330.988-148.064 49.105-106.193-40.126-148.22-68.515-153.975zM433.387 766.675c-119.124 5.658-215.394-55.053-215.394-135.851 0-80.887 96.27-145.748 215.394-151.328 119.162-5.58 215.634 44.333 215.634 125.052.002 80.79-96.475 156.626-215.634 162.127z" fill="#fff" />,<path d="M409.603 532.773c-119.77 14.249-105.943 128.31-105.943 128.31s-1.22 36.117 32.126 54.513c70.084 38.593 142.248 15.224 178.723-32.634 36.474-47.888 15.086-164.346-104.906-150.189zM379.39 692.856c-22.343 2.665-40.385-10.437-40.385-29.463 0-18.94 16.02-38.768 38.387-41.143 25.694-2.485 42.431 12.56 42.431 31.588-.003 18.936-18.128 36.449-40.433 39.018zm70.626-61.146c-7.59 5.754-16.893 4.958-20.892-1.948-4.175-6.726-2.607-17.52 5.046-23.19 8.863-6.714 18.105-4.779 22.106 1.958 4.02 6.893 1.153 17.246-6.26 23.18z" fill="#fff" /></svg>', "Whatsapp": '<svg xmlns="http://www.w3.org/2000/svg" class="icon whatsapp-icon" viewBox="0 0 1024 1024" ariaLabelledby="whatsapp"><circle cx="512" cy="512" r="512" fill="#31B84C" />,<path d="m192.021 832 45.227-164.33a315.413 315.413 0 0 1-42.539-158.529C194.731 334.251 337.707 192 513.344 192c84.587-.213 165.76 33.28 225.387 93.013A314.453 314.453 0 0 1 832 509.376c-.085 174.848-143.04 317.141-318.656 317.141h-.15a319.61 319.61 0 0 1-152.277-38.613L192 832h.021zm241.686-455.467c-6.443-15.445-13.014-13.354-17.92-13.61-4.63-.214-9.942-.256-15.254-.256a29.227 29.227 0 0 0-21.226 9.898c-7.296 7.958-27.84 27.136-27.84 66.134s28.501 76.672 32.49 81.962c3.968 5.291 56.15 85.334 136 119.638 19.008 8.17 33.814 13.056 45.398 16.704 19.072 6.037 36.437 5.184 50.133 3.157 15.296-2.283 47.125-19.2 53.76-37.675 6.613-18.56 6.613-34.389 4.65-37.717-1.983-3.264-7.295-5.27-15.274-9.237-7.957-3.947-47.125-23.126-54.4-25.771-7.296-2.667-12.587-3.968-17.92 3.947-5.312 7.936-20.565 25.792-25.195 31.061-4.65 5.312-9.301 5.973-17.258 2.005-7.979-3.968-33.622-12.33-64-39.338-23.68-20.992-39.68-46.955-44.331-54.912-4.65-7.915-.47-12.203 3.52-16.15 3.563-3.541 7.936-9.258 11.904-13.866 3.99-4.651 5.333-7.958 7.979-13.227 2.645-5.29 1.322-9.92-.64-13.888-2.006-3.968-17.92-42.987-24.555-58.859h-.021z" fill="#fff" /></svg>', "Youtube": '<svg xmlns="http://www.w3.org/2000/svg" class="icon youtube-icon" viewBox="0 0 1024 1024" ariaLabelledby="youtube"><circle cx="512" cy="512" r="512" fill="#DD1829" />,<path d="M800.305 372.2c-12.805-42.429-22.873-65.942-65.303-71.064 0 0-113.644-5.761-226.64-5.761-111.716 0-222.797 5.761-222.797 5.761-44.992 5.122-55.7 29.915-67.223 71.065 0 0-11.524 65.527-11.524 131.886 0 68.066 11.524 137.008 11.524 137.008 8.963 39.87 27.354 65.943 67.223 71.065 0 0 123.292 7.682 240.724 7.682 106.78 0 208.714-7.682 208.714-7.682 39.87-7.682 53.78-28.635 65.303-71.065 0 0 11.523-63.022 11.523-128.045 0-69.288-11.524-140.85-11.524-140.85zM448.82 619.97V393.33l174.781 113.32L448.82 619.97z" fill="#fff" /></svg>', "Zhihu": '<svg xmlns="http://www.w3.org/2000/svg" class="icon zhihu-icon" viewBox="0 0 1024 1024" ariaLabelledby="zhihu"><circle cx="512" cy="512" r="512" fill="#006CE2" />,<path d="M513.65 491.261H411.551c1.615-16.154 5.815-60.095 5.815-84.973 0-24.88-.323-60.742-.323-60.742h102.744V329.39c0-21.647-9.37-31.34-17.124-31.34h-178.67s5.169-17.77 10.015-36.186c4.846-18.417 15.832-44.264 15.832-44.264-63.003 4.2-67.958 50.941-81.743 92.729-13.787 41.785-24.556 62.356-44.586 107.912 27.786 0 55.249-13.57 66.879-32.309 11.631-18.74 16.908-40.71 16.908-40.71h62.035v59.019c0 21.107-3.878 87.45-3.878 87.45H254.742c-19.386 0-29.724 48.894-29.724 48.894h133.76c-8.4 75.82-26.493 106.191-51.91 152.716-25.418 46.525-92.728 99.406-92.728 99.406 41.033 11.63 86.589-3.555 105.974-21.972 19.386-18.417 35.863-49.756 47.817-72.838 11.954-23.081 21.972-65.124 21.972-65.124L498.462 766.86s4.846-24.233 6.461-39.418c1.616-15.186-.755-26.385-4.63-35.433-3.878-9.046-15.509-21.54-31.018-39.634-15.507-18.094-48.034-52.879-48.034-52.879s-15.832 11.63-28.108 21.001c9.046-21.97 16.262-79.695 16.262-79.695h122.343v-20.249c.003-17.66-7.319-29.29-18.089-29.29zm287.337-200.747h-234.35a4.308 4.308 0 0 0-4.309 4.308v435.099a4.308 4.308 0 0 0 4.308 4.308h40.226l14.7 50.402 81.096-50.402h98.328a4.308 4.308 0 0 0 4.308-4.308v-435.1a4.308 4.308 0 0 0-4.308-4.308zM755.97 684.47h-52.343l-61.548 39.095-10.823-39.095h-18.738V338.116H755.97v346.355z" fill="#fff" /></svg>' };
var socialMedia = "";
var SocialMedia = vue.defineComponent({
  name: "SocialMedia",
  setup() {
    const frontmatter = usePageFrontmatter();
    const blogOptions = useBlogOptions();
    const isPure = usePure();
    const mediaLinks = vue.computed(() => {
      const { socialMedia: socialMedia2 } = frontmatter.value;
      const config = socialMedia2 === false ? false : blogOptions.value.medias || false;
      if (config)
        return Object.entries(config).map(([media, url]) => ({
          name: media,
          icon: icons[media],
          url
        }));
      return [];
    });
    return () => mediaLinks.value.length ? vue.h("div", { class: "social-media-wrapper" }, mediaLinks.value.map(({ name, icon, url }) => vue.h("a", __spreadProps(__spreadValues({
      class: "social-media",
      href: url,
      rel: "noopener noreferrer",
      target: "_blank",
      ariaLabel: name
    }, isPure.value ? {} : { "data-balloon-pos": "up" }), {
      innerHTML: icon
    })))) : null;
  }
});
var bloggerInfo = "";
var BloggerInfo = vue.defineComponent({
  name: "BloggerInfo",
  setup() {
    const blogOptions = useBlogOptions();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const tagMap = useTagMap();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const bloggerName = vue.computed(() => {
      var _a;
      return blogOptions.value.name || ((_a = S(themeLocale.value.author)[0]) === null || _a === void 0 ? void 0 : _a.name) || siteLocale.value.title;
    });
    const bloggerAvatar = vue.computed(() => blogOptions.value.avatar || themeLocale.value.logo);
    const locale = vue.computed(() => themeLocale.value.blogLocales);
    const intro = vue.computed(() => blogOptions.value.intro);
    return () => vue.h("div", {
      class: "blogger-info",
      vocab: "https://schema.org/",
      typeof: "Person"
    }, [
      vue.h("div", __spreadValues({
        class: "blogger"
      }, intro.value ? {
        style: { cursor: "pointer" },
        ariaLabel: locale.value.intro,
        "data-balloon-pos": "down",
        role: "navigation",
        onClick: () => navigate(intro.value)
      } : {}), [
        bloggerAvatar.value ? vue.h("img", {
          class: [
            "blogger-avatar",
            {
              round: blogOptions.value.roundAvatar
            }
          ],
          src: withBase$1(bloggerAvatar.value),
          property: "image",
          alt: "Blogger Avatar"
        }) : null,
        bloggerName.value ? vue.h("div", { class: "blogger-name", property: "name" }, bloggerName.value) : null,
        blogOptions.value.description ? vue.h("div", {
          class: "blogger-description",
          innerHTML: blogOptions.value.description
        }) : null,
        intro.value ? vue.h("meta", { property: "url", content: withBase$1(intro.value) }) : null
      ]),
      vue.h("div", { class: "num-wrapper" }, [
        vue.h("div", { onClick: () => navigate(articles.value.path) }, [
          vue.h("div", { class: "num" }, articles.value.items.length),
          vue.h("div", locale.value.article)
        ]),
        vue.h("div", { onClick: () => navigate(categoryMap2.value.path) }, [
          vue.h("div", { class: "num" }, Object.keys(categoryMap2.value.map).length),
          vue.h("div", locale.value.category)
        ]),
        vue.h("div", { onClick: () => navigate(tagMap.value.path) }, [
          vue.h("div", { class: "num" }, Object.keys(tagMap.value.map).length),
          vue.h("div", locale.value.tag)
        ]),
        vue.h("div", { onClick: () => navigate(timelines.value.path) }, [
          vue.h("div", { class: "num" }, timelines.value.items.length),
          vue.h("div", locale.value.timeline)
        ])
      ]),
      vue.h(SocialMedia)
    ]);
  }
});
const CategoryIcon = () => vue.h(T$1, { name: "category" }, () => vue.h("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon.displayName = "CategoryIcon";
const TagIcon = () => vue.h(T$1, { name: "tag" }, () => vue.h("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon.displayName = "TagIcon";
const TimelineIcon = () => vue.h(T$1, { name: "timeline" }, () => vue.h("path", {
  d: "M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"
}));
TimelineIcon.displayName = "TimelineIcon";
const LockIcon = () => vue.h(T$1, { name: "lock" }, () => vue.h("path", {
  d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"
}));
LockIcon.displayName = "LockIcon";
const SlideIcon = () => vue.h(T$1, { name: "slides" }, () => vue.h("path", {
  d: "M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"
}));
SlideIcon.displayName = "SlideIcon";
const StickyIcon = () => vue.h(T$1, { name: "sticky" }, () => [
  vue.h("path", {
    d: "M849.92 849.92 174.08 174.08C112.64 112.64 153.6 0 245.76 0H921.6C983.04 0 1024 40.96 1024 102.4v675.84c0 92.16-112.64 133.12-174.08 71.68z"
  })
]);
StickyIcon.displayName = "StickyIcon";
const ArticleIcon = () => vue.h(T$1, { name: "article" }, () => vue.h("path", {
  d: "M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"
}));
ArticleIcon.displayName = "ArticleIcon";
const BookIcon = () => vue.h(T$1, { name: "book" }, () => vue.h("path", {
  d: "M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"
}));
BookIcon.displayName = "BookIcon";
const LinkIcon = () => vue.h(T$1, { name: "link" }, () => vue.h("path", {
  d: "M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"
}));
LinkIcon.displayName = "LinkIcon";
const ProjectIcon = () => vue.h(T$1, { name: "project" }, () => vue.h("path", {
  d: "M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"
}));
ProjectIcon.displayName = "ProjectIcon";
const FriendIcon = () => vue.h(T$1, { name: "friend" }, () => vue.h("path", {
  d: "M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"
}));
FriendIcon.displayName = "FriendIcon";
const SlideDownIcon = () => vue.h(T$1, { name: "slide-down" }, () => vue.h("path", {
  d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"
}));
SlideDownIcon.displayName = "SlideDownIcon";
var empty_icon = "";
const EmptyIcon = vue.defineComponent({
  name: "EmptyIcon",
  setup() {
    return () => vue.h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      class: "empty-icon",
      viewBox: "0 0 1024 1024",
      innerHTML: '<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'
    });
  }
});
var articleItem = "";
var ArticleItem = vue.defineComponent({
  name: "ArticleItem",
  props: {
    info: {
      type: Object,
      required: true
    },
    path: { type: String, required: true }
  },
  setup(props) {
    const info = vue.toRef(props, "info");
    const { getPathEncryptStatus } = usePathEncrypt();
    const isEncrypted = vue.computed(() => getPathEncryptStatus(props.path));
    const articleInfo2 = useArticleInfo(info);
    return () => vue.h("article", {
      class: "article",
      vocab: "https://schema.org/",
      typeof: "Article"
    }, [
      info.value.sticky ? vue.h(StickyIcon) : null,
      vue.h("header", { class: "title" }, vue.h(vueRouter.RouterLink, {
        to: props.path
      }, () => [
        isEncrypted.value ? vue.h(LockIcon) : null,
        info.value.type === "slide" ? vue.h(SlideIcon) : null,
        vue.h("span", { property: "headline" }, info.value.title),
        info.value.cover ? vue.h("meta", {
          property: "image",
          content: withBase$1(info.value.cover)
        }) : null
      ])),
      info.value.excerpt ? vue.h("div", { class: "excerpt", innerHTML: info.value.excerpt }) : null,
      vue.h("hr", { class: "hr" }),
      vue.h(vue.resolveComponent("ArticleInfo"), articleInfo2)
    ]);
  }
});
var articleList = "";
var ArticleList = vue.defineComponent({
  name: "ArticleList",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const blogOptions = useBlogOptions();
    const currentPage = vue.ref(1);
    const articlePerPage = vue.computed(() => blogOptions.value.articlePerPage || 10);
    const currentArticles = vue.computed(() => props.items.slice((currentPage.value - 1) * articlePerPage.value, currentPage.value * articlePerPage.value));
    const updatePage = (page2) => {
      currentPage.value = page2;
      const query = __spreadValues({}, route.query);
      if (query.page === page2.toString() || page2 === 1 && !query.page)
        return;
      if (page2 === 1)
        delete query.page;
      else
        query.page = page2.toString();
      void router.push({ path: route.path, query });
    };
    vue.watch(currentPage, () => {
      const distance = document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
      setTimeout(() => {
        window.scrollTo(0, distance);
      }, 100);
    });
    vue.onMounted(() => {
      const { page: page2 } = route.query;
      updatePage(page2 ? Number(page2) : 1);
    });
    return () => vue.h("div", { id: "article-list", class: "article-wrapper" }, currentArticles.value.length ? [
      ...currentArticles.value.map(({ info, path }, index2) => vue.h(DropTransition, { delay: index2 * 0.04 }, () => vue.h(ArticleItem, { key: path, info, path }))),
      vue.h(vue.resolveComponent("Pagination"), {
        currentPage: currentPage.value,
        perPage: articlePerPage.value,
        total: props.items.length,
        onUpdateCurrentPage: updatePage
      })
    ] : vue.h(EmptyIcon));
  }
});
var defaultHeroImagePath = "/hope-demo/assets/hero.197a9d2d.jpg";
var blogHero = "";
var BlogHero = vue.defineComponent({
  name: "BlogHero",
  setup() {
    const title = usePageHeadTitle();
    const frontmatter = usePageFrontmatter();
    const hero = vue.ref(null);
    const heroImage = vue.computed(() => frontmatter.value.heroImage || null);
    const isFullScreen = vue.computed(() => frontmatter.value.heroFullScreen || false);
    const heroImageStyle = vue.computed(() => {
      const defaultStyle = {
        maxHeight: "180px",
        margin: frontmatter.value.showTitle === false ? "6rem auto 1.5rem" : "1rem auto"
      };
      return __spreadValues(__spreadValues({}, defaultStyle), frontmatter.value.heroImageStyle);
    });
    const bgImage = vue.computed(() => frontmatter.value.bgImage ? withBase$1(frontmatter.value.bgImage) : defaultHeroImagePath);
    const bgImageStyle = vue.computed(() => {
      const defaultStyle = {
        height: "350px",
        textAlign: "center",
        overflow: "hidden"
      };
      return __spreadValues(__spreadValues({}, defaultStyle), frontmatter.value.bgImageStyle);
    });
    return () => frontmatter.value.hero !== false ? vue.h("div", {
      ref: hero,
      class: ["blog-hero", { fullscreen: isFullScreen.value }],
      style: bgImageStyle.value
    }, [
      vue.h("div", {
        class: "mask",
        style: {
          background: `url(${bgImage.value}) center/cover no-repeat`
        }
      }),
      vue.h(DropTransition, { delay: 0.04 }, () => heroImage.value ? vue.h("img", {
        class: "hero-logo",
        style: heroImageStyle.value,
        src: withBase$1(heroImage.value),
        alt: frontmatter.value.heroAlt || "hero image"
      }) : null),
      vue.h(DropTransition, { delay: 0.08 }, () => frontmatter.value.showTitle !== false ? vue.h("h1", frontmatter.value.heroText || title.value) : null),
      vue.h(DropTransition, { delay: 0.12 }, () => frontmatter.value.tagline ? vue.h("p", {
        class: "description",
        innerHTML: frontmatter.value.tagline
      }) : null),
      isFullScreen.value ? vue.h("button", {
        class: "slide-down-button",
        onClick: () => {
          window.scrollTo({
            top: hero.value.clientHeight,
            behavior: "smooth"
          });
        }
      }, [vue.h(SlideDownIcon), vue.h(SlideDownIcon)]) : null
    ]) : null;
  }
});
var categoryList = "";
var CategoryList = vue.defineComponent({
  name: "CategoryList",
  setup() {
    const route = vueRouter.useRoute();
    const categoryMap2 = useCategoryMap();
    return () => vue.h("ul", { class: "category-list-wrapper" }, Object.entries(categoryMap2.value.map).map(([category2, { path, items }]) => vue.h("li", {
      class: [
        "category",
        `category${U(category2, 9)}`,
        { active: path === route.path }
      ]
    }, vue.h(vueRouter.RouterLink, { to: path }, () => [
      s$4(category2),
      vue.h("span", { class: "category-num" }, items.length)
    ]))));
  }
});
var tagList = "";
var TagList = vue.defineComponent({
  name: "TagList",
  setup() {
    const frontmatter = usePageFrontmatter();
    const tagMap = useTagMap();
    const tagList2 = vue.computed(() => Object.entries(tagMap.value.map).map(([name, { path }]) => ({
      name,
      path
    })));
    const isActive = (name) => {
      var _a;
      return name === ((_a = frontmatter.value.blog) === null || _a === void 0 ? void 0 : _a.name);
    };
    return () => vue.h("ul", { class: "tag-list-wrapper" }, tagList2.value.map(({ name, path }) => vue.h("li", {
      class: [
        "tag",
        `tag${U(name, 9)}`,
        { active: isActive(name) }
      ]
    }, vue.h(vueRouter.RouterLink, { to: path }, () => vue.h("div", { class: "tag-name" }, name)))));
  }
});
var timelineList = "";
var TimelineList = vue.defineComponent({
  name: "TimelineList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const hint = vue.computed(() => themeLocale.value.blogLocales.timeline);
    return () => vue.h("div", { class: "timeline-list-wrapper" }, [
      vue.h("div", {
        class: "timeline-list-title",
        onClick: () => navigate(timelines.value.path)
      }, [
        vue.h(TimelineIcon),
        vue.h("span", { class: "num" }, timelines.value.items.length),
        hint.value
      ]),
      vue.h("hr"),
      vue.h("div", { class: "timeline-content" }, vue.h("ul", { class: "timeline-list" }, timelines.value.config.map(({ year, items }, index2) => vue.h(DropTransition, { delay: 0.08 * (index2 + 1) }, () => vue.h("li", [
        vue.h("h3", { class: "timeline-year" }, year),
        vue.h("ul", { class: "timeline-year-wrapper" }, items.map(({ date, info, path }) => vue.h("li", { class: "timeline-item" }, [
          vue.h("span", { class: "timeline-date" }, date),
          vue.h(vueRouter.RouterLink, {
            class: "timeline-title",
            to: path
          }, () => info.title)
        ])))
      ])))))
    ]);
  }
});
var infoList = "";
var InfoList = vue.defineComponent({
  name: "InfoList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const categoryNumber = vue.computed(() => Object.keys(categoryMap2.value.map).length);
    const stars = useStars();
    const tagMap = useTagMap();
    const tagNumber = vue.computed(() => Object.keys(tagMap.value.map).length);
    const navigate = useNavigate();
    const active = vue.ref("article");
    const locale = vue.computed(() => themeLocale.value.blogLocales);
    const buttons = [
      ["article", ArticleIcon],
      ["category", CategoryIcon],
      ["tag", TagIcon],
      ["timeline", TimelineIcon]
    ];
    return () => vue.h("div", { class: "blog-info-list" }, [
      vue.h("div", { class: "blog-type-wrapper" }, buttons.map(([key, icon]) => vue.h("button", {
        class: "blog-type-button",
        onClick: () => {
          active.value = key;
        }
      }, vue.h("div", {
        class: ["icon-wapper", { active: active.value === key }],
        ariaLabel: locale.value[key],
        "data-balloon-pos": "up"
      }, vue.h(icon))))),
      active.value === "article" ? vue.h(DropTransition, () => [
        vue.h("div", { class: "sticky-article-wrapper" }, [
          vue.h("div", {
            class: "title",
            onClick: () => navigate(articles.value.path)
          }, [
            vue.h(ArticleIcon),
            vue.h("span", { class: "num" }, articles.value.items.length),
            locale.value.article
          ]),
          vue.h("hr"),
          vue.h("ul", { class: "sticky-article-list" }, stars.value.items.map(({ info, path }, index2) => vue.h(DropTransition, { delay: 0.08 * (index2 + 1) }, () => vue.h("li", {
            class: "sticky-article",
            onClick: () => navigate(path)
          }, info.title))))
        ])
      ]) : null,
      active.value === "category" ? vue.h(DropTransition, () => [
        vue.h("div", { class: "category-wrapper" }, [
          categoryNumber.value ? vue.h("div", {
            class: "title",
            onClick: () => navigate(categoryMap2.value.path)
          }, [
            vue.h(CategoryIcon),
            vue.h("span", { class: "num" }, categoryNumber.value),
            locale.value.category
          ]) : null,
          vue.h("hr"),
          vue.h(DropTransition, { delay: 0.04 }, () => vue.h(CategoryList))
        ])
      ]) : null,
      active.value === "tag" ? vue.h(DropTransition, () => [
        vue.h("div", { class: "tag-wrapper" }, [
          tagNumber.value ? vue.h("div", {
            class: "title",
            onClick: () => navigate(tagMap.value.path)
          }, [
            vue.h(TagIcon),
            vue.h("span", { class: "num" }, tagNumber.value),
            locale.value.tag
          ]) : null,
          vue.h("hr"),
          vue.h(DropTransition, { delay: 0.04 }, () => vue.h(TagList))
        ])
      ]) : null,
      active.value === "timeline" ? vue.h(DropTransition, () => vue.h(TimelineList)) : null
    ]);
  }
});
var infoPanel = "";
var InfoPanel = vue.defineComponent({
  name: "InfoPanel",
  setup() {
    return () => vue.h("aside", { class: "blog-info-wrapper" }, [
      vue.h(DropTransition, () => vue.h(BloggerInfo)),
      vue.h(DropTransition, { delay: 0.04 }, () => vue.h(InfoList))
    ]);
  }
});
var projectPanel = "";
const AVAILABLE_PROJECT_TYPES = [
  "link",
  "article",
  "book",
  "project",
  "friend"
];
var ProjectPanel = vue.defineComponent({
  name: "ProjectPanel",
  components: { ArticleIcon, BookIcon, FriendIcon, LinkIcon, ProjectIcon },
  setup() {
    const frontmatter = usePageFrontmatter();
    const iconPrefix = useIconPrefix();
    const pure = usePure();
    const navigate = useNavigate();
    const renderIcon2 = (icon = "", alt = "icon") => {
      if (AVAILABLE_PROJECT_TYPES.includes(icon))
        return vue.h(vue.resolveComponent(`${icon}-icon`));
      if (icon.match(/^https?:\/\//))
        return vue.h("img", { src: icon, alt, class: "image" });
      if (icon.startsWith("/"))
        return vue.h("img", { src: withBase$1(icon), alt, class: "image" });
      return vue.h("span", { class: ["icon", `${iconPrefix.value}${icon}`] });
    };
    return () => {
      var _a;
      return ((_a = frontmatter.value.projects) === null || _a === void 0 ? void 0 : _a.length) ? vue.h("div", { class: "project-panel" }, frontmatter.value.projects.map(({ icon, link, name, desc }, index2) => vue.h("div", {
        class: [
          "project",
          { [`project${index2 % 9}`]: !pure.value }
        ],
        onClick: () => navigate(link)
      }, [
        renderIcon2(icon, name),
        vue.h("div", { class: "name" }, name),
        vue.h("div", { class: "desc" }, desc)
      ]))) : null;
    };
  }
});
var home = "";
var BlogHome = vue.defineComponent({
  name: "BlogHome",
  setup() {
    const articles = useArticles();
    return () => vue.h("div", { class: "page blog" }, [
      vue.h(BlogHero),
      vue.h("div", { class: "blog-page-wrapper" }, [
        vue.h("main", { class: "blog-home", id: "main-content" }, [
          vue.h(DropTransition, { delay: 0.16 }, () => vue.h(ProjectPanel)),
          vue.h(DropTransition, { delay: 0.24 }, () => vue.h(ArticleList, { items: articles.value.items }))
        ]),
        vue.h(DropTransition, { delay: 0.16 }, () => vue.h(InfoPanel))
      ]),
      vue.h(DropTransition, { delay: 0.28 }, () => vue.h(MarkdownContent$1))
    ]);
  }
});
var articleType = "";
var ArticleType = vue.defineComponent({
  name: "ArticleType",
  setup() {
    const themeLocale = useThemeLocaleData();
    const route = vueRouter.useRoute();
    const articles = useArticles();
    const encryptedArticles = useEncryptedArticles();
    const slides = useSlides();
    const stars = useStars();
    const types = vue.computed(() => {
      const locale = themeLocale.value.blogLocales;
      return [
        {
          text: locale.all,
          path: articles.value.path
        },
        { text: locale.star, path: stars.value.path },
        { text: locale.slides, path: slides.value.path },
        { text: locale.encrypt, path: encryptedArticles.value.path }
      ];
    });
    return () => vue.h("ul", { class: "article-type-wrapper" }, types.value.map((type) => vue.h("li", {
      class: ["article-type", { active: type.path === route.path }]
    }, vue.h(vueRouter.RouterLink, { to: type.path }, () => type.text))));
  }
});
var timelineItems = "";
var TimelineItems = vue.defineComponent({
  name: "TimelineItems",
  setup() {
    const blogOptions = useBlogOptions();
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const hint = vue.computed(() => blogOptions.value.timeline || themeLocale.value.blogLocales.timelineTitle);
    const items = vue.computed(() => timelines.value.config.map(({ year }) => ({
      title: year.toString(),
      level: 2,
      slug: year.toString(),
      children: []
    })));
    return () => vue.h("div", { class: "timeline-wrapper" }, vue.h("ul", { class: "timeline-content" }, [
      vue.h(DropTransition, () => vue.h("li", { class: "motto" }, hint.value)),
      vue.h(vue.resolveComponent("TOC"), { items: items.value }),
      ...timelines.value.config.map(({ year, items: items2 }, index2) => vue.h(DropTransition, { delay: 0.08 * (index2 + 1), type: "group" }, () => [
        vue.h("h3", { key: "title", id: year, class: "timeline-year-title" }, vue.h("span", year)),
        vue.h("li", { key: "content", class: "timeline-year-list" }, [
          vue.h("ul", { class: "timeline-year-wrapper" }, items2.map(({ date, info, path }) => vue.h("li", { class: "timeline-item" }, [
            vue.h("span", { class: "timeline-date" }, date),
            vue.h(vueRouter.RouterLink, {
              class: "timeline-title",
              to: path
            }, () => info.title)
          ])))
        ])
      ]))
    ]));
  }
});
var page = "";
var BlogPage = vue.defineComponent({
  name: "BlogPage",
  components: {
    ArticleType,
    CategoryList,
    TagList
  },
  setup() {
    const frontmatter = usePageFrontmatter();
    const route = vueRouter.useRoute();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const encryptedArticles = useEncryptedArticles();
    const slides = useSlides();
    const stars = useStars();
    const tagMap = useTagMap();
    const componentName = vue.computed(() => {
      const { key } = frontmatter.value.blog || {};
      return key === "category" ? "CategoryList" : key === "tag" ? "TagList" : key === "timeline" ? "" : "ArticleType";
    });
    const items = vue.computed(() => {
      const { name = "", key = "" } = frontmatter.value.blog || {};
      return key === "encrypted" ? encryptedArticles.value.items : key === "star" ? stars.value.items : key === "slide" ? slides.value.items : key === "timeline" ? [] : key === "category" ? name ? categoryMap2.value.map[name].items : [] : key === "tag" ? name ? tagMap.value.map[name].items : [] : articles.value.items;
    });
    return () => vue.h("main", { class: "blog-page" }, [
      vue.h(DropTransition, () => componentName.value ? vue.h(vue.resolveComponent(componentName.value)) : null),
      vue.h(DropTransition, { delay: 0.24 }, () => {
        var _a;
        return ((_a = frontmatter.value.blog) === null || _a === void 0 ? void 0 : _a.key) === "timeline" ? vue.h(TimelineItems) : vue.h(ArticleList, { key: route.path, items: items.value });
      })
    ]);
  }
});
var layout$1 = "";
var clientAppEnhance9 = defineClientAppEnhance(({ app }) => {
  app.component("BloggerInfo", BloggerInfo);
  app.component("BlogHome", BlogHome);
  app.component("BlogPage", BlogPage);
});
const clientAppEnhances = [
  clientAppEnhance0,
  p$4,
  clientAppEnhance2,
  clientAppEnhance3,
  y$1,
  i$1,
  clientAppEnhance6,
  clientAppEnhance7,
  clientAppEnhance8,
  clientAppEnhance9
];
const pagesData = vue.ref(pagesData$2);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const pageHeadTitleSymbol = Symbol("");
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const routeLocaleSymbol = Symbol("");
const siteData = vue.ref(siteData$2);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const resolveHeadIdentifier = ([tag2, attrs, content]) => {
  if (tag2 === "meta" && attrs.name) {
    return `${tag2}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag2)) {
    return tag2;
  }
  if (tag2 === "template" && attrs.id) {
    return `${tag2}.${attrs.id}`;
  }
  return JSON.stringify([tag2, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const removeEndingSlash = (str2) => str2.replace(/\/$/, "");
const removeLeadingSlash = (str2) => str2.replace(/^\//, "");
const resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a2, b2) => {
    const levelDelta = b2.split("/").length - a2.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b2.length - a2.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const resolvers = vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver === null || pageDataResolver === void 0 ? void 0 : pageDataResolver());
    return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page2, siteLocale) => `${page2.title ? `${page2.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
const historyCreator = vueRouter.createMemoryHistory;
const createVueRouter = () => {
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  return router;
};
const ClientOnly = vue.defineComponent({
  setup(_2, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page2 = usePageData();
    key = page2.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page2 = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page2.value.path) {
        const frontmatterLayout = page2.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
const setupGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const appCreator = vue.createSSRApp;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
const _sfc_main$j = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "foo-about",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#foo-about" aria-hidden="true">#</a> foo about</h1>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var index_html$v = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j], ["__file", "index.html.vue"]]);
var index_html$w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$v
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "about",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#about" aria-hidden="true">#</a> about</h1>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/about.html.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var about_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i], ["__file", "about.html.vue"]]);
var about_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": about_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "contact",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#contact" aria-hidden="true">#</a> contact</h1>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/contact.html.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var contact_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h], ["__file", "contact.html.vue"]]);
var contact_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": contact_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "bar-readme",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#bar-readme" aria-hidden="true">#</a> bar readme</h1>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/bar/index.html.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var index_html$t = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g], ["__file", "index.html.vue"]]);
var index_html$u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$t
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "four",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#four" aria-hidden="true">#</a> four</h1>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/bar/four.html.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var four_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__file", "four.html.vue"]]);
var four_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": four_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "three",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#three" aria-hidden="true">#</a> three</h1>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/bar/three.html.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var three_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__file", "three.html.vue"]]);
var three_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": three_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "readme-foo",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#readme-foo" aria-hidden="true">#</a> README FOO</h1>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/foo/index.html.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var index_html$r = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__file", "index.html.vue"]]);
var index_html$s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "one",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#one" aria-hidden="true">#</a> one</h1>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/foo/one.html.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var one_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__file", "one.html.vue"]]);
var one_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": one_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "two",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#two" aria-hidden="true">#</a> two</h1>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/foo/two.html.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var two_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__file", "two.html.vue"]]);
var two_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": two_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "child",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#child" aria-hidden="true">#</a> child</h1>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/bar/child/index.html.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var index_html$p = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__file", "index.html.vue"]]);
var index_html$q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$p
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "five",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#five" aria-hidden="true">#</a> five</h1>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/bar/child/five.html.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var five_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__file", "five.html.vue"]]);
var five_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": five_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "six",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#six" aria-hidden="true">#</a> six</h1>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/bar/child/six.html.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var six_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__file", "six.html.vue"]]);
var six_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": six_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/404.html.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__file", "404.html.vue"]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/category/index.html.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var index_html$n = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__file", "index.html.vue"]]);
var index_html$o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$n
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/index.html.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var index_html$l = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__file", "index.html.vue"]]);
var index_html$m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$l
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/article/index.html.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var index_html$j = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__file", "index.html.vue"]]);
var index_html$k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/encrypted/index.html.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var index_html$h = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__file", "index.html.vue"]]);
var index_html$i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/slides/index.html.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var index_html$f = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__file", "index.html.vue"]]);
var index_html$g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/star/index.html.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var index_html$d = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__file", "index.html.vue"]]);
var index_html$e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/timeline/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var index_html$b = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
var index_html$c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$b
}, Symbol.toStringTag, { value: "Module" }));
const data$j = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "foo about",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "foo about",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "foo about"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": 1647839145e3,
    "updatedTime": 1647839672e3,
    "contributors": [
      {
        "name": "yzqdev",
        "email": "yzqdev@outlook.com",
        "commits": 2
      }
    ]
  },
  "readingTime": {
    "minutes": 0.01,
    "words": 2
  },
  "filePathRelative": "README.md"
};
var index_html$a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$j
}, Symbol.toStringTag, { value: "Module" }));
const data$i = {
  "key": "v-22a39d25",
  "path": "/about.html",
  "title": "about",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "about",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/about.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "about"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": 1647839145e3,
    "updatedTime": 1647839145e3,
    "contributors": [
      {
        "name": "yzqdev",
        "email": "yzqdev@outlook.com",
        "commits": 1
      }
    ]
  },
  "readingTime": {
    "minutes": 0,
    "words": 1
  },
  "filePathRelative": "about.md"
};
var about_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$i
}, Symbol.toStringTag, { value: "Module" }));
const data$h = {
  "key": "v-6d34f632",
  "path": "/contact.html",
  "title": "contact",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "contact",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/contact.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "contact"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": 1647839145e3,
    "updatedTime": 1647839145e3,
    "contributors": [
      {
        "name": "yzqdev",
        "email": "yzqdev@outlook.com",
        "commits": 1
      }
    ]
  },
  "readingTime": {
    "minutes": 0,
    "words": 1
  },
  "filePathRelative": "contact.md"
};
var contact_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$h
}, Symbol.toStringTag, { value: "Module" }));
const data$g = {
  "key": "v-7444d4f5",
  "path": "/bar/",
  "title": "bar readme",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "bar readme",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/bar/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "bar readme"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": 1647839145e3,
    "updatedTime": 1647839145e3,
    "contributors": [
      {
        "name": "yzqdev",
        "email": "yzqdev@outlook.com",
        "commits": 1
      }
    ]
  },
  "readingTime": {
    "minutes": 0.01,
    "words": 2
  },
  "filePathRelative": "bar/README.md"
};
var index_html$9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$g
}, Symbol.toStringTag, { value: "Module" }));
const data$f = {
  "key": "v-76d72bc4",
  "path": "/bar/four.html",
  "title": "four",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "four",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/bar/four.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "four"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": 1647839145e3,
    "updatedTime": 1647839145e3,
    "contributors": [
      {
        "name": "yzqdev",
        "email": "yzqdev@outlook.com",
        "commits": 1
      }
    ]
  },
  "readingTime": {
    "minutes": 0,
    "words": 1
  },
  "filePathRelative": "bar/four.md"
};
var four_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$f
}, Symbol.toStringTag, { value: "Module" }));
const data$e = {
  "key": "v-e12556a0",
  "path": "/bar/three.html",
  "title": "three",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "three",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/bar/three.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "three"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": 1647839145e3,
    "updatedTime": 1647839145e3,
    "contributors": [
      {
        "name": "yzqdev",
        "email": "yzqdev@outlook.com",
        "commits": 1
      }
    ]
  },
  "readingTime": {
    "minutes": 0,
    "words": 1
  },
  "filePathRelative": "bar/three.md"
};
var three_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$e
}, Symbol.toStringTag, { value: "Module" }));
const data$d = {
  "key": "v-7446daa2",
  "path": "/foo/",
  "title": "README FOO",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "README FOO",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/foo/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "README FOO"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": 1647839145e3,
    "updatedTime": 1647839145e3,
    "contributors": [
      {
        "name": "yzqdev",
        "email": "yzqdev@outlook.com",
        "commits": 1
      }
    ]
  },
  "readingTime": {
    "minutes": 0.01,
    "words": 2
  },
  "filePathRelative": "foo/README.md"
};
var index_html$8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$d
}, Symbol.toStringTag, { value: "Module" }));
const data$c = {
  "key": "v-5cbdbad5",
  "path": "/foo/one.html",
  "title": "one",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "one",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/foo/one.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "one"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": 1647839145e3,
    "updatedTime": 1647839145e3,
    "contributors": [
      {
        "name": "yzqdev",
        "email": "yzqdev@outlook.com",
        "commits": 1
      }
    ]
  },
  "readingTime": {
    "minutes": 0,
    "words": 1
  },
  "filePathRelative": "foo/one.md"
};
var one_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$c
}, Symbol.toStringTag, { value: "Module" }));
const data$b = {
  "key": "v-514c26af",
  "path": "/foo/two.html",
  "title": "two",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "two",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/foo/two.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "two"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": 1647839145e3,
    "updatedTime": 1647839145e3,
    "contributors": [
      {
        "name": "yzqdev",
        "email": "yzqdev@outlook.com",
        "commits": 1
      }
    ]
  },
  "readingTime": {
    "minutes": 0,
    "words": 1
  },
  "filePathRelative": "foo/two.md"
};
var two_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$b
}, Symbol.toStringTag, { value: "Module" }));
const data$a = {
  "key": "v-298737c8",
  "path": "/bar/child/",
  "title": "child",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "child",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/bar/child/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "child"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": 1647839145e3,
    "updatedTime": 1647839145e3,
    "contributors": [
      {
        "name": "yzqdev",
        "email": "yzqdev@outlook.com",
        "commits": 1
      }
    ]
  },
  "readingTime": {
    "minutes": 0,
    "words": 1
  },
  "filePathRelative": "bar/child/README.md"
};
var index_html$7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$a
}, Symbol.toStringTag, { value: "Module" }));
const data$9 = {
  "key": "v-024e9ac2",
  "path": "/bar/child/five.html",
  "title": "five",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "five",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/bar/child/five.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "five"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": 1647839145e3,
    "updatedTime": 1647839145e3,
    "contributors": [
      {
        "name": "yzqdev",
        "email": "yzqdev@outlook.com",
        "commits": 1
      }
    ]
  },
  "readingTime": {
    "minutes": 0,
    "words": 1
  },
  "filePathRelative": "bar/child/five.md"
};
var five_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$9
}, Symbol.toStringTag, { value: "Module" }));
const data$8 = {
  "key": "v-67eb30ff",
  "path": "/bar/child/six.html",
  "title": "six",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "six",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/bar/child/six.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "six"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": 1647839145e3,
    "updatedTime": 1647839145e3,
    "contributors": [
      {
        "name": "yzqdev",
        "email": "yzqdev@outlook.com",
        "commits": 1
      }
    ]
  },
  "readingTime": {
    "minutes": 0,
    "words": 1
  },
  "filePathRelative": "bar/child/six.md"
};
var six_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$8
}, Symbol.toStringTag, { value: "Module" }));
const data$7 = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "404",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/404.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": null
};
var _404_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$7
}, Symbol.toStringTag, { value: "Module" }));
const data$6 = {
  "key": "v-5bc93818",
  "path": "/category/",
  "title": "\u5206\u7C7B",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u5206\u7C7B",
    "blog": {
      "type": "category",
      "key": "category"
    },
    "layout": "Blog",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/category/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "\u5206\u7C7B"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": null
};
var index_html$6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$6
}, Symbol.toStringTag, { value: "Module" }));
const data$5 = {
  "key": "v-744d024e",
  "path": "/tag/",
  "title": "\u6807\u7B7E",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u6807\u7B7E",
    "blog": {
      "type": "category",
      "key": "tag"
    },
    "layout": "Blog",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/tag/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "\u6807\u7B7E"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": null
};
var index_html$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$5
}, Symbol.toStringTag, { value: "Module" }));
const data$4 = {
  "key": "v-e52c881c",
  "path": "/article/",
  "title": "\u6587\u7AE0",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u6587\u7AE0",
    "blog": {
      "type": "type",
      "key": "article"
    },
    "layout": "Blog",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/article/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "\u6587\u7AE0"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": null
};
var index_html$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$4
}, Symbol.toStringTag, { value: "Module" }));
const data$3 = {
  "key": "v-75ed4ea4",
  "path": "/encrypted/",
  "title": "\u52A0\u5BC6",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u52A0\u5BC6",
    "blog": {
      "type": "type",
      "key": "encrypted"
    },
    "layout": "Blog",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/encrypted/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "\u52A0\u5BC6"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": null
};
var index_html$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$3
}, Symbol.toStringTag, { value: "Module" }));
const data$2 = {
  "key": "v-2897d318",
  "path": "/slides/",
  "title": "\u5E7B\u706F\u7247",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u5E7B\u706F\u7247",
    "blog": {
      "type": "type",
      "key": "slide"
    },
    "layout": "Blog",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/slides/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "\u5E7B\u706F\u7247"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": null
};
var index_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$2
}, Symbol.toStringTag, { value: "Module" }));
const data$1 = {
  "key": "v-154dc4c4",
  "path": "/star/",
  "title": "\u6536\u85CF",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u6536\u85CF",
    "blog": {
      "type": "type",
      "key": "star"
    },
    "layout": "Blog",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/star/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "\u6536\u85CF"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": null
};
var index_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$1
}, Symbol.toStringTag, { value: "Module" }));
const data = {
  "key": "v-01560935",
  "path": "/timeline/",
  "title": "\u65F6\u95F4\u8F74",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u65F6\u95F4\u8F74",
    "blog": {
      "type": "type",
      "key": "timeline"
    },
    "layout": "Blog",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/hope-demo/timeline/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "\u4E3B\u9898\u6F14\u793A"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "\u65F6\u95F4\u8F74"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": null
};
var index_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
var skipLink = "";
var SkipLink = vue.defineComponent({
  name: "SkipLink",
  props: {
    content: {
      type: String,
      default: "main-content"
    }
  },
  setup(props) {
    const route = vueRouter.useRoute();
    const backToTop2 = vue.ref();
    vue.watch(() => route.path, () => backToTop2.value.focus());
    const focusMainContent = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    return () => [
      vue.h("span", {
        ref: backToTop2,
        tabindex: "-1"
      }),
      vue.h("a", {
        href: `#${props.content}`,
        class: "skip-link sr-only",
        onClick: focusMainContent
      }, "Skip to content")
    ];
  }
});
var _404$2 = "";
var _404 = vue.defineComponent({
  name: "404",
  setup() {
    var _a;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const getMsg = () => {
      const messages = themeLocale.value.routeLocales["404msg"];
      return messages[Math.floor(Math.random() * messages.length)];
    };
    const { navigate } = vueRouter.useLink({
      to: (_a = themeLocale.value.home) !== null && _a !== void 0 ? _a : routeLocale.value
    });
    return () => [
      vue.h(SkipLink),
      vue.h(vue.resolveComponent("CommonWrapper"), { sidebar: false }, () => vue.h("main", { class: "page not-found", id: "main-content" }, [
        vue.h(Page404Icon),
        vue.h("blockquote", getMsg()),
        vue.h("button", {
          class: "action-button",
          onClick: () => {
            window.history.go(-1);
          }
        }, themeLocale.value.routeLocales.back),
        vue.h("button", { class: "action-button", onClick: () => navigate() }, themeLocale.value.routeLocales.home)
      ]))
    ];
  }
});
var _404$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404
}, Symbol.toStringTag, { value: "Module" }));
var Layout = vue.defineComponent({
  name: "Layout",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const page2 = usePageData$1();
    const frontmatter = usePageFrontmatter();
    const isMobile = useMobile();
    const sidebarDisplay = vue.computed(() => themeLocale.value.blog.sidebarDisplay || themeData2.value.blog.sidebarDisplay || "mobile");
    return () => [
      vue.h(SkipLink),
      vue.h(vue.resolveComponent("CommonWrapper"), {}, __spreadValues(__spreadValues({
        default: () => frontmatter.value.home ? vue.h(vue.resolveComponent("HomePage")) : vue.h(FadeSlideY, () => vue.h(vue.resolveComponent("NormalPage"), { key: page2.value.path }))
      }, sidebarDisplay.value !== "none" ? { navScreenBottom: () => vue.h(vue.resolveComponent("BloggerInfo")) } : {}), !isMobile.value && sidebarDisplay.value === "always" ? { sidebar: () => vue.h(vue.resolveComponent("BloggerInfo")) } : {}))
    ];
  }
});
var Layout$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Layout
}, Symbol.toStringTag, { value: "Module" }));
var layout = "";
const r = () => vue.h(T$1, { name: "back" }, () => vue.h("path", { d: "M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z" })), u = () => vue.h(T$1, { name: "home" }, () => vue.h("path", { d: "M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z" }));
var i = vue.defineComponent({ name: "SlidePage", setup() {
  const s2 = vueRouter.useRouter(), n2 = vue.ref(false), i2 = vue.ref(null), c2 = () => {
    n2.value = false;
  };
  return core.onClickOutside(i2, c2), () => vue.h("div", { class: "presentation" }, [vue.h(Content$1), vue.h("div", { ref: i2, class: ["menu", { active: n2.value }] }, [vue.h("button", { class: "menu-button", onClick: () => {
    n2.value = !n2.value;
  } }, vue.h("span", { class: "icon" })), vue.h("button", { class: "back-button", onClick: () => (c2(), void window.history.go(-1)) }, vue.h(r)), vue.h("button", { class: "home-button", onClick: () => (c2(), void s2.push("/")) }, vue.h(u))])]);
} });
var SlidePage = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": i
}, Symbol.toStringTag, { value: "Module" }));
var Blog = vue.defineComponent({
  name: "Blog",
  setup() {
    const frontmatter = usePageFrontmatter();
    const isMobile = useMobile();
    return () => [
      vue.h(SkipLink),
      vue.h(vue.resolveComponent("CommonWrapper"), { sidebar: false }, __spreadValues({
        default: () => frontmatter.value.home ? vue.h(BlogHome) : vue.h("main", { class: "page blog", id: "main-content" }, vue.h("div", { class: "blog-page-wrapper" }, [
          vue.h(BlogPage),
          vue.h(DropTransition, { delay: 0.16 }, () => vue.h(InfoPanel))
        ])),
        navScreenBottom: () => vue.h(BloggerInfo)
      }, isMobile.value ? { sidebar: () => vue.h(InfoList) } : {}))
    ];
  }
});
var Blog$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Blog
}, Symbol.toStringTag, { value: "Module" }));
var align = "";
var align$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": align
}, Symbol.toStringTag, { value: "Module" }));
var index = "";
var index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
var footnote = "";
var footnote$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": footnote
}, Symbol.toStringTag, { value: "Module" }));
var image = "";
var image$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": image
}, Symbol.toStringTag, { value: "Module" }));
var tasklist = "";
var tasklist$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": tasklist
}, Symbol.toStringTag, { value: "Module" }));
var tex = "";
var tex$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": tex
}, Symbol.toStringTag, { value: "Module" }));
exports.createVueApp = createVueApp;
