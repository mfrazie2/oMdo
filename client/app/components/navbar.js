var React = require('react');
var Link = require('react-router').Link;
var styleable = require('react-styleable').default
var css = require('../styles/navbar.css');

function Navbar(props) {
  return(

    !props.isLoggedIn ?

    <div className={props.css.root}>
      <ul className={props.css.ul}>
        <Link className={props.css.navItem} to='/signin'> Sign In </Link>
        <Link className={props.css.navItem} to='/signup'> Sign Up </Link>
        <Link className={props.css.navItem} to='/about'> What is oMdo? </Link>
      </ul>
    </div>

    :

    <div className={props.css.root}>
      <ul className={props.css.ul}>
        <Link className={props.css.navItem} to='/survey'> Talk about your Feelings </Link>
        <Link className={props.css.navItem} to='/profile'> Look at your Feelings </Link>
        <Link className={props.css.navItem} to='/signin' onClick={props.onSignOut}> That's enough feelings for today </Link>
        <Link className={props.css.navItem} to='/about'> What is oMdo? </Link>      
      </ul>
    </div>
  )
}

module.exports = styleable(css)(Navbar)
