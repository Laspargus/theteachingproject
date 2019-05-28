import React, { Component } from 'react';
import { fetchCourses } from '../APIs/courses';
import { removeCourse } from '../APIs/courses';


export default class CourseList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

handleClick = async (e) => {
    e.preventDefault();
    const id = e.target.value;
    const courseToDelete = await removeCourse(id);
    this.props.onClick(courseToDelete);
  }

  render() {
    return (
      <div>
      
        <p> Course counts : {this.props.courses.length} </p>
        <ul className="list-group">
          {this.props.courses.map((course, i) =>
            <li key={'course_' + i} className="list-group-item">{course.title} {course.description} 
              <a className="btn btn-success" href={'/courses/' + course.id}>Show</a>
              <button value={course.id} onClick={this.handleClick}  className="btn btn-danger">Delete</button>
            </li>
          )}
        </ul>
      
      </div>
    );
  }
}