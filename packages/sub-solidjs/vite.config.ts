import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import qiankun from "vite-plugin-qiankun";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    qiankun("sub-solidjs", {
      useDevMode: true,
    }),
  ],
  server: {
    port: 3007,
    cors: true,
    origin: "http://localhost:3007",
  },
  build: {
    target: 'esnext',
  },
});
