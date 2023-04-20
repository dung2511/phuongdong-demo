/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      "6m": "360px",
      m6m: { max: "360px" },
      m9n: { max: "992px" },
      "9n": "992px",
      xs: "480px",
      mxs: { max: "480px" },
      sm: "640px",
      msm: { max: "640px" },
      md: "768px",
      mmd: { max: "768px" },
      lg: "1024px",
      mlg: { max: "1024px" },
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
