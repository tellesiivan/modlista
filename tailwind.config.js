module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        main: "#0d1213",
        alt: "#1d1f21",
        dark: "#0e0f10",
        greyDark: "#2c323b",
        darkAlt: "#232529",
        inputMain: "#333",
        textGray: "#536471",
        inputGray: "#b8bbc0",
        ag: {
          green: "#88f1b6",
          hover: "#18f9991a",
          yellow: "#fed156",
        },
        accent: {
          yellow: "#f1c5520d",
          purple: "#290e44",
          red: "#37011c",
          green: "#cbf1d6",
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
