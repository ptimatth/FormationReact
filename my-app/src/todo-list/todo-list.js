import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './todo-list.css';
import TodoItem from '../todo-item/todo-item';

class TodoList extends Component {
  static propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })).isRequired,
    updateItem: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
  }

  updateItem(item) {
    this.props.updateItem(item);
  }

  render() {
    return (
      <div className="TodoList">
        <div className="TodoList-title">
          <h2>Liste des choses à faire</h2>
        </div>
        <div className="TodoList-items">
          {
            this.props.items
              .map(item => <TodoItem item={item} key={item.id} updateItem={this.updateItem} />)
          }
        </div>
      </div>
    );
  }
}

export default TodoList;
