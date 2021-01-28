const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      red: '#FF7979',
      green: '#38CC8B',
      'green-light': '#77E2B3',
      purple: '#5E54A4',
      neutral: '#3D3B48',
      light: '#BAB7D4',
      gray: '#DEDEDE',
      white: '#FFF',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'heading-desktop': ['3.125rem', 1.1],
        'heading-mobile': ['1.75rem', 1.29],
        note: ['.6875rem', 1.9],
        cta: ['.9375rem', 1.73],
        input: ['.875rem', 1.86],
      },
      padding: {
        22: '5.5rem',
      },
      gridTemplateColumns: {
        container: 'minmax(auto, 32.8125rem) minmax(auto, 33.75rem)',
      },
      boxShadow: {
        DEFAULT: '0px 8px 0px rgba(0, 0, 0, 0.14688)',
        inset: 'inset 0px -4px 0px rgba(0, 0, 0, 0.0908818)',
      },
      borderRadius: {
        DEFAULT: '.625rem',
        small: '.3125rem',
      },
      backgroundImage: {
        desktop: 'url(../images/bg-intro-desktop.png)',
        mobile: 'url(../images/bg-intro-mobile.png)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['focus-visible'],
    },
  },
}
