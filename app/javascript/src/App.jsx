import React, { Component } from 'react';
import { fetchCourses } from './APIs/courses';
import { addCourse } from './APIs/courses';


class App extends Component {
  state = {
  	courses: [],
  	count : 0,
  	title: "",
  	description: "",
  }


  refreshCourseCount = async () => {
    const courses = await fetchCourses();
    this.setState({
      courses: courses.courses,
    });
    
  }

  handleChangeDescription = (e) => {
  	this.setState({
  		description: e.target.value,
  	});
  }

  handleChangeTitle = (e) => {
  	this.setState({
  		title: e.target.value,
  	});
  }

  handleSubmit = async e =>{
  	e.preventDefault();
  	
  

  	const NewCourse = await addCourse(this.state.title, this.state.description);
  	console.log(NewCourse)

  	this.setState({
  		course : [NewCourse, ...this.state.courses],
  	});
  }

 
  componentDidMount = async () => {
    await this.refreshCourseCount();
  };

  render() {
  
    return (
    	<div className="container">

    	 <div>
          <h1>Création d'un cours :</h1>
          <div>
            <div className="form-group row">    
              <div className="col-sm-10">
                <form onSubmit={this.handleSubmit}	>
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

     	 <p> Course counts : {this.state.courses.length} </p>
	     <div>
		     <ul className="list-group">
	  			 {this.state.courses.map((course, i) =>
		      		<li key={i} className="list-group-item">{course.title} 
		      			<a className="btn btn-success" href={'/courses/' + course.id}>Show</a>
		      		</li>
		   	   )}
				 </ul>
	      </div>
      </div>
    );
  }
}

export default App;