/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://frosthacks.co/static/media/art3.58bfc360ffc498e52647.png')",
      },
    },
  },
  plugins: [],
}

