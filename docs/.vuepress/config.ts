import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

import theme from "./theme.js";


export default defineUserConfig({
  base: "/",

  lang: "fr-FR",
  title: "M'aider",
  description: "Aidez-moi à vous aider",

  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
