/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('src/assets/img/home.jpg')"
      }
    },
    colors: {
      'transparent': 'transparent',
      'darkBlack': '#0a0a0a',
      'black': '#222',
      'overlayBlack': 'rgba(0, 0, 0, 0.8)',
      'coal':  '#2b2b2b',
      'gray': '#393E46',
      'white': '#fff',
      'bone' : '#aeaeae',
      'orange': '#ff8800',
      'lightOrange': '#ffa640',
      'salmon': '#f4ca9b',
      'red': '#dc2d22',
      'green': '#19e619'
    }
  },
  plugins: [],
}

/*
colors: {
      'darkBlack': '#1b1b1b',
      'black': '#222',
      'coal':  '#2b2b2b',
      'gray': '#424242',
      'white': '#f2f2f2',
      'orange': '#ff8800',
      'lightOrange': '#ffa640',
      'salmon': '#f4ca9b',
      'overlayBlack': 'rgba(0, 0, 0, 0.8)'
    }
*/