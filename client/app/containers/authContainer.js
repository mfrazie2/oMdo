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
        isUser: this.state.isUser
      }
    });
  },
  handleUpdate: function (event){
    console.log(event.target)
    this.setState({
      username: event.target.value,
      password: event.target.value
    });
  },
  render: function() {
    return (
      <Auth onSubmit={this.handleSubmit}
        onUpdate={this.handleUpdate}
        username={this.state.username}
        password={this.state.password}
        text={this.state.buttonText} />
    )
  }
});

module.exports = AuthContainer;
