var React = require('react');

function Home (props) {
  return (
    <div>
      <h1>oMdo welcomes you!</h1>
    </div>
  )
};

{/*<h1>Hello {props.username}</h1>
      <button onTakeSurvey={props.onTakeSurvey}>Know thyself</button>
      <button onSeeProfile={props.onSeeProfile}>Know thyself more</button>*/}

// Home.propTypes = {
//   onTakeSurvey: React.PropTypes.func.isRequired,
//   onSeeProfile: React.PropTypes.func.isRequired,
//   username: React.PropTypes.string.isRequired
// }

module.exports = Home;
