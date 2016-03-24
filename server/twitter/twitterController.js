var dotenv = require('dotenv').config();
var Twitter = require('twitter'); 

// Configure Twitter instance
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


module.exports = {
  fetchTweets: function(req, res) {
    // var tweetTexts;
    var params = {screen_name: req.body.handle, count: 25};
    client.get('statuses/user_timeline', params, function(err, tweets, response) { 
      // tweets returned as []
      // response is raw object ==> of user's entire Twitter
      if(err) {
        return new Error(err);
      }
      var tweetTexts = tweets.map(function(tweet) {
        return tweet.text;
      });
      res.send({tweets: tweetTexts});
    });
  }
};