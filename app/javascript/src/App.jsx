import React, { Component } from 'react';
import CourseCreate from './components/CourseCreate';
import CourseList from './components/CourseList';
import { fetchCourses } from './APIs/courses';

export default class App extends Component {
  // bind is unecessary with arrow functions
  constructor(props) {
    super(props);
    this.state = { 
    	courses: [],
      notification: null
    };   
    this.addCourseToList = this.addCourseToList.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
    this.updateCourse = this.updateCourse.bind(this);

  }
  

  componentDidMount = async () => {
    await this.refreshCourses();

    window.addEventListener('message', (e) => {
      console.log(e);
      let notification = {
        message: e.data
      };

      this.setState({
        notification: notification
      });
    });
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
      <div className="container" style={{position: 'relevant'}}>
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