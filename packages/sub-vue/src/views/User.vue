<script setup>
import { ref } from 'vue';
import {useRoute} from "vue-router";
const user = ref(null);
const route = useRoute()
console.log("sss",route.params.id)
fetch('https://jsonplaceholder.typicode.com/users/'+route.params.id)
    .then(response => response.json())
    .then(data => user.value = data);
</script>

<template>
   
  <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full mb-1">
            <div class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
                <div class="flex items-center mb-4 sm:mb-0">
                    <h1 class="text-xl  text-gray-900 sm:text-2xl dark:text-white">
                          User
                    </h1>
                </div>
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Add New
                </button>
            </div>
        </div>
    </div>
   <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
        <tbody class="bg-gray-100 dark:bg-gray-700">
          <tr>
            <td class="p-2">ID</td>
            <td class="text-gray-900 whitespace-nowrap dark:text-white">
              {{user?.id}}
            </td>
          </tr>

          <tr>
            <td class="p-2">name</td>
            <td class="text-gray-900 whitespace-nowrap dark:text-white">
              {{user?.name}}
            </td>
          </tr>

          <tr>
            <td class="p-2">username</td>
            <td class="text-gray-900 whitespace-nowrap dark:text-white">
              {{user?.username}}
            </td>
          </tr>

          <tr>
            <td class="p-2">email</td>
            <td class="text-gray-900 whitespace-nowrap dark:text-white">
              {{user?.email}}
            </td>
          </tr>

          <tr>
            <td class="p-2">phone</td>
            <td class="text-gray-900 whitespace-nowrap dark:text-white">
              {{user?.phone}}
            </td>
          </tr>
        </tbody>
      </table>
</template>