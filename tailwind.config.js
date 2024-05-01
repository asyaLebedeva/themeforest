/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/main.css'],
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
        'cardShadow': '0px 1px 22px 3px rgba(0, 0, 0, 0.07)',
      },
      backgroundImage: {
        'hand-pattern': "url('../img/hand.svg')",
        'gift-pattern': "url('../img/icon-gift.svg')",
        'winter': "url('../img/winter.svg')",
        'xmax': "url('../img/footer-img.png')",
      },
      colors: {
        darkPink: '#d93939',
        myPink: '#ff5a5a',
        dirtBlue: '#345b6e',
        dirtWhite: '#ccc',
        mbYellow: '#e5e5e5',
        hzGrey: '#6697ae',
        lightGrey: '#f9f9f9',
        border: 'rgba(236,236,236,0.49)',
        boldlGrey: '#eee',
        elGrey: '#ddd',
        black: '#444',
        grey: '#999',
        two: '#222',
      }
    },
    plugins: [],
  }
}

