var userController = require('./userController');
var express = require('express');

var app = express.Router();

app.get('/', userController.getUser);
app.get('/data', userController.dataTest);
app.get('/diary', userController.diaryTest);
app.post('/signIn',userController.signIn);
app.post('/signUp', userController.signUp);
app.get('/signedIn', userController.checkAuth);
app.get('/userData', userController.getUserSurveys);
app.post('/userData', userController.postUserSurveys);

module.exports = app;
