var React = require('react');
var Radar = require('react-chartjs').Radar;
var styleable = require('react-styleable').default;
var css = require('../styles/question.css');

var irrelevantFields = {
  'surveyId': true,
  '__v': true,
  '_id': true,
  'createdOn': true,
  'createdBy': true,
  'eventElaborate': true,
  'moodElaborate': true,
  'sleepElaborate': true
};

var irrelevantFields = {
  'surveyId': true,
  '__v': true,
  '_id': true,
  'createdOn': true,
  'createdBy': true,
  'eventElaborate': true,
  'moodElaborate': true,
  'sleepElaborate': true
};

function Entry (props) {
  var relevantLabels = Object.keys(props.data).filter(function(field) {
    return !irrelevantFields[field];
  });

  var radarData = {
    labels: relevantLabels,
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: relevantLabels.map(function(field){
          return props.data[field];
        })
      }
    ]
  }
  return (
    <li key={props.key} className={props.css.root}>
      <Radar data={radarData} width='100%' height='100%' />
    </li>
  )
}

module.exports = styleable(css)(Entry);
