import React, { Component } from "react";
import { fetchCourses } from "./APIs/courses";

class App extends Component {
  state = {
    courses: []
  };

  refreshCourseCount = async () => {
    const courses = await fetchCourses();
    this.setState({
      courses: courses.courses
    });
  };

  componentDidMount = async () => {
    await this.refreshCourseCount();
  };

  render() {
    return (
      <div>
        <p>Bonjour Unknown. Course count: {this.state.courses.length} </p>
        <div>
          {this.state.courses.map(course => {
            return <section className="course"> {course.title}</section>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
