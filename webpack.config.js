const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  watch: false, 
  mode: 'development', 
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: [/\.(s*)css$/, /\.sass$/],
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.html', '.scss'],
    modules: ['node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};