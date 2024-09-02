import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const menuList = [
    { path: "/home", text: "Home" },
    { path: "/react", text: "React" },
    { path: "/vue2", text: "Vue2" },
    { path: "/vue3", text: "Vue3" },
    { path: "/umi", text: "Umi" },
  ];
  const menuUIList = menuList.map((item) => (
    <NavLink to={item.path} className="group" key={item.path}>
      <div className="w-full h-16 rounded-md flex justify-center items-center text-xl group-[.active]:bg-white/45">
        {item.text}
      </div>
    </NavLink>
  ));
  return <>{menuUIList}</>;
}
