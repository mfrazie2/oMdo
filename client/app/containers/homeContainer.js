var React = require('react');
var Home = require('../components/home');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators
var homeActions = require('../actions/homeActions');

var HomeContainer = React.createClass({
  componentDidMount: function() {
    this.props.actions.checkAuth();
  },
  render: function() {
    return (
      <Home />
    )
  }
});

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
    isLoading: state.authReducer.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
