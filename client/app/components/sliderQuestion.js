var React = require('react');
var Question = require('./question');
var styleable = require('react-styleable').default;
var css = require('../styles/survey.css');

function NumericalQuestion (props) {
  return (
    <Question key={props.key}>
      <p>{props.text} <br/><em><small>(On a scale from {props.minText} to {props.maxText})</small></em></p>
      <input type='range' min='1' max='5' step='.01' onChange={props.handleChange} />
      <br />
    </Question>
  )
}

module.exports = styleable(css)(NumericalQuestion);
