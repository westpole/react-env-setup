/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    stats: {
      assets: false,
      chunks: false,
      cached: false,
      modules: false,
      reasons: false,
    },
  },
  output: {
    publicPath: '/',
  },
});