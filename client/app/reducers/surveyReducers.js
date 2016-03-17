var questionActions = require('../actions/questionActions');

var initialState = {
  isLoading: false,
  data: [],
  error: false,
  currentIndex: 0
}

function questionReducer(state, action) {
  if(state === undefined) {
    state = initialState;
  }
  switch(action.type) {
    case questionActions.PREV_QUESTION:
      console.log('Is this working?');
      return Object.assign({}, state, {
        currentQuestion: currentQuestion - 1
      })
    case questionActions.NEXT_QUESTION:
      return Object.assign({}, state, {
        currentQuestion: currentQuestion + 1
      })
    default:
      return state
  }
}

module.exports = questionReducer;
