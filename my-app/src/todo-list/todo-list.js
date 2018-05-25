import React, { Component } from 'react';
import './todo-list.css';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item/todo-item';

class TodoList extends Component {
  static propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })),
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
          {this.props.items.map((item, index) => <TodoItem item={item} key={`todo-id-${index}`} updateItem={this.updateItem} />)}
        </div>
      </div>
    );
  }
}

export default TodoList;
