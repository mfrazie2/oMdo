var React = require('react');
// var PropTypes = React.PropTypes;

function Profile(props) {
  return (
    <div>

        <h1> Profile Page to Come </h1>
=======
        <h1 onClick={consoleLogSomething()}> Profile Page to Come {reduxResult} </h1>

      </div>  
  );
}



// function Profile(props) {
//   return (
//     <div>
//         <h1 onClick={props.reduxTest}> Profile Page to Come {props.reduxResult} </h1>
//       </div>  
//   );
// }


// Profile.propTypes = {
//   reduxTest: PropTypes.func
// };

// Profile.propTypes = {
//   actions: PropTypes.object.isRequired,
//   reduxResult: PropTypes.string.isRequired
// };


module.exports = Profile;