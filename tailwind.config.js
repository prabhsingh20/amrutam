/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/img/bg.png')",
      },
      fontFamily: {
        // Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        navbar: "#FFF7E2",
      },
    },
  },
  plugins: [],
};
