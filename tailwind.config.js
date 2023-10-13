/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend:
    {
      fontFamily: {
        'nothingyoucoulddo': ['Nothing You Could Do', 'cursive'],
        'signika': ['Signika', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
