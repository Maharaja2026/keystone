/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeSlideRight: {
          '0%': { opacity: '0', transform: 'translateX(-48px)' },
          '50%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(48px)' },
        },
        fadeSlideDown: {
          '0%': { opacity: '0', transform: 'translateY(-48px)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(48px)' },
        },
      },
      animation: {
        'fade-slide-right': 'fadeSlideRight 2s infinite ease-in-out',
        'fade-slide-down': 'fadeSlideDown 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};