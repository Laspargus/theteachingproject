import React, { Component } from "react";
import Course from './components/Course';
import { Link } from 'react-router-dom';

export class Show extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    console.log("zzz");
    console.log(this.props)
    console.log("zzz");
    return (
      <div>
        <div>
          show
          {this.props.courses}
        </div>
      </div>
    );
  }
}
