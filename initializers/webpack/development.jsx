/* eslint-disable */

const path = require('path');
const webpack = require('webpack');

export default {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '../../src/index.jsx')
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
        test: /\.scss$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(eot|png|ttf|svg|woff|woff2)$/,
        loader: "url-loader"
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.join(process.cwd(), "src"),
      "node_modules"
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
