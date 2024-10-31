/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'brandcolor' : '##B0D8DA'
      }
      
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2px',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily:{
      'poppins': ['Poppins", sans-serif;']
    }
  },
  plugins: [],
}
