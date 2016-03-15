var request = require('supertest');
var expect = require('chai').expect;
var server = require('../server');

describe('test auth routing', function() {
  it('responds to /api/auth', function(done) {
    request(server)
      .get('/api/auth')
      .expect(200)
      .end(function(err, res) {
        expect(err).to.not.exist;
        expect(res.body.test).to.equal('Authorized!');
        done();
      });
  });

});