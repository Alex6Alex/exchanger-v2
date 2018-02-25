const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  devtool: debug ? 'inline-sourcemap' : false,
  entry: './client.js',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: './client.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
