/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C2027',
        secondary: '#F06523',
        third: '#06BA63'
      },
      backgroundImage: {
        'hero': "url('./src/assets/hero.png')",
      },
    },
  },
  plugins: [],
}