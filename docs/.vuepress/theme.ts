import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./nav";
import sidebar from "./sidebar";

const hostname =
  process.env.HOSTNAME || "https://vuepress-theme-hope-v2-demo.netlify.app";

export default hopeTheme({
  hostname,

  author: {
    name: "Mr.Hope",
    url: "https://mrhope.site",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "yzqbugs/hope-demo",

  docsDir: "docs",

  locales: {
    "/": {
      // navbar
      navbar: navbar,

      // sidebar
      sidebar: sidebar,
    },
  },
});
