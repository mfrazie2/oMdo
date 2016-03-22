var React = require('react');

var puke = function(data) {
    return (
      <pre>
        {JSON.stringify(data, null, ' ')}
      </pre>
    )
}

function Entry (props) {
  return (
    <li key={props.key}>
      {puke(props.data)}
    </li>
  )
}

module.exports = Entry;
