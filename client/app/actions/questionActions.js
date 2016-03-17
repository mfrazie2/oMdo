

// questionState
// initial:
// currentQuestion: 0;
// 

exports.PREV_QUESTION = 'PREV_QUESTION';
exports.NEXT_QUESTION = 'NEXT_QUESTION';

exports.prevQuestion = function() {
  return {type: PREV_QUESTION};
};

exports.nextQuestion = function(currentQuestion) {
  return {type: NEXT_QUESTION, currentQuestion};
};

