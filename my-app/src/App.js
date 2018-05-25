import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


import logo from './logo.svg';
import todoItems from './mock/todo-items.json';
import './App.css';
import TodoContainer from './todo-container/todo-container';


import { TodosReducer } from './redux/todo.reducer';

// Assemblage des différents reducers d'une application
const reducers = combineReducers({
  todos: TodosReducer,
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
        <div className="App-list">
          <TodoContainer items={todoItems} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
