import { useState , useEffect } from "react";
import { MicroAppStateActions } from "qiankun";
import { useLocation } from 'react-router-dom';
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import "./App.css";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
} 
function App({
  globalStateActions,
}: {
  globalStateActions: MicroAppStateActions;
}) {
  const [count, setCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);


  const onCountButtonClick = () => {
    setCount((count) => count + 1);
    globalStateActions.setGlobalState({ count: count + 1 });
  };

  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
          <a
            className="sm:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
            href="#"
          >
            Brand
          </a>
          <div className="sm:order-3 flex items-center gap-x-2">
            <button
              type="button"
              className="sm:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              id="hs-navbar-alignment-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-alignment"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-alignment"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle</span>
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              Button
            </button>
            <button
              type="button"
              className="hs-dark-mode hs-dark-mode-active:hidden inline-flex items-center gap-x-2 py-2 px-3 bg-white/10 rounded-full text-sm text-white hover:bg-white/20 focus:outline-none focus:bg-white/20"
              data-hs-theme-click-value="dark"
            >
              <svg
                className="shrink-0 size-4"
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
              Dark
            </button>
            <button
              type="button"
              className="hs-dark-mode hs-dark-mode-active:inline-flex hidden items-center gap-x-2 py-2 px-3 bg-white/10 rounded-full text-sm text-white hover:bg-white/20 focus:outline-none focus:bg-white/20"
              data-hs-theme-click-value="light"
            >
              <svg
                className="shrink-0 size-4"
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
              Light
            </button>
          </div>
          <div
            id="hs-navbar-alignment"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
            aria-labelledby="hs-navbar-alignment-collapse"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <a
                className="font-medium text-blue-500 focus:outline-none"
                href="#"
                aria-current="page"
              >
                Landing
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                href="#"
              >
                Account
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                href="#"
              >
                Work
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                href="#"
              >
                Blog
              </a>
            </div>
          </div>
        </nav>
      </header>
      <h1>Vite 4 + React 18</h1>
      <div className="card">
        <button onClick={onCountButtonClick}>Main app count is {count}</button>
      </div>
      <div
        id="sub-app-container"
        className="site-layout-background"
        style={{ minHeight: 360 }}
      ></div>
    </>
  );
}

export default App;
