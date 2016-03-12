var React = require('react');

var Main = React.createClass({
  render: function() {
    return(
      <div>
        {/*navbar}*/}
        {this.props.children}
      </div>
    )
  } 
})

module.exports = Main;
