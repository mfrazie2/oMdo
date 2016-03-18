var React = require('react');
var PropTypes = React.PropTypes;
var Question = require('../components/question');

var QuestionContainer = React.createClass({
  getInitialState: function() {
    return {
      currentIndex: 0;
    }
  },
  getChild: function(props, currentIndex) {
    return React.Children.map(props.children, function(element, i){
      if (currentIndex === i){
        return element;
      }
    })
  },
  handlePrevQuestion: function() {
    this.setState({
      currentIndex--
    });
    getChild(props, this.state.currentIndex);
  },
  handleNextQuestion: function() {
    this.setState({
      currentIndex++
    });
    getChild(props, this.state.currentIndex);
  },
  render: {
    <Question
      currentIndex={this.state.currentIndex}
      getChild={this.getChild}
      prevQuestion={this.handlePrevQuestion}
      nextQuestion={this.handleNextQuestion}
    />
  }
})


// var React = require('react');
// var Question = require('../containers/question');
// var dispatch = require('../store/store').dispatch;
// var getState = require('../store/store').getState;
// var questionActions = require('../actions/questionActions');

// console.log(questionActions.prevQuestion);

// var QuestionContainer = React.createClass({
//   handlePrev: function() {
//     dispatch(questionActions.prevQuestion);
//   },
//   handleNext: function() {
//     dispatch(questionActions.nextQuestion);
//   }
//   render: function() {
//     return(
//       <Question
//         onPrev={this.handlePrev}
//         onNext={this.handleNext}
//       />
//     )
//   }
// });

// module.exports = QuestionContainer;
