var React = require('react');
var Link = require('react-router').Link;
var Header = require('./header');
var styleable = require('react-styleable').default
var css = require('../styles/navbar.css');

function Navbar(props) {
  return !props.isLoggedIn
    ? (
      <Header>
        <Link className={props.css.navItem} to='/signin'> Sign In </Link>
        <Link className={props.css.navItem} to='/signup'> Sign Up </Link>
        <Link className={props.css.navItem} to='/about'> What is oMdo? </Link>
      </Header>
    )
    : (
      <Header>
        <Link className={props.css.navItem} to='/twit'> Analyze Your Twitter Feed </Link>
        <Link className={props.css.navItem} to='/survey'> Daily Meditations </Link>
        <Link className={props.css.navItem} to='/profile'> The Breakdown </Link>
        <Link className={props.css.navItem} to='/about'> What is oMdo? </Link>
        <Link className={props.css.navItem} to='/signin' onClick={props.onSignOut}> Log Out </Link>
      </Header>
    )
}

module.exports = styleable(css)(Navbar);
