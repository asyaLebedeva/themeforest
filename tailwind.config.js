/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./index2.html",
    "./index3.html",
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
        "cshadow": "0px 1px 22px 3px rgba(0, 0, 0, 0.07)",
        "pneon": "0px 5px 12px 0px rgba(255,204,204,0.75)",
        "gneon": "0px 5px 12px 0px rgba(142,136,136,0.75)",
        "lneon": "0px 5px 12px 0px rgba(248,128,128,0.75)",
        "ipink": "inset -5px -5px 10px 0px rgba(255,204,204,0.55)",
        "btn-shadow": "0px 5px 57px 3px rgba(217,57,57,0.5)",
        "box-night": "0px 5px 57px 3px #25788c",
        "box-light": "0px 3px 57px 3px rgba(210,245,252,0.4)",
        /*"darkNeon": "0px 5px 12px 0px rgba(210,245,252,0.75)",*/
      },
      dropShadow: {
        "DxS": "0 0.5px 0.5px rgba(255 255 255 / 1)",
        "TxS": "0 1px 1px rgba(236 236 236 / 0.49)",
      },
      backgroundImage: {
        "hand": "url('../img/hand.svg')",
        "winter": "url('../img/winter.svg')",
        "xmax": "url('../img/footer-img.png')",
        "xnight": "url('../img/adult-xmax.png')",
        "forest": "url('../img/forest1.png')",
        "snow": "url('../img/snow1.png')",
        "transfer": "linear-gradient(90deg, #ff5a5a 0%, #d93939 100%)",
        "newback": "url('../img/footer-transparent.png')",
      },
      colors: {
        dkpink: "#d93939",
        xypink: "#ff5a5a",
        drblue: "#345b6e",
        drwhite: "#ccc",
        byellow: "#e5e5e5",
        cgrey: "#6697ae",
        lgrey: "#f9f9f9",
        border: "rgba(236,236,236,0.49)",
        bgrey: "#eee",
        egrey: "#ddd",
        black: "#444",
        grey: "#999",
        two: "#222",
        seven: "#777777",

        /*darkmode*/
        night: "#3094aa",
        txtdark: "#25788c",
        bnight: "#1e7a8e",
      }
    },
    plugins: [
      ],
  }
}

