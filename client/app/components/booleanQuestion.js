var React = require('react');
var Question = require('./question');
var styleable = require('react-styleable').default;
var css = require('../styles/question.css');

function BooleanQuestion (props) {
  return (
    <div key={props.key} className='surveyRadioButtons'>
      <p>{props.text}</p>
      <input type="radio" value="yes" onChange={props.handleChange} /> Yes <br />
      <input type="radio" value="no" onChange={props.handleChange} /> No
      {props.children}
    </div>
  )
}

module.exports = styleable(css)(BooleanQuestion);
