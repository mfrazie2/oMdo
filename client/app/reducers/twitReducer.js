var actions = require('../actions/actions');

var initialState = {
  isLoading: false,
  error: false,
  handle: '',
  emotional: [],
  writing: [],
  social: [],
  chartOptions: {
    scaleOverride: true,
    scaleSteps: 10,
    scaleStepWidth: 10,
    scaleStartValue: 0
  }
};

function twitReducer(state, action) {
  if(state === undefined) {
    state = initialState;
  }
  
  switch(action.type) {
    case actions.TWIT_SUBMIT:
      return Object.assign({}, state, {
        isLoading: true,
        handle: ''
      });
    case actions.TWIT_SUCCESS: 
      return Object.assign({}, state, {
        isLoading: false,
        emotional: action.tweets[0].tones,
        writing: action.tweets[1].tones,
        social: action.tweets[2].tones
      });
    case actions.TWIT_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: true
      });
    case actions.TWIT_CHANGE:
      return Object.assign({}, state, {
        handle: action.handle
      })
    default:
      return state;
  }
}

module.exports = twitReducer;
