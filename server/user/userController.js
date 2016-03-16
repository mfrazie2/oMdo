module.exports = {
  dataTest: function(req, res) {
    res.send({test: 'Data about your feelings!'});
  },
  diaryTest: function(req, res) {
    res.send({test: 'A diary of your feelings!'});
  }
}