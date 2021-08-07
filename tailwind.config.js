module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-image":
          "url('https://images.unsplash.com/photo-1568766074677-8f422e598aba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFraW5nJTIwY29mZmVlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
