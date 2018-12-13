/**
 * Build config for electron 'Main Process' file
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  devtool: 'source-map',

  entry: ['./app/main.development'],

  // 'main.js' in root
  output: {
    path: __dirname,
    filename: './app/main.js'
  },

  plugins: [
    // Add source map support for stack traces in node
    // https://github.com/evanw/node-source-map-support
    // new webpack.BannerPlugin(
    //   'require("source-map-support").install();',
    //   { raw: true, entryOnly: false }
    // ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  /**
   * Set target to Electron specific node.js env.
   * https://github.com/chentsulin/webpack-target-electron-renderer#how-this-module-works
   */
  target: 'electron-main',

  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false
  },
});
