import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      value: "",
      lineThrough: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.edit_data = this.edit_data.bind(this);
    this.editChange = this.editChange.bind(this);
    this.saveChange = this.saveChange.bind(this);
    this.setNewStyleAfterCompleting = this.setNewStyleAfterCompleting.bind(
      this
    );
  }

  handleClick(e) {
    this.props.delete(this.props.id);
  }

  handleEditClick() {
    this.setState({
      isOpen: true
    });
  }

  editChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  saveChange(e) {
    e.preventDefault();
    this.props.edit(this.state.value, this.props.id);
    this.setState({
      isOpen: false
    });
  }

  setNewStyleAfterCompleting(e) {
    this.setState((st) => {
      return {
        lineThrough: !st.lineThrough ? true : false
      };
    });
  }

  edit_data() {
    if (this.state.isOpen) {
      return (
        <div>
          <form className="editForm" onSubmit={this.saveChange}>
            <input
              onChange={this.editChange}
              type="text"
              placeholder="edit"
              value={this.state.value}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <p
            className={this.state.lineThrough ? "completed" : ""}
            onClick={this.setNewStyleAfterCompleting}
          >
            {this.props.content}
          </p>
          <div className="userAction">
            <button onClick={this.handleEditClick}>
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                {" "}
                <path d="M 7 2 C 5.895 2 5 2.895 5 4 L 5 26 C 5 27.105 5.895 28 7 28 L 22.671875 28 L 17.060547 22.390625 C 16.762547 22.092625 16.567 21.707016 16.5 21.291016 L 16.025391 18.314453 C 15.924391 17.681453 16.132937 17.039938 16.585938 16.585938 C 16.963938 16.208937 17.474 16 18 16 C 18.105 16 18.211406 16.008391 18.316406 16.025391 L 21.291016 16.501953 C 21.707016 16.568953 22.090672 16.7645 22.388672 17.0625 L 25 19.671875 L 25 9.5 C 25 9.235 24.895031 8.9809688 24.707031 8.7929688 L 18.207031 2.2929688 C 18.019031 2.1049688 17.765 2 17.5 2 L 7 2 z M 17 3.9042969 L 23.095703 10 L 18 10 C 17.448 10 17 9.552 17 9 L 17 3.9042969 z M 18 18 L 18.474609 20.976562 L 25.042969 27.542969 L 27.542969 25.042969 L 20.974609 18.476562 L 18 18 z M 28.957031 26.457031 L 26.457031 28.957031 L 26.982422 29.482422 C 27.672422 30.172422 28.792422 30.172422 29.482422 29.482422 C 30.172422 28.792422 30.172422 27.672422 29.482422 26.982422 L 28.957031 26.457031 z" />
              </svg>
            </button>
            <button onClick={this.handleClick}>
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z M 12 13 C 12.25575 13 12.511531 13.097469 12.707031 13.292969 L 15 15.585938 L 17.292969 13.292969 C 17.683969 12.901969 18.316031 12.901969 18.707031 13.292969 C 19.098031 13.683969 19.098031 14.316031 18.707031 14.707031 L 16.414062 17 L 18.707031 19.292969 C 19.098031 19.683969 19.098031 20.316031 18.707031 20.707031 C 18.512031 20.902031 18.256 21 18 21 C 17.744 21 17.487969 20.902031 17.292969 20.707031 L 15 18.414062 L 12.707031 20.707031 C 12.512031 20.902031 12.256 21 12 21 C 11.744 21 11.487969 20.902031 11.292969 20.707031 C 10.901969 20.316031 10.901969 19.683969 11.292969 19.292969 L 13.585938 17 L 11.292969 14.707031 C 10.901969 14.316031 10.901969 13.683969 11.292969 13.292969 C 11.488469 13.097469 11.74425 13 12 13 z" />
              </svg>
            </button>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div className="todo-content">{this.edit_data()}</div>;
  }
}

export default Todo;
