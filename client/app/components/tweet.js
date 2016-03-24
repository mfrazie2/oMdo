var React = require('react');
var TweetEntry = require('./tweetEntry');

function Tweet (props) {
  return (
    <ul>
      {props.tweets.map(function(tweet, i) {
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
