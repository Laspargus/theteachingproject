import React, { Component } from 'react';
import CourseCreate from './components/CourseCreate';
import CourseList from './components/CourseList';
import { fetchCourses } from './APIs/courses';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    	courses: [],
    };   
    this.addCourseToList = this.addCourseToList.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
  }
  
  // ok
  refreshCourses = async () => {
    const courses = await fetchCourses();
    this.setState({
      courses: courses.courses,
    }); 
  }

  componentDidMount = async () => {
    await this.refreshCourses();
  }
//ok

  addCourseToList(newCourse) {
  	console.log(newCourse);
  	console.log(this.state.courses);
    this.setState({
       courses : [newCourse, ...this.state.courses],
    }); 
  }
 //ok

  removeCourse(removedCourse) {
    const { courses } = this.state;
    this.setState({
      courses: courses.filter(course => removedCourse.id !== course.id)
    });
  };
  //ok

  updateCourse = updatedCourse => {
    const { courses } = this.state;
    this.setState({
      courses: courses.map(course =>
        course.id === updatedCourse.id ? updatedCourse : course
      ),
      errors: [],
    });
  };
//ok



  render() {
		const {courses} = this.state;
    return(
      <div className="container">
       <div>
          <h1>Création d'un cours :</h1>
          <div>
            <div className="form-group row">    
              <div className="col-sm-10">
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