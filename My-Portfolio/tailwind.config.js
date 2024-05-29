/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        balo: ["Baloo 2", 'sans-serif'],
        noto : ["Noto Sans", 'sans-serif'],
        cambay : ["Cambay", 'sans-serif'],
      },
      colors:{
        backGround:"#000000",
        primaryText:"#52057B",
        primaryBG:"#B6EADA",
      }
    },
  },
  plugins: [],
}