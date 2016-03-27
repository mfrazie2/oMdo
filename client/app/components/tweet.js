var React = require('react');
var BarChart = require('react-chartjs').Bar;
var format = require('../utilities/formatTwitterData');
var styleable = require('react-styleable').default;
var css = require('../styles/twitterCharts.css');
// var TweetEntry = require('./tweetEntry');

function Tweet (props) {
  console.log('This is the Tweet component saying sup broh');
  console.log('options ', props.chartOptions);
  console.log('tones ', props.emotional);
  if(props.tones.length) {
    console.log('anger? ', props.tones[0]['tones'][0]['score']);
    return (
    <div className={props.css.chartContainer}>
      <h2>What Are Your Tweets Really Saying?</h2>
      <div className={props.css.breakdown}>
        <h3>Emotional Tone</h3>
          <p>Emotional tone is inferred from different types of emotions and feelings expressed in your writing.</p>
          <h5>Your Anger Score is {parseInt(props.emotional[0].score*100)}%</h5>
            <ul>
              <li>Anger is an emotion characterized by antagonism toward someone or something you feel
              has deliberately done you wrong.</li>
              <li>An anger score below 50% indicates your tone is less likely to be perceived as angry.</li>
              <li>An anger score above 75% indicates your tone is highly likely to be perceived as angry.</li>
            </ul>
          <p>Disgust: {parseInt(props.emotional[1].score*100)}%</p>
          <p>Fear: {parseInt(props.emotional[2].score*100)}%</p>
          <p>Joy: {parseInt(props.emotional[3].score*100)}%</p>
          <p>Sadness: {parseInt(props.emotional[4].score*100)}%</p>
      </div>
      <div className={props.css.breakdown}>
        <h3>Writing Tone</h3>
          <p>Analytical: {parseInt(props.writing[0].score*100)}%</p>
          <p>Confident: {parseInt(props.writing[1].score*100)}%</p>
          <p>Tentative: {parseInt(props.writing[2].score*100)}%</p>
      </div>
      <div className={props.css.breakdown}>
        <h3>Social Tone</h3>
          <p>Openness: {parseInt(props.social[0].score*100)}%</p>
          <p>Conscientiousness: {parseInt(props.social[1].score*100)}%</p>
          <p>Extraversion: {parseInt(props.social[2].score*100)}%</p>
          <p>Agreeableness: {parseInt(props.social[3].score*100)}%</p>
          <p>Emotional Range: {parseInt(props.social[4].score*100)}%</p>
      </div>
      <div className={props.css.chart}>

          <BarChart data={format(props.tones)} options={props.chartOptions} width='400' height='290' />
      </div>
      
    </div>
    )
  } else {
    return (
      <div>No tweets yet</div>
    )
  }
}

module.exports = styleable(css)(Tweet);



{/*<div className={props.css.chart}>
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
    </div>*/}

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

