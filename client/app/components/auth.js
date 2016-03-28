var React = require('react');
var Form = require('./form');
var styleable = require('react-styleable').default;
var css = require('../styles/auth.css')

function Auth(props) {
  return (
    <div className={props.css.root}>
      <Form
        formClassName={props.css.form}
        buttonClassName={props.css.submit}
        onSubmit={props.onSubmit}
        text={props.text}
        >
        <div>
          <input
            tabIndex='1'
            label='username'
            className={props.css.input}
            type='text'
            placeholder='username'
            onChange={props.onUpdateUsername}
            />
        </div>
        <div>
          <input
            tabIndex='20'
            label='password'
            className={props.css.input}
            type='password'
            name='password'
            placeholder='password'
            onChange={props.onUpdatePassword}
            />
        </div>
      </Form>
    </div>
  )
};

module.exports = styleable(css)(Auth);
