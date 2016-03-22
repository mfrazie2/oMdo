var React = require('react');
var PropTypes = React.PropTypes;
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
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
  componentDidMount: function() {
    this.props.actions.loadSurveys();
  },
  render: function() {
    return (


    !!this.props.isLoading ? 

    <Loading />
    
    :

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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
