var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../styles/about.css');

var Loading = React.createClass({
  render: function() {
    return (
      <div>
        <p>Let Mike dream...  Your feelings will be here shortly...</p>
      </div>
    )
  }
})

module.exports = Loading;
