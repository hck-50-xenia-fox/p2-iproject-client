/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#3f3cbb",
        mypink: "#e946c9",
      },
    },
  },
  plugins: [],
};
