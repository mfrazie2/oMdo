var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, './client/app/index.js')
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext']}
    ]
  },
  plugins: [
      HtmlWebpackPluginConfig,
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
  target: 'web'
};
