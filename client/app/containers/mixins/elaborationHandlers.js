module.exports = {
  getInitialState: function() {
    this.elaborateHandlers = {
      sleepElaborateChange: function(e) {
        var sleepDetail = e.target.value;
        this.props.actions.sleepElaborateChange(sleepDetail);
      }.bind(this),
      moodElaborateChange: function(e) {
        var moodDetail = e.target.value;
        this.props.actions.moodElaborateChange(moodDetail);
      }.bind(this),
      eventElaborateChange: function(e) {
        var eventDetail = e.target.value;
        this.props.actions.eventElaborateChange(eventDetail);
      }.bind(this)
    }

    return null;
  }
};
