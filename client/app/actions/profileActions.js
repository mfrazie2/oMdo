var actions = require('../actions/actions');
var axios = require('axios');
var dispatch = require('../store/store').dispatch;
var browserHistory = require('react-router').browserHistory;

module.exports = {
  surveysLoading: function() {
    return {type: actions.SURVEYS_LOADING}
  },
  surveysNotLoaded: function() {
    return {type: actions.SURVEYS_NOT_LOADED}
  },
  surveysLoadeded: function(surveys) {
    return {type: actions.SURVEYS_LOADED, surveys: surveys}
  },
  loadSurveys: function() {
    var surveysLoading = this.surveysLoading;
    var surveysLoaded = this.surveysLoaded;
    var surveysNotLoaded = this.surveysNotLoaded;
    return function(dispatch) {
      dispatch(surveysLoading());
      axios.get('/user/userData')
        .then(function(response) {
          dispatch(surveysLoaded(response));
        })
        .catch(function(error) {
          console.log('There was an error querying for data:', error);
          dispatch(surveysNotLoaded());
        });
    }
  }
}
