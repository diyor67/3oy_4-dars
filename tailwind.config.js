/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/images/big.jpg')",
      },

      
    },
  },
  plugins: [],
}
