var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../styles/survey.css');

function NumericalQuestion (props) {
  return (
    <div key={props.key} className='surveyRadioButtons'>
      <p>{props.text}</p>
      <input type='select'>
        <option value="1" onChange={props.handleChange} />{props.options[0]}<br />
        <option value="2" onChange={props.handleChange} />{props.options[1]}<br />
        <option value="3" onChange={props.handleChange} />{props.options[2]}<br />
        <option value="4" onChange={props.handleChange} />{props.options[3]}<br />
        <option value="5" onChange={props.handleChange} />{props.options[4]}<br />
      </input>
    </div>
  )
}

module.exports = styleable(css)(NumericalQuestion);
