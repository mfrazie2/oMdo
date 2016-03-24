var React = require('react')
var styleable = require('react-styleable').default;
var css = require('../styles/main.css');

function Form (props) {
  return (
    <div className={props.css.form}>
      {props.children}
      <button onClick={props.onSubmit}>{props.text}</button>
    </div>
  )
};

module.exports = styleable(css)(Form);
