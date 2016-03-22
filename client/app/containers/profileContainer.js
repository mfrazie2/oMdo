var React = require('react');
var PropTypes = React.PropTypes;
var Profile = require('../components/profile');

var consoleLogSomething = require('../actions/profileActions').consoleLogSomething;
var dispatch = require('../store/store').dispatch;
var connect = require('react-redux').connect;
var store = require('../store/store');
var dispatch = store.dispatch;
var profileActions = require('../actions/profileActions');
var Profile = require('../components/profile');
var Diary = require('../components/diary');
var Visualization = require('../components/visualization');
var Loading = require('../components/loading');

var ProfileContainer = React.createClass({
  propTypes: {
    username: React.PropTypes.string,
    surveys: React.PropTypes.array
  },
  getInitialState: function() {
    dispatch(profileActions.loadSurveys());
    return null;
  },
  render: function() {
    return store.getState().profileReducer.isLoading
    ? (
      <Profile>
        <Loading />
      </Profile>
    )
    : (
      <Profile username={this.props.username}>
        <Visualization />
        <Diary surveys={this.props.surveys} />
      </Profile>
    )
  }
});

function mapStateToProps(state, ownProps) {
  return {
    surveys: state.profileReducer.surveys,
    isLoading: state.profileReducer.isLoading
  }
};

module.exports = connect(mapStateToProps)(ProfileContainer);
