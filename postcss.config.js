module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'nesting-rules': true
      }
    }),
    require('./postcss-scope-polyfill')
  ]
};
