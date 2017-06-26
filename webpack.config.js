/* eslint-disable */

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.jsx')
  ],

  output: {
    path: path.join(process.cwd(), "dist"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          "css-loader?importLoaders=1"
        ]
      },
      {
        test: /\.(eot|png|ttf|svg|woff|woff2)$/,
        loader: "url-loader"
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.join(process.cwd(), "src"),
      "node_modules"
    ]
  }
};
