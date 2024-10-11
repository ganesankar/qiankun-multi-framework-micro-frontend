import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import { router } from "./router.ts";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let app: any;
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(App).use(router).mount("#app");
} else {
  renderWithQiankun({
    // Sub-application mounting
    mount(props: { container: { querySelector: (arg0: string) => any } }) {
      app = createApp(App).use(router);
      app.mount(props.container.querySelector("#app"));
    },
    // This will only be triggered when the sub-application is loaded for the first time.
    bootstrap() {
      console.log("vue app bootstrap");
    },
    // renew
    update() {
      console.log("vue app update");
    },
    // uninstall
    unmount() {
      console.log("vue app unmount");
      app?.unmount();
    },
  });
}