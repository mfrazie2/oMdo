var fs = require('fs');

module.exports = {
  getQuote: function(req, res, next) {
    fs.readFile(__dirname + '/quote.json', 'utf8', function(err, data) {
      if (err) next(new Error('There was an error reading the quote file'));
      res.json(data);
    });
  }
}
