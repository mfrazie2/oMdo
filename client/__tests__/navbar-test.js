jest.unmock('../app/components/navbar.js');

describe('Profile', function() {
  var React = require('react');
  var ReactDom = require('react-dom');
  var TestUtils = require('react-addons-test-utils');

  var Navbar;
  beforeEach(function() {
    Navbar = require('../app/components/navbar');
  });

  it('should exist', function() {
    var navbar = TestUtils.renderIntoDocument(<Navbar />);
    expect(TestUtils.isCompositeComponent(navbar)).toBeTruthy();
  });
});
