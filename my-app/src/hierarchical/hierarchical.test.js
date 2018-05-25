import React from 'react';
import ReactDOM from 'react-dom';
import Hierarchical from './hierarchical';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hierarchical />, div);
  ReactDOM.unmountComponentAtNode(div);
});
