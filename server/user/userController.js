var User = require('../db/models/userSchema.js');
var Survey = require('../db.models/surveySchema.js');
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
        create,
        findOne = Q.nbind(User.findOne, User);

    findOne({username: username})
    .then(function(user) {
      if (user) {
        next(new Error('Already exists!'));
      } else {
        create = Q.nbind(User.create, User);
        newUser = {
          username: username,
          password: password
        };
      }
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



};
