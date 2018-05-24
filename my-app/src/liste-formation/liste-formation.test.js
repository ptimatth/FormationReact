import React from 'react';
import ReactDOM from 'react-dom';
import ListeFormation from './liste-formation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListeFormation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
