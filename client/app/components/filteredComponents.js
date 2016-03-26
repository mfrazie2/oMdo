var React = require('react');

function Filter (props) {
  return (
    <div>
      {props.children.filter(function(child) {
        return props.filter(child);
      })}
    </div>
  )
};

module.exports = Filter;
