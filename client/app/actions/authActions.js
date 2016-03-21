var axios = require('axios');
var actions = require('./actions')
var browserHistory = require('react-router').browserHistory;

// axios.defaults.headers.post['x-access-token'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInNhbHQiOiIkMmEkMTAkSE1BRlkxMGNkMW8uT1VTRGdnc1lJdSIsInVzZXJuYW1lIjoibmFtZTEyIiwicGFzc3dvcmQiOiIkMmEkMTAkSE1BRlkxMGNkMW8uT1VTRGdnc1lJdW1laEVqWWNhR2NBTG56UTI2L2ZmVXJxZGVtNnRaOU8iLCJfaWQiOiI1NmVkZTAyYzI4ZmI3OWZiMzgyOWIxYmUiLCJjcmVhdGVkT24iOiIyMDE2LTAzLTE5VDIzOjI2OjM2LjEyM1oiLCJzdXJ2ZXkiOltdfQ.rNj1OVvgJTGoSmaJj2fJuQqwhE1pNXzWZiDzg9-IOyo";
module.exports = {
  updateUsername: function(username) {
    return {type: actions.USERNAME, username}
  },
  updatePassword: function(password) {
    return {type: actions.PASSWORD, password}
  },
  authSubmit: function() {
    return {type: actions.AUTH_SUBMIT}
  },
  authSuccess: function() {
    return {type: actions.AUTH_SUCCESS}
  },
  authFailure: function() {
    return {type: actions.AUTH_FAILURE}
  },
  signInRequest: function(login) {
    var authSubmit = this.authSubmit;
    var authSuccess = this.authSuccess;
    var authFailure = this.authFailure;
    return function(dispatch) {
      dispatch(authSubmit())
          axios.post('/user/signIn', login)
            .then(function(response) {
              console.log('axios response ', response);
              dispatch(authSuccess())
            })
            .then(browserHistory.push('/home'))
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
              console.log('axios response ', response);
              dispatch(authSuccess())
            })
            .then(browserHistory.push('/home'))
        .catch(function(error) {
          console.log('axios error ', error);
          dispatch(authFailure());
        });
    }
  }

}