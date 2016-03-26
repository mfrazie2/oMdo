module.exports = {
  getInitialState: function() {
    this.handlers = {};
    this.handlers = {
      survey: this.props.switchView.bind(this, 0),
      twitter: this.props.switchView.bind(this, 1)
    }
    return null;
  }
};
