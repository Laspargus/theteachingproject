
import React, { Component } from "react";
import  CourseEdit  from './CourseEdit';
import  CourseShow  from './CourseShow';
import { removeCourse } from '../APIs/courses';


export default class Course extends Component {

  state = {
      edit: false,
    };


  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({
      edit: !edit,
    });
  };


  handleRemoveClick = async () => {
    const { course, actOnRemove } = this.props;
    const result = await removeCourse(course.id);
    this.props.actOnRemove(result);
  
  };




 render() {
    const { edit } = this.state;
  //  const { course, actOnRemove ,updateCourse} = this.props;
 
    if (edit) {
      return (
        <CourseEdit
          course={course}
          updateCourse={updateCourse}
          toggleEdit={this.toggleEdit}
          onSubmit = {this.toggleEdit}
        />
      );
    }
    return (
      <CourseShow
        course={course}
        removeAct={this.handleRemoveClick}
        toggleEdit={this.toggleEdit}
      />
    );
  }
}
  
  