var actions = require('../actions/actions');
var axios = require('axios');
var dispatch = require('../store/store').dispatch;
var browserHistory = require('react-router').browserHistory;

axios.defaults.headers.common['x-access-token'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInNhbHQiOiIkMmEkMTAkbHFKbXhselhqWFZVSkg4cGZJM2JYLiIsInVzZXJuYW1lIjoiam9obiIsInBhc3N3b3JkIjoiJDJhJDEwJGxxSm14bHpYalhWVUpIOHBmSTNiWC4wM1FPQy9qb2U5VVRyc1E0OFgwbllUL056WkZPbVRHIiwiX2lkIjoiNTZmMDViMzA2NWNiNDk2MTBlNTEyNDYwIiwiY3JlYXRlZE9uIjoiMjAxNi0wMy0yMVQyMDozNjowMC44MDdaIiwic3VydmV5IjpbXX0.u8i5jXhAw3tYkgAc0uRnxPZ0eul5D8yOSTxKvNVl3f0";

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
          dispatch(surveysLoaded(response));
        })
        .catch(function(error) {
          console.log('There was an error querying for data:', error);
          dispatch(surveysNotLoaded());
        });
    }
  }
}
