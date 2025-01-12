/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        24: 'repeat(24, 1fr)', // Defines 24 equal-width columns
      },
    },
  },
}