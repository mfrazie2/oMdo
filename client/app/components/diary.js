var React = require('react');
var Entry = require('./diaryEntry');

function Diary (props) {
  return (
    <ol>
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

module.exports = Diary;
