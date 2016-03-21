var actions = require('../actions/actions');

var initialState = {
  username: '',
  password: '',
  false: '',
  isLoading: false,
  error: false
}

function authReducer(state, action) {
  if(state === undefined) {
    state = initialState;
  }
  switch(action.type) {
    case actions.AUTH_SUBMIT:
    console.log('IN AUTH_SUBMIT switch!')
      return Object.assign({}, state, {
        username: '',
        password: '',
        isLoading: true
      })
    case actions.AUTH_SUCCESS:
    console.log('IN AUTH_SUCCESS switch!')
      return Object.assign({}, state, {
        isLoading: false
      })
    case actions.AUTH_FAILURE:
    console.log('IN AUTH_FAILURE switch!')
      return Object.assign({}, state, {
        isLoading: false,
        error: true
      })
    case actions.USERNAME:
      return Object.assign({}, state, {
        username: action.username
      })
    case actions.PASSWORD:
      return Object.assign({}, state, {
        password: action.password
      })
    default:
      return state
  }
}

module.exports = authReducer;
