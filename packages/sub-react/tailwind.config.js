/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
module.exports = {

  content: ['./src/**/*.{js,ts,jsx,tsx}'
    , flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
}