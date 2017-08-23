import path from 'path';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const root = path.join(process.cwd(), 'src'); // eslint-disable-line

export default {
  devtool: 'source-map',

  entry: {
    bundle: './src/index.jsx'
  },

  output: {
    path: path.join(process.cwd(), 'dist', 'assets'),
    publicPath: '/assets/',
    filename: '[name].[chunkhash].js'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?importLoaders=1']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(eot|png|ttf|svg|woff|woff2)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.join(process.cwd(), 'src'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locales&/, /^\.\/(en|ru)$/), // eslint-disable-line
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) { // eslint-disable-line
        return module.context && module.context.indexOf('node_modules') != -1;
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: 'source-map'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
};
