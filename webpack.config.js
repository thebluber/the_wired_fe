module.exports = {
  entry: './app/app.js',
  output: {
    path: 'builds',
    filename: 'bundle.js'
  },
  devServer: {
    proxy: {
      '/api/statuses/*': {
        target: 'https://social.heldscal.la',
        secure: false
      }
    }
  },
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
