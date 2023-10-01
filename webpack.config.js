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
        title: 'Output Management',
    }),
  ],
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
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
  },
};