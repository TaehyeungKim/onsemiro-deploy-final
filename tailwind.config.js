/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "main-frame": "473px",
        "letter-width": "calc(473px * 0.8)",
        "overflow-test": "200vh",
        "header-height": "75px",
        "main-isection-height": "320px",
      },
      colors: {
        background: "#f5f5f5",
        mathing_count: "#F35757",
        main: "#2EEF4D",
        sub: "#EFFFF0",
        auth: "#ECA496",
        "main-icon-section": "#D9D9D9",
        mask: "rgba(0,0,0,0.54)",
        "mask-deeper": "rgba(0,0,0,0.33)",
        profile: "#EAEAEA",
      },
      borderRadius: {
        half: "50%",
      },
      backgroundImage: {
        letter: "url('/src/assets/letterpaper.png')",
      },
    },
  },
  plugins: [],
};
