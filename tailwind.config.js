/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        mc: {
          white: "#D9D9D9",
          orange: "#EB5E28",
          blue: "#324A5F",
          brown: "#CCC5B9",
          black: "#403D39",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
