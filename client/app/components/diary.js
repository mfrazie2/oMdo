var React = require('react');
var Entry = require('./diaryEntry');

function Diary (props) {
  return (
    <ol>
      {props.surveys.map(function(survey) {
        <Entry
          date={survey.createdAt}
        />
      })}
    </ol>
  )
}

module.exports = Diary;
