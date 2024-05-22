/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pageBackground: "#E2DFD0",
        boxBackground: "#524C42",
        textColor: "#F97300",
        buttonColor:"#32012F",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        prompt:["Prompt",'sans'],
        freeman:["Freeman",'sans']
      },
    },
  },
  plugins: [],
};
