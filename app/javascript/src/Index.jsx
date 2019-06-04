import React, { Component } from "react";
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import { fetchCourses } from "./APIs/courses";
import { Link } from 'react-router-dom';

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: []};
    this.addCourseToList = this.addCourseToList.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
  }

  removeCourse(removedCourse) {
    const { courses } = this.state;
    this.setState({
      courses: courses.filter(course => removedCourse.id !== course.id)
    });
  };

  updateCourse = updatedCourse => {
    const { courses } = this.state;
    this.setState({
      courses: courses.map(course =>
        course.id === updatedCourse.id ? updatedCourse : course
      ),
    });
  };

  addCourseToList(newCourse) {
    this.setState({
       courses : [newCourse, ...this.state.courses]
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

  render() {
    return (
      <div>
          <CourseForm onSubmit={this.addCourseToList}/>
          <CourseList onClick={this.removeCourse} updateCourse={this.updateCourse} removeCourse={this.removeCourse} courses={this.state.courses}/>
      </div>
    );
  }
}

export default Index;
