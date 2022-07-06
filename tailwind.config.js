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
        dark: "#0f1419",
        greyDark: "#d2d2d2",
        darkAlt: "#252627",
        inputMain: "#34494E",
        highlight: "#",
        ag: {
          green: "#26ec8f",
          yellow: "#e4c754",
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
