
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
    const { course, actOnRemove ,updateStateCourses} = this.props;
    console.log(updateStateCourses)

    if (edit) {
      return (
        <CourseEdit
          course={course}
          updateStateCourses={updateStateCourses}
          toggleEdit={this.toggleEdit}
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
  
  