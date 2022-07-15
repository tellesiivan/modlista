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
        dark: "#0e0f10",
        greyDark: "#2c323b",
        darkAlt: "#232529",
        inputMain: "#333",
        textGray: "#536471",
        ag: {
          green: "#03c19a",
          hover: "#18f9991a",
          yellow: "#fed156",
        },
        accent: {
          yellow: "#f1c5520d",
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
