/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        design: {
          darkcyan: "hsl(158, 36%, 37%)",
          cream: "hsl(30, 38%, 92%)",
          darkblue: "hsl(212, 21%, 14%)",
          darkgrayblue: "hsl(228, 12%, 48%)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
