import React, { Component } from 'react';
import CourseCreate from './CourseCreate';
import CourseList from './CourseList';
import { fetchCourses } from '../APIs/courses';

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

    const { currentStudent, currentTeacher } = this.props;

    if (currentTeacher) {
      return(
        <div className="container">
         <div>
            <div>
              <div className="form-group row">    
                <div className="col-sm-12">
                <h1>Create a course :</h1><br />
                  <CourseCreate
                    onSubmit={this.addCourseToList}
                    currentStudent={ currentStudent }
                    currentTeacher={ currentTeacher }
                  /><br /><br />
                  <h1>List of your courses :</h1><br />
                  <CourseList 	
                    courses = {this.state.courses}
                    actOnRemove={this.removeCourse}
                    updateCourse={this.updateCourse}
                    currentStudent={ currentStudent }
                    currentTeacher={ currentTeacher }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div className="container">
         <div>
            <div>
              <div className="form-group row">    
                <div className="col-sm-12">
                <h1>List of your courses :</h1><br />
                  <CourseList 	
                    courses = {this.state.courses}
                    actOnRemove={this.removeCourse}
                    updateCourse={this.updateCourse}
                    currentStudent={ currentStudent }
                    currentTeacher={ currentTeacher }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    
  }
}