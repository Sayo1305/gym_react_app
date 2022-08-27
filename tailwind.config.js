/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Green-sp' : '#DBFAE0',
        'Yellow-sp' : '#F4FDE4',
        'Orange-sp' : '#FBE7DA',
        'Pink-sp': '#F5D6E5',
      }
    },
  },
  plugins: [],
}
