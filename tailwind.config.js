/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('../assets/cs-image.svg')",
        "background-image-sm": "url('../assets/cs-image-sm.svg')",
      },
      colors: {
        "cs-green": "#4C5844",
        "cs-light": "#889180",
        "cs-dark-green": "#3e4637",
      },
    },
  },
  plugins: [],
};
