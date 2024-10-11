import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],

  theme: {
    extend: {}
  },

  plugins: [require('flowbite/plugin')]
} as Config;
