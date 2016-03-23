var axios = require('axios');
var actions = require('./actions')
var browserHistory = require('react-router').browserHistory;

function authRequest() {
  return {type: actions.AUTH_REQUEST}
}
function authorized() {
  return {type: actions.AUTHORIZED}
}
function notAuthorized() {
  return {type: actions.NOT_AUTHORIZED}
}

exports.checkAuth = function() {
    return function(dispatch) {
      dispatch(authRequest());
      axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
      axios.get('/user/signedIn')
        .then(function(response) {
          dispatch(authorized());
        })
        .catch(function(error) {
          dispatch(notAuthorized());
          browserHistory.push('/signin');
        })
    }
  }
