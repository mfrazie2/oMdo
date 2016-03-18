// var authActions = require('../actions/authActions');
// var combineReducers = require('redux').combineReducers;
// var routerReducer = require('react-router-redux').routerReducer;
// var questionReducer = require('./surveyReducers').questionReducer;
// var profileReducer = require('./profileReducers').profileReducer;

// var initialState = {
//   isLoading: false,
//   data: [],
//   error: false,
//   currentIndex: 0
// }

// function authTestReducer(state, action) {
//   if(state === undefined) {
//     state = initialState;    
//   }

//   switch(action.type) {
//     case authActions.SIGN_IN_SUBMIT:
//       return _.assign({}, state, {isLoading: true})
//     case authActions.SIGN_IN_SUCCESS:
//       return _.assign({}, state, {
//         isLoading: false,
//         data: data.concat(action.data)
//       })
//     case authActions.SIGN_IN_FAILURE:
//       return _.assign({}, state, {
//         isLoading: false,
//         error: true
//       })
//     default:
//       return state
//   }
// }


// exports.rootReducer =  combineReducers({
//   authTestReducer,
//   questionReducer,
//   profileReducer,
//   routing: routerReducer
// })

exports.rootReducer =  combineReducers({
  authTestReducer: authTestReducer,
  questionReducer: questionReducer,
  profileReducer: profileReducer,
  routing: routerReducer
})

