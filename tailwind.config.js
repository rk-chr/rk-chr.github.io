const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#3A456B',
      lightWhite: '#DFE5EF',
      secondary: '#FF5071',
    }),
    textColor: theme => ({
      ...theme('colors'),
      primary: '#3A456B',
      lightWhite: '#DFE5EF',
      secondary: '#FF5071',
    }),
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    flex: {
      2: '2 2 0%',
      3: '3 3 0%',
    },
    keyframes: {},
    animation: {},
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      animation: ['motion-safe', 'motion-reduce', 'hover', 'focus'],
    },
  },
  plugins: [],
}
