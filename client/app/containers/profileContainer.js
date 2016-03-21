var React = require('react');
var connect = require('react-redux').connect;
var store = require('../store/store');
var dispatch = store.dispatch;
var profileActions = require('../actions/profileActions');
var Profile = require('../components/profile');
var Diary = require('../components/diary');
var Visualization = require('../components/visualization');
var Loading = require('../components/loading');

var ProfileContainer = React.createClass({
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
      <Profile username={store.getState().profileReducer.username}>
        <Visualization />
        <Diary surveys={store.getState().profileReducer.surveys} />
      </Profile>
    )
  }
});

function mapStateToProps(state, ownProps) {
  return {
    // token: localStorage.get('token'),
    surveys: state.profileReducer.surveys,
    isLoading: state.profileReducer.isLoading
  }
};

module.exports = connect(mapStateToProps)(ProfileContainer);
