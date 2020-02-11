import React, { Component } from "react";
import { render } from "react-dom";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.newTodo);
    this.setState({
      newTodo: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="newTodo"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
          <button onClick={this.props.clearComplete}>Clear Completed</button>
        </form>
      </>
    );
  }
}

export default TodoForm;
