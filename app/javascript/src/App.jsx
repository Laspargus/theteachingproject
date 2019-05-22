import React, { Component } from "react";
import { fetchCoursesCount } from "./APIs/courses";

class App extends Component {
  state = {
    count: 0
  };

  refreshCourseCount = async () => {
    const courseCount = await fetchCoursesCount();
    this.setState({
      count: courseCount.courses_count
    });
  };

  componentDidMount = async () => {
    await this.refreshCourseCount();
  };

  render() {
    return <p>Bonjour Unknown. Course count: {this.state.count} </p>;
  }
}

export default App;
