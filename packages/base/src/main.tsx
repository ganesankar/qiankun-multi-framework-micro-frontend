import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FaReact, FaAngular, FaVuejs } from "react-icons/fa6";
import { SiPreact } from "react-icons/si";
import { RiSvelteLine } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { TbBrandSolidjs } from "react-icons/tb";
import "./index.css";
import App from "./App";
import { start, registerMicroApps } from "qiankun";

// 1. List of sub-apps to load
const apps = [
  {
    name: "React",
    entry: "//localhost:3001",
    activeRule: "sub-react",
    icon: FaReact,
  },
  {
    name: "Vue",
    entry: "//localhost:3002",
    activeRule: "sub-vue",
    icon: FaVuejs
  },
  {
    name: "Angular",
    entry: "//localhost:3003",
    activeRule: "sub-angular",
    icon: FaAngular
  },
  {
    name: "Svelte",
    entry: "//localhost:3004",
    activeRule: "sub-svelte",
    icon: RiSvelteLine
  },
  {
    name: "Preact",
    entry: "//localhost:3005",
    activeRule: "sub-preact",
    icon: SiPreact
  },
  {
    name: "JQuery",
    entry: "//localhost:3006",
    activeRule: "sub-jquery/",
    icon: DiJqueryLogo 
  },
  {
    name: "Solidjs",
    entry: "//localhost:3007",
    activeRule: "sub-solidjs/",
    icon: TbBrandSolidjs  
  },
].sort((a, b) => a.name.localeCompare(b.name));
const qiankunApps = apps.map((app) => ({
  name: app.name,
  entry: app.entry,
  activeRule: `/${app.activeRule}`,
  container: "#sub-app",
}));
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App apps={apps} />
  </BrowserRouter>
);

registerMicroApps(qiankunApps, {
  beforeLoad: [async (app) => console.log("before load", app.name)],
  beforeMount: [async (app) => console.log("before mount", app.name)],
  afterMount: [async (app) => console.log("after mount", app.name)],
});

start();
