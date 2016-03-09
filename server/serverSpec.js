var request = require('supertest');
var expect = require('chai').expect;
var server = require('./server');

describe('loading express', function() {
  it('responds to /', function (done) {
    request(server)
      .get('/')
      .expect(200);
      done();
  });

  it('404 everything else', function (done) {
    request(server)
      .get('/something_else')
      .expect(404);
      done();
  });
});