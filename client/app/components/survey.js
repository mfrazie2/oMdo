var React = require('react');
var PropTypes = React.PropTypes;

function Survey(props) {
  return (
    <div>
      <h1>Survey</h1>
      <form className='surveyForm'> {/*add onSubmit*/}
        <div className='surveySlider'>
          How are you feeling?<br />
          Bad
          <input type='range' name='generalMoodSlider' />
          Good
          <br />
        </div>
        <div className='surveyText'>
          Care to elaborate?<br />
          <input className='surveyText' type='textarea' name='elaborate' /><br />
        </div>
        <div className='surveyLocation'>
          Where are you?  We only ask because we're not tracking you, at all.<br />
          <input type="radio" name="activity" value="somewhere" />Somewhere<br />
          <input type="radio" name="activity" value="nowhere" />Nowhere<br />
          <input type="radio" name="activity" value="other" />Other<br />
        </div>
        <button className='surveySubmit' type='submit'>Submit feelings!</button>
      </form>
    </div>
  )
} 

Survey.propTypes = {

}

module.exports = Survey;
