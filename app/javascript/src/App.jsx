import React, { Component } from "react";
import CourseDetail from "./components/CourseDetail";
import CourseIndex from "./components/CourseIndex";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
           <Route path="/courses" exact component = {CourseIndex} />
           <Route path="/courses/:id" component = {CourseDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;