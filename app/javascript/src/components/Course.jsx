import React, { Component } from "react";
import CourseShow from './CourseShow';
import CourseEdit from './CourseEdit';
import { removeCourse } from "../APIs/courses";

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick = async e => {
    e.preventDefault()
    const id = e.target.value;
    const removedCourse = await removeCourse(id);
    this.props.removeCourse(removedCourse);
  };

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
          <button value={course.id} onClick={this.handleRemoveClick}>delete</button>
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