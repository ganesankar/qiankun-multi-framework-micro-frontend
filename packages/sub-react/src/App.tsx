import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className=" w-full h-16 max-h-16 flex flex-row items-center bg-black/65 text-white">
        Sub React App
      </div>
      <div className="w-full h-16 flex flex-row gap-5">
        <NavLink to="/page1" className="group">
          <span className=" group-[.active]:text-pink-500">PAGE1</span>
        </NavLink>
        <NavLink to="/page2" className="group">
          <span className=" group-[.active]:text-pink-500">PAGE2</span>
        </NavLink>
      </div>
      <main className="w-full flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
