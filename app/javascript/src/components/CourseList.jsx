import React, { Component } from 'react';
import { fetchCourses } from '../APIs/courses';

export default class CourseList extends Component {
  state = {
    courses: [],
  }

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
        <ul className="list-group">
          {this.state.courses.map((course, i) =>
            <li key={i} className="list-group-item">{course.title} 
              <a className="btn btn-success" href={'/courses/' + course.id}>Show</a>
            </li>
          )}
        </ul>
        <p> Course counts : {this.state.courses.length} </p>
      </div>
    );
  }
}