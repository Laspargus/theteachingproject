import React, { Component } from 'react';
import { fetchCourses } from './APIs/courses';

export default class App extends Component {
	state = {
		courses: [],
	}

	refreshCourses = async () => {
		const courses = await fetchCourses();
		this.setState({
			courses: courses.courses
		});
	}

	componentDidMount = async () => {
		await this.refreshCourses();
	}

  render() {
    return (
    	<div>
    		<p>Hey voici nos {this.state.courses.length} cours affichés en React</p>
    		<div>
    			{this.state.courses.map(course => 
    				<div>
    					<span className="font-weight-bold">
    						{course.title}
    					</span>
    					{' '} - Pr. {course.teacher.first_name} {course.teacher.last_name}
    					<a href="" key={course.id} className='btn btn-success mt-3 ml-2'>
    						show
    					</a>
    				</div>
    			)}
    		</div>
    	</div>
    );
  }
}

// <%= link_to "Show",course_path(course.id), class:'btn btn-success' %>