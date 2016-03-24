var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../styles/home.css');

function Home (props) {
  return (
    <div className={props.css.root}>
      <h1>oMdo welcomes you!</h1>
    </div>
  )
};

module.exports = styleable(css)(Home);
