var React = require('react');
var Radar = require('react-chartjs').Radar;
var format = require('../utilities/formatEntryRadarData');
var styleable = require('react-styleable').default;
var css = require('../styles/question.css');

function Entry (props) {
  return (
    <li key={props.key} className={props.css.root}>
      <Radar
        data={format(props.data)}
        options={{
          scaleOverride: true,
          scaleSteps: 5,
          scaleStepWidth: 10,
          scaleStartValue: 0,
        }}
        width='100%'
        height='100%' />
    </li>
  )
};

module.exports = styleable(css)(Entry);
