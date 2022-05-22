module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'hb-orange' : "#ff6000",
        'hb-light-orange' : "rgb(246, 159, 41)",
      },
      gridTemplateRows: {
        '4n' : 'repeat(4,minmax(0,max-content))'
      }
    },
  },
  plugins: [],
}
