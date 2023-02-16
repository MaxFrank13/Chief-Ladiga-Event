/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      green: {
        50: '#F0FCF9',
        100: '#C6F7E9',
        200: '#8EEDD1',
        300: '#5FE3C0',
        400: '#2DCCA7',
        500: '#17B897',
        600: '#079A82',
        700: '#048271',
        800: '#016457',
        900: '#004440',
        'opaque': '#004440ae'
      },
      grey: {
        50: '#F7F7F7',
        100: '#E1E1E1',
        200: '#CFCFCF',
        300: '#B1B1B1',
        400: '#9E9E9E',
        500: '#7E7E7E',
        600: '#626262',
        700: '#515151',
        800: '#3B3B3B',
        900: '#222222',
      },
      yellow: {
        50: '#FFFBEA',
        100: '#FFF3C4',
        200: '#FCE588',
        300: '#FADB5F',
        400: '#F7C948',
        500: '#F0B429',
        600: '#DE911D',
        700: '#CB6E17',
        800: '#B44D12',
        900: '#8D2BOB',
      },
      red: {
        50: '#FFE3E3',
        100: '#FFBDBD',
        200: '#FF9B9B',
        300: '#F86A6A',
        400: '#EF4E4E',
        500: '#E12B39',
        600: '#CF1124',
        700: '#AB091E',
        800: '#8A041A',
        900: '#610316',
      }
    },
    extend: {
      borderRadius: {
        100: '100%',
      },
      boxShadow: {
        'topDown': 'inset #000000 0px 1px 6px 0px',
        'both': 'inset 0px 2px 4px 0px rgb(0 0 0 / 0.05), 1px 1px 3px 1px rgb(0 0 0 / 0.05)',
        'pressed': 'inset 0px 0px 6px -4px',
      },
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        'hero-img': "url('/src/assets/tunnel-01.png')",
      },
      spacing: {
        'hero-top': '29%',
        'hero-left': '32%',
      },
      height: {
        'half-screen': '80vh',
      },
      maxWidth: {
        'half': '50%',
      },
    },
  },
  plugins: [],
}
