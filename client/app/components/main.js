var React = require('react');
var Navbar = require('../containers/navbarContainer');

var Main = React.createClass({
  render: function() {
    return(
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
