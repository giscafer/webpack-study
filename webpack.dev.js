'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /.png|.jpg|.jpeg|.gif$/, // /.(png|jpg|gif|jpeg)$/
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
