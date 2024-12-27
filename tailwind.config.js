/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // No need for an array; 'class' is the correct value
  content: ['./src/**/*.{js,jsx}'], // Ensure these paths are correct for your project
  mode: 'jit', // Optional; JIT is the default mode in Tailwind CSS 3.x+
  theme: {
    extend: {
      backgroundImage: {
        'black-gradient': 'linear-gradient(to right, #434343, #000000)',
      },
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'shimmer-slide':
          'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        grid: 'grid 15s linear infinite',
        ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
        gradient: 'gradient 8s linear infinite',
      },
      keyframes: {
        'shimmer-slide': {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        'spin-around': {
          '0%': { transform: 'translateZ(0) rotate(0)' },
          '15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
          '65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
          '100%': { transform: 'translateZ(0) rotate(360deg)' },
        },
        grid: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        ripple: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(0.9)' },
        },
        gradient: {
          to: { backgroundPosition: 'var(--bg-size) 0' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Ensure this plugin is installed
  ],
};
