var path = require('path');
var webpack = require('webpack');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader : 'babel-loader',
        include: SRC_DIR,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
}
