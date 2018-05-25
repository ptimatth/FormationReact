import React, { Component } from 'react';
import './todo-container.css';
import PropTypes from 'prop-types';
import TodoList from '../todo-list/todo-list';
import TodoForm from '../todo-form/todo-form';

class TodoContainer extends Component {


  constructor(props){
    super(props);
    this.state = {
      items: this.props.items
    }
    this.updateItem = this.updateItem.bind(this);
    this.addItem = this.addItem.bind(this);

  }

  static propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired
    }))
  }

  updateItem(items){
    this.setState({
      items: items
    })
  }

  
  addItem(item){
    this.state.items.push(item);
    this.setState({
      items:this.state.items
    });
  }

  render() {
    return (
      <div className="TodoContainer">
        <TodoList items={this.state.items} updateItem={this.updateItem} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoContainer;
