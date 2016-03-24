var React = require('react');
var SliderQuestion = require('./sliderQuestion');
var SelectorQuestion = require('./selectorQuestion');
var TextQuestion = require('./textQuestion');
var BooleanQuestion = require('./booleanQuestion');

function Questions (props) {
  var key = -1;
  return (
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
    </div>
  )
};

module.exports = Questions;
