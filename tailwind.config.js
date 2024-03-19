/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        },
      },
    },
    colors: {
      blue: "#007aff", //Primary color
      violet: "#717BFF",
      gray: {
        DEFAULT: "#F5F5F5", // Light font
        200: "#696969", // Secondary text
      },
    },
  },
  plugins: [],
}