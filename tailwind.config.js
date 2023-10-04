/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    screens:{
      'sm': '375px',
       'lg': '1440px'
    },
    fontFamily:{
      'Epil': ['Epilogue', 'sans-serif'],
    },
    extend: {
      colors:
      {
          'Almost_White':' hsl(0, 0%, 98%)',
          'Almost_Black': ' hsl(0, 0%, 8%)',
          'Medium_Gray': 'hsl(0, 0%, 41%)',
          'white':'hsl(0,0%,100%)',
      },
    },
  },
  plugins: [],
}

