/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          "0%": { width: "0ch" },
          "70%": { width: "60ch" }, // adjust according to text length
          "100%": { width: "60ch" }, // hold full text
        },
        cursorVisible: {
          "0%, 70%": { opacity: "1" },
          "80%, 100%": { opacity: "0" }, // cursor vanish after typing
        },
      },
      animation: {
        typewriter: "typewriter 6s steps(60) infinite",
        cursorVisible: "cursorVisible 6s steps(60) infinite",
      },
    },
  },
  plugins: [],
};


