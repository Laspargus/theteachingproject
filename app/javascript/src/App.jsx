import React, { Component } from 'react';
import { fetchCourses, addCourse } from './APIs/courses';

export default class App extends Component {
	state = {
		courses: [],
    description: "",
    title: ""
	};

	refreshCourses = async () => {
		const courses = await fetchCourses();
		this.setState({
			courses: courses.courses
		});
	}

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const newCourse = await addCourse(this.state.title, this.state.description);
    this.setState ({
      courses: [newCourse, ...this.state.courses],
    })
  }

	componentDidMount = async () => {
		await this.refreshCourses();
	}

  render() {
    return (
    	<div>
        <h1>Courses#index</h1>
    		<p>Hey voici nos {this.state.courses.length} cours affichés en React</p>
    		<div>
    			{this.state.courses.map((course, i) => 
    				<div key={`course_` + i} >
    					<span className="font-weight-bold">
    						{course.title}
    					</span>
    					{' '} - Pr. {course.teacher.first_name} {course.teacher.last_name}
    					<a href="" className='btn btn-success mt-3 ml-2'>
    						show
    					</a>
    				</div>
    			)}
    		</div>
        <div>
          <h1>Création d'un cours :</h1>
          <div>
            <div className="form-group row">    
              <div className="col-sm-10">
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="Title">
                    <input type="text" 
                      name="title" 
                      id="title" 
                      className="form-control"
                      placeholder="Title"
                      value={this.state.title}
                      onChange={this.handleChangeTitle}
                    />
                  </label>
                  <label htmlFor="Description">
                    <input type="text" 
                      name="description" 
                      id="description" 
                      className="form-control"
                      placeholder="Description"
                      value={this.state.description}
                      onChange={this.handleChangeDescription}
                    />  
                  </label>
                  <div>
                    <input type="submit"
                      value="Create!"
                      className="btn btn-success"
                    />                
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    	</div>
    );
  }
}