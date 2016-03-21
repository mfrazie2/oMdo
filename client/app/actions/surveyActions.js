var actions = require('../actions/actions');
var axios = require('axios');
var dispatch = require('../store/store').dispatch;
var browserHistory = require('react-router').browserHistory;

axios.defaults.headers.common['x-access-token'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInNhbHQiOiIkMmEkMTAkcEFrMmgvMmVzTlp5d3N2Q1huelA3TyIsInVzZXJuYW1lIjoiam9obiIsInBhc3N3b3JkIjoiJDJhJDEwJHBBazJoLzJlc05aeXdzdkNYbnpQN09uL2dHYmp2dmJlbWdWSTB3Y1NhV2FFRlhIY0tqQTVlIiwiX2lkIjoiNTZmMDc2MjVkY2YxN2JlYTQ4NTE0ZThjIiwiY3JlYXRlZE9uIjoiMjAxNi0wMy0yMVQyMjozMTowMS4wMzJaIiwic3VydmV5cyI6W119.lBpkMXw0oToARP2gZfrQPL81mauOQSixLF-c5q2abWA";

module.exports = {
  // Survey question changes
  feelingChange: function(feeling) {
    return {type: actions.FEELING_CHANGE, feeling: feeling}
  },
  anxietyChange: function(anxiety) {
    return {type: actions.ANXIETY_CHANGE, anxiety: anxiety}
  },
  sleepChange: function(sleep) {
    return {type: actions.SLEEP_CHANGE, sleep: sleep}
  },
  moodChange: function(mood) {
    return {type: actions.MOOD_CHANGE, mood: mood}
  },
  majorEventChange: function(eventChange) {
    return {type: actions.MAJOR_EVENT_CHANGE, eventChange: eventChange}
  },
  eventElaborateChange: function(eventDetail) {
    return {type: actions.EVENT_ELABORATE_CHANGE, eventDetail: eventDetail}
  },
  energyChange: function(energy) {
    return {type: actions.ENERGY_CHANGE, energy: energy}
  },
  sleepElaborateChange: function(sleepDetail) {
    return {type: actions.SLEEP_ELABORATE_CHANGE, sleepDetail: sleepDetail}
  },
  moodElaborateChange: function(moodDetail) {
    return {type: actions.MOOD_ELABORATE_CHANGE, moodDetail: moodDetail}
  },
  // Survey submission handling
  surveySubmit: function() {
    return {type: actions.SURVEY_SUBMIT};
  },
  surveySuccess: function() {
    return {type: actions.SURVEY_SUCCESS};
  },
  surveyFailure: function() {
    return {type: actions.SURVEY_FAILURE};
  },
  submitSurvey: function(survey) {
    var surveySubmit = this.surveySubmit;
    var surveySuccess = this.surveySuccess;
    var surveyFailure = this.surveyFailure;
    return function(dispatch) {
      dispatch(surveySubmit());
      axios.post('/user/userData', survey)
        .then(function(response) {
          dispatch(surveySuccess())
          browserHistory.push('/profile');
        })
        .catch(function(error) {
          dispatch(surveyFailure());
        });
    }
  }
};
