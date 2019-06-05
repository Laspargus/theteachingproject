import React, { Component } from "react";
import CourseDetail from "./components/CourseDetail";
import CourseIndex from "./components/CourseIndex";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchCurrentStudent } from './APIs/students';

class App extends Component {
  state = {
    currentStudent: null,
  };

  refreshCurrentStudent = async () => {
    const currentStudent = await fetchCurrentStudent();
    this.setState({
      currentStudent,
    });
  };

  componentDidMount = async () => {
    await this.refreshCurrentStudent();
  };

  render() {

    const student = this.state.currentStudent

    return (
      <Router>
        <div>
          <Switch>

            <Route
              path="/courses"
              exact
              render={props => (
                <CourseIndex {...props} currentStudent={ student } />
              )}
            />

            <Route
              path="/courses/:id"
              exact
              render={props => (
                <CourseDetail {...props} currentStudent={ student } />
              )}
            />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;