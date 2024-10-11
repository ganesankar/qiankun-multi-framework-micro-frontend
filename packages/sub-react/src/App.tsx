import React, { useState, useEffect } from "react";
import { Button, Spinner } from "flowbite-react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { LiaPlusCircleSolid } from "react-icons/lia";
interface empI {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UsersList = () => {
  const [apiData, setApiData] = useState([]);
  const [apiLoading, setApiLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setApiLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="">
      {apiLoading && (
        <div className="flex h-64 w-full absolute  z-50 left-0 top-0 ">
          <div className="m-auto">
            <Spinner aria-label="Loading" size="xl" />
          </div>
        </div>
      )}
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full mb-1">
          <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
            <div className="flex items-center mb-4 sm:mb-0">
              <h1 className="text-xl  text-gray-900 sm:text-2xl dark:text-white">
                Users
              </h1>
            </div>
            <Button
              color="blue"
              pill
              onClick={() => {
                /**router.push("/admin/blog/new") */
              }}
              className="me-2"
            >
              <LiaPlusCircleSolid className="mr-2 h-5 w-5" /> Add New
            </Button>
          </div>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center"></div>
            </th>

            <th
              scope="col"
              className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
            >
              ID
            </th>
            <th
              scope="col"
              className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
            >
              Name
            </th>

            <th
              scope="col"
              className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
            >
              Email
            </th>
            <th
              scope="col"
              className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
            >
              Phone
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {apiData?.map((emp: empI, index) => (
            <tr
              key={`eee${index}`}
              className="hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {emp.id}
              </td>
              <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                <div className="text-base font-semibold text-gray-900 dark:text-white">
                  {" "}
                  <Link to={`/user/${emp.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> {emp.name}</Link>
                </div>
              </td>
              <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                {emp.username}
              </td>
              <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {emp.email}
              </td>
              <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {emp.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UserDetails = () => {
  const params = useParams();
  const [apiData, setApiData] = useState<empI>({
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const [apiLoading, setApiLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + params.id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setApiLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="">
      {apiLoading && (
        <div className="flex h-64 w-full absolute  z-50 left-0 top-0 ">
          <div className="m-auto">
            <Spinner aria-label="Loading" size="xl" />
          </div>
        </div>
      )}
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full mb-1">
          <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
            <div className="flex items-center mb-4 sm:mb-0">
              <h1 className="text-xl  text-gray-900 sm:text-2xl dark:text-white">
                Users
              </h1>
            </div>
            <Button
              color="blue"
              pill
              onClick={() => {
                /**router.push("/admin/blog/new") */
              }}
              className="me-2"
            >
              <LiaPlusCircleSolid className="mr-2 h-5 w-5" /> Save
            </Button>
          </div>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
        <tbody className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <td className="p-2">ID</td>
            <td className="text-gray-900 whitespace-nowrap dark:text-white">
              {apiData.id}
            </td>
          </tr>

          <tr>
            <td className="p-2">name</td>
            <td className="text-gray-900 whitespace-nowrap dark:text-white">
              {apiData.name}
            </td>
          </tr>

          <tr>
            <td className="p-2">username</td>
            <td className="text-gray-900 whitespace-nowrap dark:text-white">
              {apiData.username}
            </td>
          </tr>

          <tr>
            <td className="p-2">email</td>
            <td className="text-gray-900 whitespace-nowrap dark:text-white">
              {apiData.email}
            </td>
          </tr>

          <tr>
            <td className="p-2">phone</td>
            <td className="text-gray-900 whitespace-nowrap dark:text-white">
              {apiData.phone}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full mb-1">
          <h1 className="text-xl  text-gray-900 sm:text-2xl dark:text-white">
            About
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </div>
    </div>
  );
};

const ErrorPage = () => {
  return (
    <div>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full mb-1">
          <h1 className="text-xl  text-gray-900 sm:text-2xl dark:text-white">
            400
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            {" "}
            Page Not Found
          </p>
        </div>
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className="">
      <nav className="bg-gray-100 dark:bg-gray-700 border-b border-gray-200 ">
        <div className="px-4 py-3">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline w-6 h-5 flex"
                  to="/"
                >
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                        fill="#53C1DE"
                      ></path>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                        fill="#53C1DE"
                      ></path>{" "}
                    </g>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline"
                  to="/"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline"
                  to="/nothing-here"
                >
                  Nothing Here
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="">
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
