var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { d as defineComponent, j as usePageFrontmatter, k as useMobile, h, B as BlogHome, s as BlogPage, D as DropTransition, I as InfoPanel, t as BloggerInfo, v as InfoList, r as resolveComponent } from "./app.686ec5bc.js";
import { S as SkipLink } from "./SkipLink.94c5db6e.js";
var Blog = defineComponent({
  name: "Blog",
  setup() {
    const frontmatter = usePageFrontmatter();
    const isMobile = useMobile();
    return () => [
      h(SkipLink),
      h(resolveComponent("CommonWrapper"), { sidebar: false }, __spreadValues({
        default: () => frontmatter.value.home ? h(BlogHome) : h("main", { class: "page blog", id: "main-content" }, h("div", { class: "blog-page-wrapper" }, [
          h(BlogPage),
          h(DropTransition, { delay: 0.16 }, () => h(InfoPanel))
        ])),
        navScreenBottom: () => h(BloggerInfo)
      }, isMobile.value ? { sidebar: () => h(InfoList) } : {}))
    ];
  }
});
export { Blog as default };
