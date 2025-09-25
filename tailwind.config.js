
/** @type {import('tailwindcss').Config} */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cubanoFont: ["var(--font-cubano)", "sans-serif"]
      }
    },
  },
  plugins: [],
}
