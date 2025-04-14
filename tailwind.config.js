/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      background: {
        
      },
      colors:{
        Primary:'hsl(228,78,61)',
        TitleBlack:'hsl(142,36,22)',
        Paragraph: 'hsl(210,1,44)',
      },
    },
  },
  plugins: [],
}