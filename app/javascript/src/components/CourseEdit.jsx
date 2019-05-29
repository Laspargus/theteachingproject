import React, { Component } from "react";
import { updateCourse } from '../APIs/courses';

export default class CourseEdit extends Component {
  constructor(props) {
    super(props);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleConfirmEdit = this.handleConfirmEdit.bind(this);
  };

  handleCancelEdit = (e) => {
    e.preventDefault();
  	this.props.onClick();
  };

  handleConfirmEdit = async (e) => {
    e.preventDefault();
    await updateCourse(this.props.course.id, e.target.title_form.value, e.target.description_form.value);
    this.props.onSubmit();
  };

  render() {

    const course = this.props.course

    return (
    	<form onSubmit={this.handleConfirmEdit}>
    		<div className="mt-2">
    			<label>Title</label>
    			<div>
      			<input name="title_form" defaultValue={this.props.course.title}/>
      		</div>
      	</div>
      	<div className="mt-2">
      		<label>Description</label>
      		<div>
      			<input name="description_form" defaultValue={this.props.course.description}/>
      		</div>
      	</div>
      	<div className="mt-2">
	      	<button onClick={this.handleCancelEdit} className="btn btn-danger mr-2">Cancel</button>
	      	<button className="btn btn-success ml-2" >Confirm</button>
	      </div>
      </form>
    );
  }
}