<script setup>
import { ref } from 'vue';
const users = ref(null);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => users.value = data);
</script>

<template>
  <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full mb-1">
            <div class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
                <div class="flex items-center mb-4 sm:mb-0">
                    <h1 class="text-xl  text-gray-900 sm:text-2xl dark:text-white">
                        Users
                    </h1>
                </div>
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Add New
                </button>
            </div>
        </div>
    </div>
    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600"  v-if="users">
        <thead class="bg-gray-100 dark:bg-gray-700">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center"></div>
                </th>

                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    ID
                </th>
                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    Name
                </th>

                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    Email
                </th>
                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    Phone
                </th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

            <tr v-for="user in users" :key="user.id" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{user.id}}
                </td>
                <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <div class="text-base font-semibold text-gray-900 dark:text-white">
                        <router-link :to="{ path: `user/${user.id}`}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">  {{user.name}}</router-link>
                    </div>
                </td>
                <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                    {{user.username}}
                </td>
                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{user.email}}
                </td>
                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{user.phone}}
                </td>
            </tr>

        </tbody>
    </table>
</template>