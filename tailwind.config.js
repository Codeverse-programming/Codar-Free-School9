/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': '#111111',
        'head-color': '#2D2066',
        'text-color': '#157DFB'
      },
      fontFamily: {
        'head-font': ['Sora','sans-serif;'],
        'normal-font': ['Sora','sans-serif;'],
      },
    },
  },
  plugins: [],
}

