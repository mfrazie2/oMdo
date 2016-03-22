var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var User = require('./userSchema');
var autoIncrement = require('mongoose-auto-increment');
var db = require('../config.js');
autoIncrement.initialize(db);
var SurveySchema = new mongoose.Schema({
  surveyId: Number,
  feeling: Number,
  anxiety: Number,
  energy: Number,
  sleep: Number, // ?
  sleepElaborate: String,
  mood: Number, // ?
  moodElaborate: String,
  majorEvent: Boolean, // ? Boolean ?
  eventElaborate: String,
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  createdOn: {
    type: Date,
    default: Date.now
  }
});

SurveySchema.plugin(autoIncrement.plugin, {model:'Survey', field:'surveyId'});
SurveySchema.plugin(findOrCreate);

var Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;
