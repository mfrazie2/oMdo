var React = require('react')
var styleable = require('react-styleable').default;
var css = require('../styles/main.css');

function Form (props) {
  return (
    <div className={props.css.form}>
      <div className={props.formClassName || ''}>
        <form>
          {props.children}
          <button className={props.buttonClassName || ''} onClick={props.onSubmit}>{props.text}</button>
        </form>
      </div>
    </div>
  )
};

module.exports = styleable(css)(Form);
