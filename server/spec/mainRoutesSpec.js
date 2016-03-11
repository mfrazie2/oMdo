var expect = require('chai').expect;
var mainRoutes = require('../main/mainRoutes');
var mainController = require('../main/mainController');

describe('MainRoutes', function() {
  var testObj;

  beforeEach(function(done) {
    testObj = {get: function (str, func) {
      testObj.route = str;
      testObj.func = func;
    }};

    done();
  });

  it('Is a function', function(done) {
    expect(typeof mainRoutes).to.equal('function');
    done();
  });

  it('Doesn\'t return anything', function(done) {
    expect(mainRoutes(testObj)).to.not.exist;
    done();
  });

  it('Routes / to mainController.helloWorld', function(done) {
    mainRoutes(testObj);
    expect(testObj.route).to.equal('/');
    expect(testObj.func).to.equal(mainController.helloWorld);
    done();
  })
});
