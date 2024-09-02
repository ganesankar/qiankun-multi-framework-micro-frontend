import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" w-screen ">
      <nav className="bg-white dark:bg-neutral-900">
        <div className="max-w-[85rem] w-full mx-auto sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-x-3 py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-x-3">
            <div className="grow">
              <span className="font-semibold whitespace-nowrap text-gray-800 dark:text-neutral-200">
                My project
              </span>
            </div>

            <button
              type="button"
              className="hs-collapse-toggle sm:hidden py-1.5 px-2 inline-flex items-center font-medium text-xs rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              data-hs-collapse="#hs-nav-secondary"
              aria-controls="hs-nav-secondary"
              aria-label="Toggle navigation"
            >
              Overview
              <svg
                className="hs-dropdown-open:rotate-180 shrink-0 size-4 ms-1"
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
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>

          <div id="hs-nav-secondary" className="flex flex-col">
            <div className="py-2 sm:py-0 flex flex-col sm:flex-row sm:justify-end gap-y-2 sm:gap-y-0 sm:gap-x-6">
              <a
                className="font-medium text-sm text-blue-600 focus:outline-none focus:text-blue-600 dark:text-blue-500 dark:focus:text-blue-500"
                href="#"
                target="_parent"
              >
                Overview
              </a>
              <a
                className="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                href="#"
                target="_parent"
              >
                Features
              </a>
              <a
                className="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                href="#"
                target="_parent"
              >
                Platforms
              </a>
              <a
                className="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                href="#"
                target="_parent"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 bg-gray-100 overflow-auto w-screen ">
        <div className=" w-full flex flex-col">
          <div className=" w-full h-16 max-h-16 flex flex-row items-center bg-black/65 text-white">
            Sub React App
          </div>
          <div className="w-full h-16 flex flex-row gap-5">
            <NavLink
              to="/page1"
              className="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
            >
              <span className=" group-[.active]:text-pink-500">PAGE1</span>
            </NavLink>
            <NavLink
              to="/page2"
              className="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
            >
              <span className=" group-[.active]:text-pink-500">PAGE2</span>
            </NavLink>
          </div>
          <main className="w-full flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
