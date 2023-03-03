module.exports = {
  content: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        'grey': '#555555',
      },
    },
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
    },
    fontFamily : {
      'inter' : ['Inter', 'sans-serif'],
    },
  plugins: [],
  }
}