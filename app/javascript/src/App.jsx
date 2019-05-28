import React, { Component } from "react";
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import { fetchCourses } from "./APIs/courses";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { courses: []};
    
    this.addCourseToList = this.addCourseToList.bind(this);
  }

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
        <CourseList courses={this.state.courses}/>
      </div>
    );
  }
}

export default App;
