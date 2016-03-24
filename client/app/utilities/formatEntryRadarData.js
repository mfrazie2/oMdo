module.exports = function(data){
  var irrelevantFields = {
    'surveyId': true,
    '__v': true,
    '_id': true,
    'createdOn': true,
    'createdBy': true,
    'eventElaborate': true,
    'moodElaborate': true,
    'majorEvent': true,
    'sleepElaborate': true
  };

  var relevantLabels = Object.keys(data).filter(function(field) {
    return !irrelevantFields[field];
  });

  var radarData = {
    labels: relevantLabels,
    datasets: [
      {
        label: 'User Data',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: relevantLabels.map(function(field){
          return data[field] * 10;
        })
      }
    ]
  }
  
  return radarData;
}
