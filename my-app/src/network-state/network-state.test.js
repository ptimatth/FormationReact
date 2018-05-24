import React from 'react';
import ReactDOM from 'react-dom';
import NetworkState from './network-state';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NetworkState />, div);
  ReactDOM.unmountComponentAtNode(div);
});
