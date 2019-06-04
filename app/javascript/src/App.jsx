import React, { Component } from "react";
import CourseShow from "./components/CourseShow";
import CourseIndex from "./components/CourseIndex";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/courses" exact component={CourseIndex} />
            <Route
              path="/courses/:id"
              render={(props) => (<Home {...props} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;