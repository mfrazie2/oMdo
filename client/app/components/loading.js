var React = require('react');
var Tile = require('./tile');
var styleable = require('react-styleable').default;
var css = require('../styles/about.css');

function Loading (props) {
  return (
    <Tile >
      <p>Let Mike dream...  Your feelings will be here shortly...</p>
    </Tile>
  )
};

module.exports = Loading;
