/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6c63ff', // primary violet
          light: '#aab2ff',
          dark: '#463dff'
        },
        secondary: {
          DEFAULT: '#10b981', // emerald green
          light: '#34d399',
          dark: '#0d9488'
        }
      }
    }
  },
  plugins: []
}