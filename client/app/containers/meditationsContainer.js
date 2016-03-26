var React = require('react');
var meditationsActions = require('../actions/meditationsActions');
var meditationsHandlers = require('./mixins/meditationsHandlers');
var homeActions = require('../actions/homeActions');
var authActions = require('../actions/authActions');
var Frame = require('../components/frame');
var Navbar = require('../components/meditations/navbar');
var Loading = require('../components/loading');
var Filter = require('../components/filteredComponents');
var Survey = require('./surveyContainer');
var Twitter = require('./twitContainer');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

var Meditations = React.createClass({
  mixins: [meditationsHandlers],
  contextTypes: {
    store: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
  },
  componentWillMount: function() {
    this.props.checkAuth();
  },
  render: function() {
    return (
      <Frame>
        <Navbar isLoggedIn={true} handlers={this.handlers} />
        {this.props.isLoading
        ? <Loading />
        : <Frame>
          <Filter filter={function(child) {
              return String(this.props.displayed) === child.key;
            }.bind(this)}>
            <Survey key={0} />
            <Twitter key={1} />
          </Filter>
        </Frame>}
      </Frame>
    )
  }
});

function mapStateToProps(state, ownProps) {
  return Object.assign({}, state.meditationsReducer);
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, homeActions, meditationsActions), dispatch);
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Meditations);
