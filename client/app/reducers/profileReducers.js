var CONSOLE_LOG_SOMETHING = require('../actions/actions').CONSOLE_LOG_SOMETHING;


var initialState = {
  reduxResult: 'This is not working!'
}

exports.profileReducer = function(state, action) {
  if(state === undefined) {
    state = initialState;
  }
  console.log('action.type ', action);
  switch(action.type) {
    case CONSOLE_LOG_SOMETHING:
      console.log('inside the case ', action.type);
      var newState = Object.assign({}, state, {reduxResult: 'Did this work?'});
      console.log('newState ', newState);
      return Object.assign({}, state, {reduxResult: 'Did this work?'});
    default:
      console.log('default ', state);
      return state;
  }
}