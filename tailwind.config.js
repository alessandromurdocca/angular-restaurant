/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: { primary: "#0f172b", secondary: "#fea116" },
      animation: {
        "spin-slow": "spin 45s linear infinite",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
      },
      /* backgroundImage:{
        heroBg: "url('/public/hero.jpg')"
      } */
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-animated")
    // ...
  ],
};
