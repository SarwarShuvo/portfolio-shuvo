/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textUnderlineOffset: {
        8: '10px',
      }
    },
  },
  plugins: [],
}
