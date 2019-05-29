import React, { Component } from "react";

export default class CourseEdit extends Component {
  constructor(props) {
    super(props);
    this.cancelEdit = this.cancelEdit.bind(this);
  };

  cancelEdit = (e) => {
    e.preventDefault();
  	this.props.onClick();
  }

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
      	<button onClick={this.cancelEdit} className="btn btn-danger mt-2" >Cancel</button>
      </div>
    );
  }
}