import React, { Component } from 'react';
import { fetchCoursesCount } from './APIs/courses';


class App extends Component {
  state = {
  	count : 0,
  };


  refreshCourseCount = async () => {
    const courseCount = await fetchCoursesCount();
    this.setState({
      count: courseCount.courses_count,
    });
      console.log(courseCount.courses_count)
  };

 
  componentDidMount = async () => {
    await this.refreshCourseCount();
  };

  render() {
  
    return (
      <p> Course counts : {this.state.count} </p>
    );
  }
}


export default App;