import React, { Component } from 'react';
import './todo-form.css';
import PropTypes from 'prop-types';

class TodoForm extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.prenventDefault();
  }

  render() {
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <div className="TodoForm-group">
          <label>Titre du todo:</label>
          <input type="text" />
        </div>
        <div className="TodoForm-button">
          <input type="submit" />
        </div>
      </form>
    );
  }
}

export default TodoForm;
