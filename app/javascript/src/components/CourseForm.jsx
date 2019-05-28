import React, { Component } from "react";
import { addCourse } from "../APIs/courses";

export default class CourseForm extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      title: '',
      description:'',
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
    const newCourse = await addCourse(this.state.title, this.state.description);
    this.props.onSubmit(newCourse);
    this.setState({
      title: '',
      description:'',
    });
  }

  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="form-group row">    
            <div className="col-sm-10">
              <form onSubmit={this.handleSubmit}>
                  <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChangeTitle} className="form-control form-control-lg" placeholder="Title"/>
                  <input type="text" name="description" id="description" value={this.state.description} onChange={this.handleChangeDescription} className="form-control form-control-lg" placeholder="Description"/>
                  <input type="submit" value="Create" className="btn btn-primary mb-2" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
