//action types
exports.SIGN_IN = 'SIGN_IN';
exports.SIGN_UP = 'SIGN_UP';
exports.SUBMIT_SURVEY = 'SUBMIT_SURVEY';

//action-creators
exports.signIn = function(username, password) {
  return {type: 'SIGN_IN', username, password};
};

exports.signUp = function(signupForm) {
  return {type: 'SIGN_UP', signupForm};
};

exports.submitSurvey = function(surveyForm) {
  return {type: 'SUBMIT_SURVEY', surveyForm};
};


