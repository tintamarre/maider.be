import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "fr-FR",
  title: "M'aider",
  description: "Aidez-moi à vous aider",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
