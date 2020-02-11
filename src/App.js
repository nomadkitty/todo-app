import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const data = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: data,
    };
  }

  toggleItem = clickedId => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === clickedId) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  addNewItem = todoText => {
    const newTodo = {
      task: todoText,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
    });
  };

  clearComplete = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem} />
        <TodoForm
          addNewItem={this.addNewItem}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
