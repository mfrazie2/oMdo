var request = require('supertest');
var expect = require('chai').expect;
var server = require('../server');

describe('test survey routing', function() {
  it('responds to /api/survey', function(done) {
    request(server)
      .get('/api/survey')
      .expect(200)
      .end(function(err, res) {
        expect(err).to.not.exist;
        expect(res.body.test).to.equal('Feelings noted!');
        done();
      });
  });

});
