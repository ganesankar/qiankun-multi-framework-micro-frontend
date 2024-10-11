import { createSignal, createResource, For } from "solid-js";
import { Link } from "@solidjs/router";

async function fetchUsers(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return response.json();
}

const Home = () => {
  const [data] = createResource(fetchUsers); // Pass the id parameter to createResource
  const [count, setCount] = createSignal(0);

  return (
    <section class="bg-gray-100 text-gray-700">
      <table
        class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600"
        v-if="users"
      >
        <thead class="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center"></div>
            </th>

            <th
              scope="col"
              class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
            >
              ID
            </th>
            <th
              scope="col"
              class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
            >
              Name
            </th>

            <th
              scope="col"
              class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
            >
              Email
            </th>
            <th
              scope="col"
              class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
            >
              Phone
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          <For each={data()}>
            {(item, index) => (
              // rendering logic for each element

              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.id}
                </td>
                <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                  <div class="text-base font-semibold text-gray-900 dark:text-white">
                    <Link
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      href={`/users/${item.id}`}
                    >
                      {" "}
                      {item.name}
                    </Link>
                  </div>
                </td>
                <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                  {item.username}
                </td>
                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.email}
                </td>
                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.phone}
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </section>
  );
};

export default Home;
