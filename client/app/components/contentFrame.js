var React = require('react');
var styleable = require('react-styleable');
var css = require('../styles/main.css');

function Frame (props) {
  return (
    <div className='frame'>

    </div>
  )
};

module.exports = styleable(css)(Frame);
