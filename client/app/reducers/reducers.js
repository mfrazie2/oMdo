var actions = require('../actions/actions');
var combineReducers = require('redux').combineReducers;
var routerReducer = require('react-router-redux').routerReducer;

var initialState = {
  isLoading: false,
  data: [],
  error: false
}

function authTestReducer(state, action) {
  if(state === undefined) {
    state = initialState
  }

  switch(action.type) {
    case actions.SIGN_IN_SUBMIT:
      return _.assign({}, state, {isLoading: true})
    case actions.SIGN_IN_SUCCESS:
      return _.assign({}, state, {
        isLoading: false,
        data: data.concat(action.data)
      })
    case actions.SIGN_IN_FAILURE:
      return _.assign({}, state, {
        isLoading: false,
        error: true
      })
    default:
      return state
  }
}

exports.rootReducer =  combineReducers({
  authTestReducer,
  routing: routerReducer
})
