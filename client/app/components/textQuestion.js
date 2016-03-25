var React = require('react');
var Question = require('./question');
var styleable = require('react-styleable').default;
var css = require('../styles/question.css');

function TextQuestion (props) {
  return (
    <div className={props.css.textQuestion}>
      <p>Care to elaborate on your {props.category}?</p>
      <textarea rows='4' cols='50' tabIndex={props.tabIndex} onChange={props.handleChange} />
    </div>
  )
};

module.exports = styleable(css)(TextQuestion);
