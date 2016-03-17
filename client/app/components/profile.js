var React = require('react');
var PropTypes = React.PropTypes;

function Profile(props) {
  return (
    <div>
        <h1 onClick={props.reduxTest}> Profile Page to Come {props.reduxResult} </h1>
      </div>  
  );
}


Profile.propTypes = {
  reduxTest: PropTypes.func
};

module.exports = Profile;