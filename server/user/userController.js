var User = require('../db/models/userSchema.js');
var Survey = require('../db/models/surveySchema.js');
var jwt = require('jwt-simple');
var Q = require('q');

module.exports = {
  /*
    ========================================
                     TESTS
    ========================================
  */

  dataTest: function(req, res) {
    res.send({test: 'Data about your feelings!'});
  },
  diaryTest: function(req, res) {
    res.send({test: 'A diary of your feelings!'});
  },
  /*
    ========================================
                  USER CONTROLLER
    ========================================
  */

  signUp: function(req, res, next) {
    var username = req.body.username,
        password = req.body.password,
        newUser,
        create = Q.nbind(User.create, User);
        findOne = Q.nbind(User.findOne, User);

    findOne({username: username})
    .then(function(user) {
      if (user) {
        next(new Error('Already exists!'));
      } else {
        newUser = {
          username: username,
          password: password
        };
      }
      console.log(newUser);
      return create(newUser);
    })
    .then(function(user) {
      var token = jwt.encode(user, 'terminator');
      res.json({token:token});
    })
    .fail(function(error) {
      next(error);
    });
  },

  signIn: function(req, res, next) {
    var username = req.body.username,
        password = req.body.password,
        findUser = Q.nbind(User.findOne, User);

    findUser({username:username})
      .then(function(user) {
      if (!user) {
        next(new Error('Cannot find the user!'));
      } else {
        return user.comparePassword(password)
        .then(function(foundUser) {
          if(foundUser) {
            var token =jwt.encode(user, 'terminator');
            console.log({username: username, password: password, token: token});
            res.json({token: token});
          } else {
            return next(new Error('There is no user by that name'));
          }
        });
      }
      })
      .fail(function(error) {
        next(error);
      });
  },

  checkAuth: function(req,res,next) {
    var token = req.headers['x-acess-token'];
    if (!token) {
      next(new Error('No token found!'));
    } else {
      var user = jwt.decode(token, 'terminator');
      var findUser = Q.nbind(User.findOne, User);
      findUser({username: user.username})
      .then(function(foundUser) {
        if(foundUser) {
          res.send(200);
        } else {
          res.send(401);
        }
      })
      .fail(function(error) {
        next(error);
      });
    }
  },

  getUser: function(req,res,next) {
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token found!'));
    } else {
      var user =jwt.decode(token, 'terminator');
      var findUser =Q.nbind(User.findOne, User);
      findUser({username: user.username})
      .then(function(foundUser) {
        if(foundUser) {
          res.send({username:foundUser.username});
        } else {
          res.send(401);
        }
      })
      .fail(function(error) {
        next(error);
      });
    }
  },

  getUserSurvey: function(req,res,next) {
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token found!'));
    } else {
      var user =jwt.decode(token, 'terminator');
      var findUser = Q.nbind(User.findOne, User);
      findUser({username: user.username})
      .then(function(foundUser) {
        if (foundUser) {
          var surveys = foundUser.surveys.reduce(function(memo, Survey) {
            Survey.findOrCreate({_id: Survey._id}, function(err, foundSurvey, created) {
              Survey.feeling = foundSurvey.feeling;
              Survey.anxiety = foundSurvey.anxiety;
              Survey.energy  = foundSurvey.energy;
              Survey.sleep = foundSurvey.sleep;
              Survey.sleepElaborate = foundSurvey.sleepElaborate;
              Survey.mood = foundSurvey.mood;
              Survey.moodElaborate = foundSurvey.moodElaborate;
              Survey.majorEvent = foundSurvey.majorEvent;
              memo.push(Survey);
            });
            return memo;
          }, [])
          foundUser.populate('surveys');
          res.send({
            username: foundUser.username,
            surveys: foundUser.surveys
          });
        } else {
          res.send(401);
        }
      })
      .fail(function(error) {
        next(error);
      });
    }
  },

  postUserSurvey: function(req,res,next) {

  }


};
