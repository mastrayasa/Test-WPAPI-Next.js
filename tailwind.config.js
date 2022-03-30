module.exports = {
  purge: [
      './pages/**/*.{js,ts,jsx,tsx}', 
      './components/**/*.{js,ts,jsx,tsx}'
    ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            'primary': '#22637c', // #387ebd
            'primary-light': '#389fc2', // '#437099'
            'secondary': '#00CCFF'
          },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
     
  ],
}
