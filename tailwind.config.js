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
    },
  },
  plugins: [],
};
