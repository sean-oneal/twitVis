const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'client/src');
const BUILD_DIR = path.resolve(__dirname, 'client/dist');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const config = {
  entry: APP_DIR + '/index.js',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  // node: {
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty'
  // },
  // plugins: (process.env.NODE_ENV === 'production') ? [
  //   ...standardPlugins,
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify('production'),
  //     },
  //   }),
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: { warnings: false },
  //   }),
  // ] : [
  //   ...standardPlugins,
  // ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: APP_DIR,
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: APP_DIR,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;
