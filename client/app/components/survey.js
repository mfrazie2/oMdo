var React = require('react');
var SliderQuestion = require('./sliderQuestion');
var SelectorQuestion = require('./selectorQuestion');
var TextQuestion = require('./textQuestion');
var Loading = require('../components/loading');
var styleable = require('react-styleable').default;
var css = require('../styles/survey.css');

function Survey(props) {
  var key = 0;
  return props.isLoading === true
  ? (
    <Loading />
  )
  : (
    <div>
      <SliderQuestion
        text='How are you feeling in this moment?'
        minText='Sad'
        maxText='Happy'
        handleChange={props.onFeelingChange}
        />
      <SliderQuestion
        text='How anxious are you right now?'
        minText='Not at all'
        maxText='Panicky'
        handleChange={props.onAnxietyChange}
      />
      <SliderQuestion
        text='How energetic are you right now?'
        minText='Falling asleep'
        maxText='Alert and awake'
        handleChange={props.onEnergyChange}
      />

      <div className="sleepQuestions">
        <SelectorQuestion
          text='How did you sleep last night?'
          options=['Insomnia!', 'Tossed and turned', 'Normally', 'Pretty well', 'Very restful']
          handleChange={props.onSleepChange}
        >
          <div className='surveyTextarea'>
            <p>Care to elaborate on your sleep from last night?</p>
            <input type='textarea' name='sleepElaborate' onChange={props.onSleepElaborateChange} /><br />
          </div>
      </SelectorQuestion>
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
      <button className="surveySubmit" type="Submit" onClick={props.onSubmit}>Submit</button>
    </div>
  )
}

module.exports = styleable(css)(Survey);
