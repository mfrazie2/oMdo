var morgan = require('morgan');
var mainRoutes = require('./main/mainRoutes');

module.exports = function (app, express) {
  app.use(morgan('dev'));
  mainRoutes(app, express);
};
