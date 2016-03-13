var React = require('react');
var NavbarContainer = require('../containers/navbarContainer');

var Main = React.createClass({
  render: function() {
    return(
      <div>
        <NavbarContainer />
        <p>To thine ownself, be true</p>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
