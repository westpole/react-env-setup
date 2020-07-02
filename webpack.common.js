/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/scripts/index.tsx',
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      Assets: path.resolve(__dirname, 'src/assets/'),
      Store: path.resolve(__dirname, 'src/scripts/store/'),
      Services: path.resolve(__dirname, 'src/scripts/services/'),
      Config: path.resolve(__dirname, 'src/scripts/config/'),
      AppRoot: path.resolve(__dirname, 'src/scripts/'),
      Components: path.resolve(
        __dirname,
        'src/scripts/application/components/',
      ),
      TestTools: path.resolve(__dirname, 'tools/test-utils/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(pdf|jpg|png|gif|ico)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 50000,
            mimetype: 'application/font-woff',
            name: './fonts/[name].[ext]',
          },
        }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      favicon: path.join(__dirname, '/src/assets/images/favicon.ico'),
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};