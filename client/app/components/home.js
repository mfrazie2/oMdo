var React = require('react');
var Tile = require('./tile');
var styleable = require('react-styleable').default;
var css = require('../styles/home.css');

function Home (props) {
  return (
    <div className={props.css.root}>
      <Tile>
        <h1>oMdo welcomes you!</h1>
      </Tile>
    </div>
  )
};

module.exports = styleable(css)(Home);
