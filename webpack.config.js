const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
mode: 'development',
entry: './src/script.js',
devtool: 'inline-source-map',
    devServer: {
        static: './dist',
      },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'To Do List',
    }),
  ],
    module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'dist'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
    output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single',
  }
}