import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/aides/",
  "/chat/",
  {
    text: "Annuaire",
    icon: "lightbulb",
    prefix: "/annuaire/",
    children: [
      {
        text: "Iodda",
        icon: "lightbulb",
        prefix: "iodda/",
        children: ["", { text: "...", icon: "ellipsis", link: "#" }],
      }
       ],
  },
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
