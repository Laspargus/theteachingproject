import React, { Component } from "react";
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {

  render() {
    return (
      <div>
        <CourseForm />
        <CourseList />
      </div>
    );
  }
}

export default App;
