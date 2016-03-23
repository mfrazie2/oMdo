var dotenv = require('dotenv').config();
var Twitter = require('twitter'); 
// TO DO: npm i -S twitter

// Configure Twitter instance
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


module.exports = {
  fetchTweets: function(req, res) {
    var params = {screen_name: 'AFrazGuy', count: 25};
    client.get('statuses/user_timeline', params, function(err, tweets, response) {
      if(err) {
        return new Error(err);
      }
      console.log('fetchTweets response: ', response); 
      res.body.tweets = tweets;
    });
    res.send();
  }
};