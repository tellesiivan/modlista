module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#fff",
        alt: "#eeeef0",
        dark: "#181c1d",
        greyDark: "#d2d2d2",
        darkAlt: "#252627",
        inputMain: "#34494E",
        highlight: "#e4c754",
        ag: {
          green: "#26ec8f",
          yellow: "#ffc107",
        },
      },
    },
  },
  plugins: [],
};
