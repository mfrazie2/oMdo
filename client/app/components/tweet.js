var React = require('react');
var BarChart = require('react-chartjs').Bar;
var format = require('../utilities/formatTwitterData');
var styleable = require('react-styleable').default;
var css = require('../styles/twitterCharts.css');
// var TweetEntry = require('./tweetEntry');

function Tweet (props) {
  console.log('This is the Tweet component saying sup broh');
  console.log('options ', props.chartOptions);
  return (
  <div className={props.css.chartContainer}>
    <div className={props.css.chart}>
      <h3>Emotional Tone</h3> 
      <BarChart data={format(props.emotional)} options={props.chartOptions} width='200' height='290' />
    </div>
    
    <div className={props.css.chart}>
      <h3>Writing Tone</h3>
      <BarChart data={format(props.writing)} options={props.chartOptions} width='200' height='281.5' />
    </div>
    
    <div className={props.css.chart}>
      <h3>Social Tone</h3>
      <BarChart data={format(props.social)} options={props.chartOptions} width='200' height='350' />
    </div>
  </div>
  )
}

module.exports = styleable(css)(Tweet);


{/*<ol>
      {props.tones.map(function(tweet, i) {
        return (
          <TweetEntry
            data={tweet}
            key={i}
          />
        )
      })}
    </ul>
  )
}

module.exports = Tweet;
    </ol>*/}

