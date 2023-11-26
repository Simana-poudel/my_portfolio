/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      
      colors: {
        'black' : '#000000',
        'background-1': '#f5f8fc',
        'text_color' : '#666',
        'description': '#7e7e7e',
        'blue': '#34495e',
      },
    },
  },
  plugins: [],
}
