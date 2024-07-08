/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "main-frame": "473px",
        "overflow-test": "200vh",
        "header-height": "75px",
        "main-isection-height": "320px",
      },
      colors: {
        background: "#f5f5f5",
        mathing_count: "#F35757",
        main: "#2EEF4D",
        sub: "#EFFFF0",
        "main-icon-section": "#D9D9D9",
      },
      borderRadius: {
        half: "50%",
      },
    },
  },
  plugins: [],
};
