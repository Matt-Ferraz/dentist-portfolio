/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "main-golden": "#BC8D8E",
      "default-bg": "#FFFAF5",
      "white": "#FFFF"
    },
    extend: {
      fontFamily: {
        burtons: "burtons"
      }
    },
  },
  plugins: [],
}