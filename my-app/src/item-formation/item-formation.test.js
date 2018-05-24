import React from 'react';
import ReactDOM from 'react-dom';
import ItemFormation from './item-formation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemFormation name="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
