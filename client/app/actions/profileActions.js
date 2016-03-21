var actions = require('../actions/actions');
var axios = require('axios');
var dispatch = require('../store/store').dispatch;
var browserHistory = require('react-router').browserHistory;

axios.defaults.headers.common['x-access-token'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInNhbHQiOiIkMmEkMTAkcEFrMmgvMmVzTlp5d3N2Q1huelA3TyIsInVzZXJuYW1lIjoiam9obiIsInBhc3N3b3JkIjoiJDJhJDEwJHBBazJoLzJlc05aeXdzdkNYbnpQN09uL2dHYmp2dmJlbWdWSTB3Y1NhV2FFRlhIY0tqQTVlIiwiX2lkIjoiNTZmMDc2MjVkY2YxN2JlYTQ4NTE0ZThjIiwiY3JlYXRlZE9uIjoiMjAxNi0wMy0yMVQyMjozMTowMS4wMzJaIiwic3VydmV5cyI6W119.lBpkMXw0oToARP2gZfrQPL81mauOQSixLF-c5q2abWA";

module.exports = {
  surveysLoading: function() {
    return {type: actions.SURVEYS_LOADING}
  },
  surveysNotLoaded: function() {
    return {type: actions.SURVEYS_NOT_LOADED}
  },
  surveysLoaded: function(surveys) {
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
          dispatch(surveysLoaded(response.data));
        })
        .catch(function(error) {
          console.log('There was an error querying for data:', error);
          // dispatch(surveysNotLoaded());
        });
    }
  }
}
