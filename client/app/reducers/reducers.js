var combineReducers = require('redux').combineReducers;
var routerReducer = require('react-router-redux').routerReducer;
var questionReducer = require('./surveyReducers').questionReducer;
var profileReducer = require('./profileReducers').profileReducer;
var surveyReducer = require('./surveyReducer')

exports.rootReducer =  combineReducers({
  authTestReducer: authTestReducer,
  questionReducer: questionReducer,
  profileReducer: profileReducer,
  surveyReducer: surveyReducer,
  routing: routerReducer
});

