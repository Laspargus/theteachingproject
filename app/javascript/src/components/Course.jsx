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


  toggleDetail = () => {
    const { detail } = this.state;
    this.setState({
      detail: !detail,
    });
  };


  handleRemoveClick = async () => {
    const { course, actOnRemove } = this.props;
    const result = await removeCourse(course.id);
    this.props.actOnRemove(result);
  };

 render() {
    const { edit, detail } = this.state;
    const { course, actOnRemove ,updateCourse} = this.props;
 
    if (edit) {
      return (
        <CourseEdit
          course={course}
          updateCourse={updateCourse}
          toggleEdit={this.toggleEdit}
          onSubmit = {this.toggleEdit}
          toggleDetail = {this.toggleDetail}
        />
      );
    }

    else if(detail) {
    return (
      <div>
      <CourseShow
        course={course}
        removeAct={this.handleRemoveClick}
        toggleEdit={this.toggleEdit}
        toggleDetail={this.toggleDetail}
      />
      <CourseDetail
        course = {course}
      />
      </div>
      );
    }

    else {
       return (
      <CourseShow
        course={course}
        removeAct={this.handleRemoveClick}
        toggleEdit={this.toggleEdit}
        toggleDetail={this.toggleDetail}
      />
    );
  }
}}
  
  