var actions = require('../actions/actions')
var axios = require('axios');
var browserHistory = require('react-router').browserHistory;

module.exports = {
  twitSubmit: function() {
    return {type: actions.TWIT_SUBMIT};
  },
  twitSuccess: function(tweets) {
    return {type: actions.TWIT_SUCCESS, tweets: tweets};
  },
  twitFailure: function() {
    return {type: actions.TWIT_FAILURE};
  },
  twitterChange: function(name) {
    return {type: actions.TWIT_CHANGE, handle: name};
  },
  submitTwit: function(name) {
    return function(dispatch) {
      dispatch(module.exports.twitSubmit());
      axios.defaults.headers.common['x-access-token'] = window.localStorage.getItem('x-access-token');
      axios.post('/twitter/fetch', name)
        .then(function(res) {
          dispatch(module.exports.twitSuccess(res.data.tweets));
        })
        .catch(function(err) {
          dispatch(module.exports.twitFailure());
        });
    };
  }
};
