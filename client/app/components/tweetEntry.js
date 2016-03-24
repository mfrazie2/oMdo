var React = require('react');
var styleable = require('react-styleable').default;
var css = require('../styles/question.css');

function TweetEntry(props) {
  console.log(props.key, ' ', props.data);
  return (
    <li key={props.key} className={props.css.root}>
      {props.data}
    </li>
  );
}

module.exports = styleable(css)(TweetEntry);