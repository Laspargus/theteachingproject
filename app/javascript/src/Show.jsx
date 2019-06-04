import React, { Component } from "react";
import { fetchCourse } from "./APIs/courses";

export class Show extends Component {
  constructor(props) {
    super(props);
    let match = props.match;
    this.state = {
      course: [],
      course_id: match.params.id
    };
  }

  refreshCourse = async () => {
    const course = await fetchCourse(this.state.course_id);
    this.setState({
      course: course,
    });
  }

  componentDidMount = async () => {
    await this.refreshCourse();
  };

  render() {
    return (
      <div>
        <div>
          {this.state.course_id}
          {this.state.course.title}
        </div>
      </div>
    );
    
  }
}
