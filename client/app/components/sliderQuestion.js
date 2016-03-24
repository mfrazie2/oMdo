var React = require('react');
var Question = require('./question');
var styleable = require('react-styleable').default;
var css = require('../styles/survey.css');

function NumericalQuestion (props) {
  return (
    <Question key={props.key}>
      <p>{props.text} <em>(On a scale of 1-5)</em> </p>
      {props.minText}
      <input type='range' min="1" max="5" onChange={props.handleChange} />
      {props.maxText}
      <br />
    </Question>
  )
}

module.exports = styleable(css)(NumericalQuestion);
