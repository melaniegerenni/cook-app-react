/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        'primary': '#bddb7e',
        'secondary': '#c37fdb',
        'light': '#fbfff2',
      },
      gridTemplateRows: {
        'cardContent': '2fr 1fr',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
