/*
 * @Author: zhangxuanjiu 
 * @Date: 2017-08-31 10:29:41 
 * @Last Modified by: zhangxuanjiu
 * @Last Modified time: 2017-10-25 21:26:25
 */

const path = require('path')
const webpack = require('webpack')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

var webpackConfig = {
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.css', '.less']
  },
  context: path.join(__dirname, 'src'),
  entry: {
    bullScore: [
      'babel-polyfill',
      'whatwg-fetch',
      './scoreShareBull/bullScore.jsx',
      'webpack-dev-server/client?http://localhost:8085/',
      'webpack/hot/dev-server',
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: './',
    chunkFilename: '[name].js?[hash:8]'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8085' })
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