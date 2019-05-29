import React, { Component } from "react";
import CourseShow from './CourseShow';
import CourseEdit from './CourseEdit';

export default class Course extends Component {
	constructor(props) {
		super(props);
		this.state = {
      editable: false
    }; 
    this.showEditForm = this.showEditForm.bind(this);
    this.resetEditable = this.resetEditable.bind(this);
    this.handleClick = this.handleClick.bind(this);
	};

  handleClick = async (e) => {
    e.preventDefault();
    const id = e.target.value;
    const courseToDelete = await removeCourse(id);
    this.props.onClick(courseToDelete);
  };

  showEditForm = async () => {
    this.setState({
      editable: !this.props.editable,
    })
  };

  resetEditable = async () => {
    this.setState({
      editable: false,
    })
  };

  renderEditForm = (course) => {
    if (this.state.editable) {
     return <CourseEdit course={this.props.course} onClick={this.resetEditable} onSubmit={this.resetEditable} />
    }
    else {
      return <CourseShow course={this.props.course} onClick={this.showEditForm} />
    }
  };

  render () {

  	const course = this.props

    return (
	    <li className="list-group-item">
	    	{this.renderEditForm()}
	    </li>
	  );
  }
}