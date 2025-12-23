/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // Scans index.html in the root
    "./src/**/*.{js,ts}",   // Scans all TS/JS files in your src folder
    "./build/**/*.js"       // Scans compiled JS in build (if applicable)
  ],
  theme: {
    extend: {
      fontFamily:{
        heading:['"Russo One"','sans-serif'], 
        content:['"Chakra Petch"','sans-serif'], 
      },
    },
  },
  plugins: [],
}