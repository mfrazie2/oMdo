var React = require('react');
var PropTypes = require('react').PropTypes;
var Loading = require('../components/Loading');

function Auth(props) {
  if(props.path === '/signin' && !props.isLoading) {
    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={props.onSignInSubmit} path={props.pathname}>
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
          
          <button type='submit'>Sign in</button>
        </form>
      </div>
    )
  } else if(props.path === '/signup' && !props.isLoading) {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={props.onSignUpSubmit} path={props.pathname}>
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
          
          <button type='submit'>Sign in</button>
        </form>
      </div>
    )
  } else {
    return (
      <Loading />
    )
  }
};

module.exports = Auth;
