/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'desaturated-dark-cyan': 'hsl(180, 29%, 50%)',
        // background
        'light-grayish-cyan': 'hsl(180, 52%, 96%)',
        //  filter tablets
        'lighter-grayish-cyan': 'hsl(180, 31%, 95%)',
        'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
        'very-dark-grayish-cyan': 'hsl(180, 14%, 20%)',
      },
      fontFamily: {
        lsMedium: ['LeagueSpartanMedium', 'sans-serif'],
        lsBold: ['LeagueSpartanBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
