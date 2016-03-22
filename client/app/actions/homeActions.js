var axios = require('axios');
var actions = require('./actions')
var browserHistory = require('react-router').browserHistory;

axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');


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
      axios.get('/user/signedIn')
        .then(function(response) {
          console.log('home/axios ', response);
          dispatch(authorized());
        })
        .catch(function(error) {
          console.log('home/axios error ', error);
          dispatch(notAuthorized());
          browserHistory.push('/signin');
        })
    }
  }

// {headers: {'x-access-token': localStorage.token}}