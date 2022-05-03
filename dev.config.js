const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
	output: {
    path: path.join(__dirname,'public'),
    filename: 'bundle.js',
    //clean: true
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },{
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'url-loader'
    }]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new Dotenv()
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')

    }
  }
};