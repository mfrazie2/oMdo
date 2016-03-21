var React = require('react');
var Home = require('../components/home');
var dispatch = require('../store/store').dispatch;
var homeActions = require('../actions/homeActions');

var HomeContainer = React.createClass({
  componentDidMount: function() {
    dispatch(homeActions.checkAuth());
  },
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },
  // getInitialState: function() {
  //   return {
  //     username: this.props.location.state.username
  //   }
  // // },
  // handleSeeProfile: function(event) {
  //   event.preventDefault();
  //   this.context.router.push({
  //     pathname: '/user',
  //     state: {
  //       username: this.state.username
  //     }
  //   });
  // },
  // handleTakeSurvey: function(event) {
  //   event.preventDefault();
  //   this.context.router.push({
  //     pathname: '/profile',
  //     state: {
  //       username: this.state.username
  //     }
  //   });
  // },
  render: function() {
    return (
      <Home />
    )
  }
});

{/*username={this.state.username}
        onTakeSurvey={this.handleTakeSurvey}
        onSeeProfile={this.handleSeeProfile}*/}

module.exports = HomeContainer;
