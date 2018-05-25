import React, { Component } from 'react';
import './todo-item.css';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  static propTypes ={
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired
    }).isRequired
  }


  constructor(props){
    super(props);
    this.state = {
      isDone: this.props.item.isDone
    }

    this.toggleChecked = this.toggleChecked.bind(this);
  }

  toggleChecked(e){
    this.setState({
      isDone: !this.state.isDone
    })

  }

  render() {
    return (
      <div className="TodoItem">
        <input type="checkbox" checked={this.state.isDone} onChange={this.toggleChecked} />
        <div className={ this.state.isDone ? "TodoItem-title is-done": "TodoItem-title"}>{this.props.item.title.toUpperCase()}</div>
      </div>
    );
  }
}

export default TodoItem;
