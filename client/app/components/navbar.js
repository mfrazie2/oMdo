var React = require('react');
var Link = require('react-router').Link;

var Navbar = React.createClass({
  render: function() {
    return(
      <div>
        <ul>
          <li> <Link to='survey'> Talk about your Feelings </Link> </li>
        </ul>
      </div>
    )
  }
  
});


module.exports = Navbar;