var authRoutes = require('./auth/authRoutes');
var surveyRoutes = require('./survey/surveyRoutes');
var userRoutes = require('./user/userRoutes');
var twitterRoutes = require('./twitter/twitterRoutes');

module.exports = function(app, express) {
  // app.use('/auth', authRoutes);
  // app.use('/survey', surveyRoutes);
  app.use('/user', userRoutes);
  app.use('/twitter', twitterRoutes);
};
