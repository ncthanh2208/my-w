module.exports = {
  mode: 'jit',
  purge: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.js',
    './pages/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      black: '#0D1117',
      'dark-grey':  '#161B22',
      grey: '#d3d3d3',
      white: '#ffffff',
      yellow: '#FCA311'
    },
    fontFamily: {
      'default': ['Source Code Pro']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
