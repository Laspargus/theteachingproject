import React, { Component } from "react";
import { updateCourse } from "../APIs/courses";

export default class CourseEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: this.props.course.title,
      description:this.props.course.description,
     };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const updatedCourse = await updateCourse(this.props.course.id, this.state.title, this.state.description);
    this.props.updateCourse(updatedCourse);
    this.props.onSubmit();
  }

  render() {
    const { toggleEdit } = this.props;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" id="title" defaultValue={this.state.title} onChange={this.handleChangeTitle} className="form-control form-control-lg" placeholder="Title"/>
          <input type="text" name="description" id="description" defaultValue={this.state.description} onChange={this.handleChangeDescription} className="form-control form-control-lg" placeholder="Description"/>
          <input type="submit" value="Edit" className="btn btn-primary mb-2" />
          <button onClick={toggleEdit}>cancel</button>
        </form>
      </div> 
    )
  }
}
