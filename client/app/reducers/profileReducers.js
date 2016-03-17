var actions = require('../actions/actions');

var initialState = {
  isLoading: false,
  data: [],
  error: false,
  currentIndex: 0,
  reduxResult: 'This is not working!'
}

exports.profileReducer = function(state, action) {
  if(state === undefined) {
    state = initialState;
  }
  console.log('action.type ', action);
  switch(action.type) {
    case CONSOLE_LOG_SOMETHING:
      return Object.assign({}, state, {reduxResult: 'Did this work?'});
    default:
      console.log('Default is working');
      console.log('Initial state, ' + state.reduxResult);
      return state;
  }
}