/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: 'true',
    },
    extend: {
      width: {
        'mxWidth': '1170px',
      },
      translate: {
        '45': '-45px',
      },
      boxShadow: {
        'custom': '0px 5px 104px 26px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'hand-pattern': "url('../img/hand.svg')",
        'gift-pattern': "url('../img/icon-gift.svg')",
        'winter': "url('../img/winter.svg')",
      },
      colors: {
        darkPink: '#d93939',
        myPink: '#ff5a5a',
        dirtBlue: '#345b6e',
        dirtWhite: '#ccc',
        mbYellow: 'e5e5e5',
        hzGrey: '#6697ae',
        lightGrey: '#f9f9f9',
        border: 'rgba(236,236,236,0.49)',
        boldlGrey: '#eee', 
      }
    },
    plugins: [],
  }
}

