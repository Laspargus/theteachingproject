import React, { Component } from "react";

export default class CourseList extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.courses.map(course => {
            return <section key={course.id} className="course">{course.title}</section>;
          })}
        </div>
      </div>
    );
  }
}
