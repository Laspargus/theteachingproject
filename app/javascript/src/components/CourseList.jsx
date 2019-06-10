import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Course  from './Course';

function CourseList({ courses, actOnRemove, updateCourse, currentStudent, currentTeacher }) {
  return (
    <FlipMove typeName="ul">
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
    </FlipMove>
  );
}

export default CourseList;
