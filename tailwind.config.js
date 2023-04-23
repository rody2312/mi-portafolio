/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        purple: {
          100: "#EAE6F5",
          200: "#D3C9EB",
          300: "#BCABE1",
          400: "#A58DD6",
          500: "#8E70CC",
          600: "#7A61B2",
          700: "#5F4C8F",
          800: "#44366C",
          900: "#291F49",
        },
      },
    },
  },
  plugins: [],
}