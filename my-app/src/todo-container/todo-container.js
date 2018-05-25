import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoList from '../todo-list/todo-list';
import TodoForm from '../todo-form/todo-form';
import './todo-container.css';

import { addTodo, editTodo, loadTodo } from '../redux/todo.action';

export class TodoContainer extends Component {
  static propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })).isRequired,
    loading: PropTypes.bool.isRequired,
    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    loadTodo: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.displayItems = this.displayItems.bind(this);
  }

  componentDidMount() {
    this.props.loadTodo();
  }


  updateItem(item) {
    this.props.editTodo(item, this.props.items);
  }

  addItem(item) {
    this.props.addTodo(item.title);
  }

  displayItems() {
    if (this.props.loading) {
      return <div>Chargement...</div>;
    }
    return <TodoList items={this.props.items} updateItem={this.updateItem} />;
  }

  render() {
    return (
      <div className="TodoContainer">
        {this.displayItems()}
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.todos.list,
  loading: state.todos.loading,
});

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(addTodo(title)),
  loadTodo: () => dispatch(loadTodo()),
  editTodo: (todo, todoList) => dispatch(editTodo(todo, todoList)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoContainer);
