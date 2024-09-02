import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex ">
        <Header />
      </div>
      <div className="flex flex-1 w-screen overflow-auto">
        <div id="sub-app"></div>
        <Outlet />
      </div>
      <div className="flex w-screen">
        <Footer />
      </div>
    </div>
  );
}

export default App;
