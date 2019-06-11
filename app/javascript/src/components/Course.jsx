import React, { Component } from "react";
import  CourseEdit  from './CourseEdit';
import  CourseShow  from './CourseShow';
import  CourseDetail  from './CourseDetail';
import { removeCourse } from '../APIs/courses';

export default class Course extends Component {

  state = {
    edit: false,
    detail: false,
  };

  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({
      edit: !edit,
    });
  };

  handleRemoveClick = async () => {
    const { course } = this.props;
    const result = await removeCourse(course.id);
    this.props.actOnRemove(result);
  };

 render() {
    const { edit } = this.state;
    const { course, updateCourse, currentStudent, currentTeacher} = this.props;

    if (edit) {
      return (
        <CourseEdit
          course={course}
          updateCourse={updateCourse}
          toggleEdit={this.toggleEdit}
          onSubmit = {this.toggleEdit}
          toggleDetail = {this.toggleDetail}
          currentTeacher={ currentTeacher }
        />
      );
    } else {
      return (
        <CourseShow
          course={course}
          removeAct={this.handleRemoveClick}
          toggleEdit={this.toggleEdit}
          toggleDetail={this.toggleDetail}
          currentStudent={ currentStudent }
          currentTeacher={ currentTeacher }
        />
      );
    }
  }
}
  
  