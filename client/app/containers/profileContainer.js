var React = require('react');
var PropTypes = React.PropTypes;
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var profileActions = require('../actions/profileActions');
var homeActions = require('../actions/homeActions');
var Profile = require('../components/profile/profile');
var Diary = require('../components/profile/diary');
var Visualization = require('../components/profile/visualization');
var Loading = require('../components/loading');

var ProfileContainer = React.createClass({
  propTypes: {
    username: React.PropTypes.string,
    surveys: React.PropTypes.array
  },
  componentWillMount: function() {
    this.props.actions.checkAuth();
    if (this.props.isLoggedIn) {
      this.props.actions.loadSurveys();
    }
  },
  render: function() {
    return (
    this.props.isLoading
    ? <Profile username={this.props.username}>
        <Loading />
      </Profile>

    : <Profile username={this.props.username}>
        <Visualization />
        <Diary surveys={this.props.surveys} />
      </Profile>
    )
  }
});

function mapStateToProps(state, ownProps) {
  return {
    username: state.authReducer.username,
    surveys: state.profileReducer.surveys,
    isLoading: state.profileReducer.isLoading,
    isLoggedIn: state.authReducer.isLoggedIn
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, profileActions, homeActions), dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
