import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "guide",
    icon: "Adobe-Photoshop",
    activeMatch: "^/guide/",
    link: "/guide/",
  }, {
    text: "tips",
    icon: "vue",
    activeMatch: "^/tips/",
    link: "/tips/",
  },
]);
