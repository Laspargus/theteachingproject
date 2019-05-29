import React, { Component } from "react";

export default class CourseEdit extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = async e => {
    e.preventDefault()
    const newCourse = await addCourse(this.state.title, this.state.description);
    this.props.onSubmit(newCourse);
    this.setState({
      title: '',
      description:'',
    });
  }

  render() {
    const { course, toggleEdit } = this.props;
    return(
      <div>
        <input type="text" name="title" id="title" defaultValue={course.title} className="form-control form-control-lg" placeholder="Title"/>
        <input type="text" name="description" id="description" defaultValue={course.description} className="form-control form-control-lg" placeholder="Description"/>
        <button onClick={toggleEdit}>cancel</button>
        <input type="submit" value="edit" className="btn btn-primary mb-2" />
      </div> 
    )
  }
}
