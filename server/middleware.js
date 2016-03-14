var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes');
var webpackMiddleware = require('./webpackMiddleware');
var path = require('path');

module.exports = {
  isProduction: function() {
    return process.env.NODE_ENV === 'production';
  },
  
  devMiddleware: function(app) {
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use('/api', routes);
    app.use(webpackMiddleware.devConfig);
    app.use(webpackMiddleware.hotConfig);
    app.get('*', function response(req, res) {
      res.write(webpackMiddleWare.devConfig.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')));
      res.end();
    });
  },

  prodMiddleware: function(app, express) {
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use('/api', routes);
    app.use(express.static(path.join(__dirname, '..dist/index.html')));
    app.get('*', function response(req, res) {
      res.sendFile(path.join(__dirname, '..dist/index.html'));
    })
  }

};
