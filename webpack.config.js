const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, './client/index.tsx'),
  target: 'web',
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  devServer: {
    publicPath: '/build/',
    contentBase: './client',
    hot: true,
    proxy: [
      {
        context: ['/auth'],
        target: 'http://localhost:3000',
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: './client/yourfile.css',
    }),
  ],
};
