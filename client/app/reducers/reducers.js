var combineReducers = require('redux').combineReducers;
var routerReducer = require('react-router-redux').routerReducer;
var authReducer = require('./authReducer');
var profileReducer = require('./profileReducers');
var surveyReducer = require('./surveyReducer')

exports.rootReducer =  combineReducers({
  authReducer: authReducer,
  surveyReducer: surveyReducer,
  routing: routerReducer
});
