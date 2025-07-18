export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'xs': '0.2rem',
        'sm': '0.4rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
      },
      fontSize: {
        'xs': '0.55rem',
        'sm': '0.675rem',
        'md': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
      },
    },
  },
  plugins: [],
}