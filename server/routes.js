var express = require('express');

var authRoutes = require('./auth/authRoutes');
var surveyRoutes = require('./survey/surveyRoutes');
var userRoutes = require('./user/userRoutes');

var app = express.Router();

app.use('/auth', authRoutes);
app.use('/survey', surveyRoutes);
app.use('/user', userRoutes);

module.exports = app;