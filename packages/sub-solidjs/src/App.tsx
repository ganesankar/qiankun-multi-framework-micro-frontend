import type { Component } from "solid-js";
import { Link, useRoutes, useLocation } from "@solidjs/router";

import { routes } from "./routes";

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <>
      <nav class="bg-gray-100 dark:bg-gray-700 border-b border-gray-200 ">
        <div class="px-4 py-3">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  class="text-gray-900 dark:text-white hover:underline w-7 h-6 flex"
                  href="/"
                >
                  <svg
                    data-hk="00000000010000000102000202021130"
                    class="w-9 h-9 -mt-1 text-link dark:text-link-dark "
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 166 155.3"
                  >
                    <defs>
                      <linearGradient
                        id="a"
                        gradientUnits="userSpaceOnUse"
                        x1="27.5"
                        y1="3"
                        x2="152"
                        y2="63.5"
                      >
                        <stop offset=".1" stop-color="#76b3e1"></stop>
                        <stop offset=".3" stop-color="#dcf2fd"></stop>
                        <stop offset="1" stop-color="#76b3e1"></stop>
                      </linearGradient>
                      <linearGradient
                        id="b"
                        gradientUnits="userSpaceOnUse"
                        x1="95.8"
                        y1="32.6"
                        x2="74"
                        y2="105.2"
                      >
                        <stop offset="0" stop-color="#76b3e1"></stop>
                        <stop offset=".5" stop-color="#4377bb"></stop>
                        <stop offset="1" stop-color="#1f3b77"></stop>
                      </linearGradient>
                      <linearGradient
                        id="c"
                        gradientUnits="userSpaceOnUse"
                        x1="18.4"
                        y1="64.2"
                        x2="144.3"
                        y2="149.8"
                      >
                        <stop offset="0" stop-color="#315aa9"></stop>
                        <stop offset=".5" stop-color="#518ac8"></stop>
                        <stop offset="1" stop-color="#315aa9"></stop>
                      </linearGradient>
                      <linearGradient
                        id="d"
                        gradientUnits="userSpaceOnUse"
                        x1="75.2"
                        y1="74.5"
                        x2="24.4"
                        y2="260.8"
                      >
                        <stop offset="0" stop-color="#4377bb"></stop>
                        <stop offset=".5" stop-color="#1a336b"></stop>
                        <stop offset="1" stop-color="#1a336b"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z"
                      fill="#76b3e1"
                    ></path>
                    <path
                      d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z"
                      opacity=".3"
                      fill="url(#a)"
                    ></path>
                    <path
                      d="m52 35-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z"
                      fill="#518ac8"
                    ></path>
                    <path
                      d="m52 35-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z"
                      opacity=".3"
                      fill="url(#b)"
                    ></path>
                    <path
                      d="M134 80a45 45 0 0 0-48-15L24 85 4 120l112 19 20-36c4-7 3-15-2-23z"
                      fill="url(#c)"
                    ></path>
                    <path
                      d="M114 115a45 45 0 0 0-48-15L4 120s53 40 94 30l3-1c17-5 23-21 13-34z"
                      fill="url(#d)"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  class="text-gray-900 dark:text-white hover:underline"
                  href="/"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  class="text-gray-900 dark:text-white hover:underline"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  class="text-gray-900 dark:text-white hover:underline"
                  href="/nothing-here"
                >
                  Nothing Here
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Route />
      </main>
    </>
  );
};

export default App;
