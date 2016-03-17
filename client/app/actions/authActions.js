// var axios = require('axios');

// //action types
// exports.SIGN_IN_SUBMIT = 'SIGN_IN_SUBMIT';
// exports.SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
// exports.SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

// exports.SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT';
// exports.SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
// exports.SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

// exports.SURVEY_SUBMIT = 'SURVEY_SUBMIT';
// exports.SURVEY_SUCCESS = 'SURVEY_SUCCESS';
// exports.SURVEY_FAILURE = 'SURVEY_FAILURE';

// //action-creators
// exports.signInSubmit = function() {
//   return {type: 'SIGN_IN_SUBMIT'};
// };
// exports.signInSuccess = function(user) {
//   return {type: 'SIGN_IN_SUCCESS', user};
// };
// exports.signInFailure = function(err) {
//   return {type: 'SIGN_IN_FAILURE', err};
// };


// exports.signUpSubmit = function() {
//   return {type: 'SIGN_UP_SUBMIT', signupForm};
// };
// exports.signUpSuccess = function(user) {
//   return {type: 'SIGN_UP_SUCCESS', signupForm};
// };
// exports.signUpFailure = function(err) {
//   return {type: 'SIGN_UP_FAILURE', signupForm};
// };

// exports.signIn = function() {
//   return function(dispatch) {
//     dispatch(signInSubmit());
//     axios.get('/auth')
//     .then(function(response) {
//       dispatch(signInSuccess(response.data));
//     })
//     .catch(function(response) {
//       dispatch(signInFailure(response.data));
//     });
//   }
// }

// exports.signUp = function() {
//   return function(dispatch) {
//     dispatch(signUpSubmit());
//     axios.get('/auth')
//     .then(function(response) {
//       dispatch(signUpSuccess(response.data));
//     })
//     .catch(function(response) {
//       dispatch(signUpFailure(response.data));
//     });
//   }
// }  
