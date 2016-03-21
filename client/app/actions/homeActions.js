var axios = require('axios');
var actions = require('./actions')
var browserHistory = require('react-router').browserHistory;

axios.defaults.headers.post['x-access-token'] = window.localStorage.token;

module.exports = {
  authRequest: function() {
    return {type: actions.AUTH_REQUEST}
  },
  authorized: function() {
    return {type: actions.AUTHORIZED}
  },
  notAuthorized: function() {
    return {type: actions.NOT_AUTHORIZED}
  },
  checkAuth: function() {
    console.log(window.localStorage.token);
    var authRequest = this.authRequest;
    var authorized = this.authorized;
    var notAuthorized = this.notAuthorized;
    return function(dispatch) {
      dispatch(authRequest());
      axios.get('/user/signedIn', {headers: {'x-access-token': localStorage.token}})
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
}