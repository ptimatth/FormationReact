import React, { Component } from 'react';
import logo from './logo.svg';
import todoItems from './mock/todo-items.json';
import './App.css';
import TodoList from './todo-list/todo-list';
import TodoForm from './todo-form/todo-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-list">        
          <TodoList items={todoItems}/>
          <TodoForm />
        </div>
      </div>
    );
  }
}

export default App;
