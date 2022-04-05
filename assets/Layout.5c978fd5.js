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
import { d as defineComponent, e as useThemeLocaleData, j as usePageFrontmatter, k as useMobile, l as computed, h, r as resolveComponent, F as FadeSlideY, m as usePageData, n as useThemeData } from "./app.da2fca86.js";
import { S as SkipLink } from "./SkipLink.348cf002.js";
var Layout = defineComponent({
  name: "Layout",
  setup() {
    const themeData = useThemeData();
    const themeLocale = useThemeLocaleData();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const isMobile = useMobile();
    const sidebarDisplay = computed(() => themeLocale.value.blog.sidebarDisplay || themeData.value.blog.sidebarDisplay || "mobile");
    return () => [
      h(SkipLink),
      h(resolveComponent("CommonWrapper"), {}, __spreadValues(__spreadValues({
        default: () => frontmatter.value.home ? h(resolveComponent("HomePage")) : h(FadeSlideY, () => h(resolveComponent("NormalPage"), { key: page.value.path }))
      }, sidebarDisplay.value !== "none" ? { navScreenBottom: () => h(resolveComponent("BloggerInfo")) } : {}), !isMobile.value && sidebarDisplay.value === "always" ? { sidebar: () => h(resolveComponent("BloggerInfo")) } : {}))
    ];
  }
});
export { Layout as default };
