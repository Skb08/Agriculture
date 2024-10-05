/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        bounceSlow: 'bounceSlow 3s infinite',
        'spin-slow': 'spin 5s linear infinite',
        'rotate-slow': 'rotate 5s linear infinite',
        'spin-scale': 'spin-scale 6s ease-in-out infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }, 
        bounceSlow: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-in-out',
          },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-scale': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },   
          '50%': { transform: 'rotate(360deg) scale(1.3)' },    
        },
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
              
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
 
}

