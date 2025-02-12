/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#1f6bbd",
        secondary: "#19456B",
        white: "#ffffff",
        black: "#000000",
      },
      screens: {
        subzero: "0px",
        mobile: "375px",
        phone: "425px",
        tablet: "768px",
        laptop: "1024px",
        jumbo: "1200px",
        burger: "1300px",
        desktop: "1440px",
        breakpoint: "1488px",
        big: "1920px",
      },
    },
  },
  plugins: [],
};
