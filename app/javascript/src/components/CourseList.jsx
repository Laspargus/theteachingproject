import React, { Component } from 'react';

export default class CourseList extends Component {
    
  render() {

    return (
      <div>
        {console.log('motherfucker')}
        {console.log(this.props.courses)}
        <p> Course counts : {this.props.courses.length} </p>
        <ul className="list-group">
          {this.props.courses.map((course, i) =>
              <li key={'course_' + i} className="list-group-item">{course.title} {course.description} 
                <a className="btn btn-success" href={'/courses/' + course.id}>Show</a>
              </li>
          )}
        </ul>
      </div>
    );
  }
}