var React = require('react');
var PropTypes = React.PropTypes;
var Question = require('./question');
var store = require('../store/store');
var Loading = require('../components/loading');
var styleable = require('react-styleable').default;
var css = require('../styles/survey.css');
var Loading = require('../components/loading');

function Survey(props) {
  return (
    props.isLoading === true ?
    <Loading /> :

    <div>
      <Question className='feelingQuestion surveySlider'>
        <div className='feelingQuestion surveySlider'>
          <p>How are you feeling in this moment? <em>(On a scale of 1-5)</em> </p>
          Sad
          <input type='range' name='generalFeelingSlider' min="1" max="5" onChange={props.onFeelingChange} />
          Happy
          <br />
        </div>

        <div className='anxietyQuestion surveySlider'>
          <p>What is your anxiety level right now? <em>(On a scale of 1-5)</em> </p>
          Low/none
          <input type='range' name='anxietySlider' min="1" max="5" onChange={props.onAnxietyChange} />
          High
          <br />
        </div>

        <div className='energyQuestion surveySlider'>
          <p>What is your energy level? <em>(On a scale of 1-5)</em> </p>
          Tired/none
          <input type='range' name='energySlider' min="1" max="5" onChange={props.onEnergyChange} />
          Alert and awake/high
          <br />
        </div>

        <div className="sleepQuestions">
          <div className='surveyRadioButtons'>
            <p>What was your sleep quality last night?</p>
            <input type="radio" name="sleep" value="1" onChange={props.onSleepChange} />Insomnia<br />
            <input type="radio" name="sleep" value="2" onChange={props.onSleepChange} />Tossed and turned<br />
            <input type="radio" name="sleep" value="3" onChange={props.onSleepChange} />Difficulty falling asleep<br />
            <input type="radio" name="sleep" value="4" onChange={props.onSleepChange} />Good/normal<br />
            <input type="radio" name="sleep" value="5" onChange={props.onSleepChange} />Very restful<br />
          </div>
          <div className='surveyTextarea'>
            <p>Care to elaborate on your sleep from last night?</p>
            <input type='textarea' name='sleepElaborate' onChange={props.onSleepElaborateChange} /><br />
          </div>
        </div>

        <div className="moodQuestions">
          <div className='surveyRadioButtons'>
            <p>Which of the following best describes your mood in this moment?</p>
            <input type="radio" name="mood" value="1" onChange={props.onMoodChange} />Sad/depressed<br />
            <input type="radio" name="mood" value="2" onChange={props.onMoodChange} />Aggravated, short-tempered<br />
            <input type="radio" name="mood" value="3" onChange={props.onMoodChange} />Less interested in others/activities than usual <br />
            <input type="radio" name="mood" value="4" onChange={props.onMoodChange} />Generally good/agreeable mood<br />
            <input type="radio" name="mood" value="5" onChange={props.onMoodChange} />Highly positive mood<br />
          </div>
          <div className='surveyTextarea'>
            <p>Please elaborate on why you feel that way right now.</p>
            <input type='textarea' name='moodElaborate' onChange={props.onMoodElaborateChange} /><br />
          </div>
        </div>

        <div className="eventsQuestions">
          <div className='surveyRadioButtons'>
            <p>Have any significant or noteworthy events happened to you since your last check-in?</p>
            <input type="radio" name="events" value="yes" onChange={props.onMajorEventChange} /> Yes <br />
            <input type="radio" name="events" value="no" onChange={props.onMajorEventChange} /> No
          </div>
          <div className='surveyTextarea'>
            <p>If you like, please share what event(s) occurred.</p>
            <input type="textarea" name="eventElaborate" onChange={props.onEventElaborateChange} />
          </div>
        </div>
          </Question>
          <button className="surveySubmit" type="Submit" onClick={props.onSubmit}>Submit</button>
    </div>
  )
}

module.exports = styleable(css)(Survey);
