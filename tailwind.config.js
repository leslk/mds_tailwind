/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "700px",
        md: "1000px",
      },
      colors: {
        purple: "#5d47e9",
        white: "#fff",
        grey: "#f4f4f4",
        black: "#000",
        darkmedium: "#353535",
        lightblack: "#232323",
        mint: "#e4f6ff",
        green: "#d3ff24",
      },
    },
  },
  plugins: [],
};
