var React = require('react');
var Question = require('./question');

function NumericalQuestion (props) {
  return (
    <Question key={props.key}>
      <p>{props.text}</p>
      <select type='select' onChange={props.handleChange} tabIndex={props.tabIndex}>
        <option value="1" >{props.options[0]}</option>
        <option value="2" >{props.options[1]}</option>
        <option defaultValue="3" >{props.options[2]}</option>
        <option value="4" >{props.options[3]}</option>
        <option value="5" >{props.options[4]}</option>
      </select>
      {props.children}
    </Question>
  )
}

module.exports = NumericalQuestion;
