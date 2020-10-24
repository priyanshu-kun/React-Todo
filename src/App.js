import React, { Component } from "react";
import Todo from "./todos";
import Form from "./form";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.setTodoContent = this.setTodoContent.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.edit = this.edit.bind(this);
  }

  setTodoContent(todoObj) {
    console.log(todoObj);
    this.setState({
      todos: [...this.state.todos, todoObj]
    });
  }

  removeTodo(removeItem) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== removeItem;
      })
    });
  }

  edit(change, _id) {
    const updatedTask = this.state.todos.map((todo) => {
      if (todo.id === _id) {
        return { ...todo, content: change };
      }
      return todo;
    });
    this.setState({ todos: updatedTask });
  }

  render() {
    return (
      <div className="App">
        <div className="heading">
          <h1>Todo List</h1>
          <small>A simple Todo list App.</small>
          <hr />
        </div>
        <div>
          {/* todo's content container */}
          {this.state.todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                content={todo.content}
                delete={this.removeTodo}
                edit={this.edit}
              />
            );
          })}
        </div>
        <div>{/* form content container */}</div>
        <Form function={this.setTodoContent} />
      </div>
    );
  }
}

export default App;
