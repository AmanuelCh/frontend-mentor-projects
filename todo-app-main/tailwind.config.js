/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        // primary
        brightBlue: 'hsl(220, 98%, 61%)',
        // neutral
        // Light theme
        veryLightGray: 'hsl(0, 0%, 98%)',
        veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        lightGrayishBlue: 'hsl(233, 11%, 84%)',
        veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
        // Dark theme
        veryDarkBlue: 'hsl(235, 21%, 11%)',
        veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        lightGrayishBlueDark: 'hsl(234, 39%, 85%)',
        lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
        darkGrayishBlue: 'hsl(234, 11%, 52%)',
        veryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
        veryDarkGrayishBlueInput: 'hsl(237, 14%, 26%)',
      },
      // fontFamily: {
      //   display: ['Josefin Sans', 'sans-serif'],
      // },
    },
  },
  plugins: [],
};
