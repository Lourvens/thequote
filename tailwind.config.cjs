/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      outlined: ['Montserrat', 'sans-serif']
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('preline/plugin')
  ]
}
