/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
  fontFamily: {
    gothamlight: ['Montserrat', 'sans-serif'],
    gotham: ['Gotham', 'sans-serif']
  },
}

  },
  plugins: [],
}
