/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#2C5F2D',
          brown: '#97712F',
          offwhite: '#F4F1DE',
        },
        secondary: {
          sage: '#8DAA91',
          wheat: '#FFE5B4',
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};