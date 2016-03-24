var React = require('react');
var PropTypes = require('react').PropTypes;
var styleable = require('react-styleable').default;
var css = require('../styles/auth.css')

function Auth(props) {
  return (
    <div className={props.css.root}>
      <div className={props.css.form}>
        <form onSubmit={props.onSubmit} path={props.pathname}>
          <div>
            <input
              tabindex='1'
              label='username'
              className={props.css.input}
              type='text'
              placeholder='username'
              onChange={props.onUpdateUsername}
              />
          </div>
          <div>
            <input
              tabindex='20'
              label='password'
              className={props.css.input}
              type='password'
              name='password'
              placeholder='password'
              onChange={props.onUpdatePassword}
              />
          </div>
          <button
            className={props.css.submit}
            tabindex='20'
            type='submit'>{props.text}</button>
        </form>
      </div>
    </div>
  )
};

module.exports = styleable(css)(Auth);
