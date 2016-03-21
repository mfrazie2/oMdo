var actions = require('../actions/actions')
var axios = require('axios');
var browserHistory = require('react-router').browserHistory;

// Survey submission handling
function surveySubmit() {
  return {type: actions.SURVEY_SUBMIT};
}
function surveySuccess() {
  return {type: actions.SURVEY_SUCCESS};
}
function surveyFailure() {
  return {type: actions.SURVEY_FAILURE};
}

// Survey question changes
module.exports = {
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
  submitSurvey: function(survey) {
    return function(dispatch) {
      dispatch(surveySubmit());
          axios.post('/user/userData', survey)
            .then(function(response) {
              console.log('axios response ', response);
              dispatch(surveySuccess());
              browserHistory.push('/profile');
            })
            .catch(function(error) {
              console.log('axios error ', error);
              dispatch(surveyFailure());
            });
    }
  }
};
