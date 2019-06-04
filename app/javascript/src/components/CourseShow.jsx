import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class CourseShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { course, toggleEdit } = this.props;
    return(
      <div>
        <Link to={`/courses/${course.id}`}>Show</Link>
        <section className="course">{course.title}</section>
        <button onClick={toggleEdit}>update</button>
      </div>
    )
  }
}