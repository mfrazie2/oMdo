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
              label='username'
              className={props.css.input}
              type='text'
              placeholder='username'
              onChange={props.onUpdateUsername}
              />
          </div>
          <div>
            <input
              label='password'
              className={props.css.input}
<<<<<<< 7f4c05a80a8932f02f3b317cce4841b126635ac2
              type='password'
||||||| merged common ancestors
              type='text'
              name='password'
=======
              type='password'
              name='password'
>>>>>>> (style)Styles survey, some nave, and some auth
              placeholder='password'
              onChange={props.onUpdatePassword}
              />
          </div>
          <button className={props.css.submit} type='submit'>{props.text}</button>
        </form>
      </div>
    </div>
  )
};

module.exports = styleable(css)(Auth);
