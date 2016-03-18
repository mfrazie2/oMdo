var mongoose = require('mongoose');
var User = require('./userSchema');

var SurveySchema = new mongoose.Schema({
  feeling: Number,
  anxiety: Number,
  energy: Number,
  sleep: String, // ?
  sleepElaborate: String,
  mood: String, // ?
  moodElaborate: String,
  majorEvent: String, // ? Boolean ?
  eventElaborate: String,
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  createdOn: {
    type: Date,
    default: Date.now
  }
});

var Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;
