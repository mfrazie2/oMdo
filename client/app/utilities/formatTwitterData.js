module.exports = function(data){
  // var irrelevantFields = {
  //   'tone_id': true
  // };

  // var relevantLabels = Object.keys(data).filter(function(field) {
  //   return !irrelevantFields[field];
  // });

  var labels = [];
  var scores = []
  data.forEach(function(item) {
    for(var prop in item) {
      if(prop === 'tone_name') {
        labels.push(item[prop]);
      }
      if(prop === 'score') {
        scores.push(item[prop] * 100);
      }
    }
  });
  
  
  console.log('bar labels ', labels);
  console.log('bar score ', scores);
  console.log('bar input ', data);
  var barData = {
    labels: labels,
    datasets: [
      {
        label: 'User Data',
        fillColor: 'rgba(66,75,84,1)',
        // fillColor: 'rgba(220,220,220,1)',
        strokeColor: 'rgba(220,220,220,1)',
        highlightFill: '#fff',
        highlightStroke: 'rgba(220,220,220,1)',
        data: scores,
        customTooltip: true,
        tooltipTemplate: '<%= value %>'
      }
    ]
  }
  
  return barData;
}