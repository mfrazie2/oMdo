var combineReducers = require('redux').combineReducers;
var routerReducer = require('react-router-redux').routerReducer;
var authReducer = require('./authReducer');
var profileReducer = require('./profileReducer');
var surveyReducer = require('./surveyReducer')

var actions = require('../actions/actions');

var initialState = {
  isLoggedIn: false,
  isLoading: false
};

function homeReducer(state, action) {
  if(state === undefined) {
    state = initialState;
  }
  switch(action.type) {
    case actions.AUTH_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      })
    case actions.AUTHORIZED:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isLoading: false
      })
    case actions.NOT_AUTHORIZED:
      return Object.assign({}, state, {
        isLoading: false
      })
    case actions.SIGN_OUT:
      return Object.assign({}, state, {
        isLoggedIn: false
      })
    default:
      return state
  }
} 

exports.rootReducer =  combineReducers({
  homeReducer: homeReducer,
  authReducer: authReducer,
  surveyReducer: surveyReducer,
  profileReducer: profileReducer,
  routing: routerReducer
});
