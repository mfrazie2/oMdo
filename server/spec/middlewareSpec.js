var express = require('express');
var expect = require('chai').expect;
var middleware = require('../middleware');

var port = 8000;
var app = express();


describe('Middleware', function() {

  it('Doesn\'t return anything', function(done) {
    app.listen(port);
    expect(middleware.configure(app)).to.equal(undefined);
    done();
  });
})
