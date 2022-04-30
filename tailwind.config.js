module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'hb-orange' : "#ff6000"
      },
      gridTemplateRows: {
        '4n' : 'repeat(4,minmax(0,max-content))'
      }
    },
  },
  plugins: [],
}
