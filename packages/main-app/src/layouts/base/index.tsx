import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebar";

export default function BaseLayout() {
  return (
    <div className=" h-screen w-screen flex flex-row text-black">
      <div className="w-64 max-w-64 h-full text-white bg-black/65 items-center gap-5 box-border py-3 px-2">
        <SideBar />
      </div>
      <div className="flex-1 h-full bg-gray-300 p-4">
        <div className=" bg-white w-full h-full rounded-md overflow-hidden box-border p-4">
          <div id="sub-app"></div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
