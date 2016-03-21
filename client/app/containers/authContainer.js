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
  handleSubmit: function(e) {
    e.preventDefault();
    console.log('event', event);
    console.log('form ', event.target.value);
    var login = store.getState().authReducer;
    store.dispatch(authActions.signInRequest(login))
    // this.context.router.push({
    //   pathname: '/home',
    //   state: {
    //     username: this.state.username,
    //   }
    // });
  },
  handleUpdateUsername: function(e) {
    var username = e.target.value;
    dispatch(authActions.username(updateUsername))
    // this.setState({
    //   username: event.target.value
    // });
  },
  handleUpdatePassword: function(e) {
    var password = e.target.value;
    dispatch(authActions.updatePassword);
    // this.setState({
    //   password: event.target.value
    // })
  },
  render: function() {
    if(this.props.location.pathname === '/signin') {
      return (
        <Auth 
          onSubmit={this.handleSubmit}
          path={this.props.location.pathname}
        />
      )
    } else {
      return (
        <Auth 
          onSubmit={this.handleSubmit}
          path={this.props.location.pathname}
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
    isLoading: state.authReducer.password,
    error: state.authReducer.error
  }
};

module.exports = connect(mapStateToProps)(AuthContainer);
// module.exports = AuthContainer;
