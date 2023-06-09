/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1920px",
    },

    extend: {
      keyframes: {
        growDown: {
          " 0% ": {
            left: "-256px",
          },
          "100%": {
            left: "0",
          },
        },
        ansDown: {
          "0%": {
            transform: "translateY(-20%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },

        list_items_menu: {
          "0%": {
            transform: "translateY(10%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        growDown: "growDown 0.4s ease-in-out",
        ansDown: "ansDown 0.4s ease-in-out",
        list_items_menu: "list_items_menu 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
