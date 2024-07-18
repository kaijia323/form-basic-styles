import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "node:path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ElementPlus from "unplugin-element-plus/vite";

const __dirname = resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ["vue", "vue-router"],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus({
      // ...
    }),
  ],
  server: {
    port: 5180,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
