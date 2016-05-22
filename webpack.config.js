module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          plugins: ['transform-class-properties'],
          presets: ['es2017', 'react']
        }
      }
    ]
  }
}