var React = require('react');
var Entry = require('./diaryEntry');
var styleable = require('react-styleable').default;
var css = require('../styles/profile.css');

function Diary (props) {
  return (
    <ol className={props.css.diary}>
      {props.surveys.map(function(survey, i) {
        return (
          <Entry
            data={survey}
            key={i}
          />
        )
      })}
    </ol>
  )
}

module.exports = styleable(css)(Diary);
