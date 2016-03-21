var React = require('react');
var PropTypes = require('react').PropTypes;
var Loading = require('../components/loading');

function Auth(props) {
  return (
    <div>
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

        <button type='submit'>Sign in</button>
      </form>
    </div>
  )
};


{/*<input
          type="text"
          name="username"
          onChange={props.onUpdateUsername}
          value={props.username}
          placeholder="username" />
        <input
          type="text"
          onChange={props.onUpdatePassword}
          value={props.password}
          placeholder="password"/>
        <button type="submit">{props.text}</button>*/}

// Auth.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   // onUpdateUsername: PropTypes.func.isRequired,
//   // onUpdatePassword: PropTypes.func.isRequired,
//   // text: PropTypes.string,
//   // username: PropTypes.string,
//   // password: PropTypes.string
// };

module.exports = Auth;
