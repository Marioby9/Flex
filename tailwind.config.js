/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'darkBlack': '#1b1b1b',
      'black': '#222',
      'coal':  '#2b2b2b',
      'white': '#f2f2f2',
      'orange': '#ff8800',
      'lightOrange': '#ffa640'

    }
  },
  plugins: [],
}

