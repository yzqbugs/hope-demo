import { d as defineComponent, u as useRouteLocale, e as useThemeLocaleData, f as useLink, h, P as Page404Icon, r as resolveComponent } from "./app.686ec5bc.js";
import { S as SkipLink } from "./SkipLink.94c5db6e.js";
var _404$1 = "";
var _404 = defineComponent({
  name: "404",
  setup() {
    var _a;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const getMsg = () => {
      const messages = themeLocale.value.routeLocales["404msg"];
      return messages[Math.floor(Math.random() * messages.length)];
    };
    const { navigate } = useLink({
      to: (_a = themeLocale.value.home) !== null && _a !== void 0 ? _a : routeLocale.value
    });
    return () => [
      h(SkipLink),
      h(resolveComponent("CommonWrapper"), { sidebar: false }, () => h("main", { class: "page not-found", id: "main-content" }, [
        h(Page404Icon),
        h("blockquote", getMsg()),
        h("button", {
          class: "action-button",
          onClick: () => {
            window.history.go(-1);
          }
        }, themeLocale.value.routeLocales.back),
        h("button", { class: "action-button", onClick: () => navigate() }, themeLocale.value.routeLocales.home)
      ]))
    ];
  }
});
export { _404 as default };
