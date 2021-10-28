const colors = require('tailwindcss/colors');

module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      colors: {
         blue: colors.blue,
         black: colors.black,
         white: colors.white,
         gray: colors.gray
      },
      extend: {},
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
