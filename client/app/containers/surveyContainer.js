var React = require('react');
var Survey = require('../components/survey');
var connect = require('react-redux').connect;
var surveyActions = require('../actions/surveyActions');
var store = require('../store/store');
var dispatch = store.dispatch;

var SurveyContainer = React.createClass({
  handleSurveySubmit: function(e) {
    e.preventDefault();
    console.log('context ', this.context);
    var survey = store.getState().surveyReducer;
    dispatch(surveyActions.submitSurvey(survey));
  },

  handleFeelingChange: function(e) {
    var feeling = e.target.value;
    dispatch(surveyActions.feelingChange(feeling));
  },
  handleAnxietyChange: function(e) {
    var anxiety = e.target.value;
    dispatch(surveyActions.anxietyChange(anxiety));
  },
  handleEnergyChange: function(e) {
    var energy = e.target.value;
    dispatch(surveyActions.energyChange(energy));
  },
  handleSleepChange: function(e) {
    var sleep = e.target.value;
    dispatch(surveyActions.sleepChange(sleep));
  },
  handleSleepElaborateChange: function(e) {
    var sleepDetail = e.target.value;
    dispatch(surveyActions.sleepElaborateChange(sleepDetail))
  },
  handleMoodChange: function(e) {
    var mood = e.target.value;
    dispatch(surveyActions.moodChange(mood));
  },
  handleMoodElaborateChange: function(e) {
    var moodDetail = e.target.value;
    dispatch(surveyActions.moodElaborateChange(moodDetail));
  },
  handleMajorEventChange: function(e) {
    var eventChange = e.target.value;
    dispatch(surveyActions.majorEventChange(eventChange));
  },
  handleEventElaborateChange: function(e) {
    var eventDetail = e.target.value;
    dispatch(surveyActions.eventElaborateChange(eventDetail));
  },

  render: function() {
    console.log('getState ', store.getState());
    console.log('survey container props', this.props);
    console.log('context ', this.context.router);
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

module.exports = connect(mapStateToProps)(SurveyContainer);
