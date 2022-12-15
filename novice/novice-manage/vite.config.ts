// vite.config.ts
import vue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";
import svgLoader from "vite-svg-loader";
import { createSvg } from "./src/assets/icon/index.ts";
import config from "./config";

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

/** 设置别名 */
const alias: Record<string, string> = {
  "@": pathResolve("src"),
};


export default defineConfig(({ command, mode }) => {
  return {
    base: "./",
    resolve: {
      alias,
    },
    server: {
      host: "0.0.0.0",
      port: config.port,
    },
    plugins: [
      vue(),
      createSvg("./src/assets/icon/svg/"),
      svgLoader(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    define: {
      PORT: config.port,
    },
  };
});
