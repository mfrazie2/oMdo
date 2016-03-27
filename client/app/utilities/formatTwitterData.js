module.exports = function(data){
  var emotional = data[0].tones;
  var writing = data[1].tones;
  var social = data[2].tones;

  // this.props[0]['tones'][0]['score'];

  var labels = [];
  var scores = [];

  // var eLabels = [];
  // var eScores = [];

  emotional.forEach(function(item) {
    for(var prop in item) {
      if(prop === 'tone_name') {
        labels.push(item[prop]);
      }
      if(prop === 'score') {
        scores.push(item[prop] * 100);
      }
    }
  });
  
  // var wLabels = [];
  // var wScores = [];

  writing.forEach(function(item) {
    for(var prop in item) {
      if(prop === 'tone_name') {
        labels.push(item[prop]);
      }
      if(prop === 'score') {
        scores.push(item[prop] * 100);
      }
    }
  });

  // var sLabels = [];
  // var sScores = [];

  social.forEach(function(item) {
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
  // console.log('bar score ', scores);
  console.log('bar input ', data);
  var barData = {
    labels: labels,
    datasets: [
      {
        label: 'Tone Data',
        fillColor: ['rgba(102,0,204,0.4)', 'rgba(255,0,0,0.4)', 'rgba(255,153,51,0.4)'],
        // fillColor: 'rgba(220,220,220,1)',
        strokeColor: 'rgba(220,220,220,1)',
        highlightFill: '#fff',
        highlightStroke: 'rgba(220,220,220,1)',
        data: scores,
        customTooltip: true,
        tooltipTemplate: '<%= value %>'
      }
    ]
  };
  
  return barData;
};

//'rgba(102,0,204,0.4)'

// [
//   'rgba(102,0,204,0.4)', 
//   'rgba(255,0,0,0.4)',
//   'rgba(255,153,51,0.4)',
//   'rgba(255,255,0,0.4)',
//   'rgba(0,204,0,0.4)',
//   'rgba(51,153,255,0.4)',
//   'rgba(0,0,255,0.4)'
// ]