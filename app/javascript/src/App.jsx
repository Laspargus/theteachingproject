import React, { Component } from "react";
import { fetchCourses } from "./APIs/courses";
import { addCourse } from "./APIs/courses";

class App extends Component {
  state = {
    courses: [],
    title: "",
    description: ""
  };

  refreshCourseCount = async () => {
    const courses = await fetchCourses();
    this.setState({
      courses: courses.courses
    });
  };

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
    this.setState({
      courses: [newCourse, ...this.state.courses],
      title: '',
      description: '',
    })
  }

  componentDidMount = async () => {
    await this.refreshCourseCount();
  };

  render() {
    return (
      <div>
        <p>Bonjour Unknown. Course count: {this.state.courses.length} </p>
        <div className="container mt-5">
          <div className="form-group row">    
            <div className="col-sm-10">
              <form onSubmit={this.handleSubmit}>
                  <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChangeTitle} className="form-control form-control-lg" placeholder="Title"/>
                  <input type="text" name="description" id="description" value={this.state.description} onChange={this.handleChangeDescription} className="form-control form-control-lg" placeholder="Description"/>
                  <input type="submit" value="Create" className="btn btn-primary mb-2" onClick={this.onHandleSubmit}/>
              </form>
            </div>
          </div>
        </div>
        <div>
          {this.state.courses.map(course => {
            return <section key={course.id} className="course">{course.title}</section>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
