var React = require('react');
var Question = require('../containers/question');
var dispatch = require('../store/store').dispatch;
var getState = require('../store/store').getState;
var questionActions = require('../actions/questionActions');

console.log(questionActions.prevQuestion);

var QuestionContainer = React.createClass({
  handlePrev: function() {
    dispatch(questionActions.prevQuestion);
  },
  handleNext: function() {
    dispatch(questionActions.nextQuestion);
  }
  render: function() {
    return(
      <Question
        onPrev={this.handlePrev}
        onNext={this.handleNext}
      />
    )
  }
});

module.exports = QuestionContainer;
