var React = require('react');
var Link = require('react-router').Link;
var Header = require('./header');
var styleable = require('react-styleable').default
var css = require('../styles/navbar.css');

function Navbar(props) {
  return !props.isLoggedIn
    ? (
      <Header>
        <Link className={props.css.navItem} to='/signin' tabIndex='100'> Sign In </Link>
        <Link className={props.css.navItem} to='/signup' tabIndex='110'> Sign Up </Link>
        <Link className={props.css.navItem} to='/about' tabIndex='120'> What is oMdo? </Link>
      </Header>
    )
    : (
      <Header>
        <Link className={props.css.navItem} to='/twit' tabIndex='100'> Analyze Your Twitter Feed </Link>
        <Link className={props.css.navItem} to='/survey' tabIndex='110'> Daily Meditations </Link>
        <Link className={props.css.navItem} to='/profile' tabIndex='120'> The Breakdown </Link>
        <Link className={props.css.navItem} to='/about' tabIndex='120'> What is oMdo? </Link>
        <Link className={props.css.navItem} to='/signin' tabIndex='130' onClick={props.onSignOut}> Log Out </Link>
      </Header>
    )
}

module.exports = styleable(css)(Navbar);
