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
    },
  },
  plugins: [],
}

