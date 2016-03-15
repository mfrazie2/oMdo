var request = require('supertest');
var expect = require('chai').expect;
var server = require('../server');

describe('test user routing', function() {
  it('responds to /api/user/data', function(done) {
    request(server)
      .get('/api/user/data')
      .expect(200)
      .end(function(err, res) {
        expect(err).to.not.exist;
        expect(res.body.test).to.equal('Data about your feelings!');
        done();
      });
  });

  it('responds to /api/user/diary', function(done) {
    request(server)
      .get('/api/user/diary')
      .expect(200)
      .end(function(err, res) {
        expect(err).to.not.exist;
        expect(res.body.test).to.equal('A diary of your feelings!');
        done();
      });
  });

});
