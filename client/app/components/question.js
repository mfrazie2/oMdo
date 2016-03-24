var React = require('react');
var styleable = require('react-styleable').default
var css = require('../styles/question.css');

function Question(props) {
  return(
    <div className={props.css.root}>
      {props.children}
    </div>
  )
}

module.exports = styleable(css)(Question);
