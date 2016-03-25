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

  var relevantLabels = Object.keys(data[0]).filter(function(field) {
    return !irrelevantFields[field];
  });
  console.log(relevantLabels);
  var radarData = {
    labels: relevantLabels,
    datasets: [
      {
        label: 'User Data',
        fillColor: 'rgba(0,191,255,0.2)',
        strokeColor: 'rgba(0,191,255,1)',
        pointColor: 'rgba(0,191,255,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(0,191,255,1)',
        data: relevantLabels.map(function(field){
          return data[data.length-1][field] * 10;
        })
      },
      {
        label: 'User Data',
        fillColor: 'rgba(192,192,192,0.2)',
        strokeColor: 'rgba(192,192,192,1)',
        pointColor: 'rgba(192,192,192,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(192,192,192,1)',
        data: relevantLabels.map(function(field){
          return data[data.length-2][field] * 10;
        })
      },
      {
        label: 'User Data',
        fillColor: 'rgba(255,192,203,0.2)',
        strokeColor: 'rgba(255,192,203,1)',
        pointColor: 'rgba(255,192,203,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(255,192,203,1)',
        data: relevantLabels.map(function(field){
          return data[data.length-3][field] * 10;
        })
      }
    ]
  }

  console.log(radarData.datasets);
  return radarData;
}

// var storage = [];

  // for (var i = 0; i < 3; i++) {
  //  var set = {
  //       label: 'User Data',
  //       fillColor: 'rgba(0,191,255,0.2)',
  //       strokeColor: 'rgba(0,191,255,1)',
  //       pointColor: 'rgba(0,191,255,1)',
  //       pointStrokeColor: '#fff',
  //       pointHighlightFill: '#fff',
  //       pointHighlightStroke: 'rgba(0,191,255,1)',
  //       data: relevantLabels.map(function(field){
  //         return data[i][field] * 10;
  //       })
  //     }
  //     storage.push(set)
