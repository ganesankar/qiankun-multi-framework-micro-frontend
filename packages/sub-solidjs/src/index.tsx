/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import App from "./App";

let root: any;
let appPath = "/";
if ((window as any).__POWERED_BY_QIANKUN__) {
  console.log("bri");
  appPath = "/sub-solidjs/"
}

function renderApp(props: any) {
  const { container } = props;
  root = container
    ? container.querySelector("#root1")
    : document.getElementById("root1");
  render(
    () => (
      <Router base="/sub-solidjs">
        <App />
      </Router>
    ),
    root!
  );
}
if (!(window as any).__POWERED_BY_QIANKUN__) {
  renderApp({});
}
//Each life cycle
// Bootstrap will only be called once when the micro application is initialized. The mount hook will be called directly the next time the micro application re-enters, and bootstrap will not be triggered repeatedly.
export async function bootstrap() {
  console.log("solidjs app bootstraped");
}

// The mount method will be called every time the application is entered. Usually we trigger the application's rendering method here.
export async function mount(props: any) {
  console.log(props);
  props.onGlobalStateChange((state: any, prev: any) => {
    // state: state after change; prev state before change
    console.log(state, prev);
    //Store this state in our sub-application store
  });
  props.setGlobalState({ count: 2 });
  renderApp({});
}

// The method that the application will call every time it is cut out/uninstalled. Usually here we will uninstall the application instance of the micro application.
export async function unmount(props: any) {
  root.unmount();
}
