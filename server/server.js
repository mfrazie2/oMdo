var express = require('express');
var path = require('path');
var middleware = require('./middleware');
require('dotenv').config();

var app = express();

var port = middleware.isProduction() ? process.env.port : 8080;

middleware.middleware(app, express);

app.listen(port, console.log.bind(console, 'Listening on port', port));

module.exports = app;
