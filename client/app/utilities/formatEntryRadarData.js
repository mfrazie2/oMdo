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

  var dataPlots = [];
  var i = data.length-1;
  var setsToGo  = (data.length >= 7) ? 7 : data.length;

  while (setsToGo > 0 ) {
    dataPlots[i] = [];
    for (var k = 0; k < relevantLabels.length; k++) {
      var field = relevantLabels[k];
      dataPlots[i].push(data[i][field] * 10);
    }
    setsToGo -= 1;
    i -= 1;
  }
  var radarPlots = [];
  var fillColors = ['rgba(0,191,255,0.1)', 'rgba(192,192,192,0.1)', 'rgba(255,192,203,0.1)','rgba(255,16,31,0.1)','rgba(32,191,85,0.1)','rgba(247,179,43,0.1)','rgba(241,250,238,0.1)'];
  for (var j = 0; j < dataPlots.length; j++) {
    radarPlots.push({
      label: 'User Data',
      strokeColor: 'rgba(220,220,220,1)',
      pointColor: 'rgba(220,220,220,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      fillColor: fillColors[j],
      data: dataPlots[j]
    });
  }
  var radarData = {
    labels: relevantLabels,
    datasets: radarPlots
  }

  return radarData;
}
