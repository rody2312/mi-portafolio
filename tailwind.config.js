/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundColor: {
        'blue-450': '#3B82F6',
        'blue-650': '#2563EB',
        'blue-850': '#1E3A8A',
        'blue-950': '#0C1B4C',
        'blue-975': '#0A1537',
        'blue-985': '#070F28',
        'blue-990': '#040C1F',
      },
      colors: {
        'bg': '#040C1F',
        'section': '#070F28',
      },
    },
  },
  plugins: [],
}