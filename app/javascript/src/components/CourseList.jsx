import React, { Component } from 'react';
import { fetchCourses } from '../APIs/courses';
import { removeCourse } from '../APIs/courses';
import FlipMove from 'react-flip-move';

export default class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  };
  
  handleEdit = async (e) => {
    e.preventDefault();
    const course_id = e.target.value;
    this.setState({
      editable: !this.state.editable,
    })
  }

  handleClick = async (e) => {
    e.preventDefault();
    const id = e.target.value;
    const courseToDelete = await removeCourse(id);
    this.props.onClick(courseToDelete);
  }

  renderDefaultView = (course) => {
    return course.title
  }

  renderEditView = (course) => {
    return <input defaultValue={course.title}/>
  }

  render() {

    return (
      <div>
        <p> Course counts : {this.props.courses.length} </p>
        <FlipMove typeName="ul" className="list-group">
          {this.props.courses.map((course, i) =>
            <li key={'course_' + i} className="list-group-item">
              {this.state.editable ? this.renderDefaultView(course) : this.renderEditView(course)}
              <a className="btn btn-success ml-2" href={'/courses/' + course.id}>Show</a>
              <button value={course.id} onClick={this.handleClick}  className="btn btn-danger ml-2">Delete</button>
              <button id={course.id} value={course.id} onClick={this.handleEdit} className="btn btn-warning ml-2">
                Edit
              </button>
            </li>
          )}
        </FlipMove>
      </div>
    );
  }
}