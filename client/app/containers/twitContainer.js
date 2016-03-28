var React = require('react');
var Twit = require('../components/twitter/twit');
var Tweet = require('../components/twitter/tweet');
var connect = require('react-redux').connect;
var twitActions = require('../actions/twitActions');
var homeActions = require('../actions/homeActions');
var authActions = require('../actions/authActions');
var bindActionCreators = require('redux').bindActionCreators;

var TwitContainer = React.createClass({
  contextTypes: {
    store: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
  },
  // Adds auth but not sure if works
  componentWillMount: function () {
    this.props.actions.checkAuth();
  },
  handleTwitterChange: function(e) {
    e.preventDefault();
    var twitterHandle = e.target.value;
    this.props.actions.twitterChange(twitterHandle);
  },
  handleTwitSubmit: function(e) {
    e.preventDefault();
    var twitterHandle = this.context.store.getState().twitReducer;
    this.props.actions.submitTwit(twitterHandle);
  },
  render: function() {
    return (
      <div>
        <Twit
          onSubmit={this.handleTwitSubmit}
          onTwitterChange={this.handleTwitterChange}
          isLoading={this.props.isLoading}
        />
        <Tweet
          tones={this.props.tones}
          emotional={this.props.emotional}
          writing={this.props.writing}
          social={this.props.social}
          chartOptions={this.props.chartOptions}
         />
       </div>
    )
  }
});

function mapStateToProps(state, ownProps) {
  return Object.assign({}, state.twitReducer);
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, twitActions, homeActions, authActions), dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(TwitContainer);
