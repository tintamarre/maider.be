// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import Rag from "./layouts/Rag.vue";

export default defineClientConfig({
  // You can override or add layouts here
  layouts: {
    // For example, here we change the default layout of vuepress-theme-hope to layouts/Layout.vue
    // Layout,
    // Also we added a Rag layout
    Rag,
  },
});
