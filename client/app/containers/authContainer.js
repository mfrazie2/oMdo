var React = require('react');
var Auth = require('../components/auth');
// var connect = require('react-redux').connect
// var authActions = require('../actions/authActions');


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
  handleSubmit: function(event) {
    event.preventDefault();
    console.log('event', event);
    console.log('form ', event.target.value);
    // this.context.router.push({
    //   pathname: '/home',
    //   state: {
    //     username: this.state.username,
    //   }
    // });
  },
  handleUpdateUsername: function(event) {
    // this.setState({
    //   username: event.target.value
    // });
  },
  handleUpdatePassword: function(event) {
    // this.setState({
    //   password: event.target.value
    // })
  },
  render: function() {
    return (
      <Auth onSubmit={this.handleSubmit}
      />
    )
  }
});

{/*onUpdateUsername={this.handleUpdateUsername}
        onUpdatePassword={this.handleUpdatePassword}
        username={this.state.username}
        password={this.state.password}
        text={this.state.buttonText}*/}

// function mapStateToProps(state) {
//   username: state.authReducer.username,
//   password: state.authReducer.password,
//   error: state.authReducer.error
// };

// module.exports = connect(mapStateToProps)(AuthContainer);
module.exports = AuthContainer;
