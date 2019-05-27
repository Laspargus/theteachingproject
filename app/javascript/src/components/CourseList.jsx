import React from 'react';

function CourseList({courses}) {
  return (
    <div>
      {console.log(courses)}
      <ul className="list-group">
        {courses.map((course, i) => (
          <li key={'course_' + i} className="list-group-item">{course.title} 
            <a className="btn btn-success" href={'/courses/' + course.id}>Show</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;