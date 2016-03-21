var React = require('react');
var PropTypes = React.PropTypes;

function Profile(props) {
  return (
    <div>
        <h1>{props.username}</h1>
        {props.children}
    </div>
  );
}

module.exports = Profile;
