module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        main: "#fff",
        alt: "#f0f1f2",
        dark: "#0f1419",
        greyDark: "#d2d2d2",
        darkAlt: "#252627",
        inputMain: "#34494E",
        textGray: "#536471",
        highlight: "#",
        ag: {
          green: "#f91880",
          hover: "#f918801a",
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
