var React = require('react');
var Tile = require('./tile');
var styleable = require('react-styleable').default;
var css = require('../styles/home.css');

function Home (props) {
  return (
    <Tile className={props.css.root}>
      <h1>oMdo welcomes you!</h1>
    </Tile>
  )
};

module.exports = styleable(css)(Home);
