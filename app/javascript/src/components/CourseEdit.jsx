import React, { Component } from "react";

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
  };

  // handleSubmit = async e =>{
  //   e.preventDefault();
  //   const newCourse = await addCourse(this.state.title, this.state.description);
  //   this.props.onSubmit(newCourse);
  // }

  render() {

    const course = this.props.course

    return (
    	<div>
    		<div className="mt-2">
    			<label>Title</label>
    			<div>
      			<input defaultValue={this.props.course.title}/>
      		</div>
      	</div>
      	<div className="mt-2">
      		<label>Description</label>
      		<div>
      			<input defaultValue={this.props.course.description}/>
      		</div>
      	</div>
      	<div className="mt-2">
	      	<button onClick={this.handleCancelEdit} className="btn btn-danger mr-2" >Cancel</button>
	      	<button onClick={this.handleConfirmEdit} className="btn btn-success ml-2" >Confirm</button>
	      </div>
      </div>
    );
  }
}