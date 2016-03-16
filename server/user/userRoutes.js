var userController = require('./userController');
var express = require('express');

var app = express.Router();

app.get('/data', userController.dataTest);
app.get('/diary', userController.diaryTest);

module.exports = app;
