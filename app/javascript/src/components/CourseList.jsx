import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { fetchCourses } from '../APIs/courses';
import FlipMove from 'react-flip-move';
import Course  from './Course';

function CourseList({ courses, actOnRemove, updateCourse }) {
  return (
    <FlipMove typeName="ul">
      {courses.map(course => (
        console.log('listt', course),
        <Course
          course={course}
          key={course.id}
          actOnRemove={actOnRemove}
          updateCourse={updateCourse}
        />
      ))}
    </FlipMove>
  );
}

export default CourseList;
