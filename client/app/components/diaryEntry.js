var React = require('react');

var puke = function(props) {
    return (
      <pre>
        {props}
      </pre>
    )
}

function Entry (props) {
  return (
    <li>
      {puke(props)}
    </li>
  )
}

module.exports = Entry;
