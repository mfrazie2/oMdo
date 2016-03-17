var React = require('react');
var PropTypes = React.PropTypes;
var Profile = require('../components/profile');
// var consoleLogSomething = require('../actions/profileActions').consoleLogSomething;
// var dispatch = require('../store/store').dispatch;
// var connect = require('react-redux').connect;
// var bindActionCreators = require('redux').bindActionCreators;

var ProfileContainer = React.createClass({
  render: function() {
    return (

      <Profile
        consoleLogSomething={this.props.consoleLogSomething}
        reduxResult={this.props.reduxResult}
      />
    )
  }
})



// var ProfileContainer = React.createClass({
//   render: function() {
//     return (
//       <Profile
//         reduxTest={this.consoleLogSomething}
//         reduxResult={this.reduxResult}
//       />
//     )
//   }
// })

// function mapStateToProps(state) {
//   return {reduxResult: state.reduxResult};
// };

// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators({consoleLogSomething}, dispatch)};
// }

// module.exports = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

module.exports = ProfileContainer;