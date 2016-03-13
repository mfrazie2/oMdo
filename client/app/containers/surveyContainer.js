var React = require('react');
var Survey = require('../components/survey');

var SurveyContainer = React.createClass({
  handleSurveySubmit: function(e) {
    e.preventDefault();
  },
  
  render: function() {
    return (
      <Survey />
    )
  }
})

module.exports = SurveyContainer;