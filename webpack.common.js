const path = require('path');


module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  resolve:
    {
      extensions: ['.ts', '.js', '.json']
    },
};