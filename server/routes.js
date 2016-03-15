var authRoutes = require('./auth/authRoutes');
var surveyRoutes = require('./survey/surveyRoutes');
var userRoutes = require('./user/userRoutes');

module.exports = function(app, express) {
  app.use('/auth', authRoutes);
  app.use('/survey', surveyRoutes);
  app.use('/user', userRoutes);
};
