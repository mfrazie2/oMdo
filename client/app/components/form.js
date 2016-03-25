var React = require('react')
var styleable = require('react-styleable').default;
var css = require('../styles/main.css');

function Form (props) {
  return (
    <div className={props.css.form}>
      <div className={props.className || ''}>
        <form>
          {props.children}
          <button onClick={props.onSubmit}>{props.text}</button>
        </form>
    </div>
    </div>
  )
};

module.exports = styleable(css)(Form);
