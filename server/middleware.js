var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes');
var webpackMiddleware = require('./webpackMiddleware');
var path = require('path');

exports.configure = function(app, express) {
  app.use(bodyParser.urlencoded({
     extended: true
  }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use('/api', routes);

  if(!this.isProduction()) {
    app.use(webpackMiddleware.devConfig);
    app.use(webpackMiddleware.hotConfig);
    app.get('*', function response(req, res) {
      res.write(webpackMiddleWare.devConfig.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')));
      res.end();
    });
  } else {
    app.use(express.static(path.join(__dirname, '..dist/index.html')));
    app.get('*', function response(req, res) {
      res.sendFile(path.join(__dirname, '..dist/index.html'));
    });  
  } 
}; 

exports.isProduction = function() {
  return process.env.NODE_ENV === 'production';
};
