var React = require('react');
var PropTypes = React.PropTypes;
var Profile = require('../components/profile');

// var consoleLogSomething = require('../actions/profileActions').consoleLogSomething;
// var dispatch = require('../store/store').dispatch;
// var connect = require('react-redux').connect;
// var bindActionCreators = require('redux').bindActionCreators;

var consoleLogSomething = require('../actions/profileActions').consoleLogSomething;
var dispatch = require('../store/store').dispatch;
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var push = require('react-router-redux').push;
var store = require('../store/store');


var ProfileContainer = React.createClass({
  // reduxResult: 'Do not throw a fit, website!',
  consoleLogSomething: function() {
    // dispatch(push('/survey'));
    console.log(store);
    this.props.history.push('/survey');
    // dispatch(consoleLogSomething());
  },
  render: function() {
    console.log('profile container ', this.props)
    return (

      <Profile
        consoleLogSomething={this.consoleLogSomething}
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

// module.exports = ProfileContainer;

// function mapStateToProps(state) {
//   // return {reduxResult: state.reduxResult};
//   return state;
// };

// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators({consoleLogSomething}, dispatch)};
// }

module.exports = ProfileContainer;

// module.exports = connect()(ProfileContainer);

