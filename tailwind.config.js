/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'images':"url(/src/ak4.jpg)",
        'clodephot':"url(/src/clode.webp)"
       }
    },
  },
  plugins: [],
}

