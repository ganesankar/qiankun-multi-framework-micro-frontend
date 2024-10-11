import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sub-vue", // Consistent with the activeRule configured in the base
  server: {
    port: 3002,
    cors: true,
    origin: "http://localhost:3002",
  },
  plugins: [
    vue(),
    qiankun("sub-vue", {
      //Configure qiankun plug-in
      useDevMode: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
