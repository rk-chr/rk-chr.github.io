const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  important: true,
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
      sans: ['Lato', 'sans-serif'],
    },
    flex: {
      2: '2 2 0%',
      3: '3 3 0%',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-15px)' },
      },
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out',
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      animation: ['motion-safe', 'motion-reduce', 'hover', 'focus'],
    },
  },
  plugins: [],
}
