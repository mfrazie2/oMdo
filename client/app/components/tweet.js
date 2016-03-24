var React = require('react');
var TweetEntry = require('./tweetEntry');

function Tweet (props) {
  console.log("This is the Tweet component saying sup broh");
  return (
    <ol>
      {props.tweets.map(function(tweet, i) {
        return (
          <TweetEntry
            data={tweet}
            key={i}
          />
        )
      })}
    </ol>
  )
}

module.exports = Tweet;
