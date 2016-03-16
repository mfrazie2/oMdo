var React = require('react');
var Survey = require('../components/survey');

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
    this.setState({
      generalFeel: e.target.value
    });
  },
  handleAnxietyChange: function(e) {
    // console.log('new anxiety level: ', e.target.value);
    this.setState({
      anxietyLevel: e.target.value
    });
  },
  handleEnergyChange: function(e) {
    // console.log('new energy level: ', e.target.value);
    this.setState({
      energyLevel: e.target.value
    });
  },
  handleSleepChange: function(e) {
    // console.log('new sleep quality: ', e.target.value);
    this.setState({
      sleepQuality: e.target.value
    });
  },
  handleSleepElaborateChange: function(e) {
    this.setState({
      sleepElaborate: e.target.value
    });
  },
  handleMoodChange: function(e) {
    // console.log('new sleep quality: ', e.target.value);
    this.setState({
      currentMood: e.target.value
    });
  },
  handleMoodElaborateChange: function(e) {
    this.setState({
      moodElaborate: e.target.value
    });
  },
  handleMajorEventChange: function(e) {
    // console.log('new sleep quality: ', e.target.value);
    this.setState({
      majorEvent: e.target.value
    });
  },
  handleEventElaborateChange: function(e) {
    this.setState({
      eventElaborate: e.target.value
    });
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

module.exports = SurveyContainer;