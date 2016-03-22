var combineReducers = require('redux').combineReducers;
var routerReducer = require('react-router-redux').routerReducer;
var authReducer = require('./authReducer');
var profileReducer = require('./profileReducer');
var surveyReducer = require('./surveyReducer')

var actions = require('../actions/actions');

exports.rootReducer =  combineReducers({
  profileReducer: profileReducer,
  authReducer: authReducer,
  surveyReducer: surveyReducer
  // routing: routerReducer
});