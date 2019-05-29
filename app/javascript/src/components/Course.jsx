import React, { Component } from "react";
import CourseShow from './CourseShow';
import CourseEdit from './CourseEdit';

export default class Course extends Component {
	constructor(props) {
		super(props);
		this.state = {
      editable: false
    }; 
    this.handleClick = this.handleClick.bind(this);
    this.ShowEditForm = this.showEditForm.bind(this);
    this.cancelTheEdit = this.cancelTheEdit.bind(this);
	};

  showEditForm = async () => {
    this.setState({
      editable: !this.props.editable,
    })
  };

  cancelTheEdit = async () => {
    this.setState({
      editable: false,
    })
  }

  renderEditForm = (course) => {
    if (this.state.editable) {
     return <CourseEdit course={this.props.course} onClick={this.cancelTheEdit} />
    }
    else {
      return <CourseShow course={this.props.course} onClick={this.showEditForm} />
    }
  };

  handleClick = async (e) => {
    e.preventDefault();
    const id = e.target.value;
    const courseToDelete = await removeCourse(id);
    this.props.onClick(courseToDelete);
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