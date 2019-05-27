import React, { Component } from "react";
import { fetchCourses } from "../APIs/courses";

export default class CourseList extends Component {
  state = {
    courses: []
  };

  refreshCourseCount = async () => {
    const courses = await fetchCourses();
    this.setState({
      courses: courses.courses,
    });
  }

  componentDidMount = async () => {
    await this.refreshCourseCount();
  };

  render() {
    return (
      <div>
        <div>
          {this.state.courses.map(course => {
            return <section key={course.id} className="course">{course.title}</section>;
          })}
        </div>
      </div>
    );
  }
}
