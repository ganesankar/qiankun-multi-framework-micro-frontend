/** @type {import('tailwindcss').Config} */
import prelinePlugin from "preline/plugin";

export default {
  darkMode: 'class',
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/preline/preline.js', '../../node_modules/preline/preline.js'],
  theme: {
    container: {},
    extend: {},
},
  plugins: [
    require('@tailwindcss/typography'),
    prelinePlugin,
  ],
}