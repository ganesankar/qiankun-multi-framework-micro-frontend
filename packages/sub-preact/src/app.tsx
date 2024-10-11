import { useRoute, Link, Route, Router } from "wouter";
import { useState, useEffect } from "preact/hooks";

interface empI {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}
const User = () => {
  // `match` is a boolean
  const [match, params] = useRoute("/users/:id");
 
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
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full mb-1">
          <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
            <div className="flex items-center mb-4 sm:mb-0">
              <h1 className="text-xl  text-gray-900 sm:text-2xl dark:text-white">
                Users
              </h1>
            </div>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {" "}
              Save
            </button>
          </div>
        </div>
      </div>
      <table className="w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
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
  return <div>
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
</div>;
};

const Users = () => {
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
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
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
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {" "}
              Add New
            </button>
          </div>
        </div>
      </div>
      <table className="w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
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
                  <a
                    href={`/sub-preact/users/${emp.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    {" "}
                    {emp.name}
                  </a>
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

export function App() {
  return (
    <div>
      <nav className="bg-gray-100 dark:bg-gray-700 border-b border-gray-200 ">
        <div className="px-4 py-3">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline w-6 h-5 flex"
                  href="/sub-preact/"
                >
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="#673ab8"
                        d="M16 2l12.12 7v14L16 30 3.88 23V9z"
                      ></path>
                      <ellipse
                        fill="none"
                        stroke="#ffffff"
                        cx="16"
                        cy="16"
                        rx="10.72"
                        ry="4.1"
                        transform="rotate(-37.5 16.007 15.996)"
                      ></ellipse>
                      <ellipse
                        fill="none"
                        stroke="#ffffff"
                        cx="16"
                        cy="16"
                        rx="4.1"
                        ry="10.72"
                        transform="rotate(-52.5 15.998 15.994)"
                      ></ellipse>
                      <circle fill="#ffffff" cx="16" cy="16" r="1.86"></circle>
                    </g>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline"
                  href="/sub-preact/"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline"
                  href="/sub-preact/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline"
                  href="/sub-preact/nothing-here"
                >
                  Nothing Here
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Router base="/sub-preact">
        <Route path="/" component={Users} />
        <Route path="/about" component={About} />
        <Route path="/users/:id" component={User} />
      </Router>
    </div>
  );
}
