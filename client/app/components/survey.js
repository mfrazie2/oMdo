var React = require('react');
var SliderQuestion = require('./sliderQuestion');
var SelectorQuestion = require('./selectorQuestion');
var TextQuestion = require('./textQuestion');
var BooleanQuestion = require('./booleanQuestion');
var Loading = require('../components/loading');
var styleable = require('react-styleable').default;
var css = require('../styles/survey.css');

function Survey(props) {
  var key = -1;
  return props.isLoading === true
  ? (
    <Loading />
  )
  : (
    <div>
      {props.questions.slider.map(function(question) {
        return (
          <SliderQuestion
            key ={++key}
            text={question.text}
            minText={question.minText}
            maxText={question.maxText}
            handleChange={props.handlers.slider[question.category]}
          />
        )
      })}
      {props.questions.selector.map(function(question) {
        return (
            <SelectorQuestion
              key={++key}
              text={question.text}
              options={question.options}
              handleChange={props.handlers.selector[question.category]}
            >
              <TextQuestion
                category={question.category}
                handleChange={props.handlers.text[question.category]}
                />
            </SelectorQuestion>
          )
        })}
        {props.questions.boolean.map(function(question) {
          return (
            <BooleanQuestion
              key={++key}
              text={question.text}
              handleChange={props.handlers.boolean[question.category]}
            >
              <TextQuestion
                category={question.category}
                handleChange={props.handlers.text[question.category]}
              />
            </BooleanQuestion>
            )
          })}
        <button className="surveySubmit" type="Submit" onClick={props.onSubmit}>Submit</button>
      </div>
    )
};

module.exports = styleable(css)(Survey);
