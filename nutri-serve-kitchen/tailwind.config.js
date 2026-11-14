/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f3f8ef",
          100: "#e4f0dc",
          200: "#c9e1bc",
          300: "#a4cb92",
          400: "#79ad66",
          500: "#4e8e45",
          600: "#3c7137",
          700: "#315a2e",
          800: "#294a28",
          900: "#203d21"
        },
        citrus: "#e57b21",
        cream: "#fffaf0"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(32, 61, 33, 0.10)"
      }
    }
  },
  plugins: []
};