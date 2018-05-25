import React, { Component } from 'react';
import './todo-form.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
    };
  }

  handleSubmit(e) {
    console.log(e.target);
    e.preventDefault();
    const item = { isDone: false, title: this.state.title };
    this.props.addItem(item);
  }

  handleChange(e) {
    this.setState({
      title: e.target.value,
    });
    e.preventDefault();
  }

  render() {
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <div className="TodoForm-group">
          <label>Titre du todo:</label>
          <input type="text" value={this.state.title} onChange={this.handleChange} />
        </div>
        <div className="TodoForm-button">
          <input type="submit" />
        </div>
      </form>
    );
  }
}

export default TodoForm;
