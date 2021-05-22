module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s linear infinite'
      },
      keyframes: {
        blink: {
          '0%, 100%': {opacity: 1},
          '50%': {opacity: 0}
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
