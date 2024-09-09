/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '-1rem 1rem 0 0 black',
      },
      backgroundImage: {
        "memories":"url('/memories.svg')",
        "register":"url('/register.svg')",
        "register-leader":"url('/formLeader')",
      },
      fontFamily: {
        pixeboy: ["var(--pixeboy)"],
        crackman: ["var(--crackman)"],
        mercutio: ["var(--mercutio)"],
      },
      colors: {
        customBlue: "#3E8BFF", // Added custom color
      },

      screens: {
        small: { raw: "(max-height: 800px)" },
        'ws': '1300px',
      },
    },
  },
  plugins: [],
};
