var surveyRoutes = require('./surveyRoutes');
var express = require('express');

var app = express.Router();

app.get('/', surveyRoutes.surveyTest);