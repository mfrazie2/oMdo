var React = require('react');
var Auth = require('../components/auth');
var connect = require('react-redux').connect
var authActions = require('../actions/authActions');
var bindActionCreators = require('redux').bindActionCreators;

// var connect = require('react-redux').connect
// var authActions = require('../actions/authActions');
// var configureStore = require('../store/store').configureStore;
// var connect = require('react-redux').connect;
// console.log(typeof connect)
// var actions = require('../actions/actions');
// var store = configureStore();

// var signIn = function() {
//   store.dispatch(actions.signIn());
// }



var AuthContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired
  },
  handleSignInSubmit: function(e) {
    e.preventDefault();
    var login = this.context.store.getState().authReducer;
    this.props.actions.signInRequest(login);
  },
  handleSignUpSubmit: function(e) {
    e.preventDefault();
    var login = this.context.store.getState().authReducer;
    this.props.actions.signUpRequest(login);
  },
  handleUpdateUsername: function(e) {
    var username = e.target.value;
    this.props.actions.updateUsername(username);
  },
  handleUpdatePassword: function(e) {
    var password = e.target.value;
    this.props.actions.updatePassword(password);
  },
  render: function() {
    if(this.props.location.pathname === '/signin') {
      return (
        <Auth 
          onSignInSubmit={this.handleSignInSubmit}
          onUpdateUsername={this.handleUpdateUsername}
          onUpdatePassword={this.handleUpdatePassword}
          path={this.props.location.pathname}
          isLoading={this.props.isLoading}
        />
      )
    } else {
      return (
        <Auth 
          onSignUpSubmit={this.handleSignUpSubmit}
          onUpdateUsername={this.handleUpdateUsername}
          onUpdatePassword={this.handleUpdatePassword}
          path={this.props.location.pathname}
          isLoading={this.props.isLoading}
        />
      )
    }
  }
});

function mapStateToProps(state) {
  return {
    username: state.authReducer.username,
    password: state.authReducer.password,
    isLoading: state.authReducer.isLoading,
    error: state.authReducer.error
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
