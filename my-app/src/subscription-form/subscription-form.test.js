import React from 'react';
import ReactDOM from 'react-dom';
import SubscriptionForm from './subscription-form';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubscriptionForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
