/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/index.js"],
  theme: {
    extend: {
      fontFamily: {
        Epilogue: ["Epilogue"],
      },
      colors: {
        grays: "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
