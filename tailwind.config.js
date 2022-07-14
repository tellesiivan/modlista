module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        main: "#121417",
        alt: "#1b1f25",
        dark: "#0f1419",
        greyDark: "#2c323b",
        darkAlt: "#242424",
        inputMain: "#434953",
        textGray: "#536471",
        highlight: "#",
        ag: {
          green: "#03c19a",
          hover: "#18f9991a",
          yellow: "#fed156",
        },
        status: {
          success: "#4ad493",
          warning: "#ffc107",
          fail: "#dc3545",
        },
      },
    },
  },
  plugins: [],
};
