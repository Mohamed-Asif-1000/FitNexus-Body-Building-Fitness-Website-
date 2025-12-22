/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*{html,js,ts}"],
  theme: {
    extend: {
      fontFamily:{
        heading:['"Russo One"','sans-serif'], // for Titles and Logos
        content:['"Chakra Petch"','sans-serif'], // for Paragraph and Descriptions
      },
    },
  },
  plugins: [],
}

