import React, { Component } from 'react';
import './todo-list.css';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item/todo-item';

class TodoList extends Component {

  static propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired
    }))
  }

  render() {
    return (
      <div className="TodoList">
        <div className="TodoList-title">
         <h2>Liste des choses à faire</h2>
        </div>
        <div className="TodoList-items">
          {this.props.items.map((item, index) => <TodoItem item={item} key={'todo-id-'+ index}/>)}
        </div>
      </div>
    );
  }
}

export default TodoList;
