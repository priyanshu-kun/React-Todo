import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      content: ""
    };

    this.handleEvent = this.handleEvent.bind(this);
    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
  }

  handleSubmitEvent(e) {
    e.preventDefault();
    if (!this.state.content) {
      alert("Input cannot be empty");
      return;
    }
    this.props.function(this.state);
    this.setState({
      id: "",
      content: ""
    });
  }

  handleEvent(e) {
    this.setState({
      id: uuidv4(),
      content: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitEvent} className="form-content">
        <div className="form-input">
          <label htmlFor="todo">Enter your task</label>
          <input
            onChange={this.handleEvent}
            type="text"
            name="todo"
            id="todo"
            placeholder="Your todo..."
            value={this.state.content}
          />
        </div>
        <button>
          {/* <i className="fas fa-plus"></i> */}
          Add todo
        </button>
      </form>
    );
  }
}

export default Form;
