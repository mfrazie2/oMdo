var React = require('react');
var Question = require('./question');
var styleable = require('react-styleable').default;
var css = require('../styles/question.css');

function BooleanQuestion (props) {
  return (
    <Question key={props.key} className='surveyRadioButtons'>
      <p>{props.text}</p>
      <ul className={props.css.radioList}>
        <li><input type="radio" name='boolean' value="yes" onChange={props.handleChange} /> Yes</li>
        <li><input type="radio" name='boolean' value="no" onChange={props.handleChange} /> No</li>
      </ul>
      {props.children}
    </Question>
  )
}

module.exports = styleable(css)(BooleanQuestion);
