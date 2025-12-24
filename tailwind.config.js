/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 1.5s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { 
            transform: 'scale(1)',
          },
          '50%': { 
            transform: 'scale(1.07)',
          },
        },
      },
    },
  },
  plugins: [],
}

