module.exports = {
  getInitialState: function() {
    this.handlers = {
      feelingChange: function(e) {
        var feeling = e.target.value;
        this.props.actions.feelingChange(feeling);
      }.bind(this),
      anxietyChange: function(e) {
        var anxiety = e.target.value;
        this.props.actions.anxietyChange(anxiety);
      }.bind(this),
      energyChange: function(e) {
        var energy = e.target.value;
        this.props.actions.energyChange(energy);
      }.bind(this),
      sleepChange: function(e) {
        var sleep = e.target.value;
        this.props.actions.sleepChange(sleep);
      }.bind(this),
      sleepElaborateChange: function(e) {
        var sleepDetail = e.target.value;
        this.props.actions.sleepElaborateChange(sleepDetail);
      }.bind(this),
      moodChange: function(e) {
        var mood = e.target.value;
        this.props.actions.moodChange(mood);
      }.bind(this),
      moodElaborateChange: function(e) {
        var moodDetail = e.target.value;
        this.props.actions.moodElaborateChange(moodDetail);
      }.bind(this),
      majorEventChange: function(e) {
        var eventChange = e.target.value;
        this.props.actions.majorEventChange(eventChange);
      }.bind(this),
      eventElaborateChange: function(e) {
        var eventDetail = e.target.value;
        this.props.actions.eventElaborateChange(eventDetail);
      }.bind(this)
    }
    return null;
  }
};
