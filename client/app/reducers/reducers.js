var combineReducers = require('redux').combineReducers;
var routerReducer = require('react-router-redux').routerReducer;
var authReducer = require('./authReducer');
var profileReducer = require('./profileReducers');
var surveyReducer = require('./surveyReducer')

var actions = require('../actions/actions');

exports.rootReducer =  combineReducers({
  authReducer: authReducer,
  surveyReducer: surveyReducer
  // routing: routerReducer
});