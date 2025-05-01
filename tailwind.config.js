/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#89f901',
        dark: '#0F1115',
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
    safelist: [
      'from-gray-700/10',
      'to-gray-900/10',
      'from-gray-800/10',
      'to-gray-600/10',
    ]
  },
  plugins: [],
}