import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Course  from './Course';

function CourseList({ courses, actOnRemove, updateCourse, currentStudent, currentTeacher }) {
  return (
    <FlipMove typeName="ul">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {courses.map(course => (
          <Course
            course={course}
            key={course.id}
            actOnRemove={actOnRemove}
            updateCourse={updateCourse}
            currentStudent={ currentStudent }
            currentTeacher={ currentTeacher }
          />
        ))}
      </table>
    </FlipMove>
  );
}

export default CourseList;
