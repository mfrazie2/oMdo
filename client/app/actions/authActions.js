var axios = require('axios');
var actions = require('./actions')
var browserHistory = require('react-router').browserHistory;


function authSubmit() {
  return {type: actions.AUTH_SUBMIT}
}
function authSuccess() {
  return {type: actions.AUTH_SUCCESS}
}
function authFailure() {
  return {type: actions.AUTH_FAILURE}
}

module.exports = {
  updateUsername: function(username) {
    return {type: actions.USERNAME, username}
  },
  updatePassword: function(password) {
    return {type: actions.PASSWORD, password}
  },
  signInRequest: function(login) {
    return function(dispatch) {
      dispatch(authSubmit())
          axios.post('/user/signIn', login)
            .then(function(response) {
              console.log('axios response ', response.data.token);
              localStorage.setItem('token', response.data.token);
              dispatch(authSuccess());
              browserHistory.push('/');
            })
        .catch(function(error) {
          console.log('axios error ', error);
          dispatch(authFailure());
        });
    }
  },
  signUpRequest: function(signUp) {
    var authSubmit = this.authSubmit;
    var authSuccess = this.authSuccess;
    var authFailure = this.authFailure;
    return function(dispatch) {
      dispatch(authSubmit())
          axios.post('/user/signUp', signUp)
            .then(function(response) {
              // if(error) {
              //   console.log('axios error ', error);
              //   dispatch(authFailure());
              // }
              console.log('axios response ', response.data.token);
              localStorage.setItem('token', response.data.token);
              dispatch(authSuccess());
              browserHistory.push('/');
            })
            // .then(browserHistory.push('/home'))
        .catch(function(error) {
          console.log('axios error ', error);
          dispatch(authFailure());
        });
    }
  }

}