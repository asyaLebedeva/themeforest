/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      'max-width': '1170px',
    },
    extend: {
      translate: {
        '45': '-45px',
      },
      boxShadow: {
        'custom': '0px 5px 104px 26px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'hand-pattern': "url('../img/hand.svg')",
      }
    },
    plugins: [],
  }
}

