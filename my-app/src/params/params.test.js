import React from 'react';
import ReactDOM from 'react-dom';
import Params from './params';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Params />, div);
  ReactDOM.unmountComponentAtNode(div);
});
