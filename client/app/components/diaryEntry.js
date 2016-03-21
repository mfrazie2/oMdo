var React = require('react');

function Entry (props) {
  return (
    <li>
      <h4>{props.date}</h4>
    </li>
  )
}

module.exports = Entry;
