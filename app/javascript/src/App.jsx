import React, { Component } from "react";
import { Show } from "./Show";
import { Index } from "./Index";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/courses" exact component={Index} />
            <Route path="/courses/:id" component={Show} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

