var express = require('express');
var path = require('path');
var middleware = require('./middleware');
require('dotenv').config();
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');
var compiler = webpack(config);
var routes = require('./routes');

var app = express();

// middleware(app, express);
middleware(app);

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.port : 8080;

app.use('/api', routes);


if(!isProduction) {
  
  // Configure webpack dev middleware for use with server
  var webpackMiddleWareConfig = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
  });

  // Connect webpack dev middleware to server
  app.use(webpackMiddleWareConfig);

  // Connect webpack hot middleware to server
  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }))


  app.get('*', function response(req, res) {
    res.write(webpackMiddleWareConfig.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')));
    res.end();
  });

} else {
  app.use(express.static(path.join(__dirname, '..dist/index.html')));

  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '..dist/index.html'));
  })
}


app.listen(port, console.log.bind(console, 'Listening on port', port));

module.exports = app;
