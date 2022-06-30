/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      'sm': {'max': '500px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  plugins: [],
  }
}