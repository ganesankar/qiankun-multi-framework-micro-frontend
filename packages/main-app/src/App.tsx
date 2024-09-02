import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row">
        <Header />
      </div>
      <div className="flex flex-1 w-screen overflow-auto">
        {" "}
        <div className="w-screen">
          <div id="sub-app"></div>
          <Outlet />
        </div>
      </div>
      <div className="flex w-screen">
        <Footer />
      </div>
    </div>
  );
}

export default App;
