/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        clay: {
          50: '#faf7f5',
          100: '#f3ebe6',
          200: '#e6d5cb',
          300: '#d4b5a4',
          400: '#c0927a',
          500: '#b17860',
          600: '#a46350',
          700: '#884f43',
          800: '#70423a',
          900: '#5c3933',
        },
        coral: '#e85d4c',
        ink: '#1a1520',
        linen: '#f7f3ee',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
