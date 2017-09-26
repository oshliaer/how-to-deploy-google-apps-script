'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/client/app.js',
  output: {
    filename: './js-app.html',
    library: 'app'
  },
  module: {
    rules: [{
      test: /\.sass$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.(html)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'html_[name].[ext]',
            context: ''
          }
        }
      ]
    }]
  },
  plugins: [
    new ExtractTextPlugin('./css-styles.html')
  ]
};