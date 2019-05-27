import React, { Component } from 'react';
import { addCourse } from '../APIs/courses';
import { fetchCourses } from '../APIs/courses';

export default class CourseForm extends React.Component {
  state = {
    courses: [],
    count : 0,
    title: "",
    description: "",
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
    e.preventDefault();
    const newCourse = await addCourse(this.state.title, this.state.description);
    this.setState({
      courses : [newCourse, ...this.state.courses],
      title: '',
      description: '',
    });
  }

  refreshCourseCount = async () => {
    const courses = await fetchCourses();
    this.setState({
      courses: courses.courses,
    });
  }

  componentDidMount = async () => {
    await this.refreshCourseCount();
  };
  
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}  >
          <label htmlFor="Title">
            <input type="text" 
              name="title" 
              id="title" 
              className="form-control"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChangeTitle}
            />
          </label>
          <label htmlFor="Description">
            <input type="text" 
              name="description" 
              id="description" 
              className="form-control"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChangeDescription}
              required
            />
          </label>
          <div>
            <input type="submit"
              value="Create!"
              className="btn btn-success"
              onClick={this.onHandleSubmit}
              required
            />
          </div>
        </form>
      </div>
    );
  }
}