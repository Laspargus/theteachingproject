import React, { Component } from "react";
import { removeCourse } from "../APIs/courses";

export default class CourseList extends Component {
  constructor(props) {
    super(props);
    
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick = async e => {
    e.preventDefault()
    const id = e.target.value;
    const result = await removeCourse(id);
    this.props.onClick(result);
  };

  render() {
    return (
      <div>
        <div>
          {this.props.courses.map(course => {
            return (
              <div key={course.id}>
                <section className="course">{course.title}</section>
                <button value={course.id} onClick={this.handleRemoveClick}>delete</button>
              </div>
            )    
          })}
        </div>
      </div>
    );
  }
}
