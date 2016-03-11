var express = require('express');
var expect = require('chai').expect;
var middleware = require('../middleware');

var port = 8000;
var app = express();


describe('Middleware', function() {

  it('Doesn\'t return anything', function(done) {
    app.listen(port, console.log.bind(console, 'Tests listening on port', port));
    expect(middleware(app)).to.equal(undefined);
    done();
  });

  it('Should route to main', function(done) {
    middleware(app);

    var i = app._router.stack.reduce(function(memo, layer, i) {
      if (!!layer.route) {
        return layer.route.path === '/' ? i : memo;
      }
    }, -1);

    expect(i).to.not.equal(-1);
    expect(app._router.stack[i].route).to.exist;
    expect(app._router.stack[i].route.path).to.equal('/');
    done();
  });
})
