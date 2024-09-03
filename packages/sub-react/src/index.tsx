import React from "react";
import ReactDOM from "react-dom/client";
import "preline/preline";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "page1",
          element: <Page1 />,
        },
        {
          path: "page2",
          element: <Page2 />,
        },
        {
          index: true,
          element: <Navigate to="/page1"/>,
        },
      ],
    },
  ],
  { basename: "/react" }
);
let root: ReactDOM.Root;

function render(props: QiankunProps) {
  const { container } = props;
  const dom = container
    ? container.querySelector("#root")
    : document.getElementById("root");

  root = ReactDOM.createRoot(dom!);

  root.render(<RouterProvider router={router} />);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
} else {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

/**
 * Bootstrap will only be called once when the micro application is initialized. The next time the micro application re-enters, the mount hook will be called directly, and bootstrap will not be triggered repeatedly.
 * Usually we can initialize some global variables here, such as application-level caches that will not be destroyed during the unmount phase.
 */
export async function bootstrap() {
  console.log("react app bootstraped");
}

/**
 * The mount method will be called every time the application is entered. Usually we trigger the application's rendering method here.
 */
export async function mount(props: QiankunProps) {
  render(props);
}

/**
 * The method that the application will call every time it is cut out/uninstalled. Usually here we will uninstall the application instance of the micro application.

 */
export async function unmount(props: QiankunProps) {
  root.unmount();
}

/**
 * Optional life cycle hook, only effective when loading micro-app using loadMicroApp method
 */
export async function update(props: QiankunProps) {
  console.log("update props", props);
}
