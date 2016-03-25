var React = require('react');
var Form = require('./form');
var Loading = require('../components/loading');
var Questions = require('./questions');

function Survey(props) {
  var key = -1;
  return props.isLoading === true
  ? (
    <Loading />
  )
  : (
    <Form onSubmit={props.onSubmit} text='Submit'>
      <Questions questions={props.questions} handlers={props.handlers} />
    </Form>
  )
};

module.exports = Survey;
