var React = require('react');
var Survey = require('../components/survey');
var connect = require('react-redux').connect;
var surveyActions = require('../actions/surveyActions');
var store = require('../store/store');
var dispatch = store.dispatch;
// var store = this.context.store;


var SurveyContainer = React.createClass({
  // getInitialState: function() {
  //   return {
  //     generalFeel: undefined,
  //     anxietyLevel: undefined,
  //     energyLevel: undefined,
  //     sleepQuality: undefined,
  //     currentMood: undefined,
  //     majorEvent: undefined,
  //     moodElaborate: '',
  //     sleepElaborate: '',
  //     eventElaborate: ''
  //   }
  // },
  handleSurveySubmit: function(e) {
    e.preventDefault();
    console.log('context ', this.context);
    // Where do we submit post request?
    // console.log('getState ', store.getState().surveyReducer); 
    var survey = store.getState().surveyReducer;
    dispatch(surveyActions.surveySubmit());
    dispatch(surveyActions.surveyResponse(survey));
    // this.props.history.push('/profile');
    // console.log('getState ', store.getState().surveyReducer); 

    // this.setState({
    //   generalFeel: undefined,
    //   anxietyLevel: undefined,
    //   energyLevel: undefined,
    //   sleepQuality: undefined,
    //   currentMood: undefined,
    //   majorEvent: undefined,
    //   moodElaborate: '',
    //   sleepElaborate: '',
    //   eventElaborate: ''
    // });
  },

  handleFeelingChange: function(e) {
    // console.log('new mood level: ', e.target.value);
    // this.setState({
    //   generalFeel: e.target.value
    // });
    var feeling = e.target.value;
    dispatch(surveyActions.feelingChange(feeling));
  },
  handleAnxietyChange: function(e) {
    // console.log('new anxiety level: ', e.target.value);
    // this.setState({
    //   anxietyLevel: e.target.value
    // });
    var anxiety = e.target.value;
    dispatch(surveyActions.anxietyChange(anxiety));
  },
  handleEnergyChange: function(e) {
    // console.log('new energy level: ', e.target.value);
    // this.setState({
    //   energyLevel: e.target.value
    // });
    var energy = e.target.value;
    dispatch(surveyActions.energyChange(energy));
  },
  handleSleepChange: function(e) {
    // console.log('new sleep quality: ', e.target.value);
    // this.setState({
    //   sleepQuality: e.target.value
    // });
    var sleep = e.target.value;
    dispatch(surveyActions.sleepChange(sleep));
  },
  handleSleepElaborateChange: function(e) {
    // this.setState({
    //   sleepElaborate: e.target.value
    // });
    var sleepDetail = e.target.value;
    dispatch(surveyActions.sleepElaborateChange(sleepDetail))
  },
  handleMoodChange: function(e) {
    // console.log('new sleep quality: ', e.target.value);
    // this.setState({
    //   currentMood: e.target.value
    // });
    var mood = e.target.value;
    dispatch(surveyActions.moodChange(mood));
  },
  handleMoodElaborateChange: function(e) {
    // this.setState({
    //   moodElaborate: e.target.value
    // });
    var moodDetail = e.target.value;
    dispatch(surveyActions.moodElaborateChange(moodDetail));
  },
  handleMajorEventChange: function(e) {
    // console.log('new sleep quality: ', e.target.value);
    // this.setState({
    //   majorEvent: e.target.value
    // });
    var eventChange = e.target.value;
    dispatch(surveyActions.majorEventChange(eventChange));  
  },
  handleEventElaborateChange: function(e) {
    // this.setState({
    //   eventElaborate: e.target.value
    // });
    var eventDetail = e.target.value;
    dispatch(surveyActions.eventElaborateChange(eventDetail));
  },

  render: function() {
    console.log('getState ', store.getState());
    console.log('routing ', this.props.routes);
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
    error: state.surveyReducer.error,
    id: ownProps.params.id,
    filter: ownProps.location.query.filter
  };
};

module.exports = connect(mapStateToProps)(SurveyContainer);
