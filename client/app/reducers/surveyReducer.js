var actions = require('../actions/actions');
var axios = require('axios');

var initialState = {
  generalFeel: undefined,
  anxietyLevel: undefined,
  energyLevel: undefined,
  sleepQuality: undefined,
  currentMood: undefined,
  majorEvent: undefined,
  moodElaborate: '',
  sleepElaborate: '',
  eventElaborate: '',
  isLoading: false,
  error: false
}

function surveyReducer(state, action) {
  if(state === undefined) {
    state = initialState;
  }
  switch(action.type) {
    case actions.SURVEY_SUBMIT:
    console.log('IN SURVEY_SUBMIT switch!')
      return Object.assign({}, state, {
        generalFeel: undefined,
        anxietyLevel: undefined,
        energyLevel: undefined,
        sleepQuality: undefined,
        currentMood: undefined,
        majorEvent: undefined,
        moodElaborate: '',
        sleepElaborate: '',
        eventElaborate: '',
        isLoading: true
      })
    case actions.SURVEY_SUCCESS:
    console.log('IN SURVEY_SUCCESS switch!')
      return Object.assign({}, state, {
        isLoading: false
      })
    case actions.SURVEY_FAILURE:
    console.log('IN SURVEY_FAILURE switch!')
      return Object.assign({}, state, {
        isLoading: false,
        error: true
      })
    case actions.FEELING_CHANGE:
      return Object.assign({}, state, {
        generalFeel: action.feeling
      })
    case actions.ANXIETY_CHANGE:
      return Object.assign({}, state, {
        anxietyLevel: action.anxiety
      })
    case actions.SLEEP_CHANGE:
      return Object.assign({}, state, {
        sleepQuality: action.sleep
      })
    case actions.MOOD_CHANGE:
      return Object.assign({}, state, {
        currentMood: action.mood
      })
    case actions.MAJOR_EVENT_CHANGE:
      return Object.assign({}, state, {
        majorEvent: action.eventChange
      })
    case actions.EVENT_ELABORATE_CHANGE:
      return Object.assign({}, state, {
        eventElaborate: action.eventDetail
      })
    case actions.ENERGY_CHANGE:
      return Object.assign({}, state, {
        energyLevel: action.energy
      })
    case actions.SLEEP_ELABORATE_CHANGE:
      return Object.assign({}, state, {
        sleepElaborate: action.sleepDetail
      })
    case actions.MOOD_ELABORATE_CHANGE:
      return Object.assign({}, state, {
        moodElaborate: action.moodDetail
      })
    default:
      return state
  }
}

module.exports = surveyReducer;
