/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "case-yellow": "hsl(var(--case-yellow))",
        "case-dark-blue": "hsl(var(--case-dark-blue))"
      },
      fontSize: {
        '5xl': '56px',
      },
      boxShadow: {
        combined: [
          "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
          "0 0px 15px 0px rgba(255, 255, 255, 0.07)",
        ].join(", "),
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "--case-yellow": "48, 96%, 89%",
          "--case-dark-blue": "222, 47%, 11%",
        }
      },
    ],
  },

}