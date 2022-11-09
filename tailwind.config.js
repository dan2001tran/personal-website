/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#2CBCE9',
        red: '#DC4492',
        yellow: 'FDCC49',
        'deep-blue': '#010026',
        'dark-grey': '757575',
        'opaque-black': 'rgba(0,0,0,0.35)',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00BF5EE 7.21%, #FF45A 45.05%, #FFBA00 78.07%)',
      }),
    },
  },
  plugins: [],
};
