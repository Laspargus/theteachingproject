import React, { Component } from 'react';
import { updateStep } from '../APIs/steps';


export default class StepEdit extends Component {

  constructor(props) {
	  super(props);

	  this.state = { 
	    title: '',
	    description:'',
	  };
    
  	this.handleSubmit = this.handleSubmit.bind(this);
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
  	const {course, step} =this.props
  	console.log('mon cours', course, 'mon étape', step);
    e.preventDefault();
    const updatedStep = await updateStep(course.id, step.id, this.state.title, this.state.description);
    console.log(updatedStep)
    this.props.updateStep(updatedStep);
    this.props.onSubmit();
  }


  renderButtons = () => {
    const { toggleEdit  } = this.props;
      return (
        <span>
          <button
            className="m-2 btn btn-info"
            role="button"
            tabIndex={0}
            onClick={toggleEdit}
            onKeyPress={toggleEdit} 
           >
         		Cancel
          </button>

      </span>
      );
    }
  

  render() {

    const { step, course, updateCourse, toggleEdit, onSubmit, currentTeacher} = this.props;
	    return(
	       <div className="block">
	        <form onSubmit={this.handleSubmit}>
	          <label htmlFor="Title">
	            <input type="text" 
	              name="title" 
	              id="title" 
	              className="form-control"
	              placeholder={step.title}
	              value={this.state.title}
	              onChange={this.handleChangeTitle}
	            />
	          </label>
	          <label htmlFor="Description">
	            <input type="text" 
	              name="description" 
	              id="description" 
	              className="form-control"
	              placeholder={step.description}
	              value={this.state.description}
	              onChange={this.handleChangeDescription}
	              required
	            />
	          </label>

	            <input type="submit"
	              value="Update!"
	              className="btn btn-success"
	              required
	            />
	           </form>
	         
	          {this.renderButtons()}
	    </div>
	    );
  }
}