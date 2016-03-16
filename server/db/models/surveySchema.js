var mongoose = require('mongoose');

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
  createdBy: {Schema.Types.ObjectId, ref: 'User'},
  createOn: {
    type: Date,
    default: Date.now
  }
});

var Survey = moongoose('Survey', SurveySchema);

module.exports = Survey;
