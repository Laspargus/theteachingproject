import React from 'react';
import { removeStep } from '../APIs/steps';
import StepEdit from './StepEdit';

class Step extends React.Component {

	state = {
	      edit: false,
	    };


	toggleEdit = () => {
	    const { edit } = this.state;
	    this.setState({
	      edit: !edit,
	    });
	  };



  handleRemove = async () => {
    const { course, step } = this.props;
    const steptoremove = await removeStep(course.id, step.id);
    this.props.removeStep(steptoremove);
  
  };

  renderButtons = () => {
    const { course, toggleEdit, updateStep, removeStep, step } = this.props;
		const { edit } = this.state;
	

    if (edit){
    	return (
    	<StepEdit 
    	course = {course}
    	step = {step}
    	onSubmit = {this.toggleEdit}
    	updateStep = {updateStep}
    	/>
    	);
    }
    
    else {
      return (
        <span>
         {step.title} -  {step.description}    

          <a
            className="m-2 btn btn-info"
            role="button"
            tabIndex={0}
            onClick={this.toggleEdit}
            onKeyPress={this.toggleEdit} >
          <i className="fas fa-edit"></i>
          </a>    
          <a
            className="m-2 btn btn-danger"
            onClick={this.handleRemove}
            onKeyPress={this.handleRemove}
            role="button"
            tabIndex={0}
          ><i className="far fa-trash-alt"></i>
          </a>
      </span>
      ); 
    }
  };

render() {
    const { step, removeStep } = this.props;
    return (
      <div className="post">      
          {this.renderButtons()}    
      </div>
     
    );
  }
}

export default Step;