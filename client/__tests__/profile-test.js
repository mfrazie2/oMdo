jest.unmock('../app/components/profile.js');

describe('Profile', function() {
  var React = require('react');
  var ReactDom = require('react-dom');
  var TestUtils = require('react-addons-test-utils');

  var Main;
  beforeEach(function() {
    Profile = require('../app/components/profile');
  });

  it('should exist', function() {
    var profile = TestUtils.renderIntoDocument(<Profile />);
    expect(TestUtils.isCompositeComponent(profile)).toBeTruthy();
  });
});
