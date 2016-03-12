var React = require('react');
var PropTypes = require('react').PropTypes;
{/*TODO import styles*/}
var Auth = function(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          onChange={props.onUpdate.bind(this)}
          value={props.username}
          placeholder="username" />
        <input
          type="text"
          onChange={props.onUpdate.bind(this)}
          value={props.password}
          placeholder="password"/>
        <button type="submit">{props.text}</button>
      </form>
    </div>
  )
};

Auth.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  text: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string
};
module.exports = Auth;
