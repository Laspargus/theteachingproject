import React, { Component } from "react";
import CourseDetail from "./components/CourseDetail";
import CourseIndex from "./components/CourseIndex";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchCurrentStudent } from './APIs/students';
import { fetchCurrentTeacher } from './APIs/teachers';

class App extends Component {
  state = {
    currentStudent: null,
    currentTeacher: null,
  };

  refreshCurrentStudent = async () => {
    const currentStudent = await fetchCurrentStudent();
    this.setState({
      currentStudent,
    });
  };

  refreshCurrentTeacher = async () => {
    const currentTeacher = await fetchCurrentTeacher();
    this.setState({
      currentTeacher,
    });
  };

  componentDidMount = async () => {
    await this.refreshCurrentStudent();
    await this.refreshCurrentTeacher();
  };

  render() {

    const currentStudent = this.state.currentStudent
    const currentTeacher = this.state.currentTeacher


    return (
      <Router>
        <div>
          <Switch>

            <Route
              path="/courses"
              exact
              render={props => (
                <CourseIndex {...props} 
                  currentStudent={ currentStudent } 
                  currentTeacher={ currentTeacher } 
                />
              )}
            />

            <Route
              path="/courses/:id"
              exact
              render={props => (
                <CourseDetail {...props} 
                currentStudent={ currentStudent } 
                currentTeacher={ currentTeacher } 
                />
              )}
            />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;