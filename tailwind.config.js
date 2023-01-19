/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '350px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
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
        blue: '#3B82F6',
        red2: '#DC2626',
        green: '#15803D',
        black: '#27272A',
      },
    },
  },
  plugins: [],
};
