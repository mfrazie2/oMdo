var React = require('react');
// TODO import styles
var Auth = function(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          value={props.username}
          placeholder="username" />
        <input
          type="text"
          value={props.password}
          placeholder="password"/>
        <button type="submit">{props.text}</button>
      </form>
    </div>
  )
};

module.exports = Auth;
