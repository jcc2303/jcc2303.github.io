// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'hsla(0, 100%, 50%, 1)',
        secondary: 'hsla(120, 100%, 50%, 1)',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      spacing: {
        2: '0.5rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
