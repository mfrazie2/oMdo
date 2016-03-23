var React = require('react');
var PropTypes = require('react').PropTypes;
var styleable = require('react-styleable').default;
var css = require('../styles/question.css')

function Auth(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <form onSubmit={props.onSubmit} path={props.pathname}>
        <input
          type='text'
          name='username'
          onChange={props.onUpdateUsername}
        />
        <input
          type='text'
          name='password'
          onChange={props.onUpdatePassword}
        />

      <button type='submit'>{props.text}</button>
      </form>
    </div>
  )
};

module.exports = styleable(css)(Auth);
