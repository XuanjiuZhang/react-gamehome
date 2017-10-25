/*
 * @Author: zhangxuanjiu 
 * @Date: 2017-08-07 16:22:05 
 * @Last Modified by: zhangxuanjiu
 * @Last Modified time: 2017-10-25 16:16:24
 */
const path = require('path');
const webpack = require('webpack');

var webpackConfig = {
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.css', '.less']
  },
  context: path.join(__dirname, 'src'),
  entry: {
    bullScore: ['babel-polyfill', 'whatwg-fetch', './scoreShareBull/bullScore.jsx']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash:5].js',
    publicPath: './',
    chunkFilename: '[name].js?[hash:8]'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // 禁止生成warning
        drop_debugger: true,
        drop_console: true
      }
    })
  ],
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ],

  }
}

module.exports = webpackConfig