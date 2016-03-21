var actions = require('../actions/actions');

var initialState = {
  surveys: [],
  viz: undefined,
  isLoading: true
}

function profileReducer(state, action) {
  if (state === undefined) {
    state = initialState;
  }
  switch(action.type) {
    case actions.SURVEYS_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        surveys: action.surveys
      });
      break;
    case actions.SURVEYS_NOT_LOADED:
      return Object.assign({}, state, {
        isLoading: true
      });
      break;
    case actions.SURVEYS_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      })
      break;
    default:
      return state;
  }
}

module.exports = profileReducer;
