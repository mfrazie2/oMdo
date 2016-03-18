var actions = require('../actions/actions')

// Survey question changes
exports.feelingChange = function(feeling) {
  return {type: actions.FEELING_CHANGE, feeling: feeling}
};

exports.anxietyChange = function(anxiety) {
  return {type: actions.ANXIETY_CHANGE, anxiety: anxiety}
};

exports.sleepChange = function(sleep) {
  return {type: actions.SLEEP_CHANGE, sleep: sleep}
};

exports.moodChange = function(mood) {
  return {type: actions.MOOD_CHANGE, mood: mood}
};

exports.majorEventChange = function(eventChange) {
  return {type: actions.MAJOR_EVENT_CHANGE, eventChange: eventChange}
};

exports.eventElaborateChange = function(eventDetail) {
  return {type: actions.EVENT_ELABORATE_CHANGE, eventDetail: eventDetail}
};

exports.energyChange = function(energy) {
  return {type: actions.ENERGY_CHANGE, energy: energy}
};

exports.sleepElaborateChange = function(sleepDetail) {
  return {type: actions.SLEEP_ELABORATE_CHANGE, sleepDetail: sleepDetail}
};

exports.moodElaborateChange = function(moodDetail) {
  return {type: actions.MOOD_ELABORATE_CHANGE, moodDetail: moodDetail}
};

// Survey submission handling
exports.surveySubmit = function() {
  return {type: actions.SURVEY_SUBMIT};
};
exports.surveySuccess = function() {
  return {type: actions.SURVEY_SUCCESS};
};
exports.surveyFailure = function() {
  return {type: actions.SURVEY_FAILURE};
};


