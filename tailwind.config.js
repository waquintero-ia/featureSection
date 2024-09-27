/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'grey-900': '#4D4F62',
        'white-100': '#FAFAFA',
        'white-900': '#FFFFFF',
        'cyan': '#44D3D2',
        'red': '#FF637B',
        'orange': '#FDBF00',
        'blue': '#377FD2',
      },
      boxShadow:{
        'card-shadow': '0 15px 30px -5px rgba(131, 166, 210, 0.5)',
      },
      fontSize:{
        'size-h1': 'clamp(1.5rem, 4vw , 2.25rem)',
        20: '1.25rem',
        15: '0.9375rem',
        13: '0.8125rem',
      },
    },
  },
  plugins: [],
}

