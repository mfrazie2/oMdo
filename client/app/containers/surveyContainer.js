var React = require('react');
var Survey = require('../components/survey');
var connect = require('react-redux').connect;
var SurveyContainer = React.createClass({
  getInitialState: function() {
    return {
      generalFeel: undefined,
      anxietyLevel: undefined,
      energyLevel: undefined,
      sleepQuality: undefined,
      currentMood: undefined,
      majorEvent: undefined,
      moodElaborate: '',
      sleepElaborate: '',
      eventElaborate: ''
    }
  },
  handleSurveySubmit: function(e) {
    e.preventDefault();
    console.log(this.state);
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
    dispatch(feelingChange(feeling));
  },
  handleAnxietyChange: function(e) {
    // console.log('new anxiety level: ', e.target.value);
    // this.setState({
    //   anxietyLevel: e.target.value
    // });
    var anxiety = e.target.value;
    dispatch(anxietyChange(anxiety));
  },
  handleEnergyChange: function(e) {
    // console.log('new energy level: ', e.target.value);
    // this.setState({
    //   energyLevel: e.target.value
    // });
    var energy = e.target.value;
    dispatch(energyChange(energy));
  },
  handleSleepChange: function(e) {
    // console.log('new sleep quality: ', e.target.value);
    // this.setState({
    //   sleepQuality: e.target.value
    // });
    var sleep = e.target.value;
    dispatch(sleepChange(sleep));
  },
  handleSleepElaborateChange: function(e) {
    // this.setState({
    //   sleepElaborate: e.target.value
    // });
    var sleepDetail = e.target.value;
    dispatch(sleepElaborateChange(sleepDetail))
  },
  handleMoodChange: function(e) {
    // console.log('new sleep quality: ', e.target.value);
    // this.setState({
    //   currentMood: e.target.value
    // });
    var mood = e.target.value;
    dispatch(moodChange(mood));
  },
  handleMoodElaborateChange: function(e) {
    // this.setState({
    //   moodElaborate: e.target.value
    // });
    var moodDetail = e.target.value;
    dispatch(moodElaborateChange(moodDetail));
  },
  handleMajorEventChange: function(e) {
    // console.log('new sleep quality: ', e.target.value);
    // this.setState({
    //   majorEvent: e.target.value
    // });
    var eventChange = e.target.value;
    dispatch(majorEventChange(eventChange));
  },
  handleEventElaborateChange: function(e) {
    // this.setState({
    //   eventElaborate: e.target.value
    // });
    var eventDetail = e.target.value;
    dispatch(eventElaborateChange(eventDetail));
  },

  render: function() {
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
        onEventElaborateChange={this.handleEventElaborateChange} />
    )
  }
})

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    error: state.error
  };
};

module.exports = connect(mapStateToProps)(SurveyContainer);
