import React from 'react';
import { fetchSteps } from '../APIs/steps';
import StepList  from './StepList';
import StepCreate from './StepCreate';

class CourseDetail extends React.Component {

 constructor(props) {
    super(props);
    this.state = { 
    	steps: [],
    };

     this.addStepToList = this.addStepToList.bind(this);
     this.removeStepFromList = this.removeStepFromList.bind(this);
     this.updateStep = this.updateStep.bind(this);
  };

 componentDidMount(){
    this.refreshSteps();
  }

  refreshSteps = async () => {
  	const {course} = this.props
    const steps = await fetchSteps(course.id);

    this.setState({
      steps: steps.steps,
    }); 
  }

  addStepToList(newStep) {
    this.setState({
       steps : [newStep, ...this.state.steps],
    }); 
  }

  removeStepFromList( steptoremove ) {
  	console.log(steptoremove);
  	const { steps } = this.state;
    this.setState({
      steps: steps.filter(step => steptoremove.id !== step.id)
    });
  }

  updateStep(updatedStep) {
    const { steps } = this.state;
    this.setState({
      steps: steps.map(step =>
        step.id === updatedStep.id ? updatedStep : step
      ),
    });
  };

	render(){
    const { steps } = this.state;
    const { course } =this.props;
   

    return (

      <div className="container"> 
      	<div className="card p-2 m-2">
					<div className="card-body">
					 <h2>{course.title} - {course.description}</h2>
					
        	 <div className="form-group row">    
           	<StepCreate
              	onSubmit={this.addStepToList}
              	course={ course }
              />
          	</div>
						<div>
             <StepList
               steps = {steps}
               removeStep = {this.removeStepFromList}
               course = {course}
               updateStep = {this.updateStep}
               />
          	</div>
        	</div>
				</div>
			</div>	
    );
  }
}


export default CourseDetail;