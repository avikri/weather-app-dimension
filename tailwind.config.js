/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        primaryBackground: '#121212',
        secondaryBackground: '#2C2C2C',
        selectColour: "#3B82F6",
      },
    },
  },
  plugins: [],
}

