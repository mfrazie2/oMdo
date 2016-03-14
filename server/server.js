var express = require('express');
var path = require('path');
var middleware = require('./middleware');
require('dotenv').config();
var devMiddleware = require('./devMiddleware');
var routes = require('./routes');

var app = express();
middleware(app);

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.port : 8080;

app.use('/api', routes);

if(!isProduction) {
  devMiddleware(app);

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
