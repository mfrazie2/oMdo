var express = require('express');
var twitterController = require('./twitterController');

var app = express.Router();

app.get('/twitter', twitterController.fetchTweets);

module.exports = app;