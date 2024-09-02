import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import Header from "./components/Header";
import Footer from "./components/Footer";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-slate-800">
      <div className="flex flex-row">
        <Header />
      </div>
      <div className="flex flex-1 w-screen overflow-auto">
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
