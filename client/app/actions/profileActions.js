var actions = require('../actions/actions');
var axios = require('axios');
var dispatch = require('../store/store').dispatch;
var browserHistory = require('react-router').browserHistory;

axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');

function surveysLoading() {
  return {type: actions.SURVEYS_LOADING}
}
function surveysNotLoaded() {
  return {type: actions.SURVEYS_NOT_LOADED}
}
function surveysLoaded(surveys) {
  return {type: actions.SURVEYS_LOADED, surveys: surveys}
}

module.exports = {
  loadSurveys: function() {
    return function(dispatch) {
      dispatch(surveysLoading());
      axios.get('/user/userData')
        .then(function(response) {
          dispatch(surveysLoaded(response.data));
        })
        .catch(function(error) {
          console.log('There was an error querying for data:', error);
          // dispatch(surveysNotLoaded());
        });
    }
  }
}
