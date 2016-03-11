var expect = require('chai').expect;
var mainController = require('../main/mainController');

describe('mainController', function() {
  var testObj;

  beforeEach(function(done) {
    testObj = {
      send: function(res) {
        testObj.sent = res;
      }
    };


    done();
  });

  it('should have a hello world that sends "Hello Birdcage & Sleet"',
  function(done) {
      expect(mainController.helloWorld).to.exist;
      mainController.helloWorld(undefined,testObj);
      expect(testObj.sent).to.equal('Hello Birdcage & Sleet');
      done();
  });

  it('should have an errorHandler that sends 500 status', function(done) {
    expect(mainController.errorHandler).to.exist;
    done();
  });
});
