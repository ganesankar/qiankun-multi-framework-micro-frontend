import prelinePlugin from "preline/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/preline/dist/*.js",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {},
    },
    plugins: [prelinePlugin],
};