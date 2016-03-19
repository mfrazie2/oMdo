jest.unmock('../app/components/profile.js');

describe('Profile', function() {
  var expect = require('expect')
  var React = require('react');
  var ReactDom = require('react-dom');
  var TestUtils = require('react-addons-test-utils');
  var Profile = require('../app/components/profile');
  var props, renderer, output, result;

  beforeEach(function() {
    props = {
      username: 'alon'
    };

    renderer = testUtils.createRenderer();
    renderer.render(<Profile props />);

    output = renderer.gerRenderOutput();

    result = {
      props: props,
      output: output,
      renderer: renderer
    }
  });

  it('should render properly', function() {
    expect(result.output.type).toBe('div');
    expect(result.props.username).toBe('alon');

    var children = result.output.children;
    expect(children[0].type).toBe('h1');
    expect(children[0].props.children).toInclude('onClick');
    expect(children[0].props.children).toInclude('reduxResult');

    expect(children[1].type).toBe('svg');
    // var profile = TestUtils.renderIntoDocument(<Profile />);
    // expect(TestUtils.isCompositeComponent(profile)).toBeTruthy();
  });

  it('should display a "no data" message if there is no data', function(){
    var firstSvgEl = result.output.children[1].children[0];
    expect(firstSvgEl.text).toEqual('Please fill out some daily surveys or take\
     a selfie!');
  });
});
