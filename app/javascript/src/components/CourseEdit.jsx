import React, { Component } from 'react';
import { updateCourse } from '../APIs/courses';
import CourseList from './CourseList';

export default class CourseEdit extends Component {

  constructor(props) {
	  super(props);
	  this.state = { 
	    title: '',
	    description:'',
	  };
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit = async e =>{
  	const {course} =this.props
    e.preventDefault();
    const updatedCourse = await updateCourse(course.id, this.state.title, this.state.description);
    this.props.updateCourse(updatedCourse);
    this.props.onSubmit();
  }


  renderButtons = () => {
    const { course, toggleEdit, currentTeacher  } = this.props;
    return (
      <span>
        <button
          className="m-2 btn btn-info"
          role="button"
          tabIndex={0}
          onClick={toggleEdit}
          onKeyPress={toggleEdit} 
         >
       		Cancel
        </button>
    </span>
    );
  }

  render() {
    const { course, updateCourse, toggleEdit, currentTeacher } = this.props;
    return(
       <div className="block">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Title">
            <input type="text" 
              name="title" 
              id="title" 
              className="form-control"
              placeholder={course.title}
              value={this.state.title}
              onChange={this.handleChangeTitle}
            />
          </label>
          <label htmlFor="Description">
            <input type="text" 
              name="description" 
              id="description" 
              className="form-control"
              placeholder={course.description}
              value={this.state.description}
              onChange={this.handleChangeDescription}
              required
            />
          </label>

          <input type="submit"
            value="Update!"
            className="btn btn-success"
            required
          />
        </form>
        {this.renderButtons()}
    	</div>
    );
  }
}