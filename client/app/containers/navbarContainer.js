var React = require('react');
var Navbar = require('../components/navbar');
var connect = require('react-redux').connect;
var dispatch = require('../store/store').dispatch;
var requestSignOut = require('../actions/navActions').requestSignOut;

var NavbarContainer = React.createClass({
  
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleSignOut: function() {
    dispatch(requestSignOut());
  },
  handleToSurvey: function(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/survey'
    });
  },
  handleToProfile: function(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/profile'
    });
  },
  
  render: function() {
    return (
      <Navbar 
        onSignOut={this.handleSignOut}
      />  
    )
  }
});

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.homeReducer.isLoggedIn,
    isLoading: state.homeReducer.isLoading
  }
}

module.exports = connect(mapStateToProps)(NavbarContainer);
// module.exports = NavbarContainer;