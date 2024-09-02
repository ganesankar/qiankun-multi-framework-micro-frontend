import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const menuList = [
    { path: "/home", text: "Home" },
    { path: "/react", text: "React" },
    { path: "/vue2", text: "Vue2" },
  ];
  const menuUIList = menuList.map((item) => (
    <NavLink
      to={item.path}
      className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
      key={item.path}
    >
      <div className="">{item.text}</div>
    </NavLink>
  ));
  return (
    <>
      <footer className="flex  max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 border-t border-gray-200 dark:border-slate-700">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div>
              <p className="text-xs text-gray-600 dark:text-slate-400">
                © 2024 Preline Labs.
              </p>
            </div>
            <ul className="flex flex-wrap items-center">
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-slate-500 dark:before:bg-slate-600">
                <a
                  className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-slate-500 dark:hover:text-slate-400"
                  href="#"
                >
                  X (Twitter)
                </a>
              </li>
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-slate-500 dark:before:bg-slate-600">
                <a
                  className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-slate-500 dark:hover:text-slate-400"
                  href="#"
                >
                  Dribbble
                </a>
              </li>
              <li className="inline-block pe-4 text-xs">
                <a
                  className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-slate-500 dark:hover:text-slate-400"
                  href="#"
                >
                  Github
                </a>
              </li>
              <li className="inline-block">
                <button
                  type="button"
                  className="hs-dark-mode hs-dark-mode-active:hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
                  data-hs-theme-click-value="dark"
                >
                  <span className="sr-only">Dark</span>
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="hs-dark-mode hs-dark-mode-active:flex hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
                  data-hs-theme-click-value="light"
                >
                  <span className="sr-only">Light</span>
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
