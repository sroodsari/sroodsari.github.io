/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        runde: ['Open Runde', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

