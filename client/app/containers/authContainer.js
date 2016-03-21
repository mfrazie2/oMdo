var React = require('react');
var Auth = require('../components/auth');
var connect = require('react-redux').connect
var authActions = require('../actions/authActions');
var store = require('../store/store');

var AuthContainer = React.createClass({
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },
  // getInitialState: function() {
  //   var text;
  //   if (this.props.location.pathname === '/signin') {
  //     text = 'Sign in';
  //   }
  //   if (this.props.location.pathname === '/signup') {
  //     text = 'Sign up';
  //   }
  //   return {
  //     username: '',
  //     password: '',
  //     buttonText: text || 'Submit'
  //   };
  // },
  handleSignInSubmit: function(e) {
    e.preventDefault();
    var login = store.getState().authReducer;
    store.dispatch(authActions.signInRequest(login));
    // this.context.router.push({
    //   pathname: '/home',
    //   state: {
    //     username: this.state.username,
    //   }
    // });
  },
  handleSignUpSubmit: function(e) {
    e.preventDefault();
    var login = store.getState().authReducer;
    store.dispatch(authActions.signUpRequest(login));
  },
  handleUpdateUsername: function(e) {
    var username = e.target.value;
    store.dispatch(authActions.updateUsername(username))
    // this.setState({
    //   username: event.target.value
    // });
  },
  handleUpdatePassword: function(e) {
    var password = e.target.value;
    store.dispatch(authActions.updatePassword(password));
    // this.setState({
    //   password: event.target.value
    // })
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

{/*onUpdateUsername={this.handleUpdateUsername}
        onUpdatePassword={this.handleUpdatePassword}
        username={this.state.username}
        password={this.state.password}
        text={this.state.buttonText}*/}

function mapStateToProps(state) {
  return {
    username: state.authReducer.username,
    password: state.authReducer.password,
    isLoading: state.authReducer.isLoading,
    error: state.authReducer.error
  }
};

module.exports = connect(mapStateToProps)(AuthContainer);
// module.exports = AuthContainer;
