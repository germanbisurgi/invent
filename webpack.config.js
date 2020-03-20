const path = require('path')

module.exports = {
  entry: './src/harmony.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'harmony.js',
    libraryExport: 'default',
    library: 'Harmony',
    libraryTarget: 'umd'
  },
  mode: 'production',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          configFile: './.eslintrc.json',
          cache: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
}
