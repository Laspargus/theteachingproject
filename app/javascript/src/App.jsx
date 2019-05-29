import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import { fetchCourses } from './APIs/courses';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: []};
    this.addCourseToList = this.addCourseToList.bind(this);
    this.removeCourseFromList = this.removeCourseFromList.bind(this);
  };

  addCourseToList(newCourse) {
    this.setState({
       courses : [newCourse, ...this.state.courses]
    }); 
  };

  removeCourseFromList(removedCourse) {
    const { courses } = this.state;
    this.setState({
      courses: courses.filter(course => removedCourse.id !== course.id)
    });
  };

  refreshCourse = async () => {
    const courses = await fetchCourses();
    this.setState({
      courses: courses.courses,
    }); 
  };

  componentDidMount = async () => {
    await this.refreshCourse();
  };

  render() {

    return (
      <div className="container">
       <div>
          <h1>Création d'un cours :</h1>
          <div>
            <div className="form-group row">    
              <div className="col-sm-10">
                <CourseForm onSubmit={this.addCourseToList}/>
                <CourseList onClick={this.removeCourseFromList} courses = {this.state.courses}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}