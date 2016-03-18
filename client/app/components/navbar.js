var React = require('react');
var Link = require('react-router').Link;
var styleable = require('react-styleable').default
var css = require('../styles/navbar.css');

console.log(typeof styleable)

function Navbar(props) {
  return(
    <div className={props.css.root}>
      <ul className={props.css.ul}>
        <Link className={props.css.navItem} to='survey'> Talk about your Feelings </Link>
        <Link className={props.css.navItem}to='profile'> Look at your Feelings </Link>
        <Link className={props.css.navItem}to='/'> That's enough feelings for today </Link>
        <Link className={props.css.navItem}to='about'> What is this about? </Link>
      </ul>
    </div>
  )
}


module.exports = styleable(css)(Navbar)