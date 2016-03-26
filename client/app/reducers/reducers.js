var combineReducers = require('redux').combineReducers;
var routerReducer = require('react-router-redux').routerReducer;
var authReducer = require('./authReducer');
var profileReducer = require('./profileReducer');
var surveyReducer = require('./surveyReducer');
var twitReducer = require('./twitReducer');
var meditationsReducer = require('./meditationsReducer');

var actions = require('../actions/actions');

exports.rootReducer =  combineReducers({
  profileReducer: profileReducer,
  authReducer: authReducer,
  surveyReducer: surveyReducer,
  twitReducer: twitReducer,
  meditationsReducer: meditationsReducer
});
