import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import logo from './logo.svg';
import './App.css';
import ListeFormation from './liste-formation/liste-formation';
import NetworkStateContainer from './network-state/network-state';
import { FormationsReducer } from './redux/formations/formations.reducer';
import thunk from 'redux-thunk';

// Assemblage des différents reducers d'une application
const reducers = combineReducers({
  formations: FormationsReducer,
});

const logger = createLogger({
  level: 'log',
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

function App() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-liste">
            <NetworkStateContainer >
              <ListeFormation />
            </NetworkStateContainer>
          </div>
        </div>
      </Provider>
    );
}

export default App;
