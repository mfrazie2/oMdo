var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var css = require('./styles/main.css');

ReactDOM.render(
  routes,
  document.getElementById('app')
)
