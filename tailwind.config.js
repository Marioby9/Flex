/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#222',
      'white': '#f2f2f2',
      'orange': '#ff8800'
    }
  },
  plugins: [],
}

