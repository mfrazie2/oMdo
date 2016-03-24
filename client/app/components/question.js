var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styleable = require('react-styleable').default
var css = require('../styles/question.css');
var dispatch = require('../store/store').dispatch;
var currentIndex = currentIndex || 0;

function getChild(props, currentIndex) {
  return props.children[currentIndex];
}

function prevChild(props, currentIndex) {
  return props.children[currentIndex-1];
}

function nextChild(props, currentIndex) {
  return props.children[currentIndex+1];
}

function Question(props) {
  return(
    <div className={props.css.root}>
      {/*<button className={props.css.prev} onClick={testFunc()}>last question</button>*/}
      <span className={props.css.currentQuestion}>{props.children}</span>
      {/*<button className={props.css.next} onClick={currentIndex+1}>next question</button>*/}
    </div>
  )
}

module.exports = styleable(css)(Question)
