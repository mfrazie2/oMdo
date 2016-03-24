var React = require('react');
var Question = require('./question');
var styleable = require('react-styleable').default;
var css = require('../styles/survey.css');

function TextQuestion (props) {
  return (
    <Question>
      <p>Care to elaborate on your {props.category}?</p>
      <input type='textarea' onChange={props.handleChange} /><br />
    </Question>
  )
};

module.exports = styleable(css)(TextQuestion);
