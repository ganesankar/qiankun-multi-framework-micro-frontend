<script setup lang="ts">
</script>

<template>
<div>
</div>
<nav class="bg-gray-100 dark:bg-gray-700 border-b border-gray-200 ">
    <div class="px-4 py-3">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <RouterLink class="text-gray-900 dark:text-white hover:underline w-7 h-6 flex" to="/">
                        <svg viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect id="Icons" x="-512" y="-128" width="1280" height="800" style="fill:none;"></rect>
                                <g id="Icons1" serif:id="Icons">
                                    <g id="vue">
                                        <path d="M17.595,11.204l8.91,0l5.536,9.391l5.591,-9.391l8.831,0l-14.422,25.359l-14.446,-25.359Z" style="fill:#435466;"></path>
                                        <path d="M8.089,11.204l23.952,41.845l24.126,-41.845l-9.704,0l-14.422,25.359l-14.446,-25.359l-9.506,0Z" style="fill:#4dba87;"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="text-gray-900 dark:text-white hover:underline" to="/">
                        Users
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="text-gray-900 dark:text-white hover:underline" to="/about">
                        About
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="text-gray-900 dark:text-white hover:underline" to="/nothing-here">
                        Nothing Here
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
<RouterView />
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
</style>
