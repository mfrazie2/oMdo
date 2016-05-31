var request = require('supertest');
var expect = require('chai').expect;
var server = require('../server');
var request = require('supertest');
var expect = require('chai').expect;
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var server = require('../server');

mockgoose(mongoose);

describe('Test auth routes and controllers', function() {
  describe('User Routes', function() {
    describe('signUp', function() {
      beforeEach(function(done) {
        mockgoose.reset(function() {
          request(server)
          .post('/user/signUp')
          .send({username: 'alon', password: 'grits'})
          .then(function(res) {
            token = res.body.token;
            done();
          });
        });
      });
      it('should create a new user', function(done) {
        request(server)
          .post('/user/signUp')
          .send({username: 'Alon', password: 'grits'})
          .end(function(err,res) {
            if (err) return done(err);
            expect(res.body.token).to.be.an('string');
            done();
        });
      });
      it('should not create a user if one with the same name already exists', function(done) {
        request(server)
          .post('/user/signUp')
          .send({username: 'alon', password:'notgrits'})
          .expect(500)
          .then(function(res) {
            expect(res.body).to.deep.equal({});
            done();
          })
      });
    });
    describe('signIn', function() {
      var token;
      beforeEach(function(done) {
        request(server)
          .post('/user/signUp')
          .send({username: 'alon', password: 'grits'})
          .then(function(res) {
            token = res.body.token;
            done();
          });
      });
      it('should not sign in a user that does not exist', function(done) {
        mockgoose.reset(function(){
          request(server)
            .post('/user/signIn')
            .send({username: 'alon', password: 'grits'})
            .expect(500)
            .then(function(res) {
              expect(res.body).to.deep.equal({});
            });
          done();
        });
      });
      it('should sign in a user that exists', function(done) {
        request(server)
          .post('/user/signIn')
          .send({username: 'alon', password: 'grits'})
          .then(function(res) {
            expect(res.body.token).to.be.a('string');
            done();
          });
      })
    });
  });
});
