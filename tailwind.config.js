/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["brogte", ...defaultTheme.fontFamily.serif],
      cal: ["cal-sans", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
