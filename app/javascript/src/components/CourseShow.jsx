import React, { Component } from "react";

export default class CourseShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { course, toggleEdit } = this.props;
    return(
      <div>
        <section className="course">{course.title}</section>
        <button onClick={toggleEdit}>update</button>
      </div>
    )
  }
}