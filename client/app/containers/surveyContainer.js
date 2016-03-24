var React = require('react');
var Survey = require('../components/survey');
var connect = require('react-redux').connect;
var handlersMixin = require('./mixins/surveyHandlers');
var surveyActions = require('../actions/surveyActions');
var homeActions = require('../actions/homeActions');
var bindActionCreators = require('redux').bindActionCreators;

var SurveyContainer = React.createClass({
  mixins: [handlersMixin],
  contextTypes: {
    store: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
  },
  componentWillMount: function() {
    this.props.actions.checkAuth();
  },
  handleSurveySubmit: function(e) {
    e.preventDefault();
    var survey = this.context.store.getState().surveyReducer;
    this.props.actions.submitSurvey(survey);
  },
  render: function() {
    return (
      <Survey
        onSubmit={this.handleSurveySubmit}
        onFeelingChange={this.handlers.feelingChange}
        onAnxietyChange={this.handlers.anxietyChange}
        onEnergyChange={this.handlers.energyChange}
        onSleepChange={this.handlers.sleepChange}
        onMoodChange={this.handlers.moodChange}
        onMajorEventChange={this.handlers.majorEventChange}
        onSleepElaborateChange={this.handlers.sleepElaborateChange}
        onMoodElaborateChange={this.handlers.moodElaborateChange}
        onEventElaborateChange={this.handlers.eventElaborateChange}
        isLoading={this.props.isLoading}
      />
    )
  }
});

function mapStateToProps(state, ownProps) {
  return {
    feeling: state.surveyReducer.feeling,
    anxiety: state.surveyReducer.anxiety,
    energy: state.surveyReducer.energy,
    sleep: state.surveyReducer.sleep,
    majorEvent: state.surveyReducer.majorEvent,
    mood: state.surveyReducer.mood,
    moodElaborate: state.surveyReducer.moodElaborate,
    sleepElaborate: state.surveyReducer.sleepElaborate,
    eventElaborate: state.surveyReducer.eventElaborate,
    isLoading: state.surveyReducer.isLoading,
    error: state.surveyReducer.error
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, surveyActions, homeActions), dispatch),
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
