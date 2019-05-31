import React, { Component } from 'react';
import { addCourse } from '../APIs/courses';
import CourseList from './CourseList';


export default class CourseCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      title: '',
      description:'',
     };
    
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
    console.log(e)
    e.preventDefault();
    const newCourse = await addCourse(this.state.title, this.state.description);
    this.props.onSubmit(newCourse);
    this.setState({  
     title: 'title',
     description: 'description'
    });
  }

 
  
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
              required
            />
          </div>
        </form>
      </div>
    );
  }
}