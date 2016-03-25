var React = require('react');
var Twit = require('../components/twit');
var Tweet = require('../components/tweet');
var connect = require('react-redux').connect;
var twitActions = require('../actions/twitActions');
var homeActions = require('../actions/homeActions');
var bindActionCreators = require('redux').bindActionCreators;

var TwitContainer = React.createClass({
  contextTypes: {
    store: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
  },
  // To Do: Authenticate user before letting her access this page
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
  return {
    twitterHandle: state.twitReducer.twitterHandle,
    isLoading: state.twitReducer.isLoading,
    error: state.twitReducer.error,
    // tones: state.twitReducer.tones
    emotional: state.twitReducer.emotional,
    writing: state.twitReducer.writing,
    social: state.twitReducer.social,
    chartOptions: state.twitReducer.chartOptions
    // tweets: state.twitReducer.tweets
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, twitActions, homeActions), dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(TwitContainer);
