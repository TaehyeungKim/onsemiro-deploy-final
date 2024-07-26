/** @type {import('tailwindcss').Config} */
const headerHeight = 75;

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        "main-frame": `calc(100vh * (473/919))`,

        "letter-width": "calc(473px * 0.8)",
        "letter-height": "calc(473px * 0.8 * 1.7)",
        "overflow-test": "200vh",
        "header-height": `${headerHeight}px`,
        "landing-height": `calc(100vh - ${headerHeight}px)`,
        "main-isection-height": "320px",
        "overlay-search": "600px",
      },
      colors: {
        background: "#F9F9F9",
        "background-darker": "#EAEAEA",
        mathing_count: "#F35757",
        main: "#BEAEE2",
        sub: "#ffa5c7",
        auth: "#ECA496",
        "main-icon-section": "#D9D9D9",
        mask: "rgba(0,0,0,0.54)",
        "mask-deeper": "rgba(0,0,0,0.33)",
        input: "#EAEAEA",
        "input-darker": "#A9A9A9",
        "input-less-darker": "#bcbcbc",
        pale: "#f5f5f5",
        "sub-pale": "#F2F2F2",
        "light-green": "#2EEF4D",
        mint: "#CDF0EA",
        "count-red": "#F35757",
        "play-black": "#3C3C3C",
      },
      borderRadius: {
        half: "50%",
      },
      backgroundImage: {
        letter: "url('/src/assets/background/letterpaper.png')",
        "main-image": "url('/src/assets/background/background.png')",
        "landing-image": "url('/src/assets/background/landing.png')",
      },
      backgroundSize: {
        frame: "473px",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
