var React = require('react');

function Home (props) {
  return (
    <div>
      <button onTakeSurvey={props.onTakeSurvey}>Know thyself</button>
      <button onSeeProfile={props.onSeeProfile}>Know thyself more</button>
    </div>
  )
};

module.exports = Home;
