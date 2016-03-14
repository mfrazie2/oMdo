var morgan = require('morgan');

// Commented out main routes for now
// Refactor when we implement API requests

// var mainRoutes = require('./main/mainRoutes');

// module.exports = function (app, express) {
//   app.use(morgan('dev'));
//   mainRoutes(app, express);
// };

module.exports = function(app) {
  app.use(morgan('dev'));
}