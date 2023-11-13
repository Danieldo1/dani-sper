/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

        'purple-100': '#e6d8ea',
        'purple-200': '#cfc2d2',
        'purple-300': '#b8acbb',
        'purple-400': '#a197a3',
        coral:'#FF3A55',
        'coral-100': '#ffd7dd',
        'coral-200': '#E5C1C6',
        'coral-300': '#ff9caa',
        'coral-400': '#CC2E44',
        'midnight-100': '#0F0E14',
        'midnight-200': '#262332',
        'midnight-300': '#312e41',
        'midnight-400': '#3e3e42',
      },
      boxShadow: {
        card: "0px 15px 50px -20px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage:  {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "light-pattern": "url('/src/assets/herobglight.png')",
        "light-photo": "url('/src/assets/finalComp/1LightBg-min.png')",
        "dark-photo": "url('/src/assets/finalComp/1DarkBg-min.png')",
      },
      
    },
  },
  plugins: [],
};