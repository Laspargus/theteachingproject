import React, { Component } from 'react';
import { fetchCourses } from '../APIs/courses';


export default class CourseList extends Component {
  // constructor (props) {
  //   super(props);
  //   state = {
  //       courses: [],
  //   }
  // }

  // refreshCourseCount = async () => {
  //   const courses = await fetchCourses();
  //   this.setState({
  //     courses: courses.courses,
  //   });
  // }

  // componentDidMount = async () => {
  //   await this.refreshCourseCount();
  // }


  // componentWillMount = async () => {
  //    await this.refreshCourseCount();
  // }

 // componentWillMount() {
 //   this.setState({ 
 //     courses: this.props.courses,
    
 //   });
 //    console.log(this.props.courses)
 // }



 // componentDidMount() {
 //   this.state = {
 //     courses: this.props.courses
 //   }
 // }



  render() {


    return (
      <div>
       {console.log('motherfucker')}
      {console.log(this.props.courses)}
        <p> Course counts : {this.props.courses.length} </p>
        <ul className="list-group">
          {this.props.courses.map((course, i) =>
            <li key={'course_' + i} className="list-group-item">{course.title} {course.description} 
              <a className="btn btn-success" href={'/courses/' + course.id}>Show</a>
            </li>
          )}
        </ul>
      
      </div>
    );
  }
}