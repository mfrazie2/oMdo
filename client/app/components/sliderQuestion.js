var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../styles/survey.css');

function NumericalQuestion (props) {
  return (
    <div key={props.key} className='feelingQuestion surveySlider'>
      <p>{props.text} <em>(On a scale of 1-5)</em> </p>
      {props.minText}
      <input type={props.type} min="1" max="5" onChange={props.handleChange} />
      {props.maxText}
      <br />
    </div>
  )
}

module.exports = styleable(css)(NumericalQuestion);
