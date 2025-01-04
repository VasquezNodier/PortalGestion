/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00524a',
        'secondary': '#11836d',
        'tertiary': '#e6ffe6',

        'info': '#17a2b8',
        'danger': '#dc3545',
        'success': '#28a745',
        'warning': '#ffc107',

      }
    },
  },
  plugins: [],
}

