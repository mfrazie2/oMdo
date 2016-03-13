<<<<<<< c9bca7abcac29864787833c7aa12503e528a39b7
var React = require('react');
var Auth = require('../components/auth');

var AuthContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    var text;
    if (this.props.location.pathname === '/signin') {
      text = 'Sign in';
    }
    if (this.props.location.pathname === '/signup') {
      text = 'Sign up';
    }
    return {
      username: '',
      password: '',
      buttonText: text || 'Submit'
    };
  },
  handleSubmit: function(event) {
    event.preventDefault();
    this.context.router.push({
      pathname: '/home',
      state: {
        username: this.state.username,
      }
    });
  },
  handleUpdateUsername: function(event) {
    this.setState({
      username: event.target.value
    });
  },
  handleUpdatePassword: function(event) {
    this.setState({
      password: event.target.value
    })
  },
  render: function() {
    return (
      <Auth onSubmit={this.handleSubmit}
        onUpdateUsername={this.handleUpdateUsername}
        onUpdatePassword={this.handleUpdatePassword}
        username={this.state.username}
        password={this.state.password}
        text={this.state.buttonText} />
    )
  }
});

module.exports = AuthContainer;
||||||| merged common ancestors
=======
var React = require('react');
var Auth = require('../components/auth');

var AuthContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    var text;
    if (this.props.location.pathname === '/signin') {
      text = 'Sign in';
    }
    if (this.props.location.pathname === '/signup') {
      text = 'Sign up';
    }
    return {
      username: '',
      password: '',
      buttonText: text || 'Submit'
    };
  },
  handleSubmit: function(event) {
    event.preventDefault();
    this.context.router.push({
      pathname: '/home',
      state: {
        username: this.state.username,
      }
    });
  },
  handleUpdateUsername: function(event) {
    this.setState({
      username: event.target.value
    });
  },
  handleUpdatePassword: function(event) {
    this.setState({
      password: event.target.value
    })
  },
  render: function() {
    return (
      <Auth onSubmit={this.handleSubmit}
        onUpdateUsername={this.handleUpdateUsername}
        onUpdatePassword={this.handleUpdatePassword}
        username={this.state.username}
        password={this.state.password}
        text={this.state.buttonText} />
    )
  }
});

module.exports = AuthContainer;
>>>>>>> (fix)Begins fixing auth container onChange
