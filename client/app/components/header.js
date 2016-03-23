var React = require('react');
var styleable = require('react-styleable').default
var css = require('../styles/navbar.css');

function Header (props) {
  return (
    <div className={props.css.root}>
      <img src='/oMdo.png' width='150px' height='64px' alt={'oMdo'} />
      <ul className={props.css.ul}>
        {props.children}
      </ul>
    </div>
  )
};

module.exports = styleable(css)(Header);
