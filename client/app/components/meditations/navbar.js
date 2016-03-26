var React = require('react');
var Navbar = require('../navbar');
var Frame = require('../frame');
var styleable = require('react-styleable').default;
var css = require('../../styles/navbar.css');

function MeditationNav (props) {
  return (
    <Frame>
      <Navbar isLoggedIn={props.isLoggedIn}>
        <button className={props.css.navItem} onClick={props.handlers.survey}>Take a Quick Survey</button>
        <button className={props.css.navItem} onClick={props.handlers.twitter}>Check You Pubic Expressions</button>
      </Navbar>
    </Frame>
  )
};

module.exports = styleable(css)(MeditationNav);
