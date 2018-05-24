import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListeFormation from './liste-formation/liste-formation';
import NetworkStateContainer from './network-state/network-state';

function App() {
    const listeFormation = [
      {
        id:1, 
        name:"React.js"
      },
      {
        id:2, 
        name:"React Native"
      },
      {
        id:3, 
        name:"Angular"
      },
      {
        id:4, 
        name:"TypeScript"
      }
    ]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-liste">
          <NetworkStateContainer >
            <ListeFormation listeFormation={listeFormation} />
          </NetworkStateContainer>
        </div>
        
      </div>
    );
}

export default App;
