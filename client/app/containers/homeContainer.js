var React = require('react');
var Home = require('../components/home');

var HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  propTypes: {
    username: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    console.log(this.props)
    return {
      username: this.props.username
    }
  },
  handleSeeProfile: function(event) {
    event.preventDefault();
    this.context.router.push({
      pathname: '/user',
      state: {
        username: this.state.username
      }
    });
  },
  handleTakeSurvey: function(event) {
    event.preventDefault();
    this.context.router.push({
      pathname: '/profile',
      state: {
        username: this.state.username
      }
    });
  },
  render: function() {
    return (
      <Home
        onTakeSurvey={this.handleTakeSurvey}
        onSeeProfile={this.handleSeeProfile}/>
    )
  }
});

module.exports = HomeContainer;
