var React = require('react');
var Loading = require('../loading');
var Form = require('../form');
var Tile = require('../tile');
var styleable = require('react-styleable').default;
var css = require('../../styles/survey.css');

function Twit(props) {
  return (
    props.isLoading === true
    ? <Loading />
    : <Tile>
      <div className={props.css.twitterHolder}>
        <Form onSubmit={props.onSubmit} text='Submit' buttonClassName={props.css.submitTwit}>
          <h2>What does your Twitter feed say about your mood?</h2>
          <p>This will fetch your 25 most recent tweets and run them through a sentiment analysis. The results will show the general sentiment (positive, negative, or neutral) for this subset of tweets.</p>
          <div className={props.css.twitterField}>
            <input className={props.css.inputBox} type='text' placeholder='Twitter Handle' onChange={props.onTwitterChange} />
          </div>
        </Form>
      </div>
    </Tile>
  )
}

module.exports = styleable(css)(Twit);
