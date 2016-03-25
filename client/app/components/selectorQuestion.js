var React = require('react');
var Question = require('./question');

function NumericalQuestion (props) {
  return (
    <Question key={props.key}>
      <p>{props.text}</p>
      <select type='select' tabIndex={props.tabIndex}>
        <option value="1" onChange={props.handleChange}>{props.options[0]}</option>
        <option value="2" onChange={props.handleChange}>{props.options[1]}</option>
        <option defaultValue="3" onChange={props.handleChange}>{props.options[2]}</option>
        <option value="4" onChange={props.handleChange}>{props.options[3]}</option>
        <option value="5" onChange={props.handleChange}>{props.options[4]}</option>
      </select>
      {props.children}
    </Question>
  )
}

module.exports = NumericalQuestion;
