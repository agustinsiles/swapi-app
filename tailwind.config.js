const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      red: colors.rose,
      yellow: colors.amber,
      errorStrong: "#c31b42",
      primary: "#008cff",
    },
  },
};
