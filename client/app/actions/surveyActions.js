var axios = require('axios');

exports.surveySubmit = function(surveyForm) {
  return {type: 'SURVEY_SUBMIT', surveyForm};
};
exports.surveySuccess = function(surveyForm) {
  return {type: 'SURVEY_SUCCESS', surveyForm};
};
exports.surveyFailure = function(surveyForm) {
  return {type: 'SURVEY_FAILURE', surveyForm};
};


