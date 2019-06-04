import React, { Component } from 'react';
import CourseCreate from './CourseCreate';
import CourseList from './CourseList';
import { fetchCourses } from '../APIs/courses';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CourseDetail from './CourseDetail';
import Hello from './Hello';

export default class CourseIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    	courses: [],
    };   
    this.addCourseToList = this.addCourseToList.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
    this.updateCourse = this.updateCourse.bind(this);
  }

  componentDidMount = async () => {
    await this.refreshCourses();
  }

  refreshCourses = async () => {
    const courses = await fetchCourses();
    this.setState({
      courses: courses.courses,
    }); 
  }


  addCourseToList(newCourse) {
    this.setState({
       courses : [newCourse, ...this.state.courses],
    }); 
  }

  removeCourse(removedCourse) {
    const { courses } = this.state;
    this.setState({
      courses: courses.filter(course => removedCourse.id !== course.id)
    });
  };

  updateCourse(updatedCourse) {
    const { courses } = this.state;
    this.setState({
      courses: courses.map(course =>
        course.id === updatedCourse.id ? updatedCourse : course
      ),
    });
  };


  render() {
    return(
      <div className="container">
       <div>
          <h1>Création d'un cours :</h1>
          <div>
            <div className="form-group row">    
              <div className="col-sm-12">
                  <CourseCreate
                    onSubmit={this.addCourseToList}
                  />
									<CourseList 	
		                courses = {this.state.courses}
		                actOnRemove={this.removeCourse}
		          			updateCourse={this.updateCourse}
              		/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}