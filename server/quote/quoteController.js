var fs = require('fs');

module.exports = {
  getQuote: function(req, res, next) {
    fs.readFile(__dirname + '/quote.json', 'utf8', function(err, data) {
      if (err) next(new Error('There was an error reading the quote file'));
      if (!data.length) res.send({
          "success": {"total": 1},
          "contents": {
            "quote": "Please check back for a fresh chunk of wisdom.",
            "author": "oMdo",
            "id": "0",
            "requested_category": "sanity",
            "categories": []
          }
        })
      res.json(JSON.parse(data));
    });
  }
}
