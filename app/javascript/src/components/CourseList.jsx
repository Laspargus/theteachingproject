import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Course from './Course';

export default class CourseList extends Component {
  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div>
        <p> Course counts : {this.props.courses.length} </p>
        <FlipMove typeName="ul" className="list-group">
          {this.props.courses.map((course) =>
            <Course key={course.id} course={course} />
          )}
        </FlipMove>
      </div>
    );
  }
}