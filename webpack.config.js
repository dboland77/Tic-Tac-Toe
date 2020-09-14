var path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), // change this
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./build",
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HTMLWebpackPlugin({
      template: path.resolve('./index.html'),
    })
  ],
  devServer: {
    contentBase: "./build",
  }
};
