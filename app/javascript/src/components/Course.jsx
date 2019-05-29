import React, { Component } from "react";
import CourseShow from './CourseShow';
import CourseEdit from './CourseEdit';

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({
      edit: !edit,
    });
  };

  render() {
    const { course, updateCourse } = this.props;
    if (this.state.edit == false) {
      return(
        <div>
          <CourseShow course={course} toggleEdit={this.toggleEdit} />
        </div>
      )
    } else {
    return(
      <div>
        <CourseEdit course={course} updateCourse={updateCourse} toggleEdit={this.toggleEdit} onSubmit={this.toggleEdit} />
      </div>
    )}
  }
}