const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'single-spa.config': './single-spa.config.ts',
  },
  output: {
    // publicPath: '/dist/',
    // filename: '[name].js',
    // path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html')}),
    new webpack.HotModuleReplacementPlugin()
  ],
  // externals: [],
  // devServer: {
  //   historyApiFallback: true
  // }
};
