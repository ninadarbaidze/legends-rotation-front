/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        main_bg: "url('/assets/images/main-wallpaper.jpg')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '50%': '50%',
        16: '4rem',
      },
      fontFamily: {
        teko: ['Teko'],
        ubuntu: ['Ubuntu'],
      },
      colors: {
        'grey-250': '#E5E7EB',
        'grey-300': '#D1D5DB',
        'grey-350': '#6B7280',
        'grey-700': '#374151',
        'grey-900': '#111827',
        red: '#CF0A0A',
      },
    },
  },
  plugins: [],
};
