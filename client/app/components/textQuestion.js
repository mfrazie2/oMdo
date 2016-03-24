var React = require('react');
var styleable = require('react-styleable');
var css = require('../styles/survey.css');

function TextQuestion (props) {
  return (
    <div className='surveyTextarea'>
      <p>Care to elaborate on your {props.category} from last night?</p>
      <input type='textarea' onChange={props.handleChange} /><br />
    </div>
  )
};

module.exports = styleable(css)(TextQuestion);
