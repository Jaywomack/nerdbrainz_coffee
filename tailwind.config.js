module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-tan": "#c7a17a",
        "custom-black-light": "#191919",
        "custom-black-dark": "#121315",
        "custom-black-mid": "#1c1c1c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
// #151412 darker black
// #191919 grayish black
// #c7a17a tan
