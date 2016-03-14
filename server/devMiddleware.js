var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');
var compiler = webpack(config);

var webpackMiddlewareConfig = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
});

var webpackHotMiddlewareConfig = webpackHotMiddleware(compiler, {
    log: console.log
});

module.exports = function(app) {
  app.use(webpackMiddlewareConfig);
  app.use(webpackHotMiddlewareConfig);
}
