/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        blue: "#007aff", //Primary color
        violet: "#717BFF",
        gray: {
          DEFAULT: "#F5F5F5", // Light font
          200: "#696969", // Secondary text
        }
      }
    },
  },
  plugins: [],
}