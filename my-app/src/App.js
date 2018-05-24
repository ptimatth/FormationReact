import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SubscriptionForm from './subscription-form/subscription-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-form">
          <SubscriptionForm title="Formulaire d'inscription"/>
        </div>
      </div>
    );
  }
}

export default App;
