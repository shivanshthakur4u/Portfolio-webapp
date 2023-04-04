/** @type {import('tailwindcss').Config} */

const { color } = require('framer-motion')
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#EA8FEA", // 240,86,199
        primaryDark: "#19A7CE", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)'
      }
    },
  },
  plugins: [],
}

