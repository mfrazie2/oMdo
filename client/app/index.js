var React = require('react');
var ReactDOM = require('react-dom');

// var routes = require('./config/routes');
var css = require('./styles/main.css');

var Root = require('./config/routes');

ReactDOM.render(
  <Root />,
  document.getElementById('app')
)
