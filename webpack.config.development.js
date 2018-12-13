/* eslint-disable max-len */
/**
 * Build config for development process that uses Hot-Module-Replacement
 * https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const port = process.env.PORT || 3000;

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr&reload=true`,
    './app/index'
  ],

  output: {
    publicPath: `http://localhost:${port}/dist/`
  },

  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint-loader',
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        test: /\.global\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap'
        ]
      },

      {
        test: /^((?!\.global).)*\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      },


      // Add LESS support
      {
          test: /\.less$/,
          use: ["style-loader", {loader: 'css-loader', options: {sourceMap: 1}}, "postcss-loader", "less-loader"]
      },

      // Add SASS support  - compile all .global.scss files and pipe it to style.css
      {
        test: /\.global\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      // Add SASS support  - compile all other .scss files and pipe it to style.css
      {
        test: /^((?!\.global).)*\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },

      // WOFF Font
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          }
        },
      },
      // WOFF2 Font
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          }
        }
      },
      // TTF Font
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream'
          }
        }
      },
      // EOT Font
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader',
      },
      // SVG Font
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
          }
        }
      },
      // Common Image Formats
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: 'url-loader',
      }
    ]
  },

  plugins: [
    // https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
  ],

  // https://github.com/chentsulin/webpack-target-electron-renderer#how-this-module-works
  target: 'electron-renderer'
});
