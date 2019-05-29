import React, { Component } from "react";

export default class CourseShow extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  };

  handleEdit = (e) => {
    e.preventDefault();
    this.props.onClick();
  };

  render() {

    const course = this.props.course

    return (
      <div>
        {course.title}
        <a className="btn btn-success ml-2" href={'/courses/' + course.id}>Show</a>
        <button value={course.id} onClick={this.handleClick}  className="btn btn-danger ml-2">Delete</button>
        <button id={course.id} value={this.props.course.id} onClick={this.handleEdit} className="btn btn-warning ml-2">
          Edit
        </button>
      </div>
    );
  }
}