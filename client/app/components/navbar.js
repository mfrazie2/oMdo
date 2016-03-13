var React = require('react');
var Link = require('react-router').Link;

var Navbar = React.createClass({
  render: function() {
    return(
      <div>
        <ul>
          <li> <Link to='survey'> Talk about your Feelings </Link> </li>
          <li> <Link to='profile'> Look at your Feelings </Link> </li>
          <li> <Link to='/'> That's enough feelings for today </Link> </li>
          <li> <Link to='about'> What is this about? </Link> </li>
        </ul>
      </div>
    )
  }
  
});


module.exports = Navbar;