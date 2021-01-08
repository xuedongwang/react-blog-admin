const path = require('path');
const webpack = require('webpack');
const express = require('express');
const HTMLPlugin = require('html-webpack-plugin');
const packageJson = require('../package.json');

const buildDirname = packageJson.name || 'dist';

const devWebpackConfig = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, `../${buildDirname}`),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src')
    },
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: resourcePath => resourcePath.endsWith('.module.scss'),
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              },
            }
          },
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: resourcePath => resourcePath.endsWith('.module.scss'),
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              },
            }
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false,
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false,
          name: 'media/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    progress: true,
    historyApiFallback: true,
    overlay: {
      errors: true
    },
    before: function(app, server, compiler) {
      app.use(express.static(path.join(__dirname, '../public')))
    },
    proxy: {}
  },
  plugins: [
    new HTMLPlugin({
      template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = devWebpackConfig;
