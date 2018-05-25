import React, { Component } from 'react';
import './todo-item.css';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  static propTypes ={
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    }).isRequired,
  }


  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
  }

  updateItem(e) {
    this.props.updateItem(this.props.item);
    e.preventDefault();
  }

  render() {
    return (
      <div className="TodoItem">
        <input type="checkbox" checked={this.props.item.isDone} onChange={this.updateItem} />
        <div className={this.props.item.isDone ? 'TodoItem-title is-done' : 'TodoItem-title'}>{this.props.item.title.toUpperCase()}</div>
      </div>
    );
  }
}

export default TodoItem;
