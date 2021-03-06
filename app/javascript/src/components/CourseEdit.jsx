import React, { Component } from 'react';
import { updateCourse } from '../APIs/courses';

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
    const { toggleEdit } = this.props;
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
    const { course } = this.props;
    return(
      <React.Fragment>
        <tbody>
          <tr>
            <td scope="row">
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
                </label><br />
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
                </label><br />
                <input type="submit"
                  value="Update"
                  className="btn btn-success"
                  required
                />{this.renderButtons()}
              </form>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </React.Fragment>
    );
  }
}