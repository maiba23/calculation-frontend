module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        calcText: "#A4A4A4",
        calcMain: "#C10708",
      },
      spacing: {
        10: "10px",
        70: "70px",
        335: "335px",
        740: "740px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
