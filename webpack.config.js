var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/app.js',
  output: {
    path: 'builds',
    filename: 'bundle.js'
  },
  devServer: {
    proxy: {
      '/api/statuses/*': {
        target: 'http://localhost',
        secure: false
      }
    }
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'The Wired'
  })],
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      }
    ]
  }
};
