import React, { Component } from "react";
import Course from './Course';

export default class CourseList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { updateCourse, removeCourse } = this.props;
    return (
      <div>
        <div>
          {this.props.courses.map(course => {
            return (
              <div key={course.id}>
                <Course course={course} removeCourse={removeCourse} updateCourse={updateCourse}/>
                <br />
              </div>
            )    
          })}
        </div>
      </div>
    );
  }
}
