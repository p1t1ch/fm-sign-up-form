const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      red: '#FF7979',
      green: '#38CC8B',
      purple: '#5E54A4',
      neutral: '#3D3B48',
      white: '#FFF',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
