'use strict';

describe('ReactNameApp', () => {
  let React = require('react/addons');
  let ReactNameApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactNameApp = require('components/ReactNameApp.js');
    component = React.createElement(ReactNameApp);
  });

  it('should create a new instance of ReactNameApp', () => {
    expect(component).toBeDefined();
  });
});
