import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todo-item';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
