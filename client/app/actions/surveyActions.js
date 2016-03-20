var actions = require('../actions/actions')
var axios = require('axios');
var dispatch = require('../store/store').dispatch;

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
  // Survey submission handling
  surveySubmit: function() {
    return {type: actions.SURVEY_SUBMIT};
  },
  surveySuccess: function() {
    console.log('routing from SURVEY_SUCCESS ', routing);
    return {type: actions.SURVEY_SUCCESS};
  },
  surveyFailure: function() {
    return {type: actions.SURVEY_FAILURE};
  },
  surveyResponse: function(survey) {
    console.log('IN survey response!')
    var surveySuccess = this.surveySuccess;
    var surveyFailure = this.surveyFailure;
    axios.defaults.headers.post['x-access-token'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInNhbHQiOiIkMmEkMTAkSE1BRlkxMGNkMW8uT1VTRGdnc1lJdSIsInVzZXJuYW1lIjoibmFtZTEyIiwicGFzc3dvcmQiOiIkMmEkMTAkSE1BRlkxMGNkMW8uT1VTRGdnc1lJdW1laEVqWWNhR2NBTG56UTI2L2ZmVXJxZGVtNnRaOU8iLCJfaWQiOiI1NmVkZTAyYzI4ZmI3OWZiMzgyOWIxYmUiLCJjcmVhdGVkT24iOiIyMDE2LTAzLTE5VDIzOjI2OjM2LjEyM1oiLCJzdXJ2ZXkiOltdfQ.rNj1OVvgJTGoSmaJj2fJuQqwhE1pNXzWZiDzg9-IOyo"
    var request = axios.post('/user/userData', survey)
      .then(function(response) {
        console.log('axios response ', response);
        dispatch(surveySuccess());
      })
      .catch(function(error) {
        console.log('axios error ', error);
        dispatch(surveyFailure());
      });
  }
};
