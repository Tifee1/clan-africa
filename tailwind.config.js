/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        marine: 'hsl(213, 96%, 18%)',
        purplish: 'hsl(243, 100%, 62%)',
        pastel: 'hsl(228, 100%, 84%)',
        strawberry: 'hsl(354, 84%, 57%)',
        gray: 'hsl(231, 11%, 63%)',
      },
      boxShadow: {
        dark: '0 5px 15px rgba(0, 0, 0, 0.2)',
        light: ' 0 5px 15px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        md: '1008px',
        tm: '800px',
        sm: '600px',
      },
    },
  },
  plugins: [],
}
