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
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
};
