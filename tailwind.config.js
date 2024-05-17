/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html"
  ],
  theme: {
    container: {
      center: "true",
    },
    extend: {
      width: {
        "mx-1170": "1170px",
      },
      translate: {
        "45": "-45px",
      },
      boxShadow: {
        "custom": "0px 5px 104px 26px rgba(0, 0, 0, 0.15)",
        "cardShadow": "0px 1px 22px 3px rgba(0, 0, 0, 0.07)",
        "pinkNeon": "0px 5px 12px 0px rgba(255,204,204,0.75)",
        "greyNeon": "0px 5px 12px 0px rgba(142,136,136,0.75)",
        "lightNeon": "0px 5px 12px 0px rgba(248,128,128,0.75)",
        "insetPink": "inset -5px -5px 10px 0px rgba(255,204,204,0.55)",
        "btn-shadow": "0px 5px 57px 3px rgba(217,57,57,0.5)",
        "box-night": "0px 5px 57px 3px #25788c",
        "darkTheme": "0px 5px 57px 3px rgba(210, 245, 252, 0.5)",
      },
      backgroundImage: {
        "hand": "url('../img/hand.svg')",
        "winter": "url('../img/winter.svg')",
        "xmax": "url('../img/footer-img.png')",
        "xnight": "url('../img/adult-xmax.png')",
        "forest": "url('../img/forest1.png')",
        "snow": "url('../img/snow.png')",
      },
      colors: {
        darkPink: "#d93939",
        myPink: "#ff5a5a",
        dirtBlue: "#345b6e",
        dirtWhite: "#ccc",
        mbYellow: "#e5e5e5",
        hzGrey: "#6697ae",
        lightGrey: "#f9f9f9",
        border: "rgba(236,236,236,0.49)",
        boldlGrey: "#eee",
        elGrey: "#ddd",
        black: "#444",
        grey: "#999",
        two: "#222",

        /*darkmode*/
        night: "#3094aa",
        txtNight: "#25788c",
        bnight: "#1e7a8e",
      }
    },
    plugins: [
      ],
  }
}

