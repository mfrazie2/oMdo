var React = require('react');
var Survey = require('../components/survey');
var connect = require('react-redux').connect;
var surveyActions = require('../actions/surveyActions');
var checkAuth = require('../actions/authActions').checkAuth;
var bindActionCreators = require('redux').bindActionCreators;

var SurveyContainer = React.createClass({
  contextTypes: {
    store: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
  },
  handleSurveySubmit: function(e) {
    e.preventDefault();
    var survey = this.context.store.getState().surveyReducer;
    this.props.actions.submitSurvey(survey);
  },

  handleFeelingChange: function(e) {
    var feeling = e.target.value;
    this.props.actions.feelingChange(feeling);
  },
  handleAnxietyChange: function(e) {
    var anxiety = e.target.value;
    this.props.actions.anxietyChange(anxiety);
  },
  handleEnergyChange: function(e) {
    var energy = e.target.value;
    this.props.actions.energyChange(energy);
  },
  handleSleepChange: function(e) {
    var sleep = e.target.value;
    this.props.actions.sleepChange(sleep);
  },
  handleSleepElaborateChange: function(e) {
    var sleepDetail = e.target.value;
    this.props.actions.sleepElaborateChange(sleepDetail);
  },
  handleMoodChange: function(e) {
    var mood = e.target.value;
    this.props.actions.moodChange(mood);
  },
  handleMoodElaborateChange: function(e) {
    var moodDetail = e.target.value;
    this.props.actions.moodElaborateChange(moodDetail);
  },
  handleMajorEventChange: function(e) {
    var eventChange = e.target.value;
    this.props.actions.majorEventChange(eventChange);  
  },
  handleEventElaborateChange: function(e) {
    var eventDetail = e.target.value;
    this.props.actions.eventElaborateChange(eventDetail);
  },

  render: function() {
    console.log('survey container props ', this.props);
    return (
      <Survey
        onSubmit={this.handleSurveySubmit}
        onFeelingChange={this.handleFeelingChange}
        onAnxietyChange={this.handleAnxietyChange}
        onEnergyChange={this.handleEnergyChange}
        onSleepChange={this.handleSleepChange}
        onMoodChange={this.handleMoodChange}
        onMajorEventChange={this.handleMajorEventChange}
        onSleepElaborateChange={this.handleSleepElaborateChange}
        onMoodElaborateChange={this.handleMoodElaborateChange}
        onEventElaborateChange={this.handleEventElaborateChange}
        isLoading={this.props.isLoading} 
      />
    )
  }
})

function mapStateToProps(state, ownProps) {
  return {
    generalFeel: state.surveyReducer.generalFeel,
    anxietyLevel: state.surveyReducer.anxietyLevel,
    energyLevel: state.surveyReducer.energyLevel,
    sleepQuality: state.surveyReducer.sleepQuality,
    currentMood: state.surveyReducer.currentMood,
    majorEvent: state.surveyReducer.majorEvent,
    moodElaborate: state.surveyReducer.moodElaborate,
    sleepElaborate: state.surveyReducer.sleepElaborate,
    eventElaborate: state.surveyReducer.eventElaborate,
    isLoading: state.surveyReducer.isLoading,
    error: state.surveyReducer.error
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(surveyActions, dispatch)
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
