import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import {
  registerMicroApps,
  start,
  initGlobalState,
  MicroAppStateActions,
} from "qiankun";
import "./index.css";

const globalStateActions: MicroAppStateActions = initGlobalState({
  count: 0,
  reactCount: 0,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {" "}
    <BrowserRouter>
      <App globalStateActions={globalStateActions} />
    </BrowserRouter>
  </React.StrictMode>
);

registerMicroApps([
  {
    name: "ReactApp",
    entry: "//localhost:3001",
    container: "#sub-app-container",
    activeRule: "/app-react",
  },
  {
    name: "reactApp",
    entry: "//localhost:3002",
    container: "#sub-app-container",
    activeRule: ["/home", "/app-angular"],
  },
]);
//qiankun
start({
  singular: false,
  sandbox: { strictStyleIsolation: true },
});
