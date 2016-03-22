var actions = require('./actions')
var browserHistory = require('react-router').browserHistory;

function signOut() {
    return {type: actions.SIGN_OUT}
  }

module.exports = {
  requestSignOut: function() {
    // var signOut = this.signOut;
    return function(dispatch) {
      dispatch(signOut());
      localStorage.setItem('token', '');
      browserHistory.push('/signin');
    }
  }
}