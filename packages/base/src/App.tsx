import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Badge,
  Navbar,
  DarkThemeToggle,
  Sidebar,
  Card,
} from "flowbite-react";
import { LiaHomeSolid } from "react-icons/lia";
import "./App.css";
interface IApp {
  name: string;
  icon: any;
  activeRule: string;
}
interface Props {
  apps: IApp[];
}
function App({ apps }: Props) {
  let location = useLocation();

  const [activeApp, setActiveApp] = useState(window.location.pathname || "/");
  useEffect(() => {
    console.log("Current pathname:", location.pathname);
    setActiveApp(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar
        fluid
        className="fixed top-0 z-10 w-full bg-opacity-75 backdrop-blur-lg dark:bg-opacity-75 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 "
      >
        <Navbar.Brand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Qiankun
          </span>
          &nbsp;
          <Badge color="indigo">MFE Panel</Badge>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <DarkThemeToggle /> &nbsp;
          <Navbar.Toggle />
        </div>
      </Navbar>
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 w-full h-screen ">
        <aside className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0  w-64 h-full pt-16  font-normal duration-75 lg:flex transition-width">
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup className="pb-2">
                    <Sidebar.Item
                      href="/"
                      icon={LiaHomeSolid}
                      className={
                        location.pathname === "dashboard"
                          ? "bg-gray-100 dark:bg-gray-700"
                          : ""
                      }
                    >
                      Dashboard
                    </Sidebar.Item>
                    {apps.map((app: IApp, index) => (
                      <Sidebar.Item
                        key={`adminSideBarLink${index}`}
                        href={`/${app.activeRule}`}
                        icon={app.icon}
                        className={
                          location.pathname.includes(app.activeRule)
                            ? "bg-gray-100 dark:bg-gray-700"
                            : ""
                        }
                      >
                        {app.name}
                      </Sidebar.Item>
                    ))}
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup></Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </aside>
        <main className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
          {activeApp === "/" ? (
            <div id="home-container">
              <div className="p-4 block sm:flex items-center justify-between border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full mb-1">
                  <h1 className="text-xl  text-gray-900 sm:text-2xl dark:text-white">
                    Apps List
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 p-3">
                {apps.map((app: IApp) => (
                  <Card
                    className="m-3 bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                    key={`adminLink${app.activeRule}`}
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <Link to={app.activeRule}>
                        <div className="flex">
                          <div className="flex-none pr-2">
                            <app.icon />
                          </div>
                          <div className="flex-1 w-64">{app.name}</div>
                        </div>
                      </Link>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Some Description
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div id="sub-app"></div>
        </main>
      </div>
    </>
  );
}

export default App;
